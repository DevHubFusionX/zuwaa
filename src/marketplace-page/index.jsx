import React from 'react';
import Navbar from '../landing-page/Navbar';
import Footer from '../landing-page/Footer';
import MarketplaceHero from './MarketplaceHero';
import EscrowFlowSection from './EscrowFlowSection';
import MarketplaceCategories from './MarketplaceCategories';
import MarketplaceChatSection from './MarketplaceChatSection';
import SellerBenefitsSection from './SellerBenefitsSection';

export default function MarketplacePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-[#1C2822] font-sans antialiased selection:bg-[#CEE9DF] selection:text-[#045137]">
      {/* 1. Universal Navbar with Zuwaa logo and nav links */}
      <Navbar onNavigate={onNavigate} />

      {/* 2. Hero Section */}
      <MarketplaceHero onNavigate={onNavigate} />

      {/* 3. Interactive 3-Step Escrow Protection Flow */}
      <EscrowFlowSection onNavigate={onNavigate} />

      {/* 4. Live Marketplace Categories & Featured Listings Grid */}
      <MarketplaceCategories onNavigate={onNavigate} />

      {/* 5. In-App Safe Chat & Offer System */}
      <MarketplaceChatSection onNavigate={onNavigate} />

      {/* 6. Seller Benefits & 3% Capped Fee Banner */}
      <SellerBenefitsSection onNavigate={onNavigate} />

      {/* 7. Universal Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
