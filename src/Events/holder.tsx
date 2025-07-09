import { useState } from 'react'
// import bgimage from './posters/common_bg.png'
import techfeudImage from './posters/techfeud.png'
import launchpad from './posters/launchpad.png'
import hackbuild from './posters/hackbuild.png'
import ai4startup from './posters/ai4startup.png'
import ctf from './posters/ctf.png'
import '../App.css'
import { Arrow, Eventtitle, LaunchPadPrize, Techfeudprize, Hackbuildprize,
  Ctfprize } from './svg'
import TechFeudComponent from './EventComponents/TechFeudComponent'
import LaunchPadComponent from './EventComponents/LaunchPadComponent'
import HackBuildComponent from './EventComponents/HackBuildComponent'
import AIStartupComponent from './EventComponents/AIStartupComponent'
import CTFComponent from './EventComponents/CTFComponent'

//deven's Version

export default function Holder() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const events = [
    {
      image: techfeudImage,
      title: "Tech\nFeud",
      description: "Tech Feud is a dynamic three-round competition designed to sharpen placement-relevant skills through a mix of aptitude, creativity, and technical knowledge. Each round is crafted to challenge participants in different areas.",
      date: "15th & 16th April '25",
      prizeComponent: <Techfeudprize />,
      component: <TechFeudComponent />
    },
    {
      image: launchpad,
      title: "Launch Pad",
      description: "Welcome to LaunchPad, a high-stakes business strategy competition that challenges participants to think beyond conventional startup ideation. Instead of creating new startups, participants must analyze failed real-world businesses and devise innovative revival strategies.",
      date: "16th & 17th April '25",
      prizeComponent: <LaunchPadPrize />,
      component: <LaunchPadComponent />
    },
    {
      image: hackbuild,
      title: "Hack & Build",
      description: "need to be filed yet",
      date: "22nd-23rd April 2024",
      prizeComponent: <Hackbuildprize/> ,
      component: <HackBuildComponent />
    },
    {
      image: ai4startup,
      title: "AI for Startups",
      description: "need to be filed yet",
      date: "18th April 2024",
      prizeComponent: null ,
      component: <AIStartupComponent />
    },
    {
      image: ctf,
      title: "Capture The Flag",
      description: "need to be filed yet",
      date: "25th April 2024",
      prizeComponent: <Ctfprize/>,
      component: <CTFComponent />
    }
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
    <div className='min-h-screen w-full p-6 ml-5 relative'>
      <div className="relative">
        {/* Trapezoid shape at top */}
        <div className="z-50 absolute -top-6 left-1/2 -translate-x-1/2 w-[300px] filter drop-shadow-[0_-13px_29.7px_rgba(0,0,0,0.70)]">
          <div className="h-12 bg-(--minecraft-grey) relative shadow-[inset_0_1px_0_0_#D9D9D9]"> 
            <div className="absolute top-0 rounded-bl-lg rounded-tl-lg -left-6 h-full w-12 bg-(--minecraft-grey) origin-top-right -skew-x-[20deg] shadow-[inset_0_1px_0_0_#FFF]"></div>
            <div className="absolute top-0 rounded-br-lg rounded-tr-lg -right-6 h-full w-12 bg-(--minecraft-grey) origin-top-left skew-x-[20deg] shadow-[inset_0_1px_0_0_#FFF]"></div>
            <span className='flex justify-center items-center h-full'><Eventtitle/></span>
          </div>
        </div>

        {/* Main container - Increased height */}
        <div className='bg-(--minecraft-grey) min-h-[calc(100vh-3rem)] w-[90vw] max-w-7xl shadow-[inset_0_1px_0_0_#D9D9D9] mx-auto rounded-3xl overflow-hidden'>
          <div className='h-20 shadow-[inset_0_1px_0_0_#FFF] rounded-3xl bg-(--minecraft-grey) w-full' />
          
          {/* Background image only for main container */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 opacity-50 rounded-2xl"
            style={{ backgroundImage: `url(${events[activeEvent].image})` }}
          />
          
          {/* Content area with fade transition - Increased height */}
          <div 
            className={`relative h-[600px] w-full mx-auto transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
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
                            className="w-full h-full object-cover rounded-lg transition-all duration-300"
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
  )
};