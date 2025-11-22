import React from 'react';
import { Shield, Zap, Leaf, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const pillars = [
        {
            icon: <Shield className="w-4 h-4 text-white/60" />,
            title: "Automated Proof of Collateral",
            description: "Collateral value is programmed to always equal or exceed minted QNT."
        },
        {
            icon: <Zap className="w-4 h-4 text-white/60" />,
            title: "Engineered for Growth",
            description: "Patented system designed for stable, predictable value growth."
        },
        {
            icon: <Leaf className="w-4 h-4 text-white/60" />,
            title: "Sustainable Yield Source",
            description: "Real revenue generated from proven, market-neutral trading strategies."
        },
        {
            icon: <Scale className="w-4 h-4 text-white/60" />,
            title: "Fairness & Transparency",
            description: "Aligning incentives to benefit all protocol participants."
        }
    ];

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        About Quintes
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        The S&P of Web3. <br />But Safer, Smarter, and Collateralized.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg text-primary-100/70 leading-relaxed"
                    >
                        Quintes Protocol is a next-generation financial infrastructure built to solve the core failures of DeFi. We provide a sophisticated yet simple platform for you to securely stake your assets and earn superior, sustainable returns, fully backed by a diversified pool of high-quality digital assets.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 + (index * 0.15), ease: "easeOut" }}
                            className="glass-morphism p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group"
                        >
                            <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit group-hover:scale-105 transition-transform duration-300">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                            <p className="text-sm text-primary-100/60 leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
