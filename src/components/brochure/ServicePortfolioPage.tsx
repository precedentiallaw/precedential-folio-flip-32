import { Building, Scale, Users, Home, FileText, Search } from 'lucide-react';

export const ServicePortfolioPage = () => {
  const services = [
    {
      category: "Corporate & Commercial Law",
      icon: Building,
      items: [
        "Company Formation (Mainland & Free Zone)",
        "Contract Drafting & Review",
        "Mergers & Acquisitions (M&A)",
        "Shareholder Agreements",
        "Regulatory Compliance",
        "Business Succession Planning"
      ]
    },
    {
      category: "Dispute Resolution & Litigation",
      icon: Scale,
      items: [
        "Pre-litigation Strategy & Dispute Management",
        "Arbitration & Mediation Support",
        "Cheque Bounce & Execution Cases",
        "UAE Judgment Enforcement"
      ]
    },
    {
      category: "Employment & Labour Law",
      icon: Users,
      items: [
        "UAE Labour Law Advisory",
        "Termination & Compensation Claims",
        "Arbitrary Dismissal Cases",
        "HR Policies & Contract Drafting"
      ]
    },
    {
      category: "Property & Rental Law",
      icon: Home,
      items: [
        "Tenancy Dispute Resolution",
        "Property Transfer & Mortgage Legalities",
        "Custom Landlord–Tenant Contracts"
      ]
    },
    {
      category: "Family & Estate Management",
      icon: FileText,
      items: [
        "UAE Family & Divorce Law",
        "Wills & Guardianship Advisory",
        "Estate Planning & Cross-border Inheritance"
      ]
    },
    {
      category: "Specialized Legal Services",
      icon: Search,
      items: [
        "Travel Ban Resolution",
        "Trademark Registration & IP",
        "Bankruptcy & Insolvency",
        "AML Compliance & Due Diligence"
      ]
    }
  ];

  return (
    <div className="brochure-page h-full relative">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Content */}
      <div className="p-16 h-full">
        <h1 className="font-cinzel text-headline font-bold text-navy mb-10">
          Our Legal Services
        </h1>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-h-[calc(100%-12rem)] overflow-hidden">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gold-accent/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold-accent rounded-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-navy" strokeWidth={2} />
                </div>
                <h3 className="font-montserrat text-body-lg font-semibold text-navy">
                  {service.category}
                </h3>
              </div>
              
              <ul className="space-y-1.5">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 font-montserrat text-body text-black/90 leading-tight">
                    <div className="w-1 h-1 bg-gold-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 w-32 h-px bg-gold-accent"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium px-2 py-1 border border-gold-accent/30">6</span>
        <img 
          src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
          alt="Logo" 
          className="w-6 h-6 opacity-60"
        />
      </div>
    </div>
  );
};