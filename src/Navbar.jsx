import React, { useEffect, useState } from 'react';
import { Home, User, Briefcase, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <nav className={`bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-full px-4 py-3 transition-all duration-300 ${
        scrolled ? 'shadow-2xl shadow-[#95B597]/20' : 'shadow-xl'
      }`}>
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="px-8 py-3 font-bold text-2xl">
            <span className="text-[#DEEEDF]">PORT</span>
            <span className="text-[#95B597]">FOLIO</span>
          </div>

          {/* Nav Items */}
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name.toLowerCase();
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                    isActive 
                      ? 'bg-purple-600 text-white'  
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              );  
            })}
          </div>

          {/* Pages Dropdown */}
          <div className="relative group">
            <button className="px-6 py-3 rounded-full text-[#DEEEDF]/70 hover:text-[#DEEEDF] hover:bg-[#95B597]/20 transition-all duration-300 flex items-center space-x-2">
              <span className="text-sm font-medium">Pages</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full mt-2 left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-[#1E351F]/95 backdrop-blur-xl border border-[#95B597]/30 rounded-2xl py-2 shadow-2xl">
                <a href="#blog" className="block px-4 py-2 text-sm text-[#DEEEDF]/70 hover:text-[#DEEEDF] hover:bg-[#95B597]/20 transition-colors">
                  Blog
                </a>
                <a href="#testimonials" className="block px-4 py-2 text-sm text-[#DEEEDF]/70 hover:text-[#DEEEDF] hover:bg-[#95B597]/20 transition-colors">
                  Testimonials
                </a>
                <a href="#services" className="block px-4 py-2 text-sm text-[#DEEEDF]/70 hover:text-[#DEEEDF] hover:bg-[#95B597]/20 transition-colors">
                  Services
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button - Simple */}
          <div className="ml-1">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
              Hire Me
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;