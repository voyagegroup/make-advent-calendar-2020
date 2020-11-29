FROM node:15.3.0

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      sudo \
      man \
      man-db \
      manpages-dev \
      less \
      && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
