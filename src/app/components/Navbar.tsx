"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const searchData = [
  { name: "Canada Visa", type: "Tourist & Student", href: "/explore" },
  { name: "UK Visa", type: "Student (Tier 4)", href: "/explore" },
  { name: "US Tourist Visa", type: "Visitor", href: "/contact" },
  { name: "US Student Visa", type: "F-1", href: "/contact" },
  { name: "Australia Visa", type: "Student Subclass", href: "/contact" },
  { name: "Schengen Visa", type: "Europe Travel", href: "/contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const filteredResults = searchData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out border-b ${
        isScrolled || isSearchOpen || isMobileMenuOpen
          ? "bg-neutral-950/95 backdrop-blur-xl border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-apple font-medium tracking-tight text-white relative z-50"
        >
          Conquest Visa
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-light tracking-wide text-white/80">
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/explore" className="hover:text-white transition-colors">
            Explore
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Help
          </Link>
        </div>

        <div className="relative group hidden md:block" ref={searchRef}>
          <div className="relative z-10">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Search destinations..."
              className="bg-white/5 border border-white/10 text-white text-sm rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 focus:bg-white/10 transition-all placeholder:text-white/40 w-48 focus:w-72"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 group-focus-within:text-cyan-400 transition-colors" />
          </div>

          {isSearchOpen && searchQuery.length > 0 && (
            <div className="absolute top-full mt-4 right-0 w-80 bg-neutral-900 border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl animate-fade-in-up">
              {filteredResults.length > 0 ? (
                <div className="flex flex-col gap-1 max-h-80 overflow-y-auto hide-scrollbar">
                  {filteredResults.map((result, idx) => (
                    <Link 
                      href={result.href} 
                      key={idx}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex flex-col p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                    >
                      <span className="text-white text-sm font-medium group-hover/item:text-cyan-400 transition-colors">
                        {result.name}
                      </span>
                      <span className="text-white/40 text-xs font-light mt-0.5">
                        {result.type}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center">
                  <p className="text-white/50 text-sm font-light">No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )}
        </div>

        <button 
          className="md:hidden relative z-50 text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-xl md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-6 py-8 h-full overflow-y-auto pb-32">
              <div className="relative mb-10">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations..."
                  className="w-full bg-white/5 border border-white/10 text-white text-base rounded-2xl py-4 pl-5 pr-12 focus:outline-none focus:border-cyan-400/50 transition-all placeholder:text-white/40"
                />
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                
                {searchQuery.length > 0 && (
                  <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-2 max-h-60 overflow-y-auto hide-scrollbar">
                    {filteredResults.length > 0 ? (
                      filteredResults.map((result, idx) => (
                        <Link 
                          href={result.href} 
                          key={idx}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex flex-col p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                        >
                          <span className="text-white font-medium">{result.name}</span>
                          <span className="text-white/40 text-sm font-light">{result.type}</span>
                        </Link>
                      ))
                    ) : (
                      <div className="p-6 text-center text-white/50 font-light text-sm">
                        No results found
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-6 text-2xl font-apple font-medium tracking-tight">
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors border-b border-white/10 pb-6"
                >
                  About Us
                </Link>
                <Link 
                  href="/explore" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors border-b border-white/10 pb-6"
                >
                  Explore Destinations
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-cyan-400 transition-colors pb-6"
                >
                  Get Help & Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}