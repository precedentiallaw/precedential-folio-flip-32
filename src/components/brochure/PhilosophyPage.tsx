export const PhilosophyPage = () => {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/8d042ade-3592-46e1-82d3-b81b0c267a38.png" 
          alt="Legal architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-primary/40"></div>
      </div>
      
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Content - Positioned at bottom right */}
      <div className="absolute bottom-20 right-16 max-w-lg">
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
          <blockquote className="relative">
            <div className="absolute -top-2 -left-2 text-3xl font-cinzel text-gold-accent opacity-60">"</div>
            <p className="font-cinzel text-subhead font-semibold text-navy leading-tight mb-4 relative z-10 pl-4">
              Legal advice should feel like a strategic partnership—not a last resort.
            </p>
            <div className="absolute -bottom-2 -right-2 text-3xl font-cinzel text-gold-accent opacity-60">"</div>
          </blockquote>
          
          {/* Accent Line */}
          <div className="w-16 h-px bg-gold-accent mt-4"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-white font-medium px-2 py-1 border border-white/30 bg-white/10 backdrop-blur-sm">3</span>
        <img 
          src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
          alt="Logo" 
          className="w-6 h-6 opacity-70"
          style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(84%) saturate(2978%) hue-rotate(12deg) brightness(101%) contrast(101%)' }}
        />
      </div>
    </div>
  );
};