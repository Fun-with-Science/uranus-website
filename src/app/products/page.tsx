"use client";

import React, { useState } from "react";
import { useQuoteModal } from "@/components/Providers";

interface Material {
  name: string;
  tag: string;
  tagColor: string;
  image: string;
  description: string;
  apps: string[];
  slug: string;
  specs: {
    gradation: string;
    flakiness: string;
    absorption: string;
    crushing: string;
  };
}

export default function ProductsPage() {
  const { openModal } = useQuoteModal();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDownload = (productName: string) => {
    const fileContent = `URANUS STONE PRODUCTS LIMITED - TECHNICAL DATASHEET\n\n` +
      `Product: ${productName}\n` +
      `Crushing Zone: Metso VSI multi-stage processing\n` +
      `Compliance: IS 383:2016 Gradation curves zone limits compliant\n` +
      `Testing Parameters:\n` +
      `- Flakiness Index: < 14%\n` +
      `- Elongation Index: < 15%\n` +
      `- Crushing Value: < 16%\n` +
      `- Impact Value: < 12%\n` +
      `- Water Absorption: < 0.5%\n\n` +
      `For structural test certificates and bulk order pricing, contact: sales@uranusstone.in`;

    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent);
    link.download = `Uranus_Specs_${productName.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const materials: Material[] = [
    {
      name: "10mm Aggregate",
      tag: "RCC Structures",
      tagColor: "bg-blue/10 text-blue border border-blue/20",
      image: "/uranus website assets/3.png",
      description: "Specifically processed basalt aggregates sorted using precision screening grids. Conforms strictly to mechanical strength targets for RCC columns and structural slabs.",
      apps: ["RCC Columns", "Detailed Concrete Slabs", "Precast Block casting"],
      slug: "10mm",
      specs: {
        gradation: "IS 383:2016 Compliant",
        flakiness: "< 14%",
        absorption: "< 0.5%",
        crushing: "< 16%"
      }
    },
    {
      name: "20mm Aggregate",
      tag: "Heavy Foundations",
      tagColor: "bg-blue/10 text-blue border border-blue/20",
      image: "/uranus website assets/wbs.png",
      description: "Our premier concrete aggregate, featuring exceptional cubic particles for optimum binder packing. Reduces cement voids, ensuring strong skyscrapers and bridge structures.",
      apps: ["High-rise Buildings", "Bridge Girders", "Heavy Foundations"],
      slug: "20mm",
      specs: {
        gradation: "IS 383:2016 Compliant",
        flakiness: "< 12%",
        absorption: "< 0.5%",
        crushing: "< 15%"
      }
    },
    {
      name: "Manufactured Sand (M-Sand)",
      tag: "Eco Friendly Plaster",
      tagColor: "bg-moss/10 text-moss border border-moss/20",
      image: "/uranus website assets/wbs.png",
      description: "High-quality manufactured sand, crushed and washed with zero organic or silt impurities. Perfect grading makes it the ultimate eco-friendly choice for masonry plasters.",
      apps: ["Masonry Mortar", "Wall Plastering", "Concrete Mixes"],
      slug: "msand",
      specs: {
        gradation: "IS 383 Zone II",
        flakiness: "N/A",
        absorption: "< 0.8%",
        crushing: "N/A"
      }
    },
    {
      name: "Granular Sub Base (GSB)",
      tag: "Highway Base Layer",
      tagColor: "bg-blue/10 text-blue border border-blue/20",
      image: "/uranus website assets/duhb.png",
      description: "MORTH specification compliant Granular Sub Base. Ideal for highway base stabilization, drainage subgrades, and heavy road pavement layers.",
      apps: ["Highway Subgrades", "Base Stabilization", "Structural Fill"],
      slug: "gsb",
      specs: {
        gradation: "MORTH Section 400",
        flakiness: "< 18%",
        absorption: "< 1.2%",
        crushing: "< 24%"
      }
    }
  ];

  const tableRows = [
    { name: "6mm Aggregate", size: "6mm (Fine aggregate)", app: "Pipe bedding, pre-cast blocks, surface plastering finishes.", std: "IS 383:2016 Compliant" },
    { name: "10mm Aggregate", size: "10mm", app: "RCC structural designs, concrete mixes, residential slabs, casting columns.", std: "IS 383:2016 Compliant" },
    { name: "20mm Aggregate", size: "20mm", app: "Skyscrapers, industrial foundations, heavy pillars, high-strength concrete mixes.", std: "IS 383:2016 Compliant" },
    { name: "40mm Aggregate", size: "40mm", app: "Sub-base road construction, drainage filtration grids, concrete foundations.", std: "IS 383:2016 Compliant" },
    { name: "60mm Aggregate", size: "60mm", app: "Heavy railway ballast, road subgrades, sub-base drainage protection layers.", std: "NHAI Specifications" },
    { name: "Manufactured Sand (M-Sand)", size: "Fine (<4.75mm)", app: "Concrete structures, structural brick masonry plastering, eco-friendly filler.", std: "IS 383 Zone II" },
    { name: "GSB (Granular Sub Base)", size: "Mixed Graded", app: "Highway subgrade stabilization, load-bearing road pavements.", std: "MORTH Section 400" },
    { name: "Stone Dust", size: "Powder (<2.36mm)", app: "Tile jointing, road base binder filler, concrete blocks manufacture.", std: "IS 383 Compliant" }
  ];

  const filteredRows = tableRows.filter(row => 
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    row.app.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.std.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <span className="text-xs font-bold text-blue uppercase tracking-widest block font-mono mb-3">Material Catalog</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mb-4">Calibrated Materials Catalog</h1>
            <p className="text-base text-paper-dim">Graded aggregates, manufactured sand, and base layers conforming to national standards.</p>
          </div>
        </div>
      </section>

      {/* Specifications Table Section */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-8">
              <span className="eyebrow mb-3 block">Specifications</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-paper mb-4">Material Gradation &amp; Sizing Matrix</h2>
              <p className="text-paper-dim text-base">Review size parameters, structural targets, and primary applications for our core materials catalog.</p>
            </div>
            <div className="lg:col-span-4 w-full">
              <div className="relative flex items-center bg-surface border border-line rounded px-4 py-3 focus-within:border-blue transition-colors shadow-inner">
                <span className="material-symbols-outlined text-fog mr-3">search</span>
                <input 
                  type="text" 
                  placeholder="Filter materials or applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-paper text-sm outline-none"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm("")} className="text-fog hover:text-paper font-mono text-xs">Clear</button>
                )}
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto border border-line rounded shadow-2xl bg-surface relative">
            <span className="corner tl"></span>
            <span className="corner br"></span>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-2 text-paper text-sm uppercase tracking-wider border-b border-line">
                  <th className="py-5 px-6 font-bold">Product</th>
                  <th className="py-5 px-6 font-bold">Size Range</th>
                  <th className="py-5 px-6 font-bold">Primary Application</th>
                  <th className="py-5 px-6 font-bold">Technical Standards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-sm text-paper-dim">
                {filteredRows.length > 0 ? (
                  filteredRows.map((row) => (
                    <tr key={row.name} className="hover:bg-surface-2/40 transition-colors">
                      <td className="py-5 px-6 font-bold text-paper">{row.name}</td>
                      <td className="py-5 px-6 text-paper-dim">{row.size}</td>
                      <td className="py-5 px-6 leading-relaxed">{row.app}</td>
                      <td className="py-5 px-6 text-blue font-semibold font-mono">{row.std}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-fog font-mono">No matching products found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-24 bg-surface border-y border-line w-full">
        <div className="wrap">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 block">Data Sheets</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-paper">Detailed Product Profiles</h2>
            <p className="text-paper-dim text-base">Select calibrated materials with precise laboratory-tested values.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {materials.map((mat) => (
              <div key={mat.name} className="bg-surface-2 border border-line rounded shadow-2xl overflow-hidden relative group p-1 lg:p-2">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8">
                  
                  {/* Left Column: Image Frame */}
                  <div className="lg:col-span-5 relative overflow-hidden rounded border border-line p-2 bg-surface">
                    <img src={mat.image} alt={mat.name} className="w-full h-full min-h-[220px] max-h-[300px] lg:max-h-full object-cover rounded" />
                  </div>
                  
                  {/* Right Column: Details & Specs */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-black text-paper">{mat.name}</h3>
                        <span className={`px-3 py-1 text-xs font-bold uppercase rounded ${mat.tagColor}`}>
                          {mat.tag}
                        </span>
                      </div>
                      
                      <p className="text-base text-paper-dim leading-relaxed mb-6">
                        {mat.description}
                      </p>
                      
                      {/* Technical Specs Dashboard */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-surface border border-line p-4 rounded mb-6 text-xs">
                        <div>
                          <span className="block text-fog uppercase font-mono tracking-wider mb-1">Grading Limit</span>
                          <span className="font-bold text-paper font-mono text-sm">{mat.specs.gradation}</span>
                        </div>
                        <div>
                          <span className="block text-fog uppercase font-mono tracking-wider mb-1">Flakiness</span>
                          <span className="font-bold text-paper font-mono text-sm">{mat.specs.flakiness}</span>
                        </div>
                        <div>
                          <span className="block text-fog uppercase font-mono tracking-wider mb-1">Absorption</span>
                          <span className="font-bold text-paper font-mono text-sm">{mat.specs.absorption}</span>
                        </div>
                        <div>
                          <span className="block text-fog uppercase font-mono tracking-wider mb-1">Max Crushing</span>
                          <span className="font-bold text-paper font-mono text-sm">{mat.specs.crushing}</span>
                        </div>
                      </div>

                      {/* Key Applications */}
                      <div className="mb-6">
                        <span className="text-xs font-bold uppercase text-paper block mb-2 font-mono tracking-wide">Key Applications</span>
                        <div className="flex flex-wrap gap-2">
                          {mat.apps.map((app) => (
                            <span key={app} className="px-2.5 py-1 bg-surface text-paper-dim text-xs rounded border border-line font-medium">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-line/50 flex flex-wrap gap-4">
                      <button 
                        onClick={() => openModal(mat.slug)}
                        className="btn btn-blue text-sm py-3 px-6 cursor-pointer"
                      >
                        Request Quote
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                      <button 
                        onClick={() => handleDownload(mat.name)}
                        className="btn btn-ghost text-sm py-3 px-6 cursor-pointer"
                      >
                        Download spec sheet
                        <span className="material-symbols-outlined text-sm">download</span>
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
