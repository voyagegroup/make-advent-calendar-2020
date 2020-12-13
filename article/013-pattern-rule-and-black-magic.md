---
slug: "/013-pattern-rule-and-black-magic"
date: "2020-12-13"
title: "パターンルールと黒魔術"
---

# パターンルールと黒魔術

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

# https://forums.mysql.com/read.php?12,426247,432315#msg-432315
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      man \
      man-db \
      manpages \
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
* [https://tamakiii.hatenablog.com/entry/2020/04/14/005648](https://tamakiii.hatenablog.com/entry/2020/04/14/005648)