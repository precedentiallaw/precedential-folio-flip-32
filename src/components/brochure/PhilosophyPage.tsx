export const PhilosophyPage = () => {
  return (
    <div className="brochure-page h-full relative">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent"></div>
      
      {/* Wing Supergraphic */}
      <div className="absolute top-12 left-12">
        <svg width="60" height="45" viewBox="0 0 100 75" className="fill-gold-accent opacity-70 drop-shadow-lg">
          <path d="M50 15 L25 30 L35 40 L50 35 L65 40 L75 30 Z" />
        </svg>
      </div>

      {/* Large Wing Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-3">
        <svg width="400" height="300" viewBox="0 0 100 75" className="fill-gold-accent">
          <path d="M50 15 L25 30 L35 40 L50 35 L65 40 L75 30 Z" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-20 w-1 h-24 bg-gradient-to-b from-gold-accent to-transparent opacity-30"></div>
      <div className="absolute bottom-1/4 left-20 w-1 h-24 bg-gradient-to-t from-gold-accent to-transparent opacity-30"></div>

      {/* Content */}
      <div className="h-full flex items-center justify-center p-20">
        <div className="text-center max-w-5xl relative">
          {/* Opening Quote Mark */}
          <div className="absolute -top-8 -left-8 text-6xl font-cinzel text-gold-accent opacity-40">"</div>
          
          <blockquote className="relative">
            <p className="font-cinzel text-display font-bold text-navy leading-tight mb-8 relative z-10">
              Legal advice should feel like a strategic partnership—not a last resort.
            </p>
          </blockquote>
          
          {/* Closing Quote Mark */}
          <div className="absolute -bottom-8 -right-8 text-6xl font-cinzel text-gold-accent opacity-40">"</div>
          
          {/* Accent Line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mt-8"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium elegant-border px-3 py-1">3</span>
        <img 
          src="/lovable-uploads/7d289c91-f7e5-4657-96df-fd2ecaf4302a.png" 
          alt="Logo" 
          className="w-8 h-8 opacity-70"
          style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(84%) saturate(2978%) hue-rotate(12deg) brightness(101%) contrast(101%)' }}
        />
      </div>
    </div>
  );
};