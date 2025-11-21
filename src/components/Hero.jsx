import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto px-8 z-10 relative flex flex-col items-center max-w-[1100px] gap-y-10 md:gap-y-12 py-24 md:py-32">
                <div className="flex flex-col items-center gap-y-6">
                    <h1 className="text-primary-50 text-4xl sm:text-5xl lg:text-6xl text-center font-semibold font-sans tracking-tight leading-[110%] max-w-4xl animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
                        Safely Scale Your Crypto By 33% Yearly Using Automated Proof of Collateral
                    </h1>
                    <p className="leading-relaxed text-primary-100/90 text-base sm:text-lg text-center max-w-2xl animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200 fill-mode-forwards">
                        Deposit BTC, ETH, or stablecoins to mint QNT—our yield-bearing stable asset engineered for consistent value growth through patented crypto-economic mechanisms.
                    </p>
                </div>

                <button className="group relative w-max cursor-pointer outline-none text-sm sm:text-base animate-in fade-in-0 zoom-in-95 duration-1000 delay-500 fill-mode-forwards">
                    <div className="move-on-path h-8 w-12 translate-y-1/3 rounded-full bg-primary-400/40 blur-lg transition-colors group-hover:bg-primary-300/40"></div>
                    <div className="relative w-max overflow-hidden rounded-full bg-primary-900/40 p-0.5">
                        <div className="move-on-path h-16 w-24 rounded-full bg-primary-500 blur-lg transition-colors group-hover:bg-primary-400"></div>
                        <div className="relative rounded-full bg-[#0e0d2efd] px-8 py-3 text-primary-200 transition-all">
                            Start Growing Your Crypto
                        </div>
                    </div>
                </button>
            </div>

            {/* Background extends beyond Hero */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-screen pointer-events-none z-0"
                style={{ height: '150vh' }}
            >
                <img
                    id="hero-image"
                    alt="hero image"
                    className="w-full h-auto object-cover"
                    style={{
                        mixBlendMode: 'screen'
                    }}
                    src="/hero-bg.png"
                />
            </div>
        </div>
    );
};

export default Hero;
