import React from 'react';
import { Shield, Brain, Sprout, Scale } from 'lucide-react';

const About = () => {
    return (
        <div className="py-24 md:py-48">
            <div className="container mx-auto px-8 gap-6 sm:gap-12 md:gap-16 grid grid-cols-1 lg:grid-cols-[5fr_7fr] justify-center items-center">
                <div className="space-y-4 sm:space-y-6 w-full z-10">
                    <div className="w-fit text-xs rounded-full px-2.5 py-1 glass-morphism text-primary-200 flex items-center gap-x-2">
                        <Sprout size={12} />
                        About Quintes
                    </div>
                    <h2 className="font-semibold text-primary-50 text-3xl xl:text-5xl leading-120% tracking-tighter">
                        The S&P of Web3. Safer, Smarter, Collateralized.
                    </h2>
                    <p className="leading-relaxed text-primary-100/90 text-base xl:text-lg">
                        A next-generation platform to stake BTC, ETH, and stablecoins for superior, sustainable returns. QNT is always 200% overcollateralized and redeemable anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4">
                    {[
                        { icon: Shield, title: "Automated Proof of Collateral", text: "Collateral value always equals or exceeds minted QNT, ensuring liquidity and redeemability." },
                        { icon: Brain, title: "Engineered for Growth", text: "Patented system designed for stable, predictable QNT value growth." },
                        { icon: Sprout, title: "Sustainable Yield", text: "Real revenue from proven, market-neutral trading strategies." },
                        { icon: Scale, title: "Fair & Transparent", text: "Aligned incentives benefiting all protocol participants." }
                    ].map((item, index) => (
                        <div key={index} className="border border-[#92aee779] rounded-lg w-full bg-gradient-to-br from-primary-900/15 to-transparent p-6 flex flex-col gap-4 z-50 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 fill-mode-forwards" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="bg-gradient-to-b from-white/10 to-transparent p-4 w-fit h-fit rounded-full">
                                <item.icon className="text-slate-300" size={24} />
                            </div>
                            <span className="space-y-2">
                                <p className="text-sm font-semibold text-primary-50">{item.title}</p>
                                <p className="text-sm font-light text-primary-100">{item.text}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
