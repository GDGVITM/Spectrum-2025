import React, { useEffect, useRef, useState } from 'react';

// Import partner logos
import partner1Logo from '../assets/partners/gdgcloud.png';
import partner2Logo from '../assets/partners/csi.png';
import partner3Logo from '../assets/partners/cesa.png';

interface PartnersProps {
  sectionId: string;
}

const Partners: React.FC<PartnersProps> = ({ sectionId }) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const partnersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-section');
          if (entry.isIntersecting && sectionId) {
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (partnersRef.current) {
      const sections = partnersRef.current.querySelectorAll('[data-section]');
      sections.forEach((section) => observer.observe(section));
    }

    return () => {
      if (partnersRef.current) {
        const sections = partnersRef.current.querySelectorAll('[data-section]');
        sections.forEach((section) => observer.unobserve(section));
      }
    };
  }, []);

  const PartnerLogo = ({ src, alt, name }: { src: string; alt: string; name: string }) => {
    return (
      <div className="flex flex-col items-center group cursor-pointer">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center p-4 transition-all duration-500 hover:scale-110">
          <img 
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl"
          />
        </div>
        <p className="text-white/80 text-sm font-medium mt-3 group-hover:text-[#A1E9A5] transition-colors duration-300">
          {name}
        </p>
      </div>
    );
  };

  return (
    <div ref={partnersRef} className="w-full py-16 sm:py-20 md:py-24 bg-black" id={sectionId}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Heading */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            visibleSections.has('heading') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
          data-section="heading"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#A1E9A5] via-green-400 to-emerald-300 font-bold mb-6 sm:mb-8"
            style={{ fontFamily: 'Minecraft' }}
          >
            COMMUNITY PARTNERS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#A1E9A5] to-green-400 mx-auto mb-6 rounded-full" />
        </div>

        {/* Partners Grid */}
        <div 
          className={`transition-all duration-1000 delay-200 ${
            visibleSections.has('partners') 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
          data-section="partners"
        >
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            <PartnerLogo src={partner1Logo} alt="Partner 1" name="GDG Cloud Mumbai" />
            <PartnerLogo src={partner2Logo} alt="Partner 2" name="CSI VIT" />
            <PartnerLogo src={partner3Logo} alt="Partner 3" name="CESA VIT" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;
