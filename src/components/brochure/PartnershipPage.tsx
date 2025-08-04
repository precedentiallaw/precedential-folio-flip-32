import { Shield, Target, Clock } from 'lucide-react';

export const PartnershipPage = () => {
  return (
    <div className="brochure-page h-full relative">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Content */}
      <div className="p-16 h-full flex flex-col justify-center">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="font-cinzel text-headline font-bold text-navy mb-4 leading-tight">
            Partnership Approach
          </h1>
          <h2 className="font-montserrat text-subhead text-navy/80 font-light">
            Legal Excellence for UAE Businesses
          </h2>
          <div className="w-24 h-px bg-gold-accent mx-auto mt-6"></div>
        </div>

        {/* Three Value Propositions */}
        <div className="grid grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-accent rounded-xl mx-auto mb-6 flex items-center justify-center">
              <Shield className="w-8 h-8 text-navy" strokeWidth={2} />
            </div>
            <h3 className="font-montserrat text-body-lg font-semibold text-navy mb-4">
              Trusted Expertise
            </h3>
            <p className="font-montserrat text-body text-black/80 leading-relaxed">
              Comprehensive legal guidance backed by deep UAE market knowledge and proven track record.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-accent rounded-xl mx-auto mb-6 flex items-center justify-center">
              <Target className="w-8 h-8 text-navy" strokeWidth={2} />
            </div>
            <h3 className="font-montserrat text-body-lg font-semibold text-navy mb-4">
              Strategic Solutions
            </h3>
            <p className="font-montserrat text-body text-black/80 leading-relaxed">
              Tailored legal strategies that align with your business objectives and support sustainable growth.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-accent rounded-xl mx-auto mb-6 flex items-center justify-center">
              <Clock className="w-8 h-8 text-navy" strokeWidth={2} />
            </div>
            <h3 className="font-montserrat text-body-lg font-semibold text-navy mb-4">
              Efficient Service
            </h3>
            <p className="font-montserrat text-body text-black/80 leading-relaxed">
              Streamlined processes and clear communication ensure prompt resolution of legal matters.
            </p>
          </div>
        </div>

        {/* Partnership Statement */}
        <div className="bg-gradient-to-r from-navy-primary to-navy-deep rounded-lg p-12 text-center text-white">
          <p className="font-montserrat text-body-lg text-white/90 mb-6 leading-relaxed">
            We build lasting partnerships with our clients, providing ongoing legal support 
            that evolves with your business needs in the dynamic UAE market.
          </p>
          <div className="text-subhead font-semibold text-gold-accent font-montserrat">
            Your Success is Our Commitment
          </div>
        </div>

        <div className="mt-12 w-32 h-px bg-gold-accent"></div>
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