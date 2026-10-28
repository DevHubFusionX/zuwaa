import React, { useState, useEffect } from 'react';
import Navbar from '../landing-page/Navbar';
import Footer from '../landing-page/Footer';
import ProductsHero from './ProductsHero';
import AccountsTab from './AccountsTab';
import PaymentsTab from './PaymentsTab';
import CardsTab from './CardsTab';
import CreditTab from './CreditTab';
import SavingsTab from './SavingsTab';

export default function ProductsPage({ initialTab = 'accounts', onNavigate }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync tab with URL search parameter if present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, []);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tabId);
    window.history.pushState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'accounts':
        return <AccountsTab />;
      case 'payments':
        return <PaymentsTab />;
      case 'cards':
        return <CardsTab />;
      case 'credit':
        return <CreditTab />;
      case 'savings-and-investments':
        return <SavingsTab />;
      default:
        return <AccountsTab />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1C2822] antialiased selection:bg-[#CEE9DF] selection:text-[#1C2822]">
      {/* 1. Universal Navbar with Zuwaa logo and nav links */}
      <Navbar onNavigate={onNavigate} />

      {/* 2. Products Hero with Left Tabs Sidebar + Right Hero Card */}
      <ProductsHero activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* 3. Detailed Tab Content (e.g. 8 sub-products for Accounts, etc.) */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-[92%] max-w-[1440px] mx-auto">
          {renderActiveTabContent()}
        </div>
      </section>

      {/* 4. Universal Dark Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
