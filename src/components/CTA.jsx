import React from 'react';

function CTA() {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-24">
      <div className="w-full bg-[#1c190d] rounded-[2.5rem] p-12 md:p-20 text-center flex flex-col items-center gap-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        <h2 className="text-white text-4xl md:text-5xl font-black max-w-2xl leading-tight relative z-10">
          Ready to Begin Your Natural Transformation?
        </h2>
        <p className="text-white/70 text-lg max-w-xl relative z-10">
          Schedule a private consultation with our clinical experts today and discover the Aser Clinic difference.
        </p>
        <div className="flex flex-wrap justify-center gap-4 relative z-10 pt-4">
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-[#1c190d] text-base font-bold shadow-lg hover:scale-105 transition-transform">
            Book Your Consult
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
