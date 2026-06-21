import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Environmental Compliance | Sustainable Mining Practices",
  description: "Responsible mining, Zero Liquid Discharge, continuous high-pressure dry fog dust suppression, and plantation buffers.",
};

export default function SustainabilityPage() {
  return (
    <div>
      {/* Page Header Banner */}
      <section className="relative pt-36 pb-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/88 to-ink"></div>
        </div>
        <div className="relative z-10 wrap w-full">
          <div className="max-w-3xl border-l-4 border-amber pl-6">
            <span className="text-xs font-bold text-amber uppercase tracking-widest block font-mono">ESG &amp; Compliance</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mt-1">Ecological Stewardship</h1>
            <p className="text-sm text-paper-dim mt-2">Pioneering responsible mining and low-emission materials processing.</p>
          </div>
        </div>
      </section>

      {/* Sustainability Details */}
      <section className="py-24 w-full">
        <div className="wrap space-y-20">
          {/* Reforestation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="eyebrow font-mono">Eco Restoration</span>
              <h3 className="text-2xl font-extrabold text-paper">Green Belt Development Project</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                Uranus is committed to reversing quarrying impacts. Our designated Green Belt Development project has successfully planted over 10,000 native tree saplings surrounding our active processing sites. This creates a natural sound and dust buffer zone, restoring local ecosystems, enhancing biodiversity, and stabilizing topsoils from soil erosion.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-paper-dim font-mono">
                <span className="px-3 py-1 bg-surface border border-line rounded">10,000+ Native Trees</span>
                <span className="px-3 py-1 bg-surface border border-line rounded">Noise &amp; Dust Buffer Zones</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/8.png" alt="Uranus Ecological Afforestation Belt" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Water recycling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-6">
              <span className="eyebrow font-mono">Water preservation</span>
              <h3 className="text-2xl font-extrabold text-paper">Sedimentation Filters &amp; ZLD Policy</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                All stone washing operations are routed through high-efficiency water sedimentation systems. We recycle 100% of process water and operate on a strict Zero Liquid Discharge (ZLD) policy, preserving local groundwater tables.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-paper-dim font-mono">
                <span className="px-3 py-1 bg-surface border border-line rounded">Sedimentation Tank Filters</span>
                <span className="px-3 py-1 bg-surface border border-line rounded">Zero Liquid Discharge (ZLD)</span>
              </div>
            </div>
            <div className="lg:order-1 relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg" alt="Uranus Water Recycling Infrastructure" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Bento Grid environmental stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-surface border border-line p-8 rounded space-y-4 relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <span className="material-symbols-outlined text-amber text-5xl">cloud_queue</span>
              <h3 className="text-lg font-bold text-paper">Dust Mitigation</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                High-pressure fogging nozzles suppress particulate matter at all discharge and transfer points, reducing airborne dust emissions.
              </p>
            </div>
            
            <div className="bg-surface border border-line p-8 rounded space-y-4 relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <span className="material-symbols-outlined text-amber text-5xl">nature_people</span>
              <h3 className="text-lg font-bold text-paper">Eco Restoration</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                Spent mining pits are refilled and reclaimed as water reservoirs or afforested grasslands to encourage natural flora and fauna.
              </p>
            </div>
            
            <div className="bg-surface border border-line p-8 rounded space-y-4 relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <span className="material-symbols-outlined text-amber text-5xl">landscape</span>
              <h3 className="text-lg font-bold text-paper">Responsible Mining</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                We employ progressive quarry terracing and contour mapping. Our quarry plans are systematically executed to prevent landslides, secure worker safety, and prepare spent pits for ecosystem reclamation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
