import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'primary';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-[var(--light)]',
    dark: 'bg-[var(--dark)] text-white',
    primary: 'bg-[var(--primary)] text-white',
  };

  const paddingStyles = {
    none: '',
    sm: 'py-8',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
  };

  return (
    <section className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
