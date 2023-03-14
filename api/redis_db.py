import redis
from config import REDIS_HOST, REDIS_PORT


redis_pool = redis.ConnectionPool(
    host=REDIS_HOST,
    port=REDIS_PORT,
    db=0
)

redis_client = redis.Redis(connection_pool=redis_pool)
