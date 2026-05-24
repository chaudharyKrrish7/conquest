"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, FileCheck, HelpCircle, ArrowRight, PlaneTakeoff } from "lucide-react";

// Data completely scrubbed of all pricing/fee structures
const destinations = [
  {
    id: "canada",
    title: "Canada Visa",
    subtitle: "From India",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2071&auto=format&fit=crop", 
    type: "Tourist & Student Visas",
    time: "30 - 45 Days",
    requirements: [
      "Valid Indian Passport (Min. 6 months validity)",
      "Proof of Financial Support (6 months bank statements)",
      "Detailed Travel Itinerary & Purpose of Visit",
      "Biometrics Collection at VFS Global",
      "Letter of Acceptance from DLI (For Student Visa)"
    ],
    faqs: [
      { q: "Is biometrics mandatory?", a: "Yes, almost all Indian applicants must provide biometrics at a local VFS center." },
      { q: "Can I work on a tourist visa?", a: "No, working on a visitor visa is strictly prohibited under Canadian law." }
    ]
  },
  {
    id: "dubai",
    title: "Dubai Visa",
    subtitle: "Work & Employment",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop", 
    type: "Employment Visa (Residence)",
    time: "10 - 15 Days",
    requirements: [
      "Original Passport with at least 6 months validity",
      "Passport-size photographs (White background)",
      "Signed Job Offer Letter / Employment Contract",
      "MOHRE (Ministry of Human Resources) Approval",
      "Passed UAE Medical Fitness Test"
    ],
    faqs: [
      { q: "Who handles the visa sponsorship?", a: "Under UAE labor law, the employer acts as your sponsor and manages the residence application." },
      { q: "Is a medical test mandatory?", a: "Yes, you must pass a medical fitness test upon arrival before the visa is officially stamped." }
    ]
  },
  {
    id: "uk",
    title: "UK Visa",
    subtitle: "Student (Tier 4)",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop", 
    type: "Tier 4 (General) Student",
    time: "3 Weeks (Standard Processing)",
    requirements: [
      "CAS (Confirmation of Acceptance for Studies) Reference Number",
      "Proof of funds to cover tuition and living costs",
      "Valid Passport",
      "English Language Proficiency (IELTS/PTE)",
      "ATAS Certificate (if applicable for your course)"
    ],
    faqs: [
      { q: "Can I work while studying?", a: "Yes, degree-level students can typically work up to 20 hours per week during term time." },
      { q: "Do I need to attend an interview?", a: "You may be asked to attend a credibility interview to prove your genuine intention to study." }
    ]
  }
];

export default function Explore() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const activeData = destinations.find(d => d.id === activeCard);

  return (
    <main className="bg-neutral-950 min-h-screen selection:bg-cyan-400/30">
      
      {/* Hide navbar when modal is open for full immersion */}
      <div className={`transition-opacity duration-500 ${activeCard ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Navbar />
      </div>

      <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Header - Text updated to remove fee mentions */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-apple font-semibold tracking-tighter text-white mb-6">
            Explore <span className="text-white/40">Destinations.</span>
          </h1>
          <p className="text-lg text-white/60 font-light max-w-xl">
            Select a pathway below to view specific requirements and processing timelines.
          </p>
        </div>

        {/* The 3 Massive Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              layoutId={`card-${dest.id}`}
              onClick={() => setActiveCard(dest.id)}
              className="relative rounded-3xl overflow-hidden cursor-pointer group h-full shadow-2xl shadow-black/50"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${dest.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-cyan-400 font-medium tracking-widest text-xs uppercase mb-2">
                  {dest.subtitle}
                </p>
                <h2 className="text-3xl font-apple font-medium text-white mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                  {dest.title}
                </h2>
                <div className="flex items-center gap-2 text-white/50 text-sm font-light opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                  <span>View Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {!activeCard && <Footer />}

      {/* FULL SCREEN IMMERSIVE OVERLAY */}
      <AnimatePresence>
        {activeCard && activeData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            <motion.div 
              layoutId={`card-${activeData.id}`}
              className="relative w-full h-full md:w-[90vw] md:h-[90vh] md:rounded-[40px] overflow-hidden bg-neutral-950 flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
              <button 
                onClick={() => setActiveCard(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-[30vh] md:h-[40vh] shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeData.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                
                <div className="absolute bottom-8 left-8 md:left-12">
                  <p className="text-cyan-400 font-medium tracking-widest text-sm uppercase mb-3">
                    {activeData.subtitle}
                  </p>
                  <h2 className="text-4xl md:text-6xl font-apple font-semibold text-white">
                    {activeData.title}
                  </h2>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 md:p-12 hide-scrollbar">
                
                {/* 2 Key Metrics Grid (Pricing removed) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                    <PlaneTakeoff className="w-6 h-6 text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Visa Type</p>
                      <p className="text-white font-medium">{activeData.type}</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                    <Clock className="w-6 h-6 text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Processing Time</p>
                      <p className="text-white font-medium">{activeData.time}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  <div>
                    <h3 className="text-2xl font-apple font-medium text-white mb-6 flex items-center gap-3">
                      <FileCheck className="w-6 h-6 text-cyan-400" />
                      Mandatory Requirements
                    </h3>
                    <ul className="space-y-4">
                      {activeData.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/70 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-apple font-medium text-white mb-6 flex items-center gap-3">
                      <HelpCircle className="w-6 h-6 text-cyan-400" />
                      Specific FAQs
                    </h3>
                    <div className="space-y-6">
                      {activeData.faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                          <p className="text-white font-medium mb-2">{faq.q}</p>
                          <p className="text-white/60 font-light text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
                
                <div className="mt-16 text-center border-t border-white/10 pt-12">
                   <p className="text-white/60 font-light mb-6">Ready to begin your {activeData.title} application?</p>
                   <a href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-medium tracking-wide hover:bg-cyan-400 transition-colors duration-300">
                     Request Consultation
                   </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}