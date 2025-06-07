import bg from '../assets/Union.png';
import creeper from '../assets/Our-team-assets/Creeper.png';
import player from '../assets/Our-team-assets/Player.png';
import InfiniteCarousel from './Infinite-Carousel';
import Footer from '../components/Footer'; // Assuming Footer is in components folder
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

          {/* Content Container: Holds all the text and carousel elements, ensuring they are above the gradient and centered */}
          {/* Added responsive top padding (pt-20 for small, pt-32 for medium and larger screens) */}
          {/* Added responsive bottom padding (pb-40 for small, pb-48 for medium, pb-56 for large and larger screens) to create space before the footer and images */}
          <div className="relative pt-20 sm:pt-24 md:pt-32 pb-40 sm:pb-48 md:pb-56 flex flex-col items-center text-center z-10">
            <p className="text-[#A1E9A5] mb-16 sm:mb-20 md:mb-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: 'Audiowide' }}>
              07 // ABOUT TEAM
            </p>
            <p className="text-white text-3xl sm:text-4xl md:text-5xl mb-24 w-[80%] sm:w-[70%] md:w-[60%] leading-[1.25]" style={{ fontFamily: 'GoodTiming' }}>
              MEET THE TEAM THAT MAKES THE MAGIC HAPPEN
            </p>
            {/* InfiniteCarousel component - added autoScroll prop */}
            <InfiniteCarousel/>
          </div>

          {/* Player Image (Bottom Left inside the Union background) */}
          {/* Added 'hidden sm:block' to hide on phone screens and show on sm screens and up */}
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