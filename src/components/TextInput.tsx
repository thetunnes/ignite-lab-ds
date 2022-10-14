import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot"
export interface RootProps {
  children: ReactNode;
}

function TextInputRoot(props: RootProps) {
  return (
    <div className="w-full flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'


export interface IconProps {
  children: ReactNode
}
function TextInputIcon(props: IconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
function TextInputInput({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className="outline-none bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400"
    />
  );
}

TextInputInput.displayName = 'TextInput.Input'


export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
