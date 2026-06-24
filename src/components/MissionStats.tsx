import React from 'react';
import { motion } from 'framer-motion';
export function MissionStats() {
  const stats = [
  {
    value: '$10B+',
    label: 'Capital Raised',
    sub: 'For our clients'
  },
  {
    value: '50+',
    label: 'Transformations',
    sub: 'Successfully executed'
  },
  {
    value: '30%',
    label: 'Avg Growth',
    sub: 'Post-engagement'
  },
  {
    value: '15+',
    label: 'Years Experience',
    sub: 'Industry expertise'
  }];

  return (
    <section className="bg-white overflow-hidden">
      {/* Mission Graphic Section */}
      <div className="py-24 px-6 md:px-12 text-center relative">
        <div className="max-w-3xl mx-auto relative z-10 mb-20">
          {/* <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
            Our Mission
          </p> */}
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            We're here to unlock the full growth potential of ambitious
            enterprises.
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Through rigorous analysis, strategic foresight, and flawless
            execution, we turn complex challenges into sustainable competitive
            advantages.
          </p>
        </div>

        {/* Abstract Vertical Bars Graphic */}
        <div className="relative h-64 w-full max-w-5xl mx-auto flex items-end justify-between px-4 opacity-80">
          {[40, 70, 30, 90, 50, 80, 45, 100, 60, 85].map((height, idx) =>
          <motion.div
            key={idx}
            className="w-2 md:w-4 bg-gradient-to-t from-blue-600 to-blue-300 rounded-t-sm"
            initial={{
              height: 0
            }}
            whileInView={{
              height: `${height}%`
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              delay: idx * 0.1
            }} />

          )}
          {/* Gradient overlay at bottom to blend into next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 max-w-md leading-tight">
              Measurable results. Sustainable growth. Everyone wins.
            </h2>
            <p className="text-gray-600 max-w-md">
              Our track record speaks for itself. We partner with organizations
              that are ready to scale, optimize, and lead.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) =>
            <div key={idx} className="relative pb-6">
                <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="font-semibold text-gray-900 text-sm">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-xs mt-1">{stat.sub}</p>

                {/* Blue Gradient Underline */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-50"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}