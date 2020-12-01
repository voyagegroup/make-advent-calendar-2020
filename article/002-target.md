---
slug: "/001-makefile-in-2020"
date: "2020-12-02"
title: "ターゲット"
---

# ターゲット

タスクランナー的な make の用途には、本来のビルドツールとしての使い方の知識はほとんど必要ありません。
ですが、落とし穴を回避したり正しく使うためには正しい理解があるとよいです。

「偽のターゲット（[Phony Target](https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html)）」は陥りやすい落とし穴です。
たとえばこのような簡単な Makefile は `make install` すると当然 `command` を出力します。
```makefile
install:
	echo "hello, girls" > install
```
```shell
$ make install
echo "hello, girls" > install
```

しかしここで再度 `make install` するとどうでしょうか。
`make: 'install' is up to date.` となってしまい、`command` が実行されません。これはどういうことでしょうか？
```shell
$ make install
make: 'install' is up to date.
```

make はターゲットに書かれたファイルが存在すると、既に生成が済んでいて再実行が不要と判断して `command` の実行をスキップします。
make は本来ビルドツールだからです。
そのため、例えば `test` ディレクトリがあるプロジェクトで `make test` をしたくても `up to date` になってしまいます。

こうした「ターゲットの生成に関わらないターゲット」を書くにはどうしたらいいでしょう？
答えは `PHONY:` を書くことです。
```makefile
.PHONY: install

install:
	echo "hello, girls" > install
```
```shell
$ make install
echo "hello, girls" > install
$ make install
echo "hello, girls" > install
```

`.PHONY:` には複数のターゲットがスペース区切りで書けます。
```makefile
.PHONY: install test

install:
	echo "hello, girls" > install

test:
	echo "no test yet"
```

また、複数行書くとスペース区切りのリストに要素を追加する挙動になるためこうも書けます。
```makefile
.PHONY: install
.PHONY: test

install:
	echo "hello, girls" > install

test:
	echo "no test yet"
```

どこに書いてもいいのでターゲットごとにまとめることも出来ます。
```makefile
.PHONY: install
install:
	echo "hello, girls" > install

.PHONY: test
test:
	echo "no test yet"
```