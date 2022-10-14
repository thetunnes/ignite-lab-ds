import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  
  return (
    <Comp 
    { ...rest }
    className={clsx(
      'w-full py-4 px-3 bg-cyan-500 font-semibold rounded text-black text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-white' ,
      {},
      className
    )}>{children}</Comp>
  )
}