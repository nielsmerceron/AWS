FROM node:18 as build

ENV NPM_CONFIG_PRODUCTION=false

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18

WORKDIR /app
COPY --from=build /app .

ENV HOST=0.0.0.0
EXPOSE 4173
CMD ["npm","run", "preview","--", "--host", "0.0.0.0"]
