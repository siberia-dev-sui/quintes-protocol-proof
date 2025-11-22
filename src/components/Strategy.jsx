
import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Wallet, RefreshCw, BarChart3, Lock, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Strategy = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 bg-background">
            {/* Background - Deep & Clean */}
            <div className="absolute inset-0">
                {/* Custom Particle System - Base Layer */}
                <ParticleBackground />

                {/* Gradient Overlay - Adjusted for visibility */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-blue-950/5 to-black opacity-90 pointer-events-none"></div>

                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header - Understated & Professional */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary-200 mb-6 tracking-widest uppercase"
                    >
                        <Activity size={12} className="text-blue-400" />
                        The Mechanism
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4"
                    >
                        Delta-Neutral Architecture
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-base md:text-lg text-primary-100/60 max-w-xl mx-auto font-light"
                    >
                        A systematic approach to yield generation, prioritizing capital preservation and consistent returns through automated hedging.
                    </motion.p>
                </div>

                {/* Flow of Funds Diagram */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-0 items-center relative">

                        {/* Connecting Line (Background) */}
                        <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>

                        {/* Step 1: Input */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-full max-w-xs bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:border-white/20 transition-colors duration-500">
                                <div className="flex justify-center gap-4 mb-6 opacity-80">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 font-bold text-sm border border-white/10">₿</div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 font-bold text-sm border border-white/10">Ξ</div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 font-bold text-sm border border-white/10">$</div>
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">Capital Injection</h3>
                                <p className="text-sm text-primary-100/50 font-mono">BTC • ETH • Stablecoins</p>
                            </div>
                            <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-white/20">
                                <ArrowRight size={16} />
                            </div>
                        </motion.div>

                        {/* Step 2: Process (The Engine) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-full max-w-sm bg-gradient-to-b from-blue-950/20 to-black/40 backdrop-blur-md border border-blue-500/20 p-10 rounded-2xl shadow-[0_0_40px_-10px_rgba(59,130,246,0.1)]">
                                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                                    <RefreshCw size={24} className="text-blue-400" />
                                </div>
                                <h3 className="text-xl font-medium text-white mb-2">The Engine</h3>
                                <p className="text-sm text-blue-200/60 mb-6 font-mono">Delta-Neutral Strategy</p>

                                <div className="space-y-3 text-left">
                                    <div className="flex items-center gap-3 text-xs text-primary-100/70 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                        <span>Long Spot Assets</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-primary-100/70 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                        <span>Short Perp Futures</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-white/20">
                                <ArrowRight size={16} />
                            </div>
                        </motion.div>

                        {/* Step 3: Output */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-full max-w-xs bg-black/40 backdrop-blur-md border border-teal-500/20 p-8 rounded-xl hover:border-teal-500/30 transition-colors duration-500">
                                <div className="w-12 h-12 mx-auto rounded-lg bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400 border border-teal-500/20">
                                    <TrendingUp size={24} />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">Sustainable Yield</h3>
                                <p className="text-sm text-primary-100/50 font-mono">QNT Appreciation</p>
                                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs">
                                    <span className="text-primary-100/40">Target APY</span>
                                    <span className="text-teal-400 font-mono">15% - 25%</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
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

            </div>
        </section>
    );
};

export default Strategy;
