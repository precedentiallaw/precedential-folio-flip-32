import { Globe, MapPin, Network } from 'lucide-react';
export const RegionalExpertisePage = () => {
  return <div className="brochure-page h-full relative flex">
      {/* Left Side - UAE Map */}
      <div className="w-1/2 bg-gradient-to-br from-background to-grey-light relative flex items-center justify-center overflow-hidden">
        {/* UAE Map Background */}
        <div className="relative flex items-center justify-center">
          <img src="/lovable-uploads/8d042ade-3592-46e1-82d3-b81b0c267a38.png" alt="UAE Map Outline" className="w-80 h-80 object-contain opacity-80 drop-shadow-lg" />
          
          {/* UAE Flag Pin */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Pulsing background */}
              <div className="absolute inset-0 w-16 h-16 bg-gold-accent/20 rounded-full animate-pulse"></div>
              
              {/* Main pin */}
              
              
              {/* Pin point */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gold-accent"></div>
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
          
          <h2 className="font-cinzel text-title font-bold mb-6 text-white leading-tight">
            UAE Legal Expertise
          </h2>
          
          <div className="space-y-4">
            <p className="font-montserrat text-body leading-relaxed text-white/95">
              With deep specialization in UAE commercial law and regulatory frameworks, we provide 
              precise legal counsel tailored to the Emirates' unique business environment.
            </p>
            
            <p className="font-montserrat text-body leading-relaxed text-white/90">
              Our comprehensive understanding of local market dynamics, combined with international 
              best practices, ensures strategic legal solutions for your business objectives.
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
        <span className="font-montserrat text-caption text-navy font-medium px-2 py-1 border border-gold-accent/30">5</span>
        <img src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" alt="Logo" className="w-6 h-6 opacity-60" />
      </div>
    </div>;
};