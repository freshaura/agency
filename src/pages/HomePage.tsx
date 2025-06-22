import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import CaseStudies from '../components/CaseStudies';
import Services from '../components/Services';
import Process from '../components/Process';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import BookCall from '../components/BookCall';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <CaseStudies />
      <Services />
      <Process />
      <Team />
      <FAQ />
      <BookCall />
      <Footer />
    </div>
  );
};

export default HomePage;