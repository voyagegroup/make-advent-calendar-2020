FROM debian:10.6

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      man \
      man-db \
      manpages-dev \
      make \
      build-essential \
      && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
