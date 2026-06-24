import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, LineChart, Shield } from 'lucide-react';
export function Services() {
  const features = [
  {
    icon: Target,
    title: 'Strategic Clarity',
    description:
    'We cut through complexity to deliver actionable strategies.',
    bullets: [
    'Data-driven market analysis',
    'Clear execution roadmaps',
    'Aligned stakeholder objectives']

  },
  {
    icon: Lightbulb,
    title: 'Capital Efficiency',
    description: 'Optimize your capital structure for maximum leverage.',
    bullets: [
    'Reduced cost of capital',
    'Diversified funding sources',
    'Improved working capital metrics']

  },
  {
    icon: LineChart,
    title: 'Growth Acceleration',
    description: 'Scale operations rapidly without breaking systems.',
    bullets: [
    'Scalable operational frameworks',
    'Performance management systems',
    'Talent and resource alignment']

  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Navigate regulatory and market risks with confidence.',
    bullets: [
    'Comprehensive risk assessments',
    'Regulatory compliance strategies',
    'Scenario planning and resilience']

  }];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-4">
            Why Uthion
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-white">
            Why Enterprises Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, idx) =>
          <motion.div
            key={idx}
            className="bg-[#1F2937] border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-colors"
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1
            }}>
            
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                  <feature.icon className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-6">{feature.description}</p>

              <ul className="space-y-3">
                {feature.bullets.map((bullet, bIdx) =>
              <li
                key={bIdx}
                className="flex items-center text-sm text-gray-300">
                
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                    {bullet}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Abstract Lines Graphic */}
        <div className="relative h-40 w-full max-w-3xl mx-auto opacity-50">
          <div className="absolute top-0 left-[10%] w-[60%] h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px]"></div>
          <div className="absolute top-8 left-[5%] w-[80%] h-1.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[2px]"></div>
          <div className="absolute top-16 left-[20%] w-[50%] h-2 bg-gradient-to-r from-transparent via-blue-300 to-transparent blur-[3px]"></div>
          <div className="absolute top-24 left-[15%] w-[70%] h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent blur-[1px]"></div>
          <div className="absolute top-32 left-[30%] w-[40%] h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[2px]"></div>
        </div>
      </div>
    </section>);

}