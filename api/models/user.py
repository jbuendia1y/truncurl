from pydantic import BaseModel


class User(BaseModel):
    id: str

    first_name: str | None = None
    last_name: str | None = None

    username: str
    email: str
    password: str


class CreateUser(BaseModel):
    first_name: str | None = None
    last_name: str | None = None

    username: str
    email: str
    password: str
    