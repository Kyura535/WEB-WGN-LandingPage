"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, RotateCcw } from "lucide-react"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-emerald-900 text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">500</h1>
        <h2 className="text-2xl font-semibold mb-6">Something went wrong!</h2>
        <p className="text-slate-300 mb-8">
          We're sorry, but something went wrong on our end. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3"
            onClick={() => reset()}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="rounded-full border-2 border-slate-600 text-white hover:bg-slate-800 hover:border-emerald-500 px-6 py-3">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}