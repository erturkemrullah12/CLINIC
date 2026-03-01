// TreatmentDetail.jsx
// Hizmet detay sayfası — koyu tema, teal vurgular, sol içerik / sağ görsel, WhatsApp & Online Danışmanlık butonları

const TEAL = "#00B8A9";
const TEAL_LIGHT = "#00CCCC";
const WHATSAPP_NUMBER = "442079460012"; // WhatsAppFloat ile aynı

const DEFAULT_PACKAGE_CONTENTS = [
  "Ücretsiz Tıbbi Danışmanlık",
  "Klinik Tercüme Hizmeti",
  "Havalimanı Transferi*",
];

export default function TreatmentDetail({ treatment, onBack, onBookConsultation }) {
  const packageContents = treatment.packageContents || DEFAULT_PACKAGE_CONTENTS;
  const whatsappMessage = encodeURIComponent(
    `Merhaba, "${treatment.title}" hizmeti hakkında bilgi almak istiyorum.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div
      style={{ animation: "fadeSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
      className="min-h-screen text-white overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(24px);} to { opacity:1; transform:translateY(0);} }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.98);} to { opacity:1; transform:scale(1);} }
        .detail-page * { font-family:'Manrope',sans-serif; box-sizing:border-box; }
        .detail-page .back-btn {
          display:inline-flex; align-items:center; gap:8px;
          background:transparent; border:none; cursor:pointer;
          color:rgba(255,255,255,0.85); font-size:13px; font-weight:700;
        }
        .detail-page .back-btn:hover { color:${TEAL_LIGHT}; }
        .detail-page .back-btn svg { transition:transform .2s; }
        .detail-page .back-btn:hover svg { transform:translateX(-3px); }
        .detail-page .btn-whatsapp {
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          background:${TEAL}; color:#fff; font-weight:700; font-size:15px;
          padding:16px 32px; border-radius:999px; border:none; cursor:pointer;
          text-decoration:none; transition:transform .15s, box-shadow .15s;
        }
        .detail-page .btn-whatsapp:hover {
          transform:scale(1.03); box-shadow:0 8px 24px -4px rgba(0,184,169,.45);
        }
        .detail-page .btn-consultation {
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          background:#fff; color:${TEAL}; font-weight:700; font-size:15px;
          padding:16px 32px; border-radius:999px; border:2px solid ${TEAL};
          cursor:pointer; transition:transform .15s, box-shadow .15s;
        }
        .detail-page .btn-consultation:hover {
          transform:scale(1.03); box-shadow:0 8px 24px -4px rgba(255,255,255,.2);
        }
      `}</style>

      {/* Arka plan: koyu + sol tarafta teal gradient */}
      <div
        className="detail-page fixed inset-0 -z-10"
        style={{
          background: "linear-gradient(90deg, rgba(0,80,80,0.25) 0%, #1A1A1A 45%, #1A1A1A 100%)",
          backgroundColor: "#1A1A1A",
        }}
      />

      <div className="detail-page flex flex-col min-h-screen lg:flex-row lg:min-h-0">
        {/* Sol: içerik */}
        <div
          className="flex-1 flex flex-col px-6 py-8 lg:py-12 lg:pl-12 lg:pr-10 xl:pl-20 xl:pr-16"
          style={{ maxWidth: "56rem" }}
        >
          <button type="button" className="back-btn mb-8 self-start" onClick={onBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Tüm Hizmetler
          </button>

          <h1
            className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-4"
            style={{ color: TEAL_LIGHT }}
          >
            {treatment.title}
          </h1>

          <div className="space-y-4 text-white/95 text-base md:text-lg leading-relaxed max-w-xl">
            {treatment.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Uyarı / bilgi kutusu */}
          <div
            className="mt-6 p-4 rounded-xl max-w-xl"
            style={{ background: "rgba(255,255,255,0.06)", color: "#CCCCCC", fontSize: "0.95rem" }}
          >
            Her birey farklıdır. Sunulan operasyon süreci ve prosedürler, durumunuza göre değişiklik gösterebilir.
          </div>

          {/* Paket içeriği */}
          <h2
            className="mt-8 text-lg font-bold mb-3"
            style={{ color: TEAL_LIGHT }}
          >
            Paket İçeriği
          </h2>
          <ul className="space-y-2 text-white/95 text-base max-w-xl mb-8">
            {packageContents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* WhatsApp & Online Danışmanlık butonları */}
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="WhatsApp ile yaz"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp ile Sohbet
            </a>
            <button
              type="button"
              className="btn-consultation"
              onClick={onBookConsultation}
            >
              Online Danışmanlık
            </button>
          </div>
        </div>

        {/* Sağ: büyük görsel */}
        <div
          className="flex-shrink-0 w-full lg:w-[44%] xl:w-[42%] lg:min-h-screen lg:sticky lg:top-0"
          style={{
            backgroundImage: `url(${treatment.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both",
          }}
        />
      </div>
    </div>
  );
}
