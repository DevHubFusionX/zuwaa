import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PressSection() {
  const scrollContainerRef = useRef(null);

  const articles = [
    {
      id: 1,
      source: 'Techpoint Africa',
      date: 'August 2024',
      logo: '/images/about/Techpoint-logo-500px-2.png',
      summary: 'How Nigerian fintech Zuwaa is solving buyer-seller trust with verified peer-to-peer escrow payments.',
      url: 'https://techpoint.africa'
    },
    {
      id: 2,
      source: 'BusinessDay',
      date: 'September 2024',
      logo: '/images/about/business-day.png',
      summary: 'Zuwaa introduces zero-downtime personal NUBAN accounts and verified peer-to-peer commerce safeguards.',
      url: 'https://businessday.ng'
    },
    {
      id: 3,
      source: 'TechCrunch',
      date: 'October 2024',
      logo: '/images/about/tc_1tc.png',
      summary: 'Nigerian consumer fintech Zuwaa scales fraud-proof everyday commerce and automated escrow settlement.',
      url: 'https://techcrunch.com'
    },
    {
      id: 4,
      source: 'Disrupt Africa',
      date: 'November 2024',
      logo: '/images/about/Disrupt_1Disrupt.png',
      summary: 'Zuwaa launches automated escrow marketplace and utilities platform for Nigerian online shoppers.',
      url: 'https://disrupt-africa.com'
    },
    {
      id: 5,
      source: 'Finextra',
      date: 'December 2024',
      logo: '/images/about/finextra-logo.svg',
      summary: 'Everyday banking and escrow in Africa: How Zuwaa builds a secure financial home for modern consumers.',
      url: 'https://finextra.com'
    }
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#F7F9F8] overflow-hidden">
      <div className="w-[92%] max-w-[1360px] mx-auto">
        
        {/* Anchor-style Section Divider with Centered Tag */}
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="flex-1 h-[1px] bg-[#E1E6E4]" />
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-medium text-[#565656]">
            <span className="w-2 h-2 rounded-full bg-[#045137]" />
            <span>Press & Media</span>
          </div>
          <div className="flex-1 h-[1px] bg-[#E1E6E4]" />
        </div>

        {/* Carousel / Slider Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {articles.map((item) => (
              <div
                key={item.id}
                className="w-[310px] sm:w-[360px] lg:w-[380px] shrink-0 snap-start relative group"
              >
                {/* Main Card Inner (Anchor press-block_inner) */}
                <div className="bg-[#CEE9DF] rounded-2xl p-6 sm:p-7 pb-28 min-h-[380px] sm:min-h-[410px] flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1">
                  
                  <div>
                    {/* Publisher Logo Card */}
                    <div className="bg-white rounded-xl h-12 w-auto max-w-[180px] px-4 flex items-center justify-center mb-6 shadow-xs border border-black/5">
                      <img
                        src={item.logo}
                        alt={item.source}
                        className="max-h-7 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Metadata: Source & Date */}
                    <div className="flex items-center gap-2 text-xs font-medium text-[#1E2E28] mb-3">
                      <span>{item.source}</span>
                      <span className="w-1 h-1 rounded-full bg-[#1E2E28]/40" />
                      <span className="text-[#565656]">{item.date}</span>
                    </div>

                    {/* Headline / Summary */}
                    <h3 className="text-[17px] sm:text-[18.5px] font-normal text-[#1A2621] leading-[1.4] tracking-[-0.3px]">
                      {item.summary}
                    </h3>
                  </div>

                </div>

                {/* Bottom Action Button (Anchor press-block_button) */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 right-4 bg-[#23322D] hover:bg-[#16201D] text-[#CEE9DF] rounded-xl px-5 py-3.5 flex items-center justify-between text-sm sm:text-base font-medium tracking-tight transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <span>Read article</span>
                  <div className="w-6 h-6 rounded-full bg-[#CEE9DF]/15 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-[#CEE9DF]" />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (Anchor press-slide_arrows) */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full bg-white border border-[#E1E6E4] hover:bg-[#F1F9F6] text-[#1E1E1E] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              aria-label="Previous article"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full bg-white border border-[#E1E6E4] hover:bg-[#F1F9F6] text-[#1E1E1E] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              aria-label="Next article"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
