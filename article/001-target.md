---
slug: "/001-makefile-in-2020"
date: "2020-12-01"
title: "2020年の Makefile"
---

# 2020年の Makefile

## make の歴史

`make` は元々は C言語などのソースコードをビルドするために生まれたツールです。
ですが、最近では半ばタスクランナー的な用途（※1）に `make` を用いることがあります。

年を追うごとに本来の用途としての出番が減る一方（※2）で、2012年ごろから私の周囲ではタスクランナー的に使う人がちらほら出始め、
Go言語圏で流行ったこともあり2015年ごろから世間的にも認知されるようになった気がします。

## Makefile とは

タスクランナー的な `make` の用途には、本来のビルドツールとしての使い方の知識はほとんど必要ありません。
`Makefile` はこのような「ルール（[Rule](https://www.gnu.org/software/make/manual/html_node/Rules.html)）」で構成されます。

```makefile
target ... : prerequisites ...
    command
    ...
```

`target` は通常はファイルの名称ですが、`install` のように動作を表すこともあります。適当な名前をつけられるわけです。
このようなターゲットは 「偽のターゲット（[Phony Target](https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html)）」と呼ばれ、`.PHONY:` で指定されますが、ここでは一旦忘れましょう。

`prerequisites` はターゲットを作るときの入力として用いられる「必要条件（[Prerequisites](https://www.gnu.org/software/make/manual/html_node/Automatic-Prerequisites.html)）」です。ここでは一旦忘れましょう。

`command` はシェルスクリプトです。通常 `/bin/sh` がデフォルトシェルとして設定されているはずです。

---

`target` と `command` を持つ簡単な `Makefile` を書いてみます。
`command` には複数のコマンドが書けます。
```makefile
hello:
	echo "hello"
    echo "make"
```

この `Makefile` があるディレクトリで `make hello` を実行すると、`command` の内容と `hello`、`make` が出力されます。
```shell
$ ls Makefile
Makefile
```
```shell
$ make hello
echo "hello"
hello
echo "make"
make

```

`make` は `command` に特別な指定をしない限り `command` も出力します。これは不便なように思われるかもしれませんが、
`Makefile` の記述量が増えた際、何を実行しているのかが一目瞭然で、その利点の方が遥かに勝ります。

`target` と `command` でルールを書く方法がわかりました。
あとは自動化したい処理を思うように書くだけです。例えばこんな感じです。
* Go言語のプログラムを `build` して `test` する
* `npm` パッケージを `install` して `clean` する
* 開発環境用の設定ファイルを `setup` する
* プロビジョニングツールとして使う（`apt-get install -y ...`）

こういった手順を `Makefile` として書いてやれば、他のマシン上でも同様の手順が再現できます。
開発環境上で実行している多少複雑なテスト手順を、CI で同じように実行する、などなど。便利ですね。


## 実装の種別とインストール

`make` は歴史が長いだけあっていくつか実装が存在します。主な実装に「[GNU make](https://www.gnu.org/software/make/)」「[BSD make](https://www.freebsd.org/doc/en/books/developers-handbook/tools-make.html)」「[System V make](https://www.linux.co.cr/unix/review/1983/0806-a.html#:~:text=4.1%20%20Make)」があります。

それぞれ細かな差があり、同じ `Makefile` でも同様に動かないことがほとんどです。入手のしやすさなどから `GNU make` が多く使われていて、BSD系[?] の macOS ですら `GNU make` が標準でインストールされていることから、
タスクランナー的な用途の文脈では `make` は `GNU make` のことを指します。

macOS では標準でインストールされているものを使うか Home brew 経由で、Linux では各ディストリビューションのパッケージマネージャ経由で、Windows では [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm) や [MinGW](http://www.mingw.org/wiki/InstallationHOWTOforMinGW) からインストールできます。ただ、Windows は現代では WSL2 の環境を整えた方がよさそうです。


## 参考

* [Golang: Don’t afraid of makefiles - Radomir Sohlich](https://sohlich.github.io/post/go_makefile/)
* [aws/aws-sdk-php/Makefile](https://github.com/aws/aws-sdk-php/blob/405a5c130bd18ccb63a653b643266ed2ab9e1147/Makefile)


※1. Phony Target を多様したり、プログラムをビルドする以外の目的で `Makefile` を書くといった用途。「ベターシェルスクリプト」「実行可能なドキュメント」「読める実行ファイル」「メタ的な Makefile」などの形容がありますが未だになんと呼んだらいいのか個人的に決めかねています。なんて呼んだらいいんですかね

※2. [Google Trend 調べ](https://trends.google.co.jp/trends/explore?date=all&q=makefile)。`make` は今でもさまざまなオープンソースプロジェクトで使われていて、`Autotools` や `Automake` などの知識があると探索がはかどります