FROM node:latest

WORKDIR /app

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:${PATH}"

COPY package.json bun.lockb ./

RUN bun install
RUN bun add --global prisma

RUN bunx prisma generate

COPY . .

RUN bun run build

EXPOSE 3000

COPY startup.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/startup.sh