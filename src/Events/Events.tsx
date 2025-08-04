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

type EventItem = {
  image: string;
  title: string;
  description: string;
  detailedDescription: string;
  date: string;
  prizeComponent: React.ReactNode;
  component: React.ReactNode;
  registerLink?: string;
};

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselIntervalRef = useRef<number | null>(null);

  const events: EventItem[] = [
    {
      image: techfeudImage,
      title: "Big O Battle - Powered by GeeksforGeeks",
      description:
        "Test your problem solving skills by solving questions based on Data Structures and Algorithms, and compete with others in a thrilling contest.",
      detailedDescription:
        "Big O Battle is an intensive Data Structures and Algorithms competition powered by GeeksforGeeks. This individual participation event challenges programmers to solve complex algorithmic problems under time constraints. Following ICPC-style rules with our unique twist, participants will demonstrate their problem-solving prowess across various difficulty levels. The contest covers fundamental concepts including arrays, linked lists, trees, graphs, dynamic programming, and advanced algorithms. Whether you're a beginner looking to test your skills or an experienced coder aiming for the top, this battle will push your computational thinking to new heights.",
      date: "14th August",
      prizeComponent: <Techfeudprize />,
      component: <TechFeudComponent />,
      registerLink:
        "https://unstop.com/hackathons/big-o-battle-powered-by-geeksforgeeks-dsa-competition-spectrum-2025-vit-mumbai-1526360",
    },
    {
      image: launchpad,
      title: "Launch Pad",
      description:
        "Welcome to LaunchPad, a high-stakes business strategy competition that challenges participants to think beyond conventional startup ideation. Instead of creating new startups, participants must analyze failed real-world businesses and devise innovative revival strategies.",
      detailedDescription:
        "LaunchPad revolutionizes traditional startup competitions by focusing on business revival rather than creation. This intensive two-day challenge pushes teams of 2-4 participants to analyze real-world business failures and develop comprehensive revival strategies. You'll dive deep into case studies of companies that couldn't sustain their market position, conducting thorough market analysis, identifying failure points, and crafting innovative solutions. The competition emphasizes practical business acumen, strategic thinking, and presentation skills. Teams will present their revival plans to industry experts who will evaluate feasibility, innovation, and market potential. This unique format teaches valuable lessons about business sustainability and strategic pivoting.",
      date: "18th & 19th August",
      prizeComponent: <LaunchPadPrize />,
      component: <LaunchPadComponent />,
      registerLink:
        "https://unstop.com/hackathons/launchpad-vibe-coding-saas-startup-challenge-spectrum-2025-vit-mumbai-1529774",
    },
    {
      image: ai4startup,
      title: "GSOC Guidance Session",
      description:
        "Join us for an insightful session on GSOC, where you'll receive guidance on how to make your application stand out.",
      detailedDescription:
        "The Google Summer of Code (GSoC) Guidance Session is a comprehensive workshop designed to help students navigate the competitive GSoC application process. Led by past GSoC contributors, mentors, and current selected students, this session covers everything from selecting the right organization to crafting winning proposals. You'll learn about the program structure, timeline, expectations, and receive insider tips on what mentors look for in successful applicants. The session includes hands-on guidance for proposal writing, community engagement strategies, and technical preparation. Whether you're a first-time applicant or looking to improve your chances, this session provides invaluable insights into one of the most prestigious open-source programs globally.",
      date: "21st August",
      prizeComponent: null,
      component: <AIStartupComponent />,
      registerLink: "https://lu.ma/slb6g0zd",
    },
    {
      image: hackbuild,
      title: "HackBuild",
      description:
        "Get ready to build innovative solutions in a collaborative environment, where creativity meets technology. We have two rounds for hackathon, first round is online and second round is on-site. In the first round, participants will submit their project ideas and prototypes online, and the top teams will be selected to participate in the on-site hackathon.",
      detailedDescription:
        "HackBuild represents our flagship hackathon experience, designed to foster innovation and collaborative problem-solving over an extended period. This hybrid competition spans multiple days with a unique two-round format. Round 1 operates entirely online, where teams submit detailed project proposals, prototypes, and implementation plans. Our expert judging panel evaluates submissions based on innovation, technical feasibility, market potential, and presentation quality. Selected teams advance to Round 2, an intensive on-site hackathon where ideas transform into working solutions. Participants have access to mentorship, technical resources, and industry guidance throughout the process. The event encourages cross-domain collaboration, bringing together developers, designers, business strategists, and domain experts to tackle real-world challenges across various sectors including healthcare, education, sustainability, and emerging technologies.",
      date: "12th to 24th August",
      prizeComponent: <Hackbuildprize />,
      component: <HackBuildComponent />,
      registerLink: "https://hackbuild.gdgvitm.tech/",
    },
  ];

  // Auto-slide carousel effect
  useEffect(() => {
    const startCarouselAutoSlide = () => {
      carouselIntervalRef.current = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % (events.length * 2)); // Double for infinite effect
      }, 3000); // Slide every 3 seconds
    };

    startCarouselAutoSlide();

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [events.length]);

  // Create infinite carousel array
  const infiniteEvents = [...events, ...events, ...events]; // Triple for smooth infinite scroll

  const handleCarouselNavigation = (direction: "left" | "right") => {
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }

    if (direction === "left") {
      setCarouselIndex((prev) => (prev - 1 + infiniteEvents.length) % infiniteEvents.length);
    } else {
      setCarouselIndex((prev) => (prev + 1) % infiniteEvents.length);
    }

    // Restart auto-slide after manual navigation
    setTimeout(() => {
      carouselIntervalRef.current = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % infiniteEvents.length);
      }, 3000);
    }, 1000);
  };

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
            className="text-[#A1E9A5] md:mb-15 text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8"
            style={{ fontFamily: "Audiowide" }}
          >
            07 // EVENTS
          </p>

          {/* Mobile Event Cards */}
          <div className="md:hidden w-full px-4 space-y-6 mb-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === activeEvent ? 'scale-105 ring-2 ring-[#A1E9A5]/50' : 'scale-100'
                }`}
                onClick={() => {
                  setActiveEvent(index);
                  window.open(event.registerLink || "#", "_blank");
                }}
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "380px"
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2 leading-tight" style={{ fontFamily: "GoodTiming" }}>
                    {event.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed" style={{ fontFamily: "Audiowide" }}>
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/90 text-sm mb-1" style={{ fontFamily: "Audiowide" }}>
                        Date: {event.date}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-[#A1E9A5] rounded-full flex items-center justify-center">
                      <Arrow width={24} height={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - keep existing structure */}
          <div
            className="hidden md:block displaying-content w-full font-[GoodTiming] max-w-8xl mx-auto px-6 relative"
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
                    {events[activeEvent].detailedDescription}
                  </p>
                  <p className="text-2xl font-bold text-white-800 mb-6 md:text-left">
                    DATE: {events[activeEvent].date}
                  </p>
                </div>

                {/* Registration & Prize + Carousel */}
                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <button
                      type="button"
                      className="cursor-pointer hover:scale-105 transition-transform duration-200 mb-6"
                      onClick={() =>
                        window.open(events[activeEvent].registerLink || "#", "_blank")
                      }
                    >
                      <RegisterButton />
                    </button>

                    <div className="flex justify-center md:justify-start">
                      {events[activeEvent].prizeComponent}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 relative h-[350px] overflow-hidden">
                    <button
                      className="absolute left-2 top-1/2 z-40 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                      onClick={() => handleCarouselNavigation("left")}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 z-40 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                      onClick={() => handleCarouselNavigation("right")}
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div className="h-full w-full overflow-hidden">
                      <div
                        className="flex h-full items-center transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(-${carouselIndex * 220}px)`,
                          width: `${infiniteEvents.length * 220}px`,
                        }}
                      >
                        {infiniteEvents.map((event, index) => {
                          const originalIndex = index % events.length;
                          const isActive = originalIndex === activeEvent;

                          return (
                            <div
                              key={`${originalIndex}-${Math.floor(index / events.length)}`}
                              className={`flex-shrink-0 transition-all duration-300 relative cursor-pointer rounded-xl mx-3 ${
                                isActive
                                  ? "h-[300px] w-[200px] brightness-100 scale-105 ring-2 ring-[#A1E9A5]/50"
                                  : "h-[280px] w-[200px] brightness-75 hover:brightness-100 hover:scale-105"
                              }`}
                              onClick={() => setActiveEvent(originalIndex)}
                            >
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover rounded-xl transition-all duration-300 shadow-lg"
                              />
                              {isActive && (
                                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-2 rounded-b-xl">
                                  <h3 className="font-bold text-lg truncate">{event.title}</h3>
                                  <p className="text-sm text-[#A1E9A5]">{event.date}</p>
                                </div>
                              )}
                              {!isActive && (
                                <div className="absolute inset-0 bg-black/30 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">Click to View</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Carousel indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {events.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            index === activeEvent ? "bg-[#A1E9A5]" : "bg-white/30"
                          }`}
                          onClick={() => setActiveEvent(index)}
                        />
                      ))}
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

