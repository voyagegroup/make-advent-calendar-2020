FROM debian:10.6

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      make \
      python \
      python3 \
      python-pip \
      python3-pip \
      && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
