import bg from '../assets/Union.png';
import pig from '../assets/aboutpig.png';
import llama from '../assets/abouthorse.png';
import textbox1 from '../assets/abouttext1.png';
import textbox2 from '../assets/abouttext2.png';
import gdgLogoText from '../assets/gdgwhite.png';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <div
        className="relative min-h-screen w-screen overflow-y-auto"
        style={{ backgroundColor: '#000000', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <style>{`
          div.relative::-webkit-scrollbar {
            display: none;
          }
          .gradient-overlay {
            background: linear-gradient(to bottom, transparent 70%, #000000 100%);
          }
          .text-shadow {
            text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.8);
          }
        `}</style>

        <div
          style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% auto', backgroundPosition: 'top center' }}
          className="absolute inset-0 bg-no-repeat min-h-[150vh] w-full"
        >
          <div className="absolute inset-0 gradient-overlay"></div>
          
          <div className="relative pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32 flex flex-col items-center text-center z-10">
            <p
              className="text-[#A1E9A5] mb-16 sm:mb-20 md:mb-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              style={{ fontFamily: 'Audiowide' }}
            >
              07 // ABOUT US
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-[#A1E9A5] font-bold mb-10 text-shadow"
              style={{ fontFamily: 'Press Start 2P' }}
            >
              SPECTRUM
            </h1>

            <div className="relative w-[90%] sm:w-[80%] max-w-4xl mb-20 flex justify-center items-center">
              <img
                src={textbox1}
                alt="Text Box 1"
                className="w-full"
              />
              <img
                src={pig}
                alt="Pig"
                className="absolute left-0 bottom-0 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48"
                style={{
                  height: 'auto',
                  transform: 'translate(-35%, 35%)',
                }}
              />
            </div>

            <div className="mb-20 flex justify-center">
              <img
                src={gdgLogoText}
                alt="GDG Logo and Text"
                className="w-2/3 sm:w-1/2 md:w-[200px] lg:w-[300px] xl:w-[400px] max-w-none"
              />
            </div>

            <div className="relative w-[90%] sm:w-[80%] max-w-4xl mb-0 flex justify-center items-center">
              <img
                src={textbox2}
                alt="Text Box 2"
                className="w-full"
              />
              <img
                src={llama}
                alt="Llama"
                className="absolute right-0 bottom-0 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48"
                style={{
                  height: 'auto',
                  transform: 'translate(35%, 35%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;