import React from 'react';

export default function CardsTab() {
  const cardProducts = [
    {
      index: '01',
      title: 'Virtual debit cards',
      subtext:
        'Instantly issue virtual cards for online shopping, subscriptions, and international payments with 3D Secure protection.',
      bgClass: 'bg-[#1C2822]',
      textColor: 'text-white',
      subtextColor: 'text-[#E1F3EA]',
      image: '/images/anchor/card.svg',
      alt: 'Virtual cards illustration',
      imgAlign: 'right'
    },
    {
      index: '02',
      title: 'Physical branded cards',
      subtext:
        'Custom-designed physical debit cards delivered straight to your customers with contactless chip and PIN technology.',
      bgClass: 'bg-[#CEE9DF]',
      textColor: 'text-[#1C2822]',
      subtextColor: 'text-[#1C2822]/80',
      image: '/images/anchor/machine.svg',
      alt: 'Physical cards illustration',
      imgAlign: 'left'
    },
    {
      index: '03',
      title: 'Spending controls & limits',
      subtext:
        'Set daily limits, merchant category restrictions, and instant one-tap freeze and unfreeze right in the app.',
      bgClass: 'bg-[#3D3356]',
      textColor: 'text-white',
      subtextColor: 'text-[#CEE9DF]',
      image: '/images/anchor/card-coin.svg',
      alt: 'Card spending controls illustration',
      imgAlign: 'right'
    },
    {
      index: '04',
      title: 'Multi-currency cards',
      subtext:
        'Allow customers to spend in USD, GBP, and EUR at live mid-market exchange rates without hidden fees.',
      bgClass: 'bg-[#F6DBC3]',
      textColor: 'text-[#2A1C12]',
      subtextColor: 'text-[#2A1C12]/80',
      image: '/images/anchor/dollar.svg',
      alt: 'Multi-currency cards illustration',
      imgAlign: 'left'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      <div className="max-w-[760px] mx-auto text-center px-4">
        <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-normal tracking-[-0.8px] text-[#1C2822] leading-[1.18] font-sans">
          Next-generation card issuing infrastructure.
        </h2>
        <p className="mt-4 text-[15px] sm:text-[16px] text-[#55655F] leading-[1.6] font-normal max-w-[620px] mx-auto">
          Create, fund, and manage customized virtual and physical cards with full authorization control and real-time fraud monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {cardProducts.map((item) => (
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
            Complete card lifecycle management
          </h3>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#55655F] leading-[1.6]">
            Deliver unmatched security with biometric card authentication, automated tokenization for Apple Pay and Google Wallet, and instant card replacement.
          </p>
        </div>
        <div className="w-full md:w-[45%] max-w-[420px] flex items-center justify-center">
          <img
            src="/images/anchor/cards-description-illustration.svg"
            alt="Cards security illustration"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
