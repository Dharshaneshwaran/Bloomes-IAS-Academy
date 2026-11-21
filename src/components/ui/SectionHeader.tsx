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
        <p className="text-red-700 font-semibold text-xs uppercase tracking-[0.14em] mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
