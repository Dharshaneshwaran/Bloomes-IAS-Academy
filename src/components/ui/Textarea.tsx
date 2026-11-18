import React from 'react';

interface TextareaProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  rows?: number;
  className?: string;
  disabled?: boolean;
}

export default function Textarea({
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  error,
  rows = 4,
  className = '',
  disabled = false,
}: TextareaProps) {
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
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        disabled={disabled}
        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[var(--primary)] transition resize-none ${
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
