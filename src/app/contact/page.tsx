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
      <div className="bg-moss/10 border border-moss/20 p-10 rounded-xl text-center space-y-4 relative">
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
          className="btn btn-blue text-sm py-3 px-6 cursor-pointer rounded-lg"
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
          <label className="block text-sm font-medium text-paper-dim mb-2">Full Name *</label>
          <input 
            type="text" 
            required 
            placeholder="e.g. John Doe"
            className="w-full bg-ink/40 border border-line focus:border-blue focus:ring-4 focus:ring-blue/15 text-paper text-sm px-4 py-3.5 outline-none rounded-lg transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-paper-dim mb-2">Company Name *</label>
          <input 
            type="text" 
            required 
            placeholder="e.g. ABC Construction Corp"
            className="w-full bg-ink/40 border border-line focus:border-blue focus:ring-4 focus:ring-blue/15 text-paper text-sm px-4 py-3.5 outline-none rounded-lg transition-all"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-paper-dim mb-2">Contact Email *</label>
          <input 
            type="email" 
            required 
            placeholder="e.g. name@company.com"
            className="w-full bg-ink/40 border border-line focus:border-blue focus:ring-4 focus:ring-blue/15 text-paper text-sm px-4 py-3.5 outline-none rounded-lg transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-paper-dim mb-2">Contact Number *</label>
          <input 
            type="tel" 
            required 
            placeholder="e.g. +91 98765 43210"
            className="w-full bg-ink/40 border border-line focus:border-blue focus:ring-4 focus:ring-blue/15 text-paper text-sm px-4 py-3.5 outline-none rounded-lg transition-all"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-paper-dim mb-2">Inquiry Type *</label>
        <select 
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          required
          className="w-full bg-ink/40 border border-line focus:border-blue focus:ring-4 focus:ring-blue/15 text-paper text-sm px-4 py-3.5 outline-none rounded-lg transition-all appearance-none cursor-pointer"
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
        <label className="block text-sm font-medium text-paper-dim mb-2">Estimated Tonnage Required</label>
        <input 
          type="text" 
          placeholder="e.g. 5,000 Tonnes"
          className="w-full bg-ink/40 border border-line focus:border-blue focus:ring-4 focus:ring-blue/15 text-paper text-sm px-4 py-3.5 outline-none rounded-lg transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-paper-dim mb-2">Delivery Details &amp; Specifications *</label>
        <textarea 
          required 
          rows={5}
          placeholder="Please list specific aggregate sizes, delivery site coordinates, and timeline targets..."
          className="w-full bg-ink/40 border border-line focus:border-blue focus:ring-4 focus:ring-blue/15 text-paper text-sm px-4 py-3.5 outline-none rounded-lg transition-all resize-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full btn btn-blue justify-center text-sm py-4 uppercase font-extrabold tracking-widest cursor-pointer rounded-lg hover:shadow-[0_0_20px_rgba(62,130,247,0.25)] transition-all"
      >
        Submit Material Inquiry
        <span className="material-symbols-outlined text-sm ml-2">send</span>
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
            <div className="lg:col-span-8 bg-surface-2/30 border border-line p-8 lg:p-10 rounded-xl shadow-2xl relative">
              <h2 className="text-2xl font-bold text-paper mb-6">Material Inquiry Form</h2>
              <Suspense fallback={<div className="text-center py-20 text-fog font-mono">Loading inquiry parameters...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contacts Info */}
            <div className="lg:col-span-4 space-y-8">
              {/* Plant Info Card */}
              <div className="bg-surface-2/30 p-8 rounded-xl border border-line shadow-2xl relative">
                <h3 className="font-bold text-lg text-paper mb-6 uppercase tracking-tight">Plant Office</h3>
                <ul className="space-y-6 text-sm text-paper-dim">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-blue mt-0.5">location_on</span>
                    <div>
                      <span className="block font-semibold text-paper mb-1">Site Address</span>
                      <span>Uranus Stone Yard Area,<br/>Nongpoh, Ri-Bhoi District,<br/>Meghalaya - 793102</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-blue mt-0.5">phone</span>
                    <div>
                      <span className="block font-semibold text-paper mb-1">Phone Line</span>
                      <span>+91 98765 43210</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-blue mt-0.5">mail</span>
                    <div>
                      <span className="block font-semibold text-paper mb-1">Email Inbox</span>
                      <span>hello@uranusstone.in</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* B2B Contacts Directory */}
              <div className="bg-surface-2/30 p-8 rounded-xl border border-line shadow-2xl relative">
                <h3 className="font-bold text-lg text-paper mb-6 uppercase tracking-tight">B2B Directory</h3>
                <div className="space-y-5 text-sm text-paper-dim">
                  <div className="flex justify-between items-center border-b border-line pb-3">
                    <div>
                      <span className="block font-semibold text-paper mb-0.5">Sales &amp; Tenders</span>
                      <span className="text-xs text-fog">For bulk corporate contracts</span>
                    </div>
                    <a href="mailto:sales@uranusstone.in" className="text-blue font-mono hover:underline">sales@uranusstone.in</a>
                  </div>
                  <div className="flex justify-between items-center border-b border-line pb-3">
                    <div>
                      <span className="block font-semibold text-paper mb-0.5">Quality Assurance Lab</span>
                      <span className="text-xs text-fog">For testing &amp; grading certificates</span>
                    </div>
                    <a href="mailto:qa@uranusstone.in" className="text-blue font-mono hover:underline">qa@uranusstone.in</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block font-semibold text-paper mb-0.5">Logistics Dispatch</span>
                      <span className="text-xs text-fog">For dumper truck tracking</span>
                    </div>
                    <a href="mailto:dispatch@uranusstone.in" className="text-blue font-mono hover:underline">dispatch@uranusstone.in</a>
                  </div>
                </div>
              </div>
              
              {/* Operations Hours Card */}
              <div className="bg-surface-2/30 p-8 rounded-xl border border-line shadow-2xl relative">
                <h3 className="font-bold text-lg text-paper mb-4 uppercase tracking-tight">Operations Hours</h3>
                <p className="text-sm text-paper-dim leading-relaxed mb-6 block">Our crushing yards and logistics dispatch networks operate 24 hours a day, 6 days a week, ensuring zero-delay bulk aggregate supply.</p>
                <ul className="text-sm text-paper-dim space-y-4 font-mono">
                  <li className="flex justify-between border-b border-line pb-2">
                    <span className="font-sans text-paper">Mon - Sat:</span>
                    <span className="font-bold text-blue">24 Hours Operations</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-sans text-paper">Sunday:</span>
                    <span className="font-bold text-red-500">Maintenance Shutdown</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Embedded Google Map Section */}
          <div className="w-full h-[450px] border border-line rounded-xl overflow-hidden relative shadow-2xl p-2 bg-surface">
            <iframe
              title="Uranus Stone Plant Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114851.9868750849!2d91.80373030386762!3d25.900827299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a52d3a339bd95%3A0xe50682054ff8e7b3!2sNongpoh%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1718919000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              allowFullScreen={false}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
