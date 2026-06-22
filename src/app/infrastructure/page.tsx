import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Processing Plant Infrastructure | Metso Cone Crushers",
  description: "Deep dive into our VSI plants, cone crushing equipment, dry stockyards, screening units, and logistics dispatch hubs.",
};

export default function InfrastructurePage() {
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
            <span className="text-xs font-bold text-blue uppercase tracking-widest block font-mono mb-2">Heavy Engineering</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mb-4">Crushing Infrastructure</h1>
            <p className="text-base text-paper-dim">Showcasing the mechanical scale of our aggregate processing units.</p>
          </div>
        </div>
      </section>

      {/* Plant Capabilities & Compliance Grid */}
      <section className="py-24 bg-surface border-b border-line w-full">
        <div className="wrap">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-3 block">Engineering Metrics</span>
            <h2 className="text-3xl font-extrabold text-paper mb-4">Technical Plant Operations</h2>
            <p className="text-paper-dim text-base">Industrial capabilities supporting bulk materials processing at scale.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-2 border border-line p-8 rounded relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <span className="material-symbols-outlined text-blue text-4xl mb-4 block">electric_bolt</span>
              <h4 className="font-bold text-lg text-paper mb-2">Dedicated Substation</h4>
              <p className="text-sm text-paper-dim leading-relaxed">Powered by an independent 33KV industrial grid line backed up by 500KVA diesel generators, ensuring uninterrupted operations.</p>
            </div>
            
            <div className="bg-surface-2 border border-line p-8 rounded relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <span className="material-symbols-outlined text-blue text-4xl mb-4 block">waves</span>
              <h4 className="font-bold text-lg text-paper mb-2">Sand Washing Plant</h4>
              <p className="text-sm text-paper-dim leading-relaxed">Integrated hydro-cyclone classification units wash out organic silts, delivering M-Sand grading with zero clay content.</p>
            </div>
            
            <div className="bg-surface-2 border border-line p-8 rounded relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <span className="material-symbols-outlined text-blue text-4xl mb-4 block">monitoring</span>
              <h4 className="font-bold text-lg text-paper mb-2">Seismograph Stations</h4>
              <p className="text-sm text-paper-dim leading-relaxed">Equipped with active seismic monitoring networks to log controlled blasting impacts, complying with DGMS safety rules.</p>
            </div>
            
            <div className="bg-surface-2 border border-line p-8 rounded relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <span className="material-symbols-outlined text-blue text-4xl mb-4 block">verified</span>
              <h4 className="font-bold text-lg text-paper mb-2">NABL Laboratory</h4>
              <p className="text-sm text-paper-dim leading-relaxed">Equipped with sieve shakers, digital compression testing machines, and flakiness indexes to certify aggregate quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Infrastructure Sections */}
      <section className="py-24 w-full">
        <div className="wrap space-y-24">
          {/* Crushing Plant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow mb-3 block font-mono">Processing</span>
              <h3 className="text-3xl font-extrabold text-paper mb-4">VSI and Cone Crushing Plants</h3>
              <p className="text-base text-paper-dim leading-relaxed mb-6">
                Our zones are equipped with high-performance Metso and Sandvik cone and Vertical Shaft Impactor (VSI) crushing units. VSIs throw basalt/granite rock against a stone lining, achieving optimal cubical particle shapes. This particle geometry increases concrete compaction, minimizing voids and lowering the overall cement paste requirements in structural concrete mix design.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-paper-dim font-mono">
                <span className="px-3.5 py-1.5 bg-surface border border-line rounded">Sandvik units</span>
                <span className="px-3.5 py-1.5 bg-surface border border-line rounded">VSI cubic shaping</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg" alt="URANUS VSI Crusher Facility" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Screening Units & Stockyards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <span className="eyebrow mb-3 block font-mono">Storage</span>
              <h3 className="text-3xl font-extrabold text-paper mb-4">Industrial Multi-Deck Screening &amp; Covered Stockyards</h3>
              <p className="text-base text-paper-dim leading-relaxed mb-6">
                Uranus screens aggregates on multi-deck mechanical vibrators to guarantee strict size separation. Graded aggregates (10mm, 20mm, 40mm, 60mm) are stored under extensive dry covered stockyards. This prevents dust contamination, clay mixing, or water absorption during monsoon seasons, delivering ready-to-mix aggregates directly to concrete batching plants.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-paper-dim font-mono">
                <span className="px-3.5 py-1.5 bg-surface border border-line rounded">Multi-deck sifting</span>
                <span className="px-3.5 py-1.5 bg-surface border border-line rounded">Covered stockyards</span>
              </div>
            </div>
            <div className="lg:order-1 relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/10.png" alt="URANUS Multi-Deck Screening Yard" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Logistics and Quality Control */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow mb-3 block font-mono">Logistics &amp; QC</span>
              <h3 className="text-3xl font-extrabold text-paper mb-4">NABL Quality Lab &amp; Dedicated Transport Fleet</h3>
              <p className="text-base text-paper-dim leading-relaxed mb-6">
                We maintain an on-site, NABL-accredited laboratory for raw and processed stone properties testing. Every truck dispatch is accompanied by particle grading size curves and test certifications. Our logistics dispatch centers leverage 100+ heavy-duty dumper carriers, tracked live with GPS telemetry, offering uninterrupted B2B bulk material logistics.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-paper-dim font-mono">
                <span className="px-3.5 py-1.5 bg-surface border border-line rounded">NABL standard testing</span>
                <span className="px-3.5 py-1.5 bg-surface border border-line rounded">100+ GPS dumpers</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/duhb.png" alt="URANUS Quality Lab & Logistics" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
