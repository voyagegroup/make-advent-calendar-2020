---
slug: "/006-default-target"
date: "2020-12-06"
title: "デフォルトターゲット"
---

# デフォルトターゲット

make は `make all` のようにターゲットを指定せずただ `make` だけでも実行できます。
その際に何が実行されるかというと、「デフォルトゴール（[`.DEFAULT_GOAL`](https://www.gnu.org/software/make/manual/html_node/Special-Variables.html#:~:text=.DEFAULT_GOAL)）」に指定されたターゲットが実行されます。

```makefile
.PHONY: help

.DEFAULT_GOAL := help

help:
	echo $@
```
```shell
$ make -f 01.mk
echo help
help
```

`.DEFAULT_GOAL` は明記しなければ Makefile 内の最初のターゲットが自動的に設定されます。
```makefile
.PHONY: help all

$(info default goal is $(.DEFAULT_GOAL))

help:
	echo $@

$(info default goal is $(.DEFAULT_GOAL))

all:
	echo $@

$(info default goal is $(.DEFAULT_GOAL))
```
```shell
$ make -f 02.mk
default goal is
default goal is help
default goal is help
echo help
help
```

そのため、ターゲットの指定なしで実行されて構わないターゲットを最初に書くようにすれば、`.DEFAULT_GOAL` を明記する必要はありません。
```makefile
.PHONY: help

help:
	echo $@
```
```shell
$ make -f 03.mk
echo help
help
```

[`$(info ...)`](https://www.gnu.org/software/make/manual/html_node/Make-Control-Functions.html#:~:text=$(info%20text%E2%80%A6)) は make の関数です。ただ引数を出力するだけで、Makefile の動作を確認する際に使います。


## 自身を cat する help

よくわからずターゲットの指定なしで `make` を叩いてしまうときのために、デフォルトゴールとして「自身を cat する help ルール」をの先頭に書くのはよいプラクティスだと思います。
副作用がないですし、内容を読めば次のステップに進む情報を得られるからです。
```makefile
.PHONY: help build

help:
	cat 04.mk

build:
	# command ...
```
```shell
$ make -f 04.mk
cat 04.mk
.PHONY: help build

help:
        cat 04.mk

build:
        # command ...
```

明示的に cat するファイル名を書くのはメンテナンス性がいまいちですし、
実行結果に `cat 04.mk` の行が出てくるのも内容を読むのには邪魔です。

そこで使うのが `@` `$(firstword ...)` `$(MAKEFILE_LIST)` です。
これで出力が読みやすくなって、ファイル名が変わっても問題なく動くようになりました。
```makefile
.PHONY: help

help:
	@cat $(firstword $(MAKEFILE_LIST))

build:
	# command ...
```
```shell
$ make -f 05.mk
.PHONY: help

help:
        @cat $(firstword $(MAKEFILE_LIST))

build:
        # command ...

```

## @

`@` は「レシピ出力（[Recipe Echoing](https://www.gnu.org/software/make/manual/html_node/Echoing.html)）を抑制する記号です。
通常 make はコマンドを出力しますが、`@` で始まるコマンド行は出力しません。

ただ、コマンドを出力するのがデフォルトの挙動なので、特別な理由がない限りつけない方がよいでしょう。
すべての行に `@` をつけて回るのはツールの使い方として間違っていないでしょうか。


## $(MAKEFILE_LIST)

[`$(MAKEFILE_LIST)`](https://www.gnu.org/software/make/manual/html_node/Special-Variables.html) は make がパースした Makefile のリストです。
通常は実行対象の Makefile だけが与えられますが、他の Makefile を [`include`](https://www.gnu.org/software/make/manual/html_node/Include.html) した場合、複数のファイル名が与えられます。

```makefile
.PHONY: info run

info:
	echo $(MAKEFILE_LIST)

run:
	echo NAME=$(NAME)
	echo HOGE=$(HOGE)
	echo FUGA=$(FUGA)

include hoge.mk fuga.mk
```
```makefile
# hoge.mk
NAME := hoge
HOGE := hoge
```
```makefile
# fuga.mk
NAME := fuga
FUGA := fuga
```
```shell
$ make -f 06.mk info
echo  06.mk hoge.mk fuga.mk
06.mk hoge.mk fuga.mk
$ make -f 06.mk run
echo NAME=fuga
NAME=fuga
echo HOGE=hoge
HOGE=hoge
echo FUGA=fuga
FUGA=fuga
```

## $(firstword ...)

[`$(firstword ...)`](https://www.gnu.org/software/make/manual/html_node/Text-Functions.html#:~:text=$(firstword%20names%E2%80%A6)) はリストから最初の要素を取り出す関数です。
```makefile
.PHONY: list

LIST := hoge fuga vaa

list:
	echo $(firstword $(LIST))
```
```shell
$ make -f 07.mk list
echo hoge
hoge
```

`$(MAKEFILE_LIST)` はパースした順にファイル名を格納します。cat したいのはユーザが実行した Makefile であることがほとんどなので、`@cat $(firstword $(MAKEFILE_LIST))` が常用句になっています。

多少複雑なので最初は `@cat Makefile` でもよいと思いますが、慣れると脳死で書き始められて便利です。