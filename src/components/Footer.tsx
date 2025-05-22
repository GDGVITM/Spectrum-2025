const Footer = () => {
  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="p-2 md:p-4 rounded-full shadow-lg flex items-center justify-center bg-transparent">
      {children}
    </div>
  );

  return (
    <footer className="w-full text-white shadow-2xl bg-[#1B1B1B] py-12 px-4 md:py-20 md:px-12 font-[GoodTiming] relative">
      {/* Top Green Contact Us */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 md:-top-10 px-4 md:px-8 py-2 md:py-3 rounded-2xl md:rounded-3xl bg-[#1B1B1B] z-20">
        <span className="text-green-400 font-[AutoWide, sans-serif] text-lg md:text-2xl lg:text-3xl font-normal tracking-widest">
          08 // CONTACT US
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
        {/* Contact Left */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10">Contact us</h2>
          <div className="space-y-6 md:space-y-10">
            <div>
              <p className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-widest mb-1">Maitrii Dalvi</p>
              <p className="text-gray-300 text-xs md:text-sm">
                <a href="mailto:maitrid.@gmail.com" className="hover:underline">maitrid.@gmail.com</a>
              </p>
              <p className="text-gray-300 text-xs md:text-sm">+91 6546453675</p>
            </div>
            <div>
              <p className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-widest mb-1">Sammer Shelar</p>
              <p className="text-gray-300 text-xs md:text-sm">
                <a href="mailto:mairtid.@gmail.com" className="hover:underline">mairtid.@gmail.com</a>
              </p>
              <p className="text-gray-300 text-xs md:text-sm">+91 6546453675</p>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="hidden lg:block" />

        {/* Social and Slogan Right */}
        <div className="flex flex-col items-end md:items-end justify-center space-y-6 md:space-y-8 mt-10 md:mt-0">
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconWrapper>
                <img src="/insta.png" alt="Instagram" className="w-10 h-10 md:w-16 md:h-16 object-cover" />
              </IconWrapper>
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <IconWrapper>
                <img src="/youtube.png" alt="YouTube" className="w-10 h-10 md:w-16 md:h-16 object-cover" />
              </IconWrapper>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IconWrapper>
                <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10 md:w-16 md:h-16 object-cover" />
              </IconWrapper>
            </a>
          </div>
          <div className="text-right">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-wider">Converting</h3>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-wider">Ideas</h3>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-wider">Into Reality</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;