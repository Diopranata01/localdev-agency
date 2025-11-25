import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 z-10 relative">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold tracking-wide uppercase">
              Local Digital Agency
            </div>
            
            <h1 className="font-heading font-extrabold text-5xl lg:text-6xl text-brand-black leading-[1.15]">
              We build stunning <br/>
              <span className="text-transparent bg-clip-text bg-brand-gradient">
                digital experiences
              </span> <br/>
              for local businesses.
            </h1>
            
            <p className="text-lg text-brand-gray max-w-lg leading-relaxed">
              We specialize in creating websites, mobile apps, WordPress solutions, digital invitations, and custom platforms for small to medium businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
              <Button variant="primary" icon={<ArrowRight size={18} />}>
                Get a Quote
              </Button>
              <Button variant="secondary">
                View Portfolio
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-4 cursor-pointer group w-fit">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Play size={16} className="text-brand-orange ml-1 fill-brand-orange" />
              </div>
              <span className="text-sm font-semibold text-brand-gray group-hover:text-brand-orange transition-colors">
                Watch our company video
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center">
             {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-yellow/20 rounded-full blur-3xl -z-10 translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-brand-orange/10 rounded-full blur-3xl -z-10 -translate-x-12 translate-y-12"></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-brand-yellow rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-pulse"></div>
            <div className="absolute bottom-10 left-12 w-20 h-20 bg-brand-orange rounded-full mix-blend-multiply filter blur-md opacity-70"></div>

            {/* Main Image Container */}
            <div className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Creative Team Working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-orange-50">
                 <p className="text-xs text-brand-gray font-medium uppercase tracking-wide">Projects Delivered</p>
                 <p className="text-3xl font-heading font-bold text-brand-black">150+</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;