import React from 'react';
import { motion } from 'framer-motion';
export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
            What our clients are saying
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Small Card 1 */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between"
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
              duration: 0.5
            }}>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              "Uthion's ability to synthesize complex market data into a clear,
              actionable corporate strategy gave our board the confidence to
              pursue a major acquisition."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Uche</p>
              <p className="text-sm text-gray-500">
                Managing Director, Pal Aviation
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between"
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
              delay: 0.1
            }}>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              "The capital structuring advice we received was flawless. They
              understood our long-term vision and aligned our funding strategy
              perfectly."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Bukka Hut</p>
              <p className="text-sm text-gray-500">CEO, Bukka Hut</p>
            </div>
          </motion.div>

          {/* Large Highlighted Card */}
          <motion.div
            className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden"
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
              delay: 0.2
            }}>
            
            {/* Abstract background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="relative z-10 max-w-4xl">
              <h3 className="text-2xl md:text-4xl font-serif text-white leading-tight mb-10">
                "Together we're building the strategic foundation to transform
                regional aviation, and the results speak for themselves: higher
                operational efficiency, lower costs, and faster market
                expansion."
              </h3>
              <div>
                <p className="font-semibold text-white text-lg">
                  Michael Rodriguez
                </p>
                <p className="text-blue-200">COO, SkyLink Aviation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}