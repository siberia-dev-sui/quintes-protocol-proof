import React from 'react';
import { Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-8"
                    >
                        <Target className="text-blue-400 w-8 h-8" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold text-white mb-8"
                    >
                        Redefining Value Accrual for the Digital Age.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-xl text-primary-100/80 leading-relaxed"
                    >
                        Quintes addresses a significant market demand for reliable, efficient, and sustainable yield solutions. Our commitment is to create a robust autonomous protocol that delivers consistent returns and capital preservation. We are architecting a new standard for trustworthy, yield-bearing digital assets, providing a secure platform where holders can generate competitive, non-dilutive yield.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
