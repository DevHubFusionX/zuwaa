import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutHeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef(null);
  const headlineRef = useRef(null);

  const showcaseSlides = [
    {
      id: 0,
      partner: 'GadgetHub Lekki',
      category: 'Verified Escrow Commerce',
      illustration: '/images/about/casestudy-commerce-illustration.svg',
      bgColor: 'bg-[#CEE9DF]', // Anchor mint
      subtext: 'Nigeria’s trusted escrow marketplace for peer-to-peer electronics and verified merchant deals.'
    },
    {
      id: 1,
      partner: 'SwiftLogistics Express',
      category: 'Direct Payouts & Shipping',
      illustration: '/images/about/about-plane.svg',
      bgColor: 'bg-[#F1F9F6]', // Anchor soft sage
      subtext: 'Automated delivery tracking with funds held safely until buyer inspection and sign-off.'
    },
    {
      id: 2,
      partner: 'DirectPay Bills & Utilities',
      category: 'Zero-Downtime Accounts',
      illustration: '/images/about/about-card.svg',
      bgColor: 'bg-[#E0F4FE]', // Anchor soft ice blue
      subtext: 'Dedicated personal NUBAN accounts with instant zero-failure utility receipts and airtime.'
    }
  ];

  // Auto-advance showcase every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [showcaseSlides.length]);

  // Entrance 3D rotation animation matching Anchor's SplitText GSAP physics
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          {
            opacity: 0,
            rotateX: 65,
            y: 40,
            transformPerspective: 1200
          },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            delay: 0.15
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const current = showcaseSlides[activeSlide];

  return (
    <section ref={heroRef} className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden bg-[#F7F9F8]">
      <div className="w-[92%] max-w-[1360px] mx-auto">
        
        {/* Top Header with 3D line tilt */}
        <div className="text-center max-w-[940px] mx-auto mb-14 sm:mb-20">
          <h1
            ref={headlineRef}
            className="text-[38px] sm:text-[56px] lg:text-[66px] font-normal text-[#1E1E1E] leading-[1.08] tracking-[-1.5px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            Building the{' '}
            <span className="text-[#085B3F] font-normal">
              everyday financial home
            </span>{' '}
            for Nigeria.
          </h1>
        </div>

        {/* 3-Column Hero Flex (Anchor about-hero_flex architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between relative pt-4">
          
          {/* Left Column: Mission Subtext */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#565656]">
              <span className="w-2 h-2 rounded-full bg-[#D05F0D]" />
              <span>We are building for everyday Nigeria</span>
            </div>
            <div className="text-[24px] sm:text-[28px] lg:text-[32px] font-normal text-[#1A2621] leading-[1.18] tracking-[-0.6px]">
              Offering verified escrow shopping, instant bills, and reliable personal accounts.
            </div>
          </div>

          {/* Center Column: 3-Tile Interactive Visual Showcase */}
          <div className="lg:col-span-6 flex items-center justify-center gap-3 sm:gap-4 w-full">
            
            {/* Left Tile (Floating Vector) */}
            <div className="hidden sm:flex flex-col items-center justify-center w-24 sm:w-28 h-24 sm:h-28 rounded-2xl bg-[#EAF5F0] border border-[#D5EADF] p-4 shrink-0 transition-transform duration-500 hover:scale-105">
              <img
                src={activeSlide === 0 ? '/images/about/about-building.svg' : activeSlide === 1 ? '/images/about/about-plane.svg' : '/images/about/about-card.svg'}
                alt=""
                className="w-12 h-12 object-contain transition-all duration-300"
              />
            </div>

            {/* Center Main Card (Anchor about-hero_img cc-center swiper-2) */}
            <div className={`relative w-full max-w-[430px] h-[360px] sm:h-[400px] rounded-2xl sm:rounded-3xl ${current.bgColor} transition-colors duration-700 p-6 flex flex-col justify-between overflow-hidden shadow-sm border border-black/5`}>
              
              {/* Center graphic illustration */}
              <div className="flex-1 flex items-center justify-center p-4">
                <img
                  src={current.illustration}
                  alt={current.partner}
                  className="max-h-[160px] sm:max-h-[190px] w-auto object-contain transition-all duration-500 scale-100 hover:scale-105"
                />
              </div>

              {/* Bottom Details Card (Anchor about-slide_details) */}
              <div className="bg-white rounded-xl p-4 sm:p-5 shadow-xs border border-black/5 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D05F0D]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A] tracking-tight">
                      {current.partner}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-[#767676]">
                    {current.category}
                  </span>
                </div>

                {/* Progress bar line indicators (Anchor swiper pagination) */}
                <div className="flex gap-1.5 w-full">
                  {showcaseSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeSlide
                          ? 'bg-[#045137] flex-1'
                          : 'bg-[#E1E6E4] w-8 hover:bg-[#B7C7C1]'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Slide Caption */}
                <p className="text-xs sm:text-[13px] text-[#565656] leading-[1.4] line-clamp-2">
                  {current.subtext}
                </p>
              </div>
            </div>

            {/* Right Tile (Floating Vector) */}
            <div className="hidden sm:flex flex-col items-center justify-center w-24 sm:w-28 h-24 sm:h-28 rounded-2xl bg-[#EAF5F0] border border-[#D5EADF] p-4 shrink-0 transition-transform duration-500 hover:scale-105">
              <img
                src={activeSlide === 0 ? '/images/about/about-card.svg' : activeSlide === 1 ? '/images/about/about-building.svg' : '/images/about/about-plane.svg'}
                alt=""
                className="w-12 h-12 object-contain transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Column: Major Goal Subtext */}
          <div className="lg:col-span-3 space-y-4 text-left lg:text-right">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#565656]">
              <span>With a major goal of</span>
            </div>
            <div className="text-[20px] sm:text-[23px] lg:text-[26px] font-normal text-[#1A2621] leading-[1.25] tracking-[-0.4px]">
              Empowering individuals and everyday businesses to transact safely without fear of fraud.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
