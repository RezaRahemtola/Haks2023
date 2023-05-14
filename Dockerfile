FROM node:18.16.0-alpine

WORKDIR /result

EXPOSE 3000

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]