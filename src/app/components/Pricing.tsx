export default function Pricing() {
  const regions = [
    {
      country: "United States",
      services: [
        { type: "Tourist Visa", scope: "From Scratch", price: "Custom Quote", notes: "Comprehensive package" },
        { type: "Tourist Visa", scope: "Appointment Only (Any/Specific)", price: "Custom Quote", notes: "Location specific available" },
        { type: "Student Visa", scope: "From Scratch", price: "Custom Quote", notes: "F-1/M-1 categories" },
        { type: "Student Visa", scope: "Appointment Only", price: "Custom Quote", notes: "Expedited options available" },
      ],
    },
    {
      country: "United Kingdom",
      services: [
        { type: "Student Visa", scope: "Standard Processing", price: "On Request", notes: "Tier 4 assistance" },
        { type: "Standard Visa", scope: "Standard Processing", price: "On Request", notes: "Excludes gov fees & insurance" },
      ],
    },
    {
      country: "Canada & Australia",
      services: [
        { type: "Canada Tourist & Student", scope: "Standard Processing", price: "Custom Quote", notes: "Excludes gov fee" },
        { type: "Australia Student Visa", scope: "Standard Processing", price: "Custom Quote", notes: "Subclass 500 support" },
      ],
    },
    {
      country: "Schengen Area",
      services: [
        { type: "Schengen Visa", scope: "Standard Processing", price: "On Request", notes: "Excludes insurance & bookings" },
      ],
    },
  ];

  return (
    <section className="bg-neutral-950 py-32 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-apple font-semibold tracking-tighter text-white mb-6">
            Service packages. <br />
            <span className="text-white/50">Tailored to your journey.</span>
          </h2>
          <p className="text-white/60 font-light text-lg leading-relaxed">
            We offer comprehensive, end-to-end assistance for every major destination. Our consulting fees are customized based on the complexity of your specific case.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="space-y-16">
          {regions.map((region, idx) => (
            <div key={idx} className="animate-fade-in-up">
              <h3 className="text-xl font-apple font-medium text-white mb-6 border-b border-white/20 pb-4">
                {region.country}
              </h3>
              
              <div className="flex flex-col">
                {/* Desktop Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-4 pb-3 text-xs uppercase tracking-[0.15em] text-white/40 font-semibold">
                  <div className="col-span-4">Visa Type</div>
                  <div className="col-span-4">Service Scope</div>
                  <div className="col-span-2">Investment</div>
                  <div className="col-span-2">Additional Notes</div>
                </div>

                {/* Rows */}
                {region.services.map((item, i) => (
                  <div 
                    key={i} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300 items-center rounded-lg md:rounded-none group"
                  >
                    <div className="col-span-4 text-white/90 font-medium md:font-normal text-lg md:text-base">
                      {item.type}
                    </div>
                    <div className="col-span-4 text-white/60 font-light text-sm md:text-base">
                      {item.scope}
                    </div>
                    <div className="col-span-2 text-cyan-400 font-apple font-medium tracking-wide text-sm">
                      {item.price}
                    </div>
                    <div className="col-span-2 text-white/40 text-xs md:text-sm font-light italic">
                      {item.notes || "—"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-sm">
          <div className="max-w-xl mb-8 md:mb-0">
            <h3 className="text-2xl md:text-4xl font-apple font-medium text-white mb-4">
              Ready to request a quote?
            </h3>
            <p className="text-white/60 font-light">
              Get in touch with our experts to receive a customized consultation for your specific visa needs.
            </p>
          </div>
          <a href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-medium tracking-wide hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Start Consultation
          </a>
        </div>
      </div>
    </section>
  );
}