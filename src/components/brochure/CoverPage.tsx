export const CoverPage = () => {
  return (
    <div className="h-full relative bg-gradient-to-br from-navy-primary to-navy-deep overflow-hidden">
      {/* Subtle Professional Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Elegant Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Content Container */}
      <div className="h-full flex flex-col items-center justify-center px-16 relative z-10">
        {/* Logo */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gold-accent/10 blur-2xl rounded-full scale-125"></div>
          <img 
            src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
            alt="Precedential Legal Consultancy Logo" 
            className="w-32 h-32 object-contain relative z-10" 
          />
        </div>

        {/* Company Name */}
        <div className="text-center mb-20">
          <h1 className="font-cinzel text-display font-bold text-white mb-4 tracking-wide">
            PRECEDENTIAL
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mb-4"></div>
          <h2 className="font-montserrat text-subhead text-white font-light tracking-[0.15em] opacity-90">
            LEGAL CONSULTANCY
          </h2>
        </div>

        {/* Tagline */}
        <div className="text-center max-w-lg">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mb-6"></div>
          <p className="font-montserrat text-body-lg text-white/90 font-light leading-relaxed">
            Setting the Precedent for Your Success
          </p>
        </div>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
    </div>
  );
};