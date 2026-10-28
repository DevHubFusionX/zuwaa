import React, { useState, useEffect, useRef } from 'react';
import ZuwaLogo from './ZuwaLogo';
import {
  Zap,
  ShoppingBag,
  Wallet,
  PieChart,
  ShieldCheck,
  HelpCircle,
  FileText,
  Building2,
  Lock,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Anchor-style dropdown links with icons, descriptions, and subtle arrows
  const productsList = [
    {
      title: 'Accounts & Wallets',
      desc: 'Personal NUBAN account number & compliant digital wallets',
      href: '/products?tab=accounts',
      icon: Wallet
    },
    {
      title: 'Bills & Payments',
      desc: 'Airtime, data, DStv, electricity & instant transfers',
      href: '/products?tab=payments',
      icon: Zap
    },
    {
      title: 'Escrow & Cards',
      desc: 'Buy & sell with guaranteed escrow and virtual debit cards',
      href: '/products?tab=cards',
      icon: ShoppingBag
    },
    {
      title: 'Credit & BNPL',
      desc: 'Installment loans and binding offers right in chat',
      href: '/products?tab=credit',
      icon: ShieldCheck
    },
    {
      title: 'Savings & Spending Tracker',
      desc: 'High-yield target savings and automatic budget alerts',
      href: '/products?tab=savings-and-investments',
      icon: PieChart
    }
  ];

  const resourcesList = [
    {
      title: 'Safety & Trust',
      desc: 'Escrow dispute review & verified accounts',
      href: '#safety',
      icon: ShieldCheck
    },
    {
      title: 'CBN Tiered KYC Guide',
      desc: 'Limits, BVN/NIN verification & tiers',
      href: '#safety',
      icon: Lock
    },
    {
      title: 'Frequently Asked Questions',
      desc: 'Instant answers to all common questions',
      href: '#faq',
      icon: HelpCircle
    },
    {
      title: 'Brand & Logo Assets',
      desc: 'Vector SVGs, colors & brand guidelines',
      href: '#brand',
      icon: FileText
    }
  ];

  const companyList = [
    {
      title: 'About Zuwaa',
      desc: 'Our mission for everyday commerce in Nigeria',
      href: '/about',
      icon: Building2
    },
    {
      title: 'Compliance & Partners',
      desc: 'Licensed financial infrastructure (Monnify, Pairgate)',
      href: '#compliance',
      icon: ShieldCheck
    },
    {
      title: 'Contact Sales / Support',
      desc: 'Lagos headquarters and dedicated support',
      href: '#contact',
      icon: ArrowRight
    }
  ];

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white ${
        isScrolled
          ? 'shadow-xs border-b border-grey-200/70 py-4'
          : 'py-6 sm:py-7 border-b border-transparent'
      }`}
    >
      <div className="w-[90%] max-w-[1440px] mx-auto flex items-center justify-between">
        
        {/* Left: Zuwaa Logo (Anchor lockup style: geometric icon + bold wordmark) */}
        <div className="flex items-center shrink-0">
          <ZuwaLogo
            variant="full"
            color="dark"
            size={32}
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/');
              }
            }}
            className="cursor-pointer"
          />
        </div>

        {/* Center: Anchor Nav Links (Exact Anchor 40px gap, #767676 text, 15px font size) */}
        <nav className="hidden lg:flex items-center space-x-10">
          
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('products')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
              className={`inline-flex items-center gap-1.5 text-[15px] font-normal tracking-[-0.2px] transition-colors cursor-pointer select-none ${
                openDropdown === 'products' ? 'text-[#045137] font-medium' : 'text-[#767676] hover:text-[#0E1412]'
              }`}
            >
              <span>Products</span>
              {/* Anchor-style downward chevron */}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                className={`transition-transform duration-200 ${
                  openDropdown === 'products' ? 'rotate-180 text-[#045137]' : 'text-[#767676]'
                }`}
              >
                <path
                  d="M1 1.25L4.5 4.75L8 1.25"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Products Dropdown Menu */}
            {openDropdown === 'products' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-84 z-50">
                <div className="bg-white rounded-2xl p-3 shadow-xl border border-grey-200/90 ring-1 ring-black/5 space-y-1">
                  {productsList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={(e) => {
                          setOpenDropdown(null);
                          if (onNavigate && item.href.startsWith('/products')) {
                            e.preventDefault();
                            onNavigate(item.href);
                          }
                        }}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F1F9F6] transition-colors group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F1F9F6] text-[#045137] flex items-center justify-center shrink-0 group-hover:bg-[#045137] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-ink-950 group-hover:text-[#045137] transition-colors">
                            {item.title}
                          </div>
                          <p className="text-2xs text-[#767676] truncate mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Marketplace Direct Link (Anchor direct link style) */}
          <a
            href="/marketplace"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/marketplace');
              }
            }}
            className="text-[15px] font-normal tracking-[-0.2px] text-[#767676] hover:text-[#0E1412] transition-colors cursor-pointer"
          >
            Marketplace
          </a>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('resources')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
              className={`inline-flex items-center gap-1.5 text-[15px] font-normal tracking-[-0.2px] transition-colors cursor-pointer select-none ${
                openDropdown === 'resources' ? 'text-[#045137] font-medium' : 'text-[#767676] hover:text-[#0E1412]'
              }`}
            >
              <span>Resources</span>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                className={`transition-transform duration-200 ${
                  openDropdown === 'resources' ? 'rotate-180 text-[#045137]' : 'text-[#767676]'
                }`}
              >
                <path
                  d="M1 1.25L4.5 4.75L8 1.25"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Resources Dropdown Menu */}
            {openDropdown === 'resources' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 z-50">
                <div className="bg-white rounded-2xl p-3 shadow-xl border border-grey-200/90 ring-1 ring-black/5 space-y-1">
                  {resourcesList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F1F9F6] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-grey-100 text-grey-700 flex items-center justify-center shrink-0 group-hover:bg-[#045137] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-ink-950 group-hover:text-[#045137] transition-colors">
                            {item.title}
                          </div>
                          <p className="text-2xs text-[#767676] truncate mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('company')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'company' ? null : 'company')}
              className={`inline-flex items-center gap-1.5 text-[15px] font-normal tracking-[-0.2px] transition-colors cursor-pointer select-none ${
                openDropdown === 'company' ? 'text-[#045137] font-medium' : 'text-[#767676] hover:text-[#0E1412]'
              }`}
            >
              <span>Company</span>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                className={`transition-transform duration-200 ${
                  openDropdown === 'company' ? 'rotate-180 text-[#045137]' : 'text-[#767676]'
                }`}
              >
                <path
                  d="M1 1.25L4.5 4.75L8 1.25"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Company Dropdown Menu */}
            {openDropdown === 'company' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-76 z-50">
                <div className="bg-white rounded-2xl p-3 shadow-xl border border-grey-200/90 ring-1 ring-black/5 space-y-1">
                  {companyList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={(e) => {
                          setOpenDropdown(null);
                          if (onNavigate && item.href.startsWith('/')) {
                            e.preventDefault();
                            onNavigate(item.href);
                          }
                        }}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F1F9F6] transition-colors group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-grey-100 text-grey-700 flex items-center justify-center shrink-0 group-hover:bg-[#045137] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-ink-950 group-hover:text-[#045137] transition-colors">
                            {item.title}
                          </div>
                          <p className="text-2xs text-[#767676] truncate mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Anchor-style "Get the app" Pill Button + "Sign in" */}
        <div className="hidden sm:flex items-center space-x-6 shrink-0">
          {/* Primary Button: Exact Anchor #045137 / #084B36 with letter-spacing: -0.36px */}
          <a
            href="#download"
            className="inline-flex items-center justify-center px-7 py-3 rounded-[16px] bg-[#045137] hover:bg-[#033c29] text-[#F1F9F6] text-[15px] font-medium tracking-[-0.36px] transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.98] select-none cursor-pointer"
          >
            Get the app
          </a>

          {/* Sign in text link */}
          <a
            href="#signin"
            className="text-[15px] font-normal tracking-[-0.2px] text-[#767676] hover:text-[#0E1412] transition-colors"
          >
            Sign in
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#045137] text-white text-xs font-medium shadow-xs"
          >
            Get the app
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#767676] hover:text-[#0E1412] rounded-lg cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-grey-200/80 bg-white px-6 pb-6 space-y-4">
          <div className="space-y-1">
            <div className="py-1 text-2xs font-bold uppercase tracking-wider text-[#767676]">
              Products
            </div>
            {productsList.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 py-2 text-sm text-[#0E1412] font-medium"
              >
                <item.icon className="w-4 h-4 text-[#045137]" />
                <span>{item.title}</span>
              </a>
            ))}

            <div className="pt-3 py-1 text-2xs font-bold uppercase tracking-wider text-[#767676]">
              Company &amp; Resources
            </div>
            <a
              href="/about"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/about');
                }
              }}
              className="block py-2 text-sm text-[#0E1412] font-medium cursor-pointer"
            >
              About Zuwaa
            </a>
            <a
              href="/marketplace"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/marketplace');
                }
              }}
              className="block py-2 text-sm text-[#0E1412] font-medium cursor-pointer"
            >
              Marketplace
            </a>
            <a
              href="#safety"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#0E1412] font-medium"
            >
              Safety &amp; Compliance
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#0E1412] font-medium"
            >
              FAQ &amp; Guides
            </a>
          </div>

          <div className="pt-4 border-t border-grey-200 flex flex-col gap-3">
            <a
              href="#signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-sm font-medium text-[#767676]"
            >
              Sign in
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-[#045137] text-white text-sm font-medium shadow-xs"
            >
              Get the app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
