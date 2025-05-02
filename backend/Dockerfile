FROM node:22-alpine

WORKDIR /Expense-tracker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","index.js"]


