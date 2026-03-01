import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Alexandra M.",
    treatment: "Cilt Yenileme",
    text: "Sonuçlar çok doğal ama dönüştürücü. Arkadaşlarım dinlenmiş göründüğümü söylüyor ama bir şey yaptırdığımı anlamıyorlar. Tam istediğim buydu.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmv9Qxs_stnL1rsfQM-BMlEHukuE5FS_RX9jhr-s73bPEoKcfYyf-kbYPPsnXyCl_f-kfIOMCvYJY95rudU7LRGLZ04qx8VIyfyXtlSCJqhx1fTy3PFbICDCqYXVZmndMDvwf-ORg9TTPPmShuRNEHJqndwxiztFAEjL8xIcMWLGvEtR33N4kX8GRsU6WmhRTXEA8PSKRjhgpO9OiXdP4V9VFNjZZYW1Sw2EbZ_yg6j6CtbGUJvfUt374JueZiH-dyiEBQIujvkUn_"
  },
  {
    id: 2,
    name: "Julian R.",
    treatment: "Dermal Dolgular",
    text: "Profesyonellik zirvede. Konsültasyon çok detaylıydı, kendimi tamamen rahat hissettim. Klinik ortamı tertemiz ve çok davetkâr.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbp1V2igSconYMXKaPMZBlYetEytKAw6jgzgiaaSHmu_1pwTikQcqxkaPC4BoU6nNWwJsruWy9vlHWRkEQdTVLno4o5GTlv-ZGGoE17qi9fJb8QUvdMdczqFBVu5_jnO9fgMXF7Ubn5UA3XmRn_mnzEKGd2CzTjgLq55QJwkxlrC-0_tetbAddlAALS6_Db_ZGKFWrNUP9yfisQCrqaYXvhIZ1qfT1S3SWNSU-Rd3j3S3Dh3FZHnd7Y834lPD-GTY4IyQUbwn3iOxe"
  },
  {
    id: 3,
    name: "Sophia K.",
    treatment: "Botox Tedavisi",
    text: "Londra'da birçok kliniği gezdim; Aser Clinic bugüne kadar gördüğüm en uzman ekip. Yüz uyumuna olan gözleri sektörde eşsiz.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfNusu01WD9HKHrev1H-OEyYXEvHSfMIVUFqVQyUbCmbU2m_U2ZGdiTJy-ZTnlmCWK8t-hjkq3oABxNGRv4kAPw8IYx2E_pQzZ5pPxrSrF7MSwKCK64uMyUMz77EGM5qi-nantVJExF2upnmIMMMUxD_2yEpoOrvShh82zz-pJvsEegJTarIDCIdjmpZ4K6rGdL3doUhB5zn8h3T6ZXHCfmm7dSJukfwOVq9WgvsWsR9CKBbNAi6TdcBFbzj6YzChAbFKwP8Bm3AAz"
  }
];

function Testimonials() {
  return (
    <section className="w-full py-24 bg-nude-light" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-gold-accent font-bold uppercase tracking-[0.2em] text-xs">Hasta Hikayeleri</span>
          <h2 className="text-[#1c190d] text-4xl font-black mt-2">Danışanlarımız Ne Diyor</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-2xl shadow-sm flex flex-col gap-6">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined">star</span>
                ))}
              </div>
              <p className="font-serif text-xl italic text-[#1c190d] leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-cover bg-center" style={{backgroundImage: `url('${testimonial.image}')`}}></div>
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-[#9c8e49] uppercase tracking-widest font-bold">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
