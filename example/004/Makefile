.PHONY: hoge

main.o: main.c
	gcc -o $@ $^

main.2.o: main.c hoge
	gcc -o $@ $^

main.3.o: main.c hoge
	gcc -o $@ $<

hoge:
	echo "do nothing"

bin/main.1.o: main.c
	mkdir -p $(@D)
	gcc -o $(@D)/$(@F) $<

bin/main.2.o: main.c bin
	gcc -o $@ $<

bin:
	mkdir $@

clean:
	rm -rf main*.o
	rm -rf bin