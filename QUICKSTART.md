# Quick Start Guide - Blooms Academy Frontend

Get up and running in 5 minutes!

## ⚡ Quick Setup

### 1. Install Dependencies (2 min)

```bash
cd frontend
npm install
```

### 2. Configure Environment (1 min)

```bash
# Copy example environment file
cp .env.example .env.local

# Edit .env.local with your values
# NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Start Development Server (1 min)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎉 You're Done!

The website should now be running with:
- ✅ Homepage with hero section
- ✅ Courses page with 8 sample courses
- ✅ About page with academy information
- ✅ Contact page with functional form
- ✅ Achievements page with success stories
- ✅ Testimonials page with student reviews

## 📍 Available Routes

- `/` - Homepage
- `/about` - About us
- `/courses` - All courses
- `/courses/[id]` - Course details
- `/achievements` - Our achievements
- `/testimonials` - Student testimonials
- `/contact` - Contact form

## 🔌 Testing Without Backend

The app works with mock data by default. To connect to a real backend:

1. Ensure backend is running on port 5000
2. Update `NEXT_PUBLIC_API_URL` in `.env.local`
3. Backend should implement endpoints in `API_INTEGRATION.md`

## 🎨 Customization Quick Tips

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: #1e40af;    /* Your brand blue */
  --secondary: #dc2626;  /* Your accent red */
  --accent: #f59e0b;     /* Highlight color */
}
```

### Update Site Info

Edit `src/constants/index.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Academy Name',
  phone: 'Your Phone',
  email: 'your@email.com',
  // ... more config
};
```

### Add New Page

```bash
# Create new folder in app directory
mkdir src/app/new-page

# Create page.tsx
touch src/app/new-page/page.tsx
```

## 🐛 Common Issues

### Port 3000 Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Styles Not Loading

```bash
# Restart dev server
# Press Ctrl+C and run again
npm run dev
```

## 📚 Next Steps

1. Read full [README.md](./README.md) for detailed documentation
2. Check [API_INTEGRATION.md](./API_INTEGRATION.md) for backend connection
3. Review [DEPLOYMENT.md](./DEPLOYMENT.md) when ready to deploy
4. Explore components in `src/components/`
5. Customize data in `src/data/`

## 💡 Pro Tips

- **Hot Reload**: Changes auto-refresh in browser
- **TypeScript**: Get autocomplete in VS Code
- **Console**: Check browser console for errors
- **Network**: Check network tab for API calls

## 🎓 Learn More

- Explore the `src/` folder to see code organization
- Check components in `src/components/ui/` for reusable pieces
- Look at `src/lib/services/` for API integration examples
- Read inline comments for component documentation

## 📞 Need Help?

- Check README.md for detailed info
- Review error messages in terminal
- Check browser console for frontend errors
- Ensure all environment variables are set

---

**Happy Coding! 🚀**
