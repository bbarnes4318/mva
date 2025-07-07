FROM node:18-alpine

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache wget python3 make g++

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci --production

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

EXPOSE 8080

# Start the application
CMD ["node", "server.js"] 