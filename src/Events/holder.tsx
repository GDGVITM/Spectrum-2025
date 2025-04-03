import React, { useState } from 'react'
import bgimage from './posters/common_bg.png'
import techfeudImage from './posters/techfeud.png'
import launchpad from './posters/launchpad.png'
import hackbuild from './posters/hackbuild.png'
import ai4startup from './posters/ai4startup.png'
import ctf from './posters/ctf.png'
import '../App.css'
import { Arrow, Eventtitle, LaunchPadPrize, Techfeudprize, RegisterButton } from './svg'

//deven's Version

export default function Holder() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const events = [
    {
      image: techfeudImage,
      title: "Tech Feud",
      description: "Tech Feud is a dynamic three-round competition designed to sharpen placement-relevant skills through a mix of aptitude, creativity, and technical knowledge. Each round is crafted to challenge participants in different areas.",
      date: "15th & 16th April '25",
      prizeComponent: <Techfeudprize />
    },
    {
      image: launchpad,
      title: "Launch Pad",
      description: "Welcome to LaunchPad, a high-stakes business strategy competition that challenges participants to think beyond conventional startup ideation. Instead of creating new startups, participants must analyze failed real-world businesses and devise innovative revival strategies.",
      date: "16th & 17th April '25",
      prizeComponent: <LaunchPadPrize />
    },
    {
      image: hackbuild,
      title: "Hack & Build",
      description: "need to be filed yet",
      date: "22nd-23rd April 2024",
      prizeComponent: null
    },
    {
      image: ai4startup,
      title: "AI for Startups",
      description: "need to be filed yet",
      date: "18th April 2024",
      prizeComponent: null
    },
    {
      image: ctf,
      title: "Capture The Flag",
      description: "need to be filed yet",
      date: "25th April 2024",
      prizeComponent: null
    }
  ];

  const handleImageClick = (index) => {
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
            <span className='pl-18'> <Eventtitle/> </span>
          </div>
        </div>

        {/* Main container - Increased height */}
        <div className='bg-(--minecraft-grey) min-h-[calc(100vh-3rem)] w-[90vw] max-w-7xl shadow-[inset_0_1px_0_0_#D9D9D9] mx-auto rounded-2xl overflow-hidden'>
          <div className='h-20 bg-(--minecraft-grey) w-full' />
          
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
              <h1 className="text-4xl font-bold flex flex-row items-center">
                {events[activeEvent].title} 
                <Arrow width={80} height={80}/>
              </h1>
              <p className="mt-4 max-w-full">{events[activeEvent].description}</p>
              <p className="mt-2 font-bold">DATE: {events[activeEvent].date}</p>
              <button type="button" className='ml-10 mt-4'>
                <RegisterButton/>
              </button>
              
              {/* Prize component and image scroller */}
              <div className='flex flex-row items-start mt-8'>
                <div className="ml-10 mr-8">
                  {events[activeEvent].prizeComponent}
                </div>
                
                {/* Horizontal scroll container */}
                <div className="relative flex-1 h-65 overflow-hidden ml-15"> {/* height issue */}
                  <div className="absolute right-0 h-full w-[calc(100%-1rem)] overflow-x-auto hide-scrollbar pl-4">
                    <div className="flex space-x-6 h-full items-center"> {/* Centered vertically */}
                      {orderedEvents.map((event, index) => (
                        <div 
                          key={index} 
                          className={`flex-shrink-0 transition-all duration-300 ${
                            index === 0 ? 
                              'h-[300px] w-[200px] brightness-100' : // Larger size for selected , need to be imporoved 
                              'h-[220px] w-[160px] brightness-75 hover:brightness-100' // Smaller for others, this is better
                          }`}
                          onClick={() => handleImageClick(events.indexOf(event))}
                        >
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover rounded-lg transition-all duration-300"
                          />
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
}