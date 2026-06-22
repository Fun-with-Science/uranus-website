"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuoteModal } from "./Providers";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useQuoteModal();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <Link href="/" className="brand" aria-label="Uranus Stone Products home">
            <img 
              src="/uranus website assets/Uranus_Logo_Transparent.png" 
              alt="Uranus Logo" 
              className="h-10 w-auto object-contain hover:opacity-90 transition-opacity" 
            />
          </Link>
          
          {/* Desktop Navigation links */}
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          
          <div className="nav-cta">
            <span className="nav-phone mono whitespace-nowrap">+91 00000 00000</span>
            <button 
              onClick={() => openModal()} 
              className="btn btn-blue btn-sm cursor-pointer"
            >
              Request a quote
            </button>
            <button 
              className="burger" 
              id="burger" 
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
 
      {/* Mobile Drawer menu - lists all available page routes */}
      <div className={`mpanel ${isMenuOpen ? "open" : ""}`} id="mpanel">
        <button 
          className="close cursor-pointer" 
          id="mclose" 
          aria-label="Close menu"
          onClick={closeMenu}
        >
          &times;
        </button>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/products" onClick={closeMenu}>Products</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/infrastructure" onClick={closeMenu}>Infrastructure</Link>
        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <button 
          onClick={() => { closeMenu(); openModal(); }} 
          className="btn btn-blue mt-6 w-full text-center py-4 uppercase font-bold tracking-widest cursor-pointer"
        >
          Request a quote
        </button>
      </div>
    </>
  );
}
