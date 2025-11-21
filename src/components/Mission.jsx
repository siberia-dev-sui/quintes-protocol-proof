import React from 'react';
import { Rocket } from 'lucide-react';

const Mission = () => {
    return (
        <div className="py-24 md:py-48 relative">
            <div className="container mx-auto px-8 flex gap-8 md:gap-16 flex-col md:flex-row justify-end items-center">
                <div className="w-full order-2 md:order-1 md:w-1/2 flex flex-col lg:flex-row items-center gap-4">
                    <div className="w-full animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
                        <div className="glass-morphism space-y-3 cursor-pointer h-[200px] lg:h-[400px] rounded-3xl relative overflow-hidden">
                            <img
                                alt="price chart"
                                className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain object-center"
                                src="/graph.svg"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-6 order-1 md:order-2 w-full md:w-1/2">
                    <div className="w-fit text-xs rounded-full px-2.5 py-1 glass-morphism text-primary-200 flex items-center gap-x-2">
                        <Rocket size={12} />
                        Mission
                    </div>
                    <h2 className="font-semibold text-primary-50 text-3xl xl:text-5xl leading-120% tracking-tighter">
                        Redefining Value Accrual for the Digital Age
                    </h2>
                    <p className="leading-relaxed text-primary-100/90 text-base xl:text-lg">
                        We're building a robust autonomous protocol that delivers consistent returns and capital preservation. Named after "quintessence"—the purest form of capital efficiency and engineered financial stability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mission;
