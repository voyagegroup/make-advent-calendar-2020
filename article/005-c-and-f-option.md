---
slug: "/005-c-and-f-option"
date: "2020-12-05"
title: "-C オプションと -f オプション"
---

# -C オプションと -f オプション

make は通常、カレントディレクトリの Makefile を実行しますが（※1）、別ディレクトリにある Makefile を実行したい場合や、
目的に応じたファイル名をつけて実行したい場合もあります。
そういった際に使えるのが `-C` `-f` オプションです。

## -C

`-C` オプションは Makefile のあるディレクトリを指定するオプションです。
```sh
-C dir, --directory=dir
    Change to directory dir before reading the makefiles or doing anything else.
    If multiple -C options are specified, each is interpreted relative to the
    previous one: -C / -C etc is equivalent to -C /etc.
    This is typically used with recursive invocations of make.
```

指定されたディレクトリで Makefile を実行するので、ファイルを生成する場合も `-C` で指定したディレクトリからの相対パスで作られます。
```makefile
.PHONY: all touched clean

all: touched
	pwd
	ls -lsa touched

touched:
	touch $@

clean:
	rm -rf touched
```
```sh
$ pwd
/work
$ make -C example/005 all
make: Entering directory '/work/example/005'
touch touched
pwd
/work/example/005
ls -lsa touched
0 -rw-r--r-- 1 root root 0 Dec  5 09:50 touched
make: Leaving directory '/work/example/005'
```


## -f

`-f` は実行するファイル名を指定するオプションです。
```sh
-f file, --file=file, --makefile=FILE
    Use file as a makefile.
```

目的に応じたファイルに Makefile を分割すると、メンテナンス性や可読性、使いやすさなどが上がります。
拡張子には `.mk` をつけることが多く、例えば `ci.mk` `docker.mk` `test.mk` `integration-test.mk` といった具合にします。

これはその一例として [ImageMagick](https://imagemagick.org/) で遊ぶ `imagemagick.mk` です（※2）。
```makefile
.PHONY: clean

# http://www.imagemagick.org/Usage/distorts/
koala.gif:
	curl http://www.imagemagick.org/Usage/images/koala.gif > $@

distortion.gif: koala.gif
	convert $< -virtual-pixel Black -define shepards:power=8.0 -distort Shepards '30,11 20,11  48,29 58,29' $@

clean:
	rm -rf distortion.gif
```

`-f` オプションはファイル名を指定するだけで、実行ディレクトリはカレントディレクトリのままです。
そのため、相対パスで記述されているターゲットはカレントディレクトリに作成されます。
```sh
$ pwd
/tmp
$ make -f /work/example/005/imagemagick.mk distortion.gif
curl http://www.imagemagick.org/Usage/images/koala.gif > koala.gif
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  4159  100  4159    0     0   9304      0 --:--:-- --:--:-- --:--:--  9283
convert koala.gif -virtual-pixel Black -define shepards:power=8.0 -distort Shepards '30,11 20,11  48,29 58,29' distortion.gif
$ ls /tmp/koala.gif /tmp/distortion.gif
/tmp/distortion.gif  /tmp/koala.gif
```

`-C` と `-f` は併用でき、対象ファイルが存在するディレクトリで実行したい場合はこのように併用します。基本的には併用することを前提にした方が考えることが減ってよいと思います。
```sh
$ make -C /work/example/005 -f imagemagick.mk distortion.gif
make: Entering directory '/work/example/005'
convert koala.gif -virtual-pixel Black -define shepards:power=8.0 -distort Shepards '30,11 20,11  48,29 58,29' distortion.gif
make: Leaving directory '/work/example/005'
```

## リンク
* [https://www.gnu.org/software/make/manual/make.html#Makefile-Names](https://www.gnu.org/software/make/manual/make.html#Makefile-Names)

※1. 実際には GNUmakefile, makefile, Makefile の順に探査して最初に見つかったものを実行します。
※2. こういった Makefile を書き始めて休日を潰すことがまれによくある