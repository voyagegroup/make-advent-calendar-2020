.PHONY: help clean
.PRECIOUS: %.o

help:
	@cat $(firstword $(MAKEFILE_LIST))

%.o: %.c
	gcc $< -o $@

%.echo:
	echo $@

fuga.%: hoge.%
	ln -s $< $@

%hoge%:
	echo $@ $<

clean:
	rm -f *.o
	rm -rf fuga.*