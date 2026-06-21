"use client";

import React from "react";
import { useQuoteModal } from "@/components/Providers";

export default function ProductsPage() {
  const { openModal } = useQuoteModal();

  const handleDownload = (productName: string) => {
    // Generate and download a text file as technical datasheet
    const fileContent = `URANUS STONE PRODUCTS LIMITED - TECHNICAL DATASHEET\n\n` +
      `Product: ${productName}\n` +
      `Crushing Zone: Metso VSI multi-stage processing\n` +
      `Compliance: IS 383:2016 Gradation curves zone limits compliant\n` +
      `Testing Parameters:\n` +
      `- Flakiness Index: < 15%\n` +
      `- Elongation Index: < 15%\n` +
      `- Crushing Value: < 18%\n` +
      `- Impact Value: < 14%\n` +
      `- Water Absorption: < 0.6%\n\n` +
      `For structural test certificates and bulk order pricing, contact: sales@uranusstone.in`;

    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent);
    link.download = `Uranus_Specs_${productName.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const materials = [
    {
      name: "10mm Aggregate",
      tag: "RCC Structures",
      tagColor: "bg-amber/10 text-amber border border-amber/20",
      image: "/uranus website assets/3.png",
      description: "Specifically processed basalt aggregates sorted using precision screening grids. Conforms strictly to mechanical strength targets for RCC structures.",
      apps: ["RCC Columns", "Detailed Concrete Slabs", "Precast Block casting"],
      slug: "10mm"
    },
    {
      name: "20mm Aggregate",
      tag: "Heavy Foundations",
      tagColor: "bg-amber/10 text-amber border border-amber/20",
      image: "/uranus website assets/wbs.png",
      description: "Our premier concrete aggregate, featuring exceptional cubic particles for optimum binder packing. Reduces cement voids, ensuring strong skyscrapers and foundations.",
      apps: ["High-rise Buildings", "Bridge Girders", "Heavy Foundations"],
      slug: "20mm"
    },
    {
      name: "Manufactured Sand (M-Sand)",
      tag: "Eco Friendly Plaster",
      tagColor: "bg-moss/10 text-moss border border-moss/20",
      image: "/uranus website assets/wbs.png",
      description: "High-quality manufactured sand, crushed and washed with zero organic or silt impurities. Perfect grading makes it the ultimate eco-friendly choice for masonry plasters.",
      apps: ["Masonry Mortar", "Wall Plastering", "Concrete Mixes"],
      slug: "msand"
    },
    {
      name: "Granular Sub Base (GSB)",
      tag: "Highway Base Layer",
      tagColor: "bg-amber/10 text-amber border border-amber/20",
      image: "/uranus website assets/duhb.png",
      description: "MORTH specification compliant Granular Sub Base. Ideal for highway base layers, base stabilization, and water filtration subgrades.",
      apps: ["Highway Subgrades", "Base Stabilization", "Structural Fill"],
      slug: "gsb"
    }
  ];

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
          <div className="max-w-3xl border-l-4 border-amber pl-6">
            <span className="text-xs font-bold text-amber uppercase tracking-widest block font-mono mb-2">Material Catalog</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mb-4">Calibrated Materials Catalog</h1>
            <p className="text-base text-paper-dim">Graded aggregates, manufactured sand, and base layers conforming to national standards.</p>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 block">Specifications</span>
            <h2 className="text-3xl font-extrabold text-paper mb-4">Material Gradation &amp; Specification Table</h2>
            <p className="text-paper-dim text-base">Review size parameters, structural targets, and primary applications for our core materials catalog.</p>
          </div>
          
          <div className="overflow-x-auto border border-line rounded shadow-2xl bg-surface">
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
                <tr className="hover:bg-surface-2 transition-colors">
                  <td className="py-5 px-6 font-bold text-paper">6mm Aggregate</td>
                  <td className="py-5 px-6 text-paper-dim">6mm (Fine aggregate)</td>
                  <td className="py-5 px-6">Pipe bedding, pre-cast concrete block mixes, surface plastering finishes.</td>
                  <td className="py-5 px-6 text-amber font-mono">IS 383:2016 Compliant</td>
                </tr>
                <tr className="hover:bg-surface-2 transition-colors">
                  <td className="py-5 px-6 font-bold text-paper">10mm Aggregate</td>
                  <td className="py-5 px-6 text-paper-dim">10mm</td>
                  <td className="py-5 px-6">RCC structural designs, concrete mixes, residential slabs, casting columns.</td>
                  <td className="py-5 px-6 text-amber font-mono">IS 383:2016 Compliant</td>
                </tr>
                <tr className="hover:bg-surface-2 transition-colors">
                  <td className="py-5 px-6 font-bold text-paper">20mm Aggregate</td>
                  <td className="py-5 px-6 text-paper-dim">20mm</td>
                  <td className="py-5 px-6">Skyscrapers, industrial foundations, heavy pillars, high-strength concrete mixes.</td>
                  <td className="py-5 px-6 text-amber font-mono">IS 383:2016 Compliant</td>
                </tr>
                <tr className="hover:bg-surface-2 transition-colors">
                  <td className="py-5 px-6 font-bold text-paper">40mm Aggregate</td>
                  <td className="py-5 px-6 text-paper-dim">40mm</td>
                  <td className="py-5 px-6">Sub-base road construction, drainage filtration grids, concrete foundations.</td>
                  <td className="py-5 px-6 text-amber font-mono">IS 383:2016 Compliant</td>
                </tr>
                <tr className="hover:bg-surface-2 transition-colors">
                  <td className="py-5 px-6 font-bold text-paper">60mm Aggregate</td>
                  <td className="py-5 px-6 text-paper-dim">60mm</td>
                  <td className="py-5 px-6">Heavy railway ballast, road subgrades, sub-base drainage protection layers.</td>
                  <td className="py-5 px-6 text-amber font-mono">NHAI Specifications</td>
                </tr>
                <tr className="hover:bg-surface-2 transition-colors">
                  <td className="py-5 px-6 font-bold text-paper">Manufactured Sand (M-Sand)</td>
                  <td className="py-5 px-6 text-paper-dim">{"Fine (<4.75mm)"}</td>
                  <td className="py-5 px-6">Concrete structures, structural brick masonry plastering, eco-friendly filler.</td>
                  <td className="py-5 px-6 text-amber font-mono">IS 383 Zone II</td>
                </tr>
                <tr className="hover:bg-surface-2 transition-colors">
                  <td className="py-5 px-6 font-bold text-paper">GSB (Granular Sub Base)</td>
                  <td className="py-5 px-6 text-paper-dim">Mixed Graded</td>
                  <td className="py-5 px-6">Highway subgrade stabilization, load-bearing road pavements.</td>
                  <td className="py-5 px-6 text-amber font-mono">MORTH Section 400</td>
                </tr>
                <tr className="hover:bg-surface-2 transition-colors">
                  <td className="py-5 px-6 font-bold text-paper">Stone Dust</td>
                  <td className="py-5 px-6 text-paper-dim">{"Powder (<2.36mm)"}</td>
                  <td className="py-5 px-6">Tile jointing, road base binder filler, concrete blocks manufacture.</td>
                  <td className="py-5 px-6 text-amber font-mono">IS 383 Compliant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Details Grid */}
      <section className="py-24 bg-surface border-y border-line w-full">
        <div className="wrap">
          <h2 className="text-3xl font-extrabold text-paper text-center mb-16">Detailed Materials List</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {materials.map((mat) => (
              <div key={mat.name} className="bg-surface-2 border border-line p-8 rounded shadow-2xl flex flex-col justify-between relative">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-paper">{mat.name}</h3>
                    <span className={`px-2.5 py-1 text-xs font-bold uppercase rounded ${mat.tagColor}`}>
                      {mat.tag}
                    </span>
                  </div>
                  <img src={mat.image} alt={mat.name} className="w-full h-64 object-cover rounded border border-line mb-6" />
                  <p className="text-base text-paper-dim leading-relaxed mb-6">
                    {mat.description}
                  </p>
                  <div className="border-t border-line pt-6 mb-6">
                    <span className="text-sm font-semibold text-paper block mb-3 font-mono">Key Applications:</span>
                    <div className="flex flex-wrap gap-2.5">
                      {mat.apps.map((app) => (
                        <span key={app} className="px-3 py-1.5 bg-surface text-paper-dim text-sm rounded border border-line">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-line/40 flex flex-wrap gap-4">
                  <button 
                    onClick={() => openModal(mat.slug)}
                    className="btn btn-amber text-sm py-3 px-6 cursor-pointer"
                  >
                    Request Quote
                  </button>
                  <button 
                    onClick={() => handleDownload(mat.name)}
                    className="btn btn-ghost text-sm py-3 px-6 cursor-pointer"
                  >
                    Download Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
