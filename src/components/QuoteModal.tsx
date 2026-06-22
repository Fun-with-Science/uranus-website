"use client";

import React, { useState, useEffect } from "react";
import { useQuoteModal } from "./Providers";

// Theme and styling constants
const BLUE = "#3E82F7";
const BLUE_HOVER = "#5D98FC";
const INK = "#0E1116";
const SURFACE = "#14181F";
const SURFACE2 = "#1B212B";
const LINE = "rgba(255, 255, 255, 0.10)";
const LINE_STRONG = "rgba(255, 255, 255, 0.18)";
const FOG = "#98A2AE";
const PAPER = "#ECEEF1";
const PAPER_DIM = "#C3C9D1";
const RED = "#EF4444";
const MOSS = "#5FA463";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: INK,
  border: `1.5px solid ${LINE}`,
  borderRadius: 10,
  padding: "12px 14px 12px 40px",
  fontSize: 14,
  color: PAPER,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  color: FOG,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: 6,
};

export default function QuoteModal() {
  const { isOpen, closeModal, selectedProduct } = useQuoteModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Sync selected product from context when modal opens
  useEffect(() => {
    if (isOpen) {
      setMaterial(selectedProduct || "20mm");
      setIsSuccess(false);
      setErrors({});
      setFocusedField(null);
    }
  }, [isOpen, selectedProduct]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (isNaN(Number(quantity)) || Number(quantity) <= 0) {
      newErrors.quantity = "Quantity must be a positive number";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setQuantity("");
      setMessage("");
    }, 1200);
  };

  const getFieldStyle = (fieldName: string, hasError: boolean) => {
    const isFocused = focusedField === fieldName;
    return {
      ...inputStyle,
      borderColor: hasError ? RED : (isFocused ? BLUE : LINE),
      boxShadow: isFocused 
        ? (hasError ? `0 0 0 3px rgba(239, 68, 68, 0.15)` : `0 0 0 3px rgba(62, 130, 247, 0.15)`)
        : "none",
    };
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      {/* Backdrop */}
      <div 
        style={{ position: "absolute", inset: 0, background: "rgba(14, 17, 22, 0.90)", backdropFilter: "blur(10px)", cursor: "pointer" }}
        onClick={closeModal}
      />

      {/* Modal Box */}
      <div 
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 520,
          background: SURFACE,
          border: `1.5px solid ${LINE_STRONG}`,
          padding: "36px 32px",
          borderRadius: 20,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
          zIndex: 1010,
        }}
      >
        <span className="corner tl"></span>
        <span className="corner br"></span>

        {/* Close Button */}
        <button 
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            color: PAPER_DIM,
            fontSize: 24,
            cursor: "pointer",
            transition: "color 0.2s",
            lineHeight: 1,
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = BLUE}
          onMouseLeave={(e) => e.currentTarget.style.color = PAPER_DIM}
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: PAPER, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 6 }}>Request a Quote</h2>
              <p style={{ fontSize: 13, color: FOG, margin: 0, lineHeight: 1.5 }}>Get calibrated aggregate &amp; sand rates for your infrastructure project.</p>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="modal-name" style={labelStyle}>Full Name *</label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: FOG, display: "flex", alignItems: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input
                  id="modal-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  style={getFieldStyle("name", !!errors.name)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              {errors.name && <span style={{ fontSize: 12, color: RED, marginTop: 4, display: "block" }}>{errors.name}</span>}
            </div>

            {/* Email & Phone grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              <div>
                <label htmlFor="modal-email" style={labelStyle}>Email Address *</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: FOG, display: "flex", alignItems: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <input
                    id="modal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    style={getFieldStyle("email", !!errors.email)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                {errors.email && <span style={{ fontSize: 12, color: RED, marginTop: 4, display: "block" }}>{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="modal-phone" style={labelStyle}>Phone Number *</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: FOG, display: "flex", alignItems: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0122 16.92z"/></svg>
                  </span>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 00000 00000"
                    style={getFieldStyle("phone", !!errors.phone)}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                {errors.phone && <span style={{ fontSize: 12, color: RED, marginTop: 4, display: "block" }}>{errors.phone}</span>}
              </div>
            </div>

            {/* Material & Quantity grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              <div>
                <label htmlFor="modal-material" style={labelStyle}>Select Grade *</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: FOG, display: "flex", alignItems: "center" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>layers</span>
                  </span>
                  <select
                    id="modal-material"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    style={{
                      ...getFieldStyle("material", false),
                      paddingRight: 32,
                      appearance: "none",
                      cursor: "pointer",
                    }}
                    onFocus={() => setFocusedField("material")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="6mm">06 mm Aggregate</option>
                    <option value="10mm">10 mm Aggregate</option>
                    <option value="20mm">20 mm Aggregate</option>
                    <option value="40mm">40 mm Aggregate</option>
                    <option value="60mm">60 mm Aggregate</option>
                    <option value="msand">Manufactured Sand (M-Sand)</option>
                    <option value="gsb">Granular Sub Base (GSB)</option>
                    <option value="stone-dust">Stone Dust</option>
                  </select>
                  <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: FOG, display: "flex", alignItems: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="modal-quantity" style={labelStyle}>Quantity (Tonnes) *</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: FOG, display: "flex", alignItems: "center" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>scale</span>
                  </span>
                  <input
                    id="modal-quantity"
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 500"
                    style={getFieldStyle("quantity", !!errors.quantity)}
                    onFocus={() => setFocusedField("quantity")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                {errors.quantity && <span style={{ fontSize: 12, color: RED, marginTop: 4, display: "block" }}>{errors.quantity}</span>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="modal-message" style={labelStyle}>Delivery Site &amp; Notes</label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 13, top: 14, color: FOG, display: "flex", alignItems: "center" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>local_shipping</span>
                </span>
                <textarea
                  id="modal-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your delivery location and any specific grading requests..."
                  rows={3}
                  style={{
                    ...getFieldStyle("message", false),
                    resize: "none",
                    lineHeight: 1.6,
                    paddingTop: 10,
                  }}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                background: BLUE,
                color: "#10130f",
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "14px 20px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = BLUE_HOVER;
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(62,130,247,0.3)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = BLUE;
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }
              }}
            >
              {isSubmitting ? (
                <span>Generating quotation...</span>
              ) : (
                <>
                  <span>Submit Quote Request</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 4l4 4-4 4" stroke="#10130f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </>
              )}
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div 
              style={{ 
                width: 64, 
                height: 64, 
                borderRadius: "50%", 
                background: "rgba(95, 164, 99, 0.15)", 
                border: `1.5px solid ${MOSS}`, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke={MOSS} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: PAPER, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 8 }}>Request Received</h2>
              <p style={{ fontSize: 14, color: PAPER_DIM, maxWidth: 360, margin: "0 auto", lineHeight: 1.6 }}>
                Thank you! Our logistics manager will review your required volume and contact you with a quotation.
              </p>
            </div>
            <button
              onClick={closeModal}
              style={{
                background: "none",
                border: `1.5px solid ${LINE_STRONG}`,
                color: PAPER,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "10px 24px",
                borderRadius: 10,
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
                marginTop: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = BLUE;
                e.currentTarget.style.color = BLUE;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = LINE_STRONG;
                e.currentTarget.style.color = PAPER;
              }}
            >
              Return to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
