FROM node:20-alpine

WORKDIR /project-manager-pro-app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["yarn", "dev"]