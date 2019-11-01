FROM node:8.16.2-jessie

RUN npm install -g npm && \
    npm install -g @vue/cli && \
    npm install -g @vue/cli-init

