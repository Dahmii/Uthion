import React from 'react';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Overview } from './components/Overview';
import { Sectors } from './components/Sectors';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { MissionStats } from './components/MissionStats';
import { Insights } from './components/Insights';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900">
      <Hero />
      <Intro />
      <Overview />
      {/* <Sectors /> */}
      <TrustBar />
      <Services />
      <Testimonials />
      <MissionStats />
      {/* <Insights /> */}
      <CTA />
      <Footer />
    </div>);

}