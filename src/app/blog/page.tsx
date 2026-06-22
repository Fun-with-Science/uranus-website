import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Resources | Infrastructure Materials Guide",
  description: "Technical aggregate articles, Manufactured Sand (M-Sand) grading guides, GSB road bases, and sieve analysis guides.",
};

export default function BlogPage() {
  const articles = [
    {
      title: "What is M-Sand? (The Eco-friendly River Sand Alternative)",
      tag: "Material Guide",
      image: "/uranus website assets/wbs.png",
      description: "Discover the manufacturing process, structural benefits, and cost-efficiency of VSI Manufactured Sand (M-Sand) compared to river sand in structural concrete mix designs.",
      date: "June 20, 2026"
    },
    {
      title: "Difference Between 10mm and 20mm Aggregate in RCC Slabs",
      tag: "Concrete Technology",
      image: "/uranus website assets/3.png",
      description: "An in-depth look at packing density, structural void reduction, and cement paste balancing using 10mm and 20mm graded aggregates in load-bearing columns and slabs.",
      date: "June 18, 2026"
    },
    {
      title: "Benefits of GSB (Granular Sub Base) in Road Construction",
      tag: "Highway Engineering",
      image: "/uranus website assets/duhb.png",
      description: "Understanding how granular sub-bases (GSB) distribute axle load stresses, drain water away from roads, and prevent subgrade pavement failures in highway designs.",
      date: "June 12, 2026"
    }
  ];

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
            <span className="text-xs font-bold text-blue uppercase tracking-widest block font-mono mb-3">Industry Resources</span>
            <h1 className="text-3xl md:text-5xl font-black text-paper leading-tight mb-4">Blog &amp; Heavy Materials Guide</h1>
            <p className="text-base text-paper-dim">Technical articles, guides, and industry news for B2B procurement managers and engineers.</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 w-full">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-surface border border-line rounded overflow-hidden shadow-2xl hover:border-blue transition-all flex flex-col justify-between relative p-2">
                <span className="corner tl"></span>
                <span className="corner br"></span>
                <div className="relative w-full h-full">
                  <div className="aspect-video bg-stone relative rounded overflow-hidden border border-line">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    <span className="absolute top-4 left-4 bg-blue text-ink text-xs font-bold uppercase px-2.5 py-1 rounded font-mono shadow-md">{article.tag}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-paper hover:text-blue transition-colors mb-3">
                      <a href="#">{article.title}</a>
                    </h3>
                    <p className="text-sm text-paper-dim leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-4 border-t border-line mt-4 flex items-center justify-between text-sm text-fog font-mono">
                  <span>{article.date}</span>
                  <span className="font-semibold text-blue hover:underline cursor-pointer">Read Article</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
