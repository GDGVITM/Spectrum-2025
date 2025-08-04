import React, { useEffect, useRef, useState } from 'react';

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
          const sectionIdAttr = entry.target.getAttribute('data-section');
          if (entry.isIntersecting && sectionIdAttr) {
            setVisibleSections((prev) => new Set([...prev, sectionIdAttr]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
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

  const PartnerLogo = ({
    src,
    alt,
    name,
    large = false,
    link,
  }: {
    src: string;
    alt: string;
    name: string;
    large?: boolean;
    link?: string;
  }) => {
    const content = (
      <div className="flex flex-col items-center group cursor-pointer">
        <div
          className={`
            flex items-center justify-center p-4 transition-all duration-500 hover:scale-110
            ${large ? 'w-70 h-30 sm:w-78 sm:h-28 md:w-82 md:h-52' : 'w-52 h-32 sm:w-56 sm:h-36 md:w-60 md:h-30'}
          `}
        >
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

    if (link) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <div ref={partnersRef} className="w-full py-16 sm:py-20 md:py-24 bg-transparent" id={sectionId}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Heading */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            visibleSections.has('heading') ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
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
            visibleSections.has('partners') ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
          data-section="partners"
        >
          <div className="flex flex-col items-center gap-12">
            {/* First row: GDG Cloud Mumbai larger */}
            <div className="flex justify-center w-full">
              <PartnerLogo
                src={partner1Logo}
                alt="GDG Cloud Mumbai"
                name="GDG Cloud Mumbai"
                large
                link="https://gdg.community.dev/gdg-cloud-mumbai/"
              />
            </div>
            {/* Second row: other partners */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              <PartnerLogo src={partner2Logo} alt="CSI VIT" name="CSI VIT" />
              <PartnerLogo src={partner3Logo} alt="CESA VIT" name="CESA VIT" />
            </div>
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