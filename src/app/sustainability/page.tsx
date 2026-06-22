import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Environmental Compliance & ESG | Uranus Stone Products Limited",
  description: "Review our environmental clearances, SPCB Consent to Operate, dry fog dust mitigation, zero liquid discharge water filters, and slope reclamation.",
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
          <div className="max-w-3xl border-l-4 border-blue pl-10">
            <span className="text-xs font-bold text-blue uppercase tracking-widest block font-mono mb-3">ESG &amp; Compliance</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mb-4">Environmental Stewardship</h1>
            <p className="text-base text-paper-dim">Pioneering responsible mining, SPCB compliance, and low-emission aggregate processing.</p>
          </div>
        </div>
      </section>

      {/* ESG Dashboard Metrics */}
      <section className="py-16 bg-surface-2 border-b border-line w-full">
        <div className="wrap">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l-2 border-blue pl-6">
              <span className="block text-3xl font-extrabold text-blue font-mono">100%</span>
              <span className="text-xs font-bold uppercase text-fog font-mono mt-2 block tracking-wider">Water Recycled (ZLD)</span>
            </div>
            <div className="border-l-2 border-blue pl-6">
              <span className="block text-3xl font-extrabold text-blue font-mono">&lt; 75 dB</span>
              <span className="text-xs font-bold uppercase text-fog font-mono mt-2 block tracking-wider">Noise CPCB Compliant</span>
            </div>
            <div className="border-l-2 border-blue pl-6">
              <span className="block text-3xl font-extrabold text-blue font-mono">Active</span>
              <span className="text-xs font-bold uppercase text-fog font-mono mt-2 block tracking-wider">SPCB CTO Approved</span>
            </div>
            <div className="border-l-2 border-blue pl-6">
              <span className="block text-3xl font-extrabold text-blue font-mono">10k+</span>
              <span className="text-xs font-bold uppercase text-fog font-mono mt-2 block tracking-wider">Eco Belt Native Trees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Certificates Grid */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="eyebrow mb-3 block">Certifications</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-paper mb-6">Approved Environmental Clearances</h2>
              <p className="text-base text-paper-dim leading-relaxed mb-6">
                Uranus operates under strict compliance with state and national environmental mandates. Our hillside basalt quarries have secured formal Environmental Clearance (EC) from the State Level Environment Impact Assessment Authority (SEIAA) and the Ministry of Environment, Forest and Climate Change (MoEFCC). 
              </p>
              <p className="text-base text-paper-dim leading-relaxed mb-8">
                Every year, our crushing plants are inspected by the State Pollution Control Board (SPCB), operating with active Consent to Establish (CTE) and Consent to Operate (CTO) clearances for noise, water, and air emission targets.
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 bg-surface border border-line px-4 py-2 rounded">
                  <span className="material-symbols-outlined text-blue">verified</span>
                  <span>SEIAA / MoEFCC Clearance</span>
                </div>
                <div className="flex items-center gap-2 bg-surface border border-line px-4 py-2 rounded">
                  <span className="material-symbols-outlined text-blue">verified</span>
                  <span>SPCB CTO Approved</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface border border-line p-8 rounded relative shadow-2xl">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <h4 className="font-bold text-lg text-paper mb-3">Air Act Consent</h4>
                <p className="text-sm text-paper-dim leading-relaxed">Complies with Section 21 of the Air (Prevention and Control of Pollution) Act, maintaining dust emissions within national standards.</p>
              </div>
              <div className="bg-surface border border-line p-8 rounded relative shadow-2xl">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <h4 className="font-bold text-lg text-paper mb-3">Water Act Consent</h4>
                <p className="text-sm text-paper-dim leading-relaxed">Operated under Section 25/26 of the Water Act, keeping process discharge at zero runoff to local waterways.</p>
              </div>
              <div className="bg-surface border border-line p-8 rounded relative shadow-2xl col-span-1 sm:col-span-2">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <h4 className="font-bold text-lg text-paper mb-3 font-mono text-blue text-sm">ISO 14001:2015 Environmental System</h4>
                <p className="text-sm text-paper-dim leading-relaxed">Our entire mining extraction and crusher zone lines run under standard ISO-certified Environmental Management Systems (EMS).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Technical ESG Pillars */}
      <section className="py-24 bg-surface border-t border-line w-full">
        <div className="wrap">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow mb-3 block">Engineering</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-paper mb-4">ESG Engineering &amp; Operations</h2>
            <p className="text-paper-dim text-base">How we integrate scientific environmental controls directly into our production lines.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pillar 1 */}
            <div className="bg-surface-2 border border-line p-10 rounded relative flex flex-col justify-between group hover:border-blue/50 transition-colors shadow-2xl">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <div>
                <span className="material-symbols-outlined text-blue text-4xl mb-6 block">cloud_queue</span>
                <h3 className="text-2xl font-bold text-paper mb-4">Air Quality &amp; Dry Fog Engineering</h3>
                <p className="text-base text-paper-dim leading-relaxed mb-6">
                  Fine stone dust is mitigated at the source. All Metso &amp; Sandvik primary crushing zones, screens, and conveyor discharge headers are enclosed and equipped with high-pressure dry fogging nozzles. These nozzles emit water droplets matching dust particle sizes (1–10 microns), causing dust to settle without wetting the aggregates. Internal haul roads are regularly dampened using dedicated water sprinkler trucks.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 bg-surface rounded text-paper-dim">10-Micron Fog Nozzles</span>
                <span className="px-2.5 py-1 bg-surface rounded text-paper-dim">Windbreaker Enclosures</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface-2 border border-line p-10 rounded relative flex flex-col justify-between group hover:border-blue/50 transition-colors shadow-2xl">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <div>
                <span className="material-symbols-outlined text-blue text-4xl mb-6 block">opacity</span>
                <h3 className="text-2xl font-bold text-paper mb-4">Closed-Loop Silt Filtration (ZLD)</h3>
                <p className="text-base text-paper-dim leading-relaxed mb-6">
                  Water preservation is critical in hillside operations. Our sand washing and dust suppression lines are connected to a multi-stage silt sedimentation pond grid. Wastewater undergoes high-rate chemical flocculation and filtration, allowing us to recycle 100% of process water. We operate on a strict Zero Liquid Discharge (ZLD) policy, ensuring zero runoff enters local valleys or mountain streams.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 bg-surface rounded text-paper-dim">100% Recycled Process Water</span>
                <span className="px-2.5 py-1 bg-surface rounded text-paper-dim">Silt Settlement Tanks</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-2 border border-line p-10 rounded relative flex flex-col justify-between group hover:border-blue/50 transition-colors shadow-2xl">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <div>
                <span className="material-symbols-outlined text-blue text-4xl mb-6 block">landscape</span>
                <h3 className="text-2xl font-bold text-paper mb-4">Mine Slope Terracing &amp; Topsoil Preservation</h3>
                <p className="text-base text-paper-dim leading-relaxed mb-6">
                  Uranus practices systematic contour benching and terracing in all quarry operations to prevent landslides and assure geotechnical stability. Before mining a quarry block, the topsoil layer is stripped and preserved separately in topsoil stockbanks. Once a quarry bench is exhausted, it is refilled using overburden materials, topped with the stored topsoil, and planted with native tree species.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 bg-surface rounded text-paper-dim">Quarry Bench Terracing</span>
                <span className="px-2.5 py-1 bg-surface rounded text-paper-dim">Topsoil Stacking Reserves</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-surface-2 border border-line p-10 rounded relative flex flex-col justify-between group hover:border-blue/50 transition-colors shadow-2xl">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <div>
                <span className="material-symbols-outlined text-blue text-4xl mb-6 block">monitoring</span>
                <h3 className="text-2xl font-bold text-paper mb-4">Controlled Blasting &amp; Vibration Tracking</h3>
                <p className="text-base text-paper-dim leading-relaxed mb-6">
                  To eliminate structural and environmental damage, we employ advanced controlled blasting. By using electronic delay detonators, the blast energy is split into milliseconds, minimizing ground vibrations and air overpressure waves. Every blast is monitored using digital seismographs on site to document compliance with DGMS peak particle velocity (PPV) thresholds.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 bg-surface rounded text-paper-dim">Electronic Delay Detonators</span>
                <span className="px-2.5 py-1 bg-surface rounded text-paper-dim">PPV Seismograph Logging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
