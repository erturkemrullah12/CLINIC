import React, { useState, useEffect } from 'react';

function Results() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const slider = document.querySelector('.before-after-slider');
      if (!slider) return;
      const rect = slider.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <section className="w-full py-24 bg-white" id="results">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <span className="text-gold-accent font-bold uppercase tracking-[0.2em] text-xs">Dönüşüm</span>
            <h2 className="text-[#1c190d] text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Görünür Sonuçlar, <br/>Hissettirmez Çaba
            </h2>
            <p className="text-[#5c5847] text-lg leading-relaxed">
              Gerçek dönüşüm galerimizi inceleyin. Özelliklerinizi güçlendirirken sizin gibi görünmeye devam etmenize; sadece daha dinlenmiş ve tazelenmiş olmanıza odaklanıyoruz.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-gold-accent">98%</span>
                <span className="text-xs uppercase font-bold text-[#9c8e49] tracking-widest">Danışan Memnuniyeti</span>
              </div>
              <div className="w-px h-12 bg-[#e8e4ce]"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-gold-accent">5k+</span>
                <span className="text-xs uppercase font-bold text-[#9c8e49] tracking-widest">Uygulanan Prosedür</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div 
              className="before-after-slider aspect-[4/3] rounded-2xl shadow-2xl border border-[#e8e4ce]"
              onMouseDown={handleMouseDown}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDmv9Qxs_stnL1rsfQM-BMlEHukuE5FS_RX9jhr-s73bPEoKcfYyf-kbYPPsnXyCl_f-kfIOMCvYJY95rudU7LRGLZ04qx8VIyfyXtlSCJqhx1fTy3PFbICDCqYXVZmndMDvwf-ORg9TTPPmShuRNEHJqndwxiztFAEjL8xIcMWLGvEtR33N4kX8GRsU6WmhRTXEA8PSKRjhgpO9OiXdP4V9VFNjZZYW1Sw2EbZ_yg6j6CtbGUJvfUt374JueZiH-dyiEBQIujvkUn_\')'}}>
                <span className="absolute top-4 left-4 bg-black/50 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Önce</span>
              </div>
              <div 
                className="absolute inset-0 bg-cover bg-center border-r-2 border-white overflow-hidden" 
                style={{
                  width: `${sliderPosition}%`,
                  backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBfNusu01WD9HKHrev1H-OEyYXEvHSfMIVUFqVQyUbCmbU2m_U2ZGdiTJy-ZTnlmCWK8t-hjkq3oABxNGRv4kAPw8IYx2E_pQzZ5pPxrSrF7MSwKCK64uMyUMz77EGM5qi-nantVJExF2upnmIMMMUxD_2yEpoOrvShh82zz-pJvsEegJTarIDCIdjmpZ4K6rGdL3doUhB5zn8h3T6ZXHCfmm7dSJukfwOVq9WgvsWsR9CKBbNAi6TdcBFbzj6YzChAbFKwP8Bm3AAz\')'
                }}
              >
                <span className="absolute top-4 left-4 bg-primary text-[#1c190d] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Sonra</span>
              </div>
              <div 
                className="slider-handle" 
                style={{ left: `${sliderPosition}%` }}
              ></div>
            </div>
            <p className="text-center mt-6 text-sm italic text-[#5c5847]">*Sonuçlar kişiye göre değişebilir.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
