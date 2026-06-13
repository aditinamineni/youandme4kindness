import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      {/* Navbar */}
      <Navbar cartCount={cartCount} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <HeroSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Navbar({ cartCount, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#C8336B] to-[#D94E7B] h-20 md:h-[90px] flex items-center px-4 md:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-white font-serif text-2xl md:text-3xl font-bold tracking-tight">
            You & Me For Kindness
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#scrunchies">Aditi's Scrunchies</NavLink>
          <NavLink href="#story">Our Story</NavLink>
          <NavLink href="#mission">Our Mission</NavLink>
          <NavLink href="#purchase">Purchase</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#involved">Get Involved</NavLink>

          {/* Cart Icon */}
          <div className="relative cursor-pointer hover:scale-110 transition-transform duration-300">
            <ShoppingBag className="w-6 h-6 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E8B11C] text-[#2B2B2B] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* CTA Button */}
          <button className="bg-[#E8B11C] hover:bg-[#d4a01f] text-[#2B2B2B] font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-6 h-6 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E8B11C] text-[#2B2B2B] text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                {cartCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:scale-110 transition-transform"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-gradient-to-b from-[#D94E7B] to-[#C8336B] md:hidden">
          <div className="flex flex-col gap-4 p-6">
            <MobileNavLink href="#scrunchies" onClick={() => setIsMenuOpen(false)}>
              Aditi's Scrunchies
            </MobileNavLink>
            <MobileNavLink href="#story" onClick={() => setIsMenuOpen(false)}>
              Our Story
            </MobileNavLink>
            <MobileNavLink href="#mission" onClick={() => setIsMenuOpen(false)}>
              Our Mission
            </MobileNavLink>
            <MobileNavLink href="#purchase" onClick={() => setIsMenuOpen(false)}>
              Purchase
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <MobileNavLink href="#involved" onClick={() => setIsMenuOpen(false)}>
              Get Involved
            </MobileNavLink>
            <button className="bg-[#E8B11C] hover:bg-[#d4a01f] text-[#2B2B2B] font-bold px-6 py-2 rounded-full w-full transition-all duration-300">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-white font-medium hover:text-[#E8B11C] transition-colors duration-300 text-sm"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-white font-medium hover:text-[#E8B11C] transition-colors duration-300"
    >
      {children}
    </a>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column - Typography */}
        <div className="space-y-8">
          {/* Headline with Yellow Underline */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#2B2B2B] leading-tight">
              Empowering Every{' '}
              <span className="relative inline-block">
                Ability
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 200 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10,20 Q50,10 100,20 T190,20"
                    stroke="#E8B11C"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              . Inspiring Every Dream.
            </h1>
          </div>

          {/* Body Text */}
          <p className="text-lg md:text-xl text-[#7A7A52] leading-relaxed font-light">
            Through handmade products, dance, inclusive programs, and community resources, we{' '}
            <span className="relative inline-block font-semibold text-[#2B2B2B]">
              empower
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 100 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5,10 Q25,5 50,10 T95,10"
                  stroke="#E8B11C"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            individuals with special needs to build confidence, express themselves, and thrive.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="bg-[#C8336B] hover:bg-[#b02960] text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
              Get Started
            </button>
            <button className="border-2 border-[#C8336B] hover:bg-[#C8336B] text-[#C8336B] hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column - Collage */}
        <div className="relative h-96 md:h-[500px]">
          <CollageSection />
        </div>
      </div>
    </section>
  );
}

function CollageSection() {
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&h=400&fit=crop',
      rotation: -5,
      position: 'top-0 left-0',
      size: 'w-32 h-32 md:w-40 md:h-40',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=400&fit=crop',
      rotation: 3,
      position: 'top-24 left-28 md:top-32 md:left-40',
      size: 'w-36 h-36 md:w-48 md:h-48',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1555097462-c2dfc2c45f25?w=400&h=400&fit=crop',
      rotation: -3,
      position: 'top-48 left-2 md:top-64 md:left-4',
      size: 'w-28 h-28 md:w-36 md:h-36',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop',
      rotation: 4,
      position: 'top-20 right-0 md:top-24 md:right-0',
      size: 'w-32 h-32 md:w-44 md:h-44',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      rotation: -2,
      position: 'bottom-0 right-20 md:bottom-4 md:right-32',
      size: 'w-28 h-28 md:w-40 md:h-40',
    },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Handwritten style text in center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <p className="font-['Caveat'] text-3xl md:text-5xl text-[#B084CC] opacity-30 whitespace-nowrap">
          You & Me for kindness
        </p>
      </div>

      {/* Images */}
      {images.map((image) => (
        <CollageCard key={image.id} {...image} />
      ))}

      {/* Decorative Doodles */}
      <div className="absolute top-10 right-10 text-3xl animate-bounce">⭐</div>
      <div className="absolute bottom-20 left-10 text-2xl opacity-60">💖</div>
      <div className="absolute top-1/3 right-5 text-2xl opacity-70">✨</div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-50">→</div>
    </div>
  );
}

function CollageCard({ url, rotation, position, size }) {
  return (
    <div
      className={`absolute ${position} ${size} transition-all duration-300 transform hover:scale-110 hover:shadow-2xl cursor-pointer`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Tape effect on top */}
      <div className="absolute -top-3 left-1/4 w-1/2 h-3 bg-yellow-100 opacity-40 blur-sm -rotate-3"></div>

      {/* White border with shadow */}
      <div className="relative w-full h-full bg-white shadow-lg rounded-sm overflow-hidden">
        <img
          src={url}
          alt="collage"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#C8336B] to-[#D94E7B] text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">You & Me For Kindness</h3>
            <p className="text-sm opacity-90">Empowering every ability, inspiring every dream.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#E8B11C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#E8B11C] transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-[#E8B11C] transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-[#E8B11C] transition-colors">Volunteer</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:aditinamineni6@gmail.com" className="hover:text-[#E8B11C] transition-colors">aditinamineni6@gmail.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-[#E8B11C] transition-colors">+1 (234) 567-8900</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#E8B11C] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#E8B11C] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#E8B11C] transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white opacity-30 pt-8 text-center text-sm">
          <p>&copy; 2024 You & Me For Kindness. All rights reserved. | Handcrafted with love ❤️</p>
        </div>
      </div>
    </footer>
  );
}
