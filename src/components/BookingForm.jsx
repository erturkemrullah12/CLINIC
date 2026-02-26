// BookingForm.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Randevu formu — Django API'ye bağlanır.
// Hem kliniğe hem hastaya HTML email otomatik gönderilir (backend tarafından).
//
// KURULUM:
//   .env dosyasına ekleyin:
//     VITE_API_URL=http://localhost:8000   (Vite için)
//     REACT_APP_API_URL=http://localhost:8000  (CRA için)
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
const API_URL = "http://localhost:8000";

const TREATMENTS = [
    { value: "botox", label: "Anti-Wrinkle (Botox)" },
    { value: "fillers", label: "Dermal Fillers" },
    { value: "prp", label: "PRP Therapy" },
    { value: "rejuvenation", label: "Skin Rejuvenation" },
    { value: "laser", label: "Laser Technology" },
    { value: "skincare", label: "Medical Skincare" },
    { value: "consultation", label: "Initial Consultation" },
];

// Sabit slot listesi — tarih seçilince API'dan güncellenir
const ALL_SLOTS = Array.from({ length: 20 }, (_, i) => {
    const h = 9 + Math.floor(i / 2);
    const m = i % 2 === 0 ? "00" : "30";
    return `${String(h).padStart(2, "0")}:${m}`;
}).filter((s) => s <= "18:30");

function getTodayStr() {
    return new Date().toISOString().split("T")[0];
}

