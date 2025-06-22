import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-black pt-40 pb-32 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          Max Retention. Lower CAC.
        </h2>

        {/* Gradient Subheadline */}
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mb-8">
          Email-First Growth
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
          We help skincare brands scale profitably using email & SMS. Our focus is retention—so you increase revenue
          without overspending on ads.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm sm:text-base font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Book a Free Demo Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#services"
            className="flex items-center justify-center px-6 py-3 border border-gray-700 text-gray-300 rounded-full text-sm sm:text-base font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
