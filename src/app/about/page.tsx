"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  Globe2, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Plane, 
  ShieldCheck, 
  FileText, 
  CalendarClock,
  Compass
} from "lucide-react";

const services = [
  { icon: Globe2, title: "Tourist & Visitor Visas", desc: "Seamless processing for all countries worldwide." },
  { icon: GraduationCap, title: "Student Visas", desc: "Specialized guidance for US, UK, Canada & Australia." },
  { icon: Briefcase, title: "Business & Work Visas", desc: "Corporate immigration and work permits." },
  { icon: Building2, title: "Hotel Reservations", desc: "Verified accommodations for your itinerary." },
  { icon: Plane, title: "Air Ticket Booking", desc: "Optimized flight routing and ticketing." },
  { icon: ShieldCheck, title: "Travel Insurance", desc: "Comprehensive coverage for global travel." },
  { icon: FileText, title: "Document Assistance", desc: "Flawless form filling and documentation prep." },
  { icon: CalendarClock, title: "Slot Booking", desc: "Securing highly competitive visa appointments." },
];

const corporateClients = [
  "Reblue Ventures Pvt Ltd", "Softgel Healthcare", "Beep Experience Management", 
  "Communibee Networks", "M N Consultants", "Rosefinch Marketing", "SLMG Beverages", 
  "Flexipol Foams", "Brindavan Beverages", "Charu Enterprises", "Sans Frontiers", 
  "Difgen Pharmaceuticals", "Modigold Beverages", "Sati Exports India", "DTDC Express Ltd", 
  "Dhancot Fibres", "Suri Travels", "Metamorphosis Engitech", "OM Metals Auto", 
  "Hotel Majestic", "Reflect Scrupt", "Ghanshyam Pharmaceuticals", "Nortech Property", 
  "Shiv Shakti Agro", "Maithan Ceramic", "ASBESCO India", "Refracast Metallurgicals", 
  "Architure Discipline", "Satyam Iron and Steel"
];

export default function About() {
  return (
    <main className="bg-neutral-950 min-h-screen selection:bg-cyan-400/30">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-apple font-semibold tracking-tighter text-white mb-8"
          >
            Your Gateway <br className="hidden md:block" />
            <span className="text-white/40">to the World.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-3xl mx-auto"
          >
            Conquest Visa and Immigration Services is an India-based firm facilitating global ambitions. 
            We provide fast, reliable, and transparent visa assistance for all countries over the world. Whether it’s a tourist visa, a student visa for the United States and UK, a Canada Visa, or a Schengen visa for Europe – we handle it all smoothly and professionally.
          </motion.p>
        </div>
      </section>

      {/* Founder's Legacy */}
      <section className="py-20 px-6 md:px-12 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <Compass className="w-10 h-10 text-cyan-400 mb-6" />
              <h2 className="text-3xl md:text-4xl font-apple font-semibold tracking-tighter text-white mb-6">
                Decades of aviation & travel expertise.
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                Our foundation is built on deep industry knowledge. The leadership behind Conquest Visa brings decades of elite corporate travel and aviation experience before transitioning to independent, worldwide visa consulting.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white/80 font-light">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <strong>Jet Airways Pvt Ltd:</strong> 1986 - 1992
                </li>
                <li className="flex items-center gap-4 text-white/80 font-light">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <strong>Airborne Travels Pvt Ltd:</strong> 1992 - 2002
                </li>
                <li className="flex items-center gap-4 text-white/80 font-light">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <strong>Conquest Visa (Self-Employed):</strong> 2002 - Present
                </li>
              </ul>
            </div>
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10">
              {/* Abstract image representing travel/aviation legacy */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-neutral-950/40 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Marquee */}
      <section className="py-24 md:py-32 overflow-hidden border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
          <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-semibold">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="relative flex overflow-x-hidden w-full group">
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-neutral-950 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-neutral-950 to-transparent z-10" />
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...corporateClients, ...corporateClients].map((client, index) => (
              <span key={index} className="mx-8 text-xl md:text-2xl font-apple font-medium text-white/20 hover:text-white/60 transition-colors duration-300">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-apple font-semibold tracking-tighter text-white mb-6">
              Everything you need. <br />
              <span className="text-white/40">Handled flawlessly.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-400/50 transition-colors">
                  <service.icon className="w-5 h-5 text-white/70 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-lg font-apple font-medium text-white mb-3">{service.title}</h3>
                <p className="text-sm font-light text-white/50 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-apple font-semibold tracking-tighter text-white mb-16">
            Meet the Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {/* Team Member 1: Rajesh Rana */}
            <div className="group text-left">
              <div className="w-full aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl mb-6 overflow-hidden relative">
                {/* Insert photo URL below */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('')" }} />
              </div>
              <h3 className="text-2xl font-apple font-medium text-white mb-1">Rajesh Rana</h3>
              <p className="text-cyan-400 font-medium text-sm tracking-wide uppercase mb-3">Founder & Director</p>
              <a href="tel:+919899695814" className="text-white/50 font-light hover:text-white transition-colors block">
                +91 98996 95814
              </a>
            </div>

            {/* Team Member 2: Disha Rana */}
            <div className="group text-left">
              <div className="w-full aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl mb-6 overflow-hidden relative">
                {/* Insert photo URL below */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('')" }} />
              </div>
              <h3 className="text-2xl font-apple font-medium text-white mb-1">Disha Rana</h3>
              <p className="text-cyan-400 font-medium text-sm tracking-wide uppercase mb-3">Director & Visa Expert</p>
              <a href="tel:+919899690204" className="text-white/50 font-light hover:text-white transition-colors block">
                +91 98996 90204
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bottom Block */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-sm relative overflow-hidden bg-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h2 className="text-2xl md:text-4xl font-apple font-medium text-white mb-4 relative z-10">
            Headquarters
          </h2>
          <p className="text-white/60 font-light text-lg mb-8 max-w-lg mx-auto relative z-10">
            AFF 188, Gaur World Smart City, Greater Noida West, <br />
            Gautam Budh Nagar - 201306
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10 flex-wrap">
            <a href="tel:+919899695814" className="text-white hover:text-cyan-400 transition-colors font-medium tracking-wide text-sm md:text-base">
              +91 98996 95814
            </a>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <a href="tel:+919818873814" className="text-white hover:text-cyan-400 transition-colors font-medium tracking-wide text-sm md:text-base">
              +91 98188 73814
            </a>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <a href="tel:+919899690204" className="text-white hover:text-cyan-400 transition-colors font-medium tracking-wide text-sm md:text-base">
              +91 98996 90204
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10 mt-4 flex-wrap">
            <a href="mailto:conquestvisa@gmail.com" className="text-white/80 hover:text-cyan-400 transition-colors font-light tracking-wide text-sm">
              conquestvisa@gmail.com
            </a>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <a href="mailto:rajesh.rana1968@gmail.com" className="text-white/80 hover:text-cyan-400 transition-colors font-light tracking-wide text-sm">
              rajesh.rana1968@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}