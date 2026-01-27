"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300 font-outfit">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-5 bg-neutral-50 dark:bg-[#0a0a0a] border-b border-neutral-100 dark:border-white/5 transition-colors duration-300">
                <div className="max-w-[1250px] mx-auto text-center space-y-6">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-[2px] bg-brand-green"></div>
                        <span className="text-black/50 dark:text-white/50 font-bold uppercase tracking-[0.2em] text-xs">Contact Us</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
                        Let's Start a <span className="text-brand-green italic">Conversation</span> About Your Future.
                    </h1>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        Our team of expert advisors is ready to help you navigate your financial journey. Reach out today for a personalized consultation.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 px-5 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-[1250px] mx-auto grid lg:grid-cols-[1fr_500px] gap-20 items-stretch">

                    {/* Form Side */}
                    <div className="bg-white dark:bg-[#0a0a0a] rounded-[50px] border border-neutral-100 dark:border-white/5 p-8 md:p-12 shadow-sm transition-colors duration-300">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold text-black dark:text-white">Send us a message</h2>
                                <p className="text-neutral-500 dark:text-neutral-400 italic">Expected response time: within 24 hours.</p>
                            </div>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 0000 000 000"
                                            className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Subject</label>
                                        <select className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors appearance-none dark:text-white">
                                            <option>General Inquiry</option>
                                            <option>Financial Planning</option>
                                            <option>Insurance Quote</option>
                                            <option>Tax Consulting</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">How can we help?</label>
                                    <textarea
                                        placeholder="Tell us about your requirements..."
                                        rows={6}
                                        className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors resize-none dark:text-white"
                                    />
                                </div>

                                <button className="bg-black dark:bg-brand-green text-white dark:text-black px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-green dark:hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 active:scale-95">
                                    Send Message <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Info Side */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <div className="bg-[#0a0a0a] dark:bg-[#050505] text-white p-12 rounded-[50px] space-y-12 h-full border border-white/5 shadow-2xl transition-colors duration-300">
                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold text-brand-green italic">Contact Information</h3>
                                <p className="text-neutral-400">Discover quick answers to common queries or reach out directly.</p>
                            </div>

                            <div className="space-y-10">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 group-hover:bg-brand-green/20 transition-all">
                                        <Mail className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-white text-lg">Email Us</h5>
                                        <p className="text-neutral-400">support@securelifefincorp.com</p>
                                        <p className="text-neutral-400">info@securelifefincorp.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 group-hover:bg-brand-green/20 transition-all">
                                        <Phone className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-white text-lg">Call Us</h5>
                                        <p className="text-neutral-400">+91 97022 13322</p>
                                        <p className="text-neutral-400">+91 98335 12513</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 group-hover:bg-brand-green/20 transition-all">
                                        <MapPin className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-white text-lg">Visit Us</h5>
                                        <p className="text-neutral-400 leading-relaxed">
                                            Sector 10, Kharghar, <br />
                                            Navi Mumbai, Maharashtra, India.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 group-hover:bg-brand-green/20 transition-all">
                                        <Clock className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-white text-lg">Working Hours</h5>
                                        <p className="text-neutral-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-neutral-400">Sat - Sun: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Support Tag */}
                            <div className="pt-8 flex justify-center">
                                <div className="inline-flex items-center gap-3 bg-brand-green/10 px-6 py-3 rounded-2xl border border-brand-green/20">
                                    <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                                    <span className="text-brand-green text-sm font-bold uppercase tracking-wider">Live Support Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
