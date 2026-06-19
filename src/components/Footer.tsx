import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-16">
      <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-white px-3 py-1.5 rounded shadow-sm inline-flex items-center justify-center">
              <img src="/uranus website assets/Uranus Logo.png" alt="Uranus Logo" className="h-7 w-auto block" />
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Uranus is a premier enterprise-grade mining and aggregate manufacturing corporation, supplying high-precision materials for national infrastructure, highway networks, and mega development projects.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#" aria-label="LinkedIn">
              <span className="material-symbols-outlined text-[20px]">hub</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#" aria-label="Global Operations">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Useful Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-primary transition-colors" href="/about">About Company</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/why-choose-uranus">Why Choose Uranus</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/infrastructure">Infrastructure Plant</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/sustainability">Environmental Protection</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/gallery">Operational Gallery</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Products &amp; Materials</h4>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-primary transition-colors" href="/products">Manufactured Sand (M-Sand)</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/products">Granular Sub Base (GSB)</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/products">Concrete Aggregates (10mm/20mm)</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/products">Heavy Sub-base Aggregates (40mm/60mm)</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/products">High-compactness Stone Dust</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Corporate Contacts</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
              <span>Industrial Park North,<br />Main Crushing Yard, Zone 4</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">phone_in_talk</span>
              <span>T: +1 (800) URANUS-01</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span>E: sales@uranusinfra.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>&copy; {new Date().getFullYear()} URANUS Infrastructure &amp; Heavy Materials. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
