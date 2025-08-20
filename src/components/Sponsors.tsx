import React, { useEffect, useRef, useState } from 'react';

import devfolioLogo from '../assets/sponsors/devfolio.png';
import ethIndiaLogo from '../assets/sponsors/eth.png';
import gfgLogo from '../assets/sponsors/gfg.png';
import topclubLogo from '../assets/sponsors/topclub.png';
import xyzLogo from '../assets/sponsors/xyz.png';
import techo from '../assets/sponsors/Techiolaza.png';
import elite from '../assets/sponsors/elite.png';
import vision from '../assets/sponsors/VisionX.png';
import vidya from '../assets/sponsors/VidyarthiMitra.png';

interface SponsorsProps {
  sectionId: string;
}

const Sponsors: React.FC<SponsorsProps> = ({ sectionId }) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sponsorsRef = useRef<HTMLDivElement>(null);

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

    if (sponsorsRef.current) {
      const sections = sponsorsRef.current.querySelectorAll('[data-section]');
      sections.forEach((section) => observer.observe(section));
    }

    return () => {
      if (sponsorsRef.current) {
        const sections = sponsorsRef.current.querySelectorAll('[data-section]');
        sections.forEach((section) => observer.unobserve(section));
      }
    };
  }, []);

  // Background components
  const FloatingElement = ({ className, delay = 0 }: { className: string; delay?: number }) => (
    <div
      className={`absolute rounded-full opacity-20 animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '4s',
      }}
    />
  );

  const GridPattern = () => (
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(161, 233, 165, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(161, 233, 165, 0.3) 1px, transparent 1px)
        `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );

  interface SponsorLogoProps {
    src: string;
    alt: string;
    name: string;
    size: 'large' | 'medium' | 'small';
    href: string;
  }

  const SponsorLogo: React.FC<SponsorLogoProps> = ({ src, alt, name, size, href }) => {
    const sizeClasses = {
      large: 'w-64 h-32 sm:w-80 sm:h-40 md:w-96 md:h-48',
      medium: 'w-48 h-24 sm:w-56 sm:h-28 md:w-64 md:h-32',
      small: 'w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24',
    };

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group cursor-pointer"
        aria-label={name}
      >
        <div
          className={`
            ${sizeClasses[size]}
            flex items-center justify-center p-4
            transition-all duration-500 hover:scale-110
            bg-gradient-to-br from-gray-900/80 to-gray-800/80
            border border-[#A1E9A5]/20 rounded-2xl
            shadow-lg hover:shadow-2xl
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
      </a>
    );
  };

  return (
    <div ref={sponsorsRef} className="w-full py-20 sm:py-24 md:py-32 bg-black relative overflow-hidden" id={sectionId}>
      {/* Enhanced Background Elements */}
      <GridPattern />

      {/* Animated floating elements */}
      <FloatingElement className="top-10 left-10 w-4 h-4 bg-green-400" delay={0} />
      <FloatingElement className="top-20 right-20 w-6 h-6 bg-yellow-400" delay={1} />
      <FloatingElement className="bottom-20 left-20 w-5 h-5 bg-emerald-400" delay={2} />
      <FloatingElement className="bottom-10 right-10 w-3 h-3 bg-green-300" delay={3} />
      <FloatingElement className="top-1/2 left-1/4 w-2 h-2 bg-lime-400" delay={1.5} />
      <FloatingElement className="top-1/3 right-1/3 w-4 h-4 bg-teal-400" delay={2.5} />

      {/* Large gradient blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '6s' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '8s', animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-radial from-emerald-500/8 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: '7s', animationDelay: '1s' }}
      />

      {/* Moving particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sponsors Heading */}
        <div className="text-center mb-16 sm:mb-20" data-section="heading">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#A1E9A5] via-green-400 to-emerald-300 font-bold mb-6 sm:mb-8 transition-all duration-1000 ${
              visibleSections.has('heading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Minecraft' }}
          >
            OUR SPONSORS
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-[#A1E9A5] to-green-400 mx-auto mb-6 rounded-full transition-all duration-1000 delay-300 ${
              visibleSections.has('heading') ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          />
          <p
            className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              visibleSections.has('heading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Powered by amazing partners who make <span className="text-[#A1E9A5] font-semibold">Spectrum 2025</span> possible
          </p>
        </div>

        {/* Title Sponsor - Devfolio */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            visibleSections.has('title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-section="title"
        >
          <div className="flex justify-center">
            <SponsorLogo
              src={devfolioLogo}
              alt="DEVFOLIO LOGO"
              name="Devfolio"
              size="large"
              href="https://devfolio.co"
            />
          </div>
        </div>

        {/* Gold Sponsors */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            visibleSections.has('gold') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-section="gold"
        >
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            <SponsorLogo src={ethIndiaLogo} alt="ETHIndia Logo" name="ETHIndia" size="medium" href="https://ethindia.co" />
          </div>
        </div>

        {/* Silver Sponsors */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            visibleSections.has('silver') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-section="silver"
        >
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            <SponsorLogo src={gfgLogo} alt="GeeksforGeeks" name="GeeksforGeeks" size="small" href="https://www.geeksforgeeks.org" />
            <SponsorLogo src={topclubLogo} alt="TopClub" name="TopClub" size="small" href="https://www.topclubfantasy.com/" />
            <SponsorLogo src={vidya} alt="VidyarthiMitra" name="VidyarthiMitra" size="small" href="https://www.vidyarthimitra.org/" />
            <SponsorLogo src={xyzLogo} alt=".xyz" name=".xyz" size="small" href="https://gen.xyz/" />
          </div>
        </div>

        {/* Problem Statement Sponsors */}
        <div
          className={`mb-12 transition-all duration-1000 delay-600 ${
            visibleSections.has('problem') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-section="problem"
        >
          {/* Problem Statement Sponsors Heading */}
          <div className="text-center mb-12">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 font-bold mb-4"
              style={{ fontFamily: 'Minecraft' }}
            >
              PROBLEM STATEMENT SPONSORS
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-4 rounded-full" />
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Partners providing innovative challenges and real-world problem statements
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            <SponsorLogo src={techo} alt="Technoloazia" name="Technoloazia Innovations" size="small" href="#" />
            <SponsorLogo src={elite} alt="Elite" name="Elite Forums" size="small" href="#" />
            <SponsorLogo src={vision} alt="Elite" name="VisionX" size="small" href="#" />
          </div>
        </div>
      </div>

      <style>{`
        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(161, 233, 165, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(161, 233, 165, 0.5);
        }

        /* Custom animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Gradient backgrounds */
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </div>
  );
};

export default Sponsors;