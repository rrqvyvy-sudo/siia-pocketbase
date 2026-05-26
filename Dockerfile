FROM debian:bookworm-slim

WORKDIR /pb

COPY pocketbase /pb/pocketbase
COPY pb_migrations /pb/pb_migrations
COPY pb_hooks /pb/pb_hooks

RUN chmod +x /pb/pocketbase

EXPOSE 8090

ENV PORT=8090

CMD ["/bin/sh", "-c", "/pb/pocketbase serve --http=0.0.0.0:${PORT:-8090} --dir=/pb/pb_data --migrationsDir=/pb/pb_migrations --hooksDir=/pb/pb_hooks"]
