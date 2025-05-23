import React from "react";

const Footer = () => {
  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="p-2 md:p-3 rounded-full shadow-lg flex items-center justify-center bg-transparent">
      {children}
    </div>
  );

  return (
    <footer className="w-full text-white bg-[#1B1B1B] py-10 px-4 md:py-16 md:px-10 font-[Wadik] relative">
      {/* Top Label */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 md:-top-8 px-4 py-1.5 md:px-6 md:py-2 rounded-2xl bg-[#1B1B1B] z-20">
        <span className="text-green-400 text-base md:text-xl tracking-widest font-[GoodTiming]">
          08 // CONTACT US
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Contact us
          </h2>
          <div className="space-y-5">
            <div>
              <p className="text-base md:text-lg font-bold uppercase tracking-widest mb-1">
                Maitri Dalvi
              </p>
              <p className="text-gray-300 text-xs font-light md:text-sm">
                <a href="mailto:maitrid.@gmail.com" className="hover:underline">
                  maitrid.@gmail.com
                </a>
              </p>
              <p className="text-gray-300 text-xs md:text-sm">
                +91 6546453675
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg font-bold uppercase tracking-widest mb-1">
                Sameer Shelar
              </p>
              <p className="text-gray-300 text-xs md:text-sm">
                <a href="mailto:mairtid.@gmail.com" className="hover:underline">
                  mairtid.@gmail.com
                </a>
              </p>
              <p className="text-gray-300 text-xs md:text-sm">
                +91 6546453675
              </p>
            </div>
          </div>
        </div>

        {/* Spacer for layout alignment */}
        <div className="hidden lg:block" />

        {/* Social + Slogan */}
        <div className="flex flex-col items-end justify-center space-y-6 mt-8 md:mt-0">
          <div className="flex space-x-4 md:space-x-6">
            <a
              href="https://www.instagram.com/gdg_vit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconWrapper>
                <img
                  src="/insta.png"
                  alt="Instagram"
                  className="w-8 h-8 md:w-12 md:h-12 object-cover"
                />
              </IconWrapper>
            </a>
            <a
              href="https://www.youtube.com/@gdscvitmumbai5838"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <IconWrapper>
                <img
                  src="/youtube.png"
                  alt="YouTube"
                  className="w-8 h-8 md:w-12 md:h-12 object-cover"
                />
              </IconWrapper>
            </a>
            <a
              href="https://www.linkedin.com/company/google-developer-groups-vit-mumbai/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconWrapper>
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 h-8 md:w-12 md:h-12 object-cover"
                />
              </IconWrapper>
            </a>
          </div>

          <div className="text-right">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-wide">
              Converting
            </h3>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-wide">
              Ideas
            </h3>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-wide">
              Into Reality
            </h3>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-10 pt-4 font-[GoodTiming] text-center text-xs md:text-sm text-gray-400">
        &copy; {new Date().getFullYear()} GDG VIT Mumbai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;