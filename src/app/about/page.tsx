import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Corporation | Uranus Stone Products Limited",
  description: "Established aggregate, sand, and infrastructure materials manufacturing partner. Read company mission, plant capacities, and leadership history.",
};

/* ─────────── Style constants ─────────── */
const BLUE      = "#3E82F7";
const INK       = "#0E1116";
const SURFACE   = "#14181F";
const SURFACE2  = "#1B212B";
const STONE     = "#2A313C";
const LINE      = "rgba(255,255,255,0.10)";
const FOG       = "#98A2AE";
const PAPER     = "#ECEEF1";
const PAPER_DIM = "#C3C9D1";

export default function AboutPage() {
  const timelineEvents = [
    { year: "1998", title: "Quarry Commissioning", desc: "Acquired our primary basalt quarry site in Ri-Bhoi district and installed first-generation jaw crushers to feed regional road building." },
    { year: "2009", title: "Technological Upgrade", desc: "Installed advanced Vertical Shaft Impactor (VSI) plants to produce high-durability Manufactured Sand (M-Sand) compliant with IS 383." },
    { year: "2020", title: "Enterprise Expansion", desc: "Commissioned a third crushing plant zone and established an in-house GPS-tracked heavy dumper logistics fleet for direct-to-site delivery." }
  ];

  const leaders = [
    {
      name: "Ankit Mittal",
      role: "Managing Director",
      desc: "Leads structural technology initiatives, plant equipment procurement, and corporate finance.",
      email: "ankit@uranusstone.in",
      img: "/uranus website assets/Ankit Mittal - Corporate photo.jpeg",
    },
    {
      name: "Conformi Mukhim",
      role: "Director",
      desc: "Directs aggregate quarry extraction, crushing zones quality control, and SPCB compliance.",
      email: "conformi@uranusstone.in",
      img: null,
    },
    {
      name: "Shweta Mittal",
      role: "Director",
      desc: "Manages bulk B2B commercial client relations, highway supply tenders, and regulatory audits.",
      email: "shweta@uranusstone.in",
      img: null,
    },
  ];

  return (
    <div>
      {/* ══════════ HERO BANNER ══════════ */}
      <section className="page-banner">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg')" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,17,22,0.5), rgba(14,17,22,0.85) 70%, rgba(14,17,22,0.98))" }} />
        </div>
        <div className="relative z-10 wrap w-full">
          <div style={{ maxWidth: 680 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: 18 }}>About Our Corporation</span>
            <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 900, color: PAPER, lineHeight: 1.1, marginBottom: 20 }}>
              Decades of Industrial Heritage
            </h1>
            <p style={{ fontSize: 16, color: PAPER_DIM, lineHeight: 1.7, maxWidth: 540 }}>
              Providing the material foundations powering highway and infrastructure expansion across Northeast India.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ CORPORATE PROFILE ══════════ */}
      <section style={{ background: INK, padding: "80px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {/* Main content card */}
            <div style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 16, padding: "40px 36px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
              <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Corporate Profile</span>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: PAPER, lineHeight: 1.15, marginBottom: 20 }}>
                Global Standards in Local Infrastructure
              </h2>
              <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.7, marginBottom: 32 }}>
                At Uranus Stone Products Limited, we don&apos;t just supply materials; we engineer certainty. Over the years, our operations have evolved to incorporate Metso VSI plant technology, high-efficiency crushing zone lines, and a massive supply chain fleet capable of dispatching aggregates daily. We ensure that every batch of aggregate and sand complies with modern national standards while minimizing environmental impacts.
              </p>

              {/* Stats row */}
              <div style={{ borderTop: `1px solid ${LINE}`, paddingTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
                {[
                  { num: "5M+ Tons", label: "Total Supplied" },
                  { num: "3 Zones", label: "Crushing Yards" },
                  { num: "0.05%", label: "Size Deviation" },
                ].map((s) => (
                  <div key={s.label}>
                    <span style={{ display: "block", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: BLUE, fontFamily: "monospace" }}>{s.num}</span>
                    <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: FOG, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 4 }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image card */}
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: `1px solid ${LINE}`, minHeight: 320 }}>
              <img
                src="/uranus website assets/10.png"
                alt="Uranus Heavy Machinery"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,17,22,0.9) 0%, rgba(14,17,22,0.3) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 28px" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 6 }}>Heavy Operations</span>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: PAPER, marginBottom: 4 }}>Plant Excavation Fleet</h3>
                <p style={{ fontSize: 14, color: PAPER_DIM, margin: 0 }}>Modern crawler excavators, heavy loaders, and transport lines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ STRATEGIC LOCATION ══════════ */}
      <section style={{ background: SURFACE2, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, padding: "80px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "center" }}>
            {/* Text */}
            <div>
              <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Plant Capacity</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: PAPER, lineHeight: 1.15, marginBottom: 20 }}>
                Strategic Location &amp; Extraction
              </h2>
              <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.7, marginBottom: 16 }}>
                Our plant is located in Nongpoh, Ri-Bhoi district, Meghalaya, positioned strategically along the Guwahati-Shillong corridor. This location permits direct B2B supply logistics for major highway tenders and commercial concrete batching plants.
              </p>
              <p style={{ fontSize: 15, color: PAPER_DIM, lineHeight: 1.7, marginBottom: 28 }}>
                Operating with certified mining leases, our quarry yields premium-grade basalt rock, characterized by high compressive strength and low moisture absorption rates, making it the preferred raw material for highway concrete.
              </p>

              {/* Feature badges */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { icon: "location_on", text: "Guwahati-Shillong Corridor" },
                  { icon: "verified", text: "Certified Mining Lease" },
                ].map((f) => (
                  <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: PAPER_DIM }}>
                    <span className="material-symbols-outlined" style={{ color: BLUE, fontSize: 20 }}>{f.icon}</span>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${LINE}`, padding: 8, background: SURFACE }}>
              <img
                src="/uranus website assets/pexels-jetkerim-16567021.jpg.jpeg"
                alt="Uranus Basalt Quarry Site"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 10, display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CORPORATE TIMELINE ══════════ */}
      <section style={{ background: INK, padding: "80px 0" }}>
        <div className="wrap">
          {/* Section header */}
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
            <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Milestones</span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: PAPER, lineHeight: 1.15, marginBottom: 12 }}>Corporate Timeline</h2>
            <p style={{ fontSize: 15, color: PAPER_DIM, margin: 0 }}>Tracing our evolution from regional quarry operations to an enterprise materials partner.</p>
          </div>

          {/* Timeline cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
            {timelineEvents.map((evt) => (
              <div key={evt.year} style={{ background: SURFACE, border: `1px solid ${LINE}`, borderRadius: 16, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
                {/* Blue top accent bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: BLUE }} />
                <span style={{ fontSize: 32, fontWeight: 900, color: BLUE, fontFamily: "monospace", display: "block", marginBottom: 8 }}>{evt.year}</span>
                <h4 style={{ fontSize: 18, fontWeight: 700, color: PAPER, marginBottom: 10, letterSpacing: "0.01em" }}>{evt.title}</h4>
                <p style={{ fontSize: 14, color: PAPER_DIM, lineHeight: 1.65, margin: 0 }}>{evt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ LEADERSHIP TEAM ══════════ */}
      <section style={{ background: SURFACE, borderTop: `1px solid ${LINE}`, padding: "80px 0" }}>
        <div className="wrap">
          {/* Section header */}
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
            <span className="eyebrow" style={{ marginBottom: 12, display: "block" }}>Executive Board</span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: PAPER, lineHeight: 1.15, marginBottom: 12 }}>Leadership Team</h2>
            <p style={{ fontSize: 15, color: PAPER_DIM, margin: 0 }}>The experienced board members directing Uranus operations and compliance.</p>
          </div>

          {/* Leader cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {leaders.map((leader) => (
              <div key={leader.name} style={{ background: SURFACE2, border: `1px solid ${LINE}`, borderRadius: 16, padding: "36px 28px", textAlign: "center", transition: "border-color 0.3s", overflow: "hidden" }}>
                {/* Avatar */}
                <div style={{ width: 120, height: 120, borderRadius: "50%", margin: "0 auto 20px", border: `4px solid ${STONE}`, overflow: "hidden", background: STONE, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {leader.img ? (
                    <img src={leader.img} alt={leader.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill={FOG} opacity={0.4}>
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  )}
                </div>

                {/* Name & role */}
                <h3 style={{ fontSize: 19, fontWeight: 800, color: PAPER, marginBottom: 4 }}>{leader.name}</h3>
                <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>{leader.role}</span>
                <p style={{ fontSize: 14, color: PAPER_DIM, lineHeight: 1.6, marginBottom: 20 }}>{leader.desc}</p>

                {/* Email link */}
                <a href={`mailto:${leader.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: FOG, textDecoration: "none" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span>
                  <span>{leader.email}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRUST STRIP ══════════ */}
      <section style={{ background: INK, borderTop: `1px solid ${LINE}`, padding: "48px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
            {[
              { icon: "precision_manufacturing", num: "8", label: "Product Grades" },
              { icon: "factory", num: "3", label: "Crushing Zones" },
              { icon: "local_shipping", num: "500+", label: "Tonnes / Day" },
              { icon: "schedule", num: "24 hrs", label: "Quote Turnaround" },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(62,130,247,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ color: BLUE, fontSize: 22 }}>{stat.icon}</span>
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: PAPER }}>{stat.num}</div>
                  <div style={{ fontSize: 12, color: FOG }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
