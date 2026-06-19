"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const pages = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About Us" },
    { href: "/products", name: "Products" },
    { href: "/why-choose-uranus", name: "Why Uranus" },
    { href: "/infrastructure", name: "Infrastructure" },
    { href: "/sustainability", name: "Sustainability" },
    { href: "/gallery", name: "Gallery" },
    { href: "/blog", name: "Blog & Resources" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-20 shadow-sm">
      <nav className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        <Link href="/" className="flex items-center">
          <img src="/uranus website assets/Uranus Logo.png" alt="Uranus Logo" className="h-10 w-auto hover:opacity-90 transition-opacity" />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`font-semibold text-xs uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {page.name}
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/contact" className="bg-primary hover:bg-blue-700 text-white px-6 py-3 font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-md">
            Request Quote
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-dark focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg p-6 flex flex-col gap-4 z-50">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                onClick={() => setIsOpen(false)}
                href={page.href}
                className={`block py-2.5 px-4 rounded transition duration-200 text-sm ${
                  isActive
                    ? "text-primary font-bold bg-gray-50"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {page.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
