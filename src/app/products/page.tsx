"use client";

import CtaBlock from "@/components/CtaBlock";

export default function ProductsPage() {
  const handleDownload = (productName: string) => {
    alert(`[TECHNICAL DATASHEET] Initializing download for Uranus ${productName} lab quality analysis and sieve grading reports (PDF)...`);
  };

  const materials = [
    {
      name: "10mm Aggregate",
      tag: "RCC Structures",
      tagColor: "bg-primary/10 text-primary",
      image: "/uranus website assets/3.png",
      description: "Specifically processed basalt aggregates sorted using precision screening grids. Conforms strictly to mechanical strength targets for RCC structures.",
      apps: ["RCC Structures", "Concrete Mixes", "Residential Slabs"],
      slug: "10mm"
    },
    {
      name: "20mm Aggregate",
      tag: "Foundations",
      tagColor: "bg-primary/10 text-primary",
      image: "/uranus website assets/wbs.png",
      description: "Our premier concrete aggregate, featuring exceptional cubic particles for optimum binder packing. Reduces cement voids, ensuring strong skyscrapers and foundations.",
      apps: ["High-rise Buildings", "Bridge Girders", "Heavy Foundations"],
      slug: "20mm"
    },
    {
      name: "Manufactured Sand (M-Sand)",
      tag: "Eco Friendly",
      tagColor: "bg-accent/10 text-accent",
      image: "/uranus website assets/wbs.png",
      description: "High-quality manufactured sand, crushed and washed with zero organic or silt impurities. Perfect grading makes it the ultimate eco-friendly choice for masonry plasters.",
      apps: ["Masonry Mortar", "Plastering Works", "Structural Concrete"],
      slug: "msand"
    },
    {
      name: "Granular Sub Base (GSB)",
      tag: "Highway Base",
      tagColor: "bg-primary/10 text-primary",
      image: "/uranus website assets/duhb.png",
      description: "MORTH specification compliant Granular Sub Base. Ideal for highway base layers, base stabilization, and water filtration subgrades.",
      apps: ["Highway Subgrades", "Base Stabilization", "Structural Fill"],
      slug: "gsb"
    }
  ];

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
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Material Catalog</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Industrial Materials Specs</h1>
            <p className="text-sm text-gray-300 mt-2">Graded materials conforming to strict structural engineering standards.</p>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-dark">Material Gradation & Specification Table</h2>
          <p className="text-gray-600 text-sm">Review size parameters, structural targets, and primary applications for our core materials catalog.</p>
        </div>
        
        <div className="overflow-x-auto border border-gray-200 rounded shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-dark text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Product</th>
                <th className="py-4 px-6 font-bold">Size</th>
                <th className="py-4 px-6 font-bold">Primary Application</th>
                <th className="py-4 px-6 font-bold">Technical Standards</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              <tr className="hover:bg-light">
                <td className="py-4 px-6 font-bold text-dark">6mm Aggregate</td>
                <td className="py-4 px-6 text-gray-600">6mm (Fine aggregate)</td>
                <td className="py-4 px-6 text-gray-600">Pipe bedding, pre-cast concrete block mixes, surface plastering finishes.</td>
                <td className="py-4 px-6 text-gray-500 font-mono">IS 383:2016 Compliant</td>
              </tr>
              <tr className="hover:bg-light">
                <td className="py-4 px-6 font-bold text-dark">10mm Aggregate</td>
                <td className="py-4 px-6 text-gray-600">10mm</td>
                <td className="py-4 px-6 text-gray-600">RCC structural designs, concrete mixes, residential slabs, casting columns.</td>
                <td className="py-4 px-6 text-gray-500 font-mono">IS 383:2016 Compliant</td>
              </tr>
              <tr className="hover:bg-light">
                <td className="py-4 px-6 font-bold text-dark">20mm Aggregate</td>
                <td className="py-4 px-6 text-gray-600">20mm</td>
                <td className="py-4 px-6 text-gray-600">Skyscrapers, industrial foundations, heavy pillars, high-strength concrete mixes.</td>
                <td className="py-4 px-6 text-gray-500 font-mono">IS 383:2016 Compliant</td>
              </tr>
              <tr className="hover:bg-light">
                <td className="py-4 px-6 font-bold text-dark">40mm Aggregate</td>
                <td className="py-4 px-6 text-gray-600">40mm</td>
                <td className="py-4 px-6 text-gray-600">Sub-base road construction, drainage filtration grids, concrete foundations.</td>
                <td className="py-4 px-6 text-gray-500 font-mono">IS 383:2016 Compliant</td>
              </tr>
              <tr className="hover:bg-light">
                <td className="py-4 px-6 font-bold text-dark">60mm Aggregate</td>
                <td className="py-4 px-6 text-gray-600">60mm</td>
                <td className="py-4 px-6 text-gray-600">Heavy railway ballast, road subgrades, sub-base drainage protection layers.</td>
                <td className="py-4 px-6 text-gray-500 font-mono">NHAI Specifications</td>
              </tr>
              <tr className="hover:bg-light">
                <td className="py-4 px-6 font-bold text-dark">Manufactured Sand (M-Sand)</td>
                <td className="py-4 px-6 text-gray-600">{"Fine (<4.75mm)"}</td>
                <td className="py-4 px-6 text-gray-600">Concrete structures, structural brick masonry plastering, eco-friendly filler.</td>
                <td className="py-4 px-6 text-gray-500 font-mono">IS 383 Zone II</td>
              </tr>
              <tr className="hover:bg-light">
                <td className="py-4 px-6 font-bold text-dark">GSB (Granular Sub Base)</td>
                <td className="py-4 px-6 text-gray-600">Mixed Graded</td>
                <td className="py-4 px-6 text-gray-600">Highway subgrade stabilization, load-bearing road pavements.</td>
                <td className="py-4 px-6 text-gray-500 font-mono">MORTH Section 400</td>
              </tr>
              <tr className="hover:bg-light">
                <td className="py-4 px-6 font-bold text-dark">Stone Dust</td>
                <td className="py-4 px-6 text-gray-600">{"Powder (<2.36mm)"}</td>
                <td className="py-4 px-6 text-gray-600">Tile jointing, road base binder filler, concrete blocks manufacture.</td>
                <td className="py-4 px-6 text-gray-500 font-mono">IS 383 Compliant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Details Grid */}
      <section className="py-16 bg-light border-y border-gray-200">
        <div className="px-margin-desktop max-w-container-max mx-auto space-y-12">
          <h2 className="text-3xl font-extrabold text-dark text-center">Detailed Materials List</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((mat) => (
              <div key={mat.name} className="bg-white border border-gray-200 p-8 rounded shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-dark">{mat.name}</h3>
                    <span className={`px-2.5 py-1 text-xs font-bold uppercase rounded ${mat.tagColor}`}>
                      {mat.tag}
                    </span>
                  </div>
                  <img src={mat.image} alt={mat.name} className="w-full h-48 object-cover rounded" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {mat.description}
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <span className="text-xs font-semibold text-dark block mb-2">Key Applications:</span>
                    <div className="flex flex-wrap gap-2">
                      {mat.apps.map((app) => (
                        <span key={app} className="px-2 py-1 bg-light text-gray-600 text-xs rounded border border-gray-200">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-6 flex flex-wrap gap-4">
                  <a href={`/contact?product=${mat.slug}`} className="bg-primary text-white px-4 py-2 text-xs font-bold uppercase rounded hover:bg-blue-700 transition-colors">
                    Request Quote
                  </a>
                  <button 
                    onClick={() => handleDownload(mat.name)}
                    className="border border-gray-200 text-gray-600 px-4 py-2 text-xs font-bold uppercase rounded hover:bg-light transition-colors cursor-pointer"
                  >
                    Download Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
