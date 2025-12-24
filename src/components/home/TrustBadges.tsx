"use client"

import { Separator } from "@/components/ui/separator"

const trustFeatures = [
    { label: "100% Certified Jewellery", icon: "https://cdn.orra.co.in/media/anniversary_page/certifiedjewellery.svg" },
    { label: "BIS Hallmarked Gold Jewellery", icon: "https://cdn.orra.co.in/media/anniversary_page/Hallmarked.svg" },
    { label: "Lifetime Exchange", icon: "https://cdn.orra.co.in/media/anniversary_page/lifetime-exchange.svg" },
    { label: "Lifetime Buyback", icon: "https://cdn.orra.co.in/media/anniversary_page/lifetimebuyback.svg" },
    { label: "7 Days Return Policy", icon: "https://cdn.orra.co.in/media/anniversary_page/7days-return.svg" },
    { label: "1 Year Free Insurance", icon: "https://cdn.orra.co.in/media/anniversary_page/1year.svg" },
    { label: "6 Months Free Product Upgrade", icon: "https://cdn.orra.co.in/media/anniversary_page/6monthsupdgrade.svg" },
    { label: "Free Shipping", icon: "https://cdn.orra.co.in/media/anniversary_page/free-shipping.svg" },
]

export default function TrustBadges() {
    return (
        <section className="w-full bg-white overflow-x-hidden">
            <div className="w-full px-4 py-8 overflow-x-hidden">
                <div
                    className="
                    mx-auto max-w-8xl
                    grid grid-cols-[1fr_auto_1fr]
                    items-center gap-4
                "
                >
                    <Separator />
                    <p className="text-center text-sm md:text-lg italic text-muted-foreground max-w-lg">
                        Crafted with love, our jewellery becomes a timeless part of your unforgettable moments.
                    </p>
                    <Separator />
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-8 mt-4">
                <div className="hidden md:grid grid-cols-8 gap-6">
                    {trustFeatures.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center gap-3"
                        >
                            <div className="relative h-20 w-20 flex items-center justify-center">
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="h-40 w-40 object-contain"
                                />

                            </div>
                            <p className="text-xs md:text-sm leading-snug">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="md:hidden overflow-x-hidden">
                    <div className="flex gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-4 px-1">
                        {trustFeatures.map((item, i) => (
                            <div
                                key={i}
                                className="snap-start shrink-0 w-27.5 flex flex-col items-center text-center gap-3"
                            >
                                <div className="relative h-20 w-20 flex items-center justify-center">
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className="h-30 w-30 object-contain"
                                    />

                                </div>
                                <p className="text-xs leading-snug">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
