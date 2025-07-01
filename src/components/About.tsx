import React from 'react';
import sanjar from '../images/sanjar.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#0a0f1c] via-[#0c1124] to-black py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center mb-12 animate-fade-up">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
          About Us
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Scaling Skincare Brands with Email & SMS driven Retention
        </p>
      </div>

      {/* Image + Text Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:items-start animate-fade-up">
        {/* Image Section */}
        <div className="w-full h-full">
          <div className="relative aspect-[4/3] md:h-full md:w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src={sanjar}
              alt="Sanjar - Fresh Aura Media"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-start text-left">
          <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Our Story
          </h3>
          <p className="text-gray-400 text-base sm:text-lg mb-4 leading-relaxed">
            Founded to serve modern skincare brands, Fresh Aura Media emerged from a simple insight: retention should drive growth, not just ads. Most brands focus on acquiring customers. We help you keep them. We believe that building long-term relationships with customers is what sets thriving brands apart from the rest.
          </p>
          <p className="text-gray-400 text-base sm:text-lg mb-4 leading-relaxed">
            By combining automated email flows, SMS touchpoints, and customer lifecycle strategies, we help skincare businesses turn their audience into a loyal, profitable community month after month. Our team focuses on data-driven decisions, creative messaging, and continuous optimization to ensure that your brand stays top of mind and drives repeat purchases.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            With every campaign, we aim not just for sales, but for meaningful connections between brands and their customers. That’s the Fresh Aura difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
