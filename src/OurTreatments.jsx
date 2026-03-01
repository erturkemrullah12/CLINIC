// OurTreatments.jsx
// Props:
//   treatments – array imported from treatments.json
//   onSelect   – callback(treatment) fired when a card is clicked

import { useState } from "react";

const CATEGORIES = ["Tüm Hizmetler", "Enjeksiyonlar", "Cilt", "Lazer"];

export default function OurTreatments({ treatments, onSelect, onBookConsultation }) {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filtered =
    activeCategory === "Tüm Hizmetler"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  return (
    <div style={{ background: "#FAF7F2", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');
        @keyframes cardIn { from { opacity:0; transform:translateY(20px);} to { opacity:1; transform:translateY(0);} }
        * { font-family:'Manrope',sans-serif; box-sizing:border-box; }
        .serif { font-family:'DM Serif Display',serif; }

        .filter-btn {
          padding:10px 22px; border-radius:99px; font-size:13px; font-weight:700;
          border:none; cursor:pointer; transition:background .2s, color .2s;
        }
        .filter-btn.active  { background:#c9a227; color:#1c190d; }
        .filter-btn.inactive { background:transparent; color:#9a9180; }
        .filter-btn.inactive:hover { background:#f0ede5; color:#1c190d; }

        .treatment-card {
          background:white; border-radius:20px; overflow:hidden;
          cursor:pointer; border:1.5px solid transparent;
          transition:transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s, border-color .3s;
        }
        .treatment-card:hover {
          transform:translateY(-6px);
          box-shadow:0 24px 48px -16px rgba(0,0,0,.12);
          border-color:rgba(201,162,39,.35);
        }
        .card-img {
          width:100%; height:220px;
          background-size:cover; background-position:center;
          transition:transform .5s cubic-bezier(.16,1,.3,1);
        }
        .treatment-card:hover .card-img { transform:scale(1.06); }
        .arrow-icon { transition:transform .2s; }
        .treatment-card:hover .arrow-icon { transform:translateX(4px); }

        .cta-btn {
          background:#c9a227; color:#1c190d; font-weight:800;
          padding:14px 40px; border-radius:14px; border:none;
          cursor:pointer; font-size:15px;
          transition:transform .15s, box-shadow .15s;
        }
        .cta-btn:hover { transform:scale(1.04); box-shadow:0 12px 28px -8px rgba(201,162,39,.4); }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize:11, fontWeight:700, letterSpacing:".12em", color:"#8b6914", textTransform:"uppercase" }}>
            Özel Mükemmellik
          </span>
          <h2 className="serif" style={{ fontSize:"clamp(2.4rem,5vw,3.5rem)", fontWeight:400, color:"#1c190d", margin:"10px 0 14px", lineHeight:1.1 }}>
            Hizmetlerimiz
          </h2>
          <p style={{ fontSize:"1.05rem", color:"#8a8070", maxWidth:520, margin:"0 auto", lineHeight:1.75 }}>
            Kanıta dayalı tıbbi estetik; doğal güzelliğinizi kalıcı hassasiyetle güçlendirmek için tasarlandı.
          </p>
        </div>

        {/* ── Category Filters ── */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:48 }}>
          <div style={{ background:"white", borderRadius:99, padding:"5px 5px", display:"flex", boxShadow:"0 2px 12px -4px rgba(0,0,0,.08)" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : "inactive"}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Treatments Grid ── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:28 }}>
          {filtered.map((t, i) => (
            <div
              key={t.id}
              className="treatment-card"
              style={{ animation:`cardIn .4s ${i * 0.07}s cubic-bezier(.16,1,.3,1) both` }}
              onClick={() => onSelect(t)}
            >
              {/* Image wrapper keeps overflow hidden while card scales */}
              <div style={{ overflow:"hidden", height:220 }}>
                <div className="card-img" style={{ backgroundImage:`url(${t.image})` }} />
              </div>

              {/* Card body */}
              <div style={{ padding:"22px 24px 24px" }}>
                <span style={{ fontSize:10, fontWeight:700, letterSpacing:".1em", color:"#8b6914", textTransform:"uppercase" }}>
                  {t.category}
                </span>
                <h3 style={{ fontSize:"1.15rem", fontWeight:700, color:"#1c190d", margin:"6px 0 10px" }}>
                  {t.title}
                </h3>
                <p style={{ fontSize:13.5, color:"#7a7060", lineHeight:1.7, marginBottom:18 }}>
                  {t.summary}
                </p>
                <div style={{ display:"flex", alignItems:"center", gap:6, color:"#8b6914", fontWeight:700, fontSize:13 }}>
                  Daha Fazla
                  <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div style={{ marginTop:72, background:"linear-gradient(135deg,#faf6e8 0%,#f5ecd0 100%)", border:"1.5px solid rgba(201,162,39,.4)", borderRadius:24, padding:"52px 40px", textAlign:"center" }}>
          <h4 style={{ fontSize:"1.6rem", fontWeight:700, color:"#1c190d", marginBottom:10 }}>
            Nereden başlayacağınızdan emin değil misiniz?
          </h4>
          <p style={{ color:"#8a8070", marginBottom:28, fontSize:15 }}>
            Baş klinisyenlerimizle kapsamlı bir cilt konsültasyonu alın; size özel yolculuğunuzu planlayın.
          </p>
          <button type="button" className="cta-btn" onClick={onBookConsultation}>Konsültasyona Başlayın</button>
        </div>

      </div>
    </div>
  );
}
