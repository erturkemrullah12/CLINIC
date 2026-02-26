// TreatmentDetail.jsx
// Props:
//   treatment  – single treatment object from treatments.json
//   onBack     – callback to return to the grid

export default function TreatmentDetail({ treatment, onBack }) {
  return (
    <div
      style={{ animation: "fadeSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
      className="min-h-screen bg-[#FAF7F2]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(24px);} to { opacity:1; transform:translateY(0);} }
        @keyframes scaleIn    { from { opacity:0; transform:scale(0.97);} to { opacity:1; transform:scale(1);} }
        * { font-family:'Manrope',sans-serif; box-sizing:border-box; }
        .serif { font-family:'DM Serif Display',serif; }
        .tag {
          display:inline-flex; align-items:center; gap:6px;
          background:#c9a227; color:#1c190d;
          padding:4px 14px; border-radius:99px;
          font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
        }
        .back-btn { display:flex; align-items:center; gap:8px; background:none; border:none; cursor:pointer; }
        .back-btn svg { transition:transform .2s; }
        .back-btn:hover svg { transform:translateX(-3px); }
        .stat-box {
          background:white; border-radius:16px; padding:20px 24px;
          flex:1; min-width:130px;
          box-shadow:0 4px 20px -8px rgba(0,0,0,.07);
        }
        .benefit-item {
          display:flex; align-items:center; gap:12px;
          padding:14px 0; border-bottom:1px solid #f0ede5;
        }
        .benefit-item:last-child { border-bottom:none; }
        .book-btn {
          width:100%; background:#c9a227; color:#1c190d;
          font-weight:800; padding:16px 40px; border-radius:14px;
          border:none; cursor:pointer; font-size:15px;
          transition:transform .15s, box-shadow .15s;
          margin-top:24px;
        }
        .book-btn:hover { transform:scale(1.04); box-shadow:0 12px 28px -8px rgba(201,162,39,.4); }
      `}</style>

      <div style={{ maxWidth:960, margin:"0 auto", padding:"40px 24px" }}>
        {/* Back button */}
        <button
          className="back-btn"
          onClick={onBack}
          style={{ fontSize:13, fontWeight:700, color:"#8a8070", marginBottom:40 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          All Treatments
        </button>

        {/* Hero image */}
        <div
          style={{
            backgroundImage: `url(${treatment.image})`,
            height: 420,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 20,
            animation: "scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both",
          }}
        />

        {/* Tag + Title */}
        <div style={{ marginTop: 40, marginBottom: 8 }}>
          <span className="tag">{treatment.category}</span>
        </div>
        <h1 className="serif" style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:400, color:"#1c190d", lineHeight:1.15, marginTop:10 }}>
          {treatment.title}
        </h1>
        <p style={{ fontSize:"1.1rem", color:"#8a8070", fontWeight:500, marginTop:8, fontStyle:"italic" }}>
          {treatment.tagline}
        </p>

        {/* Stats row */}
        <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginTop:32 }}>
          {[
            { label:"Duration",      value: treatment.duration },
            { label:"Downtime",      value: treatment.downtime },
            { label:"Results",       value: treatment.results  },
            { label:"Starting Price",value: treatment.price    },
          ].map((s) => (
            <div key={s.label} className="stat-box">
              <div style={{ fontSize:11, fontWeight:700, letterSpacing:".07em", color:"#b8af9a", textTransform:"uppercase", marginBottom:6 }}>
                {s.label}
              </div>
              <div style={{ fontSize:15, fontWeight:700, color:"#1c190d" }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Description + Benefits */}
        <div style={{ display:"flex", gap:40, marginTop:48, flexWrap:"wrap" }}>
          {/* Description */}
          <div style={{ flex:"1 1 340px" }}>
            <h2 style={{ fontSize:"1.2rem", fontWeight:700, color:"#1c190d", marginBottom:16 }}>
              About This Treatment
            </h2>
            {treatment.description.split("\n\n").map((para, i) => (
              <p key={i} style={{ color:"#5a5446", lineHeight:1.8, fontSize:15, marginBottom:16 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Benefits card */}
          <div style={{ flex:"1 1 260px", background:"white", borderRadius:20, padding:"28px 28px 20px", boxShadow:"0 4px 20px -8px rgba(0,0,0,.07)", alignSelf:"flex-start" }}>
            <h2 style={{ fontSize:"1.05rem", fontWeight:700, color:"#1c190d", marginBottom:4 }}>Key Benefits</h2>
            {treatment.benefits.map((b) => (
              <div key={b} className="benefit-item">
                <div style={{ width:22, height:22, borderRadius:"50%", background:"#c9a227", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#1c190d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontSize:14, fontWeight:600, color:"#3a3428" }}>{b}</span>
              </div>
            ))}
            <button className="book-btn">Book This Treatment</button>
          </div>
        </div>

        <div style={{ height:80 }} />
      </div>
    </div>
  );
}
