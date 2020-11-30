## 🚀 Quick start

1. **Start developing.**

  ```shell
  make setup
  make install
  make develop
  open "http://localhost:8000/
  ```

  or

  ```shell
  make -f docker.mk setup
  make -f docker.mk build
  make -f docker.mk bash
  # and make setup install develop
  ```

1. **Build & Serve**

  ```shell
  make build
  make serve
  open "http://localhost:8000/make-advent-calendar-2020/ # `--prefix-paths`
  ```

## 💫 Deploy

```shell
# merge PR to master and
open "https://github.com/voyagegroup/make-advent-calendar-2020/actions"
```
