from models.user import CreateUser, User
from database import db
from bson import ObjectId


class UsersService:
    collection = db.users

    def adapter(self, doc):
        return User(
            id=str(doc['_id']),
            first_name=doc['first_name'],
            last_name=doc['last_name'],
            username=doc['username'],
            email=doc['email'],
            password=doc['password']
        )

    def create(self, data: CreateUser) -> User:
        doc = self.collection.insert_one(data.dict())
        return self.find_one(str(doc.inserted_id))

    def find(self):
        users = [self.adapter(doc) for doc in self.collection.find()]
        return users

    def find_one(self, user_id: str) -> User:
        doc = self.collection.find_one({"_id": ObjectId(user_id)})
        if not doc:
            return None
        return self.adapter(doc)

    def find_one_by(self, filter) -> User:
        doc = self.collection.find_one(filter)
        if not doc:
            return None
        return self.adapter(doc)
