// At the top of the file, assuming your logo is in public/lovable-uploads/
import logoSrc from '/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png';

export const CoverPage = () => {
  return (
    <div className="brochure-page h-full relative bg-navy-deep overflow-hidden">
      {/* Subtle, branded background pattern using your logo's wing shape */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="precedential-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* This path mimics the angular wing shape from your logo */}
              <path d="M 40 0 L 60 20 L 40 40 L 20 20 Z" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#precedential-pattern)" />
        </svg>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-8 z-10">
        <img
          src={logoSrc}
          alt="Precedential Logo"
          className="w-20 h-20 mb-8"
        />
        <h1 className="font-cinzel text-4xl font-bold text-white mb-3 tracking-wider">
          PRECEDENTIAL
        </h1>
        <h2 className="font-montserrat text-lg text-white/80 mb-10 tracking-[0.2em] uppercase">
          LEGAL CONSULTANCY
        </h2>
        <div className="w-24 h-px bg-gold-accent my-4"></div>
        <p className="font-montserrat text-base text-white/90">
          Setting the Precedent for Your Success
        </p>
      </div>
    </div>
  );
};
