# Build stage
FROM node:24.12.0 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage — serves the static build with SPA routing support
FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html

# Vue Router history mode serves the application shell for direct SPA-route visits.
RUN <<'EOF'
cat > /etc/nginx/conf.d/default.conf <<'CONF'
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;
    server_tokens off;

    location = /index.html {
        add_header Cache-Control "no-cache";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:css|js|jpg|jpeg|png|gif|ico|webp|svg|woff|woff2|ttf|otf)$ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
CONF
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
