# Use an official Node runtime as a base image
FROM node:18-alpine

RUN npm install -g http-server

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]