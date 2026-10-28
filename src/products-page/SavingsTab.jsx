import React from 'react';

export default function SavingsTab() {
  const savingsProducts = [
    {
      index: '01',
      title: 'Target savings pools',
      subtext:
        'Help users save toward rent, tuition, festivals, and emergency buffers with automated scheduled standing orders.',
      bgClass: 'bg-[#E0F4FE]',
      textColor: 'text-[#1C2822]',
      subtextColor: 'text-[#1C2822]/80',
      image: '/images/anchor/tree.svg',
      alt: 'Target savings illustration',
      imgAlign: 'right'
    },
    {
      index: '02',
      title: 'High-yield fixed deposits',
      subtext:
        'Lock funds for predetermined durations and earn competitive annualized returns credited directly to the customer wallet.',
      bgClass: 'bg-[#23322D]',
      textColor: 'text-white',
      subtextColor: 'text-[#CEE9DF]',
      image: '/images/anchor/coins_1.svg',
      alt: 'Fixed deposits illustration',
      imgAlign: 'left'
    },
    {
      index: '03',
      title: 'Group cooperative savings (Ajo/Esusu)',
      subtext:
        'Digital rotational savings with automated group payouts, member accountability scores, and transparent ledgers.',
      bgClass: 'bg-[#CEE9DF]',
      textColor: 'text-[#1C2822]',
      subtextColor: 'text-[#1C2822]/80',
      image: '/images/anchor/block-stack.svg',
      alt: 'Group savings illustration',
      imgAlign: 'right'
    },
    {
      index: '04',
      title: 'Automated spare change round-ups',
      subtext:
        'Round up everyday bill payments and marketplace purchases to the nearest hundred naira and auto-invest the difference.',
      bgClass: 'bg-[#3D3356]',
      textColor: 'text-white',
      subtextColor: 'text-[#CEE9DF]',
      image: '/images/anchor/coin-up.svg',
      alt: 'Spare change savings illustration',
      imgAlign: 'left'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      <div className="max-w-[760px] mx-auto text-center px-4">
        <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-normal tracking-[-0.8px] text-[#1C2822] leading-[1.18] font-sans">
          Grow and protect wealth with high-yield savings tools.
        </h2>
        <p className="mt-4 text-[15px] sm:text-[16px] text-[#55655F] leading-[1.6] font-normal max-w-[620px] mx-auto">
          Offer your customers flexible, interest-bearing savings plans backed by licensed custodians and regulated asset managers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {savingsProducts.map((item) => (
          <div
            key={item.index}
            className={`${item.bgClass} rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 flex flex-col justify-between min-h-[340px] sm:min-h-[380px] relative overflow-hidden group shadow-xs hover:shadow-md transition-all duration-300`}
          >
            <div className="relative z-10">
              <div className="text-sm font-semibold tracking-wider opacity-70 mb-4 font-mono">
                {item.index}
              </div>
              <h3 className={`text-[24px] sm:text-[28px] font-normal leading-[1.2] tracking-[-0.4px] ${item.textColor} font-sans`}>
                {item.title}
              </h3>
              <p className={`mt-3 text-[14px] sm:text-[15px] leading-[1.5] ${item.subtextColor} max-w-[360px]`}>
                {item.subtext}
              </p>
            </div>
            <div className={`relative z-0 mt-6 flex ${item.imgAlign === 'left' ? 'justify-start' : 'justify-end'}`}>
              <img
                src={item.image}
                alt={item.alt}
                className="max-h-[140px] sm:max-h-[160px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F1F9F6] rounded-[24px] sm:rounded-[32px] p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-[500px]">
          <h3 className="text-[28px] sm:text-[36px] font-normal text-[#1C2822] tracking-[-0.8px] leading-[1.2] font-sans">
            Guaranteed principal protection
          </h3>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#55655F] leading-[1.6]">
            Every savings deposit is held with NDIC-insured microfinance and commercial partner banks, ensuring full regulatory security and total peace of mind.
          </p>
        </div>
        <div className="w-full md:w-[45%] max-w-[420px] flex items-center justify-center">
          <img
            src="/images/anchor/plane-full-illustration.svg"
            alt="Savings security illustration"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
