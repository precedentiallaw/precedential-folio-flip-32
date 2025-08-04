import React, { useState, useEffect } from 'react';
import { CoverPage } from './brochure/CoverPage';
import { WhoIsPage } from './brochure/WhoIsPage';
import { PhilosophyPage } from './brochure/PhilosophyPage';
import { WhyChoosePage } from './brochure/WhyChoosePage';
import { RegionalExpertisePage } from './brochure/RegionalExpertisePage';
import { ServicePortfolioPage } from './brochure/ServicePortfolioPage';
import { PartnershipPage } from './brochure/PartnershipPage';
import { ContactPage } from './brochure/ContactPage';

const pages = [
  { id: 1, component: CoverPage },
  { id: 2, component: WhoIsPage },
  { id: 3, component: PhilosophyPage },
  { id: 4, component: WhyChoosePage },
  { id: 5, component: RegionalExpertisePage },
  { id: 6, component: ServicePortfolioPage },
  { id: 7, component: PartnershipPage },
  { id: 8, component: ContactPage },
];

export const BrochureViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < pages.length && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(pageIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'ArrowRight') nextPage();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const CurrentPageComponent = pages[currentPage]?.component;

  return (
    <div className="min-h-screen brochure-viewer-bg flex items-center justify-center p-4 print:p-0 print:min-h-0">
      <div className="relative brochure-container print:shadow-none">
        <div className="w-[297mm] h-[210mm] max-w-[95vw] max-h-[95vh] print:max-w-none print:max-h-none print:w-full print:h-full">
          <div className={`w-full h-full transition-transform duration-500 ease-in-out ${
            isTransitioning ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
          }`}>
            {CurrentPageComponent && <CurrentPageComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};