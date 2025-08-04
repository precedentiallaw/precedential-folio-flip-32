import { Shield, Target, Clock } from 'lucide-react';

export const PartnershipPage = () => {
  return (
    <div className="brochure-page h-full relative bg-white paper-texture">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Content */}
      <div className="p-16 h-full flex flex-col justify-center">
        {/* Main Headline */}
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-title font-bold text-navy mb-3 leading-tight">
            Our Partnership Approach
          </h1>
          <div className="w-16 h-px bg-gold-accent mx-auto mt-4"></div>
        </div>

        {/* Three Value Propositions */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-gold-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-6 h-6 text-navy" strokeWidth={2} />
            </div>
            <h3 className="font-montserrat text-body font-semibold text-navy mb-3">
              Trusted Expertise
            </h3>
            <p className="font-montserrat text-caption text-black/80 leading-relaxed">
              Comprehensive legal guidance backed by deep UAE market knowledge and proven track record.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gold-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Target className="w-6 h-6 text-navy" strokeWidth={2} />
            </div>
            <h3 className="font-montserrat text-body font-semibold text-navy mb-3">
              Strategic Solutions
            </h3>
            <p className="font-montserrat text-caption text-black/80 leading-relaxed">
              Tailored legal strategies that align with your business objectives and support sustainable growth.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gold-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-6 h-6 text-navy" strokeWidth={2} />
            </div>
            <h3 className="font-montserrat text-body font-semibold text-navy mb-3">
              Efficient Service
            </h3>
            <p className="font-montserrat text-caption text-black/80 leading-relaxed">
              Streamlined processes and clear communication ensure prompt resolution of legal matters.
            </p>
          </div>
        </div>

        {/* Partnership Statement with Pricing */}
        <div className="bg-white rounded-lg p-8 text-center border border-gold-accent/20 mb-8">
          <p className="font-montserrat text-body text-black/90 leading-relaxed mb-6">
            Building lasting partnerships with our clients, providing ongoing legal support 
            that evolves with your business needs in the dynamic UAE market.
          </p>
          
          {/* Pricing Information */}
          <div className="bg-grey-light/30 rounded-lg p-6 mt-6">
            <h4 className="font-montserrat text-[14px] font-semibold text-navy mb-3">
              Transparent Fixed-Fee Legal Services
            </h4>
            <p className="font-montserrat text-[12px] text-black/80 leading-relaxed mb-4">
              Our comprehensive legal services are offered at competitive fixed rates, 
              ensuring cost transparency and budget predictability for your business.
            </p>
            <div className="flex items-center justify-center gap-4 text-[12px] text-black/70">
              <span>• Corporate Formation: Fixed Fee</span>
              <span>• Legal Consultations: Hourly/Retainer</span>
              <span>• Contract Review: Per Document</span>
            </div>
          </div>
        </div>

        <div className="mt-8 w-32 h-px bg-gold-accent"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium px-2 py-1 border border-gold-accent/30">7</span>
        <img 
          src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
          alt="Logo" 
          className="w-6 h-6 opacity-60"
        />
      </div>
    </div>
  );
};