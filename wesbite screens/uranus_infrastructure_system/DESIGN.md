---
name: Uranus Infrastructure System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d1daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dfe8fe'
  surface-container-highest: '#d9e3f8'
  on-surface: '#121c2b'
  on-surface-variant: '#424656'
  inverse-surface: '#273141'
  inverse-on-surface: '#ebf1ff'
  outline: '#737687'
  outline-variant: '#c3c5d9'
  surface-tint: '#0051e0'
  primary: '#0049cc'
  on-primary: '#ffffff'
  primary-container: '#0b5fff'
  on-primary-container: '#eff0ff'
  inverse-primary: '#b5c4ff'
  secondary: '#00658d'
  on-secondary: '#ffffff'
  secondary-container: '#2dbcfe'
  on-secondary-container: '#004866'
  tertiary: '#00623c'
  on-tertiary: '#ffffff'
  tertiary-container: '#007e4e'
  on-tertiary-container: '#c3ffd7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00164d'
  on-primary-fixed-variant: '#003cac'
  secondary-fixed: '#c6e7ff'
  secondary-fixed-dim: '#82cfff'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#004c6b'
  tertiary-fixed: '#69fdb1'
  tertiary-fixed-dim: '#48e096'
  on-tertiary-fixed: '#002111'
  on-tertiary-fixed-variant: '#005231'
  background: '#f9f9ff'
  on-background: '#121c2b'
  surface-variant: '#d9e3f8'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
---

## Brand & Style

The design system is engineered for a premium enterprise-grade infrastructure materials context. The brand personality is authoritative, precise, and industrial, reflecting the scale of heavy machinery and global logistics. It avoids the fleeting trends of consumer tech in favor of a "Modern Industrial" aesthetic—combining the reliability of legacy engineering brands with the sophisticated clarity of modern software.

The emotional response should be one of absolute stability and professional excellence. The style utilizes **Minimalism** with **Corporate** precision, emphasizing structural integrity through deliberate alignment, generous whitespace, and high-quality photography of raw materials and machinery. Every element is designed to feel heavy, purposeful, and permanent.

## Colors

The palette is anchored by **Uranus Blue (#0B5FFF)**, a high-intensity primary blue that signals modern engineering and technology. **Secondary Blue (#00AEEF)** provides depth in data visualization and UI accents. 

**Sustainability Accent (#19C37D)** is reserved exclusively for environmental impact metrics, ESG reporting, and sustainable material certifications.

**Dark Navy (#0D1726)** serves as the foundation for high-contrast headers and text, ensuring legibility and a "premium industrial" weight. Surfaces primarily use **White (#FFFFFF)** for clarity, with **Light Gray (#F6F8FA)** acting as a structural subtle fill to define content zones without the need for heavy borders.

## Typography

The design system uses **Inter** exclusively to maintain a systematic, utilitarian, and highly legible appearance. The hierarchy is characterized by significant scale contrast.

- **Headlines:** Use Bold and Semi-Bold weights with tight letter-spacing to create a "dense" and authoritative feel similar to industrial signage.
- **Body Text:** Maintained at 16px and 18px to ensure readability for technical specifications and contractual data.
- **Labels:** Utilized in uppercase with increased letter-spacing for category headers and technical metadata, mimicking the stamping found on infrastructure components.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with strict 8px increments. 

- **Desktop:** 12-column grid with a maximum container width of 1440px. Wide margins (64px) are used to create a "gallery" feel for industrial imagery.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 16px margins.

Spacing between major sections should be aggressive (96px - 160px) to allow the "premium" nature of the brand to breathe. Content blocks should be grouped using logical proximity, with consistent 24px gutters between grid items.

## Elevation & Depth

This design system uses a **Tonal Layering** approach combined with **Low-Contrast Outlines**. 

- **Level 0 (Base):** Light Gray (#F6F8FA) for the main application canvas.
- **Level 1 (Cards/Containers):** White (#FFFFFF) surfaces with a subtle 1px border (#E5E7EB).
- **Interactive Elevation:** When hovered, cards should exhibit a "Subtle Lift"—an ambient, highly diffused shadow (0px 12px 24px rgba(13, 23, 38, 0.08)) to indicate interactivity without breaking the flat industrial aesthetic.
- **Depth:** Use Dark Navy (#0D1726) for "Power Sections" (e.g., footers or featured CTA blocks) to create a visual floor for the design.

## Shapes

The shape language is **Soft (0.25rem)**. While modern, the design system avoids hyper-rounded or "bubbly" corners to maintain a professional, mechanical feel. 

- **Standard Elements:** 4px radius (Buttons, Inputs, Small Cards).
- **Large Components:** 8px radius (Large Image Containers, Hero sections).
- **Interactive Indicators:** Strict 90-degree corners are permitted for vertical accent bars used to indicate active states in navigation or list items.

## Components

### Buttons
- **Primary:** Uranus Blue (#0B5FFF) background, white text, 4px radius. High-padding (12px 24px) for a substantial physical presence.
- **Secondary:** Transparent with 1px Navy border or Dark Navy background for high-contrast actions.

### Cards
- White background, 1px subtle border, and 4px radius. 
- **Image Containers:** Use 16:9 or 21:9 ratios. Images should have a slight desaturation or cool-tone treatment to align with the Navy/Blue palette.

### Inputs & Fields
- Square-ish (4px radius), 1px border (#D1D5DB). Active states use a 2px Uranus Blue stroke. Labels must be 12px Medium uppercase.

### Chips & Badges
- Used for "Material Status" or "Inventory Levels." 
- **Sustainability Badges:** Use Accent Green (#19C37D) with White text; reserved strictly for green-tech or low-carbon products.

### List Items
- Clean, horizontal rows separated by 1px borders. Use Uranus Blue for icons and primary action links to draw the eye through technical data.

### Industrial Accents
- Use a 4px vertical Uranus Blue "edge-bar" on the left side of featured content or active navigation items to reinforce the structural grid.