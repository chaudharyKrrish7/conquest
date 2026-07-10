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
  CalendarClock 
} from "lucide-react";

const services = [
  { icon: Globe2, title: "Tourist & Visitor Visas", desc: "Seamless processing for all countries." },
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
            Conquest Visa and Immigration Services is a one-stop destination for your global ambitions. 
            We are dedicated to delivering fast, reliable, and transparent services to travelers, students, 
            business professionals, and families. Whether it’s a tourist visa, a student visa for the United States and UK, a Canada Visa, or a Schengen visa for Europe – we handle it all smoothly and professionally.
          </motion.p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
            <div>
              <p className="text-4xl md:text-5xl font-apple font-medium text-white mb-2">30+</p>
              <p className="text-sm tracking-wider uppercase text-white/50">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-apple font-medium text-white mb-2">100%</p>
              <p className="text-sm tracking-wider uppercase text-white/50">Genuine Guidance</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-apple font-medium text-white mb-2">24/7</p>
              <p className="text-sm tracking-wider uppercase text-white/50">Customer Support</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-apple font-medium text-white mb-2">All</p>
              <p className="text-sm tracking-wider uppercase text-white/50">Major Countries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 overflow-hidden border-b border-white/10">
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
              <span 
                key={index} 
                className="mx-8 text-xl md:text-2xl font-apple font-medium text-white/20 hover:text-white/60 transition-colors duration-300"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

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
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-400/50 transition-colors">
                  <service.icon className="w-5 h-5 text-white/70 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-lg font-apple font-medium text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm font-light text-white/50 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h2 className="text-2xl md:text-4xl font-apple font-medium text-white mb-4 relative z-10">
            Headquarters
          </h2>
          <p className="text-white/60 font-light text-lg mb-8 max-w-lg mx-auto relative z-10">
            AFF-188, First Floor, Gaur World Smart Street, near Blue Sapphire Mall, Sector 16, Greater Noida West
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
            <a href="tel:+919899695814" className="text-white hover:text-cyan-400 transition-colors font-medium tracking-wide">
              +91 98996 95814
            </a>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <a href="mailto:conquestvisa@gmail.com" className="text-white hover:text-cyan-400 transition-colors font-medium tracking-wide">
              conquestvisa@gmail.com
            </a>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <a href="https://instagram.com/conquestvisa" target="_blank" rel="noreferrer" className="text-white hover:text-cyan-400 transition-colors font-medium tracking-wide">
              @conquestvisa
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}