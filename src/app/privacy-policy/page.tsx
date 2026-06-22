import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Uranus Stone Products Limited",
  description: "Learn how Uranus Stone Products Limited handles corporate inquiry details and B2B material contract logs.",
};

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mb-4">Privacy Policy</h1>
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
                <h2 className="text-2xl font-bold text-paper mb-3">1. Information Collection</h2>
                <p>
                  Uranus Stone Products Limited collects corporate contact details, company names, emails, phone numbers, and estimated material tonnage requirements submitted through our B2B quotation forms. We do not solicit personal financial numbers or credit card details through this site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-paper mb-3">2. How We Use Collected Data</h2>
                <p>
                  Any corporate information collected is strictly utilized to process bulk aggregate orders, draft supply tenders, schedule fleet deliveries from our Meghalaya yards, and compile laboratory gradation curves. We do not sell or lease corporate lists to third-party marketing companies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-paper mb-3">3. Data Security &amp; Storage</h2>
                <p>
                  All quotation records and dispatch instructions are stored in secured database environments protected by industry-standard encryption protocols. Access to this data is strictly limited to authorized sales engineers, dispatch managers, and compliance auditors.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-paper mb-3">4. Sharing with Logistics Partners</h2>
                <p>
                  To assure successful direct-to-site dump truck delivery, we share construction site coordinates, point of contact names, and delivery phone numbers with our dispatch coordinators and transit fleet operators.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-paper mb-3">5. Corporate Contacts</h2>
                <p>
                  For questions regarding our privacy rules, or to request removal of your company contact data from our system, reach out to: <a href="mailto:hello@uranusstone.in" className="text-blue hover:underline">hello@uranusstone.in</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
