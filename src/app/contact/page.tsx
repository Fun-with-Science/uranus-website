"use client";

import { Suspense, useState, useEffect } from "react";
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
      <div className="bg-primary/5 border border-primary/20 p-10 rounded text-center space-y-4">
        <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
        <h3 className="text-2xl font-bold text-dark">Material Inquiry Submitted!</h3>
        <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. A sales engineer and dispatch officer will review your tonnage requirements, grading specs, and delivery coordinates. We will contact you within 2 business hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer"
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
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
          <input type="text" className="w-full rounded border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary text-sm p-3 border" placeholder="e.g. John Doe" required />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Company Name</label>
          <input type="text" className="w-full rounded border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary text-sm p-3 border" placeholder="e.g. ABC Construction Corp" required />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Contact Email</label>
          <input type="email" className="w-full rounded border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary text-sm p-3 border" placeholder="e.g. john@abc.com" required />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Contact Number</label>
          <input type="tel" className="w-full rounded border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary text-sm p-3 border" placeholder="e.g. +1 (555) 000-0000" required />
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Inquiry Type (Lead Qualification)</label>
        <select 
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          className="w-full rounded border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary text-sm p-3 border bg-white" 
          required
        >
          <option value="" disabled>Select Inquiry Type...</option>
          <option value="aggregates">Aggregate Supply (10mm, 20mm, 40mm, 60mm)</option>
          <option value="msand">M-Sand Supply (Manufactured Sand)</option>
          <option value="gsb">GSB Supply (Granular Sub Base)</option>
          <option value="bulk">Bulk Order Procurement Contract</option>
          <option value="partnership">B2B Partnership / Dealership</option>
          <option value="general">General Corporate Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Estimated Tonnage Required</label>
        <input type="text" className="w-full rounded border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary text-sm p-3 border" placeholder="e.g. 5,000 Tons" />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Delivery Details &amp; Specifications</label>
        <textarea rows={5} className="w-full rounded border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary text-sm p-3 border" placeholder="Please list specific aggregate sizes, delivery site coordinates, and timeline targets..." required></textarea>
      </div>

      <button type="submit" className="bg-primary hover:bg-blue-700 text-white w-full py-4 font-bold text-sm uppercase tracking-wider rounded transition-all shadow-md cursor-pointer">
        Submit Material Inquiry
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-dark">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url('/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg')` }}
          />
          <div className="absolute inset-0 bg-dark/85"></div>
        </div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-3xl border-l-4 border-primary pl-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Connect With Us</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Request B2B Quote &amp; Consultation</h1>
            <p className="text-sm text-gray-300 mt-2">Submit material requirements and logistics dispatch targets.</p>
          </div>
        </div>
      </section>

      {/* Contact Bento Grid */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Block */}
          <div className="lg:col-span-8 bg-white border border-gray-200 p-10 rounded shadow-sm">
            <h2 className="text-2xl font-bold text-dark mb-6">Material Inquiry Form</h2>
            <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading inquiry parameters...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Contacts Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-light p-8 rounded border border-gray-200">
              <h3 className="font-bold text-lg text-dark mb-6">Corporate Office</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span>URANUS Main Crushing Yard Area,<br/>Industrial Park North, Zone 4,<br/>Bengaluru, KA, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">phone</span>
                  <span>T: +1 (800) URANUS-01</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span>E: sales@uranusinfra.com</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-light p-8 rounded border border-gray-200">
              <h3 className="font-bold text-lg text-dark mb-4">Operations Hours</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-2">Our crushing yards and logistics dispatch networks operate 24 hours a day, 6 days a week, ensuring zero-delay bulk aggregate supply.</p>
              <ul className="text-xs text-gray-600 space-y-2 font-semibold">
                <li className="flex justify-between"><span>Mon - Sat:</span> <span>24 Hours Operations</span></li>
                <li className="flex justify-between text-red-500"><span>Sunday:</span> <span>Maintenance Shutdown</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
