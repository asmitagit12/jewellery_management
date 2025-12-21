"use client"

import Image from "next/image"
import Link from "next/link"

const trendingItems = [
    {
        title: "Auspicious Occasion",
        href: "/products?cat=auspicious",
        image: "/images/trending/trending-1.jpg",
    },
    {
        title: "Gifting Jewellery",
        href: "/products?cat=gifting",
        image: "/images/trending/trending-2.jpg",
    },
    {
        title: "Drops of Radiance",
        href: "/products?cat=radiance",
        image: "/images/trending/trending-3.jpg",
    },
]

export default function TrendingCards() {
    return (
        <section className="mx-auto max-w-6xl px-8 py-10">
            <div className="text-center mb-14">
                <h2 className="text-4xl font-serif">
                    Trending Now
                </h2>
                <p className="text-lg font-serif text-muted-foreground mt-1">
                    Jewellery pieces everyone’s eyeing right now
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {trendingItems.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="group text-center"
                    >
                        <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <p className="mt-4 text-xl font-serif">
                            {item.title}
                        </p>
                    </Link>
                ))}
            </div>

        </section>
    )
}
