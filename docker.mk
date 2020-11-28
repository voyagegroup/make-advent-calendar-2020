.PHONY: help setup dependencies bash clean

NAME := tamakiii/make-advent-calendar-2020
HTTP_PORT_HOST := 8000
HTTP_PORT_GUEST := 8000

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
		-p $(HTTP_PORT_HOST):$(HTTP_PORT_GUEST) \
		-v $(PWD):/work \
		-w /work \
		$(NAME) $@

clean:
	docker image rm $(NAME)
