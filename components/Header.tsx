import React, { useState } from 'react';
import { Menu, X, Globe, Code2 } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-bg/90 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-brand-gradient rounded-lg text-white">
              <Code2 size={24} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-brand-black">LocalDev</span>
              <span className="text-[10px] text-brand-gray tracking-wider uppercase font-medium">Digital Agency</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-sm font-medium text-brand-gray hover:text-brand-orange transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm font-medium text-brand-black cursor-pointer hover:text-brand-orange transition-colors">
              <Globe size={18} />
              <span>EN</span>
            </div>
            <Button variant="primary" className="py-2 px-5 text-sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-black hover:text-brand-orange"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-b border-orange-100 p-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-brand-black py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
             <Globe size={18} className="text-brand-black" />
             <span className="text-brand-black font-medium">English</span>
          </div>
          <Button variant="primary" className="w-full">Get Started</Button>
        </div>
      )}
    </header>
  );
};

export default Header;