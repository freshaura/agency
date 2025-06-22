import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#0a0f1c] via-[#0c1124] to-black py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center mb-12 animate-fade-up">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
          About Us
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Scaling Skincare Brands with Email & SMS-Driven Retention
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto animate-fade-up">
        {/* Image Section */}
        <div>
          <img
            src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Fresh Aura Media Team"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-left">
          <h3 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Our Story
          </h3>
          <p className="text-gray-400 text-base sm:text-lg mb-4 leading-relaxed">
            Founded to serve modern skincare brands, Fresh Aura Media emerged from a simple insight: retention should drive growth — not just ads. Most brands focus on acquiring customers. We help you keep them.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            By combining automated email flows, SMS touchpoints, and customer lifecycle strategies, we help skincare businesses turn their audience into a loyal, profitable community — month after month.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
