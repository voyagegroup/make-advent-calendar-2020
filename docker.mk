.PHONY: help setup dependencies bash clean

NAME := tamakiii/make-advent-calendar-2020
USER := node
PORT_HTTP_HOST := 8000
PORT_HTTP_GUEST := 8000
PORT_SOCKET_IO_HOST := 36543
PORT_SOCKET_IO_GUEST := 36543

help:
	@cat $(firstword $(MAKEFILE_LIST))

setup: \
	dependencies

dependencies:
	type docker

build: Dockerfile
	docker build -t $(NAME) .

bash:
	docker run -it --rm \
		--network=bridge \
		-u $(USER) \
		-p $(PORT_HTTP_HOST):$(PORT_HTTP_GUEST) \
		-p $(PORT_SOCKET_IO_HOST):$(PORT_SOCKET_IO_GUEST) \
		-v $(PWD):/work \
		-w /work \
		$(NAME) $@

attach:
	docker exec -it $$(docker ps -qf ancestor=$(NAME)) bash

clean:
	docker image rm $(NAME)
