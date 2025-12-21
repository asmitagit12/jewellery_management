import Image from "next/image"

const items = [
    {
        title: "Women Jewellery",
        image: "/images/curated/women.jpg",
    },
    {
        title: "Men Jewellery",
        image: "/images/curated/men.png",
    },
    {
        title: "Kids Jewellery",
        image: "/images/curated/kids.png",
    },
]

export default function CuratedForYou() {
    return (
        <section className="mx-auto max-w-6xl px-8 py-10">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-4xl font-serif text-black">
                    Curated For You
                </h2>
                <p className="text-lg font-serif  text-gray-600 mt-1">
                    Shop By Gender
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((item, index) => (
                    <div key={index} className="text-center">
                        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <p className="mt-4 text-lg font-serif text-black">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
