FROM node:24-alpine

ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install express mysql2 dotenv helmet
RUN npm install jquery
RUN npm ci --omit=dev

COPY server.js ./

USER node

EXPOSE 3000

CMD ["node", "server.js"]