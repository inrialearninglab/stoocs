FROM node:latest

WORKDIR /app

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:${PATH}"

COPY . .

RUN bun install

RUN bun run db:generate

RUN bun run build

EXPOSE 3000

COPY startup.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/startup.sh
