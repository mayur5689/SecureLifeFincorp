"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, PinIcon as Pinterest } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full relative mt-40">
            {/* Upper CTA Section (Overlapping) */}
            <div className="max-w-[1250px] mx-auto px-5 relative z-20 -mb-28">
                <div className="bg-brand-green rounded-[40px] p-12 md:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl">
                    {/* Modern Grid Pattern Overlay (Centered & Fading) */}
                    <div className="absolute inset-0 opacity-[0.12] pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                            maskImage: 'radial-gradient(circle, black 40%, transparent 90%)',
                            WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 90%)'
                        }}>
                    </div>

                    <div className="relative z-10 space-y-4">
                        <span className="text-black/60 font-bold uppercase tracking-widest text-sm">
                            Let's work together
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
                            Get in Touch with Us!
                        </h2>
                        <p className="text-black/70 max-w-xl mx-auto text-lg font-medium">
                            Subscribe to our newsletter and get cutting-edge insights delivered to your inbox.
                        </p>
                    </div>

                    <button className="relative z-10 bg-[#0D121F] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl">
                        Get In touch
                    </button>
                </div>
            </div>

            {/* Main Footer Section */}
            <div className="bg-[#050A18] pt-48 pb-10 text-white">
                <div className="max-w-[1250px] mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">

                        {/* Logo & Info */}
                        <div className="space-y-8">
                            <div className="text-2xl font-bold tracking-tight">
                                SecureLife<span className="text-brand-green">Fincorp</span>
                            </div>
                            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                Reaching financial success with the use of cutting-edge tools to boost money management, suited solutions, and expert insights.
                            </p>
                            <div className="flex gap-4">
                                <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all">
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all">
                                    <Pinterest className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Product Links */}
                        <div>
                            <h4 className="text-xl font-bold mb-8 relative inline-block">
                                Product
                                <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-brand-green"></div>
                            </h4>
                            <ul className="space-y-4 text-neutral-400 text-sm">
                                <li><Link href="/" className="hover:text-brand-green transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-brand-green transition-colors">About</Link></li>
                                <li className="flex items-center gap-2">
                                    <Link href="/blog" className="hover:text-brand-green transition-colors">Blog</Link>
                                    <span className="bg-brand-green text-black text-[10px] font-bold px-1.5 py-0.5 rounded leading-none uppercase">CMS</span>
                                </li>
                                <li><Link href="/features" className="hover:text-brand-green transition-colors">Features</Link></li>
                                <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Utility Pages */}
                        <div>
                            <h4 className="text-xl font-bold mb-8 relative inline-block">
                                Utility Pages
                                <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-brand-green"></div>
                            </h4>
                            <ul className="space-y-4 text-neutral-400 text-sm">
                                <li><Link href="#" className="hover:text-brand-green transition-colors">Style Guide</Link></li>
                                <li><Link href="#" className="hover:text-brand-green transition-colors">Protected</Link></li>
                                <li><Link href="#" className="hover:text-brand-green transition-colors">Not found</Link></li>
                                <li><Link href="#" className="hover:text-brand-green transition-colors">Licenses</Link></li>
                                <li><Link href="#" className="hover:text-brand-green transition-colors">Changelog</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold mb-8 relative inline-block">
                                    Don't miss a thing
                                    <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-brand-green"></div>
                                </h4>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                    Get special offers and updates by subscribing.
                                </p>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-brand-green transition-colors"
                                    />
                                    <button className="w-full bg-brand-green text-black font-bold py-4 rounded-xl hover:bg-white transition-colors">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-xs md:text-sm font-medium">
                        <p>
                            Copyright © SecureLife Fincorp | Designed By <span className="text-white">Aneeverse</span>
                        </p>
                        <div className="flex gap-8">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
