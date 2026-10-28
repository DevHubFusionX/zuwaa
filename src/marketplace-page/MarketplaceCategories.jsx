import React, { useState } from 'react';

export default function MarketplaceCategories() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All items' },
    { id: 'phones', label: 'Phones & tablets' },
    { id: 'electronics', label: 'Electronics & audio' },
    { id: 'computers', label: 'Computers & laptops' },
    { id: 'fashion', label: 'Fashion & apparel' },
    { id: 'home', label: 'Home & furniture' },
    { id: 'community', label: 'Community items' }
  ];

  const sampleListings = [
    {
      id: 'item-1',
      title: 'iPhone 14 Pro 128GB Deep Purple',
      price: '₦680,000',
      category: 'phones',
      location: 'Ikeja, Lagos',
      seller: 'Chidi Gadgets',
      condition: 'Like New (96% Battery)',
      image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'item-2',
      title: 'MacBook Air 13" M2 (8GB RAM, 256GB SSD)',
      price: '₦890,000',
      category: 'computers',
      location: 'Lekki Phase 1, Lagos',
      seller: 'TechHub Prime',
      condition: 'Pre-owned',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'item-3',
      title: 'Sony WH-1000XM5 Wireless Headphones',
      price: '₦260,000',
      category: 'electronics',
      location: 'Gwarinpa, Abuja',
      seller: 'Amina Sounds',
      condition: 'Brand New',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'item-4',
      title: 'PlayStation 5 Console with DualSense Controller',
      price: '₦620,000',
      category: 'electronics',
      location: 'Yaba, Lagos',
      seller: 'Gamers Arena NG',
      condition: 'Excellent Condition',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'item-5',
      title: 'Nike Dunk Low Retro "Panda" (Size 44)',
      price: '₦55,000',
      category: 'fashion',
      location: 'Surulere, Lagos',
      seller: 'Kicks By Tobi',
      condition: 'Brand New',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'item-6',
      title: 'Solid Wood Office Study Desk with Storage',
      price: 'Free (Community)',
      category: 'community',
      location: 'Bodija, Ibadan',
      seller: 'Tunde Relocation',
      condition: 'Good Condition',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filtered =
    selectedCategory === 'all'
      ? sampleListings
      : sampleListings.filter((item) => item.category === selectedCategory);

  return (
    <section id="listings" className="py-20 sm:py-32 bg-white">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[32px] sm:text-[44px] font-normal tracking-[-1px] text-[#1C2822] leading-[1.12] font-sans">
              Marketplace listings.
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#55655F]">
              Browse verified items from trusted sellers across Nigeria.
            </p>
          </div>

          <span className="text-xs text-[#767676]">
            Every order is protected by escrow
          </span>
        </div>

        {/* Minimalist, mature Category Filters (no emojis, clean text tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-grey-100 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-[14px] text-[14px] font-normal tracking-[-0.2px] whitespace-nowrap transition-colors cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#1C2822] text-white font-medium'
                    : 'text-[#55655F] hover:text-[#1C2822] hover:bg-grey-100/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Clean, spacious Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col cursor-pointer"
            >
              {/* Product Image: clean, no overlay badges */}
              <div className="relative w-full aspect-[4/3] rounded-[20px] bg-grey-100 overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Title & Price */}
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[16px] font-medium text-[#1C2822] leading-snug group-hover:text-[#045137] transition-colors truncate">
                    {item.title}
                  </h3>
                  <span className="text-[16px] font-semibold text-[#1C2822] shrink-0">
                    {item.price}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[13px] text-[#767676]">
                  <span>{item.location}</span>
                  <span>{item.condition}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
