import React from 'react';
import { Phone, FileText, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[82vh] flex items-center bg-slate-950 overflow-hidden">
      {/* Full-Screen Continuous Background Video (No controls, seamless loop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/emek/kurumsal.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] pointer-events-none"
      >
        <source src="/emek/emek-factory-bg.mp4" type="video/mp4" />
      </video>

      {/* Scientific High-Contrast Dark Gradient Overlay (like Screenshot 3) */}
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5">
            Türkiye&apos;nin dört bir yanına ve 18 ülkeye{' '}
            <span className="bg-gradient-to-r from-sky-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
              endüstriyel çizme ve ayakkabı sevki
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
            1961&apos;den bugüne Samsun Organize Sanayi Bölgesi&apos;ndeki <strong className="text-white">20.000 m² üretim tesisimizde</strong>; iş güvenliği çizmeleri, poliüretan/PVC çizmeler ve kauçuk ayakkabılarda doğrudan fabrikadan toptan tedarik.
          </p>

          {/* Clean Action Buttons (Matching Screenshot 3 style) */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ücretsiz Teklif Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#urunler"
              className="inline-flex items-center gap-2.5 bg-slate-900/75 hover:bg-slate-900 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/20 backdrop-blur-md"
            >
              <span>Ürünleri İncele (20 Model)</span>
            </a>

            <a
              href="/emek/EmekLastik_Katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 text-slate-200 font-semibold px-5 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/15 backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-sky-300" />
              <span>PDF Katalog İndir</span>
            </a>
          </div>

          {/* Trust Footnote Line (Matching Screenshot 3 bottom-left note) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              1961&apos;den Beri Yerli Sermaye • 14 Tescilli Marka • Fabrikadan Doğrudan Toptan Sevkiyat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
