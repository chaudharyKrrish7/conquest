"use client";

import { useRef, useState, useEffect } from "react";
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
    navTitle: "Submission",
    desc: "A final professional review of your complete application package before filing.",
  },
  {
    id: 5,
    title: "Visa Approval",
    desc: "Real-time tracking of your status and immediate notification upon decision.",
  },
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Dynamic measurement hook to get exact pixel widths safely across resizes and devices
  useEffect(() => {
    const calculateRange = () => {
      if (trackRef.current) {
        // Total track width minus screen width tells us exactly how many pixels to slide left
        // We add an extra 48px padding buffer so the 5th step doesn't hug the screen edge
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth + 48);
      }
    };

    calculateRange();
    window.addEventListener("resize", calculateRange);
    return () => window.removeEventListener("resize", calculateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 22,
    restDelta: 0.001,
  });

  // Pure numeric pixel interpolation — 100% bug-free on mobile platforms
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange]);

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) setActiveIndex(0);
    else if (latest < 0.4) setActiveIndex(1);
    else if (latest < 0.6) setActiveIndex(2);
    else if (latest < 0.8) setActiveIndex(3);
    else setActiveIndex(4);
  });

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      
      {/* h-[100dvh] ensures dynamic viewport sizing on mobile browsers */}
      <div className="sticky top-0 h-[100dvh] flex flex-col justify-center overflow-hidden border-t border-white/10">
        
        {/* Header Block */}
        <div className="mb-12 md:mb-20 px-6 md:px-12 max-w-4xl relative z-20">
          <h2 className="text-3xl md:text-5xl font-apple font-semibold tracking-tighter text-white mb-4">
            The Conquest Process.
          </h2>
          <p className="text-white/60 font-light text-base md:text-lg">
            A seamless, five-step journey designed to eliminate friction. Scroll to explore.
          </p>
        </div>

        {/* The Horizontal Outer Track */}
        <div className="relative w-full">
          
          {/* Track Inner Container */}
          <motion.div 
            ref={trackRef}
            style={{ x }} 
            className="flex gap-16 md:gap-24 pl-6 md:pl-12 w-max relative pt-10 pb-4"
          >
            {/* The Background (Dim) Line */}
            <div className="absolute top-[26px] md:top-[30px] left-0 w-full h-[2px] bg-white/10 z-0" />

            {/* The Active (Glowing) Line */}
            <motion.div
              className="absolute top-[26px] md:top-[30px] left-0 h-[2px] bg-cyan-400 z-0 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              style={{
                width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                transformOrigin: "left",
              }}
            />

            {/* Step Mapping */}
            {steps.map((step, index) => {
              const isActive = index <= activeIndex;

              return (
                <div key={step.id} className="w-[260px] md:w-[320px] relative z-10 flex flex-col items-start shrink-0">
                  
                  {/* Glowing Number Node */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ease-out mb-6 ${
                      isActive
                        ? "bg-neutral-900 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)] scale-110"
                        : "bg-neutral-950 border-white/20 shadow-none scale-100"
                    }`}
                  >
                    <span
                      className={`font-apple font-medium text-lg md:text-xl transition-colors duration-500 ${
                        isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,1)]" : "text-white/40"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div
                    className={`transition-all duration-500 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"
                    }`}
                  >
                    <h3
                      className={`text-xl md:text-2xl font-apple font-medium mb-3 transition-colors duration-500 ${
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
          </motion.div>
        </div>

      </div>
    </section>
  );
}