"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react"; // Assuming you use lucide-react for clean icons

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out border-b ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <Link 
          href="/" 
          className="text-2xl font-apple font-medium tracking-tight text-white"
        >
          Conquest Visa
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-light tracking-wide text-white/80">
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/explore" className="hover:text-white transition-colors">
            Explore
          </Link>
          <Link href="/help" className="hover:text-white transition-colors">
            Help
          </Link>
        </div>

        {/* Search */}
        <div className="relative group hidden md:block">
          <input
            type="text"
            placeholder="Search destinations..."
            className="bg-white/5 border border-white/10 text-white text-sm rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-white/30 focus:bg-white/10 transition-all placeholder:text-white/40 w-48 focus:w-64"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 group-focus-within:text-white/80 transition-colors" />
        </div>
      </div>
    </nav>
  );
}