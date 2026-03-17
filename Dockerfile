# syntax=docker/dockerfile:1
FROM node:20-alpine AS build
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY app/ ./
ARG TMDB_V3_API_KEY
ENV TMDB_V3_API_KEY=$TMDB_V3_API_KEY
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]