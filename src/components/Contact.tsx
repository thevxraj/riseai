import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
            <Send className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Let's Build</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch and let's discuss how we can help you achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Mail, title: 'Email Us', value: 'hello@riseai.com', link: 'mailto:hello@riseai.com' },
            { icon: Phone, title: 'Call Us', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
            { icon: Clock, title: 'Available', value: '24/7 Support', link: null }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="inline-block mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 blur-xl bg-green-500/30 group-hover:bg-green-400/50 transition-all" />
                    <div className="relative p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-green-400 hover:text-green-300 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-400">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-green-500/30 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="automation">AI Automation and Workflows</option>
                        <option value="receptionist">AI Receptionist</option>
                        <option value="chatbot">Chatbots</option>
                        <option value="web">Web Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <MapPin className="w-5 h-5 text-green-400" />
            <span>Serving businesses worldwide with cutting-edge AI solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
