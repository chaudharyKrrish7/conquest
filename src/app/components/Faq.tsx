"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does the visa process take?",
    answer: "Processing times vary significantly depending on the destination country, visa category, and current embassy workloads. On average, it can take anywhere from a few days to several weeks. During your initial consultation, we will provide a precise, customized timeline based on your specific case.",
  },
  {
    question: "What happens if my visa gets rejected?",
    answer: "While we maintain an exceptionally high success rate, rejections can occasionally occur due to embassy discretion. If this happens, our team immediately analyzes the rejection grounds. We then strategize and guide you through a flawless reapplication or appeal process at no additional consultation fee.",
  },
  {
    question: "What documents are needed for the application?",
    answer: "The required documentation is highly specific to your visa type (Student, Tourist, Work, etc.). Generally, you will need a passport valid for at least 6 months, financial statements, and purpose-specific evidence (e.g., university acceptance letters or business invitations). We provide a meticulously tailored checklist for you in Step 2 of our process.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-950 py-32 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-apple font-semibold tracking-tighter text-white mb-6">
            Frequently Asked Questions.
          </h2>
          <p className="text-white/60 font-light text-lg">
            Clear answers to common concerns.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                {/* Question / Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-apple font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-white/80"}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-2 rounded-full border transition-colors duration-300 ${isActive ? "border-white bg-white text-black" : "border-white/20 text-white"}`}>
                    {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-white/60 font-light leading-relaxed border-t border-white/5 mt-2 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}