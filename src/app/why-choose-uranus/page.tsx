import { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Why Choose Uranus | Quality, Capacity & Fleet Logistics",
  description: "Why top contractors choose Uranus. NABL lab testing, Sandvik cone crushers, 5M tons annual capacity, and GPS tracking fleet.",
};

export default function WhyChooseUranusPage() {
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
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Trust &amp; Credentials</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Uncompromising Structural Quality</h1>
            <p className="text-sm text-gray-300 mt-2">Why India's top contractors and infrastructure developers choose Uranus.</p>
          </div>
        </div>
      </section>

      {/* Why Choose In-Depth Details */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto space-y-20">
        {/* Quality Assurance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-dark edge-bar pl-6">NABL-Accredited Quality Control Laboratory</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Quality is the cornerstone of our operations. Uranus operates an on-site testing facility fully compliant with NABL standards. Every single batch of aggregate, GSB, and M-Sand undergoes a rigorous 12-point quality testing procedure including Sieve Gradation Analysis, Flakiness Index tests, Aggregate Impact Value assessments, and moisture density checks. This guarantees absolute compliance with NHAI, MORTH, and international structural parameters.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-500">
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">12-Point Testing Grid</span>
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Gradation certifications</span>
            </div>
          </div>
          <img src="/uranus website assets/3.png" alt="URANUS Quality Control" className="w-full aspect-[4/3] object-cover rounded shadow-md" />
        </div>

        {/* Plant Machinery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <div className="lg:order-2 space-y-6">
            <h3 className="text-2xl font-extrabold text-dark edge-bar pl-6">Modern Sandvik &amp; Metso Crushers</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We utilize Vertical Shaft Impactor (VSI) systems, cone crushers, and multi-deck sifting grids manufactured by global industrial machinery leaders, Metso and Sandvik. This advanced equipment processes raw basalt and granite stones into precise cubic shapes, reducing elongation and flakiness factors, which translates to high-compaction concrete and reduced structural void volumes.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-500">
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Cone Crusher technology</span>
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Cubic particle sizing</span>
            </div>
          </div>
          <img src="/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg" alt="Uranus Plant Metso Crusher" className="w-full aspect-[4/3] object-cover rounded shadow-md lg:order-1" />
        </div>

        {/* Consistent Supply Fleet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-dark edge-bar pl-6">Consistent Bulk Supply &amp; Carrier Fleet</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Highway development, skyscrapers, and railway subgrades require massive material dispatches on tight deadlines. With multiple crushing zones running 24/7, Uranus maintains a daily supply capacity exceeding 15,000 tons. Our in-house fleet of 100+ heavy dumper trucks, equipped with active GPS tracking telemetry, ensures just-in-time delivery directly to your batching plant or project site.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-500">
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">15,000 Tons Daily Yield</span>
              <span className="px-3 py-1 bg-light border border-gray-200 rounded">Just-in-time GPS Logistics</span>
            </div>
          </div>
          <img src="/uranus website assets/duhb.png" alt="URANUS Carrier Logistics Fleet" className="w-full aspect-[4/3] object-cover rounded shadow-md" />
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
