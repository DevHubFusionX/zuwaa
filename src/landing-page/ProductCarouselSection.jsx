import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCarouselSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleCardClick = (cardId) => {
    const tabName = cardId === 'savings' ? 'savings-and-investments' : cardId;
    if (onNavigate) {
      onNavigate(`/products?tab=${tabName}`);
    } else {
      window.location.href = `/products?tab=${tabName}`;
    }
  };

  // Check scroll boundary state and update progress bar
  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < maxScroll - 10);
      if (maxScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
      }
    }
  };

  // Button navigation
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -330 : 330;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  // Wheel scroll-jacking: scroll carousel horizontally on vertical wheel until end, then let page scroll
  useEffect(() => {
    const container = sectionRef.current;
    const track = carouselRef.current;
    if (!container || !track) return;

    const handleWheel = (e) => {
      // Only intercept vertical wheel scroll
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const maxScroll = track.scrollWidth - track.clientWidth;
        
        // If scrolling down and carousel has not reached the end
        if (e.deltaY > 0 && track.scrollLeft < maxScroll - 6) {
          e.preventDefault();
          track.scrollLeft += e.deltaY * 1.5;
          checkScroll();
        }
        // If scrolling up and carousel has not reached the beginning
        else if (e.deltaY < 0 && track.scrollLeft > 6) {
          e.preventDefault();
          track.scrollLeft += e.deltaY * 1.5;
          checkScroll();
        }
        // Otherwise, allow standard vertical page scroll to continue
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  // Cards matching Anchor's exact visual design, color pairings, top text, official SVGs, and bottom pill with arrow
  const cards = [
    {
      id: 'accounts',
      tag: 'Accounts',
      text: 'Personal NUBAN account number for every user. Receive instant bank transfers and top up by card effortlessly.',
      cardBg: 'bg-[#CEE9DF]',
      textColor: 'text-[#1C2822]',
      tagBg: 'bg-[#1C2822]',
      tagText: 'text-[#CEE9DF]',
      image: '/images/anchor/accounts.svg',
      alt: 'Virtual NUBAN accounts illustration'
    },
    {
      id: 'payments',
      tag: 'Payments',
      text: 'Airtime, high-speed data, TV subscriptions, and electricity meter tokens in seconds with instant shareable receipts.',
      cardBg: 'bg-[#3E3259]',
      textColor: 'text-[#FFFFFF]',
      tagBg: 'bg-[#CEE9DF]',
      tagText: 'text-[#3E3259]',
      image: '/images/anchor/payments.svg',
      alt: 'Bills and utility payments illustration'
    },
    {
      id: 'cards',
      tag: 'Cards',
      text: 'Buy and sell second-hand and new items. Your money stays protected in escrow until you inspect and approve the item.',
      cardBg: 'bg-[#1C2822]',
      textColor: 'text-[#E1F3EA]',
      tagBg: 'bg-[#F6DBC3]',
      tagText: 'text-[#C85A17]',
      image: '/images/anchor/cards.svg',
      alt: 'Escrow marketplace buyer protection illustration'
    },
    {
      id: 'credit',
      tag: 'Credit',
      text: 'Make binding offers and agree prices right inside chat without ever giving out your personal phone number.',
      cardBg: 'bg-[#F6DBC3]',
      textColor: 'text-[#2A1C12]',
      tagBg: 'bg-[#D05E17]',
      tagText: 'text-white',
      image: '/images/anchor/coins.svg',
      alt: 'In-app chat and offers illustration'
    },
    {
      id: 'savings',
      tag: 'Savings',
      text: 'Automatically see where every naira goes with categorized bills, shopping breakdowns, and budget alerts.',
      cardBg: 'bg-[#E0F4FE]',
      textColor: 'text-[#1C2822]',
      tagBg: 'bg-[#1C2822]',
      tagText: 'text-white',
      image: '/images/anchor/savings.svg',
      alt: 'Spending tracker and budgets illustration'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-2 pb-14 sm:pb-20 bg-white overflow-hidden border-b border-grey-100"
    >
      <div className="w-[90%] max-w-[1440px] mx-auto">
        
        {/* Navigation Controls Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-wider text-grey-400 font-medium">
            Scroll or swipe to explore products &rarr;
          </div>

          {/* Left / Right Arrow Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              className={`w-10 h-10 rounded-full border border-grey-200 flex items-center justify-center transition-all shadow-2xs active:scale-95 cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#23322D] hover:bg-grey-50'
                  : 'bg-white/60 text-grey-300 border-grey-100 cursor-not-allowed'
              }`}
              aria-label="Previous card"
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className={`w-10 h-10 rounded-full border border-grey-200 flex items-center justify-center transition-all shadow-2xs active:scale-95 cursor-pointer ${
                canScrollRight
                  ? 'bg-[#045137] text-white hover:bg-[#033c29]'
                  : 'bg-grey-100 text-grey-400 cursor-not-allowed'
              }`}
              aria-label="Next card"
              disabled={!canScrollRight}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Track with Cards matching Anchor layout */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`snap-start shrink-0 w-[295px] sm:w-[315px] h-[500px] sm:h-[520px] rounded-[24px] ${card.cardBg} flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group select-none relative overflow-hidden cursor-pointer`}
            >
              {/* 1. Top Value Proposition Text */}
              <div className="relative z-10 pt-7 px-6 sm:px-7">
                <p className={`text-[16px] sm:text-[17px] leading-[1.4] tracking-[-0.25px] font-normal ${card.textColor}`}>
                  {card.text}
                </p>
              </div>

              {/* 2. Anchor SVG Illustration bleeding to the bottom */}
              <div className="relative z-0 mt-auto w-full h-[280px] flex items-end justify-center overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-bottom pointer-events-none group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* 3. Bottom Pill Tag matching Anchor with Arrow icon */}
              <div className="absolute bottom-5 left-5 z-20">
                <div
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-[13px] ${card.tagBg} ${card.tagText} font-medium text-[16px] tracking-[-0.2px] shadow-sm group-hover:shadow-md transition-all duration-200`}
                >
                  <span>{card.tag}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M17.9996 6H8.28711C8.0882 6 7.89743 5.92098 7.75678 5.78033C7.61613 5.63968 7.53711 5.44891 7.53711 5.25C7.53711 5.05109 7.61613 4.86032 7.75678 4.71967C7.89743 4.57902 8.0882 4.5 8.28711 4.5H18.7496C18.9485 4.5 19.1393 4.57902 19.2799 4.71967C19.4206 4.86032 19.4996 5.05109 19.4996 5.25V15.75C19.4996 15.9489 19.4206 16.1397 19.2799 16.2803C19.1393 16.421 18.9485 16.5 18.7496 16.5C18.5507 16.5 18.3599 16.421 18.2193 16.2803C18.0786 16.1397 17.9996 15.9489 17.9996 15.75V6Z" />
                    <path d="M18.2199 4.71995C18.3608 4.57912 18.5518 4.5 18.7509 4.5C18.9501 4.5 19.1411 4.57912 19.2819 4.71995C19.4228 4.86078 19.5019 5.05178 19.5019 5.25095C19.5019 5.45011 19.4228 5.64112 19.2819 5.78195L6.53195 18.5319C6.46222 18.6017 6.37943 18.657 6.28832 18.6947C6.19721 18.7325 6.09956 18.7519 6.00095 18.7519C5.90233 18.7519 5.80468 18.7325 5.71357 18.6947C5.62246 18.657 5.53968 18.6017 5.46995 18.5319C5.40022 18.4622 5.3449 18.3794 5.30716 18.2883C5.26942 18.1972 5.25 18.0996 5.25 18.0009C5.25 17.9023 5.26942 17.8047 5.30716 17.7136C5.3449 17.6225 5.40022 17.5397 5.46995 17.4699L18.2199 4.71995Z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic horizontal scroll progress indicator */}
        <div className="w-full max-w-xs mx-auto mt-6 h-1 bg-grey-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#045137] rounded-full transition-all duration-150"
            style={{ width: `${Math.max(20, scrollProgress)}%` }}
          />
        </div>

      </div>
    </section>
  );
}
