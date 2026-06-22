import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Environmental Compliance & ESG | Uranus Stone Products Limited",
  description:
    "Review our environmental clearances, SPCB Consent to Operate, dry fog dust mitigation, zero liquid discharge water filters, and slope reclamation.",
};

/* ─────────── Style constants ─────────── */
const BLUE = "#3E82F7";
const INK = "#0E1116";
const SURFACE = "#14181F";
const SURFACE2 = "#1B212B";
const LINE = "rgba(255,255,255,0.10)";
const FOG = "#98A2AE";
const PAPER = "#ECEEF1";
const PAPER_DIM = "#C3C9D1";

/* ─────────── Data ─────────── */
const metrics = [
  { value: "100%", label: "Water Recycled (ZLD)" },
  { value: "< 75 dB", label: "Noise CPCB Compliant" },
  { value: "Active", label: "SPCB CTO Approved" },
  { value: "10k+", label: "Eco Belt Native Trees" },
];

const complianceCards = [
  {
    title: "Air Act Consent",
    text: "Active consent issued under the Air (Prevention and Control of Pollution) Act, 1981. All crushing zones are monitored for ambient air quality through continuous RSPM and PM₁₀ measurement stations.",
  },
  {
    title: "Water Act Consent",
    text: "Active consent under the Water (Prevention and Control of Pollution) Act, 1974. Zero Liquid Discharge infrastructure ensures no industrial effluent is released into natural water bodies.",
  },
  {
    title: "ISO 14001:2015 Environmental System",
    text: "Our environmental management system is aligned with ISO 14001:2015 standards, covering risk assessment, continual improvement objectives, and internal audit cycles for quarry and processing operations.",
    fullWidth: true,
  },
];

const pillars = [
  {
    icon: "cloud_queue",
    title: "Air Quality & Dry Fog Engineering",
    desc: "Fine stone dust is mitigated at the source. All crushing zones, screens, and conveyor discharge headers are enclosed and equipped with high-pressure dry fogging nozzles emitting water droplets matching dust particle sizes (1–10 microns).",
    tags: ["10-Micron Fog Nozzles", "Windbreaker Enclosures"],
  },
  {
    icon: "opacity",
    title: "Closed-Loop Silt Filtration (ZLD)",
    desc: "Our sand washing and dust suppression lines connect to multi-stage silt sedimentation ponds. Wastewater undergoes chemical flocculation and filtration, recycling 100% of process water under a strict Zero Liquid Discharge policy.",
    tags: ["100% Recycled Water", "Silt Settlement Tanks"],
  },
  {
    icon: "landscape",
    title: "Mine Slope Terracing & Topsoil Preservation",
    desc: "We practice systematic contour benching and terracing in all quarry operations. Before mining, topsoil is preserved separately in stockbanks. Exhausted benches are refilled with overburden and planted with native tree species.",
    tags: ["Quarry Bench Terracing", "Topsoil Stacking"],
  },
  {
    icon: "monitoring",
    title: "Controlled Blasting & Vibration Tracking",
    desc: "Advanced controlled blasting uses electronic delay detonators to split blast energy into milliseconds, minimizing ground vibrations. Every blast is monitored using digital seismographs to document DGMS peak particle velocity compliance.",
    tags: ["Electronic Delay Detonators", "PPV Seismograph Logging"],
  },
];

