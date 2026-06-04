'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  href?: string;
  style?: React.CSSProperties;
}

export default function Button({ variant = 'primary', children, onClick, style, href, className, ...rest }: ButtonProps) {
  const cls = `btn btn--${variant}${className ? ` ${className}` : ''}`;
  if (href) {
    return <a className={cls} href={href} style={style}>{children}</a>;
  }
  return (
    <button className={cls} onClick={onClick} style={style} {...rest}>
      {children}
    </button>
  );
}
