.PHONY: help setup setup-dev build up logs down migrate clean

TARGET := production-pseudo

help:
	@cat $(firstword $(MAKEFILE_LIST))

setup: \
	.env

setup-dev: \
	$(eval TARGET := development) \
	setup

build: docker-compose.yml
	docker-compose build

up:
	docker-compose up -d

logs:
	docker-compose logs -f

down:
	docker-compose down

migrate:
	# ...

.env:
	echo "TARGET=$(TARGET)" > $@

clean:
	docker-compose down -v
	rm -rf .env