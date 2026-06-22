"use client";

import React, { useState } from "react";
import { useQuoteModal } from "@/components/Providers";

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

/* ─────────── Data types ─────────── */
interface Material {
  name: string;
  tag: string;
  image: string;
  description: string;
  apps: string[];
  slug: string;
  specs: {
    gradation: string;
    flakiness: string;
    absorption: string;
    crushing: string;
  };
}

interface TableRow {
  name: string;
  size: string;
  app: string;
  std: string;
}

export default function ProductsPage() {
  const { openModal } = useQuoteModal();
  const [searchTerm, setSearchTerm] = useState("");

  /* ─── Download handler ─── */
  const handleDownload = (productName: string) => {
    const fileContent =
      `URANUS STONE PRODUCTS LIMITED - TECHNICAL DATASHEET\n\n` +
      `Product: ${productName}\n` +
      `Crushing Zone: Metso VSI multi-stage processing\n` +
      `Compliance: IS 383:2016 Gradation curves zone limits compliant\n` +
      `Testing Parameters:\n` +
      `- Flakiness Index: < 14%\n` +
      `- Elongation Index: < 15%\n` +
      `- Crushing Value: < 16%\n` +
      `- Impact Value: < 12%\n` +
      `- Water Absorption: < 0.5%\n\n` +
      `For structural test certificates and bulk order pricing, contact: sales@uranusstone.in`;

    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent);
    link.download = `Uranus_Specs_${productName.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const materials: Material[] = [
    {
      name: "10mm Aggregate",
      tag: "RCC Structures",
      image: "/uranus website assets/aggregate_10mm.png",
      description:
        "Specifically processed basalt aggregates sorted using precision screening grids. Conforms strictly to mechanical strength targets for RCC columns and structural slabs.",
      apps: ["RCC Columns", "Concrete Slabs", "Precast Blocks"],
      slug: "10mm",
      specs: { gradation: "IS 383:2016", flakiness: "< 14%", absorption: "< 0.5%", crushing: "< 16%" },
    },
    {
      name: "20mm Aggregate",
      tag: "Heavy Foundations",
      image: "/uranus website assets/aggregate_20mm.png",
      description:
        "Premier concrete aggregate featuring exceptional cubic particles for optimum binder packing. Reduces cement voids for strong structures.",
      apps: ["High-rise Buildings", "Bridge Girders", "Heavy Foundations"],
      slug: "20mm",
      specs: { gradation: "IS 383:2016", flakiness: "< 12%", absorption: "< 0.5%", crushing: "< 15%" },
    },
    {
      name: "Manufactured Sand",
      tag: "Eco Friendly",
      image: "/uranus website assets/msand.png",
      description:
        "High-quality manufactured sand, crushed and washed with zero organic impurities. Perfect grading for masonry plasters.",
      apps: ["Masonry Mortar", "Wall Plastering", "Concrete Mixes"],
      slug: "msand",
      specs: { gradation: "IS 383 Zone II", flakiness: "N/A", absorption: "< 0.8%", crushing: "N/A" },
    },
    {
      name: "GSB (Sub-base)",
      tag: "Highway Base",
      image: "/uranus website assets/gsb.png",
      description:
        "MORTH specification compliant Granular Sub Base for highway base stabilization and heavy road pavement layers.",
      apps: ["Highway Subgrades", "Base Stabilization", "Structural Fill"],
      slug: "gsb",
      specs: { gradation: "MORTH Sec 400", flakiness: "< 18%", absorption: "< 1.2%", crushing: "< 24%" },
    },
  ];

  /* ─── Table data ─── */
  const tableRows: TableRow[] = [
    { name: "6mm Aggregate", size: "6mm (Fine)", app: "Pipe bedding, pre-cast blocks, surface plastering.", std: "IS 383:2016" },
    { name: "10mm Aggregate", size: "10mm", app: "RCC structural, concrete mixes, residential slabs.", std: "IS 383:2016" },
    { name: "20mm Aggregate", size: "20mm", app: "High-rises, bridge girders, heavy foundations.", std: "IS 383:2016" },
    { name: "40mm Aggregate", size: "40mm", app: "Sub-base roads, drainage filtration, foundations.", std: "IS 383:2016" },
    { name: "60mm Aggregate", size: "60mm", app: "Railway ballast, road subgrades, drainage layers.", std: "NHAI Specs" },
    { name: "M-Sand", size: "Fine (<4.75mm)", app: "Concrete structures, masonry plastering, filler.", std: "IS 383 Zone II" },
    { name: "GSB", size: "Mixed Graded", app: "Highway subgrades, load-bearing pavements.", std: "MORTH Sec 400" },
    { name: "Stone Dust", size: "Powder (<2.36mm)", app: "Tile jointing, road base binder, concrete blocks.", std: "IS 383" },
  ];

  const filteredRows = tableRows.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.app.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.std.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* ─── Spec metric labels ─── */
  const specLabels: { key: keyof Material["specs"]; label: string }[] = [
    { key: "gradation", label: "Grading Limit" },
    { key: "flakiness", label: "Flakiness" },
    { key: "absorption", label: "Absorption" },
    { key: "crushing", label: "Max Crushing" },
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
            <span className="eyebrow" style={{ display: "block", marginBottom: 18 }}>
              Material Catalog
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
              Calibrated Materials Catalog
            </h1>
            <p style={{ fontSize: 16, color: PAPER_DIM, lineHeight: 1.7, maxWidth: 540 }}>
              Graded aggregates, manufactured sand, and base layers conforming to national standards.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ SPECIFICATIONS TABLE ══════════ */}
      <section style={{ background: INK, padding: "80px 0" }}>
        <div className="wrap">
          {/* Header + Search */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 24,
              marginBottom: 40,
            }}
          >
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 12 }}>
                Specifications
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
                Material Gradation &amp; Sizing Matrix
              </h2>
              <p style={{ fontSize: 15, color: PAPER_DIM, margin: 0 }}>
                Review size parameters, structural targets, and primary applications for our core materials catalog.
              </p>
            </div>

            {/* Search input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: SURFACE,
                border: `1px solid ${LINE}`,
                borderRadius: 8,
                padding: "12px 16px",
                maxWidth: 480,
              }}
            >
              <span className="material-symbols-outlined" style={{ color: FOG, marginRight: 12, fontSize: 20 }}>
                search
              </span>
              <input
                type="text"
                placeholder="Filter materials or applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: PAPER,
                  fontSize: 14,
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={{
                    background: "none",
                    border: "none",
                    color: FOG,
                    cursor: "pointer",
                    fontSize: 12,
                    fontFamily: "monospace",
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <span className="corner tl" />
            <span className="corner br" />
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: SURFACE2 }}>
                    {["Product", "Size Range", "Primary Application", "Technical Standards"].map((heading) => (
                      <th
                        key={heading}
                        style={{
                          padding: "16px 20px",
                          fontSize: 13,
                          fontWeight: 700,
                          color: PAPER,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          borderBottom: `1px solid ${LINE}`,
                        }}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row) => (
                      <tr key={row.name}>
                        <td
                          style={{
                            padding: "16px 20px",
                            fontSize: 14,
                            fontWeight: 700,
                            color: PAPER,
                            borderBottom: `1px solid ${LINE}`,
                          }}
                        >
                          {row.name}
                        </td>
                        <td
                          style={{
                            padding: "16px 20px",
                            fontSize: 14,
                            color: PAPER_DIM,
                            borderBottom: `1px solid ${LINE}`,
                          }}
                        >
                          {row.size}
                        </td>
                        <td
                          style={{
                            padding: "16px 20px",
                            fontSize: 14,
                            color: PAPER_DIM,
                            borderBottom: `1px solid ${LINE}`,
                            lineHeight: 1.5,
                          }}
                        >
                          {row.app}
                        </td>
                        <td
                          style={{
                            padding: "16px 20px",
                            fontSize: 14,
                            color: BLUE,
                            fontWeight: 600,
                            borderBottom: `1px solid ${LINE}`,
                            fontFamily: "monospace",
                          }}
                        >
                          {row.std}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        style={{
                          padding: "48px 20px",
                          textAlign: "center",
                          color: FOG,
                          fontSize: 14,
                          fontFamily: "monospace",
                        }}
                      >
                        No matching products found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PRODUCT DETAIL CARDS ══════════ */}
      <section style={{ background: SURFACE, borderTop: `1px solid ${LINE}`, padding: "80px 0" }}>
        <div className="wrap">
          {/* Section header */}
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 12 }}>
              Data Sheets
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
              Detailed Product Profiles
            </h2>
            <p style={{ fontSize: 15, color: PAPER_DIM, margin: 0 }}>
              Select calibrated materials with precise laboratory-tested values.
            </p>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
            {materials.map((mat) => (
              <div
                key={mat.name}
                style={{
                  background: SURFACE2,
                  border: `1px solid ${LINE}`,
                  borderRadius: 20,
                  overflow: "hidden",
                  position: "relative",
                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 12px 36px rgba(0, 0, 0, 0.25)",
                }}
              >
                <span className="corner tl" />
                <span className="corner br" />

                {/* Image */}
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: 14,
                    border: `1px solid ${LINE}`,
                    background: STONE,
                    width: "100%",
                    height: 220,
                    position: "relative",
                  }}
                >
                  <img
                    src={mat.image}
                    alt={mat.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  {/* Tag on top of image for premium UI look */}
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      padding: "5px 12px",
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      borderRadius: 8,
                      background: "rgba(14, 17, 22, 0.85)",
                      backdropFilter: "blur(4px)",
                      color: BLUE,
                      border: `1px solid rgba(62, 130, 247, 0.3)`,
                    }}
                  >
                    {mat.tag}
                  </span>
                </div>

                {/* Details Container */}
                <div style={{ padding: "20px 12px 12px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    {/* Name */}
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: PAPER, margin: "0 0 10px", letterSpacing: "-0.02em" }}>{mat.name}</h3>

                    {/* Description */}
                    <p style={{ fontSize: 14, color: PAPER_DIM, lineHeight: 1.6, marginBottom: 20, minHeight: 68 }}>
                      {mat.description}
                    </p>

                    {/* Technical Specs Grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 12,
                        background: INK,
                        border: `1px solid ${LINE}`,
                        padding: 14,
                        borderRadius: 12,
                        marginBottom: 20,
                      }}
                    >
                      {specLabels.map((spec) => (
                        <div key={spec.key}>
                          <span
                            style={{
                              display: "block",
                              fontSize: 9,
                              fontWeight: 700,
                              color: FOG,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              fontFamily: "monospace",
                              marginBottom: 2,
                            }}
                          >
                            {spec.label}
                          </span>
                          <span
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              color: PAPER,
                              fontFamily: "monospace",
                            }}
                          >
                            {mat.specs[spec.key]}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Key Applications */}
                    <div style={{ marginBottom: 24 }}>
                      <span
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: PAPER,
                          letterSpacing: "0.08em",
                          fontFamily: "monospace",
                          marginBottom: 8,
                        }}
                      >
                        Key Applications
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {mat.apps.map((app) => (
                          <span
                            key={app}
                            style={{
                              padding: "4px 10px",
                              background: INK,
                              border: `1px solid ${LINE}`,
                              borderRadius: 6,
                              fontSize: 11,
                              fontWeight: 500,
                              color: PAPER_DIM,
                            }}
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div
                    style={{
                      paddingTop: 16,
                      borderTop: `1px solid ${LINE}`,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <button
                      onClick={() => openModal(mat.slug)}
                      className="btn btn-blue"
                      style={{ fontSize: 13, padding: "10px 16px", cursor: "pointer", width: "100%", borderRadius: 8, display: "flex", justifyContent: "center", gap: 6 }}
                    >
                      Request Quote
                      <span className="material-symbols-outlined" style={{ fontSize: 15 }}>
                        arrow_forward
                      </span>
                    </button>
                    <button
                      onClick={() => handleDownload(mat.name)}
                      className="btn btn-ghost"
                      style={{ fontSize: 13, padding: "10px 16px", cursor: "pointer", width: "100%", borderRadius: 8, display: "flex", justifyContent: "center", gap: 6 }}
                    >
                      Download Specs
                      <span className="material-symbols-outlined" style={{ fontSize: 15 }}>
                        download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
