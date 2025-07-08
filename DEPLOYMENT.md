# Fair Wreck - Digital Ocean Deployment Guide

This guide will help you deploy the Fair Wreck application to Digital Ocean, eliminating CORS issues by hosting everything on the same domain.

## Architecture Overview

- **Frontend**: React app (built and served as static files by Flask)
- **Backend**: Python Flask application with API endpoints
- **Hosting**: Single Digital Ocean droplet/app platform
- **Domain**: Everything served from `fairwreck.com` (no cross-origin requests)

## Local Development & Building

### 1. Build the React Frontend
```bash
cd web
npm install
npm run build
cd ..
```

### 2. Install Python Dependencies
```bash
cd form
pip install -r requirements.txt
```

### 3. Run Locally
```bash
cd form
python app.py
```

The app will be available at `http://localhost:8080`

## Digital Ocean Deployment

### Option 1: App Platform (Recommended)

1. **Connect Repository**: Link your GitHub repo to Digital Ocean App Platform

2. **Configure Build Settings**:
   - **Build Command**: `cd web && npm install && npm run build && cd ../form && pip install -r requirements.txt`
   - **Run Command**: `cd form && python app.py`
   - **Source Directory**: `/`

3. **Environment Variables**:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   FLASK_SECRET_KEY=your-secret-key-here
   PROXY_HOST=your-proxy-host
   PROXY_PORT=your-proxy-port
   PROXY_BASE_USER=your-proxy-user
   PROXY_PASS=your-proxy-password
   PORT=8080
   ```

4. **Custom Domain**: Point `fairwreck.com` to your app

### Option 2: Droplet with Docker

1. **Build and Deploy**:
   ```bash
   # Build the Docker image
   docker build -t fairwreck-app .
   
   # Run the container
   docker run -d \
     -p 8080:8080 \
     -e EMAIL_USER=your-email \
     -e EMAIL_PASS=your-password \
     -e FLASK_SECRET_KEY=your-secret \
     --name fairwreck \
     fairwreck-app
   ```

2. **Configure Nginx** (optional, for SSL/domain):
   ```nginx
   server {
       listen 80;
       server_name fairwreck.com;
       
       location / {
           proxy_pass http://localhost:8080;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

## Key Benefits of This Setup

✅ **No More CORS Issues**: Frontend and API on same domain  
✅ **Simplified Deployment**: Single application, one hosting service  
✅ **Cost Effective**: No dual hosting fees (Vercel + Digital Ocean)  
✅ **Better Performance**: No cross-origin network delays  
✅ **Easier Maintenance**: One codebase, one deployment pipeline  

## Verification

After deployment, test these endpoints:

- `https://fairwreck.com/` - React frontend
- `https://fairwreck.com/api/submit` - API endpoint (POST)
- `https://fairwreck.com/privacy` - Privacy page
- `https://fairwreck.com/terms` - Terms page

All requests will be same-origin, eliminating CORS completely!

## Troubleshooting

**React build not found**: Make sure `web/dist` exists and contains `index.html`

**API not working**: Check Flask logs and ensure environment variables are set

**Static files 404**: Verify the Flask static folder configuration points to `../web/dist` 