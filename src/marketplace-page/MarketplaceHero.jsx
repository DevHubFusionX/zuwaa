import React from 'react';

export default function MarketplaceHero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 bg-white overflow-hidden">
      
      {/* Background subtle tint pattern */}
      <div className="absolute inset-0 -z-10 flex flex-col justify-start pt-12 gap-3 opacity-40 pointer-events-none">
        <div className="flex gap-3 justify-center">
          <div className="w-48 sm:w-64 h-16 bg-[#F1F9F6] rounded-2xl" />
          <div className="w-80 sm:w-[480px] h-16 bg-[#F1F9F6] rounded-2xl" />
          <div className="w-64 sm:w-80 h-16 bg-[#F1F9F6] rounded-2xl" />
        </div>
      </div>

      <div className="w-[90%] max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Clear, mature headline & subtext */}
          <div className="w-full lg:w-[52%] max-w-[620px]">
            
            {/* Main H1 Headline: exact Anchor #064806 green */}
            <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-normal tracking-[-1.5px] text-[#064806] leading-[1.08] font-sans">
              Buy and sell <br className="hidden sm:inline" />
              without the fear.
            </h1>

            {/* Subtext */}
            <p className="mt-6 mb-10 text-[16px] sm:text-[18px] text-[#55655F] leading-[1.6] font-normal tracking-[-0.2px] max-w-[540px]">
              We've all heard the stories: paid a stranger on social media, and they vanished. On Zuwaa, your money waits safely in escrow until you inspect and confirm your item is in hand.
            </p>

            {/* Clean, mature action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#listings"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[16px] bg-[#045137] hover:bg-[#033c29] text-white text-[15px] font-medium tracking-[-0.3px] transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                Browse marketplace
              </a>
              <a
                href="#sell"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[16px] bg-transparent hover:bg-grey-100 text-[#1C2822] text-[15px] font-medium tracking-[-0.3px] transition-all duration-200 border border-grey-300 active:scale-[0.98] cursor-pointer"
              >
                Sell on Zuwaa
              </a>
            </div>

            {/* Clear value statements */}
            <div className="pt-8 border-t border-grey-200/80 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 text-[14px] text-[#767676]">
              <div>
                <span className="font-semibold text-[#1C2822] block text-[15px]">Zero buyer fees</span>
                Pay only the listed price
              </div>
              <div className="hidden sm:block w-px h-8 bg-grey-200" />
              <div>
                <span className="font-semibold text-[#1C2822] block text-[15px]">3% seller fee</span>
                Capped at ₦5,000 maximum
              </div>
              <div className="hidden sm:block w-px h-8 bg-grey-200" />
              <div>
                <span className="font-semibold text-[#1C2822] block text-[15px]">Tracked couriers</span>
                Doorstep delivery nationwide
              </div>
            </div>

          </div>

          {/* Right Column: Clean, uncluttered device mockup */}
          <div className="w-full lg:w-[48%] max-w-[500px] flex items-center justify-center relative">
            <div className="w-full bg-[#F1F9F6] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 flex items-center justify-center">
              <img
                src="/images/marketplace/store-market-mockup.png"
                alt="Zuwaa marketplace phone interface"
                className="w-full max-w-[320px] sm:max-w-[360px] h-auto object-contain drop-shadow-md rounded-[24px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
