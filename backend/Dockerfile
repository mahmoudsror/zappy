FROM node:10.15-alpine
WORKDIR /backend
COPY package.json /backend
RUN npm i
RUN npm install -g nodemon
COPY . /backend
CMD [ "nodemon" ]