import React, { useState } from 'react';
import ZuwaLogo from './ZuwaLogo';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#051205] text-[#8F9E98] font-sans pt-20 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        
        {/* 1. Top Call To Action: "Start managing money with Zuwaa" */}
        <div className="text-center max-w-[680px] mx-auto pb-20 sm:pb-24 border-b border-white/10">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-normal text-white tracking-[-1px] leading-[1.12] mb-4">
            Start managing money with Zuwaa
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#8F9E98] leading-[1.5] max-w-[560px] mx-auto mb-8 font-normal">
            Download the free app to pay everyday bills with instant receipts, shop with verified escrow protection, and track your cash.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[14px] bg-[#045137] hover:bg-[#033c29] text-white text-[15px] font-medium tracking-tight transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <span>Get Zuwaa, it's free</span>
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
        </div>

        {/* 2. Main 5-Column Navigation Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12 py-16 sm:py-20 border-b border-white/10">
          
          {/* Column 1: Products */}
          <div>
            <h3 className="text-white text-[15px] font-medium tracking-tight mb-4 sm:mb-5">
              Products
            </h3>
            <ul className="space-y-3 text-[14.5px]">
              <li>
                <a href="#bills" className="hover:text-white transition-colors">Bills & Airtime</a>
              </li>
              <li>
                <a
                  href="/marketplace"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/marketplace');
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Escrow Marketplace
                </a>
              </li>
              <li>
                <a href="/products?tab=accounts" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('/products?tab=accounts'); } }} className="hover:text-white transition-colors cursor-pointer">Wallet & NUBAN</a>
              </li>
              <li>
                <a href="#spending-tracker" className="hover:text-white transition-colors">Spending Tracker</a>
              </li>
              <li>
                <a href="#in-app-chat" className="hover:text-white transition-colors">In-App Chat</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-white text-[15px] font-medium tracking-tight mb-4 sm:mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-[14.5px]">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/about');
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Zuwaa
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">Security & Trust</a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white transition-colors">Compliance & Partners</a>
              </li>
              <li>
                <a href="mailto:hello@zuwaa.com" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white text-[15px] font-medium tracking-tight mb-4 sm:mb-5">
              Resources
            </h3>
            <ul className="space-y-3 text-[14.5px]">
              {['How Escrow Works', 'CBN Tiered KYC', 'Fee Schedule', 'Help Center & FAQs', 'Brand Assets'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-white text-[15px] font-medium tracking-tight mb-4 sm:mb-5">
              Legal
            </h3>
            <ul className="space-y-3 text-[14.5px]">
              {['Privacy Policy', 'Terms of Use', 'Escrow Agreement', 'Dispute Resolution'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Offices / Addresses */}
          <div className="col-span-2 sm:col-span-1 space-y-6">
            <div>
              <h3 className="text-white text-[15px] font-medium tracking-tight mb-2">
                Nigeria
              </h3>
              <p className="text-[14px] leading-[1.5] text-[#8F9E98] max-w-[190px]">
                19 Ojulari Street, Ikate, Lekki, Lagos
              </p>
            </div>
            <div>
              <h3 className="text-white text-[15px] font-medium tracking-tight mb-2">
                United States
              </h3>
              <p className="text-[14px] leading-[1.5] text-[#8F9E98] max-w-[210px]">
                256, Chapman Road, STE 105-4, Newark, Delaware, USA 19702
              </p>
            </div>
          </div>

        </div>

        {/* 3. Bottom Row: Brand Note, Email, Social Links, and Newsletter Form */}
        <div className="pt-14 sm:pt-16 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            {/* Left Note with Logo */}
            <div className="max-w-[440px] space-y-3">
              <div className="flex items-center gap-2">
                <ZuwaLogo variant="full" color="light" size="sm" />
              </div>
              <p className="text-[13px] leading-[1.55] text-[#8F9E98]">
                Zuwaa is a financial technology platform and not a bank. Virtual account and banking services are provided by our partner banks (e.g. Moniepoint MFB) duly licensed by the Central Bank of Nigeria (CBN).
              </p>
            </div>

            {/* Right: Email and Social Icons */}
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-[14px] font-medium mb-1">Email</h4>
                <a
                  href="mailto:hello@zuwaa.com"
                  className="text-[14.5px] text-[#8F9E98] hover:text-white transition-colors"
                >
                  hello@zuwaa.com
                </a>
              </div>

              {/* Social Media SVG Icons matching Anchor */}
              <div className="flex items-center gap-4 text-[#8F9E98]">
                {/* Twitter / X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Newsletter Subscription Row */}
          <div className="pt-2">
            <h4 className="text-white text-[14px] font-normal mb-3">
              Stay in touch, get useful updates promptly.
            </h4>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white text-[#1A1A1A] placeholder:text-grey-400 px-4 py-2.5 rounded-[6px] sm:rounded-[8px] text-[14px] focus:outline-none flex-1 shadow-2xs"
              />
              <button
                type="submit"
                className="bg-white text-[#045137] hover:bg-grey-100 px-5 py-2.5 rounded-[6px] sm:rounded-[8px] text-[14px] font-semibold transition-colors shadow-2xs cursor-pointer text-center"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-[#0BE49B] text-xs mt-2 font-medium">
                Thank you! Your submission has been received.
              </p>
            )}
          </div>

          {/* Copyright and Company Name */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#8F9E98]/70">
            <p>&copy; 2026 Zuwaa Technologies Ltd. All rights reserved.</p>
            <p className="text-2xs">Built for everyday Nigeria &bull; Powered by verified partner infrastructure</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
