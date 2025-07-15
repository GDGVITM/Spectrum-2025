import  { useState } from 'react'
import techfeudImage from './posters/dsa.png'
import launchpad from './posters/launchpad.png'
import hackbuild from './posters/hackbuild.png'
import ai4startup from './posters/ai4startup.png'
import bg from '../assets/Union.png'
import '../App.css'
import { Arrow, LaunchPadPrize, Techfeudprize, Hackbuildprize} from './svg'
import TechFeudComponent from './EventComponents/TechFeudComponent'
import LaunchPadComponent from './EventComponents/LaunchPadComponent'
import HackBuildComponent from './EventComponents/HackBuildComponent'
import AIStartupComponent from './EventComponents/AIStartupComponent'

//deven's Version

export default function Holder() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const events = [
    {
      image: techfeudImage,
      title: "Big O Battle",
      description: "Big O Battle is a dynamic three-round competition designed to sharpen placement-relevant skills through a mix of aptitude, creativity, and technical knowledge. Each round is crafted to challenge participants in different areas.",
      date: "30th July",
      prizeComponent: <Techfeudprize />,
      component: <TechFeudComponent />
    },
      {
      image: hackbuild,
      title: "Hack Build",
      description: "need to be filed yet",
      date: "R1: 31st July, R2: 2nd & 3rd August",
      prizeComponent: <Hackbuildprize/> ,
      component: <HackBuildComponent />
    },
    {
      image: launchpad,
      title: "Launch Pad",
      description: "Welcome to LaunchPad, a high-stakes business strategy competition that challenges participants to think beyond conventional startup ideation. Instead of creating new startups, participants must analyze failed real-world businesses and devise innovative revival strategies.",
      date: "5th & 6th August",
      prizeComponent: <LaunchPadPrize />,
      component: <LaunchPadComponent />
    },
    {
      image: ai4startup,
      title: "GSOC guidance session",
      description: "need to be filed yet",
      date: "8th August",
      prizeComponent: null ,
      component: <AIStartupComponent />
    },
  ];

  const handleImageClick = (index:any) => {
    if (index === activeEvent) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveEvent(index);
      setTransitioning(false);
    }, 300);
  };

  // Reorder The images to show tHe Selected one first
  const orderedEvents = [
    events[activeEvent],
    ...events.slice(0, activeEvent),
    ...events.slice(activeEvent + 1)
  ];

  return (
    <div 
      className='min-h-screen w-screen relative overflow-y-auto hide-scrollbar'
      style={{ backgroundColor: '#000000', msOverflowStyle: 'none' }}
    >
      <style>{`
        div.relative::-webkit-scrollbar {
          display: none;
        }
        /* This class applies a linear gradient from transparent to black at the bottom */
        .gradient-overlay {
          background: linear-gradient(to bottom, transparent 70%, #000000 100%);
        }
      `}</style>
      
      {/* Teams page background */}
      <div
        style={{ 
          backgroundImage: `url(${bg})`, 
          backgroundSize: '100% auto', 
          backgroundPosition: 'top center' 
        }}
        className="absolute inset-0 bg-no-repeat min-h-[150vh] w-full"
      >
        <div className="absolute inset-0 gradient-overlay"></div>
        
        <div className="relative pt-20 sm:pt-24 md:pt-32 pb-40 sm:pb-48 md:pb-56 flex flex-col items-center text-center z-10">
          <p className="text-[#A1E9A5] mb-16 sm:mb-20 md:mb-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: 'Audiowide' }}>
            08 // EVENTS
          </p>
          <div className="relative px-6 w-full">

            {/* Main container - Full width */}
            <div className='bg-(--minecraft-grey) min-h-[calc(100vh-3rem)] w-full max-w-none shadow-[inset_0_1px_0_0_#D9D9D9] mx-auto rounded-3xl overflow-hidden'>
              <div className='h-20 shadow-[inset_0_1px_0_0_#FFF] rounded-3xl bg-(--minecraft-grey) w-full' />
              
              {/* Background image only for main container */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 opacity-50 rounded-2xl"
                style={{ backgroundImage: `url(${events[activeEvent].image})` }}
              />
              
              {/* Content area with fade transition - Increased height */}
              <div 
                className={`relative h-[600px] font-[AudioWide] w-full mx-auto transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="relative z-10 h-full w-full p-6 text-white">
                  {/* Render the active event component */}
                  {events[activeEvent].component}
                  
                  {/* Prize component and image scroller */}
                  <div className='flex flex-row items-start mt-8'>
                    <div className="ml-10 mr-8">
                      {events[activeEvent].prizeComponent}
                    </div>
                    
                    {/* Horizontal scroll container with scroll snap - limited to 3 visible images */}
                    <div className="relative flex-1 h-[320px] overflow-hidden"> 
                      <div className="absolute right-0 h-full w-[calc(200px+160px*2+1.5rem*2)] overflow-x-auto no-scrollbar">
                        <div className="flex space-x-6 h-full items-center px-4 snap-x snap-mandatory scroll-smooth" style={{ width: 'max-content' }}> 
                          {orderedEvents.map((event, index) => (
                            <div 
                              key={index} 
                              className={`flex-shrink-0 transition-all duration-300 snap-center relative ${
                                index === 0 ? 
                                  'h-[300px] w-[200px] brightness-100' : 
                                  'h-[220px] w-[160px] brightness-75 hover:brightness-100'
                              }`}
                              onClick={() => handleImageClick(events.indexOf(event))}
                            > 
                              <img 
                                src={event.image} 
                                alt={event.title} 
                                className="w-full h-full object-fill rounded-lg transition-all duration-300" // Changed object-cover to object-fill
                              />
                              {/* Title at the top */}
                              <div className="absolute top-0 left-0 right-0 p-2 text-center">
                                <h3 className="text-white font-bold text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{event.title}</h3>
                              </div>
                              
                              {/* Other details at the bottom */}
                              <div className="absolute bottom-0  p-2 text-center">
                                <p className="text-white text-xs drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{event.date}</p>
                                <p className="text-white text-xs drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Location: Auditorium</p>
                                <p className="text-white text-xs drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">10:00 AM - 4:00 PM</p>  
                                <Arrow height={40} width={40}/> 
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};