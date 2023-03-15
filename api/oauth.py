from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from services.auth import AuthService

oauth_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")


def get_current_user(token: str = Depends(oauth_scheme)):
    auth_service = AuthService()
    user = auth_service.profile(token)
    return user
