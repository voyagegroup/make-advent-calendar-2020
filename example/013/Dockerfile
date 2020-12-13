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