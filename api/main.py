import uvicorn
import database
import config
from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import datetime
from typing import List

from models.link import CreateLink, Link, FilterLinks
from models.user import CreateUser, User
from models.auth import LoginResponse
from services.link import LinksService
from services.auth import AuthService

import listeners
from events.links import LinkEventType, LinkEvent, LinkEventData, emit_link_event



oauth_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
optional_oauth_scheme = OAuth2PasswordBearer(tokenUrl="auth/login", auto_error=False)
app = FastAPI()


def get_current_user(token: str = Depends(oauth_scheme)):
    auth_service = AuthService()
    user = auth_service.profile(token)
    return user

def get_optional_user(token: str = Depends(optional_oauth_scheme)):
    if not token:
        return None
      
    auth_service = AuthService()
    user = auth_service.profile(token)
    return user


@app.get('/')
def home():
    return "Hello world"


@app.post('/auth/login')
def login(form: OAuth2PasswordRequestForm = Depends()) -> LoginResponse:
    auth_service = AuthService()
    data = auth_service.login(form.username, form.password)
    return data


@app.post('/auth/register')
def register(body: CreateUser):
    auth_service = AuthService()
    data = auth_service.register(body)
    return data


@app.get('/auth/profile')
def profile(user: User = Depends(get_current_user)) -> User:
    return user


@app.get('/links')
def get_links(user: User = Depends(get_current_user)) -> List[Link]:
    link_service = LinksService()
    filter = FilterLinks(user_id=user.id)
    data = link_service.find(filter)
    return data


@app.get('/links/analytics')
def analytics():
    pass


@app.post('/links')
def create_link(body: CreateLink, request: Request, user: User | None = Depends(get_optional_user)) -> Link:
    link_service = LinksService()

    body.user_id = user.id if user else None
    if not body.user_id:
        body.created_at = datetime.now()

    data = link_service.create(body)

    # Event
    event = LinkEvent(
        event_type=LinkEventType.LINK_CREATED,
        data=LinkEventData(
            ip=request.client.host,
            link= data,
            user=user,
            user_id=body.user_id
        )
    )
    emit_link_event(LinkEventType.LINK_CREATED, event)

    return data


@app.get('/links/{hash}')
def get_link(hash: str) -> Link:
    link_service = LinksService()
    data = link_service.find_one(hash)
    if not data:
        raise HTTPException(status_code=404, detail="Cannot found this link")

    return data


if __name__ == "__main__":
    database.set_config()
    app_config = {}

    if not config.PROD:
        app_config = {
            "host": "0.0.0.0",
            "port": 3000,
        }

    # Setup listeners
    listeners.setup_listeners()

    uvicorn.run("main:app" if not config.PROD else app, **app_config)