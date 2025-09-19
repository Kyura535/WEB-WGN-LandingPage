import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-emerald-500 focus-visible:ring-emerald-500/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/50 flex field-sizing-content min-h-24 w-full rounded-lg border bg-transparent px-4 py-3 text-base shadow-sm transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "hover:border-slate-400 dark:hover:border-slate-500",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
