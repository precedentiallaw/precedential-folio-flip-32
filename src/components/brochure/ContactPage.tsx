import { Phone, Mail, Globe, QrCode, Building, Clock, Scale } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="brochure-page h-full relative bg-white paper-texture">
      {/* UAE-themed header */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent"></div>
      
      {/* UAE Legal Licensing Badge - A great credibility booster */}
      <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-gold-accent/30 shadow-soft">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-navy" />
          <div>
            <p className="font-montserrat text-[10px] text-navy font-semibold">UAE Licensed</p>
            <p className="font-montserrat text-[9px] text-black/60">Legal Consultancy</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-16 pt-20 h-full flex flex-col justify-center">
        <div className="mb-12">
          {/* IMPROVEMENT 1: Unified and corrected headline for more impact */}
          <h1 className="font-cinzel text-[32px] font-bold text-navy mb-6 leading-tight">
            Connect with UAE's<br />
            <span className="text-gold-accent">Trusted Legal Team</span>
          </h1>
          <div className="w-40 h-px bg-gradient-to-r from-gold-accent to-transparent"></div>
        </div>
        
        <div className="flex items-start justify-between max-w-6xl gap-12">
          {/* Contact Information */}
          <div className="flex-1 space-y-8">
            {/* Dubai Office Location */}
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
                <Building className="w-6 h-6 text-navy" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-montserrat text-[11px] text-navy/70 uppercase tracking-wider mb-2">Dubai Office</p>
                <p className="font-montserrat text-[14px] text-navy font-semibold">Business Bay, Dubai, UAE</p>
              </div>
            </div>

            {/* Other Contact Details */}
            <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-navy" strokeWidth={2.5} />
                </div>
                <div>
                    <p className="font-montserrat text-[11px] text-navy/70 uppercase tracking-wider mb-2">Email</p>
                    <p className="font-montserrat text-[16px] text-navy font-semibold">ask@precedentiallaw.com</p>
                </div>
            </div>
            
            <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-navy" strokeWidth={2.5} />
                </div>
                <div>
                    <p className="font-montserrat text-[11px] text-navy/70 uppercase tracking-wider mb-2">Phone</p>
                    <p className="font-montserrat text-[16px] text-navy font-semibold">+971 50 901 4120</p>
                </div>
            </div>

            {/* UAE Business Hours */}
            <div className="mt-10 pt-6 border-t border-gold-accent/20">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-accent/20 to-gold-muted/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gold-accent" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-montserrat text-[11px] text-navy/70 uppercase tracking-wider mb-2">Business Hours (GST)</p>
                  <p className="font-montserrat text-[14px] text-navy font-medium">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced QR Code Section */}
          <div className="text-center">
            {/* IMPROVEMENT 2: Replaced flag gradient with the subtle wing pattern for brand consistency. */}
            <div className="w-48 h-48 bg-gradient-to-br from-navy-primary to-navy-deep rounded-2xl flex items-center justify-center mb-6 premium-shadow relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="precedential-pattern-qr" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 60 20 L 40 40 L 20 20 Z" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#precedential-pattern-qr)" />
                    </svg>
                </div>
                <QrCode className="w-36 h-36 text-white" strokeWidth={1.5} />
            </div>
            <p className="font-montserrat text-[14px] text-navy/80 font-medium mb-2">
              Scan for instant access
            </p>
            <p className="font-montserrat text-[12px] text-navy/60">
              Mobile-optimized consultation booking
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-[12px] text-navy font-medium px-3 py-1 border border-gold-accent/30 rounded">8</span>
        <img src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" alt="Logo" className="w-8 h-8 opacity-70" />
      </div>
    </div>;
};
