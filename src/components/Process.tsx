import React, { useState } from 'react';
import { Calendar, CheckCircle, Target, TrendingUp } from 'lucide-react';

const Process = () => {
  const [activeTab, setActiveTab] = useState('3-days');

  const processData = {
    '3-days': {
      title: '3-Day Quick Start',
      subtitle: 'Get Up and Running Fast',
      days: [
        {
          day: 'Day 1',
          title: 'Strategy & Setup',
          description: 'Complete audit of your email marketing, competitor analysis, and strategic planning session.',
          icon: Target
        },
        {
          day: 'Day 2',
          title: 'Implementation',
          description: 'Set up essential workflows, optimize forms, and configure tracking.',
          icon: CheckCircle
        },
        {
          day: 'Day 3',
          title: 'Launch & Optimize',
          description: 'Launch your first campaign and make initial optimizations based on data.',
          icon: TrendingUp
        }
      ]
    },
    '7-days': {
      title: '7-Day Foundation',
      subtitle: 'Build a Solid Marketing Foundation',
      days: [
        {
          day: 'Days 1-2',
          title: 'Deep Dive Analysis',
          description: 'Comprehensive audit, customer journey mapping, and opportunity discovery.',
          icon: Target
        },
        {
          day: 'Days 3-4',
          title: 'System Setup',
          description: 'Complete platform configuration and advanced automation setup.',
          icon: CheckCircle
        },
        {
          day: 'Days 5-6',
          title: 'Content Creation',
          description: 'Design branded templates and craft persuasive email sequences.',
          icon: Calendar
        },
        {
          day: 'Day 7',
          title: 'Testing & Launch',
          description: 'QA, data monitoring, and campaign kickoff.',
          icon: TrendingUp
        }
      ]
    },
    '30-days': {
      title: '30-Day Complete Transformation',
      subtitle: 'Full Email Marketing Overhaul',
      days: [
        {
          day: 'Week 1',
          title: 'Foundation & Strategy',
          description: 'Full business analysis, strategy development, and core system setup.',
          icon: Target
        },
        {
          day: 'Week 2',
          title: 'Advanced Implementation',
          description: 'Build multi-layered automations and advanced segmentation.',
          icon: CheckCircle
        },
        {
          day: 'Week 3',
          title: 'Content & Design',
          description: 'Plan full campaign calendar and build branded creative assets.',
          icon: Calendar
        },
        {
          day: 'Week 4',
          title: 'Optimization & Scale',
          description: 'Analyze, optimize, and scale successful campaigns.',
          icon: TrendingUp
        }
      ]
    }
  };

  const currentProcess = processData[activeTab];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Script-style Section Label */}
        <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-500 text-center mb-6">
  Our Process
</h2>


          <p className="text-gray-400 text-base sm:text-lg">
            How we help skincare brands grow revenue by up to 40% with retention marketing.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(processData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Process Card */}
        <div className="bg-gray-900 rounded-3xl p-6 lg:p-12 border border-gray-700 shadow-sm">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {currentProcess.title}
            </h3>
            <p className="text-lg text-gray-400">{currentProcess.subtitle}</p>
          </div>

          <div
            className={`grid gap-6 ${
              activeTab === '3-days'
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {currentProcess.days.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center transition transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mb-1">{step.day}</div>
                  <h4 className="text-white text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
