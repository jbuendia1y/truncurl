docker stop mymongodb
docker rm mymongodb

# MongoDB
docker \
    run \
    --name mymongodb \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=example \
    -p 27017:27017 \
    -v "$HOME/url-shortener/data/mongodata:/data/db" \
    -d mongo

docker stop myredisdb
docker rm myredisdb

# RedisDB
docker \
    run \
    --name myredisdb \
    -p 6379:6379 \
    -d redis/redis-stack:latest