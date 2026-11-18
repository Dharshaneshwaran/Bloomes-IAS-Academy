# Get Your Hosted Link in 5 Minutes! 🚀

Follow these simple steps to get your website live with a public URL.

## Option 1: Vercel (Easiest & Free) ⚡

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" 
3. Choose "Continue with GitHub" (recommended)

### Step 2: Install Vercel CLI
Open your terminal and run:
```bash
npm install -g vercel
```

### Step 3: Deploy from Terminal
```bash
cd "C:\Users\Yashwant\Documents\blooms academy\frontend"
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- What's your project name? **blooms-academy** (or any name)
- In which directory is your code? **./**
- Want to override settings? **No**

**You'll get a live URL immediately!** Something like:
`https://blooms-academy-xxx.vercel.app`

### Step 4: Set Environment Variables (Optional)
```bash
vercel env add NEXT_PUBLIC_API_URL
```
Enter your backend API URL when prompted.

---

## Option 2: Netlify (Also Free) 🎯

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login and Deploy
```bash
cd "C:\Users\Yashwant\Documents\blooms academy\frontend"
netlify login
netlify deploy
```

Follow prompts:
- Create new site? **Yes**
- Team? **Your team**
- Site name? **blooms-academy**
- Deploy path? **.next**

For production:
```bash
netlify deploy --prod
```

**You'll get:** `https://blooms-academy.netlify.app`

---

## Option 3: Railway (Backend + Frontend) 🚂

### Step 1: Create Account
Go to [railway.app](https://railway.app)

### Step 2: New Project
1. Click "New Project"
2. Choose "Deploy from GitHub repo"
3. Connect your repository
4. Railway auto-detects Next.js and deploys!

**You'll get:** `https://blooms-academy.up.railway.app`

---

## Option 4: GitHub Pages (Free Static) 📄

### Step 1: Build Static Export
Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
};
```

### Step 2: Build and Deploy
```bash
npm run build
npx gh-pages -d out
```

**You'll get:** `https://yourusername.github.io/blooms-academy`

---

## Quick Deploy Commands Cheatsheet

### Vercel
```bash
npm i -g vercel
cd "C:\Users\Yashwant\Documents\blooms academy\frontend"
vercel
```

### Netlify
```bash
npm i -g netlify-cli
cd "C:\Users\Yashwant\Documents\blooms academy\frontend"
netlify login
netlify deploy --prod
```

### Manual Upload to Vercel (No CLI)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Upload your `frontend` folder
4. Click "Deploy"
5. Done! You get a live link

---

## Environment Variables Needed

When deploying, add these environment variables in your hosting platform dashboard:

```
NEXT_PUBLIC_API_URL=https://your-backend-api.com/api
NEXT_PUBLIC_SITE_NAME=Blooms Academy
NEXT_PUBLIC_SITE_URL=https://your-deployed-url.vercel.app
```

---

## Troubleshooting

### Build fails on deployment?
Make sure to commit all files:
```bash
git add .
git commit -m "Ready for deployment"
git push
```

### Getting errors?
Check the build locally first:
```bash
npm run build
```

### Need custom domain?
Most platforms allow free custom domains:
- Vercel: Project Settings → Domains
- Netlify: Site Settings → Domain Management

---

## What You'll Get

✅ **Live Website URL** - Share with anyone
✅ **HTTPS** - Secure connection
✅ **Auto-deploys** - Push to update
✅ **Free hosting** - All these options are free
✅ **CDN** - Fast global delivery

---

## Recommended: Vercel

**Why Vercel?**
- Made by Next.js creators
- Zero configuration
- Instant deployment
- Free SSL certificate
- Global CDN
- Perfect for Next.js

**Just run:**
```bash
npx vercel
```

You'll get a hosted link in less than 2 minutes! 🎉

---

## Need Help?

If you encounter any issues:
1. Make sure `npm run build` works locally
2. Check environment variables are set
3. Verify all files are committed (if using Git)
4. Check deployment logs in platform dashboard

**Ready to deploy? Pick any option above and get your link! 🚀**
