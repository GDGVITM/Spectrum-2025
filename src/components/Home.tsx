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
import fontboltLogo from '../assets/home-assets/Sunset/fontbolt.png';
import nightPixelcut1 from '../assets/home-assets/Night/pixelcut1.png';
import nightPixelcut2 from '../assets/home-assets/Night/pixelcut2.png';
import nightPixelcut3 from '../assets/home-assets/Night/pixelcut3.png';
import sunsetPixelcut1 from '../assets/home-assets/Sunset/pixelcut1.png';
import sunsetPixelcut2 from '../assets/home-assets/Sunset/pixelcut2.png';
import sunsetPixelcut3 from '../assets/home-assets/Sunset/pixelcut3.png';
import nightGround from '../assets/home-assets/Night/ground.png';
import sunsetGround from '../assets/home-assets/Sunset/ground.png';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const sunMoonPosition = isNight ? 85 : 15;

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

  // Responsive size multipliers
  const getSizeMultiplier = () => {
    const screenSize = getScreenSize();
    switch (screenSize) {
      case 'sm': return 0.4;  // 40% of original size
      case 'md': return 0.6;  // 60% of original size
      case 'lg': return 0.8;  // 80% of original size
      default: return 1;      // 100% original size
    }
  };

  const sizeMultiplier = getSizeMultiplier();

  return (
    <div className="w-screen font-[Audiowide] overflow-x-hidden">
      {/* ----------- Frame 1: Parallax Section ----------- */}
      <div className="relative w-full h-[100vh] overflow-hidden">

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

        {/* Sun/Moon */}
        <div
          className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full transition-all duration-1000 ease-in-out"
          style={{
            left: `${sunMoonPosition}%`,
            top: `${isNight ? '20%' : '15%'}`, 
            backgroundColor: isNight ? '#E6E6FA' : '#FFD700',
            boxShadow: isNight 
              ? '0 0 30px rgba(230, 230, 250, 0.6), inset -8px -8px 0 rgba(200, 200, 220, 0.3)'
              : '0 0 40px rgba(255, 215, 0, 0.8)',
            transform: `translateX(-50%) translateY(-50%)`,
            zIndex: 1,
          }}
        >
          {isNight && (
            <>
              <div 
                className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-40 transition-opacity duration-1000"
                style={{ top: '20%', left: '30%' }}
              />
              <div 
                className="absolute w-1.5 h-1.5 bg-gray-400 rounded-full opacity-30 transition-opacity duration-1000"
                style={{ top: '60%', right: '25%' }}
              />
              <div 
                className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-35 transition-opacity duration-1000"
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

        {/* Right Clouds - Only show if we have enough cloud assets */}
        {[1, 2].map((i) => {
          const cloudAsset = cloudAssets[isNight ? 'night' : 'sunset'][i + 2]; // cloud3 for i=0, undefined for i=1
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

        {/* Spectrum Logo */}
        <div
          className="absolute inset-0 flex items-center justify-center h-screen transition-all duration-1000 ease-in-out"
          style={{
            transform: spectrumTransform,
            zIndex: 2.5,
          }}
        >
          <img
            src={spectrumLogo}
            alt="Spectrum Logo"
            className="w-[300px] sm:w-[450px] md:w-[600px] max-w-[90%] object-contain drop-shadow-xl opacity-80"
          />
        </div>

        {/* Fontbolt Logo */}
        <div
          className="absolute inset-0 flex items-center justify-center h-screen transition-all duration-1000 ease-in-out"
          style={{
            transform: fontboltTransform,
            zIndex: 2.4,
          }}
        >
          <img
            src={fontboltLogo}
            alt="Fontbolt Logo"
            className="w-[150px] sm:w-[220px] md:w-[300px] max-w-[50%] object-contain drop-shadow-lg opacity-70"
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

        {/* Explore More Button */}
        <div className="absolute bottom-20 sm:bottom-26 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={handleExploreMore}
            className={`
              px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg
              transition-all duration-500 ease-in-out
              backdrop-blur-sm border-2
              hover:scale-105 hover:shadow-2xl
              active:scale-95
              ${isNight 
                ? 'bg-indigo-900/70 text-white border-indigo-400 hover:bg-indigo-800/80 hover:border-indigo-300' 
                : 'bg-orange-600/70 text-white border-orange-300 hover:bg-orange-500/80 hover:border-orange-200'
              }
            `}
          >
            {isNight ? 'Day' : 'Night'}
          </button>
        </div>
      </div>

      {/* ----------- Frame 2: Below Main Scene ----------- */}
      <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-8 py-20">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">🚧Work in progress🚧</h2>
        <p className="text-white text-lg md:text-xl text-center max-w-3xl">
          This section is under work in progress..
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;