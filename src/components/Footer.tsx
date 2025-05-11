import { useState, useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
    </svg>
  );

  const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="currentColor" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  );

  return (
    <footer className="relative w-full text-white font-sans bg-black">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 px-6 py-2 mt-30 rounded-t-2xl z-20 bg-transparent"
        style={{ top: "-2rem" }}
      >
        <span className="text-green-400 font-mono text-2xl md:text-3xl font-medium">08 // CONTACT US</span>
      </div>

      <div className="w-full py-16 md:py-24 px-4 md:px-8 relative">
        {!isMobile && (
          <img
            src="/footer.png"
            alt="Footer background"
            className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
            aria-hidden="true"
          />
        )}
        
        <div className="max-w-7xl mt-30 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="col-span-1">
              <h2
                className="text-4xl md:text-5xl font-bold mb-10"
                style={{ fontFamily: "'Russo One', sans-serif" }}
              >
                Contact us
              </h2>
              <div className="space-y-10">
                <div>
                  <p className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-1">MAITRI DALVI</p>
                  <p className="text-gray-300 text-sm">maitridalvi@gmail.com</p>
                  <p className="text-gray-300 text-sm">+91-6546453675</p>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-1">SAMeER SHELAR</p>
                  <p className="text-gray-300 text-sm">sameershelar@gmail.com</p>
                  <p className="text-gray-300 text-sm">+91-6546453675</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 hidden lg:block"></div>

            <div className="col-span-1 flex flex-col items-end justify-center space-y-8">
              <div className="flex space-x-6 md:space-x-8 mb-6 md:mb-2">
                <a href="#" className="bg-green-400 p-3 md:p-4 rounded-full flex items-center justify-center text-black">
                  <InstagramIcon />
                </a>
                <a href="#" className="bg-green-400 p-3 md:p-4 rounded-full flex items-center justify-center text-black">
                  <YouTubeIcon />
                </a>
                <a href="#" className="bg-green-400 p-3 md:p-4 rounded-full flex items-center justify-center text-black">
                  <LinkedInIcon />
                </a>
              </div>
              
              <div className="text-right w-full">
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-right"
                  style={{ fontFamily: "'Russo One', sans-serif" }}
                >
                  CONVERTING
                </h3>
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-right"
                  style={{ fontFamily: "'Russo One', sans-serif" }}
                >
                  IDEAS
                </h3>
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-right"
                  style={{ fontFamily: "'Russo One', sans-serif" }}
                >
                  INTO REALITY
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;