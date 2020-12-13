---
slug: "/012-pattern-rules"
date: "2020-12-12"
title: "パターンルール"
---

# パターンルール

ルールの target と prerequisites には `%` を含むパターンが書けます。
```makefile
%.o : %.c ; recipe...
```

target の `%` と prerequisites の `%` は一致していなければならず、この例では `main.c` が存在しないので `main.o` は作れません。
`hoge.c` が存在するため `hoge.o` は作れます。
```makefile
%.o: %.c
	gcc $< -o $@
```
```shell
$ ls *.c
hoge.c
$ make main.o
make: *** No rule to make target 'main.o'.  Stop.
$ make hoge.o
gcc hoge.c -o hoge.o
```

prerequisites なしで target のみでも書けますし、後方一致も書けますが、部分一致は書けません。
```makefile
%.echo:
	echo $@

fuga.%: hoge.%
	ln -s $< $@

%hoge%:
	echo $@ $<
```
```shell
$ make vaa.echo
echo vaa.echo
vaa.echo
$ make fuga.c
ln -s hoge.c fuga.c
$ make fuga.o
gcc fuga.c -o fuga.o
$ make _hoge_
make: *** No rule to make target '_hoge_'.  Stop.
```


## リンク
* [https://www.gnu.org/software/make/manual/html_node/Pattern-Intro.html](https://www.gnu.org/software/make/manual/html_node/Pattern-Intro.html)