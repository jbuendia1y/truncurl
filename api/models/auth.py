from pydantic import BaseModel
from .user import User


class LoginResponse(BaseModel):
    access_token: str
    user: User


class RegisterResponse(BaseModel):
    access_token: str
    user: User
