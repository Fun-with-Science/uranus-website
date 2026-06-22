"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

/* ─────────── Inline style constants ─────────── */
const LIGHT_BG  = "#f0f2f7";
const CARD_BG   = "#ffffff";
const DARK_CARD = "linear-gradient(160deg, #1a2332 0%, #0E1116 100%)";
const INPUT_BG  = "#f7f8fa";
const INPUT_BD  = "#d1d5db";
const INPUT_FOC = "#3E82F7";
const LABEL_CLR = "#6b7280";
const TEXT_DARK = "#111827";
const TEXT_MID  = "#6b7280";
const TEXT_LITE = "#9ca3af";
const BLUE      = "#3E82F7";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: INPUT_BG,
  border: `1.5px solid ${INPUT_BD}`,
  borderRadius: 10,
  padding: "12px 14px 12px 40px",
  fontSize: 14,
  color: TEXT_DARK,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const inputStyleNoIcon: React.CSSProperties = {
  ...inputStyle,
  paddingLeft: 14,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  color: LABEL_CLR,
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  marginBottom: 6,
};

function ContactForm() {
  const searchParams = useSearchParams();
  const [inquiryType, setInquiryType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const product = searchParams.get("product");
    const inquiry = searchParams.get("inquiry");
    if (product) {
      if (["10mm", "20mm", "40mm", "60mm"].includes(product)) setInquiryType("aggregates");
      else if (product === "msand") setInquiryType("msand");
      else if (product === "gsb") setInquiryType("gsb");
    } else if (inquiry === "bulk") setInquiryType("bulk");
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = INPUT_FOC;
    e.target.style.boxShadow = `0 0 0 3px rgba(62,130,247,0.12)`;
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = INPUT_BD;
    e.target.style.boxShadow = "none";
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#ecfdf5", border: "2px solid #a7f3d0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: TEXT_DARK, marginBottom: 10 }}>Inquiry Submitted!</h3>
        <p style={{ fontSize: 14, color: TEXT_MID, maxWidth: 380, margin: "0 auto 24px", lineHeight: 1.6 }}>
          Thank you for reaching out. Our team will contact you within 2 business hours.
        </p>
        <button onClick={() => setSubmitted(false)} style={{ background: BLUE, color: "#fff", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 10, border: "none", cursor: "pointer" }}>
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Row 1: Name + Company */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: TEXT_LITE }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </span>
            <input type="text" required placeholder="Full Name" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Company Name *</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: TEXT_LITE }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M9 21V9l6-3v15M3 21V11l6-2M21 21V7l-6 2"/></svg>
            </span>
            <input type="text" required placeholder="Company Name" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
          </div>
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: TEXT_LITE }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <input type="email" required placeholder="Email Address" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Phone Number *</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: TEXT_LITE }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0122 16.92z"/></svg>
            </span>
            <input type="tel" required placeholder="Phone Number" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
          </div>
        </div>
      </div>

      {/* Inquiry Type */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Inquiry Type *</label>
        <div style={{ position: "relative" }}>
          <select
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            required
            style={{ ...inputStyleNoIcon, appearance: "none" as const, cursor: "pointer", color: inquiryType ? TEXT_DARK : TEXT_LITE }}
            onFocus={handleFocus as unknown as React.FocusEventHandler<HTMLSelectElement>}
            onBlur={handleBlur as unknown as React.FocusEventHandler<HTMLSelectElement>}
          >
            <option value="" disabled>Select inquiry type</option>
            <option value="aggregates">Aggregate Supply (6mm – 60mm)</option>
            <option value="msand">M-Sand Supply</option>
            <option value="gsb">GSB Supply (Granular Sub Base)</option>
            <option value="bulk">Bulk Order / Procurement Contract</option>
            <option value="partnership">B2B Partnership / Dealership</option>
            <option value="general">General Inquiry</option>
          </select>
          <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: TEXT_LITE }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>Project Details / Requirements *</label>
        <textarea
          required
          rows={4}
          placeholder="Please provide details about your project, material type, quantity, delivery location, timeline, etc."
          style={{ ...inputStyleNoIcon, resize: "none" as const, lineHeight: 1.6 }}
          onFocus={handleFocus as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
          onBlur={handleBlur as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: BLUE, color: "#fff", fontWeight: 700, fontSize: 14,
          padding: "14px 30px", borderRadius: 10, border: "none", cursor: "pointer",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#5D98FC"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(62,130,247,0.3)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = BLUE; e.currentTarget.style.boxShadow = "none"; }}
      >
        Get Quote
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Privacy */}
      <p style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: TEXT_LITE, marginTop: 14 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        Your information is secure and will never be shared.
      </p>
    </form>
  );
}

