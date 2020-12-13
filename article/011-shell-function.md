---
slug: "/011-shell-function"
date: "2020-12-11"
title: "shell 関数"
---

# shell 関数

shell はシェルコマンドを実行して出力を返します。
```makefile
$(shell command)
```

出力は変数に代入できますし、空白区切りであればリストとしても扱えます。
```makefile
ls := $(shell ls)

ls:
	echo $(ls)
	echo $(firstword $(ls))
```
```shell
$ make ls
echo Makefile fuga hoge list.txt
Makefile fuga hoge list.txt
echo Makefile
Makefile
```

出力の改行（newline）はスペースに置換され、リストとして扱われます。
```makefile
cat := $(shell cat list.txt)

cat:
	echo $(cat)
	echo $(lastword $(cat))
```
```shell
$ cat list.txt
hoge
fuga
vaa
$ make cat
echo hoge fuga vaa
hoge fuga vaa
echo vaa
vaa
```

変数への代入時には `!=` 代入演算子が使えます。`!=` は `:=` と同じく一度だけ評価されます。
```makefile
op != date +%s

op1:
	echo $(op)
	sleep 3
	echo $(op)

op2:
	echo $(op)
```
```shell
$ make op1 op2
echo 1607849554
1607849554
sleep 3
echo 1607849554
1607849554
echo 1607849554
16078495543
```

shell 関数または `!=` 代入演算子が使用された後、その終了ステータスは `.SHELLSTATUS` 変数に格納されます。
```makefile
shell-status:
	@echo $(shell pwd)
	echo $(.SHELLSTATUS)
	@echo $(shell exit 127)
	echo $(.SHELLSTATUS)
```
```shell
$ make shell-status
/work/example/011
echo 0
0

echo 127
127
```

ルールのコマンド部分に `$(shell ...)` を書くと、Makefile が読まれたタイミングで評価され、ルールの実行前に展開されてしまいます。
実行時まで評価を遅延させたい場合は `$$` でエスケープすることで、通常のサブシェルとして実行できます。

これは単純な `$` のエスケープなので、`awk '{ print $$1 }` といったことも当然できます。
```makefile
subshell:
	ls -lsa $$(pwd)
```
```shell
make subshell
ls -lsa $(pwd)
total 8
0 drwxrwxr-x  6 root root 192 Dec 13 08:46 .
0 drwxrwxr-x 14 root root 448 Dec 13 08:43 ..
4 -rw-rw-r--  1 root root 411 Dec 13 09:01 Makefile
0 -rw-r--r--  1 root root   0 Dec 13 08:44 fuga
0 -rw-r--r--  1 root root   0 Dec 13 08:44 hoge
4 -rw-r--r--  1 root root  13 Dec 13 08:46 list.txt
```

「`aws` コマンドで S3 バケットの ls を取得する」といった、必要になったときだけ実行させたいコマンドの場合、
必要になったときに評価される `?=` や `=` 代入演算子が使えます。
```makefile
PROFILE :=
REGION :=
BUCKET := s3://example.com/

aws := aws --profile=$(PROFILE) --region=$(REGION)
s3ls ?= $(shell $(aws) s3 ls $(BUCKET) | awk '{print $$4}')

s3ls:
	echo $(s3ls)
```
```shell
$ make s3ls PROFILE=... REGION=... BUCKET=...
echo  Makefile fuga hoge list.txt
Makefile fuga hoge list.txt
```

## リンク
* [https://www.gnu.org/software/make/manual/html_node/Setting.html](https://www.gnu.org/software/make/manual/html_node/Setting.html)
* [https://pubs.opengroup.org/onlinepubs/9699919799.2016edition/utilities/V3_chap02.html#tag_18_06_03](https://pubs.opengroup.org/onlinepubs/9699919799.2016edition/utilities/V3_chap02.html#tag_18_06_03)