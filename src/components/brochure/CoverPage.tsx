export const CoverPage = () => {
  return (
    <div className="brochure-page h-full relative bg-gradient-to-br from-navy-deep via-navy-primary to-navy-deep overflow-hidden paper-texture">
      {/* Subtle Navy Texture */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="navy-texture" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.1)" />
              <circle cx="15" cy="15" r="0.5" fill="rgba(255,255,255,0.05)" />
              <circle cx="45" cy="45" r="0.5" fill="rgba(255,255,255,0.05)" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
              <line x1="30" y1="0" x2="30" y2="60" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#navy-texture)" />
        </svg>
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>

      {/* Main content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-16 z-10">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
            alt="Precedential Legal Consultancy Logo" 
            className="w-24 h-24 mx-auto drop-shadow-lg"
          />
        </div>

        {/* Company Name */}
        <h1 className="font-cinzel text-[36px] font-bold text-white mb-6 leading-tight tracking-wide drop-shadow-lg">
          PRECEDENTIAL LEGAL<br />CONSULTANCY
        </h1>

        {/* Tagline */}
        <p className="font-montserrat text-[16px] text-white/90 leading-relaxed max-w-md">
          Setting the Precedent for Your Success
        </p>

        {/* Decorative Element */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-gold-accent"></div>
          <div className="w-3 h-3 bg-gold-accent rounded-full"></div>
          <div className="w-16 h-px bg-gold-accent"></div>
        </div>
      </div>
    </div>
  );
};