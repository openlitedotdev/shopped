FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install pnpm serve --global
RUN corepack enable
RUN pnpm install

RUN pnpm build

EXPOSE 8080

CMD serve -s dist -l 8080
