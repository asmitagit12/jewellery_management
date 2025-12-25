import Image from "next/image"
import Link from "next/link"

export default function CollageWorld() {
    return (
        <section className="mx-auto max-w-6xl px-8 py-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-semibold">
                    SwarNika World
                </h2>
                <p className="text-lg text-muted-foreground">
                    A companion for every occasion
                </p>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                <div className="flex flex-col gap-2">
                    <CollageCard
                        title="Bridal Elegance"
                        subTitle="For vows, rituals & forever moments"
                        image="/images/world/wedding.png"
                    />
                    <CollageCard
                        title="Golden Heritage"
                        subTitle="Classic gold, crafted for generations"
                        image="/images/world/gold.png"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <CollageCard
                        title="Diamond Dreams"
                        subTitle="Brilliance that lasts forever"
                        image="/images/world/diamond.png"
                    />
                    <CollageCard
                        title="Everyday Grace"
                        subTitle="Effortless elegance, every single day"
                        image="/images/world/dailywear.png"
                    />
                </div>
            </div>
        </section>
    )
}

function CollageCard({
    title,
    subTitle,
    image,
}: {
    title: string
    subTitle: string
    image: string
}) {
    return (
        <Link
            href="#"
            className="relative overflow-hidden rounded-2xl group"
        >
            <Image
                src={image}
                alt={title}
                width={800}
                height={500}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8b1e1e]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
                <p className="text-lg font-semibold">{title}</p>
                <p className="hidden md:block text-sm opacity-90">{subTitle}</p>
            </div>

        </Link>
    )
}
