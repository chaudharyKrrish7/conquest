import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import { ShieldCheck, TrendingUp, CreditCard, FileText } from "lucide-react";

export default function Home() {
  const benefits = [
    { icon: ShieldCheck, text: "100% Genuine Visa Guidance" },
    { icon: TrendingUp, text: "High Visa Success Rate" },
    { icon: CreditCard, text: "Affordable and Transparent Pricing" },
    { icon: FileText, text: "Hassle-Free Documentation" },
  ];

  return (
    <main className="bg-neutral-950 min-h-screen">
      <Navbar />
      
      {/* 1. HERO WRAPPER - Isolates the background image */}
      <section className="relative h-screen w-full flex items-center">
        
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-20">
            
            {/* Left Column: Headline & Quote */}
            <div className="max-w-xl"> 
              <h1 className="text-5xl md:text-7xl font-apple font-semibold tracking-tighter leading-tight text-white mb-6">
                Borders disappear <br />
                when you arrive.
              </h1>
              <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed border-l-2 border-white/20 pl-6">
                "The world is a book, and those who do not travel read only a page." <br />
                <span className="text-sm mt-2 block text-white/50 font-medium tracking-wide">— Saint Augustine</span>
              </p>
            </div>

            {/* Right Column: Trust Pillars */}
            <div className="flex lg:justify-end">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl max-w-md w-full">
                <h2 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-6 font-semibold">
                  Why Choose Conquest
                </h2>
                <ul className="space-y-6">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-white/80" />
                      </div>
                      <span className="text-white/90 font-light tracking-wide text-base group-hover:text-white transition-colors duration-300">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRICING SECTION - Now safely below the Hero */}
      <div className="relative z-20">
        <Pricing />
      </div>

      <div className="relative z-20">
        <Testimonials />
      </div>
    </main>
  );
}