import React from 'react';

export default function SellerBenefitsSection() {
  const sellerPerks = [
    {
      title: 'Free listings',
      desc: 'List as many products as you want with no listing charges or expiration deadlines.'
    },
    {
      title: 'Upfront escrow payments',
      desc: 'Buyers pay into escrow before you dispatch. No chasing payments or fake transfer alerts.'
    },
    {
      title: 'Doorstep courier pickups',
      desc: 'Book verified courier pickups through Shipbubble with automated waybills and tracking.'
    },
    {
      title: 'Transparent 3% fee',
      desc: 'Pay only when a transaction completes. Fee is capped at ₦5,000 regardless of item value.'
    }
  ];

  return (
    <section id="sell" className="py-20 sm:py-32 bg-white">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        
        {/* Banner Card: Mature, uncluttered, Anchor dark canvas */}
        <div className="bg-[#1C2822] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-16 lg:p-20 relative overflow-hidden">
          
          <div className="max-w-[760px]">
            <h2 className="text-[32px] sm:text-[46px] lg:text-[52px] font-normal tracking-[-1px] leading-[1.12] font-sans mb-6">
              Sell with confidence. <br className="hidden sm:inline" />
              Keep more of your revenue.
            </h2>

            <p className="text-[16px] sm:text-[18px] text-[#CEE9DF]/80 leading-[1.6] max-w-[600px] mb-14">
              Whether you are an individual selling pre-owned items or an established merchant, Zuwaa provides verified storefronts, protected escrow payments, and integrated courier pickup.
            </p>

            {/* 4 Clean text columns without busy icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-14">
              {sellerPerks.map((p) => (
                <div key={p.title} className="space-y-2">
                  <h3 className="text-[17px] font-medium text-white">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-[#8F9E98] leading-[1.6]">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Clean CTA */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href="#download"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[16px] bg-[#045137] hover:bg-[#033c29] text-white text-[15px] font-medium transition-all shadow-xs"
              >
                Start selling on Zuwaa
              </a>
              <span className="text-[13px] text-[#8F9E98]">
                Identity verified with BVN or NIN in under 3 minutes
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
