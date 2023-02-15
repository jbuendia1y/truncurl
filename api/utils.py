import hashlib
import bcrypt
from jose import jwt

from config import SECRET_KEY


def hash_str(s:str,alg:str = None):
    if not alg:
        alg = "md5"
    
    hash_obj = getattr(hashlib,alg)(bytes(s,"utf-8"))
    return hash_obj.hexdigest()


def create_access_token(data: dict):
    to_encode = data.copy()

    token = jwt.encode(to_encode, SECRET_KEY, algorithm="HS256")
    return token

def decode_access_token(token: str):
    return jwt.decode(token, SECRET_KEY, algorithms="HS256")


def compare_passwords(password: str, db_password: str):
    is_equal = bcrypt.checkpw(
        bytes(password, "utf-8"), 
        bytes(db_password,"utf-8")
        )
    return is_equal


def hash_password(password: str):
    b_password = bytes(password, "utf-8")
    salt = bcrypt.gensalt(rounds=10)
    
    hashed = bcrypt.hashpw(password=b_password, salt=salt)
    return hashed.decode("utf-8")
    