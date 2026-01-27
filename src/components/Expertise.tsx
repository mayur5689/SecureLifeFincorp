import Link from 'next/link';

const expertiseItems = [
    {
        number: "01.",
        title: "Personal Financial Planning",
        description: "Tailored strategies for individual financial goals and wealth creation.",
    },
    {
        number: "02.",
        title: "Business Financial Planning",
        description: "Expert guidance for profitable business decisions and growth strategies.",
    },
    {
        number: "03.",
        title: "Insurance Services",
        description: "Protecting your family, assets and loved ones with comprehensive coverage.",
    },
];

export function Expertise() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-[1250px] mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
                {/* Left Side: Header */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-[2px] bg-brand-green"></div>
                            <span className="text-black/50 font-bold uppercase tracking-[0.2em] text-xs">
                                Our Expertise
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
                            Comprehensive Financial Services <span className="bg-brand-green px-2 rounded-lg inline-block">Tailored for You.</span>
                        </h2>
                    </div>

                    <Link href="/services">
                        <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-green hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                            View All Offerings
                        </button>
                    </Link>
                </div>

                {/* Right Side: List Items */}
                <div className="divide-y divide-neutral-200">
                    {expertiseItems.map((item, index) => (
                        <div key={index} className="py-8 first:pt-0 last:pb-0 flex gap-6 group">
                            <span className="text-2xl font-bold text-neutral-300 transition-colors duration-300 group-hover:text-brand-green">
                                {item.number}
                            </span>
                            <div className="space-y-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-black transition-colors duration-300 group-hover:text-brand-green">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
