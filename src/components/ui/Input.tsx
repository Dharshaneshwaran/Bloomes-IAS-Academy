import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  className?: string;
  disabled?: boolean;
}

export default function Input({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  error,
  className = '',
  disabled = false,
}: InputProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-[var(--dark)] mb-2"
        >
          {label}
          {required && <span className="text-[var(--secondary)] ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[var(--primary)] transition ${
          error
            ? 'border-[var(--secondary)]'
            : 'border-gray-300'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
      />
      {error && (
        <p className="mt-1 text-sm text-[var(--secondary)]">{error}</p>
      )}
    </div>
  );
}
