"use client"

import Link from "next/link"
import { Gem, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-white px-6 text-center">
            <Gem className="h-16 w-16 text-amber-600 mb-4" />

            <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Page Not Found
            </h1>

            <p className="text-gray-600 max-w-md mb-8">
                The page you’re looking for doesn’t exist or may have been moved.
                Please check the URL or return to the dashboard.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-white hover:bg-amber-700 transition"
            >
                <ArrowLeft size={18} />
                Go Back to Home
            </Link>
        </div>
    )
}
