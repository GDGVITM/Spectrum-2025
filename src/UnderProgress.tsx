import React from "react";

const UnderProgress: React.FC = () => {
  return (
    <>
      <div
        className="relative font-[Audiowide] h-screen w-screen bg-black overflow-y-auto text-white flex flex-col items-center justify-center px-4 py-8 sm:py-10 text-center"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        <style>{`div.relative::-webkit-scrollbar { display: none; }`}</style>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-pulse w-full mt-34 flex justify-center">
          🚧 Wait for a while, we're cooking...
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 w-full flex justify-center">
          Maybe you can keep guessing :)
        </p>

        <div className="w-full max-w-[400px] flex justify-center mb-6 px-4">
          <img
            src="/minion.jpeg"
            alt="Under Development"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default UnderProgress;