import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 bg-white">
      {/* 1. Hero CTA Block (Exact Anchor layout & typography) */}
      <div className="max-w-[840px] mx-auto px-4 text-center">
        
        {/* Main H1 Headline: exact Anchor #064806 dark forest green */}
        <h1 className="text-[38px] sm:text-[54px] lg:text-[60px] font-normal tracking-[-1px] text-[#064806] leading-[1.08] font-sans">
          Pay bills. Shop safely. <br className="hidden sm:inline" />
          Know your money.
        </h1>

        {/* Subtitle: Anchor .hero-cta_subtext styling */}
        <p className="max-w-[580px] mx-auto mt-6 mb-8 text-[15px] sm:text-[16px] text-[#535353] leading-[1.55] tracking-[-0.32px] font-normal">
          Airtime, data, TV and electricity in seconds. A marketplace where your money is protected until you get what you paid for. And a wallet that shows you where every naira goes.
        </p>

        {/* Anchor Primary Pill Button */}
        <div className="flex items-center justify-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-9 py-3.5 rounded-[16px] bg-[#045137] hover:bg-[#033c29] text-[#F1F9F6] text-[16px] font-medium tracking-[-0.36px] transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.98] cursor-pointer"
          >
            Get Zuwaa, it's free
          </a>
        </div>
      </div>

      {/* 2. Secondary Centered Heading (Part of Hero section as requested) */}
      <div className="relative mt-20 sm:mt-28 max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Soft mint pill grid pattern (matching Anchor's .hero-empty_block tiles) */}
        <div className="absolute inset-0 -z-10 flex flex-col justify-center gap-3 opacity-60 pointer-events-none">
          <div className="flex gap-3 justify-center">
            <div className="w-48 sm:w-64 h-14 sm:h-20 bg-[#F1F9F6] rounded-2xl" />
            <div className="w-72 sm:w-96 h-14 sm:h-20 bg-[#F1F9F6] rounded-2xl" />
            <div className="w-56 sm:w-80 h-14 sm:h-20 bg-[#F1F9F6] rounded-2xl" />
          </div>
          <div className="flex gap-3 justify-center">
            <div className="w-64 sm:w-80 h-14 sm:h-20 bg-[#F1F9F6] rounded-2xl" />
            <div className="w-56 sm:w-72 h-14 sm:h-20 bg-[#F1F9F6] rounded-2xl" />
            <div className="w-72 sm:w-96 h-14 sm:h-20 bg-[#F1F9F6] rounded-2xl" />
          </div>
        </div>

        {/* Secondary Headline (Anchor .uc-h2-7 centered style) */}
        <div className="text-center max-w-[960px] mx-auto py-8 sm:py-12">
          <h2 className="text-[28px] sm:text-[42px] lg:text-[48px] font-normal text-[#23322D] leading-[1.2] tracking-[-0.8px] font-sans">
            One app for everyday Nigeria — <br className="hidden sm:inline" />
            all the tools you need in one place.
          </h2>
        </div>
      </div>
    </section>
  );
}
