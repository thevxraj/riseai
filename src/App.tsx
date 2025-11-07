import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black pointer-events-none" />
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 234, 255, 0.05) 25%, rgba(0, 234, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 234, 255, 0.05) 75%, rgba(0, 234, 255, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 234, 255, 0.05) 25%, rgba(0, 234, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 234, 255, 0.05) 75%, rgba(0, 234, 255, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
