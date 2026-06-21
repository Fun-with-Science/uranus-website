import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";
import WorkflowDiagram from "@/components/WorkflowDiagram";

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
          <div className="max-w-3xl border-l-4 border-amber pl-6">
            <span className="text-xs font-bold text-amber uppercase tracking-widest block font-mono">Heavy Engineering</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mt-1">Crushing Infrastructure</h1>
            <p className="text-sm text-paper-dim mt-2">Showcasing the mechanical scale of our aggregate processing units.</p>
          </div>
        </div>
      </section>

      {/* Visual Workflow Diagram */}
      <section className="py-24 bg-surface border-b border-line w-full">
        <div className="wrap space-y-4">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="eyebrow">Material Flow</span>
            <h2 className="text-3xl font-extrabold text-paper">Industrial Processing Workflow</h2>
            <p className="text-paper-dim text-sm">Follow the lifecycle of material processing from the rock face to project dispatch.</p>
          </div>
          <WorkflowDiagram />
        </div>
      </section>

      {/* Detailed Infrastructure Sections */}
      <section className="py-24 w-full">
        <div className="wrap space-y-20">
          {/* Crushing Plant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="eyebrow font-mono">Processing</span>
              <h3 className="text-2xl font-extrabold text-paper">VSI and Cone Crushing Plants</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                Our zones are equipped with high-performance Metso and Sandvik cone and Vertical Shaft Impactor (VSI) crushing units. VSIs throw basalt/granite rock against a stone lining, achieving optimal cubical particle shapes. This particle geometry increases concrete compaction, minimizing voids and lowering the overall cement paste requirements in structural concrete mix design.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-paper-dim font-mono">
                <span className="px-3 py-1 bg-surface border border-line rounded">Sandvik units</span>
                <span className="px-3 py-1 bg-surface border border-line rounded">VSI cubic shaping</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg" alt="URANUS VSI Crusher Facility" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Screening Units & Stockyards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-6">
              <span className="eyebrow font-mono">Storage</span>
              <h3 className="text-2xl font-extrabold text-paper">Industrial Multi-Deck Screening &amp; Covered Stockyards</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                Uranus screens aggregates on multi-deck mechanical vibrators to guarantee strict size separation. Graded aggregates (10mm, 20mm, 40mm, 60mm) are stored under extensive dry covered stockyards. This prevents dust contamination, clay mixing, or water absorption during monsoon seasons, delivering ready-to-mix aggregates directly to concrete batching plants.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-paper-dim font-mono">
                <span className="px-3 py-1 bg-surface border border-line rounded">Multi-deck sifting</span>
                <span className="px-3 py-1 bg-surface border border-line rounded">Covered stockyards</span>
              </div>
            </div>
            <div className="lg:order-1 relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/10.png" alt="URANUS Multi-Deck Screening Yard" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Logistics and Quality Control */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="eyebrow font-mono">Logistics &amp; QC</span>
              <h3 className="text-2xl font-extrabold text-paper">NABL Quality Lab &amp; Dedicated Transport Fleet</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                We maintain an on-site, NABL-accredited laboratory for raw and processed stone properties testing. Every truck dispatch is accompanied by particle grading size curves and test certifications. Our logistics dispatch centers leverage 100+ heavy-duty dumper carriers, tracked live with GPS telemetry, offering uninterrupted B2B bulk material logistics.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-paper-dim font-mono">
                <span className="px-3 py-1 bg-surface border border-line rounded">NABL standard testing</span>
                <span className="px-3 py-1 bg-surface border border-line rounded">100+ GPS dumpers</span>
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
