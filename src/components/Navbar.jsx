import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'About',    href: '#about' },
  { name: 'Skills',   href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub',   href: '#github' },
  { name: 'Services', href: '#services' },
  { name: 'Contact',  href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (location.pathname !== '/') return;
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-primary/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/zen logo.png" alt="Zen Digitals Logo" className="h-10 sm:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className="text-textMain/60 hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => handleNavClick(e, '#contact')}
            className="btn-neon px-5 py-2.5 rounded-full text-background text-sm font-bold"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-textMain focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className="text-textMain/70 hover:text-primary transition-colors font-medium py-3 border-b border-white/5 text-base"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={e => handleNavClick(e, '#contact')}
                className="mt-4 btn-neon text-center py-3 rounded-full text-background font-bold text-sm"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
