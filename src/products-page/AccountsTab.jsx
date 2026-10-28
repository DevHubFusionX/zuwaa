import React from 'react';

export default function AccountsTab() {
  const accountProducts = [
    {
      index: '01',
      title: 'Consumer bank accounts',
      subtext:
        'Offer deposit accounts to individual customers. This account supports transfers, pay-ins, bills payment, cards and more.',
      bgClass: 'bg-[#CEE9DF]',
      textColor: 'text-[#1C2822]',
      subtextColor: 'text-[#1C2822]/80',
      image: '/images/anchor/piggybank-full-illustration.svg',
      alt: 'Consumer bank accounts illustration',
      imgAlign: 'right'
    },
    {
      index: '02',
      title: 'Business bank accounts',
      subtext:
        'Offer deposit accounts to your business customers for their day-to-day transactions and operations.',
      bgClass: 'bg-[#3D3356]',
      textColor: 'text-white',
      subtextColor: 'text-[#CEE9DF]',
      image: '/images/anchor/briefcase.svg',
      alt: 'Business bank accounts illustration',
      imgAlign: 'left'
    },
    {
      index: '03',
      title: 'Virtual account numbers',
      subtext:
        'Create simple static and dynamic virtual accounts for payment collections and other unique use-cases.',
      bgClass: 'bg-[#1C2822]',
      textColor: 'text-white',
      subtextColor: 'text-[#E1F3EA]',
      image: '/images/anchor/card-big.svg',
      alt: 'Virtual account numbers illustration',
      imgAlign: 'right'
    },
    {
      index: '04',
      title: 'Interest bearing accounts',
      subtext:
        'Offer interest bearing accounts to support compelling savings and investment propositions.',
      bgClass: 'bg-[#23322D]',
      textColor: 'text-white',
      subtextColor: 'text-[#CEE9DF]',
      image: '/images/anchor/level.svg',
      alt: 'Interest bearing accounts illustration',
      imgAlign: 'left'
    },
    {
      index: '05',
      title: 'Group/Joint accounts',
      subtext:
        'Offers accounts that can be controlled by multiple customers with necessary controls in-built.',
      bgClass: 'bg-[#F6DBC3]',
      textColor: 'text-[#2A1C12]',
      subtextColor: 'text-[#2A1C12]/80',
      image: '/images/anchor/block-stack.svg',
      alt: 'Group and joint accounts illustration',
      imgAlign: 'right'
    },
    {
      index: '06',
      title: 'Sub-accounts',
      subtext:
        'Issue sub-accounts to help your customers track and manage expenses seamlessly.',
      bgClass: 'bg-[#3D3356]',
      textColor: 'text-white',
      subtextColor: 'text-[#CEE9DF]',
      image: '/images/anchor/subaccount-illustration.svg',
      alt: 'Sub-accounts illustration',
      imgAlign: 'left'
    },
    {
      index: '07',
      title: 'Wallets',
      subtext:
        'Offer digital wallets to your customers to get them started on their financial inclusion journey.',
      bgClass: 'bg-[#E0F4FE]',
      textColor: 'text-[#1C2822]',
      subtextColor: 'text-[#1C2822]/80',
      image: '/images/anchor/wallet.svg',
      alt: 'Wallets illustration',
      imgAlign: 'right'
    },
    {
      index: '08',
      title: 'Multi-currency accounts',
      subtext:
        'Seamlessly issue unique multi-currency bank accounts to your customers under your brand.',
      bgClass: 'bg-[#1C2822]',
      textColor: 'text-white',
      subtextColor: 'text-[#E1F3EA]',
      image: '/images/anchor/coins_1.svg',
      alt: 'Multi-currency accounts illustration',
      imgAlign: 'left'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. Subheader Section */}
      <div className="max-w-[760px] mx-auto text-center px-4">
        <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-normal tracking-[-0.8px] text-[#1C2822] leading-[1.18] font-sans">
          Plug into our API for seamless account integrations.
        </h2>
        <p className="mt-4 text-[15px] sm:text-[16px] text-[#55655F] leading-[1.6] font-normal max-w-[620px] mx-auto">
          Leverage our platform and APIs to issue and manage the entire account lifecycle, including opening, freezing, and unfreezing accounts.
        </p>
      </div>

      {/* 2. Grid of 8 Product Cards (Matching Anchor exact design, alternating layout & styling) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {accountProducts.map((item) => (
          <div
            key={item.index}
            className={`${item.bgClass} rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 flex flex-col justify-between min-h-[360px] sm:min-h-[400px] relative overflow-hidden group shadow-xs hover:shadow-md transition-all duration-300`}
          >
            {/* Header: Index number + Title + Subtext */}
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

            {/* Illustration positioned inside the card */}
            <div
              className={`relative z-0 mt-6 sm:mt-8 flex ${
                item.imgAlign === 'left' ? 'justify-start' : 'justify-end'
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="max-h-[140px] sm:max-h-[170px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Bottom Banner: "Your account, your rules" */}
      <div className="bg-[#F1F9F6] rounded-[24px] sm:rounded-[32px] p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-[500px]">
          <h3 className="text-[28px] sm:text-[36px] font-normal text-[#1C2822] tracking-[-0.8px] leading-[1.2] font-sans">
            Your account, your rules
          </h3>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#55655F] leading-[1.6]">
            Enjoy full control with programmable limits, secure transaction histories, and downloadable statements, ensuring effortless fund protection and balance tracking.
          </p>
        </div>
        <div className="w-full md:w-[45%] max-w-[420px] flex items-center justify-center">
          <img
            src="/images/anchor/account-description-illustration.svg"
            alt="Account rules illustration"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  );
}
