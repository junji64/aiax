import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Services from './components/Services';
import Process from './components/Process';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-dark text-off-white font-sans selection:bg-brand-blue/30 selection:text-brand-blue">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Services />
        <Process />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
