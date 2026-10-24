FROM nginx:alpine

# copy nginx configuration file
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
# copy index.html
COPY index.html /usr/share/nginx/html/index.html

# https://github.com/opencontainers/image-spec/blob/main/annotations.md
LABEL org.opencontainers.image.authors="WeihanLi"
LABEL org.opencontainers.image.source="https://github.com/WeihanLi/weihanli.github.io"
