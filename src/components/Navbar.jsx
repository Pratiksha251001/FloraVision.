import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Plants Type', href: '#', hasDropdown: true },
    { name: 'More', href: '#', hasDropdown: true },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
    }`}>
      
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Yaha logo wala part hai */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src="/assets/images/favicon.png" 
              alt="FloraVision Logo" 
              className="w-8 h-8 object-contain" 
            />
          </div>
          
          <span className="text-2xl font-bold text-white tracking-wide">
            FloraVision.
          </span>
        </div>

        {/* Desktop ke liye navigation links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}  
              href={link.href}
              className="text-white/80 font-medium 
                hover:text-white transition-colors 
                flex items-center gap-1 text-sm tracking-wide"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} className="opacity-60" />}
            </a>
          ))}
        </div>

        {/* Right side ke icons (search, cart etc) */}
        <div className="hidden md:flex items-center gap-8 text-white/90">
          
          <button className="hover:text-white transition-colors">
            <Search size={20} />
          </button>
          
          <button className="hover:text-white transition-colors">
            <ShoppingBag size={20} />
          </button>
          
          <button className="hover:text-white transition-colors">
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile menu kholne wala button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile view ke liye menu links */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full 
          bg-primary border-t border-white/10 shadow-2xl 
          py-8 px-6 flex flex-col gap-6 
          animate-in fade-in slide-in-from-top-4 duration-300">
          
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-8 pt-6 border-t border-white/10 text-white/80">
            <Search size={24} />
            <ShoppingBag size={24} />
            <Menu size={24} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
