import React, { useState, useEffect, useRef } from "react";
import Union from "../assets/Union.png";
import { Arrow, Eventtitle } from "./svg";
import hackbuildCr from "./posters/hackbuildCr.png";
import techfeudImage from "./posters/techfeud.png";
import launchpadCr from "./posters/launchpadCr.png";
import ctf from "./posters/ctf.png";
import ai4startup from "./posters/ai4startup.png";

const events = [
  {
    id: 1,
    title: "TECH FEUD",
    image: techfeudImage,
    description:
      "Tech Feud is a dynamic three-round competition designed to sharpen placement-relevant skills through a mix of aptitude, creativity, and technical knowledge. Each round is crafted to challenge participants in different areas.",
    date: "15th & 16th April '25",
    registerLink: "#hackbuild-register",
  },
  {
    id: 2,
    title: "LAUNCH PAD",
    image: launchpadCr,
    description:
      "Welcome to LaunchPad, a high-stakes business strategy competition that challenges participants to think beyond conventional startup ideation. Instead of creating new startups, participants must analyze failed real-world businesses and devise innovative revival strategies.",
    date: "16th & 17th April '25",
    registerLink: "#techfeud-register",
  },
  {
    id: 3,
    title: "CAPTURE THE FLAG",
    image: ctf,
    description:
      "CTF is an intense cybersecurity challenge designed to provide students with hands-on experience in ethical hacking, penetration testing, and vulnerability analysis. Participants will solve real-world security challenges, putting their hacking and problem-solving skills to the test.",
    date: "11th April '25",
    registerLink: "#techfeud-register",
  },
  {
    id: 4,
    title: "HACK BUILD",
    image: hackbuildCr,
    description:
      "HackBuild is an exciting 8-hour event where students dive into the world of AI & ML, solving real-world challenges with cutting-edge technology. This event provides hands-on experience in AI/ML, and problem-solving, fostering innovation and creativity.",
    date: "12th April '25",
    registerLink: "#techfeud-register",
  },
  {
    id: 5,
    title: "AI FOR STARTUP",
    image: ai4startup,
    description:
      "AI for Startups is a knowledge-driven event featuring two expert speakers who will share insights on leveraging AI/ML in startups. These speakers will also serve as judges for the Hackbuild Final Round, where 8 finalist teams will present their AI/ML solutions for real-world problem statements.",
    date: "13th April '25",
    registerLink: "#techfeud-register",
  },
];

export default function Holder() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;
    const maxScroll = scrollContainer.scrollWidth / 2;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= maxScroll) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      <img className="w-[100vw]" src={Union} alt="background" />
      <div className="absolute top-30 left-0">
        <div className="p-4 mb-15 ml-155">
          <Eventtitle />
        </div>
        <div>
          <img
            src={selectedEvent.image}
            className="w-[100vw] h-[50%] object-cover object-top p-1 image-blur"
            alt="event banner"
          />
          <div className="absolute top-50 left-30 text-xl flex">
            <h1 className="mr-5">{selectedEvent.title}</h1>
            <Arrow width={70} height={70} />
          </div>
          <div className="w-[85%] absolute top-75 left-30 text-3xl ">
            {selectedEvent.description}
          </div>
          <div className="w-[85%] absolute top-120 left-30 flex flex-col">
            <span className="mb-5 text-4xl">Date: {selectedEvent.date}</span>
            <div className="flex justify-between">
              <a
                href={selectedEvent.registerLink}
                className="w-[20%] h-[100%] register text-center py-2"
              >
                REGISTER
              </a>
              {/* Banner Scroll Section */}
              <div
                ref={scrollRef}
                className="w-[60%] flex overflow-x-auto space-x-6 p-4 whitespace-nowrap mt-8"
                style={{scrollbarWidth: "none"}}
              >
                {[...events, ...events].map((event, index) => (
                  <img
                    key={index}
                    src={event.image}
                    className={`w-[225px] h-[300px] cursor-pointer transition-transform duration-300 snap-center ${
                      selectedEvent.id === event.id
                        ? "scale-110"
                        : "opacity-100"
                    }`}
                    onClick={() => setSelectedEvent(event)}
                    alt={event.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
