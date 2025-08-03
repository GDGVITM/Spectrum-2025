import React from "react";
import logo from "../assets/sponsors/logo.png"; // adjust path if needed

type DevfolioApplyButtonProps = {
  hackathonSlug: string;
};

const DevfolioApplyButton: React.FC<DevfolioApplyButtonProps> = ({
  hackathonSlug,
}) => {
  return (
    <a
      href={`https://devfolio.co/hackathons/${hackathonSlug}/apply`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Apply with Devfolio for ${hackathonSlug}`}
      className="
        inline-flex items-center gap-3
        px-6 py-3
        rounded-lg
        border-2 border-[#A1E9A5]
        hover:border-green-400
        transition-all duration-300
        text-white
        font-bold
        text-lg
        hover:scale-105
        hover:shadow-lg
        hover:shadow-green-400/20
      "
      style={{ minHeight: 50 }}
    >
      <div
        className="
          flex items-center justify-center
          rounded-sm
          h-8 w-8
        "
      >
        <img
          src={logo}
          alt="Devfolio"
          className="h-full w-full object-contain"
        />
      </div>
      <span className="leading-none">Apply with Devfolio</span>
    </a>
  );
};

export default DevfolioApplyButton;
