"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselImages = [
    "/images/login-1.jpg",
    "/images/login-2.jpeg",
    "/images/login-3.jpg",
    "/images/login-4.jpg",
];

const carouselText = [
    "Crafting elegance in every detail",
    "Luxury that speaks without words",
    "A collection inspired by tradition & class",
    "Where beauty meets craftsmanship",
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % carouselImages.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
                    <Image
                        src={carouselImages[index]}
                        alt="Jewellery Showcase"
                        fill
                        className="object-cover transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-6">
                        <h2 className="text-3xl font-serif font-bold">SwarNika Jewels</h2>
                        <p className="text-md font-serif mt-2">{carouselText[index]}</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
                    {children}
                </div>

            </div>
        </div>
    );
}
