import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Target,
  BarChart3,
  Clock,
  Shield,
  Users
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Results",
      description: "Get measurable lifts in retention and revenue within the first 30 days of partnering with us."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Hyper-segmented flows tailored to behavior, purchase history, and skincare needs."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      description: "Every decision is backed by testing, analytics, and revenue-focused KPIs."
    },
    {
      icon: Clock,
      title: "24/7 Automation",
      description: "Flows that convert customers day and night—without manual effort."
    },
    {
      icon: Shield,
      title: "Proven Success",
      description: "We’ve helped brands hit 30–50% of revenue from retention channels alone."
    },
    {
      icon: Users,
      title: "Human Support",
      description: "A dedicated strategist and creative team behind every email you send."
    }
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Why Brands Choose To Work With Fresh Aura Media
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/strategy-call"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
          >
            Book Your Free Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
