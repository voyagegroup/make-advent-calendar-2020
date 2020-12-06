.PHONY: info run

info:
	echo $(MAKEFILE_LIST)

run:
	echo NAME=$(NAME)
	echo HOGE=$(HOGE)
	echo FUGA=$(FUGA)

include hoge.mk fuga.mk