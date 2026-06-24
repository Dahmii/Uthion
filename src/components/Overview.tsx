import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
const tabs = [
{
  id: 'capital',
  label: 'Capital Raise'
},
{
  id: 'strategy',
  label: 'Corporate Strategy'
},
{
  id: 'transformation',
  label: 'Transformation'
}];

const content = {
  capital: {
    tag: 'Funding',
    title: 'Optimal structures for sustainable growth.',
    description:
    'We guide enterprises through complex capital raises, ensuring you secure the right funding mix to fuel expansion without compromising control.',
    bullets: [
    'Debt and equity structuring',
    'Investor relations and roadshows',
    'Valuation optimization',
    'Term sheet negotiation'],

    metric: '150%',
    metricLabel: 'Average Funding Increase'
  },
  strategy: {
    tag: 'Strategy',
    title: 'Aligning capabilities with market opportunities.',
    description:
    'Our corporate strategy frameworks help you identify new revenue streams, optimize resource allocation, and build sustainable competitive advantages.',
    bullets: [
    'Market entry strategies',
    'M&A advisory and integration',
    'Portfolio optimization',
    'Competitive positioning'],

    metric: '3x',
    metricLabel: 'Market Share Growth'
  },
  transformation: {
    tag: 'Operations',
    title: 'End-to-end operational excellence.',
    description:
    'We design and execute transformation programs that enhance efficiency, build resilient teams, and modernize your operational infrastructure.',
    bullets: [
    'Operating model design',
    'Cost optimization',
    'Digital transformation',
    'Change management'],

    metric: '40%',
    metricLabel: 'Operational Efficiency Gain'
  }
};
export function Overview() {
  const [activeTab, setActiveTab] = useState('capital');
  const activeContent = content[activeTab as keyof typeof content];
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
            Three ways we architect growth
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 bg-gray-200/50 p-1 rounded-full inline-flex">
            {tabs.map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'}`}>
              
                {tab.label}
              </button>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -10
                }}
                transition={{
                  duration: 0.3
                }}>
                
                {/* <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full mb-6">
                  {activeContent.tag}
                </span> */}
                <h3 className="text-3xl font-serif text-gray-900 mb-4 leading-tight">
                  {activeContent.title}
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {activeContent.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {activeContent.bullets.map((bullet, idx) =>
                  <li key={idx} className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  )}
                </ul>

                {/* <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </button> */}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Graphic */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95
                }}
                transition={{
                  duration: 0.4
                }}
                className="aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 relative overflow-hidden shadow-2xl">
                
                {/* Abstract background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl opacity-20"></div>

                {/* UI Mockup Card */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                        u
                      </div>
                      <span className="font-semibold text-gray-900">
                        Uthion Impact
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full shadow-[4px_0_0_0_#9ca3af,-4px_0_0_0_#9ca3af]"></div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 100 100">
                        
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#f3f4f6"
                          strokeWidth="8" />
                        
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="8"
                          strokeDasharray="283"
                          strokeDashoffset="70"
                          className="transition-all duration-1000" />
                        
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-3xl font-bold text-gray-900">
                          {activeContent.metric}
                        </span>
                      </div>
                    </div>
                    <p className="mt-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {activeContent.metricLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}