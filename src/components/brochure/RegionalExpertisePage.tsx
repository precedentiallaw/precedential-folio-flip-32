import { Globe, MapPin, Network } from 'lucide-react';

export const RegionalExpertisePage = () => {
  return (
    <div className="brochure-page h-full relative flex">
      {/* Left Side - Enhanced Map */}
      <div className="w-1/2 bg-gradient-to-br from-grey-light to-grey-medium relative flex items-center justify-center overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 400 300">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10">
          {/* Enhanced World Map */}
          <svg width="450" height="280" viewBox="0 0 450 280" className="drop-shadow-lg">
            {/* World continents with better styling */}
            <path d="M60 120 Q170 100 280 120 Q380 110 420 140 L420 200 Q340 220 220 210 Q120 220 60 200 Z" 
                  fill="hsl(var(--grey-medium))" stroke="hsl(var(--navy-primary))" strokeWidth="2" opacity="0.7"/>
            <path d="M100 80 Q200 60 320 80 Q360 70 390 100 L390 120 Q280 100 170 120 Q120 110 100 120 Z" 
                  fill="hsl(var(--grey-medium))" stroke="hsl(var(--navy-primary))" strokeWidth="2" opacity="0.7"/>
            <path d="M320 140 Q380 130 400 150 L400 180 Q380 190 340 185 Q320 180 320 160 Z" 
                  fill="hsl(var(--gold-muted))" stroke="hsl(var(--navy-primary))" strokeWidth="2"/>
          </svg>
          
          {/* Enhanced UAE Pin */}
          <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              {/* Pulsing background */}
              <div className="absolute inset-0 w-20 h-20 bg-gold-accent/30 rounded-full animate-pulse"></div>
              
              {/* Main pin */}
              <div className="relative w-18 h-18 bg-white rounded-full border-4 border-gold-accent flex items-center justify-center premium-shadow">
                <img 
                  src="/lovable-uploads/c0ecb555-167e-4563-8d5c-79790ff027bd.png" 
                  alt="UAE Flag" 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              
              {/* Enhanced pin point */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-12 border-l-transparent border-r-transparent border-t-gold-accent drop-shadow-lg"></div>
              
              {/* Connection lines */}
              <div className="absolute top-1/2 left-full w-16 h-px bg-gold-accent/60 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Enhanced Content */}
      <div className="w-1/2 bg-gradient-to-br from-navy-primary to-navy-deep text-white p-16 flex flex-col justify-center relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <Network className="w-full h-full" />
        </div>
        
        <div className="relative z-10">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-16 h-16 text-gold-accent drop-shadow-lg" />
              <MapPin className="w-12 h-12 text-gold-light" />
            </div>
          </div>
          
          <h2 className="font-cinzel text-subhead font-bold mb-8 text-white leading-tight">
            Deeply Vested in the UAE's Economic Vision
          </h2>
          
          <div className="space-y-6">
            <p className="font-montserrat text-body-lg leading-relaxed text-white/95">
              Small and Medium Enterprises (SMEs) are the backbone of the UAE economy, accounting for 
              approximately <span className="text-gold-accent font-semibold">94%</span> of all businesses and contributing 
              significantly to the nation's GDP.
            </p>
            
            <p className="font-montserrat text-body leading-relaxed text-white/90">
              Our firm's expertise is specifically tailored to this dynamic landscape, ensuring our legal 
              advice is always relevant, practical, and aligned with the latest regulatory changes.
            </p>
          </div>
          
          {/* Accent elements */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-px bg-gold-accent"></div>
            <div className="w-2 h-2 bg-gold-accent rounded-full"></div>
            <div className="w-8 h-px bg-gold-accent/60"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium elegant-border px-3 py-1">5</span>
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