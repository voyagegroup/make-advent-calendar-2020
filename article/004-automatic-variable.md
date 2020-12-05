---
slug: "/004-automatic-variable"
date: "2020-12-04"
title: "自動変数"
---

# 自動変数

自動変数（[Automatic Variable](https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html)）は実行するルールが定まると make が自動的に設定する変数です。

タスクランナー的な用途で主に使うのは以下の5個です。

* `$@` ターゲットのファイル名を表します
* `$^` 必要条件（Prerequisite）を表します
* `$<` 必要条件の最初の1つを表します
* `$(@F)` ターゲットのファイル名を表します
* `$(@D)` ターゲットのディレクトリ名を表します


## $@ $% $<

以前出てきたC言語のプログラムをビルドする Makefile はこうでした。
```makefile
main.o: main.c
	gcc -o main.o main.c
```

これが自動変数を使うとこう書けます。重複した記述が減らせていい感じです。
```makefile
main.o: main.c
	gcc -o $@ $^
```
```shell
$ make main.o
gcc -o main.o main.c
$ ./main.o
religion
```

`$^` はターゲットに与えられたすべての必要条件を取るため、必要条件を加えると困ってしまうことがあります。
```makefile
.PHONY: hoge

main.2.o: main.c hoge
	gcc -o $@ $^

hoge:
	echo "do nothing"
```
```shell
$ make main.2.o
echo "do nothing"
do nothing
gcc -o main.2.o main.c hoge
clang: error: no such file or directory: 'hoge'
make: *** [Makefile:5: main.2.o] Error 1
```

そういったときは最初の必要条件だけを表す `$<` が使えます。
```makefile
main.3.o: main.c hoge
	gcc -o $@ $<
```
```shell
$ make main.3.o
echo "do nothing"
do nothing
gcc -o main.3.o main.c
```


## $(@F) $(@D)

`$(@F)` `$(@D)` はターゲットのファイル名とディレクトリ名です。
例えばディレクトリの下に生成物を作りたい場合、こんな風に書けます。
```makefile
bin/main.1.o: main.c
	mkdir -p $(@D)
	gcc -o $(@D)/$(@F) $<
```
```shell
$ make bin/main.1.o
mkdir -p bin
gcc -o binmain.1.o main.c
```

ですが、依存関係は必要条件に書くとルールが簡素にできるので、個人的に最近はあまり使わずこのように書くことが多いです。
bin を必要条件に書き、main.c を最初に配置して `$<` で gcc の infile に与えています。
```makefile
bin/main.2.o: main.c bin
	gcc -o $@ $<

bin:
	mkdir $@
```
```shell
$ make bin/main.2.o
mkdir bin
gcc -o bin/main.2.o main.c
```