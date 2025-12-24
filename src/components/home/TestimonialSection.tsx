"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState } from "react"

const reviews = [
    {
        text: `I recently purchased a necklace from this jewellery store and was
    absolutely blown away by the quality and design. The staff was warm,
    welcoming, and helped me choose the perfect piece.`,
        name: "Jhon Doe",
        role: "Customer",
        avatar: "/images/testi_1.jpg",
    },
    {
        text: `Beautiful craftsmanship and excellent service. The jewellery arrived
    perfectly packaged and on time. I’ve already recommended SwarNika to my
    friends and family.`,
        name: "Priya Sharma",
        role: "Customer",
        avatar: "/images/testi_2.jpg",
    },
]

export default function TestimonialSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on("select", onSelect)
        onSelect()
    }, [emblaApi])

    return (
        <section className="mx-auto max-w-6xl px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* LEFT: Carousel */}
                <div>
                    <h2 className="font-serif text-3xl font-semibold mb-2">
                        Our Customers Speak for Us
                    </h2>

                    <span className="text-6xl text-[#b08a6c] block">❝</span>

                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="min-w-full"
                                >
                                    <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">
                                        {review.text}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-medium">{review.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {review.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-2 mt-6 ml-14">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`h-2 w-2 rounded-full transition ${selectedIndex === index
                                    ? "bg-[#b08a6c]"
                                    : "bg-[#d6c2b4]"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT: Static Image */}
                <div className="flex justify-center md:justify-end">
                    <div
                        className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px]
               rounded-t-full rounded-b-none overflow-hidden"
                    >
                        <Image
                            src="/images/Tstimonial.jpg"
                            alt="Jewellery Model"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>


            </div>
        </section>
    )
}
