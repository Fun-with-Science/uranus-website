import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Uranus Stone Products Limited",
  description: "Read standard B2B aggregate procurement terms, weighbridge verification rules, and IS 383 tolerances.",
};

// Theme and styling constants
const BLUE = "#3E82F7";
const INK = "#0E1116";
const SURFACE = "#14181F";
const LINE = "rgba(255, 255, 255, 0.10)";
const LINE_STRONG = "rgba(255, 255, 255, 0.18)";
const PAPER = "#ECEEF1";
const PAPER_DIM = "#C3C9D1";

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
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,17,22,0.5), rgba(14,17,22,0.85) 70%, rgba(14,17,22,0.98))" }} />
        </div>
        <div className="relative z-10 wrap w-full">
          <div style={{ maxWidth: 768, borderLeft: `4px solid ${BLUE}`, paddingLeft: 40 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: 12, fontFamily: "var(--font-ibm-mono), monospace" }}>Legal</span>
            <h1 className="text-paper" style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>Terms &amp; Conditions</h1>
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
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>1. Scope of Material Contracts</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  All purchase orders for aggregates, Manufactured Sand (M-Sand), and Granular Sub Base (GSB) are governed by these Terms and Conditions unless otherwise specified in a signed bilateral procurement contract.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>2. Size &amp; Gradation Tolerances</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  Materials are crushed and sorted to comply with Bureau of Indian Standards (IS 383:2016) gradation zones. Natural size distribution variations within allowable standard limits do not constitute product defects. Contractors are responsible for testing compatibility before mixing concrete.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>3. Weighbridge &amp; Quantity Logging</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  All dispatch weights are logged at the plant's calibrated electronic weighbridges. The tonnage recorded on the weighbridge slip issued at dispatch constitutes the official delivery quantity. Any dispute regarding delivery weight must be logged in writing before the truck unloads at the delivery site.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>4. Delivery Site Access</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  Contractors must ensure safe, clear, and load-bearing road access for our heavy tipper fleet to enter the delivery point. Uranus reserves the right to suspend deliveries if site road conditions present safety risks to dump trucks or operator personnel.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: PAPER, letterSpacing: "-0.01em", marginBottom: 12 }}>5. Corporate Details</h2>
                <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.75, margin: 0 }}>
                  Uranus Stone Products Limited is registered in Ri-Bhoi, Meghalaya. Correspondence regarding tenders or billing should be addressed to <a href="mailto:sales@uranusstone.in" style={{ color: BLUE, fontWeight: 600, textDecoration: "none" }}>sales@uranusstone.in</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
