import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Security = () => {
    return (
        <div className="py-24 md:py-48 bg-gradient-to-b from-transparent to-primary-950/20">
            <div className="container mx-auto px-8 space-y-8 flex flex-col items-center">
                <div className="space-y-6 flex flex-col items-center max-w-4xl">
                    <div className="w-fit text-xs rounded-full px-2.5 py-1 glass-morphism text-primary-200 flex items-center gap-x-2">
                        <ShieldCheck size={12} />
                        Security First
                    </div>
                    <h2 className="font-semibold text-primary-50 text-3xl xl:text-5xl leading-120% tracking-tighter text-center">
                        Engineered for Resilience, Built on Trust
                    </h2>
                    <p className="leading-150% tracking-normal text-primary-100 text-base xl:text-lg text-center">
                        When you stake your assets with Quintes, their security is paramount. Our multi-layered approach, which we call Automated Proof of Collateral (APoC), includes:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full">
                        {[
                            "Rigorous Smart Contract Audits",
                            "Robust Over-collateralization (200%)",
                            "Efficient Liquidations",
                            "Unwavering Peg Stability",
                            "Institutional-Grade Custody",
                            "Reliable Oracles",
                            "Strong Governance & OpSec",
                            "Continuous Monitoring",
                            "Financial Backstops",
                            "Emergency Protocols"
                        ].map((feature, index) => (
                            <div key={index} className="glass-morphism p-4 rounded-lg text-center animate-in fade-in-0 duration-700 fill-mode-forwards" style={{ animationDelay: `${index * 50}ms` }}>
                                <p className="text-sm text-primary-100">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;
