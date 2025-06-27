import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sunMoonPosition = isNight ? 85 : 15;

  const spectrumBaseOffset = isNight ? -100 : 100; 
  const spectrumScrollOffset = scrollY * (isNight ? 0.3 : -0.3); 
  const spectrumTransform = `translateY(${spectrumBaseOffset + spectrumScrollOffset}px)`;

  const handleExploreMore = () => {
    setIsNight(!isNight);
  };

  return (
    <div className="w-screen font-[Audiowide]  overflow-x-hidden">
      {/* ----------- Frame 1: Parallax Section ----------- */}
      <div className="relative w-full h-[110vh] overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            backgroundImage: `url(${isNight
              ? 'assets/home-assets/Night/bg.png'
              : 'assets/home-assets/Sunset/bg.png'})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />

        <div
          className="absolute w-20 h-20 rounded-full transition-all duration-1000 ease-in-out"
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
        {[1, 2, 3].map((n, i) => (
          <div
            key={`left-cloud-${n}`}
            className="absolute inset-0 w-full h-full transition-all duration-1000"
            style={{
              backgroundImage: `url(${isNight
                ? `assets/home-assets/Night/cloud${n}.png`
                : `assets/home-assets/Sunset/cloud${n}.png`})`,
              backgroundSize: `${9 - n}%`,
              top: `${10 + 15 * i}%`,
              left: `${49 - 24 * i}%`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              transform: `translateY(${scrollY * -0.1 * (n + 1)}px)`,
              zIndex: 1,
            }}
          />
        ))}

        {/* Right Clouds */}
        {[4, 5].map((n, i) => (
          <div
            key={`right-cloud-${n}`}
            className="absolute inset-0 w-full h-full transition-all duration-1000"
            style={{
              backgroundImage: `url(${isNight
                ? `assets/home-assets/Night/cloud${n}.png`
                : `assets/home-assets/Sunset/cloud${n}.png`})`,
              backgroundSize: `${6 + i * 2}%`,
              top: `${15 + i * 20}%`,
              right: `${29 + i * 26}%`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right top',
              transform: `translateY(${scrollY * -0.08 * (i + 1.5)}px)`,
              zIndex: 1,
            }}
          />
        ))}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            backgroundImage: `url(${isNight
              ? 'assets/home-assets/Night/mountain4.png'
              : 'assets/home-assets/Sunset/mountain4.png'})`,
            backgroundSize: 'contain',
            top: '35%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            zIndex: 2,
          }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center h-screen transition-all duration-1000 ease-in-out"
          style={{
            transform: spectrumTransform,
            zIndex: 2.5,
          }}
        >
          <img
            src="assets/home-assets/Sunset/spectrum.png"
            alt="Spectrum Logo"
            className="w-[600px] max-w-[90%] object-contain drop-shadow-xl opacity-80"
          />
        </div>

        {/* Pixelcut Layers*/}
        {[2, 1, 3].map((n, i) => (
          <div
            key={`pixelcut-${n}`}
            className="absolute inset-0 w-full h-full transition-all duration-1000"
            style={{
              backgroundImage: `url(${isNight
                ? `assets/home-assets/Night/pixelcut${n}.png`
                : `assets/home-assets/Sunset/pixelcut${n}.png`})`,
              backgroundSize: n === 3 ? 'auto' : `${n === 2 ? '55%' : '50%'}`,
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
            backgroundImage: `url(${isNight
              ? 'assets/home-assets/Night/ground.png'
              : 'assets/home-assets/Sunset/ground.png'})`,
            backgroundSize: '100%',
            top: '15%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            zIndex: 6,
          }}
        />

        {/* Explore More Button */}
        <div
          className="absolute bottom-26 left-1/2 transform -translate-x-1/2 z-10"
        >
          <button
            onClick={handleExploreMore}
            className={`
              px-8 py-4 rounded-full font-semibold text-lg
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
            {isNight ? 'Click me for magic' : 'Click me for magic'}
          </button>
        </div>
      </div>

      {/* ----------- Frame 2: Below Main Scene ----------- */}
      <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-8 py-20">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">🚧Work in progress</h2>
        <p className="text-white text-lg md:text-xl text-center max-w-3xl">
          This section is under work in progress..
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
