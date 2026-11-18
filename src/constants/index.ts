// Constants for Blooms Academy

export const SITE_CONFIG = {
  name: 'Blooms IAS Academy',
  tagline: 'Where Success Blooms',
  description: 'Premier Coaching Institute for TNPSC Examination in Tamil Nadu',
  phone: '90031 90030',
  email: 'admission@bloomsacademy.com',
  address: 'Blooms IAS Academy, Anna Nagar, Chennai - 600040, Tamil Nadu',
};

export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
  youtube: '#',
  linkedin: '#',
};

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
    hasDropdown: true,
    dropdownItems: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Vision & Mission', href: '/about#vision' },
      { label: 'Why Choose Us', href: '/about#why-choose' },
      { label: 'Our Faculty', href: '/about#faculty' },
    ]
  },
  { 
    label: 'TNPSC', 
    href: '/courses',
    hasDropdown: true,
    dropdownItems: [
      { label: 'TNPSC Syllabus', href: '/courses/syllabus' },
      { label: 'TNPSC Group I & II Preliminary Course 2026', href: '/courses/tnpsc-group-1-2-preliminary' },
      { label: 'TNPSC Gr I Preliminary & Mains (PCM)', href: '/courses/tnpsc-group-1' },
      { label: 'TNPSC Group I Mains Crash Course 2026', href: '/courses/tnpsc-group-1-mains-crash' },
      { label: "I'M TOP TNPSC Group II Mains Test Series 2026", href: '/courses/test-series-group-2' },
      { label: "I'M TOP TNPSC Group IIA Mains Test Series 2026", href: '/courses/test-series-group-2a' },
      { label: "I'M TOP TNPSC Group II Mains Test Series 2026", href: '/courses/test-series-group-2-mains' },
      { label: 'TNPSC Mains Cum Prelims Test Series (MCP) - 2027', href: '/courses/mcp-test-series' },
      { label: "I'M TOP TNPSC Group IV Test Series - 2026", href: '/courses/test-series-group-4' },
    ]
  },
  { 
    label: 'Learning Corner', 
    href: '/learning',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Study Materials', href: '/learning/materials' },
      { label: 'Current Affairs', href: '/learning/current-affairs' },
      { label: 'Previous Year Papers', href: '/learning/previous-papers' },
      { label: 'Mock Tests', href: '/learning/mock-tests' },
      { label: 'Video Lectures', href: '/learning/videos' },
    ]
  },
  { label: 'Achievements', href: '/achievements' },
  { 
    label: 'Event Gallery', 
    href: '/gallery',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Photo Gallery', href: '/gallery/photos' },
      { label: 'Video Gallery', href: '/gallery/videos' },
      { label: 'Events', href: '/gallery/events' },
      { label: 'Student Activities', href: '/gallery/activities' },
    ]
  },
];

export const COLORS = {
  primary: '#1e40af', // Blue
  secondary: '#dc2626', // Red
  accent: '#f59e0b', // Amber
  dark: '#1f2937',
  light: '#f3f4f6',
};
