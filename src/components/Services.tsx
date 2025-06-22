import React from 'react';
import { Mail, Target, Calculator, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Mail,
      title: "Email Marketing",
      subtitle: "Revenue-Driving Campaigns",
      description: "Transform your email list into a profit-generating machine with our comprehensive email marketing solutions.",
      features: [
        "Advanced automation workflows",
        "Behavioral trigger campaigns",
        "A/B testing optimization",
        "Segmentation strategies",
        "Deliverability optimization",
        "Performance analytics"
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Paid Ads",
      subtitle: "High-Converting Ad Campaigns",
      description: "Drive qualified traffic and maximize ROI with our data-driven paid advertising strategies across all major platforms.",
      features: [
        "Facebook & Instagram Ads",
        "Google Ads management",
        "Retargeting campaigns",
        "Creative optimization",
        "Audience research",
        "Performance tracking"
      ],
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Calculator,
      title: "Unit Economics",
      subtitle: "Profitable Growth Strategy",
      description: "Optimize your business model with our unit economics analysis to ensure sustainable and profitable growth.",
      features: [
        "LTV:CAC ratio optimization",
        "Pricing strategy development",
        "Profitability analysis",
        "Growth modeling",
        "KPI dashboard setup",
        "Financial forecasting"
      ],
      gradient: "from-blue-400 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Our Services
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4">
            Tailored solutions to help your skincare brand grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-700 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/strategy-call"
                    className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Book a Call Button */}
        <div className="text-center mt-12">
          <a
            href="/strategy-call"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full hover:opacity-90 transition duration-300 shadow-lg"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
