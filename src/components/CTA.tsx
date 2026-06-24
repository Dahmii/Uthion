import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
export function CTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-[#111827] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
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
            duration: 0.6
          }}>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              Ready To See Uthion In Action?
            </h2>
          </div>

          <div className="md:w-1/2 flex flex-col items-start md:items-end md:border-l border-gray-700 md:pl-12">
            <ul className="space-y-4 mb-8 w-full">
              {[
              'Strategic capital structuring',
              'Operational transformation',
              'Market expansion frameworks'].
              map((item, idx) =>
              <li key={idx} className="flex items-center text-gray-300">
                  <div className="mr-4 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  {item}
                </li>
              )}
            </ul>
            <button className="w-full md:w-auto px-8 py-4 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors">
              Request a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

}