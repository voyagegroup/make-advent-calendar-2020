.PHONY: help setup dependencies bash clean

NAME := tamakiii/make-advent-calendar-2020

help:
	@cat $(firstword $(MAKEFILE_LIST))

setup: \
	dependencies

dependencies:
	type docker

build: Dockerfile
	docker build -t $(NAME) .

bash:
	docker run -it --rm $(NAME) $@

clean:
	docker image rm $(NAME)
