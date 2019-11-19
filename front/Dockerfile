FROM node:10

WORKDIR /usr/rune/front

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
