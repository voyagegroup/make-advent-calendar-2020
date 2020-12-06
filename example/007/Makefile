.PHONY: help test build

help:
	@cat $(firstword $(MAKEFILE_LIST))

test:
	test 0 = 0
	test 1 != 1 # would fail
	test 2 = 2
