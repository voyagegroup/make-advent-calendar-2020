---
slug: "/002-phony-target-and-prerequisites"
date: "2020-12-02"
title: "偽のターゲットと前提条件"
---

# 偽のターゲットと前提条件

タスクランナー的な make の用途には、本来のビルドツールとしての使い方の知識はほとんど必要ありません。
ですが、落とし穴を回避したり正しく使うためには正しい理解があるとよいです。
「偽のターゲット（Phony Target）」と「前提条件（Prerequisites）」が分かると make の特性を生かしたルールが書けるはずです。

## up to date

陥りやすい落とし穴のひとつが `up to date` です。
たとえばこの Makefile は `make install` すると当然 `command` を出力します。
```makefile
install:
	echo "hello" > install
```
```shell
$ make install
echo "hello" > install
$ ls install
install
$ cat install
hello
```

しかしここで再度 `make install` するとどうでしょうか。
`make: 'install' is up to date.` となってしまい、`command` が実行されません。これはどういうことでしょうか？
```shell
$ make install
make: 'install' is up to date.
```

make はターゲット名と同名のファイルが存在すると、既に成果物の生成が済んでいて再実行が不要と判断してコマンドを実行しません。
そのため、例えば `test` ディレクトリがあるプロジェクトで `make test` をしたくても `up to date` になってしまうわけです。

---


## PHONY:

こうした「成果物の生成に関わらないターゲット」を書くにはどうしたらいいでしょう？

答えは、ターゲットを「偽のターゲット（[Phony Target](https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html)）」にすることです。
```makefile
.PHONY: install

install:
	echo "hello" > install
```

こうすることでターゲットと同名のファイルの有無に関わらずコマンドが実行されます（※1）。
```shell
$ make install
echo "hello" > install
$ make install
echo "hello" > install
```

---

## 前提条件

本来のビルドツールとしての使い方をする場合にも、同様に `PHONY:` を書くかというと、そうではありません。

これは C言語のプログラムをビルドする Makefile の例です。
`main.o: main.c` の `:` の右側が「必要条件（[Prerequisites](https://www.gnu.org/software/make/manual/html_node/Automatic-Prerequisites.html)）」です。
```makefile
main.o: main.c
	gcc -o main.o main.c
```

このように必要条件が設定されている場合も、`main.o` が生成されると `up-to-date` になります。
```shell
$ make main.o
gcc -o main.o main.c
$ ./main.o
hello, girls
$ make main.o
make: 'main.o' is up to date.
```

しかし、必要条件のタイムスタンプが更新されると「成果物の再生成が必要」と判断してコマンドを実行します。
```shell
$ touch main.c
$ make main.o
gcc -o main.o main.c
```

このように何らかの成果物を作る場合は、前提条件のタイムスタンプを考慮する挙動を活かし、
そういった制御が不要であれば偽のターゲットとして定義する、というのがベーシックなタスクランナー的な Makefile の書き方です。

<!--
※1. `.PHONY:` には複数のターゲットがスペース区切りで書けます。
```makefile
.PHONY: install test
```

また、複数行書くとスペース区切りのリストに要素を追加する挙動になるためこうも書けます。
```makefile
.PHONY: install
.PHONY: test
```

どこに書いてもいいのでターゲットごとにまとめることも出来ます。
```makefile
.PHONY: install
install:
	...

.PHONY: test
test:
	...
```
-->