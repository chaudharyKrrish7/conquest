"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Consultation",
    desc: "Expert guidance to assess eligibility and determine the most appropriate visa strategy.",
  },
  {
    id: 2,
    title: "Document Page",
    desc: "We compile a personalized checklist and provide secure access to organize all materials.",
  },
  {
    id: 3,
    title: "Applicant Filling",
    desc: "Comprehensive support as we assist you in accurately completing all applications.",
  },
  {
    id: 4,
    title: "Submission",
    desc: "A final professional review of your complete application package before filing.",
  },
  {
    id: 5,
    title: "Visa Approval",
    desc: "Real-time tracking of your status and immediate notification upon decision.",
  },
];

export default function Process() {
  // Ref for the massive outer container that allows us to scroll for a long time
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track vertical scroll progress within that container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Add a spring physics effect to make the scroll buttery smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Map the vertical scroll (0 to 1) to horizontal movement (0% to -50%)
  // This physically pans the flex container to the left as you scroll down
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  // Track the active step to trigger the glowing effects
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) setActiveIndex(0);
    else if (latest < 0.4) setActiveIndex(1);
    else if (latest < 0.6) setActiveIndex(2);
    else if (latest < 0.8) setActiveIndex(3);
    else setActiveIndex(4);
  });

  return (
    // We make the section 300vh tall so the user has to scroll a lot to pass it
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      
      {/* The sticky container stays pinned to the screen while scrolling through the 300vh */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 border-t border-white/10">
        
        {/* Header */}
        <div className="mb-20 max-w-4xl relative z-20">
          <h2 className="text-3xl md:text-5xl font-apple font-semibold tracking-tighter text-white mb-6">
            The Conquest Process.
          </h2>
          <p className="text-white/60 font-light text-lg">
            A seamless, five-step journey designed to eliminate friction. Scroll to explore.
          </p>
        </div>

        {/* The Horizontal Track */}
        <div className="relative w-full max-w-7xl mx-auto">
          
          {/* This container pans left smoothly based on our x transform */}
          <motion.div style={{ x }} className="flex w-[250vw] md:w-[180vw] lg:w-[130vw] relative pt-10">
            
            {/* The Background (Dim) Line */}
            <div className="absolute top-[68px] md:top-[76px] left-0 w-full h-[2px] bg-white/10" />

            {/* The Active (Glowing) Line */}
            <motion.div
              className="absolute top-[68px] md:top-[76px] left-0 h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              style={{
                width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                transformOrigin: "left",
              }}
            />

            {/* The Numbered Steps */}
            <div className="flex justify-between w-full relative z-10">
              {steps.map((step, index) => {
                const isActive = index <= activeIndex;

                return (
                  <div key={step.id} className="flex flex-col items-start w-64 md:w-80 px-4">
                    
                    {/* Glowing Number Node */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-700 ease-out mb-8 ${
                        isActive
                          ? "bg-neutral-900 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)] scale-110"
                          : "bg-neutral-950 border-white/20 shadow-none scale-100"
                      }`}
                    >
                      <span
                        className={`font-apple font-medium text-lg md:text-xl transition-colors duration-700 ${
                          isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,1)]" : "text-white/40"
                        }`}
                      >
                        {step.id}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div
                      className={`transition-all duration-700 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
                      }`}
                    >
                      <h3
                        className={`text-xl md:text-2xl font-apple font-medium mb-4 transition-colors duration-700 ${
                          isActive ? "text-white" : "text-white/40"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}