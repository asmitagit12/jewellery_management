"use client"

import Image from "next/image"
import Link from "next/link"

export default function CollectionCollage() {
    return (
        <section className="mx-auto max-w-6xl px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Link
                    href="/products?cat=floral"
                    className="relative overflow-hidden rounded-2xl group h-[520px] lg:h-[620px]"
                >
                    <Image
                        src="/images/collection/floral-bloom-desktop.png"
                        alt="Floral Bloom"
                        fill
                        priority
                        className="object-fit transition-transform duration-700 group-hover:scale-105"
                    />
                </Link>

                <div className="flex flex-col gap-4">

                    <Link
                        href="/products?cat=earrings"
                        className="relative overflow-hidden rounded-2xl group h-[250px] lg:h-[300px]"
                    >
                        <Image
                            src="/images/collection/stunning-every-ear.png"
                            alt="Earrings"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </Link>

                    <Link
                        href="/products?cat=wedding"
                        className="relative overflow-hidden rounded-2xl group h-[250px] lg:h-[300px]"
                    >
                        <Image
                            src="/images/collection/wedding-gifts.jpg"
                            alt="Wedding Gifts"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}
