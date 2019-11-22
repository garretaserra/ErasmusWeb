FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install
RUN npm install -g @angular/cli

COPY . /usr/src/app

EXPOSE 80

CMD ng serve --configuration=production --host 0.0.0.0
