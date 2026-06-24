import React from 'react';
import { motion } from 'framer-motion';
export function Intro() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white flex flex-col items-center text-center border-b border-gray-100">
      <motion.div
        className="max-w-4xl mx-auto"
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
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-8 tracking-tight">
          Built for ambitious enterprises
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Uthion provides the strategic foundation and capital structuring
          expertise that forward-thinking organizations need to unlock growth,
          optimize operations, and dominate their markets.
        </p>
        <p className="text-xs md:text-sm text-gray-400 mt-12 uppercase tracking-widest font-semibold">
          Strategic Advisory • Capital Structuring • Transformation
        </p>
      </motion.div>
    </section>);

}