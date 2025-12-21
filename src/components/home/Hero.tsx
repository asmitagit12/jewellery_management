"use client"

import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const slides = [
    {
        image: "/images/hero-1.jpg",
        title: "Timeless Jewellery",
        subtitle: "Elegance crafted for every occasion",
    },
    {
        image: "/images/hero-4.jpg",
        title: "Wedding Collection",
        subtitle: "Celebrate love with eternal designs",
    },
    {
        image: "/images/hero-3.jpeg",
        title: "Everyday Luxury",
        subtitle: "Grace that complements your style",
    },
]

export default function Hero() {
    return (
        <section className="w-full overflow-x-hidden py-4 sm:py-6">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                            stopOnInteraction: false,
                        }),
                    ]}
                >
                    <CarouselContent className="-ml-4 sm:-ml-6">
                        {slides.map((slide, index) => (
                            <CarouselItem
                                key={index}
                                className="
                  pl-4 sm:pl-6
                  basis-full
                  sm:basis-[90%]
                  lg:basis-[85%]
                "
                            >
                                <div className="
                  relative
                  w-full
                  h-[240px]
                  sm:h-[380px]
                  lg:h-[500px]
                  overflow-hidden
                  rounded-xl sm:rounded-2xl
                ">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        priority={index === 0}
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden lg:flex left-2" />
                    <CarouselNext className="hidden lg:flex right-2" />
                </Carousel>
            </div>
        </section>
    )
}
