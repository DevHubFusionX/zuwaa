import React, { useEffect } from 'react';
import Navbar from '../landing-page/Navbar';
import Footer from '../landing-page/Footer';
import AboutHeroSection from './AboutHeroSection';
import MissionVisionSection from './MissionVisionSection';
import CareersSection from './CareersSection';
import PartnersTickerSection from './PartnersTickerSection';
import PressSection from './PressSection';

export default function AboutPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F9F8] text-[#0E1412] font-sans selection:bg-[#045137] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* 2. Hero Section (Anchor about-hero layout & 3D tilt) */}
      <AboutHeroSection />

      {/* 3. Our Mission & Our Vision (Anchor framed modular blocks) */}
      <MissionVisionSection />

      {/* 4. Join Our Team CTA */}
      <CareersSection />

      {/* 5. Backed By & Partnered With Marquee */}
      <PartnersTickerSection />

      {/* 6. Press & Media Articles Slider */}
      <PressSection />

      {/* 7. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
