.PHONY: help setup install develop clean

help:
	@cat $(firstword $(MAKEFILE_LIST))

setup: \
	dependencies

dependencies:
	type node
	type npm

install:
	npm install

develop:
	npx --no-install gatsby develop --host=0.0.0.0 --port=8000

clean:
	rm -rf node_modules
