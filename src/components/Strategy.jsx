
import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Wallet, RefreshCw, BarChart3, Lock, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import GrowthChart from './GrowthChart';

const Strategy = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-24 bg-background">
            {/* Background - Deep & Clean */}
            <div className="absolute inset-0">
                <ParticleBackground />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-blue-950/5 to-black opacity-90 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary-200 mb-6 tracking-widest uppercase"
                    >
                        <Activity size={12} className="text-blue-400" />
                        The Quintes Engine
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6"
                    >
                        Your Assets, Amplified. <br />
                        <span className="text-white/60">A Simple Way to Grow Your Crypto.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg text-primary-100/70 max-w-3xl mx-auto leading-relaxed"
                    >
                        Quintes is a platform that turns your USDC, BTC, or ETH deposits into QNT, a token designed to grow at a steady rate (targeting up to 33% annually), like a reliable, high-yield savings plan. Your deposits are safely backed by extra collateral, ensuring you can trade QNT or cash it out for your original assets anytime.
                    </motion.p>
                </div>

                {/* Two Key Questions Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {/* Question 1: Consistent Growth */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="glass-morphism p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <div className="mb-6 p-3 rounded-lg bg-blue-500/10 w-fit">
                            <TrendingUp className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">How does QNT grow at such a consistent rate?</h3>
                        <ul className="space-y-4 text-primary-100/70 text-sm leading-relaxed">
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                <span>
                                    <strong className="text-white">Engineered Growth:</strong> QNT is a synthetic token tied to a target price that is programmed to rise steadily (e.g., by 0.253% every three days).
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                <span>
                                    <strong className="text-white">Collateral at Work:</strong> A portion of your deposited collateral is deployed into sophisticated, Shariah-compliant hedging strategies designed to generate 30-45% in profits.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                <span>
                                    <strong className="text-white">Automated Peg Stability:</strong> Automated PegKeepers and arbitrage opportunities ensure QNT's market price stays aligned with its rising target price.
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Question 2: Collateral Backing */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="glass-morphism p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <div className="mb-6 p-3 rounded-lg bg-emerald-500/10 w-fit">
                            <ShieldCheck className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">How is QNT always backed by collateral?</h3>
                        <ul className="space-y-4 text-primary-100/70 text-sm leading-relaxed">
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <span>
                                    <strong className="text-white">2:1 Backing Ratio:</strong> For every $1 of QNT in existence, Quintes is designed to maintain at least $2 of collateral.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <span>
                                    <strong className="text-white">Over-collateralization:</strong> When you deposit $100 to mint $100 of QNT, our strategies work to grow that collateral's value towards the 200% ratio.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <span>
                                    <strong className="text-white">Safety Nets:</strong> Automated partial liquidations restore ratios if values drop, while the Reserve Pool and QTS Treasury act as final backstops.
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Growth Chart Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-white mb-2">Proven Performance</h3>
                        <p className="text-primary-100/60 text-sm">Historical simulation of QNT growth vs Major Assets</p>
                    </div>
                    <GrowthChart />
                </motion.div>
            </div>

            {/* Footer / Trust Indicators */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-24 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
            >
                {/* Placeholder for Audit/Partner Logos - kept minimal */}
                <div className="flex items-center gap-2 text-sm font-mono text-white/60">
                    <ShieldCheck size={14} />
                    <span>AUDITED CONTRACTS</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-white/60">
                    <Lock size={14} />
                    <span>24/7 MONITORING</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-white/60">
                    <BarChart3 size={14} />
                    <span>ON-CHAIN TRANSPARENCY</span>
                </div>
            </motion.div>

        </section>
    );
};

export default Strategy;
