# DOWNLOAD THE NODE IMAGE
FROM node:20.18-slim

LABEL authors="mahery"

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]