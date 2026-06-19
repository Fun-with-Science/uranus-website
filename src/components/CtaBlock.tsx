import Link from "next/link";

export default function CtaBlock() {
  return (
    <section className="bg-dark text-white py-20 px-margin-desktop max-w-container-max mx-auto my-16 rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(11,95,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,95,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <span className="text-primary font-bold tracking-widest text-xs uppercase">Enterprise Grade Supply</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Need Bulk Aggregate Supply for Your Project?</h2>
        <p className="text-gray-400 text-base md:text-lg">
          Get high-precision materials, customized lab testing reports, and dedicated fleet dispatch logistics. Connect with our technical team today.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/contact?inquiry=bulk" className="bg-primary hover:bg-blue-700 text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider rounded transition-all shadow-lg">
            Request a Quote
          </Link>
          <Link href="/products" className="border border-gray-600 hover:bg-gray-800 text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider rounded transition-all">
            View Specifications
          </Link>
        </div>
      </div>
    </section>
  );
}
