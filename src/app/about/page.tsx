import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Corporation | Uranus Stone Products Limited",
  description: "Established aggregate, sand, and infrastructure materials manufacturing partner. Read company mission, plant capacities, and leadership history.",
};

export default function AboutPage() {
  const timelineEvents = [
    { year: "1998", title: "Quarry Commissioning", desc: "Acquired our primary basalt quarry site in Ri-Bhoi district and installed first-generation jaw crushers to feed regional road building." },
    { year: "2009", title: "Technological Upgrade", desc: "Installed advanced Vertical Shaft Impactor (VSI) plants to produce high-durability Manufactured Sand (M-Sand) compliant with IS 383." },
    { year: "2020", title: "Enterprise Expansion", desc: "Commissioned a third crushing plant zone and established an in-house GPS-tracked heavy dumper logistics fleet for direct-to-site delivery." }
  ];

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
            <span className="text-xs font-bold text-blue uppercase tracking-widest block font-mono mb-3">About Our Corporation</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mb-4">Decades of Industrial Heritage</h1>
            <p className="text-base text-paper-dim">Providing the material foundations powering highway and infrastructure expansion across Northeast India.</p>
          </div>
        </div>
      </section>

      {/* Company History/Bento */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8 bg-surface border border-line p-12 rounded flex flex-col justify-between shadow-2xl relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <div>
                <span className="eyebrow mb-3 block">Corporate Profile</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-paper mb-6">Global Standards in Local Infrastructure</h2>
                <p className="text-paper-dim text-base leading-relaxed mb-8">
                  At Uranus Stone Products Limited, we don't just supply materials; we engineer certainty. Over the years, our operations have evolved to incorporate Metso VSI plant technology, high-efficiency crushing zone lines, and a massive supply chain fleet capable of dispatching aggregates daily. We ensure that every batch of aggregate and sand complies with modern national standards while minimizing environmental impacts.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-line">
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-blue font-mono">5M+ Tons</span>
                  <span className="text-xs font-bold uppercase text-fog font-mono mt-1 block">Total Supplied</span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-blue font-mono">3 Zones</span>
                  <span className="text-xs font-bold uppercase text-fog font-mono mt-1 block">Crushing Yards</span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-blue font-mono">0.05%</span>
                  <span className="text-xs font-bold uppercase text-fog font-mono mt-1 block">Size Deviation</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 rounded overflow-hidden border border-line shadow-2xl relative group aspect-[4/3] lg:aspect-auto">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="/uranus website assets/10.png" alt="Uranus Heavy Machinery" />
              <div className="absolute inset-0 bg-ink/75 p-8 flex flex-col justify-end text-white">
                <span className="text-blue font-mono text-xs uppercase tracking-widest mb-1">Heavy Operations</span>
                <h3 className="font-bold text-xl text-paper mb-1">Plant Excavation Fleet</h3>
                <p className="text-sm text-paper-dim">Modern crawler excavators, heavy loaders, and transport lines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical capabilities / Location */}
      <section className="py-24 bg-surface-2 border-y border-line w-full">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow mb-3 block">Plant Capacity</span>
              <h2 className="text-3xl font-extrabold text-paper mb-6">Strategic Location &amp; Extraction</h2>
              <p className="text-base text-paper-dim leading-relaxed mb-6">
                Our plant is located in Nongpoh, Ri-Bhoi district, Meghalaya, positioned strategically along the Guwahati-Shillong corridor. This location permits direct B2B supply logistics for major highway tenders and commercial concrete batching plants.
              </p>
              <p className="text-base text-paper-dim leading-relaxed mb-8">
                Operating with certified mining leases, our quarry yields premium-grade basalt rock, characterized by high compressive strength and low moisture absorption rates, making it the preferred raw material for highway concrete.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold font-mono text-paper-dim">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue">location_on</span>
                  <span>Guwahati-Shillong Corridor</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue">verified</span>
                  <span>Certified Mining Lease</span>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded border border-line p-2 bg-surface">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <img src="/uranus website assets/pexels-jetkerim-16567021.jpg.jpeg" alt="Uranus Basalt Quarry Site" className="w-full aspect-[4/3] object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline (Vertical Node Layout) */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow mb-3 block">Milestones</span>
            <h2 className="text-3xl font-extrabold text-paper mb-4">Corporate Timeline</h2>
            <p className="text-paper-dim text-base">Tracing our evolution from regional quarry operations to an enterprise materials partner.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
            {/* Center line (only md and up) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line hidden md:block"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((evt, idx) => (
                <div key={evt.year} className="relative flex flex-col md:flex-row items-center justify-between">
                  {/* Left Side */}
                  <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? "md:text-right md:order-1" : "md:order-3"}`}>
                    <h4 className="text-3xl font-black text-blue font-mono mb-2 block">{evt.year}</h4>
                    <h5 className="font-bold text-lg text-paper mb-2 tracking-wide font-mono">{evt.title}</h5>
                    <p className="text-sm text-paper-dim leading-relaxed">{evt.desc}</p>
                  </div>
                  
                  {/* Node dot (only md and up) */}
                  <div className="absolute left-[-24px] md:left-1/2 md:translate-x-[-8px] w-4 h-4 bg-blue rounded-full z-10 border-4 border-ink shadow-[0_0_10px_rgba(62,130,247,0.5)] md:order-2"></div>
                  
                  {/* Spacer (only md and up) */}
                  <div className="w-[45%] hidden md:block md:order-3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-surface border-t border-line w-full">
        <div className="wrap">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow mb-3 block">Executive Board</span>
            <h2 className="text-3xl font-extrabold text-paper mb-4">Leadership Team</h2>
            <p className="text-paper-dim text-base">The experienced board members directing Uranus operations and compliance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Director 1 */}
            <div className="bg-surface-2 border border-line rounded overflow-hidden text-center p-8 group hover:border-blue transition-colors shadow-2xl relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-stone shadow-md relative bg-stone">
                <img src="/uranus website assets/Ankit Mittal - Corporate photo.jpeg" alt="Ankit Mittal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-xl text-paper mb-1 block">Ankit Mittal</h3>
              <p className="text-xs text-blue font-extrabold uppercase tracking-widest mb-3 block font-mono">Managing Director</p>
              <p className="text-sm text-paper-dim leading-relaxed mb-6">Leads structural technology initiatives, plant equipment procurement, and corporate finance.</p>
              <a href="mailto:ankit@uranusstone.in" className="text-xs text-fog hover:text-blue transition-colors font-mono flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>ankit@uranusstone.in</span>
              </a>
            </div>
            
            {/* Director 2 */}
            <div className="bg-surface-2 border border-line rounded overflow-hidden text-center p-8 group hover:border-blue transition-colors shadow-2xl relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-stone shadow-md relative bg-stone flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                <svg className="w-2/3 h-2/3 text-paper-dim opacity-40 z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-xl text-paper mb-1 block">Conformi Mukhim</h3>
              <p className="text-xs text-blue font-extrabold uppercase tracking-widest mb-3 block font-mono">Director</p>
              <p className="text-sm text-paper-dim leading-relaxed mb-6">Directs aggregate quarry extraction, crushing zones quality control, and SPCB compliance.</p>
              <a href="mailto:conformi@uranusstone.in" className="text-xs text-fog hover:text-blue transition-colors font-mono flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>conformi@uranusstone.in</span>
              </a>
            </div>
            
            {/* Director 3 */}
            <div className="bg-surface-2 border border-line rounded overflow-hidden text-center p-8 group hover:border-blue transition-colors shadow-2xl relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-stone shadow-md relative bg-stone flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                <svg className="w-2/3 h-2/3 text-paper-dim opacity-40 z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-xl text-paper mb-1 block">Shweta Mittal</h3>
              <p className="text-xs text-blue font-extrabold uppercase tracking-widest mb-3 block font-mono">Director</p>
              <p className="text-sm text-paper-dim leading-relaxed mb-6">Manages bulk B2B commercial client relations, highway supply tenders, and regulatory audits.</p>
              <a href="mailto:shweta@uranusstone.in" className="text-xs text-fog hover:text-blue transition-colors font-mono flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>shweta@uranusstone.in</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