export default function SustainabilityPage() {
  return (
    <div>
      {/* ══════════ HERO BANNER ══════════ */}
      <section className="page-banner">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg')",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,17,22,0.5), rgba(14,17,22,0.85) 70%, rgba(14,17,22,0.98))",
            }}
          />
        </div>
        <div className="relative z-10 wrap w-full">
          <div style={{ maxWidth: 680 }}>
            <span className="eyebrow" style={{ marginBottom: 18, display: "block" }}>
              ESG &amp; Compliance
            </span>
            <h1
              style={{
                fontSize: "clamp(30px, 5vw, 48px)",
                fontWeight: 900,
                color: PAPER,
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Environmental Stewardship
            </h1>
            <p
              style={{
                fontSize: 16,
                color: PAPER_DIM,
                lineHeight: 1.7,
                maxWidth: 540,
              }}
            >
              Pioneering responsible mining, SPCB compliance, and low-emission
              aggregate processing.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ ESG METRICS STRIP ══════════ */}
      <section
        style={{
          background: SURFACE2,
          borderBottom: `1px solid ${LINE}`,
          padding: "48px 0",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 32,
            }}
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                style={{ borderLeft: `2px solid ${BLUE}`, paddingLeft: 20 }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: 28,
                    fontWeight: 800,
                    color: BLUE,
                    fontFamily: "monospace",
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 700,
                    color: FOG,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: 8,
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMPLIANCE CERTIFICATES ══════════ */}
      <section style={{ background: INK, padding: "80px 0" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
              alignItems: "start",
            }}
          >
            {/* Left column — text */}
            <div>
              <span
                className="eyebrow"
                style={{ marginBottom: 12, display: "block" }}
              >
                Certifications
              </span>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 800,
                  color: PAPER,
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Approved Environmental Clearances
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: PAPER_DIM,
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                Every phase of our quarry and crushing operations is governed by
                active environmental clearances issued by the State Environment
                Impact Assessment Authority (SEIAA) and the Ministry of
                Environment, Forest and Climate Change (MoEFCC). These clearances
                mandate stringent conditions on air emissions, noise levels, water
                discharge, and mine-closure rehabilitation.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: PAPER_DIM,
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Our Consent to Operate (CTO) from the State Pollution Control
                Board (SPCB) is renewed periodically and covers operations under
                both the Air Act and Water Act. Compliance reports are submitted
                quarterly and are subject to third-party environmental audits.
              </p>

              {/* Badge pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["SEIAA / MoEFCC Cleared", "SPCB CTO Active"].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      display: "inline-block",
                      padding: "8px 16px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 700,
                      color: BLUE,
                      background: "rgba(62,130,247,0.1)",
                      border: `1px solid rgba(62,130,247,0.25)`,
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column — cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {complianceCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: SURFACE,
                    border: `1px solid ${LINE}`,
                    borderRadius: 14,
                    padding: "28px 24px",
                    gridColumn: card.fullWidth ? "1 / -1" : undefined,
                  }}
                >
                  <h4
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: PAPER,
                      marginBottom: 10,
                    }}
                  >
                    {card.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 14,
                      color: PAPER_DIM,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ESG ENGINEERING PILLARS ══════════ */}
      <section
        style={{
          background: SURFACE,
          borderTop: `1px solid ${LINE}`,
          padding: "80px 0",
        }}
      >
        <div className="wrap">
          {/* Section header */}
          <div
            style={{
              textAlign: "center",
              maxWidth: 640,
              margin: "0 auto 56px",
            }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: 12, display: "block" }}
            >
              Engineering Pillars
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 800,
                color: PAPER,
                lineHeight: 1.15,
                marginBottom: 12,
              }}
            >
              ESG Engineering Pillars
            </h2>
            <p style={{ fontSize: 15, color: PAPER_DIM, margin: 0 }}>
              Four integrated engineering systems that minimise environmental
              impact across our quarry and processing operations.
            </p>
          </div>

          {/* 2×2 Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: SURFACE2,
                  border: `1px solid ${LINE}`,
                  borderRadius: 16,
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: BLUE, fontSize: 36, marginBottom: 20 }}
                >
                  {p.icon}
                </span>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: PAPER,
                    marginBottom: 14,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: PAPER_DIM,
                    lineHeight: 1.65,
                    marginBottom: 20,
                    flexGrow: 1,
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        display: "inline-block",
                        padding: "6px 14px",
                        borderRadius: 999,
                        fontSize: 11,
                        fontWeight: 700,
                        color: FOG,
                        background: "rgba(255,255,255,0.05)",
                        border: `1px solid ${LINE}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <CtaBlock />
    </div>
  );
}
