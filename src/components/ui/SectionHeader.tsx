import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignStyles[align]} ${className}`}>
      {subtitle && (
        <p className="text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
