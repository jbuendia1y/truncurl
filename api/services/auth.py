from fastapi import HTTPException

from models.auth import LoginResponse
from models.user import CreateUser, User

from .users import UsersService

import utils
import datetime


class AuthService:
    users_service = UsersService()

    def create_token(self, user: User) -> str:
        data = {
            "user_id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=15)
        }

        token = utils.create_access_token(data)
        return token

    def login(self, username: str, password: str) -> LoginResponse:
        user = self.users_service.find_one_by({"username": username})
        if not user:
            raise HTTPException(status_code=400, detail="Wrong credentials")

        is_equal = utils.compare_passwords(password, user.password)
        if not is_equal:
            raise HTTPException(status_code=400, detail="Wrong credentials")

        token = self.create_token(user)

        return LoginResponse(access_token=token, user=user)

    def register(self, dto: CreateUser):
        dto.password = utils.hash_password(dto.password)
        return self.users_service.create(dto)

    def profile(self, access_token: str) -> User:
        token = utils.decode_access_token(access_token)
        user_id = token['user_id']

        user = self.users_service.find_one(user_id)
        return user
