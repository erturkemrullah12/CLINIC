import React from 'react';

function WhyUs() {
  return (
    <section className="w-full py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-gold-accent font-bold uppercase tracking-[0.2em] text-xs">Aser Standardı</span>
          <h2 className="text-[#1c190d] text-4xl font-black mt-2">Neden Bizi Seçmelisiniz</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="size-20 bg-nude-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-gold-accent text-4xl">verified_user</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Sertifikalı Uzmanlar</h3>
            <p className="text-[#5c5847] leading-relaxed">Klinik ekibimiz uluslararası eğitimli, sertifikalı ve kapsamlı estetik deneyime sahip pratisyenlerden oluşur.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="size-20 bg-nude-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-gold-accent text-4xl">precision_manufacturing</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Son Teknoloji</h3>
            <p className="text-[#5c5847] leading-relaxed">En yüksek güvenlik ve optimal sonuçlar için onaylı, tıbbi sınıf ekipmanlara yatırım yapıyoruz.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="size-20 bg-nude-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-gold-accent text-4xl">auto_fix_high</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Doğal Sonuçlar</h3>
            <p className="text-[#5c5847] leading-relaxed">Felsefemiz “Az Çoktur”. Özelliklerinizi incelikle güçlendirir, benzersiz ifadenizi koruruz.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
