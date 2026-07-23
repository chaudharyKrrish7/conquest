"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    type: "",
    msg: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Curated WhatsApp Message Template
    const whatsappText = `Hello Conquest Visa Team,%0A%0AI would like to request a consultation.%0A%0A*Name:* ${formData.fName} ${formData.lName}%0A*Email:* ${formData.email}%0A*Inquiry Type:* ${formData.type}%0A*Message:* ${formData.msg}%0A%0ALooking forward to hearing from you.`;
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/919899695814?text=${whatsappText}`, "_blank");

    // Show success state on the website
    setIsSubmitted(true);
    setFormData({ fName: "", lName: "", email: "", type: "", msg: "" }); // Reset form
    setTimeout(() => setIsSubmitted(false), 5000); 
  };

  return (
    <main className="bg-neutral-950 min-h-screen selection:bg-cyan-400/30">
      <Navbar />

      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-apple font-semibold tracking-tighter text-white mb-6"
            >
              Let's cross borders <br className="hidden md:block" />
              <span className="text-white/40">together.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-lg text-white/60 font-light max-w-xl"
            >
              Our entire operational network is based in India, dedicated to providing visa solutions all over the world.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-12"
            >
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-apple font-medium text-white mb-2">Indian Headquarters</h3>
                  <p className="text-white/60 font-light leading-relaxed max-w-sm">
                    AFF 188, First Floor, <br />
                    Gaur World Smart City, near Blue Sapphire Mall, <br />
                    Sector 16, Greater Noida West, <br />
                    Gautam Budh Nagar - 201306
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-apple font-medium text-white mb-2">Direct Lines & WhatsApp</h3>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919899695814" className="text-white/60 hover:text-white font-light transition-colors">+91 98996 95814</a>
                    <a href="tel:+919818873814" className="text-white/60 hover:text-white font-light transition-colors">+91 98188 73814</a>
                    <a href="tel:+919899690204" className="text-white/60 hover:text-white font-light transition-colors">+91 98996 90204</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-apple font-medium text-white mb-2">Digital Inquiry</h3>
                  <div className="flex flex-col gap-1 mb-2">
                    <a href="mailto:conquestvisa@gmail.com" className="text-white/60 hover:text-white font-light transition-colors">
                      conquestvisa@gmail.com
                    </a>
                    <a href="mailto:rajesh.rana1968@gmail.com" className="text-white/60 hover:text-white font-light transition-colors">
                      rajesh.rana1968@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                  >
                    <CheckCircle2 className="w-16 h-16 text-cyan-400 mb-6" />
                    <h3 className="text-2xl font-apple font-medium text-white mb-4">Connecting to WhatsApp...</h3>
                    <p className="text-white/60 font-light">
                      Please send the pre-filled message to begin your consultation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium tracking-wider uppercase text-white/50">First Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.fName}
                          onChange={(e) => setFormData({...formData, fName: e.target.value})}
                          className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition-all font-light"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium tracking-wider uppercase text-white/50">Last Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.lName}
                          onChange={(e) => setFormData({...formData, lName: e.target.value})}
                          className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition-all font-light"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium tracking-wider uppercase text-white/50">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition-all font-light"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium tracking-wider uppercase text-white/50">Inquiry Type</label>
                      <select 
                        required
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition-all font-light appearance-none"
                      >
                        <option value="" disabled className="bg-neutral-900">Select a service...</option>
                        <option value="Tourist Visa" className="bg-neutral-900">Tourist & Visitor Visa</option>
                        <option value="Student Visa" className="bg-neutral-900">Student Visa</option>
                        <option value="Business/Work Visa" className="bg-neutral-900">Business & Work Visa</option>
                        <option value="Other Service" className="bg-neutral-900">Other Services</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium tracking-wider uppercase text-white/50">Message</label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.msg}
                        onChange={(e) => setFormData({...formData, msg: e.target.value})}
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition-all font-light resize-none"
                        placeholder="Tell us about your destination and timeline..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-white text-black font-medium tracking-wide py-4 rounded-xl hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Connect via WhatsApp
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}