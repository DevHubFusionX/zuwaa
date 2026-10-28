import React from 'react';

export default function MarketplaceChatSection() {
  return (
    <section className="py-20 sm:py-32 bg-[#F1F9F6] overflow-hidden">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Clean phone mockup */}
          <div className="w-full lg:w-[46%] max-w-[460px] flex items-center justify-center">
            <div className="w-full bg-white rounded-[32px] p-6 sm:p-10 flex items-center justify-center border border-grey-200/50 shadow-xs">
              <img
                src="/images/marketplace/store-chat-mockup.png"
                alt="Zuwaa in-app chat negotiation"
                className="w-full max-w-[320px] sm:max-w-[360px] h-auto object-contain rounded-[20px]"
              />
            </div>
          </div>

          {/* Right Column: Mature, clear copy */}
          <div className="w-full lg:w-[54%] max-w-[620px]">
            <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-normal tracking-[-1px] text-[#1C2822] leading-[1.12] font-sans mb-6">
              Talk, negotiate, agree. <br className="hidden sm:inline" />
              Right there in the app.
            </h2>

            <p className="text-[16px] sm:text-[17px] text-[#55655F] leading-[1.6] mb-8">
              Every listing has its own dedicated chat. Ask questions, send photos, make binding price offers, and agree on delivery — without sharing your personal phone number or leaving the platform.
            </p>

            <div className="space-y-6 pt-6 border-t border-grey-200/80 text-[15px] text-[#55655F]">
              <div>
                <h4 className="font-medium text-[#1C2822] text-[16px] mb-1">
                  Binding in-app price offers
                </h4>
                <p className="leading-[1.6]">
                  Make a price offer in chat. Once accepted by the seller, pay securely into escrow with one tap.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-[#1C2822] text-[16px] mb-1">
                  Direct notifications &amp; quick replies
                </h4>
                <p className="leading-[1.6]">
                  Respond to buyer inquiries and manage offers directly from your phone notifications.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-[#1C2822] text-[16px] mb-1">
                  Anti-fraud protection
                </h4>
                <p className="leading-[1.6]">
                  Zuwaa never asks for off-platform bank transfers. Automated safety warnings alert you if someone attempts to move transactions outside the app.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
