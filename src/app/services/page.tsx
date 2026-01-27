import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Briefcase, Users } from "lucide-react";

const servicesDetails = [
    {
        id: "01",
        title: "Personal Financial Planning",
        tagline: "Secure your future with precision",
        description: "Our personal financial planning service provides customized strategies to help individuals secure financial stability, meet life goals, and prepare for future uncertainties through careful analysis and expert guidance. We look at your current financial health and build a roadmap that grows with you.",
        image: "/images/service/pexels-photo-4308045.jpeg",
        features: [
            "Retirement Planning & Strategy",
            "Private Wealth Management",
            "Educational Savings Planning",
            "Debt Management Solutions"
        ],
        icon: Users,
        color: "bg-blue-50"
    },
    {
        id: "02",
        title: "Business Financial Planning",
        tagline: "Scale your enterprise with confidence",
        description: "We specialize in business financial planning, helping small business owners optimize cash-flow, manage expenses, and navigate financial challenges to achieve sustainable growth in their enterprises. From startup phases to expansion, we provide the financial clarity you need.",
        image: "/images/service/pexels-photo-6476260.jpeg",
        features: [
            "Cash Flow Optimization",
            "Corporate Tax Planning",
            "Risk Assessment & Management",
            "Business Succession Planning"
        ],
        icon: Briefcase,
        color: "bg-green-50"
    },
    {
        id: "03",
        title: "Insurance Services",
        description: "Our comprehensive insurance services include life, health, and cyber security coverage, ensuring you and your business are protected against unforeseen risks and can maintain financial stability in tough times. We partner with top providers to get you the best protection.",
        image: "/images/service/pexels-photo-7567432.jpeg",
        features: [
            "Individual & Family Life Insurance",
            "Comprehensive Health Coverage",
            "Cyber Liability Protection",
            "Asset & Property Insurance"
        ],
        icon: Shield,
        color: "bg-purple-50"
    },
    {
        id: "04",
        title: "Tax & Investment Options",
        description: "We offer diverse investment options tailored to your risk profile and financial goals, empowering clients to make informed decisions and build wealth for the future. Our tax-efficient strategies ensure you keep more of what you earn.",
        image: "/images/service/pexels-photo-8297031.jpeg",
        features: [
            "Portfolio Diversification",
            "Tax-Efficient Investing",
            "Market Analysis & Insights",
            "ESG & Sustainable Investing"
        ],
        icon: TrendingUp,
        color: "bg-orange-50"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-5 bg-neutral-50 border-b border-neutral-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="max-w-3xl space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-[2px] bg-brand-green"></div>
                            <span className="text-black/50 font-bold uppercase tracking-[0.2em] text-xs">
                                Our Expert Solutions
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight tracking-tight">
                            Comprehensive Financial <span className="text-brand-green">Excellence</span>
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                            From personal wealth management to enterprise-level financial planning, we provide the expertise to secure your future and empower your growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Detailed Services Sections */}
            <section className="py-20">
                <div className="max-w-[1250px] mx-auto px-5 space-y-32">
                    {servicesDetails.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative">
                                <div className={`absolute inset-0 ${service.color} rounded-[40px] translate-x-4 translate-y-4 -z-10`}></div>
                                <div className="relative h-[400px] md:h-[550px] w-full rounded-[40px] overflow-hidden shadow-2xl">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center gap-2 z-20">
                                    <service.icon className="w-8 h-8 text-brand-green" />
                                    <span className="font-bold text-black">{service.id}</span>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-neutral-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <CheckCircle2 className="w-5 h-5 text-brand-green transition-transform group-hover:scale-110" />
                                            <span className="text-neutral-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-green hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                                    Connect with an Expert <ArrowRight className="w-5 h-5 text-current" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
