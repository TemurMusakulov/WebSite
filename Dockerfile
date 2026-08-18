# syntax=docker/dockerfile:1

# ---------- Stage 1: build the static assets ----------
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies first so this layer is cached unless deps change
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the source and build the production bundle
COPY . .
RUN npm run build

# ---------- Stage 2: serve with Nginx ----------
FROM nginx:1.27-alpine AS runtime

# Custom Nginx config (SPA-friendly routing, gzip, cache headers)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
