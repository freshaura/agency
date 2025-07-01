import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, TrendingUp, Users, ArrowRight } from 'lucide-react';

const BookCall = () => {
  const benefits = [
    {
      icon: TrendingUp,
      text: "Deep-Dive Analysis of Your Ad Performance"
    },
    {
      icon: Users,
      text: "Advanced E-Commerce Advertising Strategies"
    },
    {
      icon: CheckCircle,
      text: "AI & Data-Driven Optimization for Lower CAC & Higher ROI"
    },
    {
      icon: Calendar,
      text: "15-Minute Call – No Sales, Just Real Value"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="text-blue-200">Marketing?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Book a free strategy call to discuss how we can help grow your skincare brand.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })} 
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Link
              to="/strategy-call"
              className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              Book Your Free Demo Call
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <p className="text-blue-100 text-sm">
              No commitments • 100% Free • Get Results in 15 Minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;