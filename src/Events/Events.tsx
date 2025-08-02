import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import bg from "../assets/Union.png";
import techfeudImage from "./posters/techfeud.png";
import launchpad from "./posters/launchpad.png";
import hackbuild from "./posters/hackbuild.png";
import ai4startup from "./posters/ai4startup.png";

import {
  Arrow,
  LaunchPadPrize,
  Techfeudprize,
  RegisterButton,
  Hackbuildprize,
} from "./svg";

import TechFeudComponent from "./EventComponents/TechFeudComponent";
import LaunchPadComponent from "./EventComponents/LaunchPadComponent";
import HackBuildComponent from "./EventComponents/HackBuildComponent";
import AIStartupComponent from "./EventComponents/AIStartupComponent";

import Footer from "../components/Footer";

import DevfolioApplyButton from "./DevfolioApplyButton"; // adjust path if needed

type EventItem = {
  image: string;
  title: string;
  description: string;
  date: string;
  prizeComponent: React.ReactNode;
  component: React.ReactNode;
  registerLink?: string;
  isDevfolio?: boolean;
  devfolioSlug?: string;
};

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const events: EventItem[] = [
    {
      image: techfeudImage,
      title: "Big O Battle - Powered by GeeksforGeeks",
      description:
        "Test your problem solving skills by solving questions based on Data Structures and Algorithms, and compete with others in a thrilling contest.",
      date: "14th August",
      prizeComponent: <Techfeudprize />,
      component: <TechFeudComponent />,
      registerLink:
        "https://unstop.com/hackathons/big-o-battle-powered-by-geeksforgeeks-dsa-competition-spectrum-2025-vit-mumbai-1526360",
      isDevfolio: false,
    },
    {
      image: launchpad,
      title: "Launch Pad",
      description:
        "Welcome to LaunchPad, a high-stakes business strategy competition that challenges participants to think beyond conventional startup ideation. Instead of creating new startups, participants must analyze failed real-world businesses and devise innovative revival strategies.",
      date: "18th & 19th August",
      prizeComponent: <LaunchPadPrize />,
      component: <LaunchPadComponent />,
      registerLink:
        "https://unstop.com/hackathons/launchpad-vibe-coding-saas-startup-challenge-spectrum-2025-vit-mumbai-1529774",
      isDevfolio: false,
    },
    {
      image: ai4startup,
      title: "GSOC Guidance Session",
      description:
        "Join us for an insightful session on GSOC, where you'll receive guidance on how to make your application stand out.",
      date: "21st August",
      prizeComponent: null,
      component: <AIStartupComponent />,
      registerLink: "https://lu.ma/slb6g0zd",
      isDevfolio: false,
    },
    {
      image: hackbuild,
      title: "HackBuild",
      description:
        "Get ready to build innovative solutions in a collaborative environment, where creativity meets technology. We have two rounds for hackathon, first round is online and second round is on-site. In the first round, participants will submit their project ideas and prototypes online, and the top teams will be selected to present their projects in person during the second round.",
      date: "12th to 24th August",
      prizeComponent: <Hackbuildprize />,
      component: <HackBuildComponent />,
      isDevfolio: true,
      devfolioSlug: "hackbuild", // replace with actual slug
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % events.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [events.length]);

  const handleImageClick = (index: number) => {
    if (index === activeEvent) return;
    setActiveEvent(index);
  };

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
        className="parent-div absolute inset-0 bg-no-repeat min-h-[150vh] md:h-full w-full transition-all duration-500"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 md:hidden"></div>

        <div className="relative pt-20 sm:pt-24 md:pt-32 sm:pb-0 flex flex-col items-center text-center z-10">
          <p
            className="text-[#A1E9A5] md:mb-15 text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ fontFamily: "Audiowide" }}
          >
            07 // EVENTS
          </p>

          <div
            className="displaying-content w-full font-[GoodTiming] max-w-8xl mx-auto px-6 relative"
            style={{
              backgroundImage: `url(${events[activeEvent].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/60 md:bg-black/20 z-5 pointer-events-none" />

            <div className="absolute top-0 left-0 w-full h-80 md:h-80 bg-gradient-to-b from-black/100 md:from-[rgb(15,15,15,1)]/100 to-transparent z-10 pointer-events-none" />

            <div className="w-full flex flex-col md:flex-row gap-10 md:items-start md:justify-between md:py-10 md:pb-0 relative z-30">
              <div className="w-full mt-25 md:mt-15 md:max-w-[100%] md:px-10 flex flex-col items-center md:items-start text-center relative z-30">
                {/* Mobile Title */}
                <div className="md:hidden flex items-center justify-center mb-6">
                  <h1 className="flex text-3xl font-bold text-white items-center">
                    {events[activeEvent].title
                      .split("\n")
                      .map((line, index) => (
                        <span key={index}>
                          {line}
                          {index <
                            events[activeEvent].title.split("\n").length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                    <Arrow width={50} height={50} />
                  </h1>
                </div>

                {/* Mobile description */}
                <div className="md:hidden w-full bg-black/40 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <p className="text-base text-white leading-relaxed mb-4">
                    {events[activeEvent].description}
                  </p>
                  <p className="text-lg font-bold text-white">
                    DATE: {events[activeEvent].date}
                  </p>
                </div>

                {/* Desktop content */}
                <div className="hidden md:block w-full">
                  <div className="flex items-center justify-center md:justify-start mb-6 md:text-left">
                    <h1 className="flex text-4xl md:text-5xl font-bold text-white-800 items-center">
                      {events[activeEvent].title
                        .split("\n")
                        .map((line, index) => (
                          <span key={index}>
                            {line}
                            {index <
                              events[activeEvent].title.split("\n").length - 1 && (
                              <br />
                            )}
                          </span>
                        ))}
                      <Arrow width={60} height={60} />
                    </h1>
                  </div>
                  <p className="text-lg md:text-xl text-white-200 leading-relaxed mb-6 md:text-left">
                    {events[activeEvent].description}
                  </p>
                  <p className="text-xl font-bold text-white-800 mb-6 md:text-left">
                    DATE: {events[activeEvent].date}
                  </p>
                </div>

                {/* Registration & Prize + Carousel */}
                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    {events[activeEvent].isDevfolio && events[activeEvent].devfolioSlug ? (
                      <div className="mb-6">
                        <DevfolioApplyButton hackathonSlug={events[activeEvent].devfolioSlug} />
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="cursor-pointer hover:scale-105 transition-transform duration-200 mb-6"
                        onClick={() =>
                          window.open(events[activeEvent].registerLink || "#", "_blank")
                        }
                      >
                        <RegisterButton />
                      </button>
                    )}

                    <div className="flex justify-center md:justify-start">
                      {events[activeEvent].prizeComponent}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 relative h-[350px] overflow-hidden">
                    <button
                      className="absolute left-2 top-1/2 z-40 -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
                      onClick={() => {
                        if (scrollContainerRef.current) {
                          scrollContainerRef.current.scrollLeft -= 300;
                        }
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 z-40 -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
                      onClick={() => {
                        if (scrollContainerRef.current) {
                          scrollContainerRef.current.scrollLeft += 300;
                        }
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div
                      ref={scrollContainerRef}
                      className="h-full w-full overflow-x-scroll overflow-y-hidden scroll-smooth snap-x snap-mandatory"
                      style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    >
                      <style>
                        {`
                          ::-webkit-scrollbar {
                            display: none;
                          }
                        `}
                      </style>

                      <div
                        className="flex space-x-6 h-full items-center px-4"
                        style={{ width: "max-content" }}
                      >
                        {orderedEvents.map((event, index) => (
                          <div
                            key={index}
                            className={`flex-shrink-0 transition-all duration-300 snap-center relative cursor-pointer rounded-xl ${
                              index === 0
                                ? "h-[300px] w-[200px] brightness-100 scale-105"
                                : "h-[280px] w-[200px] brightness-75 hover:brightness-100 hover:scale-105"
                            }`}
                            onClick={() => handleImageClick(events.indexOf(event))}
                          >
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover rounded-xl transition-all duration-300 shadow-lg"
                            />
                            {index === 0 && (
                              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-2 rounded-b-xl">
                                <h3 className="font-bold text-lg">{event.title}</h3>
                                <p className="text-sm text-[#A1E9A5]">{event.date}</p>
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

            <div className="absolute bottom-0 left-0 w-full h-20 md:h-40 bg-gradient-to-t from-black/100 md:from-[rgb(15,15,15,1)]/100 to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Events;
