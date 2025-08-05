import { Phone, Mail, Globe, QrCode, Building, Clock, Scale } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="brochure-page h-full relative bg-white paper-texture">
      {/* UAE-themed header with Dubai skyline inspiration */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent"></div>
      
      {/* Abstract Skyline Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 600" className="fill-navy">
          <rect x="100" y="300" width="20" height="200" />
          <rect x="140" y="250" width="30" height="250" />
          <rect x="190" y="200" width="25" height="300" />
          <rect x="240" y="180" width="40" height="320" />
          <rect x="300" y="220" width="35" height="280" />
          <rect x="360" y="160" width="30" height="340" />
          <rect x="410" y="240" width="25" height="260" />
          <rect x="460" y="190" width="35" height="310" />
          <rect x="520" y="280" width="20" height="220" />
          <rect x="560" y="320" width="25" height="180" />
        </svg>
      </div>

      {/* UAE Legal Licensing Badge */}
      <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-gold-accent/30">
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
          {/* --- FIX & IMPROVEMENT: Corrected typo and unified headline --- */}
          <h1 className="font-cinzel text-[32px] font-bold text-navy mb-6 leading-tight">
            Connect with UAE's<br />
            <span className="text-gold-accent">Trusted Legal Team</span>
          </h1>
          <div className="w-40 h-px bg-gradient-to-r from-gold-accent to-transparent"></div>
        </div>
        
        <div className="flex items-start justify-between max-w-6xl gap-12">
          {/* Contact Information */}
          <div className="flex-1 space-y-8">
        
              <div>
                <p className="font-montserrat text-[11px] text-navy/70 uppercase tracking-wider mb-2">Dubai Office</p>
                <p className="font-montserrat text-[14px] text-navy font-semibold">Business Bay, Dubai, UAE</p>
                <p className="font-montserrat text-[12px] text-black/70">Licensed Legal Consultancy</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-navy" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-montserrat text-[11px] text-navy/70 uppercase tracking-wider mb-2">Website</p>
                <p className="font-montserrat text-[16px] text-navy font-semibold">precedentiallaw.com</p>
              </div>
            </div>
            
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
                  <p className="font-montserrat text-[12px] text-black/70">Most inquiries answered within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced QR Code Section */}
          <div className="text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-navy-primary to-navy-deep rounded-2xl flex items-center justify-center mb-6 premium-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-12 bg-gradient-to-br from-red-600 via-white to-green-600 opacity-80"></div>
              <QrCode className="w-36 h-36 text-white" strokeWidth={1.5} />
            </div>
            <p className="font-montserrat text-[14px] text-navy/80 font-medium mb-2">
              Scan for instant access
            </p>
            <p className="font-montserrat text-[12px] text-navy/60">
              Mobile-optimized consultation booking
            </p>
            
            <div className="mt-4 text-center">
              <p className="font-montserrat text-[10px] text-gold-accent font-semibold">
                Serving Dubai's Legal District
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-[12px] text-navy font-medium px-3 py-1 border border-gold-accent/30 rounded">8</span>
        <img src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" alt="Logo" className="w-8 h-8 opacity-70" />
      </div>
    </div>
  );
};
