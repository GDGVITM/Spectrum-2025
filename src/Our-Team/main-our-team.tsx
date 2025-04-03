import bg from '../assets/Union.png';
import creeper from '../assets/Our-team-assets/Creeper.png';
import player from '../assets/Our-team-assets/Player.png';
import InfiniteCarousel from './Infinite-Carousel';
import '../font.css';

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
}

export default function Our_Team() {
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
    }
  ];

  return (
    <div className='relative h-screen w-screen bg-black overflow-auto'>
      <div style={{ backgroundImage: `url(${bg})` }}
        className='absolute inset-0 bg-cover h-auto'>
        <div className='relative z-10 h-screen'>
          <div className="mt-65 flex flex-col items-center text-center">
              <p className="text-[#A1E9A5] mb-38 text-[52px]" style={{fontFamily: 'Audiowide'}}>
              07 // ABOUT TEAM
              </p>
              <p className="text-white text-[120px] mb-40 w-[75%] leading-[1.25] tracking-wide" style={{fontFamily: 'GoodTiming'}}>
              MEET THE TEAM THAT MAKES THE MAGIC HAPPEN
              </p>
              <InfiniteCarousel/>
          </div>
        </div>
      </div>
    </div>
  );
}