"use client";

import { useState } from "react";
import { Star, X } from "lucide-react";

type Review = {
  id: number;
  name: string;
  profession: string;
  visaType: string;
  rating: number;
  snippet: string;
  fullText: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    profession: "Software Engineer",
    visaType: "US H-1B Visa",
    rating: 5,
    snippet: "The most transparent visa process I've ever experienced.",
    fullText: "After struggling with confusing documentation for months, the Conquest team streamlined everything. They broke down the US H-1B requirements into simple, actionable steps. The 100% transparent pricing meant no surprises. My visa was approved without a single RFE (Request for Evidence).",
  },
  {
    id: 2,
    name: "Priya Sharma",
    profession: "Postgraduate Student",
    visaType: "UK Student Visa",
    rating: 5,
    snippet: "Got my UK Student Visa in record time. Highly recommended.",
    fullText: "I was extremely anxious about my intake deadline. Conquest handled my UK Student Visa from scratch. Their mock interviews were incredibly precise, and their attention to detail on my financial documents was flawless. I received my passport back with the visa in just 12 days.",
  },
  {
    id: 3,
    name: "David Chen",
    profession: "Business Consultant",
    visaType: "Schengen Visa",
    rating: 5,
    snippet: "Flawless execution for a complex multi-country itinerary.",
    fullText: "Applying for a Schengen visa for a multi-country business trip is notoriously tedious. Conquest managed my entire itinerary, provided exact guidance on the dummy tickets, and ensured my cover letter was impeccably drafted. It felt like a true concierge service.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    profession: "Marketing Director",
    visaType: "Canada Tourist Visa",
    rating: 5,
    snippet: "Zero stress, absolute professionalism from day one.",
    fullText: "I wanted to visit family in Toronto but had zero time to deal with the IRCC portal. The team at Conquest took over completely. They were upfront about the fees excluding the standard visa charge, and their communication was top-tier. Approved for 10 years.",
  },
  {
    id: 5,
    name: "Rohan Desai",
    profession: "Medical Researcher",
    visaType: "Australia Subclass 500",
    rating: 5,
    snippet: "They caught a documentation error that would have cost me my visa.",
    fullText: "What sets Conquest apart is their meticulous review process. They caught a discrepancy in my GTE (Genuine Temporary Entrant) statement before submission that could have easily led to a rejection. Worth every single rupee of the 10k fee.",
  },
  {
    id: 6,
    name: "Ayesha Khan",
    profession: "Freelance Designer",
    visaType: "US B1/B2 Visa",
    rating: 5,
    snippet: "Secured a highly competitive specific location appointment.",
    fullText: "Securing a US tourist visa appointment right now is nearly impossible. I opted for the 25k specific location package, and they delivered exactly as promised. They prepared me thoroughly for the consular interview. Simply exceptional service.",
  },
];

export default function Testimonials() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <section className="bg-neutral-950 py-32 px-6 md:px-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-apple font-semibold tracking-tighter text-white mb-6">
            Stories of successful arrivals.
          </h2>
          <p className="text-white/60 font-light text-lg max-w-2xl">
            Don't just take our word for it. Read the experiences of professionals and students who trusted us with their global aspirations.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id}
              onClick={() => setSelectedReview(review)}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 cursor-pointer hover:bg-white/10 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Stars & Visa Type */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <span className="text-xs font-medium tracking-wider uppercase bg-white/10 text-white/80 px-3 py-1 rounded-full">
                  {review.visaType}
                </span>
              </div>

              {/* Snippet */}
              <p className="text-white/90 text-lg font-light leading-relaxed mb-8 flex-grow">
                "{review.snippet}"
              </p>

              {/* Author Info */}
              <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium font-apple">{review.name}</p>
                  <p className="text-white/50 text-sm font-light">{review.profession}</p>
                </div>
                <span className="text-white/30 text-sm group-hover:text-white/70 transition-colors">
                  Read full &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Modal (Frosted Glass) */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedReview(null)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8 md:p-12 max-w-2xl w-full shadow-2xl animate-fade-in-up z-10">
            <button 
              onClick={() => setSelectedReview(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex gap-1 mb-6">
              {[...Array(selectedReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white text-white" />
              ))}
            </div>
            
            <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8 font-apple">
              "{selectedReview.fullText}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-apple font-medium text-lg">
                {selectedReview.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-medium font-apple">{selectedReview.name}</p>
                <p className="text-white/50 text-sm font-light">{selectedReview.profession}</p>
                <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">{selectedReview.visaType}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}