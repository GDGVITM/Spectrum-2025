import React, { useState } from 'react'
import bg from '../assets/Union.png';
import techfeudImage from './posters/techfeud.png'
import launchpad from './posters/launchpad.png'
import hackbuild from './posters/hackbuild.png'
import ai4startup from './posters/ai4startup.png'
import ctf from './posters/ctf.png'
import { Arrow, Eventtitle, LaunchPadPrize, Techfeudprize, RegisterButton, Hackbuildprize, Ctfprize } from './svg'
import TechFeudComponent from './EventComponents/TechFeudComponent'
import LaunchPadComponent from './EventComponents/LaunchPadComponent'
import HackBuildComponent from './EventComponents/HackBuildComponent'
import AIStartupComponent from './EventComponents/AIStartupComponent'
import CTFComponent from './EventComponents/CTFComponent'

const Events = () => {
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
            prizeComponent: <Hackbuildprize />,
            component: <HackBuildComponent />
        },
        {
            image: ai4startup,
            title: "AI for Startups",
            description: "need to be filed yet",
            date: "18th April 2024",
            prizeComponent: null,
            component: <AIStartupComponent />
        },
        {
            image: ctf,
            title: "Capture The Flag",
            description: "need to be filed yet",
            date: "25th April 2024",
            prizeComponent: <Ctfprize />,
            component: <CTFComponent />
        }
    ];

    const handleImageClick = (index: number) => {
        if (index === activeEvent) return;
        setTransitioning(true);
        setTimeout(() => {
            setActiveEvent(index);
            setTransitioning(false);
        }, 300);
    };

    // Reorder the images to show the selected one first
    const orderedEvents = [
        events[activeEvent],
        ...events.slice(0, activeEvent),
        ...events.slice(activeEvent + 1)
    ];

    return (
        <>
            <div
                style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% auto', backgroundPosition: 'top center' }}

                className="parent-div absolute inset-0 bg-no-repeat min-h-[150vh] w-full transition-all duration-500"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative pt-20 sm:pt-24 md:pt-32 pb-40 sm:pb-48 md:pb-56 flex flex-col items-center text-center z-10">
                    <p className="text-[#A1E9A5] mb-16 sm:mb-20 md:mb-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: 'Audiowide' }}>
                        07 // EVENTS
                    </p>

                    <div className="displaying-content w-full max-w-7xl mx-auto px-6"
                        style={{
                            backgroundImage: `url(${events[activeEvent].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>
                        {/* Main content area with fixed height */}
                        <div className=" bg-opacity-100  rounded-3xl p-8 mb-8 min-h-[600px] relative overflow-hidden">
                            {/* Background image overlay */}
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500`}
                                // style={{ backgroundImage: `url(${events[activeEvent].image})` }}
                            />

                            {/* Content */}
                            <div className="relative z-10 h-full">
                                {/* Event title, description, and date - all aligned the same */}
                                <div className="flex flex-col items-start mb-8 px-7 pt-3">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white-800 flex items-center mb-4">
                                        {events[activeEvent].title.split('\n').map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                {index < events[activeEvent].title.split('\n').length - 1 && <br />}
                                            </span>
                                        ))}
                                        <Arrow width={60} height={60} />
                                    </h1>
                                    <p className="text-lg md:text-xl text-white-700 max-w-4xl leading-relaxed mb-4">
                                        {events[activeEvent].description}
                                    </p>
                                    <p className="text-xl font-bold text-white-800">
                                        DATE: {events[activeEvent].date}
                                    </p>
                                    {/* Register button */}
                                <div className="text-center mb-8">
                                    <button
                                        type="button"
                                        className='cursor-pointer pt-4 hover:scale-105 transition-transform duration-200'
                                        onClick={() => window.open('https://google.com', '_blank')}
                                    >
                                        <RegisterButton />
                                    </button>
                                </div>
                                </div>
                                

                                {/* Prize pool and carousel section */}
                                <div className='flex flex-col lg:flex-row items-start justify-between gap-8'>
                                    {/* Prize component */}
                                    <div className="flex-1 flex justify-center lg:justify-start">
                                        {events[activeEvent].prizeComponent}
                                    </div>

                                    {/* Horizontal scroll container - shows only 3 events */}
                                    <div className="flex-1 relative h-[320px] overflow-hidden">
                                        <div className="absolute right-0 h-full w-[calc(200px+160px*2+1.5rem*2)] overflow-x-auto no-scrollbar">
                                            <div className="flex space-x-6 h-full items-center px-4 snap-x snap-mandatory scroll-smooth" style={{ width: 'max-content' }}>
                                                {orderedEvents.map((event, index) => (
                                                    <div
                                                        key={index}
                                                        className={`flex-shrink-0 transition-all duration-300 snap-center relative cursor-pointer ${index === 0 ?
                                                                'h-[300px] w-[200px] brightness-100 scale-105' :
                                                                'h-[220px] w-[160px] brightness-75 hover:brightness-100 hover:scale-105'
                                                            }`}
                                                        onClick={() => handleImageClick(events.indexOf(event))}
                                                    >
                                                        <img
                                                            src={event.image}
                                                            alt={event.title}
                                                            className="w-full h-full object-cover rounded-lg transition-all duration-300 shadow-lg"
                                                        />
                                                        {/* Title at the top */}
                                                        <div className="absolute top-0 left-0 right-0 p-2 text-center bg-black bg-opacity-50 rounded-t-lg">
                                                            <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                                                {event.title.split('\n').map((line, idx) => (
                                                                    <span key={idx}>
                                                                        {line}
                                                                        {idx < event.title.split('\n').length - 1 && <br />}
                                                                    </span>
                                                                ))}
                                                            </h3>
                                                        </div>

                                                        {/* Details at the bottom */}
                                                        <div className="absolute bottom-0 left-0 right-0 p-3 text-center bg-black bg-opacity-50 rounded-b-lg">
                                                            <p className="text-white text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{event.date}</p>
                                                            <p className="text-white text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Location: Auditorium</p>
                                                            <p className="text-white text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">10:00 AM - 4:00 PM</p>
                                                            <div className="flex justify-center mt-2">
                                                                <Arrow height={30} width={30} />
                                                            </div>
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
        </>
    )
}

export default Events