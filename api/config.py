import os


PROD = True if os.environ.get("PROD", "True") == "True" else False
MONGO_URI = os.environ.get("MONGO_URI")
SECRET_KEY = os.environ.get("SECRET_KEY")
