import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What exactly happens during a strategy call?",
      answer: "During our strategy call, we'll dive deep into your current email marketing performance, analyze your customer data, identify untapped opportunities, and create a custom roadmap for generating 30-50% of your revenue from email and SMS marketing. You'll walk away with actionable insights you can implement immediately."
    },
    {
      question: "How quickly can we expect to see results from our email marketing?",
      answer: "Most clients see measurable improvements within the first 30 days. Initial optimizations like improving deliverability and basic automation can show results within 1-2 weeks. For complete transformation and maximum revenue impact, we typically see significant results within 60-90 days of implementation."
    },
    {
      question: "Do you work with businesses outside the home-office product industry?",
      answer: "While we specialize in home-office product brands, our strategies and systems work for any e-commerce business with a strong customer base. Our expertise in home-office products gives us unique insights into customer behavior and buying patterns that can be adapted to similar industries."
    },
    {
      question: "What's included in your email marketing service?",
      answer: "Our comprehensive email marketing service includes: strategy development, automation workflow setup, email template design, copywriting, segmentation strategy, A/B testing, deliverability optimization, performance tracking, and ongoing optimization. We handle everything so you can focus on running your business."
    },
    {
      question: "How do you ensure our emails don't end up in spam folders?",
      answer: "We follow industry best practices for deliverability including: proper domain authentication, list hygiene, engagement-based sending patterns, content optimization, and reputation monitoring. We also work with top email service providers and maintain relationships with major inbox providers to ensure maximum deliverability."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header without 'FAQ' script */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our strategy sessions and how we can help transform your email marketing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-blue-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-8 pb-6 border-t border-gray-700">
                  <p className="text-gray-400 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
