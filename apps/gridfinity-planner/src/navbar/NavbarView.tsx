import clsx from 'clsx';
import React from 'react';

export type NavbarViewProps = {
  children?: React.ReactNode;
  className?: string;
};

export const NavbarView: React.FC<NavbarViewProps> = ({ children, className }) => {
  return <div className={clsx('flex-1 flex flex-col', className)}>{children}</div>;
};
