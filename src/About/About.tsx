import bg from '../assets/Union.png';
import pig from '../assets/aboutpig.png';
import llama from '../assets/abouthorse.png';
import gdgLogoText from '../assets/gdgwhite.png';
import Footer from '../components/Footer';
import { MapPin } from 'lucide-react';
import '../App.css';
import '../font.css';

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
        className="about-container  relative min-h-screen w-screen overflow-y-auto"
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
            <div className="relative w-[90%] sm:w-[80%] max-w-3xl mb-20 flex justify-center items-center">
              <div className="textbox-container inline-block">
                <div className="content-area py-4 px-6 sm:py-6 sm:px-8">
                  <div className="connecting-vertical-line left"></div>
                  <div className="connecting-vertical-line right"></div>
                  {linesBox1.map((text, idx) => (
                    <div key={idx} className="line">
                      {idx !== 0 && <div className="line-separator" />}
                      <span className="text-sm sm:text-base leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={pig}
                alt="Pig"
                className="absolute left-0 bottom-0 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 animal-image"
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
            <div className="relative w-[90%] sm:w-[80%] max-w-3xl mb-20 flex justify-center items-center">
              <div className="textbox-container inline-block">
                <div className="content-area py-4 px-6 sm:py-6 sm:px-8">
                  <div className="connecting-vertical-line left"></div>
                  <div className="connecting-vertical-line right"></div>
                  {linesBox2.map((text, idx) => (
                    <div key={idx} className="line">
                      {idx !== 0 && <div className="line-separator" />}
                      <span className="text-sm sm:text-base leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={llama}
                alt="Llama"
                className="absolute right-0 bottom-0 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 animal-image"
                style={{
                  height: 'auto',
                  transform: 'translate(35%, 35%)',
                }}
              />
            </div>

            {/* VIT Location Section */}
            <div className="w-[90%] mt-6 sm:w-[80%] max-w-6xl mb-20">
              <h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#A1E9A5] font-bold mb-6 sm:mb-8 text-shadow text-center lg:text-left"
                style={{ fontFamily: 'Press Start 2P' }}
              >
                FIND US AT VIT
              </h3>
              
              {/* Map and Address Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                {/* Map Section - Square (Left) */}
                <div className="relative order-2 lg:order-1">
                  <div 
                    className="w-full aspect-square rounded-lg overflow-hidden"
                    style={{
                      border: '2px solid #A1E9A5',
                      boxShadow: '0 0 20px rgba(161, 233, 165, 0.3)',
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps?q=Vidyalankar+Institute+of+Technology,+Vidyalankar+Educational+Campus,+Vidyalankar+College+Marg,+Wadala+East,+Deen+Bandhu+Nagar,+Antop+Hill,+Mumbai,+Maharashtra+400037&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="VIT Location - 2VCC+J6V, College Marg, Wadala"
                    />
                  </div>
                  
                  {/* Map overlay with cyber effect */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(45deg, transparent 49%, rgba(161, 233, 165, 0.1) 50%, transparent 51%)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                {/* Address Section (Right) */}
                <div className="flex flex-col order-1 lg:order-2">
                  {/* Address Box */}
                  <div 
                    className="w-full rounded-lg overflow-hidden inline-block mb-4 sm:mb-6"
                    style={{
                      boxShadow: '0 0 20px rgba(161, 233, 165, 0.3)',
                    }}
                  >
                    <div className="textbox-container inline-block w-full">
                      <div className="content-area py-4 px-6 sm:py-5 sm:px-7">
                        <div className="line">
                          <span className="text-[#A1E9A5] font-semibold text-base sm:text-lg">
                            Vidyalankar Institute of Technology
                          </span>
                        </div>
                        <div className="line">
                          <div className="line-separator" />
                          <span className="text-sm sm:text-base">
                            2VCC+J6V, College Marg
                          </span>
                        </div>
                        <div className="line">
                          <div className="line-separator" />
                          <span className="text-sm sm:text-base">
                            Wadala (E), Sangam Nagar
                          </span>
                        </div>
                        <div className="line">
                          <div className="line-separator" />
                          <span className="text-sm sm:text-base">
                            Mumbai, Maharashtra 400037
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Directions Button */}
                  <div className="flex justify-center lg:justify-start">
                    <a
                      href="https://www.google.com/maps/dir//2VCC%2BJ6V%2C+College+Marg%2C+Wadala%28E%2C+Sangam+Nagar%2C+Mumbai%2C+Maharashtra+400037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-black bg-[#A1E9A5] hover:bg-[#8fd993] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                      style={{
                        boxShadow: '0 0 20px rgba(161, 233, 165, 0.4)',
                        fontFamily: 'Audiowide',
                      }}
                    >
                      <MapPin size={16} className="mr-2 sm:mr-2 sm:w-5 sm:h-5" />
                      GET DIRECTIONS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;