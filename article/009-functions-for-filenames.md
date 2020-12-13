---
slug: "/009-functions-for-filenames"
date: "2020-12-09"
title: "ファイル名の関数"
---

# ファイル名の関数

ファイル名に関する関数には `dir` や `notdir`、 `realpath`、 `abspath`、 `wildcard` などがあります。

他にも `suffix` や `addsuffix` などの便利な関数がありますが、あまり使わないので必要に応じて調べて使うとよいと思います。


## dir
dir は `names...` からディレクトリ部分を取り出します。
```makefile
$(dir names...)
```

スラッシュ（`/`）を含まない場合は `./` を返します
```makefile
dir:
	echo $(dir src/main.c Makefile)
```
```shell
$ make dir
echo src/ ./
src/ ./
```

## notdir
notdir は `names...` からディレクトリ部分を取り除いて返します。
```makefile
$(notdir names...)
```

スラッシュを含まない場合はそのまま返します。含む場合は、最後のスラッシュまでが削除されます。
```makefile
notdir:
	echo $(notdir src/main.c Makefile)
```
```shell
$ make notdir
echo main.c Makefile
main.c Makefile
```

## realpath
realpath は `names...` の `realpath` を返します。失敗した場合は空の文字列を返します。
```makefile
$(realpath names...)
```

```makefile
realpath:
	echo $(realpath src/main.c Makefile)
```
```shell
make realpath
echo /work/example/009/Makefile
/work/example/009/Makefile
```

詳しくは `man 3 realpath` を参照してください。
簡素な Makefile ではワーキングディレクトリからの相対パスで事足りるため、あまり使う機会はないかもしれません。

## abspath
abspath は `names...` の各ファイル名に対して、絶対パスを返します。
```makefile
$(abspath names...)
```

realpath とは対照的に、abspath はシンボリックリンクを解決せず、ファイルやディレクトリが存在するかをチェックしません。
存在するファイル名だけを扱いたい場合には `wildcard` 関数を使います。

```makefile
abspath:
	echo $(abspath src/main.c Makefile)
```
```shell
make abspath
echo /work/example/009/src/main.c /work/example/009/Makefile
/work/example/009/src/main.c /work/example/009/Makefile
```


## wildcard
wildcard はワイルドカード（`*`）を含むパターンに一致し存在するファイル名を返します。
```makefile
$(wildcard pattern)
```
```makefile
wildcard:
	echo $(wildcard *e)
```
```shell
ls
Makefile  fuga  hoge
make wildcard
echo hoge Makefile
hoge Makefile
```

## リンク
- [https://github.com/mirror/make/blob/fcc11d05a60b061027a50b76d146c43306b20e32/src/function.c](https://github.com/mirror/make/blob/fcc11d05a60b061027a50b76d146c43306b20e32/src/function.c#L2227)
- [https://github.com/mirror/make/blob/4.2.1/tests/scripts/functions/realpath](https://github.com/mirror/make/blob/4.2.1/tests/scripts/functions/realpath)