import bg from '../assets/Union.png';
import creeper from '../assets/Our-team-assets/Creeper.png';
import player from '../assets/Our-team-assets/Player.png';
import InfiniteCarousel from './Infinite-Carousel';
import Footer from '../components/Footer'; // Assuming Footer is in components folder
import '../font.css';

export default function Our_Team() {
  return (
    <>
      <div
        className="relative min-h-screen w-screen overflow-y-auto h-full object-cover object-bottom hide-scrollbar"
        style={{ backgroundColor: '#000000', msOverflowStyle: 'none',}}
      >
        <div
          style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% auto', backgroundPosition: 'top center' }}
          className="absolute inset-0 bg-no-repeat min-h-[150vh] w-full top-20 sm:top-20 md:top-20 lg:top-20 xl:top-10 2xl:top-10"
          >

          <div className="relative pt-20 pb-0 sm:pt-24 sm:pb-10 md:pt-32 md:pb-15 lg:pb-20 xl:pb-25 2xl:pb-30 flex flex-col items-center text-center z-10">
            <p className="absolute text-[#A1E9A5] mb-16 sm:mb-20 md:mb-24 text-[10px] top-12 sm:text-[15px] sm:top-15 md:text-xl md:top-20 lg:text-2xl lg:top-25 xl:text-3xl xl:top-30 2xl:text-3xl 2xl:top-35" style={{ fontFamily: 'Audiowide' }}>
              07 // ABOUT TEAM
            </p>
            <p className="relative text-white leading-[1.35] top-5 w-[80%] text-2xl mb-24 sm:text-3xl sm:w-[90%] top-6 md:text-4xl top-7 md:w-[80%] lg:text-5xl lg:top-10 lg:w-[80%] lg:leading-[1.45] xl:text-6xl xl:top-15 xl:w-[80%] xl:leading-[1.50] 2xl:text-6xl 2xl:top-25 2xl:w-[80%] 2xl:leading-[1.45] 2xl:mb-40" style={{ fontFamily: 'GoodTiming' }}>
              MEET THE TEAM THAT MAKES <br></br>THE MAGIC HAPPEN
            </p>
            <InfiniteCarousel/>
          </div>

          <div className="absolute w-35 -bottom-50 left-15 h-auto sm:w-40 sm:left-20 sm:-bottom-80 md:w-35 md:-bottom-10 md:left-15 lg:w-35 lg:left-25 lg:-bottom-40 z-10 rotate-9 xl:w-40 xl:-bottom-55 xl:left-30 2xl:bottom-5 ">
            <img
              src={player}
              alt="Player Character"
              className="w-full h-full object-contain "
            />
          </div>

          <div className="absolute right-5 bottom-0 z-10 h-auto w-40 sm:w-45 sm:-bottom-20 sm:right-15 md:w-48 md:-bottom-10 md:right-5 lg:w-45 lg:-bottom-35 lg:right-20 xl:w-50 -rotate-20 xl:-bottom-50 xl:right-25 2xl:bottom-10">
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