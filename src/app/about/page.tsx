import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Uranus Stone Products Limited",
  description: "Established aggregate, sand, and infrastructure materials manufacturing partner. Read company mission and leadership history.",
};

export default function AboutPage() {
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
            <span className="text-xs font-bold text-amber uppercase tracking-widest block font-mono">About Our Corporation</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mt-1">Decades of Industrial Heritage</h1>
            <p className="text-sm text-paper-dim mt-2">Providing the material foundations powering infrastructure expansion across Northeast India.</p>
          </div>
        </div>
      </section>

      {/* Company History/Bento */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 bg-surface border border-line p-12 rounded flex flex-col justify-between shadow-2xl relative">
              <span className="corner tl"></span>
              <span className="corner br"></span>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-amber">Global Standards in Local Infrastructure</h2>
                <p className="text-paper-dim text-sm leading-relaxed">
                  At Uranus, we don't just supply materials; we engineer certainty. Over the years, our operations have evolved to incorporate Metso VSI plant technology, high-efficiency crushing zone lines, and a massive supply chain fleet capable of dispatching aggregates daily. We ensure that every batch of aggregate and sand complies with modern national standards while minimizing environmental impacts.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-line mt-8">
                <div>
                  <span className="block text-3xl font-extrabold text-amber">50M+ Tons</span>
                  <span className="text-xs font-bold uppercase text-fog font-mono">Total Supplied</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-amber">3 Zones</span>
                  <span className="text-xs font-bold uppercase text-fog font-mono">Crushing Yards</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-amber">0.05%</span>
                  <span className="text-xs font-bold uppercase text-fog font-mono">Size Deviation</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 rounded overflow-hidden border border-line shadow-2xl relative group aspect-[4/3] lg:aspect-auto">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="/uranus website assets/10.png" alt="Uranus Heavy Machinery" />
              <div className="absolute inset-0 bg-ink/75 p-8 flex flex-col justify-end text-white">
                <span className="text-amber font-mono text-xs uppercase tracking-widest mb-1">Heavy Operations</span>
                <h3 className="font-bold text-lg text-paper">Plant Excavation Fleet</h3>
                <p className="text-xs text-paper-dim mt-1">Modern crawler excavators, heavy loaders, and transport lines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-surface-2 border-y border-line w-full">
        <div className="wrap grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-8 rounded border border-line shadow-2xl space-y-4">
            <span className="material-symbols-outlined text-amber text-4xl">precision_manufacturing</span>
            <h3 className="font-bold text-lg text-paper">Precision Engineering</h3>
            <p className="text-xs text-paper-dim leading-relaxed">We utilize mechanical screening grids that guarantee precise granule distributions, preventing structural compromise in concrete aggregates.</p>
          </div>
          <div className="bg-surface p-8 rounded border border-line shadow-2xl space-y-4">
            <span className="material-symbols-outlined text-moss text-4xl">eco</span>
            <h3 className="font-bold text-lg text-paper">Sustainable Growth</h3>
            <p className="text-xs text-paper-dim leading-relaxed">Pioneering green mining tech and closed-loop logistics to reduce dust emissions and optimize ecological balance.</p>
          </div>
          <div className="bg-surface p-8 rounded border border-line shadow-2xl space-y-4">
            <span className="material-symbols-outlined text-amber text-4xl">local_shipping</span>
            <h3 className="font-bold text-lg text-paper">Absolute Reliability</h3>
            <p className="text-xs text-paper-dim leading-relaxed">Our in-house logistics fleet guarantees round-the-clock aggregate deliveries even for highly demanding, fast-paced highway projects.</p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="eyebrow">Milestones</span>
            <h2 className="text-3xl font-extrabold text-paper">Corporate History</h2>
            <p className="text-paper-dim text-sm">Tracing our transition from a local crushing unit to a heavy-materials enterprise partner.</p>
          </div>
          <div className="relative space-y-12">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line hidden md:block"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 mb-6 md:mb-0 md:text-right">
                <h4 className="text-2xl font-extrabold text-amber font-mono">1998</h4>
                <h5 className="font-semibold text-sm uppercase text-paper-dim mt-1 font-mono">Quarry Commissioning</h5>
                <p className="text-xs text-paper-dim mt-2">Acquired our primary basalt quarry site and installed the first-generation jaw crushers.</p>
              </div>
              <div className="w-4 h-4 bg-amber rounded-full z-10 hidden md:block"></div>
              <div className="md:w-5/12"></div>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 order-2 md:order-1"></div>
              <div className="w-4 h-4 bg-amber rounded-full z-10 hidden md:block order-2"></div>
              <div className="md:w-5/12 mb-6 md:mb-0 order-1 md:order-3">
                <h4 className="text-2xl font-extrabold text-amber font-mono">2009</h4>
                <h5 className="font-semibold text-sm uppercase text-paper-dim mt-1 font-mono">Technological Upgrade</h5>
                <p className="text-xs text-paper-dim mt-2">Installed advanced Vertical Shaft Impactor (VSI) plants to produce high-durability Manufactured Sand (M-Sand).</p>
              </div>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 mb-6 md:mb-0 md:text-right">
                <h4 className="text-2xl font-extrabold text-amber font-mono">2020</h4>
                <h5 className="font-semibold text-sm uppercase text-paper-dim mt-1 font-mono">Enterprise Expansion</h5>
                <p className="text-xs text-paper-dim mt-2">Commissioned the third plant zone and established our dedicated B2B logistics truck fleet.</p>
              </div>
              <div className="w-4 h-4 bg-amber rounded-full z-10 hidden md:block"></div>
              <div className="md:w-5/12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-surface border-t border-line w-full">
        <div className="wrap">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="eyebrow">Executive Board</span>
            <h2 className="text-3xl font-extrabold text-paper">Leadership Team</h2>
            <p className="text-paper-dim text-sm">The experienced professionals guiding Uranus operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Director 1 */}
            <div className="bg-surface-2 border border-line rounded overflow-hidden text-center p-8 group hover:border-amber transition-colors shadow-2xl">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-stone shadow-md relative bg-stone">
                <img src="/uranus website assets/Ankit Mittal - Corporate photo.jpeg" alt="Ankit Mittal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-lg text-paper">Ankit Mittal</h3>
              <p className="text-xs text-amber font-bold uppercase tracking-widest mt-1 font-mono">Managing Director</p>
              <p className="text-xs text-paper-dim mt-3 leading-relaxed">Leads structural technology initiatives, Metso-machinery procurement, and financial operations.</p>
            </div>
            {/* Director 2 */}
            <div className="bg-surface-2 border border-line rounded overflow-hidden text-center p-8 group hover:border-amber transition-colors shadow-2xl">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-stone shadow-md relative bg-stone flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                <svg className="w-2/3 h-2/3 text-paper-dim opacity-40 z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-paper">Conformi Mukhim</h3>
              <p className="text-xs text-amber font-bold uppercase tracking-widest mt-1 font-mono">Director</p>
              <p className="text-xs text-paper-dim mt-3 leading-relaxed">Directs the main quarry, crushing plant zones, grading quality control, and safety protocols.</p>
            </div>
            {/* Director 3 */}
            <div className="bg-surface-2 border border-line rounded overflow-hidden text-center p-8 group hover:border-amber transition-colors shadow-2xl">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-stone shadow-md relative bg-stone flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                <svg className="w-2/3 h-2/3 text-paper-dim opacity-40 z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-paper">Shweta Mittal</h3>
              <p className="text-xs text-amber font-bold uppercase tracking-widest mt-1 font-mono">Director</p>
              <p className="text-xs text-paper-dim mt-3 leading-relaxed">Oversees bulk B2B client contracts, highway supply tenders, and government compliance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
