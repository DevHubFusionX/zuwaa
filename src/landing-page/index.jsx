import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProductCarouselSection from './ProductCarouselSection';
import BusinessShowcaseSection from './BusinessShowcaseSection';
import ComplianceSection from './ComplianceSection';
import Footer from './Footer';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-ink-950 flex flex-col font-sans selection:bg-[#CEE9DF] selection:text-[#045137]">
      {/* 1. Anchor-Style Navbar */}
      <Navbar onNavigate={onNavigate} />

      {/* 2. Anchor-Style Hero Section (H1, Subtext, "Get started" button) */}
      <HeroSection onNavigate={onNavigate} />

      {/* 3. Product Suite Cards Carousel with Anchor SVGs & horizontal scroll */}
      <ProductCarouselSection onNavigate={onNavigate} />

      {/* 4. Businesses Showcase: Partners Marquee & Case Study Slide Carousel with GSAP Animations */}
      <BusinessShowcaseSection onNavigate={onNavigate} />

      {/* 5. Compliance & Trust Pillars Section */}
      <ComplianceSection onNavigate={onNavigate} />

      {/* 6. Footer (CTA, 5-Column Navigation, Office Addresses, Social, and Newsletter) */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export { Navbar, HeroSection, ProductCarouselSection, BusinessShowcaseSection, ComplianceSection, Footer };



