import { Bot, Workflow, MessageSquare, Palette, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'AI Automation & Workflows',
    description: 'Streamline your operations with intelligent automation that learns and adapts. Reduce manual tasks by up to 80% with our custom AI workflows.',
    features: ['Process Automation', 'Data Integration', 'Smart Scheduling', 'Custom Solutions'],
    color: 'from-cyan-500 to-blue-600',
    glowColor: 'cyan'
  },
  {
    icon: Bot,
    title: 'AI Receptionists',
    description: 'Never miss a call again. Our AI receptionists handle inquiries, schedule appointments, and provide 24/7 customer support with human-like interactions.',
    features: ['24/7 Availability', 'Natural Conversations', 'Appointment Booking', 'Multi-language Support'],
    color: 'from-blue-500 to-violet-600',
    glowColor: 'blue'
  },
  {
    icon: MessageSquare,
    title: 'Advanced Chatbots',
    description: 'Engage customers instantly with AI-powered chatbots that understand context, provide accurate answers, and escalate when needed.',
    features: ['Instant Responses', 'Lead Qualification', 'CRM Integration', 'Analytics Dashboard'],
    color: 'from-violet-500 to-cyan-600',
    glowColor: 'violet'
  },
  {
    icon: Palette,
    title: 'Web Design & Development',
    description: 'Create stunning, high-performance websites that captivate your audience. Modern designs optimized for conversion and user experience.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Custom Development'],
    color: 'from-cyan-500 to-teal-600',
    glowColor: 'teal'
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Our Services</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Powerful Solutions
            </span>
            <br />
            <span className="text-white">For Modern Businesses</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to transform your business operations and customer experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

                <div className="relative">
                  <div className="mb-6 inline-block">
                    <div className="relative">
                      <div className={`absolute inset-0 blur-xl bg-${service.glowColor}-500/30 group-hover:bg-${service.glowColor}-400/50 transition-all`} />
                      <div className={`relative p-4 bg-gradient-to-br ${service.color} rounded-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="text-cyan-400 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <Shield className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Join hundreds of companies already leveraging AI to scale their operations and delight their customers
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
