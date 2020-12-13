## How to use
~~~sh
make -f docker.mk setup-dev
make -f docker.mk build up
make -f docker.mk down
~~~

## Basic usages of docker-compose
~~~sh
docker-compose ps [service]
docker-compose exec <service> <command>
docker-compose run --rm <service> <command>
~~~