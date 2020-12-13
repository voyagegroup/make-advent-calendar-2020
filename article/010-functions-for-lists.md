---
slug: "/010-functions-for-lists"
date: "2020-12-10"
title: "リストの関数"
---

# リストの関数

## word
word はリストの n番目の要素を取り出します。
```makefile
$(word n, names...)
```
```makefile
word:
	echo $(word 1,hoge fuga vaa)
	echo $(word 2,hoge fuga vaa)
	echo $(word 3,hoge fuga vaa)
```
```shell
$ make word
echo hoge
hoge
echo fuga
fuga
echo vaa
vaa
```

## firstword
firstword はリストの最初の要素を取り出します。
```makefile
$(firstword names...)
```
```makefile
firstword:
	echo $(firstword hoge fuga vaa)
```
```shell
$ make firstword
echo hoge
hoge
```

## lastword
lastword はリストの最後の要素を取り出します。
リストの要素数が1の場合、firstword と同じ要素を返すことに注意しましょう。
```makefile
$(lastword names...)
```
```makefile
lastword:
	echo $(lastword hoge fuga vaa)
```
```shell
make lastword
echo vaa
vaa
```

## filter
filter は `%` を含む `pattern...` に一致する要素を取り出します。
`pattern...` には複数のパターンが指定できます。
```makefile
$(filter pattern..., names...)
```
```makefile
filter:
	echo $(filter h% v%,hoge fuga vaa)
```
```shell
$ make filter
echo hoge vaa
hoge vaa
```

## リンク
* [https://www.gnu.org/software/make/manual/html_node/Text-Functions.html](https://www.gnu.org/software/make/manual/html_node/Text-Functions.html)