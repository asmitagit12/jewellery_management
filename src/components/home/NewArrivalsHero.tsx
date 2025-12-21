"use client"

export default function NewArrivalsHero() {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            <div
                className="relative w-full h-[420px] md:h-[350px] bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/new-arrival/new-arrivals-background.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/10" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-20 text-white">
                    <div className="max-w-md">
                        <div className="flex items-center gap-2 mb-3">
                            <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                                New Arrivals
                            </h2>
                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                500+ New Items
                            </span>
                        </div>

                        <p className="text-sm md:text-base leading-relaxed">
                            New Arrivals Dropping Daily, Monday through Friday.
                            <br />
                            Explore the Latest Launches Now!
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative -mt-28 md:-mt-30 z-20">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl bg-white p-2 shadow-lg">
                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src="/images/new-arrival/silver-idol.jpg"
                                    alt="Silver Idols"
                                    className="h-64 w-full object-cover"
                                />
                                <p className="absolute bottom-4 left-4 text-white font-serif text-lg">
                                    Silver Idols
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white p-2 shadow-lg">
                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src="/images/new-arrival/floral-bloom.jpg"
                                    alt="Floral Bloom"
                                    className="h-64 w-full object-cover"
                                />
                                <p className="absolute bottom-4 left-4 text-white font-serif text-lg">
                                    Floral Bloom
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
