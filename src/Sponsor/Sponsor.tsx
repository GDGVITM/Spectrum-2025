import bg from '../assets/Union.png';
import Footer from '../components/Footer';
import '../App.css';

function Sponsor() {
  return (
    <>
      <div
        className="about-container relative min-h-screen w-screen overflow-y-auto"
        style={{ backgroundColor: '#000000', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {/* Particle system */}
        <div className="particle-system">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="grid-overlay"></div>

        {/* Scanning line */}
        <div className="scan-line"></div>

        {/* Accent lines */}
        <div className="accent-lines">
          <div className="accent-line"></div>
          <div className="accent-line"></div>
          <div className="accent-line"></div>
          <div className="accent-line"></div>
        </div>

        {/* Enhanced random halo effects */}
        <div className="random-halo-1"></div>
        <div className="random-halo-2"></div>
        <div className="random-halo-3"></div>
        <div className="random-halo-4"></div>
        <div className="random-halo-5"></div>
        <div className="random-halo-6"></div>
        <div className="random-halo-7"></div>

        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
          }}
          className="absolute inset-0 bg-no-repeat min-h-[100vh] w-full mobile-no-bg"
        >
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="absolute inset-0 green-hallow"></div>
          <div className="relative mt-24 sm:mt-0 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32 flex flex-col items-center text-center z-10">
            
            {/* Partnerships text - hidden on mobile, visible on large screens */}
            <p
              className="hidden lg:block text-[#A1E9A5] mb-16 sm:mb-20 md:mb-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              style={{ fontFamily: 'Audiowide' }}
            >
              08 // SPONSORS
            </p>

            <h2
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[8rem] 2xl:text-[8rem] text-[#A1E9A5] font-bold mb-10 text-shadow"
              style={{ fontFamily: 'Press Start 2P' }}
            >
              SPONSORSHIP
            </h2>

            {/* Coming Soon section */}
            <div className="relative w-[90%] sm:w-[80%] max-w-4xl mb-20 flex justify-center items-center">
              <div className="textbox-container">
                <div className="content-area">
                  <div className="connecting-vertical-line left"></div>
                  <div className="connecting-vertical-line right"></div>
                  <div className="line">
                    <span
                      className="text-[#5FFF95] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                      style={{ 
                        fontFamily: 'Press Start 2P',
                        textShadow: '0 0 10px rgba(95, 255, 149, 0.8), 0 0 20px rgba(95, 255, 149, 0.6)',
                        animation: 'blink 1.5s ease-in-out infinite'
                      }}
                    >
                      COMING SOON
                      <span 
                        style={{
                          display: 'inline-block',
                          marginLeft: '1rem',
                          animation: 'dots 1.5s steps(4, end) infinite'
                        }}
                        className="loading-dots"
                      >
                      </span>
                    </span>
                  </div>
                    </div>
              </div>
            </div>

          </div>
          <Footer />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.7; }
        }

        .loading-dots::after {
          content: '';
          animation: dots 1.5s steps(4, end) infinite;
        }

        @keyframes dots {
          0%, 20% { content: ''; }
          40% { content: '.'; }
          60% { content: '..'; }
          80%, 100% { content: '...'; }
        }
      `}</style>
    </>
  );
}

export default Sponsor;