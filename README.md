# Blooms Academy - Frontend

A modern, responsive Next.js frontend for Blooms Academy - Premier Civil Services Coaching Institute.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modular Architecture**: Clean, scalable folder structure
- **Type-Safe**: Complete TypeScript implementation
- **API Integration**: Ready-to-use API services with error handling
- **Custom Theming**: IBM Plex Sans font with custom color palette
- **Animations**: Smooth transitions and engaging user interactions
- **SEO Optimized**: Proper metadata and semantic HTML

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Backend API running (see API_INTEGRATION.md)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Update the values in `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_SITE_NAME=Blooms Academy
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
frontend/
├── public/                  # Static assets
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── courses/       # Courses pages
│   │   ├── achievements/  # Achievements page
│   │   ├── testimonials/  # Testimonials page
│   │   ├── contact/       # Contact page
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles
│   ├── components/
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── modules/       # Feature modules
│   │   └── ui/            # Reusable UI components
│   ├── lib/
│   │   ├── api.ts         # API client configuration
│   │   ├── services/      # API service modules
│   │   └── utils/         # Utility functions
│   ├── data/              # Mock data
│   ├── types/             # TypeScript types
│   └── constants/         # App constants
├── .env.example           # Example environment variables
├── .env.local            # Local environment variables (create this)
├── API_INTEGRATION.md    # API integration guide
├── package.json
└── README.md
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#1e40af) - Main brand color
- **Secondary**: Red (#dc2626) - Accent color
- **Accent**: Amber (#f59e0b) - Highlights
- **Dark**: Gray (#111827) - Text color
- **Light**: Gray (#f3f4f6) - Background

### Typography

- **Font Family**: IBM Plex Sans (Apache alternative)
- **Headings**: Bold, responsive sizing
- **Body**: Regular weight, optimized line height

### Components

All components follow a consistent design pattern:
- Responsive by default
- Hover effects and transitions
- Accessible (ARIA labels, semantic HTML)
- Reusable and composable

## 📄 Available Pages

### Public Pages

1. **Home** (`/`) - Hero, features, about, online classes, CTA
2. **About** (`/about`) - Story, mission, vision, values, timeline, team
3. **Courses** (`/courses`) - Course listings with filters
4. **Course Detail** (`/courses/[id]`) - Detailed course information
5. **Achievements** (`/achievements`) - Success stats, rank holders
6. **Testimonials** (`/testimonials`) - Student reviews and ratings
7. **Contact** (`/contact`) - Contact form, information, branches

## 🔌 API Integration

The frontend is ready to connect to a backend API. See `API_INTEGRATION.md` for:

- Service modules documentation
- API endpoint requirements
- Error handling
- Authentication flow
- Testing without backend

### Quick Start with API

```typescript
import { courseService } from '@/lib/services';

// Fetch courses
const result = await courseService.getAllCourses();
if (result.success) {
  console.log(result.data);
}
```

## 🧩 Key Components

### Layout Components

- **Header**: Sticky navigation with mobile menu
- **Footer**: Links, contact info, social media

### UI Components

- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Hover effects, shadow variants
- **Input/Textarea**: Form inputs with validation
- **Section**: Consistent page sections
- **Loading**: Loading spinner

### Module Components

- **Hero**: Homepage hero section
- **Features**: Feature grid with icons
- **CourseCard**: Course display card
- **TestimonialsCarousel**: Testimonial slider
- **AchievementsGrid**: Achievement stats

## 🚀 Build for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Lint code**
   ```bash
   npm run lint
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are mobile-first and fully responsive.

## 🎯 Performance Optimization

- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components load on demand
- **Font Optimization**: Google Fonts with display=swap
- **CSS Optimization**: Tailwind CSS purging

## 🔒 Security

- **Environment Variables**: Sensitive data in .env files
- **API Security**: Token-based authentication
- **Input Validation**: Client-side validation for forms
- **XSS Protection**: React's built-in protection
- **HTTPS**: Always use HTTPS in production

## 🧪 Testing

### Manual Testing

1. Test all pages on different devices
2. Verify form submissions
3. Check responsive design
4. Test navigation
5. Verify API integration

### Recommended Testing Tools

- **Component Testing**: Jest + React Testing Library
- **E2E Testing**: Playwright or Cypress
- **Performance**: Lighthouse
- **Accessibility**: axe DevTools

## 🐛 Troubleshooting

### Common Issues

**Issue**: Module not found errors
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**Issue**: API connection errors
```bash
# Solution: Check .env.local file
# Verify NEXT_PUBLIC_API_URL is correct
# Ensure backend is running
```

**Issue**: Styling not applying
```bash
# Solution: Restart dev server
npm run dev
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for type safety
3. Write responsive, accessible components
4. Test on multiple devices
5. Document new features

## 📝 Code Style

- Use TypeScript for all files
- Follow ESLint rules
- Use functional components with hooks
- Prefer named exports
- Keep components small and focused
- Use descriptive variable names

## 🔄 Development Workflow

1. Create feature branch
2. Develop and test locally
3. Ensure all pages work
4. Check responsive design
5. Verify API integration
6. Create pull request

## 📞 Support

For issues or questions:
- Check API_INTEGRATION.md for API setup
- Review component documentation
- Check console for errors

## 📄 License

© 2026 Blooms Academy. All rights reserved.

---

**Built with ❤️ by Blooms Academy Team**
