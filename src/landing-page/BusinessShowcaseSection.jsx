import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BusinessShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const sectionRef = useRef(null);
  const hasAnimatedInitial = useRef(false);

  // Partner logos for the continuous marquee ticker (matching Anchor's exact partners row)
  const partners = [
    { name: 'Waza', logo: '/images/anchor/partners/waza-logo.png' },
    { name: 'Dillalis', logo: '/images/anchor/partners/dillalis.png' },
    { name: 'Mono', logo: '/images/anchor/partners/monoapp-logo.png' },
    { name: 'Zit', logo: '/images/anchor/partners/zitng.png' },
    { name: 'LifeBank', logo: '/images/anchor/partners/lifebank-logo.png' },
    { name: 'Curacel', logo: '/images/anchor/partners/curacel-logo.png' },
    { name: 'Outpost', logo: '/images/anchor/partners/outpost-logo.png' },
    { name: 'Pennee', logo: '/images/anchor/partners/pennee-logo.png' },
    { name: 'SeamlessHR', logo: '/images/anchor/partners/seamlesshr-logo.png' },
    { name: 'Squad', logo: '/images/anchor/partners/squad-logo.png' },
    { name: 'Providus Bank', logo: '/images/anchor/partners/pprovidus-bank.png' },
    { name: 'Oval', logo: '/images/anchor/partners/oval-logo.png' },
    { name: 'Gameporte', logo: '/images/anchor/partners/gameporte-logo_1.png' }
  ];

  // The 4 case study slides matching Anchor's exact layout, colors, tags, lists, linebreaks, and images
  const slides = [
    {
      id: 'sellers',
      tag: 'Merchants',
      headerLines: ['Marketplace', 'Escrow.'],
      list: ['Free Listings', 'Escrow Hold', 'Courier Tracking', '3% Max Cap'],
      bgClass: 'bg-[#3D3356]',
      textColor: 'text-white',
      tagColor: 'text-[#CEE9DF]',
      listColor: 'text-[#CEE9DF]',
      image: '/images/anchor/waza-img-1.png',
      alt: 'Marketplace escrow case study',
      icons: [
        { bg: 'bg-[#CEE9DF]', icon: '/images/anchor/house-mini.svg', alt: 'House icon' },
        { bg: 'bg-[#EEDABE]', icon: '/images/anchor/plane-mini.svg', alt: 'Plane icon' },
        { bg: 'bg-[#0BE49B]', icon: '/images/anchor/card-mini.svg', alt: 'Card icon' },
        { bg: 'bg-[#F1F9F6]', icon: '/images/anchor/coin-mini.svg', alt: 'Coin icon' }
      ]
    },
    {
      id: 'households',
      tag: 'Households',
      headerLines: ['Utility Bills', '& Power.'],
      list: ['Prepaid Tokens', 'Cable Renewals', 'Exam Pins', 'Auto-Schedule'],
      bgClass: 'bg-[#23322D]',
      textColor: 'text-white',
      tagColor: 'text-[#CEE9DF]',
      listColor: 'text-[#CEE9DF]',
      image: '/images/anchor/bujeti-img-1.png',
      alt: 'Utility bills and power case study',
      icons: [
        { bg: 'bg-[#CEE9DF]', icon: '/images/anchor/house-mini.svg', alt: 'House icon' },
        { bg: 'bg-[#433968]', icon: '/images/anchor/plane-mini.svg', alt: 'Plane icon' },
        { bg: 'bg-[#0BE49B]', icon: '/images/anchor/card-mini.svg', alt: 'Card icon' },
        { bg: 'bg-[#F1F9F6]', icon: '/images/anchor/coin-mini.svg', alt: 'Coin icon' }
      ]
    },
    {
      id: 'students',
      tag: 'Students',
      headerLines: ['Affordable Data', '& Airtime.'],
      list: ['SME Bundles', 'All 4 Networks', 'Instant Delivery', 'Zero Fees'],
      bgClass: 'bg-[#CEE9DF]',
      textColor: 'text-[#23322D]',
      tagColor: 'text-[#23322D]/70',
      listColor: 'text-[#23322D]/80',
      image: '/images/anchor/digital-health.png',
      alt: 'Affordable data and airtime case study',
      icons: [
        { bg: 'bg-[#FFFFFF]', icon: '/images/anchor/house-mini.svg', alt: 'House icon' },
        { bg: 'bg-[#433968]', icon: '/images/anchor/plane-mini.svg', alt: 'Plane icon' },
        { bg: 'bg-[#0BE49B]', icon: '/images/anchor/card-mini.svg', alt: 'Card icon' },
        { bg: 'bg-[#EEDABE]', icon: '/images/anchor/coin-mini.svg', alt: 'Coin icon' }
      ]
    },
    {
      id: 'shoppers',
      tag: 'Shoppers',
      headerLines: ['Scam-Free', 'Gadget Deals.'],
      list: ['In-App Chat', 'Binding Offers', 'Confirm First', 'Refund Shield'],
      bgClass: 'bg-[#EEDABE]',
      textColor: 'text-[#23322D]',
      tagColor: 'text-[#23322D]/70',
      listColor: 'text-[#23322D]/80',
      image: '/images/anchor/electronics.png',
      alt: 'Scam-free shopping case study',
      icons: [
        { bg: 'bg-[#CEE9DF]', icon: '/images/anchor/house-mini.svg', alt: 'House icon' },
        { bg: 'bg-[#433968]', icon: '/images/anchor/plane-mini.svg', alt: 'Plane icon' },
        { bg: 'bg-[#0BE49B]', icon: '/images/anchor/card-mini.svg', alt: 'Card icon' },
        { bg: 'bg-[#FFFFFF]', icon: '/images/anchor/coin-mini.svg', alt: 'Coin icon' }
      ]
    }
  ];

  // Animate the active slide using Anchor's exact GSAP curve
  const triggerSlideAnimation = (index) => {
    const slide = slideRefs.current[index];
    if (!slide) return;

    const tag = slide.querySelector('[data-anim="tag"]');
    const headerLines = slide.querySelectorAll('[data-anim="header-line"]');
    const listItems = slide.querySelectorAll('[data-anim="list-item"]');
    const icons = slide.querySelectorAll('[data-anim="icon"]');
    const img = slide.querySelector('[data-anim="img"]');

    const tl = gsap.timeline();

    // 1. Tag fade & subtle rise
    if (tag) {
      tl.fromTo(
        tag,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
        0
      );
    }

    // 2. 3D Header tilt & slide in
    if (headerLines.length > 0) {
      tl.fromTo(
        headerLines,
        { opacity: 0, rotateX: 65, yPercent: 40, transformPerspective: 800 },
        { opacity: 1, rotateX: 0, yPercent: 0, duration: 0.85, stagger: 0.1, ease: 'expo.out' },
        0.06
      );
    }

    // 3. Staggered list items
    if (listItems.length > 0) {
      tl.fromTo(
        listItems,
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out' },
        0.18
      );
    }

    // 4. Elastic bouncing icon tiles
    if (icons.length > 0) {
      tl.fromTo(
        icons,
        { opacity: 0, yPercent: -120, scale: 0.8 },
        {
          opacity: 1,
          yPercent: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.09,
          ease: 'back.out(1.8)'
        },
        0.22
      );
    }

    // 5. White card sliding up from bottom
    if (img) {
      tl.fromTo(
        img,
        { opacity: 0, yPercent: 35 },
        { opacity: 1, yPercent: 0, duration: 0.95, ease: 'power3.out' },
        0.1
      );
    }
  };

  // Run animation on index change
  useEffect(() => {
    triggerSlideAnimation(activeIndex);
  }, [activeIndex]);

  // Initial IntersectionObserver scroll trigger
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedInitial.current) {
            hasAnimatedInitial.current = true;
            triggerSlideAnimation(activeIndex);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  return (
    <section ref={sectionRef} className="relative py-14 sm:py-20 bg-white overflow-hidden">
      
      {/* 1. Continuous Partner Logo Marquee Ticker */}
      <div className="w-full mb-16 sm:mb-24 overflow-hidden border-y border-grey-100/70 py-7 bg-grey-50/40">
        <div className="flex w-max animate-marquee space-x-14 sm:space-x-20 items-center">
          {partners.concat(partners).map((p, idx) => (
            <div
              key={`${p.name}-${idx}`}
              className="flex items-center justify-center shrink-0 grayscale opacity-65 hover:opacity-100 hover:grayscale-0 transition-all duration-300 h-8 sm:h-9"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-7 sm:max-h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Container with Title & Arrow Controls */}
      <div className="w-[90%] max-w-[1440px] mx-auto">
        
        {/* Header & Controls Row */}
        <div className="flex flex-row items-start sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-normal tracking-[-1px] text-[#23322D] leading-[1.12] font-sans max-w-[620px]">
            Real Nigerians building and managing their daily money with Zuwaa.
          </h2>

          {/* Prev / Next Arrow Controls matching Anchor UI */}
          <div className="flex items-center gap-2.5 shrink-0 pt-1">
            <button
              type="button"
              onClick={handlePrev}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-[#F1F9F6] hover:bg-[#CEE9DF] text-[#045137] flex items-center justify-center transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer"
              aria-label="Previous business slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 24" fill="none" className="w-3.5 h-5">
                <path
                  d="M11.6167 23.3101C11.7646 23.3119 11.9112 23.2827 12.0471 23.2245C12.183 23.1662 12.3052 23.0802 12.4059 22.9718C12.8569 22.5209 12.8569 21.8219 12.4059 21.3709L3.04839 12.0134L12.4059 2.67841C12.8569 2.22744 12.8569 1.52845 12.4059 1.07748C11.955 0.626517 11.256 0.626517 10.805 1.07748L0.68082 11.2467C0.229855 11.6977 0.229855 12.3967 0.68082 12.8477L10.8275 22.9718C11.053 23.1973 11.3461 23.3101 11.6167 23.3101Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-[#F1F9F6] hover:bg-[#CEE9DF] text-[#045137] flex items-center justify-center transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer"
              aria-label="Next business slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 24" fill="none" className="w-3.5 h-5">
                <path
                  d="M1.38327 23.3101C1.23541 23.3119 1.08881 23.2827 0.952891 23.2245C0.816974 23.1662 0.694752 23.0802 0.594083 22.9718C0.143118 22.5209 0.143118 21.8219 0.594083 21.3709L9.95161 12.0134L0.594083 2.67841C0.143118 2.22744 0.143118 1.52845 0.594083 1.07748C1.04505 0.626517 1.74404 0.626517 2.19501 1.07748L12.3192 11.2467C12.7701 11.6977 12.7701 12.3967 12.3192 12.8477L2.17246 22.9718C1.94698 23.1973 1.65385 23.3101 1.38327 23.3101Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* 3. Slider Track: Active card + Peeking next card matching the uploaded UI */}
      <div className="w-full overflow-hidden">
        <div className="w-[90%] max-w-[1440px] mx-auto">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(calc(-${activeIndex} * (clamp(320px, 82vw, 1040px) + 2rem)))`
            }}
          >
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                ref={(el) => (slideRefs.current[idx] = el)}
                className={`shrink-0 w-[86vw] sm:w-[82vw] max-w-[1040px] h-[500px] sm:h-[540px] lg:h-[560px] rounded-[24px] sm:rounded-[30px] ${slide.bgClass} pt-9 sm:pt-12 lg:pt-14 pb-0 pl-7 sm:pl-12 lg:pl-14 pr-7 sm:pr-12 lg:pr-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 overflow-hidden shadow-xs relative`}
              >
                {/* Left Column: SaaS tag, Header (2 lines), Bullets, 4 Icon Tiles */}
                <div className="flex-1 flex flex-col justify-between self-stretch max-w-[560px] z-10 pb-8 sm:pb-10">
                  <div>
                    {/* Category Tag */}
                    <div
                      data-anim="tag"
                      className={`text-[15px] sm:text-[17px] font-medium tracking-tight mb-3 ${slide.tagColor}`}
                    >
                      {slide.tag}
                    </div>

                    {/* Big Slide Header with exact 2-line break */}
                    <h3
                      className={`text-[46px] sm:text-[66px] lg:text-[74px] font-medium leading-[0.94] tracking-[-1.5px] font-sans mb-6 ${slide.textColor}`}
                    >
                      {slide.headerLines.map((line, lIdx) => (
                        <span key={lIdx} data-anim="header-line" className="block">
                          {line}
                        </span>
                      ))}
                    </h3>

                    {/* Bullet Points List */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-[15px] sm:text-[16px] font-medium">
                      {slide.list.map((item) => (
                        <span key={item} data-anim="list-item" className="flex items-center gap-2">
                          <span className="opacity-70">•</span>
                          <span className={slide.listColor}>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row of 4 Icon Tiles matching Anchor UI */}
                  <div className="flex items-center gap-2.5 sm:gap-3.5 pt-2">
                    {slide.icons.map((ic, iIdx) => (
                      <div
                        key={iIdx}
                        data-anim="icon"
                        className={`w-[72px] sm:w-[88px] h-[56px] sm:h-[68px] rounded-[15px] sm:rounded-[18px] ${ic.bg} flex items-center justify-center shadow-2xs hover:scale-105 transition-transform duration-200`}
                      >
                        <img
                          src={ic.icon}
                          alt={ic.alt}
                          className="w-7 sm:w-8 h-7 sm:h-8 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: White Floating Modal/Card Image bleeding to the bottom */}
                <div
                  data-anim="img"
                  className="w-full md:w-[320px] lg:w-[360px] xl:w-[380px] shrink-0 self-end mt-auto z-10 flex justify-center md:justify-end"
                >
                  <div className="w-full max-w-[340px] md:max-w-none rounded-t-[18px] sm:rounded-t-[20px] overflow-hidden shadow-2xl bg-white border border-black/5">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-auto object-cover object-top block"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="w-[90%] max-w-[1440px] mx-auto flex items-center gap-2 mt-8">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === idx
                ? 'w-9 bg-[#045137]'
                : 'w-2 bg-grey-300 hover:bg-grey-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
