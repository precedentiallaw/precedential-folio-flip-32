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
        "UAE Judgment Enforcement (Local & Cross-border)"
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
      category: "Family & Estate Management",
      icon: Home,
      items: [
        "UAE Family & Divorce Law",
        "Wills & Guardianship Advisory",
        "Estate Planning & Cross-border Inheritance"
      ]
    },
    {
      category: "Property & Rental Law",
      icon: FileText,
      items: [
        "Tenancy Dispute Resolution",
        "Property Transfer & Mortgage Legalities",
        "Custom Landlord–Tenant Contract Structuring"
      ]
    },
    {
      category: "Specialized Legal Areas",
      icon: Search,
      items: [
        "Travel Ban Resolution",
        "Personal Injury & Compensation Claims",
        "Trademark Registration & IP Searches",
        "Bankruptcy & Insolvency",
        "Anti-Money Laundering (AML) Compliance",
        "Vendor & Investor Due Diligence",
        "KYC/AML & Regulatory Compliance Checks"
      ]
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

      {/* Content */}
      <div className="p-16 pt-28 h-full">
        <h1 className="font-cinzel text-headline font-bold text-navy mb-12">
          Comprehensive Service Portfolio
        </h1>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 h-full">
          {services.map((service, index) => (
            <div key={index} className="space-y-4 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-accent to-gold-muted rounded-lg flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 text-navy" strokeWidth={2.5} />
                </div>
                <h3 className="font-montserrat text-body-lg font-bold text-navy">
                  {service.category}
                </h3>
              </div>
              
              <ul className="space-y-2 pl-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 font-montserrat text-body text-black/90 leading-relaxed">
                    <div className="w-1 h-1 bg-gold-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium elegant-border px-3 py-1">6</span>
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