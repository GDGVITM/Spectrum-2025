"use client";
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import BhumiImg from '../assets/Our-team-assets/Bhumi.jpg';
import OmImg from '../assets/Our-team-assets/Om.jpeg';
import SameerImg from '../assets/Our-team-assets/Sameer.jpg';
import TanayImg from '../assets/Our-team-assets/Tanay.png';
import RashmiImg from '../assets/Our-team-assets/Rashmi.jpg';
import ApurvaImg from '../assets/Our-team-assets/Apurva.png';
import SamarthImg from '../assets/Our-team-assets/Samarth.jpg';
import NiranjanImg from '../assets/Our-team-assets/Niranjan.jpg';
import MaitriImg from '../assets/Our-team-assets/Matri.jpg';
import ShwetaImg from '../assets/Our-team-assets/Shweta.jpg';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  objectPosition?: string;
  transform?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

const InfiniteCarousel: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "APURVA GHARE",
    role: "MEDIA LEAD",
    image: ApurvaImg,
    objectPosition: "center -50px",
    transform: "scale(1.4)",
    linkedinUrl: "https://in.linkedin.com/in/apurva-ghare-7bb94029a",
    instagramUrl: "https://www.instagram.com/_apurvvva._/",
  },
   {
    id: 2,
    name: "NIRANJAN JADHAV",
    role: "FINANCE & SPONSORSHIP LEAD",
    image: NiranjanImg,
    objectPosition: "center 15%",
    githubUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/niranjanjadhav1106/",
    instagramUrl: "https://www.instagram.com/niranjan_1106/",
  },
  {
    id: 3,
    name: "SHWETA BEHERA",
    role: "TECHNICAL LEAD",
    image: ShwetaImg,
    objectPosition: "center -55px",
    githubUrl: "https://github.com/shwet46",
    linkedinUrl: "https://www.linkedin.com/in/shweta-behera/",
  },
  {
    id: 4,
    name: "OM BADADE",
    role: "TECHNICAL LEAD",
    image: OmImg,
    objectPosition: "center -50px",
    linkedinUrl: "http://www.linkedin.com/in/ombadade234",
    instagramUrl: "https://www.instagram.com/ombadade/",
  },
  {
    id: 5,
    name: "MAITRI DALVI",
    role: "GDG ORGANIZER",
    image: MaitriImg,
    objectPosition: "center 0px",
    transform: "scale(1)",
    githubUrl: "https://github.com/maitri-dalvi",
    linkedinUrl: "https://www.linkedin.com/in/maitridalvi13/",
  },
  {
    id: 6,
    name: "SAMEER SHELAR",
    role: "ASSOCIATE LEAD",
    image: SameerImg,
    objectPosition: "center 25%",
    githubUrl: "https://github.com/shelarsameer",
    linkedinUrl: "https://www.linkedin.com/in/sameer-shelar-72a750267",
  },
  {
    id: 7,
    name: "SAMARTH BHANDAVALE",
    role: "DESIGN LEAD",
    image: SamarthImg,
    objectPosition: "center -45px",
    transform: "scale(1)",
    githubUrl: "https://github.com/sambhandavale",
    linkedinUrl: "https://www.linkedin.com/in/samarth-bhandavale",
  },
  {
    id: 8,
    name: "TANAY BHIRUD",
    role: "DESIGN LEAD",
    image: TanayImg,
    objectPosition: "center -20px",
    linkedinUrl: "https://www.linkedin.com/in/tanay-bhirud/",
    instagramUrl: "https://www.instagram.com/tanay_bhirud1204/",
  },
  {
    id: 9,
    name: "RASHMI SAHU",
    role: "EVENTS & OUTREACH LEAD",
    image: RashmiImg,
    objectPosition: "center 20%",
    transform: "scale(1)",
    linkedinUrl: "https://www.linkedin.com/in/rashmi-sahu-69269b257/",
    instagramUrl: "https://www.instagram.com/rushtricted",
  },
  {
    id: 10,
    name: "BHUMI PADAYA",
    role: "EVENTS & OUTREACH LEAD",
    image: BhumiImg,
    objectPosition: "center -10px",
    linkedinUrl: "https://www.linkedin.com/in/bhumi-padaya-706596316",
    instagramUrl: "https://www.instagram.com/bhumi_padaya/",
  },
];

  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  let cardWidth = 327;
  if (windowWidth < 640) cardWidth = 240;
  else if (windowWidth < 768) cardWidth = 280;
  else if (windowWidth < 1024) cardWidth = 300;

  const animationDistance = cardWidth * 10;

  const scrollAnimation = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-${animationDistance}px));
      }
    }
    .animate-scroll {
      animation: scroll ${windowWidth < 640 ? 30 : windowWidth < 1024 ? 45 : 60}s linear infinite;
      animation-play-state: running;
    }
    .animate-scroll:hover,
    .animate-scroll:focus {
      animation-play-state: paused;
    }
  `;

  return (
    <>
      <style>{scrollAnimation}</style>

      <div className="relative max-w-full overflow-x-hidden bg-transparent z-10 bottom-10 sm:bottom-5 md:bottom-5 lg:bottom-3 xl:bottom-0 2xl:bottom-0">
        <div className="flex w-full animate-scroll backface-hidden perspective-1000">
          {duplicatedMembers.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className={`
                w-[200px]
                sm:min-w-[240px]
                md:min-w-[280px]
                lg:min-w-[327px]
                box-border flex flex-col items-center bg-transparent
                mx-2 sm:mx-3 md:mx-4 lg:mx-[15px]
                flex-shrink-0 relative z-[1]
              `}
            >
              <div
                className={`
                  w-[200px] h-[220px]
                  sm:w-[240px] sm:h-[250px]
                  md:w-[280px] md:h-[290px]
                  lg:w-[327px] lg:h-[330px]
                  overflow-hidden relative bg-black border-0 border-solid rounded-[16px]
                `}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover block backface-hidden"
                  style={{
                    objectPosition: member.objectPosition || 'center top',
                    transform: member.transform || 'none'
                  }}
                />
                <div className="absolute bottom-[10px] left-[10px] right-[10px] px-4 py-3 sm:py-4 bg-[#FFFFFF1A] text-white box-border text-center rounded-[10px] border border-[#FFFFFF1A] backdrop-blur-[10px] flex flex-col justify-center z-[2]">
                  <h3 className="font-[Audiowide] m-0 text-sm sm:text-md md:text-lg text-white font-bold tracking-wider uppercase transition-[transform_0.3s_ease,font-size_0.3s_ease] text-left break-words leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-left font-[Audiowide] text-[rgba(255,255,255,0.7)] text-xs sm:text-sm md:text-base uppercase tracking-wider transition-[transform_0.3s_ease,color_0.3s_ease] break-words leading-tight">
                    {member.role}
                  </p>
                  <div className="flex space-x-3 mt-1">
                    {member.githubUrl && member.githubUrl !== "#" && (
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        <FaGithub size={18} className="text-white" />
                      </a>
                    )}
                    {member.linkedinUrl && member.linkedinUrl !== "#" && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        <FaLinkedin size={18} className="text-white" />
                      </a>
                    )}
                    {member.instagramUrl && member.instagramUrl !== "#" && (
                      <a
                        href={member.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        <FaInstagram size={18} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteCarousel;