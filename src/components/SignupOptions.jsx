import React, { useState } from 'react';
import { Mail, Wallet, Check, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const SignupOptions = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="w-full max-w-4xl mx-auto mb-20">
            <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">Choose How You Join</h3>
                <p className="text-primary-100/60">Select the best way to stay updated with Quintes Protocol.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 relative">
                {/* Divider for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-background border border-white/10 rounded-full p-2 text-xs font-mono text-white/40 uppercase tracking-widest">
                        OR
                    </div>
                </div>

                {/* Option A: Standard Signup */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass-morphism p-8 rounded-2xl border border-white/5 bg-white/5 flex flex-col h-full"
                >
                    <div className="mb-6">
                        <div className="text-xs font-mono text-white/40 mb-2">[ OPTION A: STANDARD SIGNUP ]</div>
                        <h4 className="text-xl font-semibold text-white mb-2">Email Whitelist</h4>
                        <p className="text-primary-100/70 text-sm">Enter your email to join our whitelist.</p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                        <li className="flex items-center gap-2 text-sm text-primary-100/80">
                            <Check size={16} className="text-white" />
                            <span>Fast & <span className="text-white font-medium">Free</span></span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-primary-100/80">
                            <Check size={16} className="text-white" />
                            <span>Get general updates</span>
                        </li>
                    </ul>

                    <div className="space-y-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                        />
                        <button className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors flex items-center justify-center gap-2 border border-white/5">
                            <Mail size={16} />
                            Sign Up
                        </button>
                    </div>
                </motion.div>

                {/* Option B: Web3 Signup (Premium) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="glass-morphism p-8 rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-900/20 to-blue-950/20 flex flex-col h-full relative overflow-hidden group"
                >
                    {/* Premium Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="mb-6 relative z-10">
                        <div className="text-xs font-mono text-blue-300/60 mb-2">[ OPTION B: WEB3 SIGNUP ]</div>
                        <h4 className="text-xl font-semibold text-white mb-2">Verified Member</h4>
                        <p className="text-primary-100/70 text-sm">Join as a Verified Member with your wallet.</p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1 relative z-10">
                        <li className="flex items-center gap-2 text-sm text-primary-100/80">
                            <Shield size={16} className="text-white" />
                            <span>Maximum Privacy & <span className="text-white font-medium">Security</span></span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-primary-100/80">
                            <Zap size={16} className="text-white" />
                            <span>Access to Exclusive <span className="text-white font-medium">'Alpha'</span></span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-primary-100/80">
                            <Wallet size={16} className="text-white" />
                            <span><span className="text-white font-medium">On-Chain</span> Proof of Support</span>
                        </li>
                    </ul>

                    <div className="relative z-10">
                        <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 group-hover:shadow-blue-500/20">
                            <Wallet size={16} />
                            Connect Wallet
                        </button>
                        <p className="text-center text-[10px] text-white/30 mt-3 font-mono">
                            (Recommended for Members)
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SignupOptions;
