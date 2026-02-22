import React from 'react';

function Hero({ onExploreTreatments }) {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center px-6 lg:px-12 py-12 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(to right, rgba(248, 248, 245, 0.9) 30%, rgba(248, 248, 245, 0.4) 60%, rgba(248, 248, 245, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFMlR1RfKOyBj2h7_t4_-Ir6Ep5t0vjjEdZQ8sIqWVuxpQj81rCtmiPZj03rfWFznSSUeUcTCyS85t9Tr-F8IVApuSwmdPMbDj6jdOmjcnxumXp5ZpKohQzSJiEiBX0-LPl1NGdFi2Erl87cAUxWgzv-Dr1r2DtpdC1Nxf1st_7rmBnzmcTH0sPGKn7x9AuNTEZ9bZdrlREi3FSHxx9oWL0Y7en8Ag82yvu27JehhHfFmBYpuPrYaqKKcLTOyxdH8N4lEVKWn7TjsL")'}}></div>
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex flex-col gap-4">
            <span className="text-gold-accent font-bold uppercase tracking-[0.2em] text-xs">Excellence in Aesthetics</span>
            <h1 className="text-[#1c190d] text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.03em]">
              Enhance Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c190d] to-[#9c8e49]">Natural Beauty</span> <br/>
              With Confidence
            </h1>
            <p className="text-[#5c5847] text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              Expert-led medical aesthetics tailored to your unique features. We blend clinical science with artistic precision.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-[#1c190d] text-base font-bold shadow-lg hover:shadow-xl transition-all">
              Book Consultation
            </button>
            <button 
              onClick={onExploreTreatments}
              className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-[#1c190d] bg-transparent text-[#1c190d] text-base font-bold hover:bg-[#1c190d] hover:text-white transition-all">
              Explore Treatments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
