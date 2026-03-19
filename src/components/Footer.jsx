import React from 'react';
import { Github, Linkedin, X, Mail, ArrowUpRight, Instagram, Facebook } from 'lucide-react';

const Footer = () => (
  <footer className="bg-background-card pt-16 pb-8 border-t border-primary/10 text-textMain/60 overflow-hidden relative">
    {/* Glow accents */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-2/3 pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] translate-y-2/3 pointer-events-none" />

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
        <div className="sm:col-span-2 space-y-4">
          <div className="flex items-center">
            <img src="/zen logo.png" alt="Zen Digitals Logo" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-textMain/50 max-w-xs leading-relaxed text-sm">
            Blockchain Development, Web Design, and Digital Marketing that builds Powerful Digital Experiences.
          </p>
          <div className="flex space-x-3 pt-1">
            {[
              { href: 'https://github.com/LukmanAde112', icon: <Github size={18} /> },
              { href: 'https://linkedin.com', icon: <Linkedin size={18} /> },
              { href: 'https://x.com/Lukman6342361', icon: <X size={18} /> },
              { href: 'https://www.instagram.com/luqman_671?igsh=OHd6bTJvNnc2NXlp', icon: <Instagram size={18} /> },
              { href: 'https://www.facebook.com/share/17AQWY7yGC/', icon: <Facebook size={18} /> },
              { href: 'mailto:lukmanadesiyan112@gmail.com', icon: <Mail size={18} /> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-primary/10 text-textMain/50 hover:text-primary hover:border-primary/40 hover:shadow-glow transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}
                  className="text-textMain/50 hover:text-primary transition-colors flex items-center group text-sm">
                  {item}
                  <ArrowUpRight size={13} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h3>
          <ul className="space-y-3">
            {['Blockchain Dev', 'Web Design', 'Digital Marketing', 'SEO Optimization'].map(item => (
              <li key={item} className="text-textMain/50 hover:text-primary transition-colors cursor-pointer text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative border-t border-white/5 pt-8">
        <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-xs text-textMain/30">
          <p>&copy; {new Date().getFullYear()} Zen Digitals by Lukman Adesiyan. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
