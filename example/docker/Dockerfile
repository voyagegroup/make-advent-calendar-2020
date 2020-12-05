FROM debian:10.6

RUN echo "deb http://deb.debian.org/debian buster-backports main contrib non-free" > /etc/apt/sources.list.d/buster-backports.list

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      man \
      man-db \
      manpages-dev \
      gcc-doc \
      make \
      build-essential \
      && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
