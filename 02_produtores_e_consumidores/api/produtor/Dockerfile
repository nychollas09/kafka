FROM node:14-alpine3.10

WORKDIR /usr/produtor/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001