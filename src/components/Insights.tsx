import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function Insights() {
  const articles = [
  {
    tag: 'Capital Markets',
    title: 'Navigating the New Era of Real Estate Financing',
    image:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    tag: 'Corporate Strategy',
    title: "The Aviation Industry's Path to Sustainable Profitability",
    image:
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop'
  },
  {
    tag: 'Transformation',
    title: 'Digital Integration in Traditional Financial Services',
    image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  }];

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
              Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Latest from Uthion
            </h2>
          </div>
          <button className="inline-flex items-center px-6 py-2.5 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-white transition-colors">
            View all insights <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) =>
          <motion.div
            key={idx}
            className="group cursor-pointer"
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
            
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              
              </div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                {article.tag}
              </p>
              <h3 className="text-xl font-serif text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                {article.title}
              </h3>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}