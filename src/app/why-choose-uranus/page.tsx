import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Why Choose Uranus | Quality, Capacity & Fleet Logistics",
  description: "Why top contractors choose Uranus. NABL lab testing, Sandvik cone crushers, 5M tons annual capacity, and GPS tracking fleet.",
};

export default function WhyChooseUranusPage() {
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
            <span className="text-xs font-bold text-amber uppercase tracking-widest block font-mono">Trust &amp; Credentials</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mt-1">Uncompromising Structural Quality</h1>
            <p className="text-sm text-paper-dim mt-2">Why India's top contractors and infrastructure developers choose Uranus.</p>
          </div>
        </div>
      </section>

      {/* Why Choose In-Depth Details */}
      <section className="py-24 w-full">
        <div className="wrap space-y-20">
          {/* Quality Assurance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="eyebrow font-mono">Lab Testing</span>
              <h3 className="text-2xl font-extrabold text-paper">NABL-Accredited Quality Control Laboratory</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                Quality is the cornerstone of our operations. Uranus operates an on-site testing facility fully compliant with NABL standards. Every single batch of aggregate, GSB, and M-Sand undergoes a rigorous 12-point quality testing procedure including Sieve Gradation Analysis, Flakiness Index tests, Aggregate Impact Value assessments, and moisture density checks. This guarantees absolute compliance with NHAI, MORTH, and international structural parameters.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-paper-dim font-mono">
                <span className="px-3 py-1 bg-surface border border-line rounded">12-Point Testing Grid</span>
                <span className="px-3 py-1 bg-surface border border-line rounded">Gradation certifications</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/3.png" alt="Uranus Quality Control" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Plant Machinery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:order-2 space-y-6">
              <span className="eyebrow font-mono">Machinery</span>
              <h3 className="text-2xl font-extrabold text-paper">Modern Sandvik &amp; Metso Crushers</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                We utilize Vertical Shaft Impactor (VSI) systems, cone crushers, and multi-deck sifting grids manufactured by global industrial machinery leaders, Metso and Sandvik. This advanced equipment processes raw basalt and granite stones into precise cubic shapes, reducing elongation and flakiness factors, which translates to high-compaction concrete and reduced structural void volumes.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-paper-dim font-mono">
                <span className="px-3 py-1 bg-surface border border-line rounded">Cone Crusher technology</span>
                <span className="px-3 py-1 bg-surface border border-line rounded">Cubic particle sizing</span>
              </div>
            </div>
            <div className="lg:order-1 relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg" alt="Uranus Plant Metso Crusher" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>

          {/* Consistent Supply Fleet */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="eyebrow font-mono">Logistics</span>
              <h3 className="text-2xl font-extrabold text-paper">Consistent Bulk Supply &amp; Carrier Fleet</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                Highway development, skyscrapers, and railway subgrades require massive material dispatches on tight deadlines. With multiple crushing zones running 24/7, Uranus maintains a daily supply capacity exceeding 15,000 tons. Our in-house fleet of 100+ heavy dumper trucks, equipped with active GPS tracking telemetry, ensures just-in-time delivery directly to your batching plant or project site.
              </p>
              <div className="flex gap-4 text-xs font-semibold text-paper-dim font-mono">
                <span className="px-3 py-1 bg-surface border border-line rounded">15,000 Tons Daily Yield</span>
                <span className="px-3 py-1 bg-surface border border-line rounded">Just-in-time GPS Logistics</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <img src="/uranus website assets/duhb.png" alt="Uranus Carrier Logistics Fleet" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
