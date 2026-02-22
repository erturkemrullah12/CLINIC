import React from 'react';

function WhyUs() {
  return (
    <section className="w-full py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-gold-accent font-bold uppercase tracking-[0.2em] text-xs">The Aser Standard</span>
          <h2 className="text-[#1c190d] text-4xl font-black mt-2">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="size-20 bg-nude-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-gold-accent text-4xl">verified_user</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Certified Specialists</h3>
            <p className="text-[#5c5847] leading-relaxed">Our clinical team consists of internationally trained, board-certified practitioners with extensive aesthetic experience.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="size-20 bg-nude-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-gold-accent text-4xl">precision_manufacturing</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Latest Technology</h3>
            <p className="text-[#5c5847] leading-relaxed">We invest in FDA-approved, medical-grade equipment to ensure the highest safety standards and optimal clinical outcomes.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="size-20 bg-nude-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-gold-accent text-4xl">auto_fix_high</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Natural Results</h3>
            <p className="text-[#5c5847] leading-relaxed">Our philosophy is "Less is More". We aim to enhance your features subtly, maintaining your unique facial expressions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
