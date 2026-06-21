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
            <svg className="mark" width="30" height="34" viewBox="0 0 30 34" fill="none" aria-hidden="true">
              <path d="M15 1 L29 9 L15 17 L1 9 Z" fill="#E8931A"/>
              <path d="M4 14 L15 20 L26 14" stroke="#E8931A" stroke-width="2" opacity=".7" fill="none"/>
              <path d="M7 19 L15 23.6 L23 19" stroke="#E8931A" stroke-width="2" opacity=".45" fill="none"/>
            </svg>
            <span className="name">URANUS<span>STONE PRODUCTS LTD</span></span>
          </Link>
          
          {/* Desktop Navigation links - kept to the 5 primary ones to prevent navbar compression */}
          <div className="nav-links">
            <Link href="/products">Products</Link>
            <Link href={isHome ? "#process" : "/#process"}>Process</Link>
            <Link href="/sustainability">Sustainability</Link>
            <Link href="/about">Company</Link>
            <Link href="/contact">Contact</Link>
          </div>
          
          <div className="nav-cta">
            <span className="nav-phone mono whitespace-nowrap">+91 00000 00000</span>
            <button 
              onClick={() => openModal()} 
              className="btn btn-amber btn-sm cursor-pointer"
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
        <Link href="/products" onClick={closeMenu}>Products</Link>
        <Link href={isHome ? "#process" : "/#process"} onClick={closeMenu}>Process</Link>
        <Link href="/sustainability" onClick={closeMenu}>Sustainability</Link>
        <Link href="/about" onClick={closeMenu}>Company</Link>
        <Link href="/infrastructure" onClick={closeMenu}>Infrastructure</Link>
        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <button 
          onClick={() => { closeMenu(); openModal(); }} 
          className="btn btn-amber mt-6 w-full text-center py-4 uppercase font-bold tracking-widest cursor-pointer"
        >
          Request a quote
        </button>
      </div>
    </>
  );
}
