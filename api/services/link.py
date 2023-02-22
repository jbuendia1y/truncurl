from models.link import Link, CreateLink, FilterLinks
from models.user import User
from services.users import UsersService
from database import db
from typing import List
from bson import ObjectId

from fastapi import HTTPException

import pymongo.errors
# from events.links import emit_link_event, LinkEventType


class LinksService:
    collection = db.links
    users_service = UsersService()

    def adapter(self, doc):
        return Link(
            name=doc['name'],
            url=doc['url'],
            hash=doc['hash'],
            user_id=doc['user_id'],
            user=User(**doc['user']),
            created_at=doc['created_at']
        )

    def create_dto_addapted(self, dto: CreateLink) -> dict:
        dto = dto.hash_url()
        data = dto.dict()

        if not dto.user_id and dto.name:
            data.pop('name')

        if dto.user_id:
            user = self.users_service.find_one(dto.user_id)
            if not user:
                raise HTTPException(status_code=409, detail="Wrong user_id")
                
            data.update({ 
                "user": user.dict(), 
                "user_id": dto.user_id
            })
        return data


    def create(self, body: CreateLink) -> Link:
        try:
            dto = self.create_dto_addapted(body)
            doc = self.collection.insert_one(dto)
        except pymongo.errors.DuplicateKeyError as e:
            raise HTTPException(status_code=409, detail=e.details)

        return self.find_one_by_id(str(doc.inserted_id))

    def find(self, filter: FilterLinks) -> List[Link]:
        docs = self.collection.find(filter.dict())
        links = [self.adapter(doc) for doc in docs]
        return links
    
    def find_one(self, hash: str) -> Link:
        doc = self.collection.find_one({ "hash": hash })
        if not doc:
            return None

        link = self.adapter(doc)
        return link

    def find_one_by_id(self, id: str):
        doc = self.collection.find_one({ "_id": ObjectId(id) })
        if not doc:
            return None
        
        return self.adapter(doc)

    def get_analytics(self):
        pass
