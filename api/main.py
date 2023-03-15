import uvicorn
import database
import config
from fastapi import FastAPI

import listeners
from routers import links, oauth

app = FastAPI()

app.include_router(oauth.router, prefix='/oauth', tags=['oauth'])
app.include_router(links.router, tags=['links'])


@app.get('/')
def home():
    return "Hello world"


if __name__ == "__main__":
    database.set_config()
    app_config = {}

    if not config.PROD:
        app_config = {
            "host": "0.0.0.0",
            "port": 3000,
            "reload": True,
        }

    # Setup listeners
    listeners.setup_listeners()

    uvicorn.run("main:app" if not config.PROD else app, **app_config)
