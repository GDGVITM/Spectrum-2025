import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import nightBg from '../assets/home-assets/Night/bg.png';
import sunsetBg from '../assets/home-assets/Sunset/bg.png';
import nightCloud1 from '../assets/home-assets/Night/cloud1.png';
import nightCloud2 from '../assets/home-assets/Night/cloud2.png';
import nightCloud3 from '../assets/home-assets/Night/cloud3.png';
import sunsetCloud1 from '../assets/home-assets/Sunset/cloud1.png';
import sunsetCloud2 from '../assets/home-assets/Sunset/cloud2.png';
import sunsetCloud3 from '../assets/home-assets/Sunset/cloud3.png';
import nightMountain4 from '../assets/home-assets/Night/mountain4.png';
import sunsetMountain4 from '../assets/home-assets/Sunset/mountain4.png';
import spectrumLogo from '../assets/home-assets/Sunset/spectrum.png';
import fontboltLogo from '../assets/home-assets/Sunset/2025-white.png';
import nightPixelcut1 from '../assets/home-assets/Night/pixelcut1.png';
import nightPixelcut2 from '../assets/home-assets/Night/pixelcut2.png';
import nightPixelcut3 from '../assets/home-assets/Night/pixelcut3.png';
import sunsetPixelcut1 from '../assets/home-assets/Sunset/pixelcut1.png';
import sunsetPixelcut2 from '../assets/home-assets/Sunset/pixelcut2.png';
import sunsetPixelcut3 from '../assets/home-assets/Sunset/pixelcut3.png';
import nightGround from '../assets/home-assets/Night/ground.png';
import sunsetGround from '../assets/home-assets/Sunset/ground.png';
import Timeline from './Timeline';
import Sponsors from './Sponsors';
import Partners from './Partners';
import DevfolioApplyButton from '../Events/DevfolioApplyButton';
import FAQSection from './Faqs'; 

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isNight, setIsNight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getScreenSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 'sm';
      if (window.innerWidth < 768) return 'md';
      if (window.innerWidth < 1024) return 'lg';
      return 'xl';
    }
    return 'xl';
  };

  // Corrected sun/moon positioning: sun rises in east (left), moon appears in west (right)
  const sunMoonPosition = isNight ? 85 : 15; // Moon at 85% (right/west), Sun at 15% (left/east)
  const sunMoonHeight = isNight ? 25 : 12; // Moon lower at 25%, Sun higher at 12%

  const spectrumBaseOffset = isNight ? -150 : 50; 
  const spectrumScrollOffset = scrollY * (isNight ? 0.3 : -0.3); 
  const spectrumTransform = `translateY(${spectrumBaseOffset + spectrumScrollOffset}px)`;

  const fontboltBaseOffset = isNight ? -30 : 170;
  const fontboltScrollOffset = scrollY * (isNight ? 0.2 : -0.2);
  const fontboltTransform = `translateY(${fontboltBaseOffset + fontboltScrollOffset}px)`;

  const handleExploreMore = () => {
    setIsNight(!isNight);
  };

  const cloudAssets = {
    night: [nightCloud1, nightCloud2, nightCloud3],
    sunset: [sunsetCloud1, sunsetCloud2, sunsetCloud3]
  };

  const pixelcutAssets = {
    night: [nightPixelcut1, nightPixelcut2, nightPixelcut3],
    sunset: [sunsetPixelcut1, sunsetPixelcut2, sunsetPixelcut3]
  };

  const getSizeMultiplier = () => {
    const screenSize = getScreenSize();
    switch (screenSize) {
      case 'sm': return 0.4;  
      case 'md': return 0.6; 
      case 'lg': return 0.8;  
      default: return 1;     
    }
  };

  const sizeMultiplier = getSizeMultiplier();

  return (
    <div className="w-screen font-[Audiowide] overflow-x-hidden relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-black z-0">
        {/* Subtle animated gradient blobs - consistent across all sections */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(161, 233, 165, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(161, 233, 165, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/*Frame 1: Parallax Section */}
      <div className="relative w-full h-[100vh] overflow-hidden z-10">

        {/* Background */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            backgroundImage: `url(${isNight ? nightBg : sunsetBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />

        {/* Sun/Moon - Responsive positioning */}
        <div
          className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full transition-all duration-1000 ease-in-out"
          style={{
            left: `${sunMoonPosition}%`,
            top: `${sunMoonHeight}%`, 
            backgroundColor: isNight ? '#E6E6FA' : '#FFD700',
            boxShadow: isNight 
              ? '0 0 20px rgba(230, 230, 250, 0.6), inset -6px -6px 0 rgba(200, 200, 220, 0.3)'
              : '0 0 30px rgba(255, 215, 0, 0.8)',
            transform: `translateX(-50%) translateY(-50%)`,
            zIndex: 1,
          }}
        >
          {/* Moon craters - responsive sizing */}
          {isNight && (
            <>
              <div 
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gray-400 rounded-full opacity-40 transition-opacity duration-1000"
                style={{ top: '20%', left: '30%' }}
              />
              <div 
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full opacity-30 transition-opacity duration-1000"
                style={{ top: '60%', right: '25%' }}
              />
              <div 
                className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-400 rounded-full opacity-35 transition-opacity duration-1000"
                style={{ bottom: '30%', left: '20%' }}
              />
            </>
          )}
        </div>

        {/* Left Clouds */}
        {[1, 2, 3].map((n, i) => {
          const cloudAsset = cloudAssets[isNight ? 'night' : 'sunset'][n - 1];
          if (!cloudAsset) return null;
          
          return (
            <div
              key={`left-cloud-${n}`}
              className="absolute inset-0 w-full h-full transition-all duration-1000"
              style={{
                backgroundImage: `url(${cloudAsset})`,
                backgroundSize: `${(9 - n) * sizeMultiplier}%`,
                top: `${10 + 15 * i}%`,
                left: `${49 - 24 * i}%`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left top',
                transform: `translateY(${scrollY * -0.1 * (n + 1)}px)`,
                zIndex: 1,
              }}
            />
          );
        })}

        {/* Right Clouds */}
        {[1, 2].map((i) => {
          const cloudAsset = cloudAssets[isNight ? 'night' : 'sunset'][i + 2]; 
          if (!cloudAsset) return null;
          
          return (
            <div
              key={`right-cloud-${i + 4}`}
              className="absolute inset-0 w-full h-full transition-all duration-1000"
              style={{
                backgroundImage: `url(${cloudAsset})`,
                backgroundSize: `${(6 + i * 2) * sizeMultiplier}%`,
                top: `${15 + i * 20}%`,
                right: `${29 + i * 26}%`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
                transform: `translateY(${scrollY * -0.08 * (i + 1.5)}px)`,
                zIndex: 1,
              }}
            />
          );
        })}
        
        {/* Mountains */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            backgroundImage: `url(${isNight ? nightMountain4 : sunsetMountain4})`,
            backgroundSize: sizeMultiplier < 1 ? 'cover' : 'contain',
            top: '35%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            zIndex: 2,
          }}
        />

        {/* Spectrum Logo - Responsive */}
        <div
          className="absolute inset-0 flex items-center justify-center h-screen transition-all duration-1000 ease-in-out px-4"
          style={{
            transform: isMobile ? `translateY(${spectrumBaseOffset * 0.7 + spectrumScrollOffset}px)` : spectrumTransform,
            zIndex: 2.5,
          }}
        >
          <img
            src={spectrumLogo}
            alt="Spectrum Logo"
            className="w-[250px] xs:w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-[90%] object-contain drop-shadow-xl opacity-80"
          />
        </div>

        {/* Fontbolt Logo - Responsive */}
        <div
          className="absolute inset-0 flex items-center justify-center h-screen transition-all duration-1000 ease-in-out px-4"
          style={{
            transform: isMobile ? `translateY(${fontboltBaseOffset * 0.8 + fontboltScrollOffset}px)` : fontboltTransform,
            zIndex: 2.4,
          }}
        >
          <img
            src={fontboltLogo}
            alt="Fontbolt Logo"
            className="w-[90px] xs:w-[110px] sm:w-[150px] md:w-[200px] lg:w-[260px] max-w-[50%] object-contain drop-shadow-lg opacity-75"
          />
        </div>

        {/* Pixelcut Layers*/}
        {[2, 1, 3].map((n, i) => (
          <div
            key={`pixelcut-${n}`}
            className="absolute inset-0 w-full h-full transition-all duration-1000"
            style={{
              backgroundImage: `url(${pixelcutAssets[isNight ? 'night' : 'sunset'][n - 1]})`,
              backgroundSize: n === 3 ? 'auto' : `${(n === 2 ? 55 : 50) * sizeMultiplier}%`,
              top: n === 1 ? '2%' : '0%',
              left: n === 1 ? '12%' : 'auto',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: n === 3 ? 'right bottom' : 'left bottom',
              zIndex: 3 + i,
            }}
          />
        ))}

        {/* Ground*/}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            backgroundImage: `url(${isNight ? nightGround : sunsetGround})`,
            backgroundSize: sizeMultiplier < 1 ? 'cover' : '100%',
            top: '15%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            zIndex: 6,
          }}
        />

        {/* Button - Responsive */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-10 px-4">
          <button
            onClick={handleExploreMore}
            className={`
              px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg
              transition-all duration-500 ease-in-out
              backdrop-blur-sm border-2
              hover:scale-105 hover:shadow-2xl
              active:scale-95
              w-full max-w-xs sm:max-w-none sm:w-auto
              ${isNight 
                ? 'bg-indigo-900/70 text-white border-indigo-400 hover:bg-indigo-800/80 hover:border-indigo-300' 
                : 'bg-orange-600/70 text-white border-orange-300 hover:bg-orange-500/80 hover:border-orange-200'
              }
            `}
          >
            <span className="block sm:hidden">Control Time</span>
            <span className="hidden sm:block">You have the control of time</span>
          </button>
        </div>

        {/* Black Bottom Gradient */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3), black)',
            zIndex: 10,
          }}
        />
      </div>

      {/* ----------- Frame 2: Timeline Section ----------- */}
      <div className="w-full min-h-screen py-12 sm:py-16 md:py-20 flex flex-col items-center justify-start relative z-10">
        {/* Timeline Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h1 
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[8rem] 2xl:text-[8rem] text-[#A1E9A5] font-bold mb-4 sm:mb-6 text-shadow"
            style={{ fontFamily: 'Minecraft' }}
          >
            EVENT TIMELINE
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore our exciting lineup of events and competitions throughout Spectrum 2025
          </p>
        </div>
        
        <Timeline />

        {/* Info about Brochure */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-base sm:text-lg text-gray-300 mb-4 text-center">
            For a detailed overview of Spectrum 2025, checkout our brochure below
          </p>
          <a
            href="/Spectrum-Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#A1E9A5] to-green-400 text-black font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            View Brochure
          </a>
        </div>
      </div>

      {/* ----------- Frame 3: Hackathon Section ----------- */}
      <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hackathon Heading - responsive text sizes */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[6rem] 2xl:text-[7rem] text-[#A1E9A5] font-bold mb-4 sm:mb-6 md:mb-8"
              style={{ fontFamily: 'Minecraft' }}
            >
              HACKBUILD 2025
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#A1E9A5] to-green-400 mx-auto mb-4 sm:mb-6 rounded-full shadow-lg shadow-green-400/50" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              Join our flagship hackathon and build innovative solutions in a collaborative environment where creativity meets technology.
            </p>
          </div>

          {/* Hackathon Content - responsive grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Left: Description - stack on mobile */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-green-400/30 shadow-lg shadow-green-400/10 hover:shadow-green-400/20 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[#A1E9A5] mb-3 sm:mb-4">What is HackBuild?</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  HackBuild is our premier hackathon featuring two exciting rounds. Start with online submissions of your project ideas and prototypes, then compete on-site with the top selected teams.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-400/30 shadow-lg shadow-blue-400/10 hover:shadow-blue-400/20 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-3 sm:mb-4">Event Timeline</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  <strong>Duration:</strong> 12th to 23rd August<br />
                  <strong>Round 1:</strong> Online submissions<br />
                  <strong>Round 2:</strong> On-site hackathon for selected teams<br />
                  <strong>Finals:</strong> Presentations and judging on 23rd August
                </p>
              </div>
            </div>

            {/* Right: Apply Button & Features - responsive layout */}
            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-purple-400/30 shadow-lg shadow-purple-400/10 hover:shadow-purple-400/20 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Ready to Build?</h3>
                <div className="mb-4 sm:mb-6">
                  {/* <DevfolioApplyButton hackathonSlug="hackbuild" /> */}
                  {/* <DevfolioApplyButton hackathonSlug="hackbuild">
                    </DevfolioApplyButton> */}
                  <DevfolioApplyButton hackathonSlug="hackbuild" />

                </div>
                <p className="text-xs sm:text-sm text-gray-400">
                  Applications are started!!
                </p>
              </div>

              {/* Stats grid - responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-3 sm:p-4 border border-green-400/30 shadow-lg shadow-green-400/10 hover:shadow-green-400/20 transition-all duration-300">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#A1E9A5]">12th to 23rd August</div>
                  <div className="text-xs sm:text-sm text-gray-400">Timeline</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-3 sm:p-4 border border-yellow-400/30 shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/20 transition-all duration-300">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">₹40K+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Prize Pool</div>
                </div>
              </div>
            </div>
          </div>

          {/* Brochure Button for Hackathon */}
          <div className="mt-10 flex flex-col items-center">
            <p className="text-base sm:text-lg text-gray-300 mb-4 text-center">
              For more details about HackBuild, download the hackathon brochure below.
            </p>
            <a
              href="/HackBuild-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#A1E9A5] to-green-400 text-black font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              View HackBuild Brochure
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Sponsors sectionId="sponsors" />
      </div>

      <div className="relative z-10">
        <Partners sectionId="community-partners" />
      </div>


<div className="relative z-10">
  <FAQSection />
</div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