/* ═══════════════ MAIN PAGE ═══════════════ */
export default function ContactPage() {
  return (
    <div>
      {/* ──── HERO BANNER ──── */}
      <section className="page-banner">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,17,22,0.5) 0%, rgba(14,17,22,0.85) 70%, rgba(14,17,22,0.98) 100%)" }} />
        </div>
        <div className="relative z-10 wrap w-full">
          <div style={{ maxWidth: 600 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: 18 }}>Contact Us</span>
            <h1 className="text-paper" style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
              Let&apos;s Build Something<br/>Great Together
            </h1>
            <p style={{ fontSize: 16, color: "#C3C9D1", lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
              Have a question, need a quotation, or want to discuss your project? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="tel:+919876543210" className="btn btn-blue" style={{ borderRadius: 10, fontSize: 14 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0122 16.92z"/></svg>
                Call Us Now
              </a>
              <a href="mailto:hello@uranusstone.in" className="btn btn-ghost" style={{ borderRadius: 10, fontSize: 14 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── FORM + CONTACT INFO ──── */}
      <section style={{ background: LIGHT_BG }}>
        <div className="wrap" style={{ paddingTop: 0, paddingBottom: 80 }}>
          {/* Cards pulled up into the hero */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24, marginTop: -60, position: "relative", zIndex: 10 }}>
            
            {/* Desktop: side-by-side using CSS grid on wider screens */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
              
              {/* FORM CARD */}
              <div style={{ background: CARD_BG, borderRadius: 20, padding: "36px 36px 40px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 6 }}>Send Us a Message</span>
                <h2 style={{ fontSize: 24, fontWeight: 900, color: TEXT_DARK, marginBottom: 28 }}>Request a Quotation</h2>
                <Suspense fallback={<div style={{ textAlign: "center", padding: "60px 0", color: TEXT_LITE, fontSize: 14 }}>Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>

              {/* CONTACT INFO CARD */}
              <div style={{ background: DARK_CARD, borderRadius: 20, padding: "36px 32px", boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 36 }}>Contact Information</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  {/* Visit */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: BLUE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 20 }}>location_on</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Visit Us</h4>
                      <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.6, margin: 0 }}>
                        Uranus Stone Yard Area,<br/>Nongpoh, Ri-Bhoi District,<br/>Meghalaya — 793102
                      </p>
                    </div>
                  </div>
                  {/* Call */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: BLUE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 20 }}>phone</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Call Us</h4>
                      <p style={{ fontSize: 14, color: "#9ca3af", margin: 0 }}>+91 98765 43210</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: BLUE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 20 }}>mail</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Email Us</h4>
                      <p style={{ fontSize: 14, color: "#9ca3af", margin: 0 }}>hello@uranusstone.in</p>
                    </div>
                  </div>
                  {/* Hours */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: BLUE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: 20 }}>schedule</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Working Hours</h4>
                      <p style={{ fontSize: 14, color: "#9ca3af", margin: 0, lineHeight: 1.6 }}>
                        Monday – Saturday: 24 Hours<br/>Sunday: <span style={{ color: BLUE }}>Maintenance</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ──── DEPARTMENT CONTACTS ──── */}
          <h2 style={{ fontSize: 24, fontWeight: 900, color: TEXT_DARK, textAlign: "center", margin: "64px 0 32px" }}>Our Department Contacts</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { icon: "groups", title: "Sales & Tenders", desc: "Bulk orders & pricing inquiries", email: "sales@uranusstone.in", label: "Email Sales" },
              { icon: "science", title: "Quality Lab", desc: "Testing & certificates", email: "qa@uranusstone.in", label: "Email Quality Lab" },
              { icon: "local_shipping", title: "Logistics", desc: "Dispatch & tracking support", email: "dispatch@uranusstone.in", label: "Email Logistics" },
            ].map((dept) => (
              <div key={dept.title} style={{ background: CARD_BG, borderRadius: 16, padding: "28px 24px", border: "1px solid #e5e7eb", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", transition: "transform 0.2s, box-shadow 0.2s" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(62,130,247,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: BLUE, fontSize: 22 }}>{dept.icon}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: TEXT_DARK, marginBottom: 2 }}>{dept.title}</h3>
                    <p style={{ fontSize: 13, color: TEXT_MID, margin: 0 }}>{dept.desc}</p>
                  </div>
                </div>
                <a href={`mailto:${dept.email}`} style={{ fontSize: 13, color: BLUE, fontWeight: 600, display: "block", marginBottom: 14 }}>{dept.email}</a>
                <a
                  href={`mailto:${dept.email}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: BLUE, border: `1.5px solid rgba(62,130,247,0.3)`, borderRadius: 8, padding: "8px 18px", textDecoration: "none", transition: "background 0.2s" }}
                >
                  {dept.label}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 4l4 4-4 4" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            ))}
          </div>

          {/* ──── MAP ──── */}
          <div style={{ marginTop: 56, position: "relative", width: "100%", height: 400, borderRadius: 20, overflow: "hidden", border: "1px solid #d1d5db", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <iframe
              title="Uranus Stone Plant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114851.9868750849!2d91.80373030386762!3d25.900827299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a52d3a339bd95%3A0xe50682054ff8e7b3!2sNongpoh%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1718919000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
            {/* Floating card */}
            <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(14,17,22,0.94)", backdropFilter: "blur(8px)", color: "#fff", padding: "20px 24px", borderRadius: 14, maxWidth: 260, boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Find Us</h4>
              <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.5, margin: "0 0 12px" }}>Nongpoh, Ri-Bhoi District,<br/>Meghalaya — 793102</p>
              <a href="https://maps.google.com/?q=Nongpoh,+Meghalaya" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: BLUE, textDecoration: "none" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>directions</span>
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── TRUST STATS STRIP ──── */}
      <section style={{ background: "#0E1116", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "48px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
            {[
              { icon: "engineering", num: "500+", label: "Projects Delivered" },
              { icon: "verified", num: "15+", label: "Years Experience" },
              { icon: "local_shipping", num: "24/7", label: "Logistics Support" },
              { icon: "workspace_premium", num: "ISO", label: "Certified Processes" },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(62,130,247,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ color: BLUE, fontSize: 22 }}>{stat.icon}</span>
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#ECEEF1" }}>{stat.num}</div>
                  <div style={{ fontSize: 12, color: "#98A2AE" }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
