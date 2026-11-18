# Deployment Guide - Blooms Academy Frontend

This guide covers deploying the Blooms Academy frontend to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] All features tested and working
- [ ] Environment variables configured
- [ ] API endpoints verified
- [ ] Build succeeds without errors
- [ ] All pages load correctly
- [ ] Responsive design verified
- [ ] Forms submit properly
- [ ] Images optimized
- [ ] SEO metadata complete

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest option for Next.js applications.

#### Steps:

1. **Push code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: frontend
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Add Environment Variables**
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-api.com/api
   NEXT_PUBLIC_SITE_NAME=Blooms Academy
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Get your production URL

#### Automatic Deployments

- Push to main branch → Production deployment
- Push to other branches → Preview deployment

### 2. Netlify

Another excellent option for static sites and Next.js.

#### Steps:

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import existing project"
   - Connect your Git provider

2. **Configure Build Settings**
   ```
   Base directory: frontend
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add the same variables as Vercel

4. **Deploy**
   - Click "Deploy site"
   - Netlify builds and deploys automatically

### 3. AWS Amplify

For AWS-based deployments.

#### Steps:

1. **Connect Repository**
   - Open AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect repository

2. **Configure Build**
   Create `amplify.yml` in frontend folder:
   ```yaml
   version: 1
   applications:
     - frontend:
         phases:
           preBuild:
             commands:
               - npm install
           build:
             commands:
               - npm run build
         artifacts:
           baseDirectory: .next
           files:
             - '**/*'
         cache:
           paths:
             - node_modules/**/*
   ```

3. **Environment Variables**
   - Add in Amplify Console environment section

4. **Deploy**
   - Save and deploy

### 4. Docker Deployment

For containerized deployments.

#### Create Dockerfile:

```dockerfile
# frontend/Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Create docker-compose.yml:

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:5000/api
      - NEXT_PUBLIC_SITE_NAME=Blooms Academy
      - NEXT_PUBLIC_SITE_URL=https://bloomsacademy.com
    depends_on:
      - backend
```

#### Build and Run:

```bash
# Build image
docker build -t blooms-frontend .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=https://api.bloomsacademy.com/api \
  blooms-frontend

# Or use docker-compose
docker-compose up -d
```

### 5. Traditional VPS (Ubuntu)

For manual deployment on VPS like DigitalOcean, Linode, etc.

#### Steps:

1. **Connect to server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js and npm**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone repository**
   ```bash
   git clone <your-repo-url>
   cd your-repo/frontend
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create .env.local**
   ```bash
   nano .env.local
   # Add your environment variables
   ```

6. **Build application**
   ```bash
   npm run build
   ```

7. **Install PM2**
   ```bash
   sudo npm install -g pm2
   ```

8. **Start with PM2**
   ```bash
   pm2 start npm --name "blooms-frontend" -- start
   pm2 save
   pm2 startup
   ```

9. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

10. **SSL with Let's Encrypt**
    ```bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    ```

## 🔧 Environment Variables for Production

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.bloomsacademy.com/api

# Site Configuration
NEXT_PUBLIC_SITE_NAME=Blooms Academy
NEXT_PUBLIC_SITE_URL=https://bloomsacademy.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X

# Feature Flags (Optional)
NEXT_PUBLIC_ENABLE_CHAT=true
```

## 🎯 Performance Optimization

### 1. Image Optimization

- Use Next.js Image component
- Optimize images before upload
- Use appropriate formats (WebP, AVIF)

### 2. Caching

Configure cache headers in `next.config.ts`:

```typescript
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

### 3. CDN

- Enable CDN on your hosting platform
- Configure proper cache rules
- Use CDN for static assets

## 📊 Monitoring

### Recommended Tools

1. **Vercel Analytics** - Built-in for Vercel deployments
2. **Google Analytics** - Page views and user behavior
3. **Sentry** - Error tracking
4. **LogRocket** - Session replay
5. **Uptime Robot** - Uptime monitoring

## 🔐 Security Headers

Add security headers in `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        }
      ],
    },
  ];
}
```

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Ensure they start with `NEXT_PUBLIC_` for client-side access
- Restart dev server after adding new variables
- Check if they're properly set in hosting platform

### 404 Errors

- Verify all routes are correctly configured
- Check dynamic routes have proper folder structure
- Ensure `_app.tsx` and `_document.tsx` are correct

## 📱 Domain Configuration

### Custom Domain

1. **Add domain in hosting platform**
2. **Update DNS records**
   ```
   Type: A
   Name: @
   Value: <hosting-platform-ip>

   Type: CNAME
   Name: www
   Value: <your-domain.com>
   ```

3. **Wait for DNS propagation** (up to 48 hours)

4. **Enable SSL** - Most platforms do this automatically

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        working-directory: ./frontend
        run: npm ci
        
      - name: Build
        working-directory: ./frontend
        run: npm run build
        
      - name: Deploy
        # Add your deployment command here
        run: echo "Deploy to your hosting"
```

## 📝 Post-Deployment

- [ ] Test all pages on production
- [ ] Verify forms submit correctly
- [ ] Check API connectivity
- [ ] Test on multiple devices
- [ ] Monitor error logs
- [ ] Set up uptime monitoring
- [ ] Configure analytics

## 💡 Best Practices

1. **Always test builds locally before deploying**
2. **Use environment-specific variables**
3. **Enable HTTPS everywhere**
4. **Set up monitoring and alerts**
5. **Regular backups of data**
6. **Keep dependencies updated**
7. **Monitor performance metrics**

## 📞 Support

For deployment issues:
- Check hosting platform documentation
- Review Next.js deployment guide
- Check application logs
- Verify environment variables

---

**Happy Deploying! 🚀**
