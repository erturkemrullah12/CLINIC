import React from "react";

// Hakkımızda / Philosophy sayfası — Premium Philosophy tasarımı.
// Kötü durursa App.jsx'ten view ve Header'daki link kaldırılıp bu dosya silinebilir.

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDApmGcTGNaUQHSbm7Kkg33M5wIujHPO_vIQxs0d_UcsV19DDRM7rq5C3UXOfm90wsImdflA8KQRT3AIPbfjNEIcNklHk8TYqL4bYZMU3KHnz71tP_NrSiMQfH2F_BFytt1x_tFY9TEnMGtPsc9YtXHiPQkS1ujShPAwDaZrqRZr2EgIjK1ZoeJo2CEQBdB60ZwKHavA6AIY4mqvyMKNLgSylR3FICH0t6yEyOeBwx-CYaYrQlJ64rRAIpve1SjvoujUENsVktRmf3i";
const PHILOSOPHY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDApmGcTGNaUQHSbm7Kkg33M5wIujHPO_vIQxs0d_UcsV19DDRM7rq5C3UXOfm90wsImdflA8KQRT3AIPbfjNEIcNklHk8TYqL4bYZMU3KHnz71tP_NrSiMQfH2F_BFytt1x_tFY9TEnMGtPsc9YtXHiPQkS1ujShPAwDaZrqRZr2EgIjK1ZoeJo2CEQBdB60ZwKHavA6AIY4mqvyMKNLgSylR3FICH0t6yEyOeBwx-CYaYrQlJ64rRAIpve1SjvoujUENsVktRmf3i";
const PREMIUM_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCz_XoyEuZtEB1bhIURtKmGbLT_j9VGCkplm6zeVr8y46JdyJxobkCuxvm4oMFfYy-xjPS_H_kmhLHTWzODU5ITmVcJo-Wf0lv7OFNNU9HySb2hgQKBcHkz--kCYJlYCTPWM39LziCygo6El99ro-Uo6LSm2tNXCX1t3UhBR00B5Qp_ulDK7G7W2O5Dregtko_xy93TAzGvIquL8bSLfkcaAXblBtZiL72LgtrvTtb3kc64sxGwnnhfP9pMm7kTcrMPnXKbdH-sgjRC";
const REFINED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-CGoi-PAJsrjDcRLRK989HofCdYwJF7X2W4MzLx2Lo0Ap1EnUtMh9XZrcxCHaUCIMWzIXFXZKi5_QBTZG0gcivqoKKPJ7t3E6rxB0_jiCPWHwPV-3u05fxNro5JMHUuHWahjmuyUPq1_OF1W85NVUKSJWU0IibReZNDiXA0WWtmuFl515ICfU6fVEle0-mvC-A45_N17kOwLPUAYYrXyRQ3pLhsqtiLKdJufy2g8puskGPASZY1u_77N6EKKwlB9Xj6Bo2ghruHkO";

