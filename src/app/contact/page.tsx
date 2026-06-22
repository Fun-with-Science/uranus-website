"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const [inquiryType, setInquiryType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const product = searchParams.get("product");
    const inquiry = searchParams.get("inquiry");
    
    if (product) {
      if (["10mm", "20mm", "40mm", "60mm"].includes(product)) {
        setInquiryType("aggregates");
      } else if (product === "msand") {
        setInquiryType("msand");
      } else if (product === "gsb") {
        setInquiryType("gsb");
      }
    } else if (inquiry === "bulk") {
      setInquiryType("bulk");
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-moss/10 border border-moss/30 p-10 rounded text-center space-y-4 relative">
        <span className="corner tl"></span>
        <span className="corner br"></span>
        <div className="w-16 h-16 bg-moss/20 border border-moss rounded-full flex items-center justify-center mx-auto text-moss">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-paper uppercase tracking-tight">Material Inquiry Submitted!</h3>
        <p className="text-sm text-paper-dim max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. A sales engineer and dispatch officer will review your required volume, sizing parameters, and delivery site coordinates, and contact you within 2 business hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="btn btn-blue text-xs uppercase tracking-wider py-3 px-6 cursor-pointer"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-fog mb-2">Full Name *</label>
          <input 
            type="text" 
            required 
            placeholder="e.g. John Doe"
            className="w-full bg-ink border border-line focus:border-blue focus:ring-1 focus:ring-blue/50 text-paper text-sm px-4 py-3.5 outline-none rounded transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-fog mb-2">Company Name *</label>
          <input 
            type="text" 
            required 
            placeholder="e.g. ABC Construction Corp"
            className="w-full bg-ink border border-line focus:border-blue focus:ring-1 focus:ring-blue/50 text-paper text-sm px-4 py-3.5 outline-none rounded transition-all"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-fog mb-2">Contact Email *</label>
          <input 
            type="email" 
            required 
            placeholder="e.g. name@company.com"
            className="w-full bg-ink border border-line focus:border-blue focus:ring-1 focus:ring-blue/50 text-paper text-sm px-4 py-3.5 outline-none rounded transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-fog mb-2">Contact Number *</label>
          <input 
            type="tel" 
            required 
            placeholder="e.g. +91 98765 43210"
            className="w-full bg-ink border border-line focus:border-blue focus:ring-1 focus:ring-blue/50 text-paper text-sm px-4 py-3.5 outline-none rounded transition-all"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-fog mb-2">Inquiry Type *</label>
        <select 
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          required
          className="w-full bg-ink border border-line focus:border-blue focus:ring-1 focus:ring-blue/50 text-paper text-sm px-4 py-3.5 outline-none rounded transition-all"
        >
          <option value="" disabled>Select Inquiry Type...</option>
          <option value="aggregates">Aggregate Supply (6mm to 60mm)</option>
          <option value="msand">M-Sand Supply (Manufactured Sand)</option>
          <option value="gsb">GSB Supply (Granular Sub Base)</option>
          <option value="bulk">Bulk Order Procurement Contract</option>
          <option value="partnership">B2B Partnership / Dealership</option>
          <option value="general">General Corporate Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-fog mb-2">Estimated Tonnage Required</label>
        <input 
          type="text" 
          placeholder="e.g. 5,000 Tonnes"
          className="w-full bg-ink border border-line focus:border-blue focus:ring-1 focus:ring-blue/50 text-paper text-sm px-4 py-3.5 outline-none rounded transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-fog mb-2">Delivery Details &amp; Specifications *</label>
        <textarea 
          required 
          rows={5}
          placeholder="Please list specific aggregate sizes, delivery site coordinates, and timeline targets..."
          className="w-full bg-ink border border-line focus:border-blue focus:ring-1 focus:ring-blue/50 text-paper text-sm px-4 py-3.5 outline-none rounded transition-all resize-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full btn btn-blue justify-center text-sm py-4 uppercase font-extrabold tracking-widest cursor-pointer"
      >
        Submit Material Inquiry
        <span className="material-symbols-outlined text-sm">send</span>
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div>
      {/* Page Header Banner */}
      <section className="page-banner">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/88 to-ink"></div>
        </div>
        <div className="relative z-10 wrap w-full">
          <div className="max-w-3xl border-l-4 border-blue pl-10">
            <span className="text-xs font-bold text-blue uppercase tracking-widest block font-mono mb-3">Connect With Us</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mb-4">Request B2B Quote &amp; Consultation</h1>
            <p className="text-base text-paper-dim">Submit material requirements, grading specs, and logistics dispatch targets.</p>
          </div>
        </div>
      </section>

      {/* Contact Bento Grid */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Form Block */}
            <div className="lg:col-span-8 bg-surface border border-line p-8 lg:p-10 rounded shadow-2xl relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <h2 className="text-2xl font-black text-paper uppercase tracking-tight mb-6">Material Inquiry Form</h2>
              <Suspense fallback={<div className="text-center py-20 text-fog font-mono">Loading inquiry parameters...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contacts Info */}
            <div className="lg:col-span-4 space-y-8">
              {/* Plant Info Card */}
              <div className="bg-surface p-8 rounded border border-line shadow-2xl relative">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <h3 className="font-bold text-lg text-paper mb-6 uppercase tracking-tight">Plant Office</h3>
                <ul className="space-y-5 text-sm text-paper-dim">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue">location_on</span>
                    <span>Uranus Stone Yard Area,<br/>Nongpoh, Ri-Bhoi District,<br/>Meghalaya - 793102</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue">phone</span>
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue">mail</span>
                    <span>hello@uranusstone.in</span>
                  </li>
                </ul>
              </div>

              {/* B2B Contacts Directory */}
              <div className="bg-surface p-8 rounded border border-line shadow-2xl relative">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <h3 className="font-bold text-lg text-paper mb-6 uppercase tracking-tight">B2B Directory</h3>
                <ul className="space-y-4 text-xs font-mono text-paper-dim">
                  <li className="border-b border-line pb-2">
                    <span className="block text-paper font-semibold text-sm font-sans">Sales &amp; Tenders</span>
                    <a href="mailto:sales@uranusstone.in" className="hover:text-blue transition-colors">sales@uranusstone.in</a>
                  </li>
                  <li className="border-b border-line pb-2">
                    <span className="block text-paper font-semibold text-sm font-sans">Quality Assurance Lab</span>
                    <a href="mailto:qa@uranusstone.in" className="hover:text-blue transition-colors">qa@uranusstone.in</a>
                  </li>
                  <li>
                    <span className="block text-paper font-semibold text-sm font-sans">Logistics Dispatch</span>
                    <a href="mailto:dispatch@uranusstone.in" className="hover:text-blue transition-colors">dispatch@uranusstone.in</a>
                  </li>
                </ul>
              </div>
              
              {/* Operations Hours Card */}
              <div className="bg-surface p-8 rounded border border-line shadow-2xl relative">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <h3 className="font-bold text-lg text-paper mb-4 uppercase tracking-tight">Operations Hours</h3>
                <p className="text-sm text-paper-dim leading-relaxed mb-6 block">Our crushing yards and logistics dispatch networks operate 24 hours a day, 6 days a week, ensuring zero-delay bulk aggregate supply.</p>
                <ul className="text-sm text-paper space-y-3 font-semibold font-mono">
                  <li className="flex justify-between border-b border-line pb-2"><span>Mon - Sat:</span> <span>24 Hours Operations</span></li>
                  <li className="flex justify-between text-red-500"><span>Sunday:</span> <span>Maintenance Shutdown</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Embedded Google Map Section */}
          <div className="w-full h-[450px] border border-line rounded overflow-hidden relative shadow-2xl p-2 bg-surface">
            <span className="corner tl"></span>
            <span className="corner br"></span>
            <iframe
              title="Uranus Stone Plant Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114851.9868750849!2d91.80373030386762!3d25.900827299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a52d3a339bd95%3A0xe50682054ff8e7b3!2sNongpoh%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1718919000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              allowFullScreen={false}
              loading="lazy"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
