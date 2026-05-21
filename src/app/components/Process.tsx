"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Consultation",
    desc: "Expert guidance to assess eligibility, explore available options, and determine the most appropriate visa strategy for your goals.",
  },
  {
    id: 2,
    title: "Document Page",
    desc: "We compile a personalized checklist and provide secure access to organize all necessary forms and supporting materials.",
  },
  {
    id: 3,
    title: "Applicant Filling",
    desc: "Benefit from comprehensive support as we assist you in accurately completing all applications and ensuring flawless data entry.",
  },
  {
    id: 4,
    title: "Submission",
    desc: "A final professional review of your complete application package is performed before we efficiently file it on your behalf.",
  },
  {
    id: 5,
    title: "Visa Approval",
    desc: "We provide real-time tracking of your status and will immediately notify you when a decision is made to coordinate delivery.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks the scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Maps the scroll progress (0 to 1) to the height of the active line (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-neutral-950 py-32 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-apple font-semibold tracking-tighter text-white mb-6">
            The Conquest Process.
          </h2>
          <p className="text-white/60 font-light text-lg max-w-xl">
            A seamless, five-step journey designed to eliminate friction and maximize your chances of approval.
          </p>
        </div>

        {/* Scroll Track Container */}
        <div ref={containerRef} className="relative">
          
          {/* The Background (Dim) Line */}
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* The Active (Illuminated) Line */}
          <motion.div 
            className="absolute left-6 md:left-10 top-0 w-[2px] bg-white origin-top"
            style={{ height: lineHeight }}
          />

          {/* The Steps */}
          <div className="flex flex-col gap-24 md:gap-32 relative z-10 py-10">
            {steps.map((step) => (
              <StepItem key={step.id} step={step} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for individual steps to handle their own fade-in logic
function StepItem({ step }: { step: { id: number; title: string; desc: string } }) {
  return (
    <motion.div 
      initial={{ opacity: 0.3, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-40% 0px -40% 0px" }} // Triggers when the item is in the middle 20% of the screen
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex gap-8 md:gap-16 items-start ml-2 md:ml-6"
    >
      {/* Number Node */}
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-950 border-2 border-white flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        <span className="text-white font-apple font-medium text-sm md:text-base">
          {step.id}
        </span>
      </div>

      {/* Text Content */}
      <div className="pt-2 md:pt-3">
        <h3 className="text-xl md:text-2xl font-apple font-medium text-white mb-4">
          {step.title}
        </h3>
        <p className="text-white/60 font-light text-base md:text-lg leading-relaxed max-w-md">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}