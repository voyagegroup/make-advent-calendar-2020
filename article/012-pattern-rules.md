---
slug: "/012-pattern-rules"
date: "2020-12-12"
title: "パターンルール"
---

# パターンルール

ルールの target と prerequisites には `%` を含むパターンが書けます。
```makefile
%.o : %.c ; recipe...
```

target の `%` と prerequisites の `%` は一致していなければならず、この例では `main.c` が存在しないので `main.o` は作れません。
`hoge.c` が存在するため `hoge.o` は作れます。
```makefile
%.o: %.c
	gcc $< -o $@
```
```shell
$ ls *.c
hoge.c
$ make main.o
make: *** No rule to make target 'main.o'.  Stop.
$ make hoge.o
gcc hoge.c -o hoge.o
```

prerequisites なしで target のみでも書けますし、後方一致も書けますが、部分一致は書けません。
```makefile
%.echo:
	echo $@

fuga.%: hoge.%
	ln -s $< $@

%hoge%:
	echo $@ $<
```
```shell
$ make vaa.echo
echo vaa.echo
vaa.echo
$ make fuga.c
ln -s hoge.c fuga.c
$ make fuga.o
gcc fuga.c -o fuga.o
$ make _hoge_
make: *** No rule to make target '_hoge_'.  Stop.
```


## 黒魔術化

パターンルールは便利な反面、Makefile を複雑化しやすいです。

例えば、docker-compose のインターフェースとして、よく使うサブコマンドを、黒魔術の誘惑によってこのように書きたくなることもあります。
`<サービス名>/<操作>` といった規則の糖衣構文的なルールです。
```makefile
database/%:
  make docker-compose/$(@F) SERVICE=$(@D)

docker-compose/%:
  docker-compose $(@F) $(SERVICE)
```
```yaml
version: "3.8"
services:
  database:
    build:
      context: .
      target: ${TARGET:-production-pseudo}
    environment:
      MYSQL_ROOT_PASSWORD: password
    volumes:
      - mysqldata:/var/lib/mysql

volumes:
  mysqldata:
```
```dockerfile
FROM mysql:8.0.22 AS production-pseudo

# --

FROM production-pseudo AS development

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      vim \
      && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

しかしこういった黒魔術はメンテナンス性を下げますし、統一的に書けるという幻想は大抵すぐに瓦解します。

本当に自動化したいルールを重視し、糖衣構文的なルールを用意するにしても使用頻度が高いものに絞り、できるだけ素朴に書くのが、Makefile をメンテナンスして育てる秘訣ではないかと思います。
```makefile
.PHONY: help setup setup-dev build up logs down migrate clean

TARGET := production-pseudo

help:
	@cat $(firstword $(MAKEFILE_LIST))

setup: \
	.env

setup-dev: \
	$(eval TARGET := development) \
	setup

build: docker-compose.yml
	docker-compose build

up:
	docker-compose up -d

logs:
	docker-compose logs -f

down:
	docker-compose down

migrate:
	# ...

.env:
	echo "TARGET=$(TARGET)" > $@

clean:
	docker-compose down -v
	rm -rf .env
```

README などで補足するのもよいと思います。使用頻度が高いものを Makefile に昇格させるようにすれば、それがメンテナンス性を考慮する機会になるはずです。
```markdown
## How to use
~~~sh
make -f docker.mk setup-dev
make -f docker.mk build up
make -f docker.mk down
~~~

## Basic usages of docker-compose
~~~sh
docker-compose ps [service]
docker-compose exec <service> <command>
docker-compose run --rm <service> <command>
~~~
```

## リンク
* [https://www.gnu.org/software/make/manual/html_node/Pattern-Intro.html](https://www.gnu.org/software/make/manual/html_node/Pattern-Intro.html)