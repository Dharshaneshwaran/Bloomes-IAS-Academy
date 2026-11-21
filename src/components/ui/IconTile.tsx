import React from 'react';
import type { IconType } from 'react-icons';

type Tone = 'red' | 'navy' | 'onDark' | 'solidRed';
type Size = 'sm' | 'md' | 'lg';

interface IconTileProps {
  icon: IconType;
  tone?: Tone;
  size?: Size;
  className?: string;
}

const toneStyles: Record<Tone, string> = {
  red: 'bg-red-50 text-red-700 ring-1 ring-inset ring-red-100',
  navy: 'bg-slate-100 text-blue-900 ring-1 ring-inset ring-slate-200',
  onDark: 'bg-white/10 text-white ring-1 ring-inset ring-white/15',
  solidRed: 'bg-red-700 text-white',
};

const sizeStyles: Record<Size, { box: string; icon: number }> = {
  sm: { box: 'w-9 h-9 rounded-lg', icon: 18 },
  md: { box: 'w-11 h-11 rounded-xl', icon: 22 },
  lg: { box: 'w-14 h-14 rounded-2xl', icon: 26 },
};

/** Consistent line-icon tile used across sections. */
export default function IconTile({ icon: Icon, tone = 'red', size = 'md', className = '' }: IconTileProps) {
  const s = sizeStyles[size];
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center flex-shrink-0 ${s.box} ${toneStyles[tone]} ${className}`}
    >
      <Icon size={s.icon} strokeWidth={1.75} />
    </span>
  );
}
