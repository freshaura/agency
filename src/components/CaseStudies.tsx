import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const [expanded, setExpanded] = useState(null);

  const caseStudies = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3373742/pexels-photo-3373742.jpeg?auto=compress&cs=tinysrgb&w=600",
      company: "GlowSkin Co.",
      industry: "Skincare",
      result: "Boosted Email Revenue",
      short: "Implemented segmentation and flows that drove strong customer retention.",
      long: `GlowSkin Co. had low engagement rates and high churn. We restructured their flows from scratch—customizing every touchpoint from welcome to replenishment. A/B testing email designs and adding SMS as a complementary channel drastically improved performance. Loyalty campaigns led to a 2.5x increase in returning customers.`,
      metrics: {
        revenue: "$1.1M",
        conversion: "2.5x",
        roi: "420%"
      }
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3373743/pexels-photo-3373743.jpeg?auto=compress&cs=tinysrgb&w=600",
      company: "LumiCare",
      industry: "Skincare",
      result: "Improved Open Rates",
      short: "Crafted personalized flows and automations to revive dormant subscribers.",
      long: `LumiCare had a large but unengaged list. We reactivated 38% of dormant users with re-engagement flows and elevated lifetime value using tiered loyalty emails. Our targeted campaigns based on skincare type preferences yielded a 3x lift in engagement.`,
      metrics: {
        revenue: "$780K",
        conversion: "3x",
        roi: "360%"
      }
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/3373744/pexels-photo-3373744.jpeg?auto=compress&cs=tinysrgb&w=600",
      company: "DermaBloom",
      industry: "Skincare",
      result: "Increased SMS Revenue",
      short: "Introduced SMS touchpoints alongside email to drive repeat purchases.",
      long: `DermaBloom had zero SMS strategy before partnering with us. We launched product drop alerts, replenishment nudges, and review requests via SMS. Combined with email, the customer journey felt natural and built trust. This integrated approach resulted in a major uptick in both channel performance and customer satisfaction.`,
      metrics: {
        revenue: "$2M",
        conversion: "3.4x",
        roi: "510%"
      }
    }
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Success Stories
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            Real case studies from real skincare clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 group"
            >
              <img
                src={study.image}
                alt={study.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{study.company}</h3>
                <p className="text-sm text-blue-400 mb-2">{study.industry}</p>
                <div className="text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full px-3 py-1 inline-block mb-4">
                  {study.result}
                </div>
                <p className="text-gray-400 mb-4">{study.short}</p>

                <button
                  onClick={() => toggleExpand(study.id)}
                  className="mt-2 flex items-center text-blue-400 font-medium hover:underline"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>

                {expanded === study.id && (
                  <>
                    <p className="text-gray-300 mt-4 whitespace-pre-line leading-relaxed">{study.long}</p>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700 mt-6">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-1">
                          <DollarSign className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="text-white text-sm font-bold">{study.metrics.revenue}</div>
                        <div className="text-xs text-gray-400">Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-1">
                          <TrendingUp className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="text-white text-sm font-bold">{study.metrics.conversion}</div>
                        <div className="text-xs text-gray-400">Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-1">
                          <Users className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="text-white text-sm font-bold">{study.metrics.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
