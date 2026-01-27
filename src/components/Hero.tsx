import Image from 'next/image';

export function Hero() {
    return (
        <section className="w-full min-h-screen lg:min-h-screen flex items-center justify-center p-5 pt-[80px] md:pt-[100px] bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
            <div className="w-full max-w-[1400px] relative">
                <div className="w-full bg-brand-green rounded-[40px] relative overflow-hidden px-6 md:px-20 pt-12 md:pt-20 flex flex-col min-h-[600px] sm:min-h-[700px] md:min-h-[600px] lg:h-[calc(100vh-140px)]">
                    <div className="max-w-[700px] z-10 text-center md:text-left relative">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] text-black mb-4 md:mb-6">
                            A perfect <span className="bg-white text-black px-3 md:px-4 rounded-lg inline-block">insurance</span> plan created just for you.
                        </h1>
                        <p className="text-sm md:text-lg leading-relaxed text-black/80 mb-8 md:mb-10 max-w-[500px] mx-auto md:mx-0">
                            Customized strategies to help you secure financial stability, protect your assets, and grow your wealth.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-5">
                            <button className="bg-black text-white px-9 py-3.5 md:py-[18px] rounded-[14px] text-base md:text-lg font-semibold transition-all hover:bg-neutral-800 hover:-translate-y-0.5 active:scale-95">
                                Get insurance
                            </button>
                            <button className="bg-transparent text-black border border-black px-9 py-3.5 md:py-[18px] rounded-[14px] text-base md:text-lg font-semibold transition-all hover:bg-black/5 hover:-translate-y-0.5 active:scale-95">
                                Contact us
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full flex-grow flex items-end justify-center md:justify-end mt-2 md:-mt-[120px] lg:-mt-[180px]">
                        <div className="relative h-[320px] sm:h-[400px] md:h-full w-full flex items-end justify-center md:justify-end">
                            <Image
                                src="/images/hero-bg.png"
                                alt="Insurance Illustration"
                                width={1000}
                                height={580}
                                priority
                                className="w-auto h-full max-h-[450px] md:max-h-[650px] object-contain object-bottom translate-y-[-20%] md:translate-y-[-10%] lg:translate-y-[-20%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
