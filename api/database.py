from pymongo import MongoClient, TEXT
from config import MONGO_URI,PROD


client = MongoClient(MONGO_URI)
db = client["production" if PROD else 'development']


def set_config():
    db.links.create_index("hash", unique=True)
    db.users.create_index([("username", TEXT), ("email", TEXT)], unique=True)
