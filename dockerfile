FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV="production"

COPY . .

RUN npm ci && addgroup -S app && adduser -S app -G app && chown -R app:app .

USER app

EXPOSE 3000

CMD ["npm", "start"]