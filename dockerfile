FROM node:18.17.0-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM node:18.17.0-alpine

WORKDIR /app

COPY --from=build /app/package.json /app/pnpm-lock.yaml ./

RUN npm install --omit=dev

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["npm", "run", "prod"]