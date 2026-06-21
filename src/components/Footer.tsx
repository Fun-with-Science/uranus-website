"use client";

import React from "react";
import Link from "next/link";
import { useQuoteModal } from "./Providers";

export default function Footer() {
  const { openModal } = useQuoteModal();

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <img 
              src="/uranus website assets/Uranus Logo.png" 
              alt="Uranus Logo" 
              className="h-7 w-auto object-contain mb-4" 
            />
            <p className="tag">
              Calibrated aggregate, manufactured sand &amp; base material — graded to the millimetre, supplied by the tonne.
            </p>
          </div>
          
          <div>
            <h4>Products</h4>
            <ul>
              <li><Link href="/products">6 / 10 / 20 mm Aggregate</Link></li>
              <li><Link href="/products">40 / 60 mm Aggregate</Link></li>
              <li><Link href="/products">Manufactured Sand (M-Sand)</Link></li>
              <li><Link href="/products">GSB &amp; Stone Dust</Link></li>
            </ul>
          </div>
          
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/#process">Our process</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li>
                <button 
                  onClick={() => openModal()} 
                  className="text-left text-paper-dim hover:text-amber transition-colors bg-none border-none p-0 cursor-pointer"
                >
                  Request quote
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4>Plant &amp; Office</h4>
            <ul className="mb-4">
              <li>Uranus Stone Yard, Nongpoh, Ri-Bhoi District, Meghalaya - 793102</li>
              <li>Phone: +91 00000 00000</li>
              <li>Email: hello@uranusstone.in</li>
              <li>GSTIN: 17AAACO1234A1Z9</li>
            </ul>
            <div className="mapbox overflow-hidden rounded">
              <iframe
                title="Uranus Stone Plant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114851.9868750849!2d91.80373030386762!3d25.900827299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a52d3a339bd95%3A0xe50682054ff8e7b3!2sNongpoh%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1718919000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Uranus Stone Products Limited. All rights reserved.</span>
          <span>Directors: Ankit Mittal · Conformi Mukhim · Shweta Mittal</span>
        </div>
      </div>
    </footer>
  );
}
