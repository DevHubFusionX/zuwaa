import React from 'react';

export default function PartnersTickerSection() {
  const partners = [
    { name: 'Monnify', logo: '/images/anchor/partners/curacel-logo.png', label: 'Payment Gateway' },
    { name: 'Moniepoint MFB', logo: '/images/anchor/partners/pprovidus-bank.png', label: 'Licensed MFB Partner' },
    { name: 'Pairgate', logo: '/images/anchor/partners/squad-logo.png', label: 'Core Banking API' },
    { name: 'Shipbubble', logo: '/images/anchor/partners/lifebank-logo.png', label: 'Logistics & Escrow' },
    { name: 'Dojah', logo: '/images/anchor/partners/monoapp-logo.png', label: 'Identity & BVN/NIN' },
    { name: 'Future Africa', logo: '/images/about/future-africa-logo.png', label: 'Strategic Partner' },
    { name: 'Y Combinator', logo: '/images/about/ycombinator-logo.png', label: 'Ecosystem Backer' },
  ];

  // Duplicate for seamless infinite loop
  const tickerList = [...partners, ...partners];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-y border-[#E1E6E4] overflow-hidden">
      <div className="w-[92%] max-w-[1360px] mx-auto mb-10">
        
        {/* Anchor-style Section Divider with Centered Tag */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex-1 h-[1px] bg-[#E1E6E4]" />
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-medium text-[#565656]">
            <span className="w-2 h-2 rounded-full bg-[#045137]" />
            <span>We are partnered with & backed by</span>
          </div>
          <div className="flex-1 h-[1px] bg-[#E1E6E4]" />
        </div>

      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-3">
          {tickerList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-10 w-auto object-contain max-w-[140px]"
                loading="lazy"
              />
              <span className="text-xs font-medium text-[#565656] tracking-tight whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
