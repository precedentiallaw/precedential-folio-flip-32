import { Check, Shield, Users, Target, MessageSquare, Headphones } from 'lucide-react';

export const WhyChoosePage = () => {
  const points = [
    {
      icon: Shield,
      title: "Experts in UAE Law & Regulatory Frameworks",
      description: "Deep specialization in local legal environment"
    },
    {
      icon: Users,
      title: "Multidisciplinary Team with International Perspective", 
      description: "Global standards with local expertise"
    },
    {
      icon: Target,
      title: "Client-Centered, Outcome-Driven Legal Strategies",
      description: "Tailored solutions focused on your success"
    },
    {
      icon: MessageSquare,
      title: "Transparent Pricing & Clear Communication",
      description: "No surprises, complete transparency"
    },
    {
      icon: Headphones,
      title: "Ongoing Support Beyond the Case",
      description: "Partnership that extends beyond individual matters"
    }
  ];

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

      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-16 w-px h-32 bg-gradient-to-b from-gold-accent to-transparent opacity-30"></div>

      {/* Content */}
      <div className="p-20 pt-32 h-full">
        <h1 className="font-cinzel text-headline font-bold text-navy mb-16">
          Why Choose Precedential
        </h1>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-6 h-6 text-navy" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-montserrat text-body-lg font-bold text-navy mb-2">
                  {point.title}
                </h3>
                <p className="font-montserrat text-body text-black/80 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom accent */}
        <div className="mt-16 w-48 h-px bg-gradient-to-r from-gold-accent to-transparent"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium elegant-border px-3 py-1">4</span>
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