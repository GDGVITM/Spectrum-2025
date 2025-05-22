import React from "react";
import Footer from "./components/Footer";

const UnderProgress: React.FC = () => {
  return (
    <>
    <div
      className="relative h-screen w-screen bg-black overflow-y-auto text-white flex flex-col items-center justify-center px-4 py-8 text-center"
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
    >
      <style>{`div.relative::-webkit-scrollbar {display: none;}`}</style>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 w-full mt-40 flex justify-center">
        🚧 Page Under Development
      </h1>
      <p className="text-lg sm:text-xl mb-8 w-full flex justify-center">
        We're currently working on this section. Check back soon!
      </p>
      <div className="w-[500px] flex justify-center">
        <img
          src="/bannerimg.png"
          alt="Under Development"
          className="w-full max-w-4xl"
        />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default UnderProgress;