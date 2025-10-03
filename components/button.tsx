import React from "react"
import { Slot } from "@radix-ui/react-slot"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
}

export function Button({ asChild = false, className = "", ...props }: ButtonProps) {
  const Cmp: React.ElementType = asChild ? (Slot ?? "button") : "button"

  return (
    <Cmp
      className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
      {...props}
    />
  )
}
