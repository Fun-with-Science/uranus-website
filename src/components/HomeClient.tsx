"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useQuoteModal } from "./Providers";

export default function HomeClient() {
  const { openModal } = useQuoteModal();
  
  // States for counters
  const [gradesCount, setGradesCount] = useState(0);
  const [stagesCount, setStagesCount] = useState(0);
  const [tonnesCount, setTonnesCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);

  const countersSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Add "loaded" class to body for hero entry animation
    document.body.classList.add("loaded");

    // 2. Intersection Observer for standard Scroll Reveals (.r)
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    document.querySelectorAll(".r").forEach((el) => revealObserver.observe(el));

    // 3. Counter animations
    const startCounter = (setter: React.Dispatch<React.SetStateAction<number>>, target: number, duration = 1300) => {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setter(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setter(target);
        }
      };
      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counterObserver.unobserve(entry.target);
            startCounter(setGradesCount, 8);
            startCounter(setStagesCount, 5);
            startCounter(setTonnesCount, 500);
            startCounter(setHoursCount, 24);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (countersSectionRef.current) {
      counterObserver.observe(countersSectionRef.current);
    }

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate downloading company profile
    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent("Uranus Stone Products Limited - Corporate Profile\n\nAggregate grades: 6mm, 10mm, 20mm, 40mm, 60mm.\nInstalled capacity: 500+ Tonnes/Day.\nQuarry & Crushing Plant: Ri-Bhoi, Meghalaya.\nContact: hello@uranusstone.in");
    link.download = "Uranus_Stone_Corporate_Profile.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* HERO */}
      <header className="hero bg-ink" id="top">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: "url('/uranus website assets/Aparna-Crusher-Plant_4.jpg.jpeg')" }}
        />
        <div className="hero-veil"></div>
        <div className="hero-grain"></div>
        <div className="hero-content">
          <div className="wrap">
            <span className="eyebrow reveal-h d1">Stone Crushing &amp; Mining — Northeast India</span>
            <h1 className="reveal-h d2 text-paper">Graded to the<br /><span className="accent">millimetre.</span> Supplied by the tonne.</h1>
            <p className="hero-sub reveal-h d3">Uranus Stone Products Limited manufactures calibrated aggregate, manufactured sand, GSB and stone dust for India's most demanding concrete and infrastructure work — from a modern multi-stage crushing plant.</p>
            <div className="hero-actions reveal-h d4">
              <button 
                onClick={() => openModal()} 
                className="btn btn-blue cursor-pointer"
              >
                Request a quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <Link href="/products" className="btn btn-ghost">See our grades</Link>
            </div>
            <div className="rail reveal-h d5">
              <span className="rail-label">Grades</span>
              <div className="rail-item"><div className="sz"><b>06</b></div><div className="u">mm</div></div>
              <div className="rail-item"><div className="sz">10</div><div className="u">mm</div></div>
              <div className="rail-item"><div className="sz">20</div><div className="u">mm</div></div>
              <div className="rail-item"><div className="sz">40</div><div className="u">mm</div></div>
              <div className="rail-item"><div className="sz">60</div><div className="u">mm</div></div>
              <div className="rail-extra">+ <b>M-Sand</b> · <b>GSB</b> · <b>Stone Dust</b></div>
            </div>
          </div>
        </div>
        <div className="scrollcue"><span>Scroll</span><span className="line"></span></div>
      </header>

      {/* CAPACITY STRIP */}
      <section className="strip" ref={countersSectionRef}>
        <div className="wrap" style={{ padding: 0 }}>
          <div className="strip-grid">
            <div className="stat">
              <div className="num">
                <span className="count">{gradesCount}</span>
              </div>
              <div className="lbl">Calibrated product grades, from 6 mm to 60 mm</div>
            </div>
            <div className="stat">
              <div className="num">
                <span className="count">{stagesCount}</span>-stage
              </div>
              <div className="lbl">Crushing &amp; screening line for consistent gradation</div>
            </div>
            <div className="stat">
              <div className="num">
                <span className="count">{tonnesCount}</span>
                <span className="s">+</span>
              </div>
              <div className="lbl">Tonnes per day installed capacity</div>
            </div>
            <div className="stat">
              <div className="num">
                <span className="count">{hoursCount}</span> hrs
              </div>
              <div className="lbl">Typical quotation turnaround for bulk orders</div>
            </div>
          </div>
          <div className="strip-note">* plant data compiled from current zone capacity reports</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="r">
              <span className="eyebrow">Who we are</span>
              <h2 className="text-paper">A modern crushing plant, built into the hills of the Northeast.</h2>
              <p>Uranus Stone Products Limited runs a fully mechanised, multi-stage crushing and screening operation — turning hard rock from our quarry into precisely sized aggregate, manufactured sand and base material.</p>
              <p>Every grade is screened to consistent specification and stockpiled separately, so contractors and concrete plants get the same product, batch after batch.</p>
              <ul className="about-list">
                <li>Multi-stage primary &amp; secondary crushing with VSI for cubical aggregate</li>
                <li>Separate, clearly graded stockpiles — no mixed fractions</li>
                <li>In-house quality checks on gradation and fines</li>
                <li>Reliable tipper fleet for bulk, on-time dispatch</li>
              </ul>
              <div className="lead">Promoted by <b>Ankit Mittal</b>, <b>Conformi Mukhim</b> &amp; <b>Shweta Mittal</b></div>
            </div>
            <div className="about-media r">
              <div className="frame">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <img 
                  src="/uranus website assets/pexels-jetkerim-16567021.jpg.jpeg" 
                  alt="Uranus Stone Quarry Extraction Site" 
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" id="products">
        <div className="wrap">
          <div className="sec-head r">
            <span className="eyebrow">Our Materials</span>
            <h2 className="text-paper">Calibrated aggregate, sand &amp; sub-base material.</h2>
            <p>From fine plastering sand to heavy ballast, our products meet standard highway and building concrete specs.</p>
          </div>
          
          <div className="prod-grid">
            {/* 10mm */}
            <div className="prod-card r">
              <div className="imgbox rounded">
                <img src="/uranus website assets/3.png" alt="10mm Aggregate" />
              </div>
              <h3 className="text-paper">10mm Aggregate</h3>
              <p>Graded aggregate for RCC structural components, detailed slab finishes, pre-cast blocks, and precise concrete mixes.</p>
              <Link href="/products" className="grade-link">
                Grade Spec 
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
            
            {/* 20mm */}
            <div className="prod-card r">
              <div className="imgbox rounded">
                <img src="/uranus website assets/wbs.png" alt="20mm Aggregate" />
              </div>
              <h3 className="text-paper">20mm Aggregate</h3>
              <p>The standard concrete aggregate. Cubic shape yields maximum packing density and reduces cement requirements for high-rises.</p>
              <Link href="/products" className="grade-link">
                Grade Spec 
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>

            {/* M-Sand */}
            <div className="prod-card r">
              <div className="imgbox rounded">
                <img src="/uranus website assets/wbs.png" alt="Manufactured Sand" />
              </div>
              <h3 className="text-paper">Manufactured Sand</h3>
              <p>VSI crushed and washed fine aggregate. Consistent grading makes it an ideal, eco-friendly replacement for river sand in plastering.</p>
              <Link href="/products" className="grade-link">
                Grade Spec 
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>

            {/* GSB */}
            <div className="prod-card r">
              <div className="imgbox rounded">
                <img src="/uranus website assets/duhb.png" alt="Granular Sub Base" />
              </div>
              <h3 className="text-paper">GSB (Sub-base)</h3>
              <p>Granular Sub Base soil-rock mixture compiled to MORTH guidelines, ensuring structural base support for asphalt pavements.</p>
              <Link href="/products" className="grade-link">
                Grade Spec 
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>

          <div className="view-all-box r">
            <Link href="/products" className="btn btn-ghost">View All 8 Product Specifications</Link>
          </div>
        </div>
      </section>



      {/* WHERE MATERIAL GOES */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head r">
            <span className="eyebrow">Applications</span>
            <h2 className="text-paper">Where our material goes.</h2>
            <p>Trusted across the sectors that build the region.</p>
          </div>
          <div className="apps">
            <div className="app r"><span>↗</span>Ready-Mix Concrete</div>
            <div className="app r"><span>↗</span>Roads &amp; Highways</div>
            <div className="app r"><span>↗</span>Real Estate &amp; Buildings</div>
            <div className="app r"><span>↗</span>Government Infrastructure</div>
            <div className="app r"><span>↗</span>Bridges &amp; Flyovers</div>
            <div className="app r"><span>↗</span>Railways &amp; Ballast</div>
            <div className="app r"><span>↗</span>Precast &amp; Blocks</div>
            <div className="app r"><span>↗</span>Drainage &amp; Gabions</div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="section cta" id="contact">
        <div 
          className="cta-bg" 
          style={{ backgroundImage: "url('/uranus website assets/duhb.png')" }}
        />
        <div className="cta-veil"></div>
        <div className="wrap">
          <div className="cta-inner r">
            <h2 className="text-paper">Have a project? Let's talk <span className="a">grades, volumes &amp; delivery.</span></h2>
            <p>Send us your specification and quantity. We'll come back with availability and a quote — usually within a day.</p>
            <div className="cta-actions">
              <button 
                onClick={() => openModal()} 
                className="btn btn-blue cursor-pointer"
              >
                Request a quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <a 
                href="https://wa.me/910000000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-wa"
              >
                WhatsApp us
              </a>
              <button 
                onClick={handleDownload} 
                className="btn btn-ghost cursor-pointer"
              >
                Download company profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
