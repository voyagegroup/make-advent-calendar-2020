---
slug: "/003-variable"
date: "2020-12-03"
title: "変数"
---

# 変数

変数は make の特徴的な2つの側面に大きく関わる要素です。「O'Reilly GNU Make 第3版」3章の冒頭からの引用です。

> make がある意味で2つの言語を1つにしたものだと理解することは重要です。
> 1つはターゲットを必須項目から成る依存関係グラフを表現します。 もう1つはテキストの置換を行うマクロ言語です。
> 他のマクロ言語つまりCのプリプロセッサ、m4、TeX、マクロアセンブラについてはよくご存知かと思います。
> それらのマクロ言語と同じように、make のマクロも長い文字列を短い単語で定義し、短い単語を使ってプログラムを書くことが出来ます。
> マクロプロセッサは短い単語を認識し、それを長い文字列に展開します。


## 簡単な変数

変数の定義にはいくつかパターンがありますが、簡単な例から見ていきましょう。
変数 `MESSAGE` を `:=` 演算子で定義して、`$()` で展開します（※1）。
```makefile
.PHONY: hello

MESSAGE := hello

hello:
	echo $(MESSAGE)
```

この Makefile は変数 `MESSAGE` を出力します。この変数は make の変数で、実行時には既に展開された形になっています。
```sh
$ make hello
echo hello
hello
```

make の変数が便利なのは、実行時引数でこれを上書きできるところです。これによって Makefile に容易に拡張性を持たせられます。
```sh
$ make hello MESSAGE=konnnichiwa
echo konnnichiwa
konnnichiwa
```

例えば、ある言語のバージョンを上げたいとき、2つのバイナリを用意しておいて、それぞれで同じターゲットを実行する、といった使い方が出来ます。
```makefile
.PHONY: py

PYTHON = python

py:
	$(PYTHON) main.py
```
```sh
$ make py
python main.py
psyche
$ make py PYTHON=python3
python3 main.py
  File "main.py", line 1
    print "psyche"
                 ^
SyntaxError: Missing parentheses in call to 'print'. Did you mean print("psyche")?
make: *** [Makefile:15: py] Error 1
```


## 変数名の大文字小文字

make の変数は case-sensitive、つまり `FOO` `Foo` `foo` はそれぞれ別の変数として扱われます。

公式ドキュメントには「利用者がコマンドオプションで上書きするパラメタ的な変数や、暗黙のルール（[Implicit Rule](https://www.gnu.org/software/make/manual/html_node/Implicit-Rules.html)）を制御する変数には、大文字を使うことを推奨する」とあります。
また、内部的な変数には小文字を使うことを推奨しています。

> It is traditional to use upper case letters in variable names,
> but we recommend using lower case letters for variable names that serve internal purposes in the makefile,
> and reserving upper case for parameters that control implicit rules or for parameters that the user should override with command options

[https://www.gnu.org/software/make/manual/html_node/Using-Variables.html](https://www.gnu.org/software/make/manual/html_node/Using-Variables.html)


## リスト

make は本来の用途で多くのファイルを扱うため、リストを表現する手段を持っています。
リストはスペース区切りの文字列です。

リストは様々な用途に使えますが、一例としてターゲット名に使えます。
この例では、非リストの `greeting` とリストの `greetings` をターゲットに指定し、結果として変数に含まれている値がターゲットとして扱われています。
```makefile
greeting := holla
greetings := ciao mhoro talofa

$(greeting):
	echo "greeting"

$(greetings):
	echo "greetings"
```
```sh
$ make holla
echo "greeting"
greeting
$ make ciao
echo "greetings"
greetings
$ make mhoro talofa
echo "greetings"
greetings
echo "greetings"
greetings
```


## 変数の定義方法

make には変数の定義方法が複数あります。
```makefile
immediate   := value
lazy         = value
conditional ?= value
append      += value
append      += value
```

`+=` はリストに要素を追加する演算子ですが、残り3つは「いつ評価されるか」に違いがあります。

`:=` で表されるものは「単純展開変数（Simply Expanded Variable）」、`=` で表されるものは「再帰展開変数（Recursively Expanded Variable）」（または「遅延評価変数（Lazy Expanded Variable）」）、`?=` で表されるものは「条件付き代入変数（Conditional Variable）」と呼ばれます。

簡潔に言えば、`:=` は一度だけ評価され、`=` は変数展開する毎に評価される可能性があり、`?=` は値を持たないときだけ評価されます。

問題になりやすいのが `=` で、ターゲットをまたがった際など、必要と判断されると再評価されて値が変わってしまうことがあります。

```makefile
.PHONY: test a sleep b

immediate := $(shell date +%s)
lazy       = $(shell date +%s)

test: a sleep b

a:
	echo $(immediate) # immediate
	echo $(lazy) # lazy

sleep:
	sleep 3

b:
	echo $(immediate) # immediate
	echo $(lazy) # lazy
```

このように immediate が変わらないのに対して、lazy が再評価されます。
```sh
$ make test
echo 1607153140 # immediate
1607153140
echo 1607153140 # lazy
1607153140
sleep 3
echo 1607153140 # immediate
1607153140
echo 1607153143 # lazy
1607153143
```

特別な意図がない限り `:=` （単純展開変数）を使うようにすればよいでしょう。


## リンク
* [https://nekonenene.hatenablog.com/entry/2019/02/11/070021](https://nekonenene.hatenablog.com/entry/2019/02/11/070021)
* [https://www.gnu.org/software/make/manual/html_node/Flavors.html](https://www.gnu.org/software/make/manual/html_node/Flavors.html)
* [https://qiita.com/kojiohta/items/54b1a9f7d482c35dc4fa](https://qiita.com/kojiohta/items/54b1a9f7d482c35dc4fa)

※1. `$()` の他にも `${}` でも展開できますし、特殊なパターンとして変数名が一文字の場合は `$` で展開出来ます。複数の書き方が混在するのは好ましくないので、`$()` に統一するのがよいのではないでしょうか。