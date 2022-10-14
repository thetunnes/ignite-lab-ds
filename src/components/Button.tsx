import { ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  
  return (
    <Comp className={clsx(
      'w-full py-4 px-3 bg-cyan-500 font-semibold rounded text-black text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-white' , {

      }
    )}>{children}</Comp>
  )
}