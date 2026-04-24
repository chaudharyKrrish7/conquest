"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Globe, GraduationCap, Briefcase, Plane, 
  MapPin, Mail, Phone, Camera, ArrowRight, Quote,
  Send, ShieldCheck, Landmark, Star, CheckCircle2, Search
} from 'lucide-react';

export default function ConquestVisaFinal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const feeData = [
    { country: "United States", type: "Tourist Visa", price: "40k", detail: "End-to-end filing" },
    { country: "United States", type: "Student Visa", price: "40k", detail: "Interview coaching" },
    { country: "United Kingdom", type: "Student Visa", price: "10k", detail: "CAS assistance" },
    { country: "Canada", type: "Visitor/Student", price: "5k", detail: "Excl. Govt fee" },
    { country: "Australia", type: "Student Visa", price: "10k", detail: "GTE & Filing" },
    { country: "Schengen", type: "Europe", price: "3k", detail: "Expert Documentation" },
  ];

  const clients = [
    "DTDC Express", "Softgel Healthcare", "SLMG Beverages", "OM Metals", "Reblue Ventures", "Hotel Majestic"
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#121212] font-sans selection:bg-amber-100">
      
      {/* --- PREMIUM NAVIGATION --- */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <span className={`text-2xl font-light tracking-[0.4em] uppercase transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Conquest</span>
            <span className="text-[9px] tracking-[0.6em] uppercase text-amber-500 font-bold -mt-1">Immigration</span>
          </div>

          <div className={`hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-semibold ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
            {['Expertise', 'Investment', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-none transition-all duration-500 tracking-widest">
              Book Appointment
            </button>
          </div>

          <button className={`lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`} onClick={() => setIsMenuOpen(true)}>
            <Menu strokeWidth={1} size={32} />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/32642484/pexels-photo-32642484.jpeg?_gl=1*ebrmlf*_ga*NDE4MDcyMjAzLjE3NjY4MjkyOTQ.*_ga_8JE65Q40S6*czE3NzY5ODg4NzAkbzEyJGcxJHQxNzc2OTg5NjUxJGo0MyRsMCRoMA.." 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Conquest Visa Premium"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <span className="text-amber-400 font-bold tracking-[0.4em] uppercase text-[10px]">Established 1996</span>
            </div>
            <h1 className="text-6xl md:text-[110px] font-extralight leading-[0.9] mb-10 tracking-tighter">
              Your Gateway <br /> <span className="italic font-serif text-amber-500">To The World.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <button className="bg-white text-black px-12 py-6 text-xs tracking-[0.3em] uppercase hover:bg-amber-600 hover:text-white transition-all font-bold">
                Start My Application
              </button>
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-slate-400 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
                <div className="flex flex-col justify-center pl-8">
                  <p className="text-xs font-bold text-amber-500">10k+ Satisfied</p>
                  <p className="text-[10px] text-slate-400">Global Travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST BAR / STATS --- */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-10">
          {[
            { label: "Years Experience", val: "30+" },
            { label: "Visa Success Rate", val: "99%" },
            { label: "Global Destinations", val: "190+" },
            { label: "Corporate Clients", val: "250+" }
          ].map((s, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl font-serif italic text-amber-700">{s.val}</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES: THE SPLIT LAYOUT --- */}
      <section id="expertise" className="py-32 bg-[#F9F7F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-slate-200 overflow-hidden">
                <img 
                    src="https://i.pinimg.com/736x/82/f5/b4/82f5b4a4ad7829e09bfb788a42e3091f.jpg" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Education"
                />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-amber-600 p-12 text-white hidden md:block">
              <Globe size={40} strokeWidth={1} className="mb-4" />
              <p className="text-xl font-light">Worldwide <br/>Coverage</p>
            </div>
          </div>
          
          <div className="space-y-10">
            <h2 className="text-5xl font-light leading-tight">Driven by <span className="italic font-serif text-amber-800">Expertise</span> built for Global Mobility.</h2>
            <p className="text-slate-500 leading-loose font-light italic">"Conquest Visa specializes in providing comprehensive visa assistance, travel insurance, and logistical support for students and professionals."</p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: <GraduationCap size={20}/>, title: "Student Visas", desc: "US, UK, Canada & Australia experts." },
                { icon: <Briefcase size={20}/>, title: "Work & Business", desc: "Seamless corporate migration." },
                { icon: <Plane size={20}/>, title: "Visitor Visas", desc: "Fast-track tourist applications." },
                { icon: <ShieldCheck size={20}/>, title: "Travel Insurance", desc: "Tailored to your specific itinerary." },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-amber-600">{item.icon}</div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEE SCHEDULE: THE ELITE GRID --- */}
      <section id="investment" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-light mb-4 uppercase tracking-[0.2em]">Service Investment</h2>
          <p className="text-slate-400 font-serif italic">Transparent fee structure for 2026</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {feeData.map((item, i) => (
            <div key={i} className="group border border-slate-100 p-12 bg-white hover:border-amber-600 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-amber-700 mb-6">{item.country}</p>
                <h3 className="text-xl font-light mb-2">{item.type}</h3>
                <p className="text-xs text-slate-400 mb-10 tracking-widest">{item.detail}</p>
              </div>
              <div className="flex items-baseline gap-2 pt-6 border-t border-slate-50">
                <span className="text-4xl font-serif italic">₹{item.price}</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-300">Base Service Fee</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORPORATE CLIENTS MARQUEE --- */}
      <section className="py-24 bg-white overflow-hidden border-y border-slate-100">
        <p className="text-center text-[10px] uppercase tracking-[0.5em] text-slate-300 mb-12">Trusted by Corporate Giants</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
          {clients.map(c => (
            <span key={c} className="text-lg font-black italic tracking-tighter uppercase">{c}</span>
          ))}
        </div>
      </section>

      {/* --- THE CONTACT ADVISORY FORM --- */}
      <section id="contact" className="py-32 bg-[#121212] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/2 translate-y-1/2">
            <Globe size={600} strokeWidth={0.5} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 relative z-10">
          <div>
            <h2 className="text-5xl font-light mb-8 leading-tight">Begin Your <br/><span className="text-amber-500 italic font-serif">Assessment</span></h2>
            <p className="text-slate-400 font-light leading-loose mb-16 max-w-md">
              Connect with our senior consultants for a private briefing on your immigration or education goals. 30 years of pedigree at your service.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-4">Direct Contact</p>
                <p className="text-lg mb-1">+91 98996 95814</p>
                <p className="text-slate-400 text-sm">conquestvisa@gmail.com</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-4">Social Presence</p>
                <div className="flex items-center gap-2">
                    <Camera size={18} className="text-slate-400"/>
                    <p className="text-sm">@conquestvis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 shadow-2xl">
            <h3 className="text-black text-xl mb-10 font-light">Confidential Inquiry</h3>
            <form className="space-y-8">
              <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-slate-200 py-4 text-black text-xs tracking-widest outline-none focus:border-amber-600 transition-all placeholder:text-slate-300" />
              <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-slate-200 py-4 text-black text-xs tracking-widest outline-none focus:border-amber-600 transition-all placeholder:text-slate-300" />
              <select className="w-full bg-transparent border-b border-slate-200 py-4 text-slate-400 text-xs tracking-widest outline-none focus:border-amber-600 transition-all appearance-none">
                <option>SELECT DESTINATION</option>
                <option>UNITED STATES</option>
                <option>UNITED KINGDOM</option>
                <option>CANADA / AUSTRALIA</option>
                <option>EUROPE (SCHENGEN)</option>
              </select>
              <textarea placeholder="MESSAGE" rows={3} className="w-full bg-transparent border-b border-slate-200 py-4 text-black text-xs tracking-widest outline-none focus:border-amber-600 transition-all placeholder:text-slate-300"></textarea>
              <button className="w-full bg-amber-600 text-white py-6 flex items-center justify-center gap-4 hover:bg-black transition-all font-bold tracking-[0.3em] text-[10px] uppercase">
                Submit Application <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- PREMIUM FOOTER --- */}
      <footer className="py-20 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-20">
          <div>
            <div className="mb-8">
              <span className="text-2xl font-light tracking-[0.4em] uppercase">Conquest</span>
              <span className="text-[9px] tracking-[0.6em] uppercase text-amber-600 font-bold block">Immigration</span>
            </div>
            <p className="text-xs text-slate-400 leading-loose max-w-xs uppercase tracking-widest font-medium">
              Head Office: 110, First Floor, Plot No 23, Parmesh Tower, Karkardooma Community Center, Delhi - 110092
            </p>
          </div>

          <div className="grid grid-cols-2 lg:col-span-2 gap-10">
            <div className="space-y-6">
              <p className="text-[10px] font-bold tracking-widest uppercase text-slate-300">Services</p>
              <ul className="text-xs space-y-4 text-slate-500 uppercase tracking-widest">
                <li className="hover:text-amber-600 cursor-pointer transition-colors">US Visa Experts</li>
                <li className="hover:text-amber-600 cursor-pointer transition-colors">UK Student Support</li>
                <li className="hover:text-amber-600 cursor-pointer transition-colors">Schengen Specialists</li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] font-bold tracking-widest uppercase text-slate-300">Legal</p>
              <ul className="text-xs space-y-4 text-slate-500 uppercase tracking-widest">
                <li className="hover:text-amber-600 cursor-pointer transition-colors">Privacy Charter</li>
                <li className="hover:text-amber-600 cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-amber-600 cursor-pointer transition-colors">Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-50 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] text-slate-300">
          <span>© 2026 Conquest Visa Services</span>
          <span className="hidden md:block italic font-serif lowercase tracking-normal text-slate-400">your gateway to the world</span>
        </div>
      </footer>

      {/* --- MOBILE SIDEBAR --- */}
      <div className={`fixed inset-0 z-[200] bg-black/60 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 h-full w-[85%] bg-[#FDFCFB] p-12 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8"><X strokeWidth={1} /></button>
          <div className="flex flex-col gap-10 mt-20 text-2xl font-light tracking-[0.2em] uppercase">
            <a href="#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</a>
            <a href="#investment" onClick={() => setIsMenuOpen(false)}>Investment</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Inquiry</a>
          </div>
        </div>
      </div>

    </div>
  );
}