import { DollarSign, Infinity, Users, Clock, Target, Zap } from 'lucide-react';

export const PartnershipPage = () => {
  return (
    <div className="bg-gradient-to-br from-navy-primary to-navy-deep wing-pattern h-full relative text-white">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent"></div>
      
      {/* Content */}
      <div className="p-16 h-full flex flex-col justify-center relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="font-cinzel text-display font-bold text-white mb-6 leading-tight">
            Unlimited Legal. Unlocked Potential.
          </h1>
          <h2 className="font-cinzel text-subhead font-bold text-gold-accent gold-glow">
            For UAE SMEs.
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mt-6"></div>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-3 gap-12 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-accent to-gold-muted rounded-2xl mx-auto mb-6 flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-8 h-8 text-navy" strokeWidth={2.5} />
            </div>
            <h3 className="font-montserrat text-body-lg font-bold text-white mb-4">
              Predictable Costs
            </h3>
            <p className="font-montserrat text-body text-white/90 leading-relaxed">
              Eliminate legal cost surprises and budget with confidence for a single, fixed monthly fee.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-accent to-gold-muted rounded-2xl mx-auto mb-6 flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
              <Infinity className="w-8 h-8 text-navy" strokeWidth={2.5} />
            </div>
            <h3 className="font-montserrat text-body-lg font-bold text-white mb-4">
              Unlimited Access
            </h3>
            <p className="font-montserrat text-body text-white/90 leading-relaxed">
              Gain unrestricted peace of mind with on-demand support for proactive legal engagement, not reactive crisis management.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-accent to-gold-muted rounded-2xl mx-auto mb-6 flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-navy" strokeWidth={2.5} />
            </div>
            <h3 className="font-montserrat text-body-lg font-bold text-white mb-4">
              Expert Counsel
            </h3>
            <p className="font-montserrat text-body text-white/90 leading-relaxed">
              Access experienced UAE legal professionals without the overhead of an in-house team.
            </p>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center mb-12 elegant-border">
          <p className="font-montserrat text-body-lg text-white mb-6 leading-relaxed">
            Say goodbye to the unpredictable hourly rates that hinder so many SMEs.
          </p>
          <div className="text-display font-bold text-gold-accent font-montserrat gold-glow">
            Unlimited Legal Support from AED 5,000/month
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-gold-accent" />
            </div>
            <div>
              <h4 className="font-montserrat text-body font-bold text-white mb-2">UAE-Specific Focus</h4>
              <p className="font-montserrat text-body text-white/90">
                Deep specialization in the local legal and business environment.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-gold-accent" />
            </div>
            <div>
              <h4 className="font-montserrat text-body font-bold text-white mb-2">Speed & Simplicity</h4>
              <p className="font-montserrat text-body text-white/90">
                Most requests are completed in 1-3 business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-white font-medium elegant-border px-3 py-1 border-white/20">7</span>
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