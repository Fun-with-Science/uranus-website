"use client";

import React, { useState } from "react";

// Theme and styling constants
const BLUE = "#3E82F7";
const INK = "#0E1116";
const SURFACE = "#14181F";
const SURFACE2 = "#1B212B";
const LINE = "rgba(255, 255, 255, 0.10)";
const LINE_STRONG = "rgba(255, 255, 255, 0.18)";
const FOG = "#98A2AE";
const PAPER = "#ECEEF1";
const PAPER_DIM = "#C3C9D1";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  const filters = [
    { id: "all", label: "All Photos" },
    { id: "mining", label: "Mining Operations" },
    { id: "crusher", label: "Crusher Plant" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "equipment", label: "Equipment" },
    { id: "products", label: "Products" },
  ];

  const galleryItems = [
    {
      category: "mining",
      image: "/uranus website assets/pexels-jetkerim-16567021.jpg.jpeg",
      title: "Deep Quarry Excavation",
      tag: "Mining Operations"
    },
    {
      category: "crusher",
      image: "/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg",
      title: "Metso Primary Crushing Unit",
      tag: "Crusher Plant"
    },
    {
      category: "infrastructure",
      image: "/uranus website assets/duhb.png",
      title: "Material Conveyor Systems",
      tag: "Infrastructure"
    },
    {
      category: "equipment",
      image: "/uranus website assets/10.png",
      title: "Heavy Excavator Loading",
      tag: "Equipment"
    },
    {
      category: "products",
      image: "/uranus website assets/3.png",
      title: "Graded Aggregate Stockyard",
      tag: "Products"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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
            <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: 12, fontFamily: "var(--font-ibm-mono), monospace" }}>Visual Portfolio</span>
            <h1 className="text-paper" style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>Operational Media Gallery</h1>
            <p style={{ fontSize: 16, color: PAPER_DIM, lineHeight: 1.6, margin: 0 }}>A photographic showcase of our plants, quarry excavation, and materials catalog.</p>
          </div>
        </div>
      </section>

      {/* Interactive Filterable Gallery */}
      <section style={{ padding: "80px 0", background: INK }}>
        <div className="wrap">
          {/* Filters */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginBottom: 48 }}>
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              const isHovered = hoveredFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  onMouseEnter={() => setHoveredFilter(filter.id)}
                  onMouseLeave={() => setHoveredFilter(null)}
                  style={{
                    padding: "10px 22px",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    border: `1.5px solid ${isActive ? BLUE : LINE}`,
                    background: isActive ? BLUE : "transparent",
                    color: isActive ? INK : (isHovered ? PAPER : PAPER_DIM),
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    transform: isHovered && !isActive ? "translateY(-1px)" : "none",
                  }}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
          
          {/* Gallery Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                style={{ 
                  position: "relative", 
                  overflow: "hidden", 
                  borderRadius: 16, 
                  border: `1.5px solid ${LINE}`, 
                  background: SURFACE2, 
                  padding: 8, 
                  boxShadow: "0 12px 36px rgba(0, 0, 0, 0.25)",
                  aspectRatio: "4/3",
                }}
              >
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: 10 }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover", 
                      transition: "transform 0.5s ease" 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                  />
                  <div 
                    style={{ 
                      position: "absolute", 
                      inset: 0, 
                      background: "linear-gradient(to bottom, rgba(14,17,22,0.1) 40%, rgba(14,17,22,0.92) 100%)", 
                      padding: "24px 20px", 
                      display: "flex", 
                      flexDirection: "column", 
                      justifyContent: "end" 
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 11, textTransform: "uppercase", fontFamily: "var(--font-ibm-mono), monospace", letterSpacing: "0.06em", color: BLUE, marginBottom: 4 }}>
                      {item.tag}
                    </span>
                    <h3 style={{ fontWeight: 800, fontSize: 16, color: PAPER, margin: 0, letterSpacing: "-0.01em" }}>
                      {item.title}
                    </h3>
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
