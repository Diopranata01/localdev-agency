import React from 'react';
import { Code2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-brand-orange rounded-lg text-white">
                <Code2 size={24} strokeWidth={3} />
              </div>
              <span className="font-heading font-bold text-2xl">LocalDev</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Helping local businesses thrive in the digital age with custom websites, apps, and branding solutions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-brand-orange cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">Mobile Apps</li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">WordPress Themes</li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">Wedding Invitations</li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">Hotel Websites</li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-brand-orange cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">Portfolio</li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-brand-orange cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-orange" />
                <span>hello@localdev.agency</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-orange" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-orange mt-1" />
                <span>123 Creative Avenue,<br/>Design District, City</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LocalDev Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Terms</span>
            <span className="cursor-pointer hover:text-white">Privacy</span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;