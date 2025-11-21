import React, { useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    return (
        <footer className="py-14 md:py-24 animate-in fade-in-0 duration-1000 delay-500">
            <div className="container mx-auto px-8 space-y-12">
                {/* Newsletter Section */}
                <div className="flex flex-col items-center space-y-4 py-12 border-t border-b border-white/10">
                    <h3 className="text-2xl font-semibold text-primary-50">Stay Ahead of the Curve</h3>
                    <p className="text-primary-100 text-center">Get exclusive updates, research, and early access to the Quintes testnet.</p>
                    <div className="flex gap-2 w-full max-w-md">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-primary-400"
                        />
                        <button className="px-6 py-2 rounded-lg bg-primary-500 hover:bg-primary-400 text-white font-medium transition-colors flex items-center gap-2">
                            <Mail size={18} />
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-y-8 md:items-center">
                    <span className="flex gap-x-3 items-center">
                        <img alt="quintes logo" width="32" height="32" src="/logo-light.svg" />
                        <img alt="quintes typeface" width="100" height="10" src="/quintes-logo-type.svg" />
                    </span>

                    <div className="gap-4 items-center flex-wrap flex md:absolute md:left-1/2 md:-translate-x-1/2">
                        {['Home', 'About', 'Mission', 'Strategy', 'Contributors', 'FAQ'].map((item) => (
                            <p key={item} className="text-primary-100/85 text-sm font-sans tracking-tight cursor-pointer hover:text-white transition-colors">
                                {item}
                            </p>
                        ))}
                    </div>

                    <div className="flex gap-x-4 items-center">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/quintesqnt/?viewAsMember=true" className="text-white/70 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/8ub3cJPwcR" className="text-white/70 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="15" x2="15.01" y1="13" y2="13" /><line x1="18" x2="18.01" y1="11" y2="11" /><rect width="20" height="12" x="2" y="6" rx="2" /></svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://t.me/+OpacMl5uc18xYmIx" className="text-white/70 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://x.com/Quintesorg" className="text-white/70 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <p className="md:text-center text-sm text-white/50">© 2024 Quintes. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
