---
slug: "/008-text-functions"
date: "2020-12-08"
title: "文字列の関数"
---

# 文字列の関数

make の関数は `$(function arguments)` の形式で呼び出します。
arguments はカンマ（`,`）区切りで複数指定できますし、空白区切りのリストも指定できます。

文字列に関する関数はいくつかありますが、主に使うのが `subst` と `patsubst` です。

## subst
subst は単純に文字列を置換する関数です。
```makefile
$(subst from,to,text)
```

```makefile
subst:
	echo $(subst og,xx,hoge)
```
```shell
$ make subst
echo hxxe
hxxe
```

## patsubst
patsbust は簡単なパターン置換を行う関数です。
```makefile
$(patsubst pattern,replacement,text)
```

`%` を含むパターンを置換します。
```makefile
patsubst:
	echo $(patsubst %a,%,hoge fuga vaa)
```
```shell
$ make patsubst
echo hoge fug va
hoge fug va
```

## 代用参照
シェルの変数展開（[Parameter Expansion](https://pubs.opengroup.org/onlinepubs/009604499/utilities/xcu_chap02.html#tag_02_06_02)）のように、
文字列を置換できるのが「代用参照（[Substitution Reference](https://www.gnu.org/software/make/manual/make.html#Substitution-Refs)）です。
```makefile
$(var:pattern=replacement)
```

代用参照は patsubst と同じように動くので、先程の例はこのように書けます。
一度変数に格納しないといけませんが、短く書けます。
```makefile
var := hoge fuga vaa

subst-ref:
	$(var:%a=%)
```
```shell
$ make subst-ref
echo hoge fug va
hoge fug va
```

## 残念なカンマ
なんとも残念な感じですが、make の関数呼び出しではカンマ（`,`）が扱えません。
エスケープする手段もないため、このように一度変数化して展開する必要があります。
```makefile
clist := hoge,fuga,vaa
comma := ,

comma:
	echo $(subst $(comma), , $(clist))
```
```shell
$ make comma
echo hoge
hoge
```

凝ったことをしない限りこれに困らされることはありませんが、やはり特性にあった使い方をするのが大事かなと思います。

## リンク
* [https://pubs.opengroup.org/onlinepubs/009604499/utilities/xcu_chap02.html#tag_02_06_02](https://pubs.opengroup.org/onlinepubs/009604499/utilities/xcu_chap02.html#tag_02_06_02)
* [https://www.gnu.org/software/make/manual/make.html#Substitution-Refs](https://www.gnu.org/software/make/manual/make.html#Substitution-Refs)