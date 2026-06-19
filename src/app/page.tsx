import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "URANUS | Building Modern Infrastructure",
  description: "Premium aggregate, M-Sand, and GSB manufacturing powering regional and national highway infrastructure projects.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "URANUS | Building Modern Infrastructure",
    "description": "Premium aggregate, M-Sand, and GSB manufacturing powering regional and national highway infrastructure projects.",
    "publisher": {
      "@type": "Organization",
      "name": "URANUS Infrastructure & Heavy Materials",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uranus.codewithtechnyks.com/uranus%20website%20assets/Uranus%20Logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center scale-105" 
            style={{ backgroundImage: `url('/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg')` }}
          />
          <div className="absolute inset-0 industrial-overlay"></div>
        </div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              Enterprise Grade Infrastructure Materials
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Building the Foundation of Modern Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light">
              Manufacturers and suppliers of premium aggregates, Manufactured Sand (M-Sand), GSB, and construction materials powering regional and national highway developments.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="bg-primary hover:bg-blue-700 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider rounded transition-all shadow-lg hover:-translate-y-0.5">
                Request Quote
              </Link>
              <Link href="/products" className="border border-white/40 hover:border-white text-white hover:bg-white/10 px-8 py-4 font-bold text-sm uppercase tracking-wider rounded transition-all">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats & Badges Bar */}
      <section className="bg-light border-b border-gray-200 py-8 px-margin-desktop max-w-container-max mx-auto relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 border-r border-gray-200 last:border-0 pr-4">
            <span className="material-symbols-outlined text-primary text-4xl">verified</span>
            <div>
              <h3 className="text-xl font-bold text-dark">8 Categories</h3>
              <p className="text-xs text-gray-500 uppercase font-semibold">Industrial Grade Materials</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-r border-gray-200 last:border-0 pr-4">
            <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
            <div>
              <h3 className="text-xl font-bold text-dark">5M Tons</h3>
              <p className="text-xs text-gray-500 uppercase font-semibold">Annual Production Capacity</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-r border-gray-200 last:border-0 pr-4">
            <span className="material-symbols-outlined text-primary text-4xl">local_shipping</span>
            <div>
              <h3 className="text-xl font-bold text-dark">100+ Fleet</h3>
              <p className="text-xs text-gray-500 uppercase font-semibold">Reliable Bulk Supply Chain</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-accent text-4xl">park</span>
            <div>
              <h3 className="text-xl font-bold text-dark">100% Eco-Safe</h3>
              <p className="text-xs text-gray-500 uppercase font-semibold">Sustainable Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">Enterprise Materials Partner</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark edge-bar pl-6">
              Decades of Reliability and Engineering Excellence
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              URANUS stands as a titan in the infrastructure materials sector, specializing in the extraction and processing of high-grade aggregates. Our operations are defined by sheer scale, NABL-accredited laboratory testing, and a relentless commitment to sustainability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-semibold text-sm text-dark">Proprietary VSI M-Sand Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-semibold text-sm text-dark">Fully Integrated Logistics Network</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-semibold text-sm text-dark">NABL Accredited Testing Lab</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-semibold text-sm text-dark">ISO 9001 Quality Standards</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/uranus website assets/pexels-jetkerim-16567021.jpg.jpeg" alt="URANUS Mining Quarry Site" className="w-full aspect-[4/3] object-cover rounded shadow-lg" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded shadow-xl hidden md:block">
              <h3 className="font-bold text-lg">ISO 9001:2015</h3>
              <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Certified Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-light">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">Sectors We Supply</span>
            <h2 className="text-3xl font-extrabold text-dark">Industries We Serve</h2>
            <p className="text-gray-600 text-sm">Providing heavy-duty, graded materials to power key construction and developmental projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 p-8 rounded shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">road</span>
              <h3 className="font-bold text-lg text-dark mb-2">Road & Highway Projects</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Providing high-grade GSB, 40mm/60mm sub-base aggregates, and concrete aggregates for national highway networks.</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">apartment</span>
              <h3 className="font-bold text-lg text-dark mb-2">Commercial Construction</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Graded aggregates (10mm/20mm) and premium VSI M-Sand engineered for high-rise commercial structures.</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">home</span>
              <h3 className="font-bold text-lg text-dark mb-2">Residential Housing</h3>
              <p className="text-xs text-gray-500 leading-relaxed">High-durability materials optimized for residential buildings, foundation mixes, and masonry plasters.</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">foundation</span>
              <h3 className="font-bold text-lg text-dark mb-2">Infrastructure & Public Works</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Supplying massive volumes for structural bridge piers, drainage ballast, water structures, and government works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Material Catalog</span>
          <h2 className="text-3xl font-extrabold text-dark">Industrial Grade Materials</h2>
          <p className="text-gray-600 text-sm">Precisely crushed, graded, and tested aggregates meeting strict structural engineering compliance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="bg-white border border-gray-200 rounded overflow-hidden group hover:border-primary transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img src="/uranus website assets/3.png" alt="10mm Aggregate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg text-dark">10mm Aggregate</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Precision-graded concrete aggregate optimized for structural slabs, RCC designs, and detailed finishes.</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link href="/products" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Technical Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Product 2 */}
          <div className="bg-white border border-gray-200 rounded overflow-hidden group hover:border-primary transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img src="/uranus website assets/wbs.png" alt="20mm Aggregate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg text-dark">20mm Aggregate</h3>
                <p className="text-xs text-gray-500 leading-relaxed">The industry standard aggregate for all structural concrete, foundations, columns, and commercial buildings.</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link href="/products" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Technical Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Product 3 */}
          <div className="bg-white border border-gray-200 rounded overflow-hidden group hover:border-primary transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img src="/uranus website assets/wbs.png" alt="Manufactured Sand (M-Sand)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg text-dark">Manufactured Sand (M-Sand)</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Engineered using VSI impact technology. High durability and strength, ideal eco-friendly replacement for river sand.</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link href="/products" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Technical Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Product 4 */}
          <div className="bg-white border border-gray-200 rounded overflow-hidden group hover:border-primary transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img src="/uranus website assets/duhb.png" alt="Granular Sub Base (GSB)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg text-dark">GSB (Granular Sub Base)</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Specifically processed soil-rock mixture meeting NHAI specs, optimized for stability in sub-base layers.</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link href="/products" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Technical Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center pt-12">
          <Link href="/products" className="inline-flex items-center gap-2 bg-dark hover:bg-slate-800 text-white px-8 py-4 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md">
            View All 8 Product Specifications
            <span className="material-symbols-outlined">menu_book</span>
          </Link>
        </div>
      </section>

      {/* Timeline/Process */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">Operational Workflow</span>
            <h2 className="text-3xl font-extrabold">From Quarry to Project Delivery</h2>
            <p className="text-gray-400 text-sm">A highly coordinated, quality-controlled sequence ensuring premium aggregate supply.</p>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {/* Step 1 */}
            <div className="space-y-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto md:mx-0 shadow-lg text-white font-bold text-lg">1</div>
              <h3 className="font-bold text-lg">Mining</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Controlled blasting and eco-safe raw granite extraction from our licensed quarries.</p>
            </div>
            {/* Step 2 */}
            <div className="space-y-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto md:mx-0 shadow-lg text-white font-bold text-lg">2</div>
              <h3 className="font-bold text-lg">Crushing</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Multi-stage crushing using premium Metso & Sandvik VSI machinery for shape optimization.</p>
            </div>
            {/* Step 3 */}
            <div className="space-y-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto md:mx-0 shadow-lg text-white font-bold text-lg">3</div>
              <h3 className="font-bold text-lg">Screening</h3>
              <p className="text-xs text-gray-400 leading-relaxed">High-frequency industrial screens categorize the stones into precise sizes (6mm to 60mm).</p>
            </div>
            {/* Step 4 */}
            <div className="space-y-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto md:mx-0 shadow-lg text-white font-bold text-lg">4</div>
              <h3 className="font-bold text-lg">Quality Testing</h3>
              <p className="text-xs text-gray-400 leading-relaxed">12-point mechanical and physical properties testing conducted in our accredited laboratory.</p>
            </div>
            {/* Step 5 */}
            <div className="space-y-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto md:mx-0 shadow-lg text-white font-bold text-lg">5</div>
              <h3 className="font-bold text-lg">Stocking</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Materials are stocked in covered zones, preventing environmental degradation or moisture accumulation.</p>
            </div>
            {/* Step 6 */}
            <div className="space-y-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto md:mx-0 shadow-lg text-white font-bold text-lg">6</div>
              <h3 className="font-bold text-lg">Dispatch</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Our fleet of dumper carriers dispatches aggregates 24/7 with active GPS tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Infrastructure Showcase */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">Heavy Infrastructure</span>
            <h2 className="text-3xl font-extrabold text-dark edge-bar pl-6">Operations & Processing Infrastructure</h2>
          </div>
          <Link href="/infrastructure" className="border border-dark hover:bg-dark hover:text-white px-6 py-3 font-semibold text-xs uppercase tracking-wider rounded transition-all">
            Learn More About Our Plant
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          <div className="md:col-span-2 relative rounded overflow-hidden group shadow-md aspect-video md:aspect-auto">
            <img src="/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg" alt="URANUS Crusher Plant Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity p-8 flex flex-col justify-end text-white">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Processing Plant</span>
              <h3 className="text-2xl font-bold">VSI and Cone Crusher Systems</h3>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-1/2 relative rounded overflow-hidden group shadow-md min-h-[180px]">
              <img src="/uranus website assets/10.png" alt="Quarry Extraction Equipment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80 p-6 flex flex-col justify-end text-white">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block">Mining Areas</span>
                <h4 className="text-lg font-bold">Excavation & Loading</h4>
              </div>
            </div>
            <div className="h-1/2 relative rounded overflow-hidden group shadow-md min-h-[180px]">
              <img src="/uranus website assets/duhb.png" alt="Logistics Fleet & Trucks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80 p-6 flex flex-col justify-end text-white">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block">Logistics & Supply</span>
                <h4 className="text-lg font-bold">Heavy Carrier Dispatch Fleet</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability section */}
      <section className="bg-dark text-white py-24 relative overflow-hidden">
        <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block">Responsible Mining</span>
            <h2 className="text-3xl md:text-4xl font-extrabold">Engineering a Sustainable Future</h2>
            <p className="text-gray-400 text-base leading-relaxed">
              We believe in industrial growth that respects the environment. Our comprehensive green belt development and eco-safe aggregate production practices set industry standards in environmental protection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-accent text-3xl">park</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Afforestation Drive</h4>
                  <p className="text-xs text-gray-500">10,000+ native trees planted around quarry sites.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-accent text-3xl">water_drop</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Water Conservation</h4>
                  <p className="text-xs text-gray-500">100% recycling of wash water and zero liquid discharge.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/sustainability" className="inline-flex items-center gap-2 bg-accent hover:bg-green-700 text-white px-6 py-3 font-semibold text-xs uppercase tracking-wider rounded transition-all">
                View Environmental Initiatives
                <span className="material-symbols-outlined text-xs">nature_people</span>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img src="/uranus website assets/8.png" alt="Uranus Green Plantation Site" className="w-full aspect-square max-w-[320px] object-cover rounded-full border-8 border-gray-800 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Executive Board</span>
          <h2 className="text-3xl font-extrabold text-dark">Leadership Team</h2>
          <p className="text-gray-600 text-sm">The experienced strategists steering Uranus towards global excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Director 1 */}
          <div className="bg-light border border-gray-200 rounded overflow-hidden text-center p-8 group hover:border-primary transition-colors">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md relative bg-gray-100">
              <img src="/uranus website assets/Ankit Mittal - Corporate photo.jpeg" alt="Ankit Mittal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-lg text-dark">Ankit Mittal</h3>
            <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Managing Director</p>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">Steering the company's core technology deployment and regional enterprise expansion plans.</p>
          </div>
          {/* Director 2 */}
          <div className="bg-light border border-gray-200 rounded overflow-hidden text-center p-8 group hover:border-primary transition-colors">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md relative bg-dark flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,95,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,95,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
              <svg className="w-2/3 h-2/3 text-slate-500 z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="font-bold text-lg text-dark">Conformi Mukhim</h3>
            <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Director</p>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">Directing automated crushing plants, mining yields, and quarry production compliance.</p>
          </div>
          {/* Director 3 */}
          <div className="bg-light border border-gray-200 rounded overflow-hidden text-center p-8 group hover:border-primary transition-colors">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md relative bg-dark flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,95,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,95,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
              <svg className="w-2/3 h-2/3 text-slate-500 z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="font-bold text-lg text-dark">Shweta Mittal</h3>
            <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Director</p>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">Managing corporate financial compliance, B2B procurement tenders, and long-term contracts.</p>
          </div>
        </div>
      </section>

      {/* Home Page CTA */}
      <section className="bg-light border-t border-gray-200 py-16">
        <div className="px-margin-desktop max-w-container-max mx-auto text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-dark">Ready to partner with Uranus?</h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">Get custom material quotes, test certificate copies, and delivery logistics details for your road or structural project.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-primary hover:bg-blue-700 text-white px-8 py-4 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
