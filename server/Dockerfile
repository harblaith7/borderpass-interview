FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm run install

COPY . .

CMD ["npm", "run", "start:dev"]