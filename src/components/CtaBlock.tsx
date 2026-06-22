"use client";

import React from "react";
import { useQuoteModal } from "./Providers";

export default function CtaBlock() {
  const { openModal } = useQuoteModal();

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent("Uranus Stone Products Limited - Corporate Profile\n\nAggregate grades: 6mm, 10mm, 20mm, 40mm, 60mm.\nInstalled capacity: 500+ Tonnes/Day.\nQuarry & Crushing Plant: Ri-Bhoi, Meghalaya.\nContact: hello@uranusstone.in");
    link.download = "Uranus_Stone_Corporate_Profile.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section cta">
      <div 
        className="cta-bg" 
        style={{ backgroundImage: "url('/uranus website assets/duhb.png')" }}
      />
      <div className="cta-veil"></div>
      <div className="wrap">
        <div className="cta-inner">
          <h2>Have a project? Let's talk <span className="a text-blue">grades, volumes &amp; delivery.</span></h2>
          <p className="text-paper-dim">Send us your specification and quantity. We'll come back with availability and a quote — usually within a day.</p>
          <div className="cta-actions">
            <button 
              onClick={() => openModal()} 
              className="btn btn-blue cursor-pointer"
            >
              Request a quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <a 
              href="https://wa.me/910000000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-wa"
            >
              WhatsApp us
            </a>
            <button 
              onClick={handleDownload} 
              className="btn btn-ghost cursor-pointer"
            >
              Download company profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
