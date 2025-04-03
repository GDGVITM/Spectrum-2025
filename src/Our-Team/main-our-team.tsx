import bg from '../assets/Union.png';
import creeper from '../assets/Our-team-assets/Creeper.png'
import player from '../assets/Our-team-assets/Player.png'
import InfiniteCarousel from './Infinite-Carousel';
import '../font.css'

export default function Our_Team() {
  return (
    <div className='relative h-screen w-screen bg-black  '>
      <div style={{ backgroundImage: `url(${bg})` }}
        className='absolute inset-0 bg-cover h-auto'>
        <div className='relative z-10 h-screen'>
          <div className="mt-65 flex flex-col items-center text-center ">
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