import React from 'react';

export default function ComplianceSection() {
  const pillars = [
    {
      id: 'security',
      icon: '/images/anchor/tools.svg',
      title: 'Bank-grade security',
      description: 'A login PIN, a separate payment PIN, and biometric fingerprint or Face ID protect every transaction.'
    },
    {
      id: 'kyc',
      icon: '/images/anchor/notepad.svg',
      title: 'CBN tiered KYC',
      description: 'Clear account limits adhering to Central Bank guidelines, verified securely with your BVN or NIN.'
    },
    {
      id: 'escrow',
      icon: '/images/anchor/customer.svg',
      title: 'Escrow on every order',
      description: 'Money is held safely by Zuwaa. Sellers only get paid after you inspect and confirm your item is in hand.'
    },
    {
      id: 'receipts',
      icon: '/images/anchor/checklist.svg',
      title: 'Verified instant receipts',
      description: 'Every electricity token, airtime top-up, and bill payment generates a verified, copyable, shareable receipt.'
    },
    {
      id: 'alerts',
      icon: '/images/anchor/bolt.svg',
      title: 'Real-time money alerts',
      description: 'Instant notifications for every debit and credit, with biller logos and transparent status tracking.'
    },
    {
      id: 'control',
      icon: '/images/anchor/scale.svg',
      title: "You're in full control",
      description: 'See every signed-in device and sign them out anytime. The app locks automatically when you step away.'
    }
  ];

  return (
    <section id="safety" className="relative bg-[#F1F9F6] overflow-hidden py-20 sm:py-28 lg:py-36">
      
      {/* Background stacked isometric illustration matching Anchor .compliance-block-2 */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none w-[300px] sm:w-[420px] lg:w-[480px] xl:w-[540px] opacity-95 z-0">
        <img
          src="/images/anchor/compliance.svg"
          alt=""
          className="w-full h-auto object-contain object-bottom-left"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 w-[90%] max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-14 lg:gap-20">
        
        {/* Left Column: Big Headline */}
        <div className="w-full lg:w-[38%] max-w-[460px] shrink-0">
          <h2 className="text-[36px] sm:text-[46px] lg:text-[50px] font-normal tracking-[-1px] text-[#064806] leading-[1.12] font-sans">
            Built to keep your <br className="hidden sm:inline" />
            money and transactions <br className="hidden sm:inline" />
            completely safe.
          </h2>
        </div>

        {/* Right Column: 2-Column Grid of 6 Pillars */}
        <div className="w-full lg:w-[62%] max-w-[760px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-12 sm:gap-y-14">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="flex flex-col group">
                <div className="w-8 h-8 mb-5 flex items-center justify-start">
                  <img
                    src={pillar.icon}
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-110 duration-200"
                  />
                </div>
                <h3 className="text-[22px] sm:text-[25px] font-normal text-[#1A1A1A] leading-[1.18] mb-3 tracking-[-0.3px] font-sans">
                  {pillar.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#55655F] leading-[1.5] font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
