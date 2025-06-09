import bg from '../assets/Union.png';
import creeper from '../assets/Our-team-assets/Creeper.png';
import player from '../assets/Our-team-assets/Player.png';
import InfiniteCarousel from './Infinite-Carousel';
import Footer from '../components/Footer';

import '../font.css';

export default function Our_Team() {
  return (
    <>
      {/* Main container for the Our Team page, setting black background and scroll behavior */}
      <div
        className="relative min-h-screen w-screen overflow-y-auto"
        style={{ backgroundColor: '#000000', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {/* Hide scrollbar for Webkit browsers */}
        <style>{`
          div.relative::-webkit-scrollbar {
            display: none;
          }
          /* This class applies a linear gradient from transparent to black at the bottom */
          .gradient-overlay {
            background: linear-gradient(to bottom, transparent 70%, #000000 100%);
          }
        `}</style>

        {/* Background Image Container: Holds the Union.png image */}
        {/* min-h-[150vh] ensures the background image extends sufficiently on all screens, especially mobile */}
        <div
          style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% auto', backgroundPosition: 'top center' }}
          className="absolute inset-0 bg-no-repeat min-h-[150vh] w-full"
        >
          {/* Gradient Overlay: Sits on top of the background image to create a smooth blend into the black page background */}
          <div className="absolute inset-0 gradient-overlay"></div>

          {/* Creeper Image (Bottom Right) - Moved behind carousel by reducing z-index, smaller on small screens and positioned lower */}
          <div className="absolute right-5 -bottom-10 z-5 h-auto w-28 sm:w-32 sm:-bottom-25 sm:right-15 md:w-48 md:-bottom-15 md:right-5 lg:w-45 lg:-bottom-40 lg:right-20 xl:w-50 -rotate-20 xl:-bottom-55 xl:right-25 2xl:-bottom-5">
            <img
              src={creeper}
              alt="Creeper Character"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content Container: Holds all the text and carousel elements, ensuring they are above the gradient and centered */}
          {/* Added responsive top padding (pt-20 for small, pt-32 for medium and larger screens) */}
          {/* Added responsive bottom padding (pb-40 for small, pb-48 for medium, pb-56 for large and larger screens) to create space before the footer and images */}
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
            {/* InfiniteCarousel component - added autoScroll prop */}
            <InfiniteCarousel/>
          </div>

          {/* Player Image (Bottom Left - moved closer to footer) */}
          {/* Added 'hidden sm:block' to hide on phone screens and show on sm screens and up */}
          <div className="hidden sm:block absolute left-0 sm:left-10 md:left-16 lg:left-24 -bottom-10 sm:-bottom-8 md:-bottom-6 lg:-bottom-4 h-auto w-24 sm:w-32 md:w-40 lg:w-48 z-10 rotate-9">
            <img
              src={player}
              alt="Player Character"
              className="w-full h-full object-contain"
            />
          </div>
                
          <Footer />
        </div>
               
      </div>
    </>
  );
}