import React, { useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import SignupOptions from './SignupOptions';

const Footer = () => {
    const [email, setEmail] = useState('');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="min-h-screen flex items-center justify-center py-20 animate-in fade-in-0 duration-1000 delay-500 bg-black/20 backdrop-blur-lg border-t border-white/5">
            <div className="container mx-auto px-8 space-y-12 text-center">

                {/* Newsletter / Signup Options Section */}
                <SignupOptions />

                <div className="w-full h-px bg-white/5 max-w-2xl mx-auto"></div>

                {/* Logo */}
                <div className="flex justify-center gap-x-3 items-center pt-8">
                    <img alt="quintes logo" width="40" height="40" src="/logo-light.svg" />
                    <img alt="quintes typeface" width="120" height="12" src="/quintes-logo-type.svg" />
                </div>

                {/* Navigation Links */}
                <div className="gap-6 items-center flex-wrap flex justify-center">
                    {['Home', 'About', 'Mission', 'Strategy', 'Contributors', 'FAQ'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-primary-100/70 text-base font-sans tracking-tight hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            {item}
                        </button>
                    ))}
                    <a
                        href="https://quintes.gitbook.io/quintes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-100/70 text-base font-sans tracking-tight hover:text-white transition-all duration-300 hover:scale-105"
                    >
                        Docs
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-x-6 items-center justify-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/quintesqnt/?viewAsMember=true" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
                        <Linkedin size={22} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/8ub3cJPwcR" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="15" x2="15.01" y1="13" y2="13" /><line x1="18" x2="18.01" y1="11" y2="11" /><rect width="20" height="12" x="2" y="6" rx="2" /></svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://t.me/QuintesOfficial" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/Quintesorg" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
                        <Twitter size={22} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-center text-sm text-white/40">© 2024 Quintes. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
