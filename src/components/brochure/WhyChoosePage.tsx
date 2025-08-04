import { Shield, Award, Users, MessageCircle, Clock } from 'lucide-react';

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
    }
  ];

  return (
    <div className="brochure-page h-full relative">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Content */}
      <div className="p-16 h-full">
        <h1 className="font-cinzel text-headline font-bold text-navy mb-12">
          Why Choose Precedential
        </h1>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border border-gold-accent/10 hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-gold-accent rounded-lg flex items-center justify-center">
                <advantage.icon className="w-6 h-6 text-navy" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="font-montserrat text-body-lg font-semibold text-navy mb-2">
                  {advantage.title}
                </h3>
                <p className="font-montserrat text-body text-black/80 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom accent */}
        <div className="mt-12 w-32 h-px bg-gold-accent"></div>
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