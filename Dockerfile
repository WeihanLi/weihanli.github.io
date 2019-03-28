FROM node AS builder
# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json .
RUN yarn

# build the angular app
COPY . .
RUN yarn run build

FROM nginx:stable-alpine

# copy from dist to nginx root dir
COPY --from=builder /app/dist/weihanli /usr/share/nginx/html

# expose port 80
EXPOSE 80

# set author info
LABEL maintainer="WeihanLi"

# run nginx in foreground
# https://stackoverflow.com/questions/18861300/how-to-run-nginx-within-a-docker-container-without-halting
CMD ["nginx", "-g", "daemon off;"]
