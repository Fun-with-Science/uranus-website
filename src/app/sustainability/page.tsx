import { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Environmental Compliance | Sustainable Mining Practices",
  description: "Responsible mining, Zero Liquid Discharge, continuous high-pressure dry fog dust suppression, and plantation buffers.",
};

export default function SustainabilityPage() {
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
            <span className="text-xs font-bold text-accent uppercase tracking-widest">ESG & Compliance</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Ecological Stewardship</h1>
            <p className="text-sm text-gray-300 mt-2">Pioneering responsible mining and low-emission materials processing.</p>
          </div>
        </div>
      </section>

      {/* Sustainability Details */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto space-y-20">
        {/* Reforestation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-dark edge-bar pl-6">Green Belt Development Project</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Uranus is committed to reversing quarrying impacts. Our designated Green Belt Development project has successfully planted over 10,000 native tree saplings surrounding our active processing sites. This creates a natural sound and dust buffer zone, restoring local ecosystems, enhancing biodiversity, and stabilizing topsoils from soil erosion.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-500">
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">10,000+ Native Trees</span>
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Noise & Dust Buffer Zones</span>
            </div>
          </div>
          <img src="/uranus website assets/8.png" alt="Uranus Ecological Afforestation Belt" className="w-full aspect-[4/3] object-cover rounded shadow-md" />
        </div>

        {/* Water recycling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <div className="lg:order-2 space-y-6">
            <h3 className="text-2xl font-extrabold text-dark edge-bar pl-6">Sedimentation Filters &amp; ZLD Policy</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              All stone washing operations are routed through high-efficiency water sedimentation systems. We recycle 100% of process water and operate on a strict Zero Liquid Discharge (ZLD) policy, preserving local groundwater tables.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-500">
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Sedimentation Tank Filters</span>
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Zero Liquid Discharge (ZLD)</span>
            </div>
          </div>
          <img src="/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg" alt="Uranus Water Recycling Infrastructure" className="w-full aspect-[4/3] object-cover rounded shadow-md lg:order-1" />
        </div>

        {/* Bento Grid environmental stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-light border border-gray-200 p-8 rounded space-y-4">
            <span className="material-symbols-outlined text-accent text-5xl">cloud_queue</span>
            <h3 className="text-lg font-bold text-dark">Dust Mitigation</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              High-pressure fogging nozzles suppress particulate matter at all discharge and transfer points, reducing airborne dust emissions.
            </p>
          </div>
          
          <div className="bg-light border border-gray-200 p-8 rounded space-y-4">
            <span className="material-symbols-outlined text-accent text-5xl">nature_people</span>
            <h3 className="text-lg font-bold text-dark">Eco Restoration</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Spent mining pits are refilled and reclaimed as water reservoirs or afforested grasslands to encourage natural flora and fauna.
            </p>
          </div>
          
          <div className="bg-light border border-gray-200 p-8 rounded space-y-4">
            <span className="material-symbols-outlined text-accent text-5xl">landscape</span>
            <h3 className="text-lg font-bold text-dark">Responsible Mining</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We employ progressive quarry terracing and contour mapping. Our quarry plans are systematically executed to prevent landslides, secure worker safety, and prepare spent pits for ecosystem reclamation.
            </p>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
