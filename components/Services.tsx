import React from 'react';
import { Laptop, Smartphone, PenTool, Layout, Heart, Building2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Website Development",
    description: "Modern, responsive websites built with the latest technologies to help your business grow online.",
    icon: Laptop,
    highlight: false
  },
  {
    id: 2,
    title: "Custom Web Apps",
    description: "Tailor-made web applications designed to streamline your specific business processes and workflows.",
    icon: Layout,
    highlight: true // Elevated card
  },
  {
    id: 3,
    title: "WordPress Solutions",
    description: "Easy-to-manage content management systems customized for your brand with premium themes.",
    icon: PenTool,
    highlight: false
  },
  {
    id: 4,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android to engage customers on the go.",
    icon: Smartphone,
    highlight: false
  },
  {
    id: 5,
    title: "Digital Wedding Invites",
    description: "Elegant, interactive digital invitations with RSVP tracking for your special day.",
    icon: Heart,
    highlight: false
  },
  {
    id: 6,
    title: "Hotel & Company Profiles",
    description: "Sophisticated online presence for hotels and corporate profiles to showcase amenities and services.",
    icon: Building2,
    highlight: false
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#E4572E 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black mb-4">
            Explore what we offer
          </h2>
          <p className="text-brand-gray text-lg">
            Comprehensive digital solutions tailored for the unique needs of local businesses and special events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className={`
                group p-8 rounded-3xl transition-all duration-300 border
                ${service.highlight 
                  ? 'bg-white shadow-xl border-orange-100 scale-105 z-10' 
                  : 'bg-brand-bg/50 border-transparent hover:bg-white hover:shadow-lg hover:border-orange-50'
                }
              `}
            >
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                ${service.highlight ? 'bg-brand-orange text-white' : 'bg-orange-100 text-brand-orange group-hover:bg-brand-orange group-hover:text-white'}
              `}>
                <service.icon size={28} />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-brand-black mb-3">
                {service.title}
              </h3>
              
              <p className="text-brand-gray mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center text-sm font-bold text-brand-orange cursor-pointer hover:underline">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;