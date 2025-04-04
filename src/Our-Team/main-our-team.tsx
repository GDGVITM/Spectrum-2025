import bg from '../assets/Union.png';
import creeper from '../assets/Our-team-assets/Creeper.png';
import player from '../assets/Our-team-assets/Player.png';
import InfiniteCarousel from './Infinite-Carousel';
import '../font.css';

export default function Our_Team() {
  return (
    <div className="relative h-screen w-screen bg-black overflow-y-auto overflow-x-hidden">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% auto' }}
        className="absolute inset-0 bg-no-repeat h-[150%]"
      >
        <div className="mt-65 flex flex-col items-center text-center">
          <p className="text-[#A1E9A5] mb-38 text-[52px]" style={{ fontFamily: 'Audiowide' }}>
            07 // ABOUT TEAM
          </p>
          <p className="text-white text-[120px] mb-40 w-[75%] leading-[1.25] tracking-wide" style={{ fontFamily: 'GoodTiming' }}>
            MEET THE TEAM THAT MAKES THE MAGIC HAPPEN
          </p>
          <InfiniteCarousel />
        </div>

        {/* Player Image (Bottom Left inside the Union background) */}
        <div className="absolute bottom-[55px] left-[105px] h-[400px] w-[400px] z-10 rotate-9">
          <div
            style={{ backgroundImage: `url(${player})` }}
            className="bg-contain bg-no-repeat h-full w-full"
          ></div>
        </div>

        {/* creeper Image (Bottom right inside the Union background) */}
        <div className="absolute bottom-[85px] right-[55px] h-[500px] w-[700px]  -rotate-18">
          <div
            style={{ backgroundImage: `url(${creeper})` }}
            className="bg-contain bg-no-repeat h-full w-full "
          ></div>
        </div>
        
      </div>
    </div>
  );
}