const parchmentStyle = {
  backgroundColor: "#f8f6f0",
  backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuA-CGoi-PAJsrjDcRLRK989HofCdYwJF7X2W4MzLx2Lo0Ap1EnUtMh9XZrcxCHaUCIMWzIXFXZKi5_QBTZG0gcivqoKKPJ7t3E6rxB0_jiCPWHwPV-3u05fxNro5JMHUuHWahjmuyUPq1_OF1W85NVUKSJWU0IibReZNDiXA0WWtmuFl515ICfU6fVEle0-mvC-A45_N17kOwLPUAYYrXyRQ3pLhsqtiLKdJufy2g8puskGPASZY1u_77N6EKKwlB9Xj6Bo2ghruHkO)`,
  backgroundBlendMode: "multiply",
};

export default function Hakkimizda({ onBookConsultation, onViewTreatments }) {
  return (
    <main className="font-['Newsreader',serif] bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero — The Aser Ethos */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white dark:bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            alt="High-end Editorial Clinic Interior"
            className="w-full h-full object-cover opacity-90 dark:opacity-40"
            src={HERO_IMG}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-4 text-primary font-bold tracking-[0.5em] uppercase text-[0.65rem]">
              <span className="w-12 h-px bg-primary" /> Our Legacy
            </div>
            <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-bold leading-[0.85] tracking-tighter" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              The Aser <br />
              <span className="italic font-light text-primary">Ethos.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl italic">
              &ldquo;A sanctuary where medical science meets the artisan&apos;s touch, dedicated to the preservation of your unique visual identity.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Natural Enhancement */}
      <section
        className="py-24 md:py-52 border-y border-primary/10"
        style={parchmentStyle}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <div className="lg:w-1/2 space-y-12 lg:space-y-16">
              <div className="space-y-6">
                <span className="text-primary font-bold uppercase tracking-[0.5em] text-xs">
                  Our Philosophy
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                  Natural <br />
                  <span className="italic font-light text-primary">Enhancement</span>
                </h2>
              </div>
              <div className="space-y-8 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                <p>
                  At Aser Clinic, we believe the highest form of aesthetic mastery is that which remains undetectable. Our philosophy is rooted in &apos;Scientific Artistry&apos;—a commitment to enhancing your features through a &apos;less is more&apos; approach.
                </p>
                <p>
                  We leverage the Golden Ratio and advanced anatomical mapping to ensure every refinement harmonizes with your natural structure. It is not about changing who you are, but revealing your most refreshed and vibrant self.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 border border-primary/20 rounded-[2rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
                <img
                  alt="Serene Clinical Space"
                  className="w-full aspect-[4/5] object-cover rounded-[1.5rem] shadow-2xl"
                  src={PHILOSOPHY_IMG}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Experience */}
      <section className="py-24 md:py-60 bg-white dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col justify-center space-y-12 lg:space-y-16">
              <div className="space-y-6">
                <span className="text-primary font-bold uppercase tracking-[0.5em] text-xs">
                  The Standard
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                  Premium <br />
                  <span className="italic font-light text-primary">Experience</span>
                </h2>
              </div>
              <div className="space-y-10 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase text-sm tracking-[0.2em]">
                    Absolute Exclusivity
                  </h3>
                  <p>
                    We operate on a strictly private basis, ensuring that every appointment is held in a sequestered environment. Our scheduling is designed to provide complete anonymity and undivided attention, allowing for a journey that is as private as it is transformative.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase text-sm tracking-[0.2em]">
                    Bespoke Private Care
                  </h3>
                  <p>
                    From the tactile warmth of Italian marble to the curated soft lighting, every detail of our clinic is orchestrated to soothe the senses. Your care is overseen by a dedicated concierge, ensuring that your experience transcends traditional clinical boundaries into the realm of pure luxury.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[600px] flex items-center justify-end">
              <div className="relative w-full lg:w-4/5 h-[70vh] lg:h-[80%]">
                <div className="absolute inset-0 z-10 overflow-hidden rounded-[2rem] shadow-2xl">
                  <img
                    alt="Luxury Marble and Gold Detail"
                    className="w-full h-full object-cover scale-110"
                    src={PREMIUM_IMG}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute -bottom-8 lg:-bottom-16 -left-8 lg:-left-16 z-20 w-1/2 aspect-square rounded-3xl overflow-hidden border-8 lg:border-[12px] border-white dark:border-[#221f10] shadow-2xl">
                  <img
                    alt="Refined Clinic Lighting"
                    className="w-full h-full object-cover"
                    src={REFINED_IMG}
                  />
                </div>
                <div className="absolute top-12 -right-8 w-24 h-24 border border-primary/40 rounded-full z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Your Journey Starts Here */}
      <section className="py-24 md:py-40 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#05070a] rounded-[2rem] md:rounded-[4rem] p-12 md:p-24 lg:p-40 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] bg-primary/10 rounded-full -mr-40 md:-mr-60 -mt-40 md:-mt-60 blur-[100px]" />
          <div className="relative z-10 space-y-10 md:space-y-16">
            <h2 className="text-4xl md:text-6xl lg:text-9xl font-bold leading-none tracking-tighter">
              Your Journey <br />
              <span className="italic font-light text-primary">Starts Here</span>
            </h2>
            <p className="text-lg md:text-2xl font-light opacity-80 max-w-2xl mx-auto">
              Experience the pinnacle of medical aesthetic excellence. Reserve your private consultation at our Mayfair sanctuary.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center pt-6 md:pt-10">
              <button
                type="button"
                onClick={onBookConsultation}
                className="bg-primary text-slate-950 px-10 md:px-16 py-4 md:py-6 rounded-full text-base md:text-lg font-bold hover:brightness-110 transition-all uppercase tracking-[0.25em]"
              >
                Book Consultation
              </button>
              <button
                type="button"
                onClick={onViewTreatments}
                className="bg-transparent border border-white/20 text-white px-10 md:px-16 py-4 md:py-6 rounded-full text-base md:text-lg font-bold hover:bg-white/10 transition-all uppercase tracking-[0.25em]"
              >
                View Treatments
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
