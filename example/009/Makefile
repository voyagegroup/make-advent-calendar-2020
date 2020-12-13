.PHONY: help dir notdir realpath abspath wildcard

help:
	@cat $(firstword $(MAKEFILE_LIST))

dir:
	echo $(dir src/main.c Makefile)

notdir:
	echo $(notdir src/main.c Makefile)

realpath:
	echo $(realpath src/main.c Makefile)

abspath:
	echo $(abspath src/main.c Makefile)

wildcard:
	echo $(wildcard *e)