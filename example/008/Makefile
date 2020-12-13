.PHONY: help subst patsubst subst-ref comma

var := hoge fuga vaa
clist := hoge,fuga,vaa
comma := ,

help:
	@cat $(firstword $(MAKEFILE_LIST))

subst:
	echo $(subst og,xx,hoge)

patsubst:
	echo $(patsubst %a,%,hoge fuga vaa)

subst-ref:
	echo $(var:%a=%)

comma:
	echo $(firstword $(subst $(comma), , $(clist)))