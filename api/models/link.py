from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from enum import Enum
from models.user import User

import utils


class Link(BaseModel):
    name: Optional[str] = None
    url: str
    hash: str
    user_id: Optional[str] = None
    user: Optional[User] = None
    created_at: datetime


class CreateLink(BaseModel):
    url: str
    name: Optional[str] = None
    user_id: Optional[str] = None
    hash: Optional[str] = None
    created_at: Optional[datetime] = Field(default_factory=lambda: datetime.now())

    
    def hash_url(self):
        to_hash = self.url
        if self.user_id:
            to_hash += self.user_id

        self.hash = utils.hash_str(to_hash)
        return self

class FilterLinks(BaseModel):
    user_id: str