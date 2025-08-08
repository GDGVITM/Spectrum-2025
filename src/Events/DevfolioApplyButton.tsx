import React, { useEffect } from "react";
import devfolioLogoImg from "../assets/sponsors/logo.png"; // Place your logo image in this path

type DevfolioApplyButtonProps = {
  hackathonSlug: string;
};

const DevfolioApplyButton: React.FC<DevfolioApplyButtonProps> = ({
  hackathonSlug,
}) => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.defer = true;
      script.async = true;
      document.head.appendChild(script);
    }
  }, [hackathonSlug]);

  return (
    <div className="flex justify-center">
      <button
        className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#23272F] text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300"
        style={{ minHeight: 44, minWidth: 312, background: "#23272F" }}
        onClick={() => window.open(`https://${hackathonSlug}.devfolio.co/`, "_blank")}
        type="button"
      >
        <img src={devfolioLogoImg} alt="Devfolio Logo" style={{ width: 28, height: 28 }} />
        Apply with Devfolio
      </button>
    </div>
  );
};


export default DevfolioApplyButton;
