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
        bg-white
        px-6 py-2
        rounded-md
        shadow-sm
        border border-gray-300
        hover:shadow-md
        transition-all duration-200
        text-gray-800
        font-medium
        text-sm
      "
      style={{ minHeight: 40 }}
    >
      <div
        className="
          flex items-center justify-center
          rounded-sm
          h-6 w-6
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
