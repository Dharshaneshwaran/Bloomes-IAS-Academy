import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/constants';

type Column = { heading: string; links: { label: string; href: string }[] };

// Only routes that exist in src/app. Course ids match src/data/courses.ts.
const columns: Column[] = [
  {
    heading: 'TNPSC courses',
    links: [
      { label: 'Group I Prelims & Mains', href: '/courses/1' },
      { label: 'Group II Prelims', href: '/courses/2' },
      { label: 'Group II & IIA combined', href: '/courses/3' },
      { label: 'Group IV crash course', href: '/courses/4' },
      { label: 'VAO', href: '/courses/5' },
    ],
  },
  {
    heading: 'Practice',
    links: [
      { label: 'Test series, all groups', href: '/courses/7' },
      { label: 'Group I Mains crash course', href: '/courses/6' },
      { label: 'Interview guidance', href: '/courses/8' },
      { label: 'All courses', href: '/courses' },
    ],
  },
  {
    heading: 'Academy',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Results', href: '/achievements' },
      { label: 'Student voices', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

// Icons render only once a real profile URL replaces '#' in src/constants.
const social = [
  { name: 'YouTube', href: SOCIAL_LINKS.youtube, Icon: FaYoutube },
  { name: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: FaInstagram },
  { name: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: FaFacebookF },
  { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: FaLinkedinIn },
  { name: 'X', href: SOCIAL_LINKS.twitter, Icon: FaXTwitter },
].filter((s) => s.href && s.href !== '#');

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

const linkClass = `flex min-h-11 items-center rounded-sm py-2 text-[14px] leading-5 text-white/80 underline-offset-4 transition-colors duration-150 hover:text-white hover:underline md:min-h-8 motion-reduce:transition-none ${focusRing}`;

const headingClass =
  'mb-2 font-heading text-[15px] font-semibold leading-6 tracking-normal text-white';

function FooterColumn({ column }: { column: Column }) {
  return (
    <div className="min-w-0">
      <h2 className={headingClass}>{column.heading}</h2>
      <nav aria-label={column.heading} className="flex flex-col">
        {column.links.map((l) => (
          <Link key={l.href} href={l.href} className={linkClass}>
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function FooterNew() {
  const year = new Date().getFullYear();
  const address = SITE_CONFIG.address.replace(`${SITE_CONFIG.name}, `, '');
  const tel = SITE_CONFIG.phone.replace(/\s/g, '');

  return (
    <footer className="bg-[#1E3A8A] text-white">
      {/* Red band ties the footer to the red top bar in the header */}
      <div aria-hidden="true" className="h-1.5 bg-[var(--primary)]" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-10">
        {/* Brand row */}
        <div className="flex flex-col gap-6 border-b border-white/20 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label={`${SITE_CONFIG.name} home`} className={`flex items-center gap-3 rounded-sm ${focusRing}`}>
            <span className="flex size-10 items-center justify-center rounded-md bg-[var(--primary)]">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path
                  d="M16 8L18 14L22 10L20 16L26 14L22 18L28 20L22 22L24 28L18 24L20 30L16 26L12 30L14 24L8 28L10 22L4 20L10 18L6 14L12 16L10 10L14 14L16 8Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <span className="block font-heading text-lg font-semibold leading-tight">{SITE_CONFIG.name}</span>
              <span className="block text-[13px] text-white/70">TNPSC coaching, Anna Nagar, Chennai</span>
            </span>
          </Link>

          <a
            href={`tel:${tel}`}
            className={`inline-flex w-fit items-center gap-3 rounded-md border border-white/30 px-4 py-2.5 transition-colors duration-150 hover:border-white hover:bg-white/10 motion-reduce:transition-none ${focusRing}`}
          >
            <span className="text-[13px] text-white/75">Admissions</span>
            <span className="font-heading text-lg font-semibold tabular-nums">{SITE_CONFIG.phone}</span>
          </a>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:gap-x-10">
          {columns.map((c) => (
            <FooterColumn key={c.heading} column={c} />
          ))}

          <div className="col-span-2 min-w-0 md:col-span-1">
            <h2 className={headingClass}>Visit us</h2>
            <address className="py-2 text-[14px] not-italic leading-6 text-white/80">{address}</address>
            <a href={`mailto:${SITE_CONFIG.email}`} className={`${linkClass} break-all`}>
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Social row */}
        {social.length > 0 && (
          <ul className="-ml-2.5 flex items-center gap-2 border-t border-white/20 py-2">
            {social.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE_CONFIG.name} on ${name}`}
                  className={`flex size-11 items-center justify-center rounded-md text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white motion-reduce:transition-none ${focusRing}`}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Legal bar */}
        <div className="flex flex-col gap-2 border-t border-white/20 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] font-medium text-white">
            © {year} {SITE_CONFIG.name}
          </p>
          <p className="text-[13px] text-white/70">Coaching for TNPSC Group I, II, IIA, IV and VAO</p>
        </div>
      </div>
    </footer>
  );
}
