import bg from '../assets/Union.png';
import creeper from '../assets/Our-team-assets/Creeper.png';
import player from '../assets/Our-team-assets/Player.png';
import InfiniteCarousel from './Infinite-Carousel';
import Footer from '../components/Footer';

import '../font.css';

export default function Our_Team() {
  return (
    <>
      <div
        className="relative min-h-screen w-screen overflow-y-auto h-full object-cover object-bottom hide-scrollbar"
        style={{ backgroundColor: '#000000', msOverflowStyle: 'none' }}
      >

        <style>{`
          div.relative::-webkit-scrollbar {
            display: none;
          }
          /* This class applies a linear gradient from transparent to black at the bottom */
          .gradient-overlay {
            background: linear-gradient(to bottom, transparent 70%, #000000 100%);
          }
        `}</style>
        <div
          style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% auto', backgroundPosition: 'top center' }}
          className="absolute inset-0 bg-no-repeat min-h-[150vh] w-full"
        >
    
          <div className="absolute inset-0 gradient-overlay"></div>

    
          <div className="relative pt-20 sm:pt-24 md:pt-32 pb-40 sm:pb-48 md:pb-56 flex flex-col items-center text-center z-10">
            <p className="text-[#A1E9A5] mb-16 sm:mb-20 md:mb-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: 'Audiowide' }}>
              07 // ABOUT TEAM
            </p>
            <p
              className="relative text-white leading-[1.35] top-5 w-[80%] text-2xl mb-24 sm:text-3xl sm:w-[90%] top-6 md:text-4xl top-7 md:w-[80%] lg:text-5xl lg:top-10 lg:w-[80%] lg:leading-[1.45] xl:text-6xl xl:top-15 xl:w-[80%] xl:leading-[1.50] 2xl:text-6xl 2xl:top-25 2xl:w-[80%] 2xl:leading-[1.45] 2xl:mb-40"
              style={{ fontFamily: 'GoodTiming' }}
            >
              MEET THE TEAM THAT MAKES <br /> THE MAGIC HAPPEN
            </p>
            <InfiniteCarousel />
          </div>

          <div className="hidden sm:block absolute left-0 sm:left-10 md:left-16 lg:left-24 bottom-0 h-auto w-24 sm:w-32 md:w-40 lg:w-48 z-10 rotate-9">
            <img
              src={player}
              alt="Player Character"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden sm:block absolute right-0 sm:right-10 md:right-16 lg:right-24 bottom-10 sm:bottom-16 md:bottom-24 h-auto w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 -rotate-18">
            <img
              src={creeper}
              alt="Creeper Character"
              className="w-full h-full object-contain"
            />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}