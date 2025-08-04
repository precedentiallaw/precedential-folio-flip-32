export const CoverPage = () => {
  return <div className="brochure-cover wing-pattern flex flex-col items-center justify-center relative h-full bg-[#000012]">
      {/* Elegant Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent"></div>
      
      {/* Logo Icon */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gold-accent/20 blur-3xl rounded-full scale-150"></div>
        <img src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" alt="Precedential Legal Consultancy Logo" className="w-40 h-40 object-contain relative z-10" />
      </div>

      {/* Company Name */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="font-cinzel text-hero font-bold text-white mb-6 tracking-wide gold-glow">
          PRECEDENTIAL
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mb-6"></div>
        <h2 className="font-montserrat text-subhead text-white font-light tracking-[0.2em] opacity-90">
          LEGAL CONSULTANCY
        </h2>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-20 text-center max-w-md mx-auto px-8">
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mb-6"></div>
        <p className="font-montserrat text-body-lg text-white font-light tracking-wider leading-relaxed">
          Setting the Precedent for Your Success
        </p>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent"></div>
    </div>;
};