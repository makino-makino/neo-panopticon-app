FROM node:8.16.2-jessie

RUN npm install --global yarn
RUN yarn global add @vue/cli
RUN yarn global add @vue/cli-init
