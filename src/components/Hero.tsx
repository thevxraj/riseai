import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

    const scrollToContact = () => {
    const element = document.getElementById('contact');
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
              <div
        className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl transition-all duration-300"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8 animate-pulse">
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-sm text-green-300">Next Generation AI Solutions</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 bg-clip-text text-transparent animate-gradient">
            Rise Above
          </span>
          <br />
          <span className="text-white">with AI Automation</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your business with cutting-edge AI workflows, intelligent receptionists,
          advanced chatbots, and stunning web design
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-green-500/50 rounded-full text-green-400 font-semibold hover:bg-green-500/10 transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'AI Support' },
            { value: '100+', label: 'Happy Clients' }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-green-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
