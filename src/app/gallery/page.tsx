"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Photos" },
    { id: "mining", label: "Mining Operations" },
    { id: "crusher", label: "Crusher Plant" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "equipment", label: "Equipment" },
    { id: "sustainability", label: "Sustainability" },
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
      category: "sustainability",
      image: "/uranus website assets/8.png",
      title: "Afforestation & Eco Buffers",
      tag: "Sustainability",
      accent: true
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
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Visual Portfolio</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Operational Media Gallery</h1>
            <p className="text-sm text-gray-300 mt-2">A photographic showcase of our plants, quarry excavation, and materials catalog.</p>
          </div>
        </div>
      </section>

      {/* Interactive Filterable Gallery */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded font-bold text-xs uppercase border cursor-pointer transition-all ${
                activeFilter === filter.id
                  ? "bg-primary border-primary text-white"
                  : "border-gray-200 text-gray-600 hover:border-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded shadow-sm group aspect-[4/3] border border-gray-100">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className={`font-bold text-xs uppercase ${item.accent ? "text-accent" : "text-primary"}`}>{item.tag}</span>
                <h3 className="font-bold text-base mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
