import React from 'react';

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-brand-gray text-sm font-semibold uppercase tracking-wider mb-10">
          Trusted by Innovative Local Companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
          {/* Dummy Logos made with text/shapes for display purposes */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gray-800"></div>
            <span className="text-xl font-bold text-gray-800">AcmeCorp</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-4 border-gray-800"></div>
            <span className="text-xl font-bold text-gray-800 font-serif">Vertex</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rotate-45 bg-gray-800"></div>
            <span className="text-xl font-bold text-gray-800">Nexus</span>
          </div>

          <div className="flex items-center gap-2">
             <span className="text-2xl font-black text-gray-800 tracking-tighter">OASIS</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-8 rounded-t-full bg-gray-800"></div>
            <span className="text-xl font-bold text-gray-800">Arch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;