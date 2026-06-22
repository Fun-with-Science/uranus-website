import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Uranus Stone Products Limited",
  description: "Read standard B2B aggregate procurement terms, weighbridge verification rules, and IS 383 tolerances.",
};

export default function TermsPage() {
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
            <span className="text-xs font-bold text-blue uppercase tracking-widest block font-mono mb-3">Legal</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mb-4">Terms &amp; Conditions</h1>
            <p className="text-base text-paper-dim">Effective Date: June 22, 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="max-w-4xl bg-surface border border-line p-10 rounded shadow-2xl relative">
            <span className="corner tl"></span>
            <span className="corner br"></span>
            
            <div className="space-y-8 text-base text-paper-dim leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-paper mb-3">1. Scope of Material Contracts</h2>
                <p>
                  All purchase orders for aggregates, Manufactured Sand (M-Sand), and Granular Sub Base (GSB) are governed by these Terms and Conditions unless otherwise specified in a signed bilateral procurement contract.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-paper mb-3">2. Size &amp; Gradation Tolerances</h2>
                <p>
                  Materials are crushed and sorted to comply with Bureau of Indian Standards (IS 383:2016) gradation zones. Natural size distribution variations within allowable standard limits do not constitute product defects. Contractors are responsible for testing compatibility before mixing concrete.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-paper mb-3">3. Weighbridge &amp; Quantity Logging</h2>
                <p>
                  All dispatch weights are logged at the plant's calibrated electronic weighbridges. The tonnage recorded on the weighbridge slip issued at dispatch constitutes the official delivery quantity. Any dispute regarding delivery weight must be logged in writing before the truck unloads at the delivery site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-paper mb-3">4. Delivery Site Access</h2>
                <p>
                  Contractors must ensure safe, clear, and load-bearing road access for our heavy tipper fleet to enter the delivery point. Uranus reserves the right to suspend deliveries if site road conditions present safety risks to dump trucks or operator personnel.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-paper mb-3">5. Corporate Details</h2>
                <p>
                  Uranus Stone Products Limited is registered in Ri-Bhoi, Meghalaya. Correspondence regarding tenders or billing should be addressed to <a href="mailto:sales@uranusstone.in" className="text-blue hover:underline">sales@uranusstone.in</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
