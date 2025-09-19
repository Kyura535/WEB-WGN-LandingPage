import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all overflow-hidden shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-emerald-500 to-teal-500 text-white [a&]:hover:from-emerald-600 [a&]:hover:to-teal-600 shadow-emerald-500/20",
        secondary:
          "border-transparent bg-gradient-to-r from-slate-600 to-slate-700 text-white [a&]:hover:from-slate-700 [a&]:hover:to-slate-800 shadow-slate-500/20",
        destructive:
          "border-transparent bg-gradient-to-r from-red-500 to-red-600 text-white [a&]:hover:from-red-600 [a&]:hover:to-red-700 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 shadow-red-500/20",
        outline:
          "text-foreground border-slate-300 dark:border-slate-600 [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
