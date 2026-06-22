import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Uranus Stone Products Limited",
  description: "Learn how Uranus Stone Products Limited handles corporate inquiry details and B2B material contract logs.",
};

// Theme and styling constants
const BLUE = "#3E82F7";
const INK = "#0E1116";
const SURFACE = "#14181F";
const LINE = "rgba(255, 255, 255, 0.10)";
const LINE_STRONG = "rgba(255, 255, 255, 0.18)";
const PAPER = "#ECEEF1";
const PAPER_DIM = "#C3C9D1";

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
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,17,22,0.5), rgba(14,17,22,0.85) 70%, rgba(14,17,22,0.98))" }} />
        </div>
        <div className="relative z-10 wrap w-full">
          <div style={{ maxWidth: 768, borderLeft: `4px solid ${BLUE}`, paddingLeft: 40 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: 12, fontFamily: "var(--font-ibm-mono), monospace" }}>Legal</span>
            <h1 className="text-paper" style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>Privacy Policy</h1>
            <p style={{ fontSize: 14, color: PAPER_DIM, margin: 0, opacity: 0.8 }}>Effective Date: June 22, 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "80px 0", background: INK }}>
        <div className="wrap">
          <div 
            style={{
              position: "relative",
              maxWidth: 840,
              margin: "0 auto",
              background: SURFACE,
              border: `1.5px solid ${LINE_STRONG}`,
              padding: "48px 40px",
              borderRadius: 20,
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column",
              gap: 36,
            }}
          >
            <span className="corner tl"></span>
            <span className="corner br"></span>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>1. Information Collection</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  Uranus Stone Products Limited collects corporate contact details, company names, emails, phone numbers, and estimated material tonnage requirements submitted through our B2B quotation forms. We do not solicit personal financial numbers or credit card details through this site.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>2. How We Use Collected Data</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  Any corporate information collected is strictly utilized to process bulk aggregate orders, draft supply tenders, schedule fleet deliveries from our Meghalaya yards, and compile laboratory gradation curves. We do not sell or lease corporate lists to third-party marketing companies.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>3. Data Security &amp; Storage</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  All quotation records and dispatch instructions are stored in secured database environments protected by industry-standard encryption protocols. Access to this data is strictly limited to authorized sales engineers, dispatch managers, and compliance auditors.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>4. Sharing with Logistics Partners</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  To assure successful direct-to-site dump truck delivery, we share construction site coordinates, point of contact names, and delivery phone numbers with our dispatch coordinators and transit fleet operators.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>5. Corporate Contacts</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  For questions regarding our privacy rules, or to request removal of your company contact data from our system, reach out to: <a href="mailto:hello@uranusstone.in" style={{ color: BLUE, fontWeight: 600, textDecoration: "none" }}>hello@uranusstone.in</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
