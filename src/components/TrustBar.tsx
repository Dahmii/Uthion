import React from 'react';
export function TrustBar() {
  const logos = [
  'Pal Aviation',
  'Fitness Plus',
  'Bukka Hut',
  'Veritas Homes',
  'Chauteau Royal',
  'Medamov Global'];

  return (
    <section className="py-16 px-6 md:px-12 bg-[#F9FAFB] border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 max-w-md">
            Trusted by leading enterprises & financial institutions
          </h2>
          {/* <button className="self-start md:self-auto px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            See our partners
          </button> */}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale">
          {logos.map((logo, idx) =>
          <div
            key={idx}
            className="text-xl font-bold font-serif tracking-tight text-gray-500">
            
              {logo}
            </div>
          )}
        </div>
      </div>
    </section>);

}