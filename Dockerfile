FROM node

LABEL authors="liweihan<weihanli@outlook.com>"

COPY . /app/

WORKDIR /app
EXPOSE 4200

RUN yarn global add @angular/cli
RUN yarn

CMD ["ng", "serve"]
