.PHONY: help setup dependencies install develop build serve clean

help:
	@cat $(firstword $(MAKEFILE_LIST))

setup: \
	dependencies

dependencies:
	which node
	which npm

install: \
	node_modules

develop:
	npx --no-install gatsby develop --host=0.0.0.0 --port=8000

build: \
	public

serve:
	npx --no-install gatsby serve --host=0.0.0.0 --port=8000 --prefix-paths

public:
	npx --no-install gatsby build --prefix-paths

node_modules:
	npm install

clean:
	rm -rf .cache # https://github.com/gatsbyjs/gatsby/issues/13656#issuecomment-488374306
	rm -rf public
	rm -rf node_modules
