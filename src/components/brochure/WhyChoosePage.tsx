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
      title: "UAE Market Expertise",
      description: "Comprehensive knowledge of UAE's evolving business landscape"
    }
  ];

  return (
    <div className="brochure-page h-full relative bg-white paper-texture print:bg-white">
      {/* Professional header with legal accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Legal symbols background */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" viewBox="0 0 800 600" className="fill-navy/5">
          <path d="M100 300 L120 260 L140 300 L120 340 Z" />
          <path d="M700 150 L720 110 L740 150 L720 190 Z" />
          <circle cx="650" cy="450" r="25" />
        </svg>
      </div>
      
      {/* Content optimized for print */}
      <div className="p-8 h-full flex flex-col justify-center print:p-6">
        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="font-cinzel text-[20px] font-bold text-navy mb-2 leading-tight print:text-[18px]">
            Why Choose Precedential
          </h1>
          <div className="w-12 h-px bg-gold-accent mx-auto mt-3"></div>
        </div>

        {/* Professional quote */}
        <div className="text-center mb-8 p-4 border-l-4 border-gold-accent bg-navy/5 rounded-r-lg">
          <p className="font-montserrat text-[11px] text-navy italic">
            "Excellence in legal counsel through comprehensive expertise and unwavering commitment to client success"
          </p>
        </div>

        {/* Advantages Grid - Print optimized */}
        <div className="grid grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center p-3 bg-white rounded border border-gold-accent/20 print:p-2">
              <div className="w-10 h-10 bg-gold-accent rounded mx-auto mb-3 flex items-center justify-center print:w-8 print:h-8">
                <advantage.icon className="w-5 h-5 text-navy print:w-4 print:h-4" strokeWidth={2} />
              </div>
              <h3 className="font-montserrat text-[12px] font-semibold text-navy mb-2 print:text-[11px]">
                {advantage.title}
              </h3>
              <p className="font-montserrat text-[10px] text-black/80 leading-relaxed print:text-[9px]">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 w-24 h-px bg-gold-accent mx-auto"></div>
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