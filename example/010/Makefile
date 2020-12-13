.PHONY: help word firstword lastword filter

help:
	@cat $(firstword $(MAKEFILE_LIST))

word:
	echo $(word 1,hoge fuga vaa)
	echo $(word 2,hoge fuga vaa)
	echo $(word 3,hoge fuga vaa)

firstword:
	echo $(firstword hoge fuga vaa)

lastword:
	echo $(lastword hoge fuga vaa)

filter:
	echo $(filter h% v%,hoge fuga vaa)