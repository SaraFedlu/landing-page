// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import MobileShowcase from './components/MobileShowcase';
import FAQ from './components/FAQ';
import Waitlist from './components/Waitlist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Features />
      <MobileShowcase />
      <FAQ />
      <Waitlist />
    </div>
  );
}

export default App;
