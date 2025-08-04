import { Globe, MapPin, Network } from 'lucide-react';
export const RegionalExpertisePage = () => {
  return <div className="brochure-page h-full relative bg-white paper-texture">
      {/* UAE Expertise Image - Full Width */}
      <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-grey-light via-white to-grey-light">
        <img 
          src="/lovable-uploads/f76ae9c9-cca4-4c3f-b532-a3aa8173a5e9.png" 
          alt="UAE Legal Expertise" 
          className="w-full h-full object-contain max-w-4xl max-h-[600px] drop-shadow-2xl" 
        />
        
        {/* Overlay Text */}
        <div className="absolute bottom-24 left-16 right-16 text-center">
          <h2 className="font-cinzel text-[24px] font-bold text-navy mb-4 leading-tight">
            UAE Legal Expertise
          </h2>
          <p className="font-montserrat text-[14px] text-black/80 leading-relaxed max-w-2xl mx-auto">
            Specialized legal counsel for the UAE market, combining deep local knowledge 
            with international best practices to deliver strategic solutions.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium px-2 py-1 border border-gold-accent/30">5</span>
        <img src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" alt="Logo" className="w-6 h-6 opacity-60" />
      </div>
    </div>;
};