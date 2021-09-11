FROM node:12-alpine AS builder
# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json .
RUN yarn

# build the angular app
COPY . .
RUN yarn run build

FROM nginx:alpine

# copy from dist to nginx root dir
COPY --from=builder /app/dist/weihanli /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf

LABEL maintainer="WeihanLi"