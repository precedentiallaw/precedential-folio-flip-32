import { Shield, Award, Users, MessageCircle, Clock, Globe } from 'lucide-react';

export const WhyChoosePage = () => {
  const advantages = [
    {
      icon: Shield,
      title: "UAE Legal Expertise",
      description: "Deep specialization in local regulatory frameworks and commercial law"
    },
    {
      icon: Award,
      title: "International Standards", 
      description: "Global best practices combined with local market knowledge"
    },
    {
      icon: Users,
      title: "Client-Centered Approach",
      description: "Tailored legal strategies focused on your business objectives"
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Clear pricing structure and regular progress updates"
    },
    {
      icon: Clock,
      title: "Efficient Resolution",
      description: "Streamlined processes for faster case completion"
    },
    {
      icon: Globe,
      title: "Dubai Market Focus",
      description: "Specialized expertise in Dubai's dynamic business environment"
    }
  ];

  return (
    <div className="brochure-page h-full relative bg-white paper-texture">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Content */}
      <div className="p-10 h-full flex flex-col justify-center">
        {/* Main Headline */}
        <div className="text-center mb-10">
          <h1 className="font-cinzel text-[24px] font-bold text-navy mb-3 leading-tight">
            Why Choose Precedential
          </h1>
          <div className="w-16 h-px bg-gold-accent mx-auto mt-4"></div>
        </div>

        {/* Advantages Grid - Complete 3x2 layout */}
        <div className="grid grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center p-4 bg-white/50 rounded-lg border border-gold-accent/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gold-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <advantage.icon className="w-6 h-6 text-navy" strokeWidth={2} />
              </div>
              <h3 className="font-montserrat text-[14px] font-semibold text-navy mb-3">
                {advantage.title}
              </h3>
              <p className="font-montserrat text-[12px] text-black/80 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 w-32 h-px bg-gold-accent mx-auto"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium px-2 py-1 border border-gold-accent/30">4</span>
        <img 
          src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
          alt="Logo" 
          className="w-6 h-6 opacity-60"
        />
      </div>
    </div>
  );
};