import { Phone, Mail, Globe, QrCode, MapPin, Clock } from 'lucide-react';

export const ContactPage = () => {
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

      {/* Background decorative elements */}
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gold-accent/5 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-24 bg-gradient-to-b from-gold-accent to-transparent opacity-20"></div>

      {/* Content */}
      <div className="p-20 pt-32 h-full flex flex-col justify-center">
        <div className="mb-16">
          <h1 className="font-cinzel text-display font-bold text-navy mb-6 leading-tight">
            Let's Build Your Legal Confidence.
          </h1>
          <div className="w-40 h-px bg-gradient-to-r from-gold-accent to-transparent"></div>
        </div>
        
        <div className="flex items-start justify-between max-w-6xl gap-16">
          {/* Contact Information */}
          <div className="flex-1 space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-navy" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-montserrat text-caption text-navy/70 uppercase tracking-wider mb-2">Website</p>
                <p className="font-montserrat text-subhead text-navy font-semibold">precedentiallaw.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-navy" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-montserrat text-caption text-navy/70 uppercase tracking-wider mb-2">Email</p>
                <p className="font-montserrat text-subhead text-navy font-semibold">ask@precedentiallaw.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-navy" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-montserrat text-caption text-navy/70 uppercase tracking-wider mb-2">Phone</p>
                <p className="font-montserrat text-subhead text-navy font-semibold">+971 50 901 4120</p>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-12 pt-8 border-t border-gold-accent/20">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-accent/20 to-gold-muted/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gold-accent" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-montserrat text-caption text-navy/70 uppercase tracking-wider mb-2">Response Time</p>
                  <p className="font-montserrat text-body text-navy font-medium">Most inquiries answered within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="text-center">
            <div className="w-40 h-40 bg-gradient-to-br from-navy-primary to-navy-deep rounded-2xl flex items-center justify-center mb-6 premium-shadow">
              <QrCode className="w-32 h-32 text-white" strokeWidth={1.5} />
            </div>
            <p className="font-montserrat text-body text-navy/80 font-medium mb-2">
              Scan to visit our website
            </p>
            <p className="font-montserrat text-caption text-navy/60">
              Quick access to our services
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium elegant-border px-3 py-1">8</span>
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