import React from 'react';

export default function CareersSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#F7F9F8] overflow-hidden">
      <div className="w-[92%] max-w-[1360px] mx-auto">
        
        {/* Anchor-style Section Divider with Centered Tag */}
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="flex-1 h-[1px] bg-[#E1E6E4]" />
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-medium text-[#565656]">
            <span className="w-2 h-2 rounded-full bg-[#D05F0D]" />
            <span>Join our team</span>
          </div>
          <div className="flex-1 h-[1px] bg-[#E1E6E4]" />
        </div>

        {/* Centered CTA */}
        <div className="text-center max-w-[760px] mx-auto px-4 space-y-5">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-normal text-[#1E1E1E] leading-[1.12] tracking-[-1px]">
            Looking to be part of our dynamic team?
          </h2>
          <p className="text-[17px] sm:text-[20px] text-[#565656] leading-[1.45] max-w-[580px] mx-auto font-normal">
            Explore exciting career opportunities at Zuwaa and help build the future of everyday commerce in Africa.
          </p>
          <div className="pt-4 flex items-center justify-center">
            <a
              href="mailto:careers@zuwaa.com"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[14px] bg-[#045137] hover:bg-[#033c29] text-white text-[15.5px] font-medium tracking-tight transition-all duration-200 shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
            >
              Contact us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
