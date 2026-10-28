import React, { useState, useEffect } from 'react';
import LandingPage from './landing-page';
import ProductsPage from './products-page';
import MarketplacePage from './marketplace-page';
import AboutPage from './about-page';

export default function App() {
  const [currentUrl, setCurrentUrl] = useState(() => {
    return window.location.pathname + window.location.search;
  });

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentUrl(window.location.pathname + window.location.search);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentUrl(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine active view
  const isAbout = currentUrl.startsWith('/about') || currentUrl.startsWith('/company/about-us');
  const isMarketplace = currentUrl.startsWith('/marketplace');
  const isProducts = currentUrl.startsWith('/products') || currentUrl.includes('tab=');

  if (isAbout) {
    return <AboutPage onNavigate={navigateTo} />;
  }

  if (isMarketplace) {
    return <MarketplacePage onNavigate={navigateTo} />;
  }

  // Extract selected tab from query string
  let initialTab = 'accounts';
  if (currentUrl.includes('tab=')) {
    const queryPart = currentUrl.includes('?') ? currentUrl.split('?')[1] : currentUrl;
    const params = new URLSearchParams(queryPart);
    initialTab = params.get('tab') || 'accounts';
  }

  if (isProducts) {
    return <ProductsPage initialTab={initialTab} onNavigate={navigateTo} />;
  }

  return <LandingPage onNavigate={navigateTo} />;
}
