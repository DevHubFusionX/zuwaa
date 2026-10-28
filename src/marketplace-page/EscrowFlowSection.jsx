import React from 'react';

export default function EscrowFlowSection() {
  const steps = [
    {
      num: '01',
      title: 'Pay into Zuwaa Escrow',
      desc: 'Pay for your order through bank transfer or debit card. Your money is secured in an escrow account. The seller is notified to dispatch the item, but cannot withdraw the funds.'
    },
    {
      num: '02',
      title: 'Seller ships your item',
      desc: 'The seller sends the item via an in-app tracked courier (Shipbubble) or arranges an in-person meetup. You can monitor the package journey until it arrives at your door.'
    },
    {
      num: '03',
      title: 'Inspect, confirm, and release',
      desc: 'Open and test the product. Once you confirm you received what was described, money is released to the seller. If anything is wrong, open a dispute for a full refund.'
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-[#F1F9F6]">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-[720px] mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-normal tracking-[-1px] text-[#1C2822] leading-[1.12] font-sans">
            How escrow protection works.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] text-[#55655F] leading-[1.6]">
            Every marketplace transaction follows a structured three-step escrow process to guarantee safety for both buyer and seller.
          </p>
        </div>

        {/* 3 Step Columns: Clean, un-cluttered, mature */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-[24px] p-8 sm:p-10 flex flex-col justify-between shadow-xs border border-grey-200/60"
            >
              <div>
                <div className="text-sm font-mono text-[#045137] font-semibold mb-6">
                  {s.num}
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-normal text-[#1C2822] leading-[1.25] tracking-[-0.3px] font-sans mb-4">
                  {s.title}
                </h3>
                <p className="text-[15px] text-[#55655F] leading-[1.6]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dispute Resolution Note */}
        <div className="mt-14 pt-10 border-t border-grey-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[14.5px] text-[#55655F]">
          <p className="max-w-[820px] leading-[1.6]">
            <strong className="text-[#1C2822] font-medium">Dispute Guarantee:</strong> Buyers have a 48-hour inspection period after delivery. In the event of a damaged, missing, or misdescribed product, our compliance team reviews the evidence and issues a direct refund.
          </p>
          <a
            href="#faq"
            className="text-[#045137] hover:text-[#033c29] font-medium whitespace-nowrap"
          >
            Read dispute policy &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
