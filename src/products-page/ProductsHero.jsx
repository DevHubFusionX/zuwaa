import React from 'react';

export default function ProductsHero({ activeTab, onSelectTab }) {
  const tabs = [
    { id: 'accounts', label: 'Accounts' },
    { id: 'payments', label: 'Payments' },
    { id: 'cards', label: 'Cards' },
    { id: 'credit', label: 'Credit' },
    { id: 'savings-and-investments', label: 'Savings & Investments' }
  ];

  const tabContents = {
    accounts: {
      title: 'Issue compliant accounts and digital wallets to your customers.',
      subtext:
        'Easily issue deposit accounts, savings accounts, sub-accounts and digital wallets for your customers. Our different account types and features enable you to build account products that delight your users.',
      buttonText: 'Get started',
      buttonHref: '#get-started',
      image: '/images/anchor/house-full-illustration.svg',
      alt: 'Accounts building illustration'
    },
    payments: {
      title: 'Move money seamlessly across accounts, banks, and borders.',
      subtext:
        'Support instant payouts, collections, bank transfers, utility bills, and airtime with real-time settlement and automated reconciliation.',
      buttonText: 'Get started',
      buttonHref: '#get-started',
      image: '/images/anchor/money-full-illustration.svg',
      alt: 'Payments illustration'
    },
    cards: {
      title: 'Issue physical and virtual debit cards in minutes.',
      subtext:
        'Create branded Mastercard, Visa, and Verve cards with programmable spending limits, instant freeze, and multi-currency support.',
      buttonText: 'Get started',
      buttonHref: '#get-started',
      image: '/images/anchor/card.svg',
      alt: 'Cards illustration'
    },
    credit: {
      title: 'Launch bespoke lending and credit products effortlessly.',
      subtext:
        'Provide buy-now-pay-later, working capital loans, and overdrafts with automated underwriting and risk management.',
      buttonText: 'Get started',
      buttonHref: '#get-started',
      image: '/images/anchor/pos-full-illustration.svg',
      alt: 'Credit illustration'
    },
    'savings-and-investments': {
      title: 'Help your users grow wealth with high-yield savings.',
      subtext:
        'Enable automated recurring deposits, target savings pools, and competitive interest-bearing portfolios.',
      buttonText: 'Get started',
      buttonHref: '#get-started',
      image: '/images/anchor/plane-full-illustration.svg',
      alt: 'Savings illustration'
    }
  };

  const current = tabContents[activeTab] || tabContents.accounts;

  return (
    <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 bg-white">
      <div className="w-[92%] max-w-[1440px] mx-auto">
        
        {/* Main 2-Column Layout: Left Tab Sidebar + Right Hero Card */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-14">
          
          {/* Left: Tab Menu (Matching Anchor exact desktop sidebar & mobile scroll) */}
          <div className="w-full lg:w-[220px] shrink-0">
            
            {/* Desktop: Vertical tab list */}
            <div className="hidden lg:flex flex-col space-y-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => onSelectTab(tab.id)}
                    className={`inline-flex items-center gap-3 px-5 py-3 rounded-[16px] text-[15px] font-medium tracking-[-0.2px] transition-all duration-200 cursor-pointer select-none text-left w-full ${
                      isActive
                        ? 'bg-[#1C2822] text-white shadow-xs'
                        : 'bg-transparent text-[#55655F] hover:text-[#0E1412] hover:bg-grey-100/50'
                    }`}
                  >
                    {/* Anchor > Chevron */}
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      className={`shrink-0 transition-transform ${
                        isActive ? 'text-white' : 'text-[#55655F]'
                      }`}
                    >
                      <path
                        d="M1.5 1.5L6 6L1.5 10.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile: Horizontal scrolling tab bar */}
            <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => onSelectTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-[14px] text-[14px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#1C2822] text-white shadow-xs'
                        : 'bg-grey-100/70 text-[#55655F]'
                    }`}
                  >
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right: Big Rounded Hero Card (Exact Anchor #F1F9F6 background, rounded-[28px]) */}
          <div className="flex-1 w-full bg-[#F1F9F6] rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Left Content Column */}
            <div className="flex-1 max-w-[560px] z-10">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[48px] font-normal tracking-[-1px] text-[#1C2822] leading-[1.14] font-sans">
                {current.title}
              </h1>

              <p className="mt-5 mb-8 text-[15px] sm:text-[16px] text-[#55655F] leading-[1.55] font-normal tracking-[-0.2px]">
                {current.subtext}
              </p>

              <div>
                <a
                  href={current.buttonHref}
                  className="inline-flex items-center justify-center px-7 py-3 rounded-[16px] bg-[#1C2822] hover:bg-[#045137] text-white text-[15px] font-medium tracking-[-0.3px] transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.98] cursor-pointer"
                >
                  {current.buttonText}
                </a>
              </div>
            </div>

            {/* Right: Isometric Vector Illustration (Matching Anchor house-full-illustration.svg) */}
            <div className="w-full md:w-[46%] max-w-[460px] flex items-center justify-center relative shrink-0">
              <img
                src={current.image}
                alt={current.alt}
                className="w-full h-auto max-h-[340px] sm:max-h-[380px] object-contain object-center drop-shadow-sm transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
