import React from 'react';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';

const Specialization: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <span className="text-brand-orange font-bold tracking-wide uppercase text-sm mb-2 block">Our Specialization</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black mb-6">
              We help local businesses build high-impact digital experiences.
            </h2>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              In today's digital world, a strong online presence isn't just an option—it's a necessity. We leverage modern design principles and cutting-edge technology to ensure your business stands out.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Mobile-First Responsive Design",
                "SEO Optimized Architecture",
                "Fast Loading Performance",
                "Secure & Scalable Solutions"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange shrink-0" size={20} />
                  <span className="text-brand-black font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary">
              View Case Studies
            </Button>
          </div>

          {/* Right: Image Grid */}
          <div className="relative h-[600px] w-full hidden md:block">
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80" 
                  alt="Coding on laptop" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" 
                  alt="Team analytics" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="pt-0">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" 
                  alt="Mobile app design" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="bg-brand-orange mt-4 p-6 rounded-2xl text-white shadow-lg">
                   <p className="font-heading font-bold text-2xl mb-1">98%</p>
                   <p className="text-sm opacity-90">Client Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Specialization;