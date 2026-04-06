import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Puppies from './components/Puppies';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-secondary selection:text-bg">
      <div className="grainy-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Puppies />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
