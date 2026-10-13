import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, MessageCircle, FileText, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Çalışılan Kurumlar & Markalar', href: '#kurumsal' },
    { name: 'Müşteri Yorumları', href: '#yorumlar' },
    { name: 'Ürün Kataloğu', href: '#urunler' },
    { name: 'Üretim Grupları', href: '#uretim' },
    { name: 'İletişim & Bayilik', href: '#iletisim' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Official Logo + Nav Links (ARMA style) */}
          <div className="flex items-center gap-7">
            <a href="#" className="flex items-center gap-3 shrink-0">
              <div className="bg-white px-2.5 py-1.5 rounded-md shadow-xs">
                <img
                  src="/emek/logo.png"
                  alt="Emek Lastik Logo"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
              <div className="hidden sm:block border-l border-white/15 pl-3">
                <div className="font-display font-bold text-sm text-white tracking-wide leading-tight">
                  EMEK LASTİK A.Ş.
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  1961&apos;den Bugüne • Samsun OSB
                </div>
              </div>
            </a>

            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Catalog Pill + Emerald CTA Button (ARMA style) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/emek/EmekLastik_Katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/15 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>PDF Katalog &amp; Fabrika Mağaza</span>
            </a>

            <a
              href="https://wa.me/903622666222?text=Merhaba%20Emek%20Lastik%2C%20toptan%20%C3%BCr%C3%BCn%20ve%20bayilik%20fiyat%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ücretsiz Teklif Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg bg-slate-900 text-slate-200 hover:text-white border border-white/15"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs text-slate-400 px-2">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Organize Sanayi Bölgesi, Vali Erdoğan Cebeci Bulvarı No:70 Tekkeköy / Samsun</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:+903622666222"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-lg text-sm"
              >
                <Phone className="w-4 h-4" />
                Fabrika Ara
              </a>
              <a
                href="/emek/EmekLastik_Katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-lg text-sm"
              >
                <FileText className="w-4 h-4" />
                PDF Katalog
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
