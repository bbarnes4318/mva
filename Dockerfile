# Multi-stage build for React frontend + Python Flask backend
FROM node:18-alpine AS frontend-builder

WORKDIR /app/web

# Copy frontend package files
COPY web/package*.json ./

# Install frontend dependencies
RUN npm ci

# Copy frontend source code
COPY web/ ./

# Build the React application
RUN npm run build

# Python Flask stage
FROM python:3.12-alpine

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache wget chromium chromium-chromedriver

# Set environment variables for Playwright
ENV PLAYWRIGHT_BROWSERS_PATH=/usr/bin/chromium-browser
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

# Copy Python requirements and install dependencies
COPY form/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy Flask application
COPY form/ ./

# Copy built React frontend from previous stage
COPY --from=frontend-builder /app/web/dist ./web/dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080
ENV FLASK_ENV=production

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

EXPOSE 8080

# Start the Flask application
CMD ["python", "app.py"] 