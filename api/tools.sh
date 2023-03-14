docker rm mymongodb

# MongoDB
docker \
    run \
    --name mymongodb \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=example \
    -p 27017:27017 \
    -v "$(pwd)/data/mongodata:/data/db" \
    -d mongo

docker rm myredisdb

# RedisDB
docker \
    run \
    --name myredisdb \
    -p 6379:6379 \
    -d redis/redis-stack:latest