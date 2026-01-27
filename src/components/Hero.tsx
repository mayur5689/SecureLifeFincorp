import Image from 'next/image';

export function Hero() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center p-5 pt-[100px] bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
            <div className="w-full max-w-[1400px] h-[calc(100vh-140px)] min-h-[600px] relative">
                <div className="w-full h-full bg-brand-green rounded-[40px] relative overflow-hidden px-10 md:px-20 pt-20 flex flex-col">
                    <div className="max-w-[700px] z-10">
                        <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] text-black mb-6">
                            A perfect <span className="bg-white px-4 rounded-lg inline-block">insurance</span> plan created just for you.
                        </h1>
                        <p className="text-lg leading-relaxed text-black/80 mb-10 max-w-[500px]">
                            Lorem ipsum dolor sit amet consectetur tristique viverra facilisis et nulla
                            porta tempus ut euismod cum pellentesque risus euismod.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <button className="bg-black text-white px-9 py-[18px] rounded-[14px] text-lg font-semibold transition-all hover:bg-neutral-800 hover:-translate-y-0.5">
                                Get insurance
                            </button>
                            <button className="bg-transparent text-black border border-black px-9 py-[18px] rounded-[14px] text-lg font-semibold transition-all hover:bg-black/5 hover:-translate-y-0.5">
                                Contact us
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full flex-grow flex items-end justify-end mt-[-120px] md:mt-[-180px]">
                        <div className="relative h-full w-full flex items-end justify-end">
                            <Image
                                src="/images/hero-bg.png"
                                alt="Insurance Illustration"
                                width={1000}
                                height={580}
                                priority
                                className="w-auto h-full max-h-[650px] object-contain object-bottom md:translate-y-[-20%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
