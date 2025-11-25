import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialization from './components/Specialization';
import TrustedBy from './components/TrustedBy';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Specialization />
      </main>
      <Footer />
    </div>
  );
};

export default App;