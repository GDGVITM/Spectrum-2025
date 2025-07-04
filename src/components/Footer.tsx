import "../font.css";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);

  const slogans = ["Converting", "Ideas", "Into Reality"];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && typingIndex < slogans.length) {
      const timer = setTimeout(() => {
        setTypingIndex((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible, typingIndex, slogans.length]);

  const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="p-2 md:p-3 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-br from-[#222] to-[#333] hover:from-[#333] hover:to-[#222] transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-[#A1E9A5]/20 group">
      <div className="transform transition-transform duration-200 group-hover:rotate-12">
        {children}
      </div>
    </div>
  );

  return (
    <footer className="w-full text-white bg-transparent font-[Wadik] relative overflow-hidden">
      <div
        className="relative w-full"
        style={{
          filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.8))",
        }}
      >
        <div className="flex justify-center">
          <div className="relative z-20 w-fit max-w-[calc(100%-40px)] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <div
              className="bg-gradient-to-b from-[#444] to-[#333] relative py-3 px-8 md:px-16 md:py-5"
              style={{
                borderTopLeftRadius: "clamp(8px, 2vw, 16px)",
                borderTopRightRadius: "clamp(8px, 2vw, 16px)",
                clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <div className="text-lg md:text-xl font-[Audiowide] font-bold text-[#A1E9A5] tracking-wide text-center whitespace-nowrap">
                08 // Contact us
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#A1E9A5]/10 to-transparent"
                style={{
                  borderTopLeftRadius: "clamp(8px, 2vw, 16px)",
                  borderTopRightRadius: "clamp(8px, 2vw, 16px)",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#333] to-[#111] relative rounded-t-3xl">
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/40 to-transparent rounded-t-3xl"></div>

          <div className="py-10 px-4 md:py-16 md:px-10 relative z-10">
            <div
              className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#A1E9A5]/10 rounded-full blur-3xl z-0 pointer-events-none animate-pulse"
              style={{
                animation: "float 6s ease-in-out infinite, pulse 4s ease-in-out infinite",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#14532D]/90 to-transparent z-0 pointer-events-none transform transition-transform duration-1000"
              style={{ animation: "gradient-shift 8s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-[#A1E9A5]/20 to-transparent z-0 pointer-events-none"
              style={{ animation: "gradient-shift 10s ease-in-out infinite reverse" }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#A1E9A5]/10 to-transparent z-0 pointer-events-none"
              style={{ animation: "gradient-shift 12s ease-in-out infinite" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
              >
                <h2 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#A1E9A5] transform transition-all duration-700 hover:scale-105 whitespace-nowrap">
                  Contact us
                </h2>
                <div className="space-y-5">
                  <div
                    className={`transform transition-all duration-1000 delay-300 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  >
                    <p className="text-base md:text-lg font-bold uppercase tracking-widest mb-1 text-[#A1E9A5] hover:text-white transition-colors duration-300">
                      Maitri Dalvi
                    </p>
                    <p className="text-gray-300 text-xs font-light md:text-sm hover:text-[#A1E9A5] transition-colors duration-300">
                      <a
                        href="mailto:maitridalvi2004@gmail.com"
                        className="hover:underline hover:text-[#A1E9A5] transition-all duration-300 transform hover:translate-x-1 inline-block"
                      >
                        maitridalvi2004@gmail.com
                      </a>
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm hover:text-gray-200 transition-colors duration-300">
                      +91 8591255979
                    </p>
                  </div>
                  <div
                    className={`transform transition-all duration-1000 delay-500 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  >
                    <p className="text-base md:text-lg font-bold uppercase tracking-widest mb-1 text-[#A1E9A5] hover:text-white transition-colors duration-300">
                      Sameer Shelar
                    </p>
                    <p className="text-gray-300 text-xs md:text-sm hover:text-[#A1E9A5] transition-colors duration-300">
                      <a
                        href="mailto:sameershelar16@gmail.com"
                        className="hover:underline hover:text-[#A1E9A5] transition-all duration-300 transform hover:translate-x-1 inline-block"
                      >
                        sameershelar16@gmail.com
                      </a>
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm hover:text-gray-200 transition-colors duration-300">
                      +91 7039181616
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block" />

              <div
                className={`flex flex-col items-end justify-center space-y-6 mt-8 md:mt-0 transform transition-all duration-1000 delay-200 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
              >
                <div className="flex space-x-4 md:space-x-6">
                  <a
                    href="https://github.com/GDGVITM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                    className="transform transition-all duration-300 hover:-translate-y-2"
                  >
                    <IconWrapper>
                      <img
                        src="/git.png"
                        alt="Github"
                        className="w-8 h-8 md:w-12 md:h-12 object-cover filter transition-all duration-300 group-hover:brightness-110"
                      />
                    </IconWrapper>
                  </a>
                  <a
                    href="https://www.instagram.com/gdg_vit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="transform transition-all duration-300 hover:-translate-y-2"
                  >
                    <IconWrapper>
                      <img
                        src="/insta.png"
                        alt="Instagram"
                        className="w-8 h-8 md:w-12 md:h-12 object-cover filter transition-all duration-300 group-hover:brightness-110"
                      />
                    </IconWrapper>
                  </a>
                  <a
                    href="https://www.youtube.com/@gdscvitmumbai5838"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="transform transition-all duration-300 hover:-translate-y-2 delay-100"
                  >
                    <IconWrapper>
                      <img
                        src="/youtube.png"
                        alt="YouTube"
                        className="w-8 h-8 md:w-12 md:h-12 object-cover filter transition-all duration-300 group-hover:brightness-110"
                      />
                    </IconWrapper>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/google-developer-groups-vit-mumbai/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="transform transition-all duration-300 hover:-translate-y-2 delay-200"
                  >
                    <IconWrapper>
                      <img
                        src="/linkedin.png"
                        alt="LinkedIn"
                        className="w-8 h-8 md:w-12 md:h-12 object-cover filter transition-all duration-300 group-hover:brightness-110"
                      />
                    </IconWrapper>
                  </a>
                </div>

                <div className="text-right">
                  {slogans.map((text, index) => (
                    <h3
                      key={index}
                      className={`text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-wide text-[#A1E9A5] drop-shadow-lg transition-all duration-500 transform hover:scale-105 hover:text-white ${
                        index < typingIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: `${index * 0.8}s`,
                        animation: index < typingIndex ? "glow 2s ease-in-out infinite alternate" : "none",
                      }}
                    >
                      {text}
                    </h3>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`mt-10 pt-4 font-[GoodTiming] text-center lg:text-right text-xs md:text-sm text-gray-400 border-t border-[#333] transition-all duration-1000 delay-1000 hover:text-gray-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              © {new Date().getFullYear()} GDG VIT Mumbai. All rights reserved.
              <br />
              <span className="block mt-1 text-[10px] md:text-xs text-gray-500">
              Brought to life after <span className="text-[#A1E9A5]">countless coffee spills</span> and <span className="text-[#A1E9A5]">existential crises</span> by our <span className="font-bold text-white">Tech Team</span> &amp; <span className="font-bold text-white">Design Team</span>.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }

        @keyframes gradient-shift {
          0%, 100% { transform: translateX(0px); opacity: 0.8; }
          50% { transform: translateX(10px); opacity: 1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;