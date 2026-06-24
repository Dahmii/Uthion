import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
export function Sectors() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
            Real Estate • Aviation • Financial
          </p> */}
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
            What Our Solutions Provide
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-[16/9] md:aspect-auto md:h-[400px]"
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
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
                      alt="Sarah Chen"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Sarah Chen</h4>
                    <p className="text-blue-200 text-sm">
                      CEO, PropTech Ventures
                    </p>
                  </div>
                </div>
                <div className="text-white font-serif text-2xl font-bold opacity-50">
                  Real Estate
                </div>
              </div>

              <div className="flex items-center justify-center absolute inset-0 pointer-events-none">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-blue-600 ml-1" />
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-white text-lg md:text-xl font-medium max-w-md leading-snug">
                  "Uthion's strategic guidance was instrumental in securing our
                  Series B funding and optimizing our portfolio."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-[16/9] md:aspect-auto md:h-[400px]"
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
            
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop"
                      alt="Michael Rodriguez"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold">
                      Michael Rodriguez
                    </h4>
                    <p className="text-gray-600 text-sm">
                      COO, SkyLink Aviation
                    </p>
                  </div>
                </div>
                <div className="text-gray-900 font-serif text-2xl font-bold opacity-30">
                  Aviation
                </div>
              </div>

              <div className="flex items-center justify-center absolute inset-0 pointer-events-none">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-gray-900 text-lg md:text-xl font-medium max-w-md leading-snug">
                  "The transformation program reduced costs by 30% while
                  improving service quality across our fleet."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}