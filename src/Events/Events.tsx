import React, { useState } from "react";
import bg from "../assets/Union.png";
import techfeudImage from "./posters/techfeud.png";
import launchpad from "./posters/launchpad.png";
import hackbuild from "./posters/hackbuild.png";
import ai4startup from "./posters/ai4startup.png";
import ctf from "./posters/ctf.png";
import {
  Arrow,
  Eventtitle,
  LaunchPadPrize,
  Techfeudprize,
  RegisterButton,
  Hackbuildprize,
  Ctfprize,
} from "./svg";
import TechFeudComponent from "./EventComponents/TechFeudComponent";
import LaunchPadComponent from "./EventComponents/LaunchPadComponent";
import HackBuildComponent from "./EventComponents/HackBuildComponent";
import AIStartupComponent from "./EventComponents/AIStartupComponent";
import CTFComponent from "./EventComponents/CTFComponent";
import Footer from "../components/Footer";

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const events = [
    {
      image: techfeudImage,
      title: "Tech\nFeud",
      description:
        "Tech Feud is a dynamic three-round competition designed to sharpen placement-relevant skills through a mix of aptitude, creativity, and technical knowledge. Each round is crafted to challenge participants in different areas.",
      date: "15th & 16th April '25",
      prizeComponent: <Techfeudprize />,
      component: <TechFeudComponent />,
    },
    {
      image: launchpad,
      title: "Launch Pad",
      description:
        "Welcome to LaunchPad, a high-stakes business strategy competition that challenges participants to think beyond conventional startup ideation. Instead of creating new startups, participants must analyze failed real-world businesses and devise innovative revival strategies.",
      date: "16th & 17th April '25",
      prizeComponent: <LaunchPadPrize />,
      component: <LaunchPadComponent />,
    },
    {
      image: hackbuild,
      title: "Hack & Build",
      description: "need to be filed yet",
      date: "22nd-23rd April 2024",
      prizeComponent: <Hackbuildprize />,
      component: <HackBuildComponent />,
    },
    {
      image: ai4startup,
      title: "AI for Startups",
      description: "need to be filed yet",
      date: "18th April 2024",
      prizeComponent: null,
      component: <AIStartupComponent />,
    },
    {
      image: ctf,
      title: "Capture The Flag",
      description: "need to be filed yet",
      date: "25th April 2024",
      prizeComponent: <Ctfprize />,
      component: <CTFComponent />,
    },
  ];

  const handleImageClick = (index: number) => {
    if (index === activeEvent) return;

    setTransitioning(true);
    setTimeout(() => {
      setActiveEvent(index);
      setSelectedIndex(index); // New selected card
      setTransitioning(false);
    }, 600); // Match transition time
  };

  // Reorder the images to show the selected one first
  const orderedEvents = [
    events[activeEvent],
    ...events.slice(0, activeEvent),
    ...events.slice(activeEvent + 1),
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
        }}
        className="parent-div absolute inset-0 bg-no-repeat min-h-[150vh] w-full transition-all duration-500"
      >
        {/* This black overlay will only be visible on small screens */}
        <div className="absolute inset-0 bg-black bg-opacity-50 md:hidden"></div>
        <div className="relative pt-20 sm:pt-24 md:pt-32  sm:pb-48 md:pb-10 flex flex-col items-center text-center z-10">
          <p
            className="text-[#A1E9A5] mb-10 rounded-2xl text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ fontFamily: "Audiowide" }}
          >
            07 // EVENTS
          </p>

          <div
            className="displaying-content w-full max-w-8xl mx-auto px-6 h[1200px] relative bg-b"
            style={{
              backgroundImage: `url(${events[activeEvent].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* ⬛ Top Black Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-100 bg-gradient-to-b from-black/90 md:from-from-[rgb(31,31,31)] to-transparent z-0 pointer-events-none" />

            {/* Main content area with fixed height */}
            <div className="rounded-3xl p-8 mb-8 min-h-[1200px] relative overflow-hidden">
              {/* Content */}
              <div className="relative z-10 h-full">
                {/* Event title */}
                <div className="flex items-center justify-center mb-6">
                  <h1 className="text-4xl md:text-5xl font-bold text-white-800 flex items-center">
                    {events[activeEvent].title
                      .split("\n")
                      .map((line, index) => (
                        <span key={index}>
                          {line}
                          {index <
                            events[activeEvent].title.split("\n").length -
                              1 && <br />}
                        </span>
                      ))}
                    <Arrow width={60} height={60} />
                  </h1>
                </div>

                {/* Event description */}
                <div className="text-center mb-8">
                  <p className="text-lg md:text-xl text-white-800 max-w-4xl mx-auto leading-relaxed">
                    {events[activeEvent].description}
                  </p>
                </div>

                {/* Date */}
                <div className="text-center mb-8">
                  <p className="text-xl font-bold text-white-800">
                    DATE: {events[activeEvent].date}
                  </p>
                </div>

                {/* Register button */}
                <div className="text-center">
                  <button
                    type="button"
                    className="cursor-pointer hover:scale-105 transition-transform duration-200"
                    onClick={() => window.open("https://google.com", "_blank")}
                  >
                    <RegisterButton />
                  </button>
                </div>

                {/* Prize pool and carousel section */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                  {/* Prize component */}
                  <div className="flex-1 flex justify-center lg:justify-start">
                    {events[activeEvent].prizeComponent}
                  </div>

                  {/* Horizontal scroll container - shows only 3 events */}
                  <div className="flex-1 relative h-[320px] overflow-hidden w-full">
                    <div className="h-full w-full overflow-x-auto no-scrollbar overflow-y-hidden">
                      <div
                        className="flex space-x-6 h-full items-center px-4 snap-x snap-mandatory scroll-smooth"
                        style={{ width: "max-content" }}
                      >
                        {orderedEvents.map((event, index) => (
                          <div
                            key={index}
                            className={`flex-shrink-0 transition-all duration-300 snap-center relative cursor-pointer rounded-xl ${
                              index === 0
                                ? "h-[350px] w-[250px] brightness-100 scale-105"
                                : "h-[280px] w-[200px] brightness-75 hover:brightness-100 hover:scale-105"
                            }`}
                            onClick={() =>
                              handleImageClick(events.indexOf(event))
                            }
                          >
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover rounded-xl transition-all duration-300 shadow-lg"
                            />
                            {/* Title at the top */}
                            {events.indexOf(event) === selectedIndex && (
                              <div
                                className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/100 to-transparent z-30 transition-transform duration-500 ease-in-out pt-5 rounded-xl  ${
                                  transitioning
                                    ? "translate-y-0"
                                    : events.indexOf(event) === selectedIndex
                                    ? "translate-y-0"
                                    : "-translate-y-full"
                                }`}
                              >
                                <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                  {event.title.split("\n").map((line, idx) => (
                                    <span key={idx}>
                                      {line}
                                      {idx <
                                        event.title.split("\n").length - 1 && (
                                        <br />
                                      )}
                                    </span>
                                  ))}
                                </h3>
                              </div>
                            )}

                            {/* Details at the bottom */}
                            {events.indexOf(event) === selectedIndex && (
                              <div
                                className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/100 to-transparent z-30 transition-transform duration-500 ease-in-out mb-0 rounded-xl ${
                                  transitioning
                                    ? "translate-y-0"
                                    : events.indexOf(event) === selectedIndex
                                    ? "translate-y-0"
                                    : "translate-y-full"
                                }`}
                              >
                                <p className="text-white text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                  {event.date}
                                </p>
                                <p className="text-white text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                  Location: Auditorium
                                </p>
                                <p className="text-white text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                  10:00 AM - 4:00 PM
                                </p>
                                <div className="flex justify-center mt-2">
                                  <Arrow height={30} width={30} />
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔻 Bottom Black Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-100 bg-gradient-to-t from-black/90 md:from-black/60 to-transparent z-0 pointer-events-none" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Events;
