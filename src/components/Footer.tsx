import { Bot, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-green-500/20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Bot className="w-8 h-8 text-green-400" />
                <div className="absolute inset-0 blur-xl bg-green-400/30" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Rise AI
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering businesses with next-generation AI solutions. Transform your operations,
              enhance customer experiences, and unlock unprecedented growth.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Twitter, link: '#' },
                { icon: Linkedin, link: '#' },
                { icon: Github, link: '#' },
                { icon: Mail, link: 'mailto:hello@riseai.com' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    className="group p-2 bg-green-500/10 border border-green-500/30 rounded-lg hover:border-green-500/50 hover:bg-green-500/20 transition-all"
                  >
                    <Icon className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {['AI Automation', 'AI Receptionists', 'Chatbots', 'Web Design'].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', link: '#about' },
                { label: 'Services', link: '#services' },
                { label: 'Contact', link: '#contact' },
                { label: 'Privacy Policy', link: '#' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-gray-400 hover:text-green-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-green-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rise AI. All rights reserved. Founded by Viraj S.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
