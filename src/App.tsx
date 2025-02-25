import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import DetailedServices from './components/DetailedServices';
import Corporate from './components/Corporate';
import Community from './components/Community';
import MediaPresence from './components/PreciseHealth';
import Testimonials from './components/Testimonials';
import News from './components/News';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <div id="hero">
            <Hero />
            </div>
            <Services />
            <WhyChoose />

            <div id="collaboration">
            <Corporate />
            </div>
            <Community />
            <MediaPresence />
            <div id="testimonials">
            <Testimonials />
            </div>
            <News />
            <div id="services">
            <DetailedServices />
            </div>
            <FAQ />
          </>
        } />
        <Route path="/about" element={<Hero />} />
        <Route path="/collaboration" element={<Corporate />} />
        <Route path="/services" element={<DetailedServices />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
      <div id="footer">
      <Footer />
      </div>
    </Router>
  );
}

export default App;
