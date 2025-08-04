export const WhoIsPage = () => {
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

      {/* Content */}
      <div className="p-20 pt-32">
        <h1 className="font-cinzel text-headline font-bold text-navy mb-12 leading-tight">
          Who is Precedential?
        </h1>
        
        <div className="max-w-5xl">
          <p className="font-montserrat text-body-lg leading-relaxed text-black mb-8">
            Precedential Legal Consultancy FZ LLC is a UAE-licensed firm committed to providing 
            comprehensive legal support to individuals and businesses across the Emirates.
          </p>
          
          <p className="font-montserrat text-body-lg leading-relaxed text-black">
            We combine deep knowledge of UAE law with international standards to deliver legal solutions 
            that are clear, strategic, and commercially relevant. Our approach ensures that every client 
            receives tailored advice that aligns with their specific objectives and the dynamic UAE market.
          </p>
        </div>
        
        {/* Elegant accent line */}
        <div className="mt-12 w-32 h-px bg-gradient-to-r from-gold-accent to-transparent"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium elegant-border px-3 py-1">2</span>
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