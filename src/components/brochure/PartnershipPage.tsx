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

        {/* SME-Focused Value Propositions */}
        <div className="bg-navy/5 rounded-xl p-8 mb-8 border border-gold-accent/30">
          <h2 className="font-cinzel text-[20px] font-bold text-navy text-center mb-6">
            Specialized Solutions for Small-Medium Enterprises (SME)
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-gold-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-7 h-7 text-navy" strokeWidth={2} />
              </div>
              <h3 className="font-montserrat text-[14px] font-semibold text-navy mb-3">
                SME Legal Protection
              </h3>
              <p className="font-montserrat text-[12px] text-black/80 leading-relaxed">
                Comprehensive legal safeguards designed specifically for small and medium enterprises in the UAE market.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-gold-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Target className="w-7 h-7 text-navy" strokeWidth={2} />
              </div>
              <h3 className="font-montserrat text-[14px] font-semibold text-navy mb-3">
                Growth-Oriented Solutions
              </h3>
              <p className="font-montserrat text-[12px] text-black/80 leading-relaxed">
                Legal frameworks that scale with your business, from startup to established enterprise in Dubai's ecosystem.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-gold-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-7 h-7 text-navy" strokeWidth={2} />
              </div>
              <h3 className="font-montserrat text-[14px] font-semibold text-navy mb-3">
                Cost-Effective Service
              </h3>
              <p className="font-montserrat text-[12px] text-black/80 leading-relaxed">
                Fixed-fee structures that fit SME budgets while delivering enterprise-level legal expertise and support.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Statement with Pricing */}
        <div className="bg-white rounded-lg p-8 text-center border border-gold-accent/20 mb-8">
          <p className="font-montserrat text-body text-black/90 leading-relaxed mb-6">
            Building lasting partnerships with our clients, providing ongoing legal support 
            that evolves with your business needs in the dynamic UAE market.
          </p>
          
          {/* Enhanced Pricing Information */}
          <div className="bg-gold-accent/10 rounded-lg p-6 mt-6 border border-gold-accent/30">
            <h4 className="font-montserrat text-[16px] font-bold text-navy mb-4 text-center">
              🏢 Fixed-Fee SME Legal Packages
            </h4>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 bg-white rounded border border-gold-accent/20">
                <h5 className="font-montserrat text-[12px] font-semibold text-navy mb-2">STARTUP PACKAGE</h5>
                <p className="font-montserrat text-[11px] text-black/80">Business Setup + Basic Compliance</p>
                <p className="font-montserrat text-[12px] font-bold text-gold-accent mt-2">AED 8,500</p>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gold-accent/20">
                <h5 className="font-montserrat text-[12px] font-semibold text-navy mb-2">GROWTH PACKAGE</h5>
                <p className="font-montserrat text-[11px] text-black/80">+ Contract Reviews + HR Support</p>
                <p className="font-montserrat text-[12px] font-bold text-gold-accent mt-2">AED 15,000</p>
              </div>
              <div className="text-center p-3 bg-white rounded border border-gold-accent/20">
                <h5 className="font-montserrat text-[12px] font-semibold text-navy mb-2">ENTERPRISE PACKAGE</h5>
                <p className="font-montserrat text-[11px] text-black/80">+ Ongoing Legal Retainer</p>
                <p className="font-montserrat text-[12px] font-bold text-gold-accent mt-2">AED 25,000/yr</p>
              </div>
            </div>
            <p className="font-montserrat text-[11px] text-center text-black/70 italic">
              *All packages include free initial consultation and 30-day post-service support
            </p>
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