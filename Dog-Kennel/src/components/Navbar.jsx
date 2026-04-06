import React, { useState, useEffect } from 'react';
import { Menu, X, Dog } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/untils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Puppies', href: '#puppies' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4',
        scrolled ? 'bg-bg/80 backdrop-blur-md shadow-soft py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-bg group-hover:rotate-12 transition-transform">
            <Dog size={24} />
          </div>
          <span className="font-heading text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-primary">
            Harish Tinku <span className="text-secondary">Kennel</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary/80 hover:text-primary font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-bg px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-soft hover:-translate-y-0.5"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg shadow-xl border-t border-accent/20 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-primary/80 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:09729124918"
                className="bg-primary text-bg text-center py-3 rounded-full font-bold mt-2"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
