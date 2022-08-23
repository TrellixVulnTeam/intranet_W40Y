FROM node:18
FROM intranet_modules:latest

WORKDIR /app

COPY . .

EXPOSE 5050

CMD [ "node", "server.js" ]