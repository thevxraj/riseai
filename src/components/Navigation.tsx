import { Bot } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="relative">
              <Bot className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
              <div className="absolute inset-0 blur-xl bg-green-400/30 group-hover:bg-green-300/40 transition-all" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Rise AI
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-green-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
