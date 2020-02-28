FROM node:8.16.2-jessie

WORKDIR /app
ADD package.json /app
ADD package-lock.json /app

RUN npm install
