FROM node:latest

WORKDIR /app

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:${PATH}"

COPY package.json bun.lockb ./

RUN bun install
RUN bun add --global prisma

COPY . .

#RUN bunx prisma migrate deploy

RUN bun run build

EXPOSE 3000
##ENTRYPOINT ["bunx", "prisma", "migrate", "deploy"]
##CMD ["bun", "run", "start"]
#CMD ["npm", "run", "start"]

CMD ["bunx", "prisma", "migrate", "deploy"]
CMD ["bun", "run", "start"]