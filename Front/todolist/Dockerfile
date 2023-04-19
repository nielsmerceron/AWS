FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["node", ".build/index.js"]
