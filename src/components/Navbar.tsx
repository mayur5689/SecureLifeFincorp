import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    return (
        <nav className="w-full py-5 bg-transparent absolute top-0 left-0 z-[1000] px-5">
            <div className="max-w-[1250px] mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                            <Image
                                src="/images/website-logo.png"
                                alt="SecureLife Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-2xl font-bold text-black tracking-tight">
                            SecureLife <span className="text-black">Fincorp</span>
                        </span>
                    </Link>
                </div>

                <ul className="hidden md:flex list-none gap-[30px]">
                    <li><Link href="/" className="text-base font-medium text-black transition-opacity hover:opacity-70">Home</Link></li>
                    <li><Link href="/about" className="text-base font-medium text-black transition-opacity hover:opacity-70">About</Link></li>
                    <li><Link href="/services" className="text-base font-medium text-black transition-opacity hover:opacity-70">Services</Link></li>
                    <li><Link href="/contact" className="text-base font-medium text-black transition-opacity hover:opacity-70">Contact</Link></li>
                </ul>

                <div className="flex items-center">
                    <button className="bg-black text-white px-7 py-[14px] rounded-xl text-base font-semibold transition-all hover:bg-neutral-800 hover:-translate-y-0.5">
                        Get Started Now
                    </button>
                </div>
            </div>
        </nav>
    );
}
