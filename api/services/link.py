from models.link import Link, CreateLink, FilterLinks
from database import db
from typing import List
from bson import ObjectId

from fastapi import HTTPException

import pymongo.errors


class LinksService:
    collection = db.links

    def adapter(self, doc):
        return Link(
            name=doc['name'],
            url=doc['url'],
            hash=doc['hash'],
            user_id=doc['user_id'],
            created_at=doc['created_at']
        )

    def create(self, body: CreateLink) -> Link:
        dto = body.hash_url()
        try:
            doc = self.collection.insert_one(dto.dict())
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

    def find_one_by_id(self, id:str):
        doc = self.collection.find_one({ "_id": ObjectId(id) })
        if not doc:
            return None
        
        return self.adapter(doc)

    def get_analytics(self):
        pass