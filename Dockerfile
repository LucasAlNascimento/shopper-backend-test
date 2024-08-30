FROM node:18-alpine

WORKDIR /shopper-backend-test

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]