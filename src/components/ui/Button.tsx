import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer border-2';
  
  const variantStyles = {
    primary: 'bg-[var(--primary)] text-white border-[var(--primary)] hover:bg-[var(--color-blue-900)] hover:border-[var(--color-blue-900)] hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-[var(--secondary)] text-white border-[var(--secondary)] hover:bg-[var(--color-red-700)] hover:border-[var(--color-red-700)] hover:shadow-lg hover:-translate-y-0.5',
    outline: 'bg-transparent text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:shadow-lg',
    ghost: 'bg-transparent text-[var(--dark)] border-transparent hover:bg-gray-100',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:transform-none' : '';
  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
