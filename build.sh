export NODE_CONTAINER=app-server


result=$(docker images -q $NODE_CONTAINER)

if [[ -n "$result" ]]; then
  echo "$NODE_CONTAINER image exists"
else
  echo "$NODE_CONTAINER image doesn't exist"
  docker build -t $NODE_CONTAINER .
fi

