import React from 'react';

function Header({ onNavigateToTreatments, onNavigateToHome, onNavigateToHakkimizda, onNavigateToBooking, onNavigateToSection, activeNav }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f4f1e7] bg-background-light/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <button 
          onClick={onNavigateToHome}
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="size-10 bg-primary flex items-center justify-center rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-[#1c190d]">medical_services</span>
          </div>
          <h2 className="text-[#1c190d] text-xl font-extrabold tracking-tight">ASER CLINIC</h2>
        </button>
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={onNavigateToTreatments}
            className="text-[#1c190d] text-sm font-semibold hover:text-gold-accent transition-colors uppercase tracking-wider bg-transparent border-none cursor-pointer"
          >
            Hizmetler
          </button>
          {onNavigateToHakkimizda && (
            <button 
              onClick={onNavigateToHakkimizda}
              className={`text-sm font-semibold transition-colors uppercase tracking-wider bg-transparent border-none cursor-pointer ${activeNav === "philosophy" ? "text-primary" : "text-[#1c190d] hover:text-gold-accent"}`}
            >
              Hikayemiz
            </button>
          )}
          <button 
            onClick={() => {
              if (onNavigateToSection) {
                onNavigateToSection("results");
              } else {
                const element = document.getElementById("results");
                if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="text-[#1c190d] text-sm font-semibold hover:text-gold-accent transition-colors uppercase tracking-wider bg-transparent border-none cursor-pointer"
          >
            Sonuçlar
          </button>
          <button 
            onClick={() => {
              if (onNavigateToSection) {
                onNavigateToSection("why-us");
              } else {
                const element = document.getElementById("why-us");
                if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="text-[#1c190d] text-sm font-semibold hover:text-gold-accent transition-colors uppercase tracking-wider bg-transparent border-none cursor-pointer"
          >
            Hakkımızda
          </button>
          <button 
            onClick={() => {
              if (onNavigateToSection) {
                onNavigateToSection("testimonials");
              } else {
                const element = document.getElementById("testimonials");
                if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="text-[#1c190d] text-sm font-semibold hover:text-gold-accent transition-colors uppercase tracking-wider bg-transparent border-none cursor-pointer"
          >
            Yorumlar
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/442079460012"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex size-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#20BA5A] transition-all hover:scale-110 shadow-md"
            title="WhatsApp ile iletişime geç"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <button 
            onClick={onNavigateToBooking}
            className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-11 px-6 bg-primary text-[#1c190d] text-sm font-bold tracking-wide shadow-md hover:bg-opacity-90 transition-all active:scale-95"
          >
            Randevu Al
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
