FROM node:25-alpine AS base
WORKDIR /app
EXPOSE 3000

FROM base AS development
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN sh -c "svelte-kit sync || echo ''"
CMD ["npx", "vite", "dev", "--port", "3000", "--host"]

FROM base AS build
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npx vite build

FROM base AS production
ENV NODE_ENV=production
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json
CMD ["node", "build/index.js"]