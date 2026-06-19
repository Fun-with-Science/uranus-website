import { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";
import WorkflowDiagram from "@/components/WorkflowDiagram";

export const metadata: Metadata = {
  title: "Processing Plant Infrastructure | Metso Cone Crushers",
  description: "Deep dive into our VSI plants, cone crushing equipment, dry stockyards, screening units, and logistics dispatch hubs.",
};

export default function InfrastructurePage() {
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
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Heavy Engineering</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Crushing Infrastructure</h1>
            <p className="text-sm text-gray-300 mt-2">Showcasing the mechanical scale of our aggregate processing units.</p>
          </div>
        </div>
      </section>

      {/* Visual Workflow Diagram */}
      <section className="py-20 bg-light border-b border-gray-200">
        <div className="px-margin-desktop max-w-container-max mx-auto text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Material Flow</span>
          <h2 className="text-3xl font-extrabold text-dark">Industrial Processing Workflow</h2>
          <p className="text-gray-600 text-sm">Follow the lifecycle of material processing from the rock face to project dispatch.</p>
          <WorkflowDiagram />
        </div>
      </section>

      {/* Detailed Infrastructure Sections */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto space-y-20">
        {/* Crushing Plant */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-dark edge-bar pl-6">VSI and Cone Crushing Plants</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our zones are equipped with high-performance Metso and Sandvik cone and Vertical Shaft Impactor (VSI) crushing units. VSIs throw basalt/granite rock against a stone lining, achieving optimal cubical particle shapes. This particle geometry increases concrete compaction, minimizing voids and lowering the overall cement paste requirements in structural concrete mix design.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-500">
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Sandvik units</span>
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">VSI cubic shaping</span>
            </div>
          </div>
          <img src="/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg" alt="URANUS VSI Crushing Plant" className="w-full aspect-[4/3] object-cover rounded shadow-md" />
        </div>

        {/* Screening Units & Stockyards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <div className="lg:order-2 space-y-6">
            <h3 className="text-2xl font-extrabold text-dark edge-bar pl-6">Industrial Multi-Deck Screening & Dry Stockyards</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Uranus screens aggregates on multi-deck mechanical vibrators to guarantee strict size separation. Graded aggregates (10mm, 20mm, 40mm, 60mm) are stored under extensive dry covered stockyards. This prevents dust contamination, clay mixing, or water absorption during monsoon seasons, delivering ready-to-mix aggregates directly to concrete batching plants.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-500">
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Multi-deck sifting</span>
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Covered stockyards</span>
            </div>
          </div>
          <img src="/uranus website assets/10.png" alt="URANUS Multi-Deck Screening Yard" className="w-full aspect-[4/3] object-cover rounded shadow-md lg:order-1" />
        </div>

        {/* Logistics and Quality Control */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-dark edge-bar pl-6">NABL Quality Lab & Dedicated Transport Fleet</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We maintain an on-site, NABL-accredited laboratory for raw and processed stone properties testing. Every truck dispatch is accompanied by particle grading size curves and test certifications. Our logistics dispatch centers leverage 100+ heavy-duty dumper carriers, tracked live with GPS telemetry, offering uninterrupted B2B bulk material logistics.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-500">
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">NABL standard testing</span>
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">100+ GPS dumpers</span>
            </div>
          </div>
          <img src="/uranus website assets/duhb.png" alt="URANUS Quality Lab & Logistics" className="w-full aspect-[4/3] object-cover rounded shadow-md" />
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
