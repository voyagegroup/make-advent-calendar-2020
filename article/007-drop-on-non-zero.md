---
slug: "/007-exit-status"
date: "2020-12-07"
title: "終了ステータス"
---

# 終了ステータス

make はコマンドが non-zero なステータスで終了すると実行を中断します（[Errors in Recipes](https://www.gnu.org/software/make/manual/html_node/Errors.html)）。
このため「下手に処理が進んでどこで失敗しているのか分からない」といった事になりにくいですし、異常系をあまり考えずにコマンドを書き連ねられます。
```makefile
.PHONY: test

test:
	test 0 = 0
	test 1 != 1 # would fail
	test 2 = 2
```
```shell
$ make test
test 0 = 0
test 1 != 1 # would fail
make: *** [Makefile:5: test] Error 1

$ echo $?
2
```

make は基本的に 0 または 2 の終了ステータスを返します（[How to Run make](https://www.gnu.org/software/make/manual/html_node/Running.html)）。
1 を返すのは特殊な実行時だけなので non-zero か正常終了かだけ気にしておけばよいと思います。

## sh -ex

処理を中断する動きは `sh` の `-e` オプションと似ています。
```shell
$ man sh
...
-e errexit       If not interactive, exit immediately if any untested command fails.  The exit status of a command is considered to be explicitly tested if the command is used to control an if, elif, while, or until; or if the command is the left hand operand of an "&&" or "||" operator.

-x xtrace        Write each command to standard error (preceded by a '+ ') before it is executed.  Useful for debugging.
```

実行したコマンドが non-zero ステータスで終了した場合に即座に終了する `-e` オプションと、シェルスクリプト内で実際に実行されたコマンドを表示する `-x` オプションをつけるのはシェルスクリプトを書く際によく使われるプラクティスのひとつです。

これも十分有用ですが、しれっと実行を中断するので失敗に気づきにくいかもしれません。
```shell
#!/bin/sh -ex

test 0 = 0
test 1 != 1 # would fail
test 2 = 2
```
```shell
$ ./test.sh
+ test 0 = 0
+ test 1 != 1
$ echo $?
1
```

`$?` は最後に実行されたコマンドの終了ステータスです。
```shell
test 0 = 0; echo $?
0
test 1 != 1; echo $?
1
test 2 = 2; echo $?
0
```

## リンク
- [https://qiita.com/yn-misaki/items/6fcfab082dd664f10d4e](https://qiita.com/yn-misaki/items/6fcfab082dd664f10d4e#%E4%BE%BF%E5%88%A9%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%9F%E3%81%A1)
- [https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_05_02)
- [https://pubs.opengroup.org/onlinepubs/9699919799//utilities/sh.html](https://pubs.opengroup.org/onlinepubs/9699919799//utilities/sh.html#:~:text=The%20following%20exit%20values%20shall%20be%20returned)