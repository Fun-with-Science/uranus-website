"use client";

import React, { useState, useEffect } from "react";
import { useQuoteModal } from "./Providers";

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

  // Sync selected product from context when modal opens
  useEffect(() => {
    if (isOpen) {
      setMaterial(selectedProduct || "20mm");
      setIsSuccess(false);
      setErrors({});
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

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/90 backdrop-blur-md cursor-pointer" 
        onClick={closeModal}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-surface border border-line-strong p-8 rounded shadow-2xl z-10">
        <span className="corner tl"></span>
        <span className="corner br"></span>

        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-paper-dim hover:text-amber text-2xl transition-colors cursor-pointer"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h2 className="text-2xl font-black text-paper uppercase tracking-tight">Request a Quote</h2>
              <p className="text-xs text-fog mt-1">Get calibrated aggregate &amp; sand rates for your infrastructure project.</p>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-fog mb-1.5">Full Name *</label>
              <input
                id="modal-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={`w-full bg-ink border ${errors.name ? "border-red-500" : "border-line"} focus:border-amber text-paper text-sm px-4 py-3 outline-none rounded transition-colors`}
              />
              {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
            </div>

            {/* Email & Phone grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-fog mb-1.5">Email Address *</label>
                <input
                  id="modal-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className={`w-full bg-ink border ${errors.email ? "border-red-500" : "border-line"} focus:border-amber text-paper text-sm px-4 py-3 outline-none rounded transition-colors`}
                />
                {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-fog mb-1.5">Phone Number *</label>
                <input
                  id="modal-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 00000 00000"
                  className={`w-full bg-ink border ${errors.phone ? "border-red-500" : "border-line"} focus:border-amber text-paper text-sm px-4 py-3 outline-none rounded transition-colors`}
                />
                {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
              </div>
            </div>

            {/* Material & Quantity grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-material" className="block text-xs font-semibold uppercase tracking-wider text-fog mb-1.5">Select Grade *</label>
                <select
                  id="modal-material"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-ink border border-line focus:border-amber text-paper text-sm px-4 py-3 outline-none rounded transition-colors"
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
              </div>
              <div>
                <label htmlFor="modal-quantity" className="block text-xs font-semibold uppercase tracking-wider text-fog mb-1.5">Quantity (Tonnes) *</label>
                <input
                  id="modal-quantity"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 500"
                  className={`w-full bg-ink border ${errors.quantity ? "border-red-500" : "border-line"} focus:border-amber text-paper text-sm px-4 py-3 outline-none rounded transition-colors`}
                />
                {errors.quantity && <span className="text-xs text-red-500 mt-1 block">{errors.quantity}</span>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="modal-message" className="block text-xs font-semibold uppercase tracking-wider text-fog mb-1.5">Delivery Site &amp; Notes</label>
              <textarea
                id="modal-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your delivery location and any specific grading requests..."
                rows={3}
                className="w-full bg-ink border border-line focus:border-amber text-paper text-sm px-4 py-3 outline-none rounded transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-amber justify-center text-sm py-4 uppercase font-extrabold tracking-widest cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Generating quotation..." : "Submit Quote Request"}
            </button>
          </form>
        ) : (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 bg-moss/20 border border-moss rounded-full flex items-center justify-center mx-auto">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-moss">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-paper uppercase tracking-tight">Request Received</h2>
              <p className="text-sm text-paper-dim max-w-sm mx-auto">
                Thank you! Our materials logistics manager will review your required volume and contact you with a quotation.
              </p>
            </div>
            <button
              onClick={closeModal}
              className="btn btn-ghost text-xs uppercase tracking-wider py-3 px-6 cursor-pointer"
            >
              Return to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
