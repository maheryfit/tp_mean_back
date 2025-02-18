# DOWNLOAD THE NODE IMAGE
FROM node:20.18-slim

LABEL authors="mahery"

# CREATE DIRECTORY INSIDE THE DOCKER IMAGE
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 5000

CMD ["npm", "start"]