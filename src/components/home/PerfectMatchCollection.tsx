"use client"

import Image from "next/image"
import Link from "next/link"

const categories = [
    {
        title: "EARRINGS",
        href: "/products?cat=earrings",
        image: "/images/perfect-match/earings.jpg",
    },
    {
        title: "FINGER RINGS",
        href: "/products?cat=rings",
        image: "/images/perfect-match/ring.jpg",
    },
    {
        title: "PENDANTS",
        href: "/products?cat=pendants",
        image: "/images/perfect-match/pendent1.jpg",
    },
    {
        title: "MANGALSUTRA",
        href: "/products?cat=mangalsutra",
        image: "/images/perfect-match/mangalsutra.jpg",
    },
    {
        title: "BANGLES",
        href: "/products?cat=bangles",
        image: "/images/perfect-match/bangles.jpg",
    },
    {
        title: "BRACELETS",
        href: "/products?cat=bracelets",
        image: "/images/perfect-match/bracelet.jpg",
    },
    {
        title: "NECKLACES",
        href: "/products?cat=necklaces",
        image: "/images/perfect-match/chain.jpg",
    },
]

export default function PerfectMatchCollection() {
    return (
        <section className="mx-auto max-w-6xl px-8 py-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif">
                    Find Your Perfect Match
                </h2>
                <p className="text-lg font-serif text-muted-foreground mt-1">
                    Shop by Categories
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                {categories.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="group text-center"
                    >
                        <div className="relative overflow-hidden rounded-2xl aspect-square">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <p className="mt-4 text-md font-serif tracking-widest font-medium">
                            {item.title}
                        </p>
                    </Link>
                ))}

                <div className="flex items-center justify-center rounded-2xl border aspect-square">
                    <div className="text-center">
                        <p className="text-4xl font-serif text-[#7A2E2E]">10+</p>
                        <p className="text-lg text-muted-foreground mt-1">
                            Categories to chose from
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
