import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3,
  Calendar,
  ArrowRight
} from 'lucide-react';

const StrategyCallPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Complete Marketing Audit",
      description: "We'll analyze your current email marketing performance, identify gaps, and uncover hidden opportunities for immediate improvement."
    },
    {
      icon: Target,
      title: "Custom Growth Strategy",
      description: "Get a personalized roadmap showing exactly how to generate 30-50% of your revenue from email and SMS marketing."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Receive actionable recommendations based on industry benchmarks and proven strategies that work for home-office brands."
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Work directly with our senior strategists who have generated millions in revenue for brands just like yours."
    },
    {
      icon: CheckCircle,
      title: "Implementation Plan",
      description: "Walk away with a clear, step-by-step plan you can start implementing immediately to see results within 30 days."
    },
    {
      icon: Clock,
      title: "Quick & Valuable",
      description: "Just 15 minutes of your time for insights that could transform your business—no sales pitch, just pure value."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-blue-500/30 mb-8">
            <Calendar className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">
              Free Strategy Call
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your Free{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Marketing Strategy
            </span>{' '}
            Call
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Discover how to turn your email list into a revenue-generating machine. 
            In just 15 minutes, we'll show you exactly what's holding your email marketing back 
            and how to fix it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>No Sales Pitch</span>
            </div>
            <div className="flex items-center text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Immediate Value</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What You'll Get in Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Strategy Call
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This isn't a sales call—it's a genuine strategy session designed to give you 
              actionable insights you can implement immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Schedule Your Free Strategy Call
            </h2>
            <p className="text-lg text-gray-400">
              Choose a time that works for you. We'll send you a calendar invite with 
              all the details you need to join the call.
            </p>
          </div>

          {/* Calendly Embed Placeholder */}
          <div className="bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-700">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Book Your Call Now
              </h3>
              <p className="text-blue-100">
                Select your preferred time slot below
              </p>
            </div>
            
            {/* Calendly Widget Placeholder */}
            <div className="p-8 text-center">
              <div className="bg-gray-700 rounded-2xl p-12 border-2 border-dashed border-gray-600">
                <Calendar className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h4 className="text-xl font-semibold text-white mb-4">
                  Calendly Integration
                </h4>
                <p className="text-gray-400 mb-6">
                  Replace this section with your actual Calendly embed code.
                </p>
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
                  <p className="text-sm text-gray-400 mb-4">
                    To integrate Calendly:
                  </p>
                  <ol className="text-sm text-gray-400 text-left space-y-2">
                    <li>1. Create your Calendly booking page</li>
                    <li>2. Get the embed code from Calendly</li>
                    <li>3. Replace this placeholder with the embed code</li>
                  </ol>
                </div>
                <a
                  href="mailto:contact@nationimmersivo.com"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold mt-6 hover:shadow-lg transition-all duration-300 group"
                >
                  Contact Us Directly
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">
                What Happens After You Book?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
                <div>
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <p>You'll receive a calendar invite with Zoom details</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <p>We'll send a brief questionnaire to prepare</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 font-bold">3</span>
                  </div>
                  <p>Join the call and get your custom strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrategyCallPage;