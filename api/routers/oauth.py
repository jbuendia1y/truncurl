from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm

from oauth import get_current_user
from services.auth import AuthService
from models.auth import LoginResponse
from models.user import CreateUser, User


router = APIRouter()


@router.post('/login')
def login(form: OAuth2PasswordRequestForm = Depends()) -> LoginResponse:
    auth_service = AuthService()
    data = auth_service.login(form.username, form.password)
    return data


@router.post('/register')
def register(body: CreateUser):
    auth_service = AuthService()
    data = auth_service.register(body)
    return data


@router.get('/profile')
def profile(user: User = Depends(get_current_user)) -> User:
    return user
