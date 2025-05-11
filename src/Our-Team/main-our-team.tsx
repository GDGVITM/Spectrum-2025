import bg from '../assets/Union.png';
import creeper from '../assets/Our-team-assets/Creeper.png';
import player from '../assets/Our-team-assets/Player.png';
import InfiniteCarousel from './Infinite-Carousel';
import '../font.css';

export default function Our_Team() {
  return (
    <>
    <div 
      className="relative h-screen w-screen bg-black overflow-y-auto" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>      
      <style>{`div.relative::-webkit-scrollbar {display: none;}`}</style>

      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% auto' }}
        className="absolute inset-0 bg-no-repeat h-[150%] "
      >
        <div className="mt-32 flex flex-col items-center text-center ">
          <p className="text-[#A1E9A5] mb-24 text-2xl" style={{ fontFamily: 'Audiowide' }}>
            07 // ABOUT TEAM
          </p>
          <p className="text-white text-5xl mb-24 w-[60%] leading-[1.25] " style={{ fontFamily: 'GoodTiming' }}>
            MEET THE TEAM THAT MAKES THE MAGIC HAPPEN
          </p>
          <InfiniteCarousel />
        </div>

        {/* Player Image (Bottom Left inside the Union background) */}
        <div className="absolute  left-[150px] h-[200px] w-[200px] z-10 rotate-9">
          <div
            style={{ backgroundImage: `url(${player})` }}
            className="bg-contain bg-no-repeat h-full w-full"
          ></div>
        </div>

        {/* creeper Image (Bottom right inside the Union background) */}
        <div className="absolute bottom-[35px] right-[45px] h-[300px] w-[300px]  -rotate-18">
          <div
            style={{ backgroundImage: `url(${creeper})` }}
            className="bg-contain bg-no-repeat h-full w-full "
          ></div>
        </div>
        
      </div>
    </div>
    </>
  );
}
