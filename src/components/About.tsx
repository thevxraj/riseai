import { Award, Target, Users, Lightbulb, TrendingUp, Cpu } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">About Rise AI</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Pioneering the</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              At Rise AI, we're not just following trends—we're creating the future of business automation.
              Our mission is to empower organizations with intelligent solutions that drive efficiency,
              enhance customer experiences, and unlock unprecedented growth.
            </p>

            <div className="space-y-6 mb-8">
              {[
                { icon: Target, title: 'Our Mission', text: 'Democratize AI technology for businesses of all sizes' },
                { icon: Lightbulb, title: 'Our Vision', text: 'A world where every business leverages AI to reach its full potential' },
                { icon: TrendingUp, title: 'Our Approach', text: 'Cutting-edge technology meets personalized human support' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="relative">
                      <div className="absolute inset-0 blur-lg bg-cyan-500/30 group-hover:bg-cyan-400/50 transition-all" />
                      <div className="relative p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl" />

            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 md:p-12">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 blur-xl bg-cyan-500/50 group-hover:bg-cyan-400/70 transition-all" />
                  <span className="relative text-4xl font-bold text-white">VS</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Meet Viraj S
                </h3>
                <div className="text-cyan-400 font-semibold mb-6">
                  Founder & CEO
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  With a passion for innovation and a deep understanding of artificial intelligence,
                  Viraj founded Rise AI to bridge the gap between cutting-edge technology and
                  practical business solutions.
                </p>

                <p className="text-gray-400 leading-relaxed mb-8">
                  His vision is to make enterprise-level AI accessible to businesses of all sizes,
                  helping them compete and thrive in an increasingly digital world.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Cpu, label: 'AI Expert' },
                    { icon: Users, label: 'Visionary Leader' },
                    { icon: Award, label: 'Innovator' },
                    { icon: TrendingUp, label: 'Growth Strategist' }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-3 hover:border-cyan-500/50 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm text-gray-300">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { value: '5+', label: 'Years Experience', description: 'In AI & Automation' },
            { value: '100%', label: 'Client Success', description: 'Focused Approach' },
            { value: '∞', label: 'Innovation', description: 'Continuous Improvement' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
