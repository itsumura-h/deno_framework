FROM hayd/deno:alpine-1.7.2

RUN apk update && \
    apk upgrade --no-cache
WORKDIR /root/project/

ENTRYPOINT ["tail",  "-f",  "/dev/null"]
