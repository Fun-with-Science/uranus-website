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
            <span className="text-xs font-bold text-amber uppercase tracking-widest block font-mono">ESG &amp; Compliance</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mt-1">Ecological Stewardship</h1>
            <p className="text-sm text-paper-dim mt-2">Pioneering responsible mining and low-emission materials processing.</p>
          </div>
        </div>
      </section>

      {/* Sustainability Intro Manifesto */}
      <section className="py-20 bg-surface border-b border-line w-full">
        <div className="wrap">
          <div className="max-w-4xl mx-auto text-center">
            <span className="eyebrow mb-4">Manifesto</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-paper tracking-tight mb-6">Our Environmental Commitment</h2>
            <p className="text-base md:text-lg text-paper-dim leading-relaxed">
              At Uranus, we believe infrastructure growth should never compromise the health of our planet. 
              We incorporate ecological conservation directly into our daily mining operations and industrial manufacturing, 
              deploying state-of-the-art technologies to minimize our footprint and preserve the natural heritage of Northeast India.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Details */}
      <section className="py-24 w-full">
        <div className="wrap space-y-24">
          
          {/* Reforestation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow mb-3 block">Eco Restoration</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-paper tracking-tight mb-4">Green Belt Development Project</h3>
              <p className="text-base text-paper-dim leading-relaxed mb-6">
                Uranus is committed to reversing quarrying impacts. Our designated Green Belt Development project has successfully planted over 10,000 native tree saplings surrounding our active processing sites. This creates a natural sound and dust buffer zone, restoring local ecosystems, enhancing biodiversity, and stabilizing topsoils from soil erosion.
              </p>
              <div className="flex flex-wrap gap-3 font-mono">
                <span className="px-3.5 py-1.5 bg-surface-2 border border-line rounded text-xs text-paper">10,000+ Native Trees</span>
                <span className="px-3.5 py-1.5 bg-surface-2 border border-line rounded text-xs text-paper">Noise &amp; Dust Buffer Zones</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <img src="/uranus website assets/8.png" alt="Uranus Ecological Afforestation Belt" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Water recycling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <span className="eyebrow mb-3 block">Water preservation</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-paper tracking-tight mb-4">Sedimentation Filters &amp; ZLD Policy</h3>
              <p className="text-base text-paper-dim leading-relaxed mb-6">
                All stone washing and quarry processing operations are routed through high-efficiency water sedimentation systems. We recycle 100% of process water and operate on a strict Zero Liquid Discharge (ZLD) policy, preserving local groundwater tables and preventing runoff contamination.
              </p>
              <div className="flex flex-wrap gap-3 font-mono">
                <span className="px-3.5 py-1.5 bg-surface-2 border border-line rounded text-xs text-paper">Sedimentation Tank Filters</span>
                <span className="px-3.5 py-1.5 bg-surface-2 border border-line rounded text-xs text-paper">Zero Liquid Discharge (ZLD)</span>
              </div>
            </div>
            <div className="lg:order-1 relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <img src="/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg" alt="Uranus Water Recycling Infrastructure" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Bento Grid environmental stats */}
          <div className="pt-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow mb-3 block">Safety &amp; Compliance</span>
              <h2 className="text-3xl font-extrabold text-paper tracking-tight">Environmental Measures</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-surface border border-line p-8 rounded relative hover:border-amber/40 transition-colors group">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <div className="w-14 h-14 bg-amber/10 rounded flex items-center justify-center text-amber mb-6 group-hover:bg-amber group-hover:text-ink transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">cloud_queue</span>
                </div>
                <h3 className="text-xl font-bold text-paper mb-3">Dust Mitigation</h3>
                <p className="text-sm text-paper-dim leading-relaxed">
                  High-pressure fogging nozzles suppress particulate matter at all discharge and transfer points, reducing airborne dust emissions.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-surface border border-line p-8 rounded relative hover:border-amber/40 transition-colors group">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <div className="w-14 h-14 bg-amber/10 rounded flex items-center justify-center text-amber mb-6 group-hover:bg-amber group-hover:text-ink transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">nature_people</span>
                </div>
                <h3 className="text-xl font-bold text-paper mb-3">Eco Restoration</h3>
                <p className="text-sm text-paper-dim leading-relaxed">
                  Spent mining pits are refilled and reclaimed as water reservoirs or afforested grasslands to encourage natural flora and fauna.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-surface border border-line p-8 rounded relative hover:border-amber/40 transition-colors group">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <div className="w-14 h-14 bg-amber/10 rounded flex items-center justify-center text-amber mb-6 group-hover:bg-amber group-hover:text-ink transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">landscape</span>
                </div>
                <h3 className="text-xl font-bold text-paper mb-3">Responsible Mining</h3>
                <p className="text-sm text-paper-dim leading-relaxed">
                  We employ progressive quarry terracing and contour mapping. Our quarry plans are systematically executed to prevent landslides, secure worker safety, and prepare spent pits for ecosystem reclamation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
