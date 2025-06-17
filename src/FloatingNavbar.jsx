import React, { useEffect, useState } from 'react';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

const FloatingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <nav className={`bg-black/80 backdrop-blur-2xl border border-gray-800/50 rounded-full px-3 py-3 transition-all duration-500 ${
          scrolled ? 'shadow-2xl shadow-purple-500/10 scale-95' : 'shadow-xl'
        }`}>
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="px-6 py-2 font-bold text-xl tracking-wider">
              <span className="text-white">GAME</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DESIGNER</span>
            </div>

            {/* Separator */}
            <div className="w-px h-8 bg-gray-700"></div>

            {/* Nav Items */}
            <div className="flex items-center space-x-1 px-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveSection(item.name.toLowerCase())}
                    className={`relative px-6 py-2.5 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-100"></span>
                    )}
                    <span className="relative text-sm font-medium">{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pl-2">
              <button className="relative group bg-white text-black px-7 py-2.5 rounded-full font-bold text-sm overflow-hidden transition-all duration-300">
                <span className="relative z-10">Let's Talk</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="relative z-10 text-white flex items-center justify-center h-full">Let's Talk</span>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50">
        <nav className="bg-black/90 backdrop-blur-2xl border border-gray-800/50 rounded-2xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg">
              <span className="text-white">GAME</span>
              <span className="text-purple-400">DESIGNER</span>
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mt-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-medium">
                Let's Talk
              </button>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default FloatingNavbar;