// ─────────────────────────────────────────────────────────────────────────────
export default function BookingForm() {
    const [form, setForm] = useState({
        name: "", phone: "", email: "",
        treatment: "", date: "", time: "", notes: "",
    });
    const [availableSlots, setAvailableSlots] = useState(ALL_SLOTS);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [status, setStatus] = useState("idle"); // idle|sending|success|error
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");

    // Tarih değişince müsait saatleri API'dan çek
    useEffect(() => {
        if (!form.date) { setAvailableSlots(ALL_SLOTS); return; }

        setLoadingSlots(true);
        setForm((f) => ({ ...f, time: "" }));

        fetch(`${API_URL}/api/appointments/slots/?date=${form.date}`)
            .then((r) => r.json())
            .then((data) => setAvailableSlots(data.available_slots || ALL_SLOTS))
            .catch(() => setAvailableSlots(ALL_SLOTS))
            .finally(() => setLoadingSlots(false));
    }, [form.date]);

    // ── Validation ──────────────────────────────────────────────────────────
    function validate() {
        const e = {};
        if (!form.name.trim()) e.name = "Ad Soyad gerekli";
        if (!form.phone.trim()) e.phone = "Telefon gerekli";
        if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Geçerli bir email girin";
        if (!form.treatment) e.treatment = "Tedavi seçin";
        if (!form.date) e.date = "Tarih seçin";
        if (!form.time) e.time = "Saat seçin";
        return e;
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    }

    // ── Submit → Django API ──────────────────────────────────────────────────
    async function handleSubmit(e) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setStatus("sending");
        setApiError("");

        try {
            const res = await fetch(`${API_URL}/api/appointments/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    treatment: form.treatment,
                    date: form.date,
                    time: form.time + ":00",   // "10:00" → "10:00:00"
                    notes: form.notes,
                }),
            });

            if (res.ok) {
                setStatus("success");
                setForm({ name: "", phone: "", email: "", treatment: "", date: "", time: "", notes: "" });
            } else {
                const data = await res.json();
                // Django field-level hataları
                const fieldErrors = {};
                let generalError = "";
                Object.entries(data).forEach(([key, val]) => {
                    const msg = Array.isArray(val) ? val[0] : val;
                    if (["name", "phone", "email", "treatment", "date", "time", "notes"].includes(key)) {
                        fieldErrors[key] = msg;
                    } else {
                        generalError = msg;
                    }
                });
                if (Object.keys(fieldErrors).length) setErrors(fieldErrors);
                if (generalError) setApiError(generalError);
                setStatus("error");
            }
        } catch {
            setApiError("Sunucuya bağlanılamadı. Lütfen tekrar deneyin.");
            setStatus("error");
        }
    }

    // ── Styles ───────────────────────────────────────────────────────────────
    const S = {
        page: { fontFamily: "'Manrope',sans-serif", background: "#FAF7F2", minHeight: "100vh", padding: "40px 20px" },
        card: { maxWidth: 720, margin: "0 auto", background: "white", borderRadius: 24, padding: "48px 40px", boxShadow: "0 8px 40px -12px rgba(0,0,0,.1)" },
        label: { display: "block", fontSize: 11, fontWeight: 700, color: "#1c190d", marginBottom: 6, letterSpacing: ".05em", textTransform: "uppercase" },
        input: { width: "100%", height: 52, padding: "0 18px", borderRadius: 14, border: "1.5px solid #e8e4ce", background: "#FAFAF7", fontSize: 14, fontFamily: "inherit", outline: "none", transition: "border .2s, box-shadow .2s", boxSizing: "border-box" },
        select: { width: "100%", height: 52, padding: "0 18px", borderRadius: 14, border: "1.5px solid #e8e4ce", background: "#FAFAF7", fontSize: 14, fontFamily: "inherit", outline: "none", appearance: "none", cursor: "pointer", boxSizing: "border-box" },
        textarea: { width: "100%", padding: "14px 18px", borderRadius: 14, border: "1.5px solid #e8e4ce", background: "#FAFAF7", fontSize: 14, fontFamily: "inherit", outline: "none", resize: "vertical", minHeight: 88, boxSizing: "border-box" },
        errTxt: { fontSize: 11, color: "#e05252", marginTop: 4, fontWeight: 600 },
        grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 },
        btn: { width: "100%", height: 56, background: "#c9a227", color: "#1c190d", fontWeight: 800, fontSize: 15, borderRadius: 16, border: "none", cursor: "pointer", letterSpacing: ".06em", textTransform: "uppercase", transition: "transform .15s, box-shadow .15s" },
    };

    const focus = { borderColor: "#c9a227", boxShadow: "0 0 0 4px rgba(201,162,39,.15)" };

    function applyFocus(e) { Object.assign(e.target.style, focus); }
    function removeFocus(e, hasErr) {
        e.target.style.borderColor = hasErr ? "#e05252" : "#e8e4ce";
        e.target.style.boxShadow = "none";
    }

    function Field({ label, name, type = "text", as = "input", children, placeholder, hint }) {
        const err = errors[name];
        const base = as === "select" ? S.select : as === "textarea" ? S.textarea : S.input;
        const sharedProps = {
            name, id: name, value: form[name], onChange: handleChange, placeholder,
            style: { ...base, ...(err ? { borderColor: "#e05252" } : {}) },
            onFocus: applyFocus,
            onBlur: (e) => removeFocus(e, !!err),
        };
        return (
            <div>
                <label style={S.label} htmlFor={name}>{label}</label>
                {as === "select"
                    ? <select   {...sharedProps}>{children}</select>
                    : as === "textarea"
                        ? <textarea {...sharedProps} rows={3} />
                        : <input    {...sharedProps} type={type} min={type === "date" ? getTodayStr() : undefined} />}
                {hint && !err && <div style={{ fontSize: 11, color: "#b8af9a", marginTop: 4 }}>{hint}</div>}
                {err && <div style={S.errTxt}>{err}</div>}
            </div>
        );
    }

    // ── Başarı Ekranı ─────────────────────────────────────────────────────────
    if (status === "success") {
        return (
            <div style={S.page}>
                <div style={{ ...S.card, textAlign: "center", padding: "64px 40px" }}>
                    <div style={{ width: 72, height: 72, background: "#c9a227", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c190d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </div>
                    <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1c190d", marginBottom: 12 }}>Randevu Alındı!</h2>
                    <p style={{ color: "#8a8070", fontSize: 15, lineHeight: 1.7, maxWidth: 420, margin: "0 auto 8px" }}>
                        Randevu talebiniz başarıyla kaydedildi.
                    </p>
                    <p style={{ color: "#8a8070", fontSize: 14, lineHeight: 1.7, maxWidth: 420, margin: "0 auto 32px" }}>
                        📧 <strong>Email adresinize onay gönderildi.</strong><br />
                        📋 Kliniğimiz de bilgilendirildi — 24 saat içinde sizi arayacağız.
                    </p>
                    <button
                        style={{ ...S.btn, width: "auto", padding: "0 40px", cursor: "pointer" }}
                        onClick={() => setStatus("idle")}
                    >
                        Yeni Randevu Al
                    </button>
                </div>
            </div>
        );
    }

    // ── Ana Form ──────────────────────────────────────────────────────────────
    return (
        <div style={S.page}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        @media(max-width:580px){ .grid2r{ grid-template-columns:1fr !important; } }
      `}</style>

            <div style={S.card}>
                {/* Başlık */}
                <div style={{ marginBottom: 36 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#8b6914", letterSpacing: ".12em", textTransform: "uppercase" }}>
                        Online Randevu
                    </span>
                    <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, color: "#1c190d", lineHeight: 1.15, margin: "8px 0 10px" }}>
                        Özel Konsültasyon Rezervasyonu
                    </h1>
                    <p style={{ color: "#8a8070", fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                        Formu doldurun; kliniğimiz sizi onay için arayacaktır.<br />
                        <strong style={{ color: "#1c190d" }}>Hem size hem kliniğimize</strong> email onayı otomatik gönderilir.
                    </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                        {/* Ad + Telefon */}
                        <div className="grid2r" style={S.grid2}>
                            <Field label="Ad Soyad" name="name" placeholder="Örn: Ayşe Kaya" />
                            <Field label="Telefon" name="phone" type="tel" placeholder="+90 555 000 00 00" />
                        </div>

                        {/* Email */}
                        <Field label="Email Adresi" name="email" type="email" placeholder="email@ornek.com" />

                        {/* Tedavi + Tarih */}
                        <div className="grid2r" style={S.grid2}>
                            <Field label="Tedavi Türü" name="treatment" as="select">
                                <option value="">Tedavi seçin…</option>
                                {TREATMENTS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                            </Field>
                            <Field
                                label="Tercih Edilen Tarih"
                                name="date"
                                type="date"
                                hint="Seçtiğinizde müsait saatler yüklenir"
                            />
                        </div>

                        {/* Saat Seçimi */}
                        <div>
                            <label style={S.label} htmlFor="time">
                                Tercih Edilen Saat
                                {loadingSlots && (
                                    <span style={{ fontSize: 10, color: "#8b6914", marginLeft: 8, fontWeight: 600 }}>
                                        Yükleniyor…
                                    </span>
                                )}
                            </label>
                            {/* Görsel slot seçici */}
                            {form.date ? (
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {availableSlots.length === 0 ? (
                                        <p style={{ fontSize: 13, color: "#e05252", fontWeight: 600 }}>
                                            Bu gün için müsait saat bulunmuyor. Lütfen başka bir gün seçin.
                                        </p>
                                    ) : (
                                        availableSlots.map((slot) => (
                                            <button
                                                key={slot}
                                                type="button"
                                                onClick={() => { setForm(f => ({ ...f, time: slot })); setErrors(e => ({ ...e, time: undefined })); }}
                                                style={{
                                                    padding: "8px 16px", borderRadius: 10, border: "1.5px solid",
                                                    borderColor: form.time === slot ? "#c9a227" : "#e8e4ce",
                                                    background: form.time === slot ? "#c9a227" : "white",
                                                    color: form.time === slot ? "#1c190d" : "#5a5446",
                                                    fontWeight: form.time === slot ? 700 : 500,
                                                    fontSize: 13, cursor: "pointer", transition: "all .15s",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                {slot}
                                            </button>
                                        ))
                                    )}
                                </div>
                            ) : (
                                <p style={{ fontSize: 13, color: "#b8af9a", margin: 0 }}>
                                    Önce tarih seçin — müsait saatler burada görünecek.
                                </p>
                            )}
                            {errors.time && <div style={S.errTxt}>{errors.time}</div>}
                            <p style={{ fontSize: 11, color: "#b8af9a", marginTop: 8, marginBottom: 0 }}>
                                Pzt–Cum 09:00–19:00 · Cmt 10:00–16:00 · Pazar kapalı
                            </p>
                        </div>

                        {/* Notlar */}
                        <div>
                            <label style={S.label} htmlFor="notes">Ek Notlar <span style={{ fontWeight: 400, textTransform: "none", color: "#b8af9a" }}>(isteğe bağlı)</span></label>
                            <textarea
                                id="notes" name="notes" rows={3}
                                value={form.notes} onChange={handleChange}
                                placeholder="Belirtmek istediğiniz özel durumlar, alerji, önceki tedaviler…"
                                style={S.textarea}
                                onFocus={applyFocus}
                                onBlur={(e) => removeFocus(e, false)}
                            />
                        </div>

                        {/* Genel API Hatası */}
                        {apiError && (
                            <div style={{ background: "#fff0f0", border: "1px solid #fecaca", borderRadius: 12, padding: "12px 16px", fontSize: 13, color: "#e05252", fontWeight: 600 }}>
                                {apiError}
                            </div>
                        )}

                        {/* Gönder */}
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            style={{ ...S.btn, opacity: status === "sending" ? .7 : 1, cursor: status === "sending" ? "wait" : "pointer", marginTop: 4 }}
                            onMouseEnter={e => { if (status !== "sending") { e.target.style.transform = "scale(1.02)"; e.target.style.boxShadow = "0 12px 28px -8px rgba(201,162,39,.4)"; } }}
                            onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}
                        >
                            {status === "sending" ? "Gönderiliyor…" : "Randevu Talep Et →"}
                        </button>

                        <p style={{ textAlign: "center", fontSize: 11, color: "#b8af9a", margin: 0 }}>
                            Göndermeniz, <a href="#" style={{ color: "#9c8e49" }}>Gizlilik Politikamızı</a> kabul ettiğiniz anlamına gelir.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
