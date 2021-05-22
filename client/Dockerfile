FROM node:14
WORKDIR /skripsi
COPY /client .
RUN yarn cache clean
RUN yarn install
EXPOSE 3000