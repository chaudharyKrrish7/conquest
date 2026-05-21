import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 pt-32 pb-12 overflow-hidden border-t border-white/10">
      
      {/* Low Opacity Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] mix-blend-luminosity"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/37217919/pexels-photo-37217919.jpeg?_gl=1*741jqn*_ga*NDE4MDcyMjAzLjE3NjY4MjkyOTQ.*_ga_8JE65Q40S6*czE3NzkzNzAwNzkkbzE4JGcxJHQxNzc5MzcwMDkxJGo0OCRsMCRoMA..')",
          }}
        />
        {/* Gradient fade from top to blend seamlessly with the section above */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20 border-b border-white/10">
          <div>
            <Link href="/" className="text-3xl font-apple font-medium tracking-tight text-white mb-6 block">
              Conquest Visa
            </Link>
            <p className="text-white/50 font-light max-w-md leading-relaxed">
              Borders disappear when you arrive. Premium, hassle-free visa processing for professionals and students worldwide.
            </p>
          </div>
          
          <div className="lg:justify-self-end w-full max-w-md">
            <h4 className="text-white font-apple font-medium mb-4">Stay updated on immigration changes</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 w-full text-sm text-white focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-white/30"
              />
              <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-20 border-b border-white/10">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-apple font-medium mb-2">Services</h5>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">US Tourist Visa</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">UK Student Visa</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Schengen Visa</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Australia Subclass</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-apple font-medium mb-2">Company</h5>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">About Us</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Our Process</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Testimonials</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Contact</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-apple font-medium mb-2">Legal</h5>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Privacy Policy</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Terms of Service</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Refund Policy</Link>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-apple font-medium mb-2">Offices</h5>
            <span className="text-white/50 text-sm font-light">New York, USA</span>
            <span className="text-white/50 text-sm font-light">London, UK</span>
            <span className="text-white/50 text-sm font-light">Gurgaon, IN</span>
            <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center gap-1 mt-2">
              View all locations <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

        </div>

        {/* Bottom Section: Copyright & Socials */}
       <div className="flex items-center gap-6">
            {/* X (Twitter) */}
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

      </div>
    </footer>
  );
}