// Create carousel component
import React, { useEffect, useState } from 'react';

// Import team member images
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
      name: "BHUMI PADAYA",
      role: "EVENTS & OUTREACH LEAD",
      image: BhumiImg,
      objectPosition: "center -20px"
    },
    {
      id: 2,
      name: "OM BADADE",
      role: "TECHNICAL LEAD",
      image: OmImg,
      objectPosition: "center -70px"
    },
    {
      id: 3,
      name: "SAMEER SHELAR",
      role: "ASSOCIATE LEAD",
      image: SameerImg,
      objectPosition: "center 25%"
    },
    {
      id: 4,
      name: "TANAY BHIRUD",
      role: "DESIGN LEAD",
      image: TanayImg,
      objectPosition: "center 0px"
    },
    {
      id: 5,
      name: "RASHMI SAHU",
      role: "EVENTS & OUTREACH LEAD",
      image: RashmiImg,
      objectPosition: "center 20%",
      transform:"scale(1)"
    },
    {
      id: 6,
      name: "APURVA GHARE",
      role: "MEDIA LEAD",
      image: ApurvaImg,
      objectPosition: "center -50px",
      transform:"scale(1.4)"
    
    },
    {
      id: 7,
      name: "SAMARTH BHANDAVALE",
      role: "DESIGN LEAD",
      image: SamarthImg,
      objectPosition: "center -45px",
      transform:"scale(1)",
    },
    {
      id: 8,
      name: "NIRANJAN JADHAV",
      role: "FINANCE & SPONSORSHIP LEAD",
      image: NiranjanImg,
      objectPosition: "center 15%"
    },
    {
      id: 9,
      name: "MAITRI DALVI",
      role: "GDG ORGANIZER",
      image: MaitriImg,
      objectPosition: "center -10px",
      transform:"scale(1)"
    },
    {
      id: 10,
      name: "SHWETA BAHERA",
      role: "TECHNICAL LEAD",
      image: ShwetaImg,
      objectPosition: "center -55px"
    }
  ];

  // Create multiple duplicates for seamless infinite scroll
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];

  // Calculate card width and animation distance based on screen size
  const cardWidth = windowWidth < 640 ? 300 : 400;
  const animationDistance = cardWidth * 10;

  // Custom animation class for infinite scroll
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
      animation: scroll ${windowWidth < 640 ? 40 : 60}s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
    
    /* Prevent page scrolling - fix the page */
    html, body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
      position: fixed;
    }
  `;

  return (
    <>
      {/* Add style tag for custom animation that can't be done with just Tailwind */}
      <style>{scrollAnimation}</style>
      
      {/* Main container */}
      <div className="relative w-full max-w-full mx-auto overflow-hidden py-3 sm:py-5 bg-black">
        <div className="w-full overflow-hidden bg-black">
          {/* Carousel content with custom animation */}
          <div className="flex w-fit animate-scroll will-change-transform transform translate-3d-0 backface-hidden perspective-1000 gap-[5px] sm:gap-[10px]">
            {duplicatedMembers.map((member, index) => (
              <div key={`${member.id}-${index}`} className="min-w-[300px] sm:min-w-[400px] p-2 sm:p-3 box-border flex flex-col items-center bg-transparent mx-[10px] sm:mx-[20px] flex-shrink-0 transform translate-3d-0 transition-all duration-400 relative z-[1]">
                <div className="w-[300px] h-[380px] sm:w-[400px] sm:h-[450px] overflow-hidden relative bg-black border-0 border-solid border-[rgba(51,51,51,0.3)] transform translate-3d-0 transition-all duration-400 rounded-b-[16px]">
                  <div className="absolute top-0 left-0 right-0 h-[30px]  bg-[linear-gradient(180deg,#0F0F0F_0%,rgba(15,15,15,0.7)_50%,rgba(15,15,15,0)_100%)] z-[1] pointer-events-none"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    loading="eager" 
                    decoding="sync"
                    className="w-full h-full object-cover block will-change-transform transform translate-3d-0 backface-hidden transition-transform duration-400 rounded-b-[16px]"
                    style={{ 
                      objectPosition: member.objectPosition || 'center top',
                      transform: member.transform || 'none'
                    }}
                  />
                  <div className="absolute left-2 sm:left-4 bottom-[20px] w-[280px] sm:w-[370px] h-[70px] sm:h-[80px] bg-[#FFFFFF1A] text-white p-[10px] sm:p-[15px] box-border text-center transform translate-3d-0 transition-all duration-400 rounded-[10px] border border-solid border-[#FFFFFF1A] backdrop-blur-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.05)] flex flex-col leading-none justify-center z-[2]">
                    <h3 className="font-['Audiowide',sans-serif] m-0 mb-[3px] sm:mb-[5px] text-base sm:text-lg text-white font-semibold tracking-wider uppercase transition-[transform_0.3s_ease,font-size_0.3s_ease] text-left truncate">
                      {member.name}
                    </h3>
                    <p className="text-left font-['Audiowide',sans-serif] text-[rgba(255,255,255,0.7)] text-[0.6rem] sm:text-[0.8rem] m-0 uppercase tracking-wider transition-[transform_0.3s_ease,color_0.3s_ease] truncate">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteCarousel;
