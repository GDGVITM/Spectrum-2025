// 🔹 React & Hooks
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

// 🔹 Assets (Images)
import bg from "../assets/Union.png";
import techfeudImage from "./posters/techfeud.png";
import launchpad from "./posters/launchpad.png";
import hackbuild from "./posters/hackbuild.png";
import ai4startup from "./posters/ai4startup.png";

// 🔹 SVG Components
import {
  Arrow,
  LaunchPadPrize,
  Techfeudprize,
  RegisterButton,
  Hackbuildprize,
} from "./svg";

// 🔹 Event Detail Components
import TechFeudComponent from "./EventComponents/TechFeudComponent";
import LaunchPadComponent from "./EventComponents/LaunchPadComponent";
import HackBuildComponent from "./EventComponents/HackBuildComponent";
import AIStartupComponent from "./EventComponents/AIStartupComponent";

// 🔹 Common Components
import Footer from "../components/Footer";

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

 const events = [
    {
      image: techfeudImage,
      title: "Big O Battle - Powered by GeeksforGeeks",
      description:
        "Test your problem solving skills by solving questions based on Data Structures and Algorithms, and compete with others in a thrilling contest.",
      date: "30th July",
      prizeComponent: <Techfeudprize />,
      component: <TechFeudComponent />,
    },
    {
      image: hackbuild,
      title: "HackBuild",
      description:
        "Get ready to build innovative solutions in a collaborative environment, where creativity meets technology.",
      date: "R1: 31st July, R2: 2nd & 3rd August",
      prizeComponent: <Hackbuildprize />,
      component: <HackBuildComponent />,
    },
    {
      image: launchpad,
      title: "Launch Pad",
      description:
        "Welcome to LaunchPad, a high-stakes business strategy competition that challenges participants to think beyond conventional startup ideation. Instead of creating new startups, participants must analyze failed real-world businesses and devise innovative revival strategies.",
      date: "5th & 6th August",
      prizeComponent: <LaunchPadPrize />,
      component: <LaunchPadComponent />,
    },
    {
      image: ai4startup,
      title: "GSOC Guidance Session",
      description:
        "Join us for an insightful session on GSOC, where you'll receive guidance on how to make your application stand out.",
      date: "8th August",
      prizeComponent: null,
      component: <AIStartupComponent />,
    },
  ];

  const handleImageClick = (index: number) => {
    if (index === activeEvent || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveEvent(index);
      setSelectedIndex(index);
      setTransitioning(false);
    }, 600);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cardWidth = 220 + 24;
    const scrollTo = selectedIndex * cardWidth;

    gsap.to(scrollContainer, {
      scrollLeft: scrollTo,
      duration: 0.6,
      ease: "power3.inOut",
    });
  }, [selectedIndex]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (container.scrollLeft + e.deltaY < container.scrollWidth - container.clientWidth) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        const nextIndex = (activeEvent + 1) % events.length;
        setTransitioning(true);
        setTimeout(() => {
          setActiveEvent(nextIndex);
          setSelectedIndex(nextIndex);
          setTransitioning(false);
        }, 600);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeEvent, transitioning]);

  const orderedEvents = [
    events[activeEvent],
    events[(activeEvent + 1) % events.length],
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
        }}
        className="absolute inset-0 bg-no-repeat min-h-[150vh] md:h-full w-full transition-all duration-500"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 md:hidden z-10" />

        <div className="relative pt-20 sm:pt-24 md:pt-32 sm:pb-48 md:pb-0 flex flex-col items-center text-center z-20">
          <p
            className="text-[#A1E9A5] md:mb-15 text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ fontFamily: "Audiowide" }}
          >
            07 // EVENTS
          </p>

          <div
            className="w-full font-[GoodTiming] max-w-8xl mx-auto px-6 relative"
            style={{
              backgroundImage: `url(${events[activeEvent].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* 🟢 Top Gradient (preserved) */}
            <div className="absolute top-0 left-0 w-full h-80 md:h-80 bg-gradient-to-b from-black/100 md:from-[rgb(15,15,15,1)]/100 to-transparent z-10 pointer-events-none" />

            <div className="w-full flex flex-col md:flex-row gap-10 md:items-start md:justify-between md:py-10 md:pb-20 relative z-30">
              <div className="w-full mt-25 md:mt-15 md:max-w-[100%] md:px-10 flex flex-col items-center md:items-start text-center relative z-30">
                <div className="flex items-center justify-center md:justify-start mb-6 md:text-left z-30">
                  <h1 className="flex text-4xl md:text-5xl font-bold text-white-800 items-center">
                    {events[activeEvent].title.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < events[activeEvent].title.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                    <Arrow width={60} height={60} />
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-white-800 leading-relaxed mb-6 md:text-left z-30">
                  {events[activeEvent].description}
                </p>

                <p className="text-xl font-bold text-white-800 mb-6 md:text-left z-30">
                  DATE: {events[activeEvent].date}
                </p>

                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start z-30">
                    <button
                      type="button"
                      className="cursor-pointer hover:scale-105 transition-transform duration-200 mb-6"
                      onClick={() => window.open("https://google.com", "_blank")}
                    >
                      <RegisterButton />
                    </button>

                    <div className="flex justify-center md:justify-start">
                      {events[activeEvent].prizeComponent}
                    </div>
                  </div>

                  {/* 🔹 Carousel */}
                  <div className="w-full md:w-1/2 relative h-[350px] overflow-hidden">
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
                                ? "h-[300px] w-[220px] brightness-100 scale-105"
                                : "h-[280px] w-[200px] brightness-75 hover:brightness-100 hover:scale-105"
                            }`}
                            onClick={() => handleImageClick(events.indexOf(event))}
                          >
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover rounded-xl transition-all duration-300 shadow-lg"
                            />

                            {events.indexOf(event) === selectedIndex && (
                              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/100 to-transparent z-30 pt-5 rounded-xl">
                                <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                  {event.title.split("\n").map((line, idx) => (
                                    <span key={idx}>
                                      {line}
                                      {idx < event.title.split("\n").length - 1 && <br />}
                                    </span>
                                  ))}
                                </h3>
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