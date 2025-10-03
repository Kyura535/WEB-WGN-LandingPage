"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-emerald-900 text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-slate-300 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/">
          <button className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3 text-white">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}