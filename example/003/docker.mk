.PHONY: setup dependencies build bash clean

NAME := voyagegroup/make-advent-calendar-2020/example/003

setup: \
	dependencies

dependencies:
	type docker

build: Dockerfile
	docker build -t $(NAME) .

bash:
	docker run -it --rm -v $(PWD):/work -w /work $(NAME) $@

clean:
	docker image rm $(NAME)
