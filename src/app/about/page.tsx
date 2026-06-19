import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | URANUS Materials Corporation",
  description: "Established aggregate, sand, and infrastructure materials manufacturing partner. Read company mission and leadership history.",
};

export default function AboutPage() {
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
            <span className="text-xs font-bold text-primary uppercase tracking-widest">About Our Corporation</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Decades of Industrial Heritage</h1>
            <p className="text-sm text-gray-300 mt-2">Providing the material foundations powering infrastructure expansion.</p>
          </div>
        </div>
      </section>

      {/* Company History/Bento */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 bg-white border border-gray-200 p-12 rounded flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Global Standards in Local Infrastructure</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                At URANUS, we don't just supply materials; we engineer certainty. Over the years, our operations have evolved to incorporate NABL-certified testing protocols, high-efficiency VSI plant technology, and a massive supply chain fleet capable of dispatching 15,000+ tons of graded aggregates daily. We ensure that every batch of aggregate and sand complies with modern national standards while minimizing environmental impacts.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-gray-200 mt-8">
              <div>
                <span className="block text-3xl font-extrabold text-primary">50M+ Tons</span>
                <span className="text-xs font-bold uppercase text-gray-400">Total Supplied</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-primary">3 Plants</span>
                <span className="text-xs font-bold uppercase text-gray-400">Crushing Yards</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-primary">0.05%</span>
                <span className="text-xs font-bold uppercase text-gray-400">Size Deviation</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 rounded overflow-hidden border border-gray-200 shadow-sm relative group aspect-[4/3] lg:aspect-auto">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="/uranus website assets/10.png" alt="Uranus Heavy Machinery" />
            <div className="absolute inset-0 bg-dark/60 opacity-85 p-8 flex flex-col justify-end text-white">
              <h3 className="font-bold text-lg">Heavy Operations</h3>
              <p className="text-xs text-gray-300">Modern Volvo and Caterpillar excavation fleet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-light border-y border-gray-200">
        <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded border border-gray-200 shadow-sm space-y-4">
            <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
            <h3 className="font-bold text-lg text-dark">Precision Engineering</h3>
            <p className="text-xs text-gray-600 leading-relaxed">We utilize mechanical screening grids that guarantee precise granule distributions, preventing structural compromise in concrete aggregates.</p>
          </div>
          <div className="bg-white p-8 rounded border border-gray-200 shadow-sm space-y-4">
            <span className="material-symbols-outlined text-accent text-4xl">eco</span>
            <h3 className="font-bold text-lg text-dark">Sustainable Growth</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Pioneering green mining tech and closed-loop logistics to reduce dust emissions and optimize ecological balance.</p>
          </div>
          <div className="bg-white p-8 rounded border border-gray-200 shadow-sm space-y-4">
            <span className="material-symbols-outlined text-primary text-4xl">local_shipping</span>
            <h3 className="font-bold text-lg text-dark">Absolute Reliability</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Our in-house logistics fleet guarantees round-the-clock aggregate deliveries even for highly demanding, fast-paced highway projects.</p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl font-extrabold text-dark">Corporate Milestones</h2>
          <p className="text-gray-600 text-sm">Tracing our transition from a local crushing unit to a heavy-materials enterprise partner.</p>
        </div>
        <div className="relative space-y-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-5/12 mb-6 md:mb-0 md:text-right">
              <h4 className="text-2xl font-extrabold text-primary">1998</h4>
              <h5 className="font-semibold text-sm uppercase text-gray-400 mt-1">Quarry Commissioning</h5>
              <p className="text-xs text-gray-600 mt-2">Acquired our primary basalt quarry site and installed the first-generation jaw crushers.</p>
            </div>
            <div className="w-4 h-4 bg-primary rounded-full z-10 hidden md:block"></div>
            <div className="md:w-5/12"></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-5/12 order-2 md:order-1"></div>
            <div className="w-4 h-4 bg-primary rounded-full z-10 hidden md:block order-2"></div>
            <div className="md:w-5/12 mb-6 md:mb-0 order-1 md:order-3">
              <h4 className="text-2xl font-extrabold text-primary">2009</h4>
              <h5 className="font-semibold text-sm uppercase text-gray-400 mt-1">Technological Upgrade</h5>
              <p className="text-xs text-gray-600 mt-2">Installed advanced Vertical Shaft Impactor (VSI) plants to produce high-durability Manufactured Sand (M-Sand).</p>
            </div>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-5/12 mb-6 md:mb-0 md:text-right">
              <h4 className="text-2xl font-extrabold text-primary">2020</h4>
              <h5 className="font-semibold text-sm uppercase text-gray-400 mt-1">Enterprise Expansion</h5>
              <p className="text-xs text-gray-600 mt-2">Commissioned the third plant zone and established our dedicated B2B logistics truck fleet.</p>
            </div>
            <div className="w-4 h-4 bg-primary rounded-full z-10 hidden md:block"></div>
            <div className="md:w-5/12"></div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-light border-t border-gray-200">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">Executive Board</span>
            <h2 className="text-3xl font-extrabold text-dark">Leadership Team</h2>
            <p className="text-gray-600 text-sm">The experienced professionals guiding Uranus operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Director 1 */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden text-center p-8 group hover:border-primary transition-colors shadow-sm">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md relative bg-gray-100">
                <img src="/uranus website assets/Ankit Mittal - Corporate photo.jpeg" alt="Ankit Mittal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-lg text-dark">Ankit Mittal</h3>
              <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Managing Director</p>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">Leads structural technology initiatives, automated machinery procurement, and financial operations.</p>
            </div>
            {/* Director 2 */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden text-center p-8 group hover:border-primary transition-colors shadow-sm">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md relative bg-dark flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,95,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,95,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                <svg className="w-2/3 h-2/3 text-slate-500 z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-dark">Conformi Mukhim</h3>
              <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Director</p>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">Directs the main quarry, crushing plants, grading quality control, and safety protocols.</p>
            </div>
            {/* Director 3 */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden text-center p-8 group hover:border-primary transition-colors shadow-sm">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md relative bg-dark flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,95,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,95,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                <svg className="w-2/3 h-2/3 text-slate-500 z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-dark">Shweta Mittal</h3>
              <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Director</p>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">Oversees bulk B2B client contracts, highway supply tenders, and government compliance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
