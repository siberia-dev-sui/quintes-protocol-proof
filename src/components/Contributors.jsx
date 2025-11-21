import React from 'react';
import { Users } from 'lucide-react';

const Contributors = () => {
    const partners = [
        "MetaMask", "Algorand", "UCL", "Binance", "Chainlink", "King's College London", "Consensys"
    ];

    return (
        <div className="py-24 md:py-48">
            <div className="container mx-auto px-8 gap-8 md:gap-16 grid lg:grid-cols-2 items-center">
                <div className="space-y-6 w-full max-w-lg">
                    <div className="w-fit text-xs rounded-full px-2.5 py-1 glass-morphism text-primary-200 flex items-center gap-x-2">
                        <Users size={12} />
                        Contributors
                    </div>
                    <h2 className="font-semibold text-primary-50 text-3xl xl:text-5xl leading-120% tracking-tighter">
                        Driven by Deep Expertise in Finance & Technology
                    </h2>
                    <p className="leading-relaxed text-primary-100/90 text-base xl:text-lg">
                        The Quintes Protocol is the product of over two years of intensive research and development by a global team of dedicated contributors, including renowned token engineers, data scientists, cryptoeconomic researchers, and financial veterans from leading institutions like Binance, Morgan Stanley, and Chainlink.
                    </p>
                </div>

                <div className="w-full space-y-8">
                    <p className="leading-150% tracking-normal text-base xl:text-lg text-white/50">Contributors coming from:</p>
                    <div className="w-full flex flex-wrap gap-8 opacity-50">
                        {partners.map((partner, index) => (
                            <div key={index} className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700 fill-mode-forwards" style={{ animationDelay: `${index * 100}ms` }}>
                                {/* Placeholder for partner logos since assets were missing */}
                                <div className="h-[50px] px-4 flex items-center justify-center border border-white/20 rounded-lg bg-white/5 text-white/70 font-medium text-sm">
                                    {partner}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contributors;
