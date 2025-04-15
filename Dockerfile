FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 4001

CMD ["serve", "-s", "dist", "-p", "4001"]