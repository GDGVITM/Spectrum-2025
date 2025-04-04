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
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  // Calculate card width and animation distance based on screen size
  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? 320 : 357;
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
      animation: scroll ${isMobile ? 40 : 60}s linear infinite;
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
      <div className="relative w-full max-w-full mx-auto overflow-hidden py-3 sm:py-5 bg-transparent z-1">
        <div className="w-full overflow-hidden bg-transparent">
          {/* Carousel content with custom animation */}
          <div className="flex w-fit animate-scroll will-change-transform transform translate-3d-0 backface-hidden perspective-1000">
            {duplicatedMembers.map((member, index) => (
              <div key={`${member.id}-${index}`} className="min-w-[280px] inset-shadow-[] box-border flex flex-col items-center bg-transparent mx-[15px] flex-shrink-0 transform translate-3d-0 transition-all duration-400 relative z-[1]">
                <div className="w-[327px] h-[330px] overflow-hidden relative bg-black border-0 border-solid  transform translate-3d-0 transition-all duration-400 rounded-b-[16px]">
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
                  <div className="absolute   bottom-[10px]  w-full  h-[70px] px-4 bg-[#FFFFFF1A] text-white  box-border text-center transform translate-3d-0 transition-all duration-400 rounded-[10px] border border-solid border-[#FFFFFF1A] backdrop-blur-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.05)] flex flex-col leading-none justify-center z-[2]">
                    <h3 className="font-[Audiowide] m-0 mb-[3px]  text-lg  text-white font-semibold tracking-wider uppercase transition-[transform_0.3s_ease,font-size_0.3s_ease] text-left truncate">
                      {member.name}
                    </h3>
                    <p className="text-left font-[Audiowide] text-[rgba(255,255,255,0.7)] text-sm uppercase tracking-wider transition-[transform_0.3s_ease,color_0.3s_ease] truncate">
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