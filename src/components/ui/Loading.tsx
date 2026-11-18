import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function Loading({ size = 'md', text }: LoadingProps) {
  const sizeStyles = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div
        className={`${sizeStyles[size]} border-[var(--primary)] border-t-transparent rounded-full animate-spin`}
      ></div>
      {text && (
        <p className="mt-4 text-gray-600">{text}</p>
      )}
    </div>
  );
}
