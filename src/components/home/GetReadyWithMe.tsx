"use client"

import { useRef, useState } from "react"
import { Search, X, Plus, ChevronDown } from "lucide-react"

const grwmItems = [
    {
        video: "/videos/grwm/grwm-1.mp4",
        title: "Cira Antique Necklace Set",
        price: "₹ 6,149",
        products: [
            {
                name: "Cira Antique Necklace Set",
                price: "₹ 6,149",
                image: "/images/grwm/j1.jpg",
            },
            {
                name: "Classic Two-Layer Antique Bangles",
                price: "₹ 3,639",
                image: "/images/grwm/j2.jpg",
            },
        ],
    },
    {
        video: "/videos/grwm/grwm-2.mp4",
        title: "Niladri Antique Necklace Set",
        price: "₹ 4,759",
        products: [
            {
                name: "Niladri Antique Necklace Set",
                price: "₹ 4,759",
                image: "/images/grwm/j3.jpg",
            },
            {
                name: "Sarang Antique Bangles",
                price: "From ₹ 2,894",
                image: "/images/grwm/j4.jpg",
            },
            {
                name: "Cira Antique Necklace Set",
                price: "₹ 6,149",
                image: "/images/grwm/j5.jpg",
            },

        ],
    },
    {
        video: "/videos/grwm/grwm-3.mp4",
        title: "Drisana Antique Choker Set",
        price: "₹ 5,159",
        products: [
            {
                name: "Classic Two-Layer Antique Bangles",
                price: "₹ 3,639",
                image: "/images/grwm/j6.jpg",
            },
            {
                name: "Drisana Antique Choker Set",
                price: "₹ 5,159",
                image: "/images/grwm/j7.jpg",
            },
        ],
    },
    {
        video: "/videos/grwm/grwm-4.mp4",
        title: "Parag Antique Coin Necklace",
        price: "₹ 2,349",
        products: [
            {
                name: "Parag Antique Coin Necklace",
                price: "₹ 2,349",
                image: "/images/grwm/j8.jpg",
            },
            {
                name: "Cira Antique Necklace Set",
                price: "₹ 6,149",
                image: "/images/grwm/j9.jpg",
            },
        ],
    },
]

export default function GetReadyWithMe() {
    return (
        <section className="mx-auto max-w-6xl px-4 md:px-8 py-10 overflow-x-hidden">
            <div className="text-center mb-8 md:mb-10">
                 <h2 className="text-2xl md:text-4xl font-serif font-semibold mt-1">
                    GRWM at SwarNika
                </h2>
                <p className="text-lg tracking-wide text-muted-foreground">
                    Curated specially for you
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {grwmItems.map((item, index) => (
                    <GRWMCard key={index} item={item} />
                ))}
            </div>
        </section>
    )
}

export function GRWMCard({
    item,
}: {
    item: {
        video: string
        title: string
        price: string
        products: {
            name: string
            price: string
            image: string
        }[]
    }
}) {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <video
                    ref={videoRef}
                    src={item.video}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                    onMouseEnter={() => videoRef.current?.play()}
                    onMouseLeave={() => videoRef.current?.pause()}
                />

                {open && (
                    <div
                        className="absolute inset-0 bg-black/40 z-10"
                        onClick={() => setOpen(false)}
                    />
                )}

                <button
                    onClick={() => setOpen(true)}
                    className="absolute bottom-3 right-3 z-20 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white flex items-center justify-center shadow"
                >
                    <Search size={16} />
                </button>

                <div
                    className={`absolute left-0 right-0 bottom-0 z-30 bg-white rounded-t-2xl p-4
                    transition-transform duration-300 ease-out
                    ${open ? "translate-y-0" : "translate-y-full"}
                    h-full`}
                >
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold">
                            Products in this look
                        </p>
                        <button
                            onClick={() => setOpen(false)}
                            className="h-8 w-8 flex items-center justify-center rounded-md border"
                        >
                            <ChevronDown size={20} />
                        </button>
                    </div>

                    <div className="space-y-4 overflow-y-auto h-full pr-1">
                        {item.products.map((p: any, i: number) => (
                            <div
                                key={i}
                                className="flex items-center gap-3"
                            >
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="h-12 w-12 rounded-md object-cover flex-shrink-0"
                                />

                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-medium truncate">
                                        {p.name}
                                    </p>
                                    <p className="text-xs font-semibold">
                                        {p.price}
                                    </p>
                                </div>

                                <button className="h-7 w-7 rounded-sm bg-black text-white flex items-center justify-center">
                                    <Plus size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-2 md:mt-3 bg-white rounded-xl p-2.5 md:p-3 shadow-sm">
                <p className="text-xs md:text-sm font-medium line-clamp-1">
                    {item.title}
                </p>
                <p className="text-xs md:text-sm font-semibold mt-0.5">
                    {item.price}
                </p>
            </div>
        </div>
    )
}

