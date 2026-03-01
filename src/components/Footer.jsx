import React from 'react';

function Footer() {
  return (
    <footer className="w-full border-t border-[#f4f1e7] pt-20 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary flex items-center justify-center rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[#1c190d]">medical_services</span>
              </div>
              <h2 className="text-[#1c190d] text-xl font-extrabold tracking-tight uppercase">ASER CLINIC</h2>
            </div>
            <p className="text-[#5c5847] text-sm leading-relaxed">
              Londra'nın önde gelen estetik merkezinde tıbbi mükemmellik ve sanatsal hassasiyet.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/442079460012"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#20BA5A] transition-all hover:scale-110 shadow-md"
                title="WhatsApp ile iletişime geç"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a className="size-10 rounded-full bg-nude-light flex items-center justify-center text-[#1c190d] hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">camera_alt</span>
              </a>
              <a className="size-10 rounded-full bg-nude-light flex items-center justify-center text-[#1c190d] hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
              <a className="size-10 rounded-full bg-nude-light flex items-center justify-center text-[#1c190d] hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[#1c190d] text-sm font-black uppercase tracking-widest">Site Haritası</h3>
            <nav className="flex flex-col gap-4">
              <a className="text-[#5c5847] text-sm hover:text-gold-accent transition-colors" href="#">Hizmetler</a>
              <a className="text-[#5c5847] text-sm hover:text-gold-accent transition-colors" href="#">Önce & Sonra Galerisi</a>
              <a className="text-[#5c5847] text-sm hover:text-gold-accent transition-colors" href="#">Felsefemiz</a>
              <a className="text-[#5c5847] text-sm hover:text-gold-accent transition-colors" href="#">Fiyat Rehberi</a>
              <a className="text-[#5c5847] text-sm hover:text-gold-accent transition-colors" href="#">SSS</a>
            </nav>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[#1c190d] text-sm font-black uppercase tracking-widest">İletişim</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-gold-accent text-xl">location_on</span>
                <p className="text-[#5c5847] text-sm">
                  12 Harley Street, <br />Marylebone, London <br />W1G 9PG
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold-accent text-xl">call</span>
                <p className="text-[#5c5847] text-sm">+44 20 7946 0012</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold-accent text-xl">mail</span>
                <p className="text-[#5c5847] text-sm">hello@aserclinic.com</p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9c8e49]">Çalışma Saatleri</p>
                <p className="text-[#5c5847] text-xs">Pzt - Cum: 09:00 - 20:00</p>
                <p className="text-[#5c5847] text-xs">Cmt: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[#1c190d] text-sm font-black uppercase tracking-widest">Bizi Bulun</h3>
            <div className="rounded-xl overflow-hidden border border-[#e8e4ce] h-48 bg-background-light">
              <div className="w-full h-full relative group">
                <img
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr68o2Y04a4EeOMJNGnu1BLng_Vx-5lWQD8Ukd7RB73X4FRvvqRbpA8cnQwVpPn5WYE4RTHH4_MUYny4mD_RTKCagRjatz63VaVPVPqlbjmyulwki10FgLpapQQyy4l8GURC8_aJ6X1u_Mli9pDQKFN3fRamU4JKrOIs7KPGvogzXtjPXhRaEjLlVCLQj-5b_VcutL2O0XDk_O2v1b8W0UQMjWBlG1CZ7t-Ygk4eb_iU46glubX_uV71g3Bt7Ay90wHckWDPjrrRuY"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold border border-[#e8e4ce] shadow-sm">Google Haritalar'da Görüntüle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-[#f4f1e7] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#9c8e49] text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 Aser Medical Aesthetics Group. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-8">
            <a className="text-[#9c8e49] text-[10px] font-bold uppercase tracking-[0.2em] hover:text-gold-accent" href="#">Gizlilik Politikası</a>
            <a className="text-[#9c8e49] text-[10px] font-bold uppercase tracking-[0.2em] hover:text-gold-accent" href="#">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
