import React from 'react';

const treatments = [
  {
    id: 1,
    title: "Botox",
    description: "Smooth fine lines and prevent wrinkles with our precision anti-wrinkle injections for a refreshed, youthful appearance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgQLflyfN5SecR9CjfHYPj9XMcpK0CX1XPNbIt1ZWQp3xUpoyzvvBaN2DAEYIk2xu8rocvl_HTwmuOm_jXfYaIF4ZXQZPMKqNr6WSE2jpZZ9_uNa-xgM8IjHJnOVkZRM5T704AyMH1rcJhUgUE6MXFwj4NsLVHIuMxuPHQ_pz6_a97IfxCfUxeC5l9-GLNbnSTbXIULR8wf9uq3DGy5Ph_tQnVbVLmeot4H7fd6yXgudlcYDr9hBTefN4taKMkOz3KOBDzncJYSlca"
  },
  {
    id: 2,
    title: "Dermal Fillers",
    description: "Restore volume and enhance facial contours with premium hyaluronic acid fillers tailored to your unique structure.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZbqpRGHa7GwRYrlf002NyixqAVZzDwBy_OH1ktUSDk6stjMS4_08XLj3BeThtpD_ks5daeVONS0Z3U8xsbSRyzjd2JZM1jvYbTcvGq2Yy6bi07pgamVan7kR-zdAobpKzMGiYCLdbu-WhBrYm0kbqq9OFe-KvDziiD9EuIUgLW9waT5UE-7sTyhVLEALnjrt60ojcFlmLmFFZkXwCXz0wrJjhOspgUAmdz3i3ZhfbZvgfGdUh3SIm5zcpWAK_kvUtQYKmkLmxvuZe"
  },
  {
    id: 3,
    title: "PRP Treatment",
    description: "Harness your body's natural healing power with Platelet-Rich Plasma therapy for rejuvenation and hair restoration.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFBmlI5A76u1gX_bQO0zdBNjCg6KVvJUZ_s5W6-PWnyZ4KYm44QB4UIfd_6mdRQAC6j8Y_UfbMMWlhWzYyymFXWrPOjmhOGrodYcX2y5bqsvZNSq0Sp6MGhO_3X7qN0NJ4WdcMMCcVkiZp5LbKNgHPshkBb2XQfsBAOPCs23zNKfxRtPu1oZb4S9zZ8ZDbJG7VrxgaIScu6QD4Ecd0Ar-Y4N7Rw_m9_KnEQRSrIATajSaxJXJyEkXTcEOhxqZGlOT317icceDIrd3m"
  },
  {
    id: 4,
    title: "Skin Rejuvenation",
    description: "Advanced chemical peels and microneedling treatments designed to improve texture, tone, and overall skin health.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZF4EMhRIJgxteXcPGDrgpK_0l-epCMNGMl_7ngThVM5iWA8WBVvDQfCyNsZtVBRNS6IIw_VC5vhvRea71CNlBQlhGUhxAIEG8az8irT2DqTUUyeq_yX3HMav0E-aJTwTjeCFl0r4ysP7-BKvSgmjEmUNfYoMkSD6xjElIdmPM2fm4p8wD8fpDKIw1yRIAGJhjWSznqZo5giG6YD91N1bkHad8YgKq4fmPbK6s-LKlRwKAU3-FJ2r99NBpguMxdUTa_UYTtsaAbZoO"
  },
  {
    id: 5,
    title: "Laser Treatments",
    description: "State-of-the-art laser technology for hair removal, pigmentation correction, and vascular lesion removal.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABbK3HThG3ICPVzfaJGVx_nrns_U0INVoAwfxJuQfS17fznpMOlLHZKKKv23aqFY4EQ-WskJtkvXOPAXL-xyKa6W9TDmICLZybn5cyTFlVckdmoeTOJZAEe1RjpILM2RiExxzg8om88bnz5gZ5r-idaTTyOawo0mB_XumTzbcrAqzUw63naRzlNopeKJK5U0_i17Fu3JkNcJm8PFwlLPHOYqjqQXSab32Bk3RFULrpgpA9v7Gph70tl4lgGormnmxRX-Hc9g0EDY79"
  },
  {
    id: 6,
    title: "Medical Skincare",
    description: "Prescription-grade skincare protocols and products curated by our clinical experts for long-lasting results.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlSeWHU6qYJHoN8LyAyE5kAQPskQec3_hlmu8GXosUVf8zX2u4pUSaLcYViTxU-qVvWZkFAXmjv9QaFy2iYB62ITjO5MrvkuQ_0gYvhq0ZohROn3QNaDQvkl0x1wcBac1ipZlWZTMZeaCas7dWPlka41zdYwfYxrxBIFKF35dzl4HbTTIlc6zaoMBbkgkfoymJnrwq0frTLJ-3pJZQ8aSoYlyYbAhP1EZruggC9Xm8Nny0UfWyPqjxYWlmjplhrSQOTGIpU4nnlovF"
  }
];

function Treatments({ onLearnMore }) {
  return (
    <section className="w-full py-24 bg-background-light" id="treatments">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="text-gold-accent font-bold uppercase tracking-[0.2em] text-xs">Bespoke Procedures</span>
          <h2 className="text-[#1c190d] text-4xl lg:text-5xl font-black tracking-tight">Our Specialist Treatments</h2>
          <div className="w-20 h-1 bg-primary rounded-full mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-[#f0ede4]">
              <div className="aspect-[16/10] overflow-hidden">
                <img alt={treatment.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={treatment.image} />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[#1c190d] text-2xl font-bold mb-3">{treatment.title}</h3>
                <p className="text-[#5c5847] text-sm leading-relaxed mb-6 flex-grow">{treatment.description}</p>
                <button 
                  onClick={() => onLearnMore && onLearnMore()}
                  className="text-gold-accent font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Treatments;
