import bg from '../assets/Union.png';
import pig from '../assets/aboutpig.png';
import llama from '../assets/abouthorse.png';
import gdgLogoText from '../assets/gdgwhite.png';
import Footer from '../components/Footer';
import '../App.css';

function About() {
  const linesBox1 = [
    "Google Developer Groups on campus VIT being a community",
    "of 1200+ students always strive to empower its members",
    "with numerous opportunities to broaden their skillsets.",
    "We are a community, driven by the motive of 'Converting",
    "Ideas Into Reality'. The significance of networking and",
    "industrial exposure, we team GDG VIT desires to organize",
    "our official Flagship Event - SPECTRUM."
  ];

  const linesBox2 = [
    "GDGs aka Google Developer Groups powered by Google to",
    "enrich student developers in Google as well as other",
    "technologies and thus help the community to grow and",
    "connect. We are a group of students dedicated to",
    "organising several activities and events that includes",
    "hosting workshops and identify local partners to work",
    "with and lead project building activities. By joining a",
    "GDG, students grow their knowledge in a peer-to-peer",
    "learning environment and build solutions for local",
    "business and their communities."
  ];

  return (
    <>
      <div
        className="about-container relative min-h-screen w-screen overflow-y-auto"
        style={{ backgroundColor: '#000000', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {/* Particle system */}
        <div className="particle-system">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="grid-overlay"></div>

        {/* Scanning line */}
        <div className="scan-line"></div>

        {/* Accent lines */}
        <div className="accent-lines">
          <div className="accent-line"></div>
          <div className="accent-line"></div>
          <div className="accent-line"></div>
          <div className="accent-line"></div>
        </div>

        {/* Enhanced random halo effects */}
        <div className="random-halo-1"></div>
        <div className="random-halo-2"></div>
        <div className="random-halo-3"></div>
        <div className="random-halo-4"></div>
        <div className="random-halo-5"></div>
        <div className="random-halo-6"></div>
        <div className="random-halo-7"></div>

        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
          }}
          className="absolute inset-0 bg-no-repeat min-h-[100vh] w-full mobile-no-bg"
        >
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="absolute inset-0 green-hallow"></div>
          <div className="relative mt-24 sm:mt-0 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32 flex flex-col items-center text-center z-10">
            
            {/* About Us text - hidden on mobile, visible on large screens */}
            <p
              className="hidden lg:block text-[#A1E9A5] mb-16 sm:mb-20 md:mb-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              style={{ fontFamily: 'Audiowide' }}
            >
              07 // ABOUT US
            </p>

            <h2
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[8rem] 2xl:text-[8rem] text-[#A1E9A5] font-bold mb-10 text-shadow"
              style={{ fontFamily: 'Press Start 2P' }}
            >
              SPECTRUM
            </h2>

            {/* Textbox 1 with pig */}
            <div className="relative w-[90%] sm:w-[80%] max-w-4xl mb-20 flex justify-center items-center">
              <div className="textbox-container">
                <div className="content-area">
                  <div className="connecting-vertical-line left"></div>
                  <div className="connecting-vertical-line right"></div>
                  {linesBox1.map((text, idx) => (
                    <div key={idx} className="line">
                      {idx !== 0 && <div className="line-separator" />}
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={pig}
                alt="Pig"
                className="absolute left-0 bottom-0 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 animal-image"
                style={{
                  height: 'auto',
                  transform: 'translate(-35%, 35%)',
                }}
              />
            </div>

            {/* GDG logo */}
            <div className="mb-20 flex justify-center">
              <img
                src={gdgLogoText}
                alt="GDG Logo and Text"
                className="w-2/3 sm:w-1/2 md:w-[200px] lg:w-[300px] xl:w-[400px] max-w-none"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(95, 255, 175, 0.4))'
                }}
              />
            </div>

            {/* Textbox 2 with llama */}
            <div className="relative w-[90%] sm:w-[80%] max-w-4xl mb-0 flex justify-center items-center">
              <div className="textbox-container">
                <div className="content-area">
                  <div className="connecting-vertical-line left"></div>
                  <div className="connecting-vertical-line right"></div>
                  {linesBox2.map((text, idx) => (
                    <div key={idx} className="line">
                      {idx !== 0 && <div className="line-separator" />}
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={llama}
                alt="Llama"
                className="absolute right-0 bottom-0 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 animal-image"
                style={{
                  height: 'auto',
                  transform: 'translate(35%, 35%)',
                }}
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
