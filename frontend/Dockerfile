FROM node:22-alpine

WORKDIR /Expense-tracker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


