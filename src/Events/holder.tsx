import { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import techfeudImage from './posters/dsa.png';
import launchpad from './posters/launchpad.png';
import hackbuild from './posters/hackbuild.png';
import ai4startup from './posters/ai4startup.png';
import bg from '../assets/Union.png';
import '../App.css';
import { Arrow, LaunchPadPrize, Techfeudprize, Hackbuildprize } from './svg';
import TechFeudComponent from './EventComponents/TechFeudComponent';
import LaunchPadComponent from './EventComponents/LaunchPadComponent';
import HackBuildComponent from './EventComponents/HackBuildComponent';
import AIStartupComponent from './EventComponents/AIStartupComponent';

export default function Holder() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  const events = [
    {
      image: techfeudImage,
      title: 'Big O Battle',
      description: 'Big O Battle is a dynamic three-round competition...',
      date: '30th July',
      prizeComponent: <Techfeudprize />,
      component: <TechFeudComponent />,
    },
    {
      image: hackbuild,
      title: 'Hack Build',
      description: 'need to be filed yet',
      date: 'R1: 31st July, R2: 2nd & 3rd August',
      prizeComponent: <Hackbuildprize />,
      component: <HackBuildComponent />,
    },
    {
      image: launchpad,
      title: 'Launch Pad',
      description: 'Welcome to LaunchPad, a high-stakes business strategy competition...',
      date: '5th & 6th August',
      prizeComponent: <LaunchPadPrize />,
      component: <LaunchPadComponent />,
    },
    {
      image: ai4startup,
      title: 'GSOC guidance session',
      description: 'need to be filed yet',
      date: '8th August',
      prizeComponent: null,
      component: <AIStartupComponent />,
    },
  ];

  const handleImageClick = (index: number): void => {
    if (index === activeEvent) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveEvent(index);
      setTransitioning(false);
    }, 300);
  };

  const scrollCarousel = (direction: number): void => {
    const cardWidth: number = screenWidth >= 1024 ? 220 : screenWidth >= 768 ? 180 : 140; // Base card width
    const gap = 16; 
    const scrollAmount = cardWidth + gap;

    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const mobileDateStyle = "font-bold text-sm sm:text-base text-[#A1E9A5] px-1.5 py-1 rounded bg-black/50 backdrop-blur-sm shadow-md border-2 border-[#A1E9A5]/40 whitespace-nowrap overflow-hidden text-ellipsis";

  return (
    <div className="min-h-screen w-screen relative overflow-y-auto bg-black text-white">
      <style>{`
        .gradient-overlay {
          background: linear-gradient(to bottom, transparent 70%, #000000 100%);
        }
        .carousel-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .carousel-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
        }
        .carousel-scrollbar {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .bounce-hover:hover {
          animation: bounce 0.6s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>

      <div
        className="absolute inset-0 bg-no-repeat min-h-[150vh] w-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>

        <div className="relative pt-20 pb-40 flex flex-col items-center text-center z-10">
          <p className="text-[#A1E9A5] mb-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[Audiowide]">
            08 // EVENTS
          </p>

          <div className="relative w-full px-4 sm:px-6">
            <div className="w-full bg-opacity-0 min-h-[calc(100vh-3rem)] rounded-3xl overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 rounded-3xl z-0"
                style={{ backgroundImage: `url(${events[activeEvent].image})` }}
              />

              <div className={`relative z-10 p-4 sm:p-6 transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                {/* Active Event Component */}
                <div className="mb-6">{events[activeEvent].component}</div>

                <div className="flex flex-col lg:flex-row items-start mt-4 gap-6">
                  {/* Prize Component */}
                  {events[activeEvent].prizeComponent && (
                    <div className="w-full lg:w-auto flex justify-center lg:justify-start max-w-[180px] sm:max-w-[220px] md:max-w-[300px]">
                      <div className="w-full">{events[activeEvent].prizeComponent}</div>
                    </div>
                  )}

                  {/* Carousel */}
                  <div className="relative flex-1 w-full">
                    <div className="overflow-x-auto carousel-scrollbar" ref={carouselRef}>
                      <div className="flex gap-4 px-2">
                        {events.map((event, index) => {
                          const isActive = index === activeEvent;
                          // Adjusting card sizes to try and fit three cards,
                          // these values might need more fine-tuning depending on your exact layout needs.
                          const cardBaseSize =
                            screenWidth >= 1024
                              ? isActive
                                ? 'w-[200px] h-[300px]'
                                : 'w-[180px] h-[270px]' // Slightly smaller for non-active
                              : screenWidth >= 768
                              ? isActive
                                ? 'w-[160px] h-[240px]'
                                : 'w-[140px] h-[210px]'
                              : isActive
                              ? 'w-[120px] h-[180px]'
                              : 'w-[100px] h-[150px]'; // Even smaller for mobile non-active

                          return (
                            <div
                              key={index}
                              onClick={() => handleImageClick(index)}
                              className={`relative flex-shrink-0 cursor-pointer rounded-lg transition-all duration-300 ${cardBaseSize} ${
                                isActive ? 'brightness-100 scale-105' : 'brightness-75 hover:scale-105'
                              }`}
                            >
                              <img src={event.image} alt={event.title} className="w-full h-full object-fill rounded-lg shadow-lg" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>

                              {/* Title */}
                              <div className="absolute top-1 left-0 right-0 text-center px-1">
                                <h3 className={`text-white font-bold leading-tight ${
                                  screenWidth >= 1024 ? 'text-lg' : screenWidth >= 768 ? 'text-base' : 'text-sm'
                                }`}>
                                  {event.title}
                                </h3>
                              </div>

                              {/* Info Section - Now showing date more prominently */}
                              <div className="absolute bottom-2 left-0 right-0 px-1 text-center text-white space-y-1">
                                <div className={`flex items-center justify-center gap-1 ${screenWidth < 640 ? mobileDateStyle : "text-sm sm:text-base font-semibold text-[#A1E9A5]"} ${isActive && screenWidth < 640 ? 'animate-pulse' : ''}`}>
                                  <Calendar size={screenWidth < 640 ? 14 : 16} />
                                  <span>{event.date}</span>
                                </div>
                                {/* Removed location and time to keep card compact for 3-card display */}
                                {/* <p className="text-[10px] sm:text-xs hidden sm:block">📍 Auditorium</p>
                                <p className="text-[10px] sm:text-xs hidden sm:block">🕒 10:00 AM – 4:00 PM</p> */}
                                <div className="mt-2 flex justify-center">
                                  <div
                                    className={`transition-transform duration-200 bounce-hover ${
                                      isActive ? 'scale-100' : 'scale-90 opacity-70'
                                    }`}
                                  >
                                    <Arrow
                                      height={isActive ? (screenWidth > 768 ? 36 : 28) : 24}
                                      width={isActive ? (screenWidth > 768 ? 36 : 28) : 24}
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Active Dot */}
                              {isActive && (
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-[#A1E9A5] rounded-full shadow-lg" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-2 bg-black/60 text-white p-2 rounded-full hidden sm:block"
                      onClick={() => scrollCarousel(-1)}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 bg-black/60 text-white p-2 rounded-full hidden sm:block"
                      onClick={() => scrollCarousel(1)}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}