import React, { useEffect, useRef, useState } from 'react';

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
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            on boarding partners soon...
          </p>
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
