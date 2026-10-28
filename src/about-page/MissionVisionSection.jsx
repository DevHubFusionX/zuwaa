import React from 'react';

export default function MissionVisionSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="w-[92%] max-w-[1360px] mx-auto space-y-12">
        
        {/* Top Decorative Framed Lines (Anchor mission-top_block) */}
        <div className="space-y-3 hidden md:block">
          <div className="flex justify-between items-center gap-4">
            <div className="h-16 lg:h-20 w-[18%] bg-[#F1F9F6] rounded-r-2xl" />
            <div className="h-16 lg:h-20 w-[24%] bg-[#F1F9F6] rounded-l-2xl" />
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="h-16 lg:h-20 w-[28%] bg-[#F1F9F6] rounded-r-2xl" />
            <div className="h-16 lg:h-20 w-[36%] bg-[#F1F9F6] rounded-l-2xl" />
          </div>
        </div>

        {/* 1. Our Mission Block (Anchor mission-block_one) */}
        <div className="space-y-3">
          
          {/* Header Row: Left block + Dark Green Tag + Right filler blocks */}
          <div className="flex items-center gap-3">
            <div className="h-16 lg:h-20 w-12 sm:w-20 bg-[#F1F9F6] rounded-r-2xl shrink-0 hidden sm:block" />
            
            {/* Tag: Our mission */}
            <div className="h-16 lg:h-20 px-6 sm:px-8 bg-[#23322D] text-[#0BE49B] rounded-2xl flex items-center justify-between gap-6 shrink-0 w-full sm:w-[320px]">
              <span className="text-[22px] sm:text-[28px] font-normal tracking-tight">
                Our mission
              </span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#0BE49B]" />
            </div>

            {/* Right filler blocks */}
            <div className="hidden sm:flex flex-1 items-center gap-3">
              <div className="h-16 lg:h-20 flex-1 bg-[#F1F9F6] rounded-2xl" />
              <div className="h-16 lg:h-20 w-28 bg-[#F1F9F6] rounded-2xl" />
            </div>
          </div>

          {/* Inner Content Block: Side rails + Main text container */}
          <div className="flex gap-3 items-stretch">
            {/* Left rail */}
            <div className="hidden sm:flex flex-col gap-3 w-12 sm:w-20 shrink-0">
              <div className="h-full bg-[#F1F9F6] rounded-r-2xl" />
            </div>

            {/* Main Mission Text Container */}
            <div className="flex-1 bg-[#F1F9F6] rounded-2xl p-7 sm:p-12 lg:p-16 text-[#1A2621]">
              <div className="max-w-[880px] space-y-6 text-[18px] sm:text-[22px] lg:text-[25px] font-normal leading-[1.4] tracking-[-0.4px]">
                <p>
                  We’re on a mission to eliminate fraud in peer-to-peer commerce and bring complete safety, speed, and reliability to everyday money in Nigeria.
                </p>
                <p className="text-[#565656] text-[16px] sm:text-[19px] lg:text-[21px] leading-[1.5]">
                  Every day, millions of Nigerians send transfers and buy goods online with anxiety over failed deliveries, unresponsive sellers, or delayed bank debits. We are building the modern financial operating system that ensures every payment is protected by bank-grade escrow, every transfer clears instantly, and every user has total control over their cash.
                </p>
              </div>
            </div>

            {/* Right rail */}
            <div className="hidden sm:flex flex-col gap-3 w-12 sm:w-20 shrink-0">
              <div className="h-full bg-[#F1F9F6] rounded-l-2xl" />
            </div>
          </div>

        </div>

        {/* 2. Our Vision Block (Anchor mission-block_two) */}
        <div className="space-y-3 pt-6">
          
          {/* Header Row: Left block + Mint Green Tag + Right filler blocks */}
          <div className="flex items-center gap-3">
            <div className="h-16 lg:h-20 w-12 sm:w-20 bg-[#F1F9F6] rounded-r-2xl shrink-0 hidden sm:block" />
            
            {/* Tag: Our vision */}
            <div className="h-16 lg:h-20 px-6 sm:px-8 bg-[#CEE9DF] text-[#1E2E28] rounded-2xl flex items-center justify-between gap-6 shrink-0 w-full sm:w-[320px]">
              <span className="text-[22px] sm:text-[28px] font-normal tracking-tight">
                Our vision
              </span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#045137]" />
            </div>

            {/* Right filler blocks */}
            <div className="hidden sm:flex flex-1 items-center gap-3">
              <div className="h-16 lg:h-20 flex-1 bg-[#F1F9F6] rounded-2xl" />
              <div className="h-16 lg:h-20 w-40 bg-[#F1F9F6] rounded-2xl" />
            </div>
          </div>

          {/* Inner Content Block */}
          <div className="flex gap-3 items-stretch">
            {/* Left rail */}
            <div className="hidden sm:flex flex-col gap-3 w-12 sm:w-20 shrink-0">
              <div className="h-full bg-[#F1F9F6] rounded-r-2xl" />
            </div>

            {/* Main Vision Text */}
            <div className="flex-1 bg-[#F1F9F6] rounded-2xl p-7 sm:p-12 lg:p-16 text-[#1A2621]">
              <div className="max-w-[880px] text-[22px] sm:text-[28px] lg:text-[34px] font-normal leading-[1.3] tracking-[-0.8px]">
                Our vision is to be the most trusted everyday financial companion for millions of individuals and businesses across Nigeria and emerging markets.
              </div>
            </div>

            {/* Right rail */}
            <div className="hidden sm:flex flex-col gap-3 w-12 sm:w-20 shrink-0">
              <div className="h-full bg-[#F1F9F6] rounded-l-2xl" />
            </div>
          </div>

        </div>

        {/* Bottom Decorative Block (Anchor mission-bottom_block) */}
        <div className="hidden sm:flex items-center gap-3 pt-2">
          <div className="h-14 lg:h-16 w-32 bg-[#F1F9F6] rounded-r-2xl" />
          <div className="h-14 lg:h-16 flex-1 bg-[#F1F9F6] rounded-2xl" />
          <div className="h-14 lg:h-16 w-44 bg-[#F1F9F6] rounded-2xl" />
          <div className="h-14 lg:h-16 w-24 bg-[#F1F9F6] rounded-l-2xl" />
        </div>

      </div>
    </section>
  );
}
