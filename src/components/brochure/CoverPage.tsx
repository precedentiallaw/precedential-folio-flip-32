// It's best practice to import your image assets at the top.
// Ensure this path '/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png' is correct for your project's public folder structure.
import logoSrc from '/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png';

export const CoverPage = () => {
  return (
    // Main container using a solid, deep navy background color from your Tailwind config.
    <div className="brochure-page h-full relative bg-navy-deep overflow-hidden">
      
      {/* Optional: A very subtle texture to add depth without being distracting. */}
      {/* This uses the 'paper-texture' class defined in your index.css */}
      <div className="absolute inset-0 paper-texture opacity-50"></div>

      {/* Main content, centered using flexbox for a robust and responsive layout. */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-8 sm:px-16 z-10">
        
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logoSrc} 
            alt="Precedential Legal Consultancy Logo"
            // Refined size for a more balanced and professional look.
            className="w-20 h-20 mx-auto"
          />
        </div>

        {/* Company Name - Using two separate elements for better control over spacing and style. */}
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-3 tracking-wider drop-shadow-md">
          PRECEDENTIAL
        </h1>
        <h2 className="font-montserrat text-lg md:text-xl text-white/80 mb-10 tracking-[0.2em] uppercase">
          LEGAL CONSULTANCY
        </h2>

        {/* Elegant Gold Accent Line - Replaces the previous, more complex decorative element. */}
        <div className="w-24 h-px bg-gold-accent my-4"></div>

        {/* Tagline */}
        <p className="font-montserrat text-base text-white/90 leading-relaxed max-w-md">
          Setting the Precedent for Your Success
        </p>

      </div>
    </div>
  );
};
