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
            <div className="relative w-[90%] sm:w-[80%] max-w-4xl  mb-20 flex justify-center items-center">
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
            <div className="relative w-[90%] sm:w-[80%] max-w-4xl mb-20  flex justify-center items-center">
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

            {/* VIT Location Section */}
            <div className="w-[90%] mt-6 sm:w-[80%] max-w-6xl mb-20">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#A1E9A5] font-bold mb-8 text-shadow"
                style={{ fontFamily: 'Press Start 2P' }}
              >
                FIND US AT VIT
              </h3>
              
              {/* Map and Address Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Map Section - Square (Left) */}
                <div className="relative">
                  <div 
                    className="w-full aspect-square rounded-lg overflow-hidden"
                    style={{
                      border: '2px solid #A1E9A5',
                      boxShadow: '0 0 20px rgba(161, 233, 165, 0.3)',
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.042926280613!2d72.8397!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4d0c4e5%3A0x1b10edc7a7c4a8c4!2sVidyalankar%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1642584000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Vidyalankar Institute of Technology Location"
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
                <div className="flex flex-col aspect-square">
                  {/* Address Box */}
                  <div 
                    className="w-full flex-1 rounded-lg overflow-hidden flex items-center justify-center mb-4"
                    style={{
                      boxShadow: '0 0 20px rgba(161, 233, 165, 0.3)',
                    }}
                  >
                    <div className="textbox-container w-full h-full flex items-center justify-center p-0">
                      <div className="content-area p-4">
                        <div className="line">
                          <span className="text-[#A1E9A5] font-semibold">Vidyalankar Institute of Technology</span>
                        </div>
                        <div className="line">
                          <div className="line-separator" />
                          <span>Vidyalankar Educational Campus</span>
                        </div>
                        <div className="line">
                          <div className="line-separator" />
                          <span>Vidyalankar College Marg, Wadala (E)</span>
                        </div>
                        <div className="line">
                          <div className="line-separator" />
                          <span>Sangam Nagar, Antop Hill</span>
                        </div>
                        <div className="line">
                          <div className="line-separator" />
                          <span>Mumbai - 400037, Maharashtra, India</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Directions Button */}
                  <div className="flex justify-start">
                    <a
                      href="https://www.google.com/maps/dir//Vidyalankar+Institute+of+Technology,+Vidyalankar+Educational+Campus,+Vidyalankar+College+Marg,+Wadala+East,+Deen+Bandhu+Nagar,+Antop+Hill,+Mumbai,+Maharashtra+400037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 text-black bg-[#A1E9A5] hover:bg-[#8fd993] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                      style={{
                        boxShadow: '0 0 20px rgba(161, 233, 165, 0.4)',
                        fontFamily: 'Audiowide',
                      }}
                    >
                      <MapPin size={20} className="mr-2" />
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