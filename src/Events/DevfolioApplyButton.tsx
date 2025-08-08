import React, { useEffect } from "react";

type DevfolioApplyButtonProps = {
  hackathonSlug?: string;
};

const DevfolioApplyButton: React.FC<DevfolioApplyButtonProps> = ({
  hackathonSlug,
}) => {
  useEffect(() => {
    // Load Devfolio SDK if not already loaded
    // if (!document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]')) {
    //   const script = document.createElement('script');
    //   script.src = 'https://apply.devfolio.co/v2/sdk.js';
    //   script.defer = true;
    //   script.async = true;
    //   document.head.appendChild(script);
    // }
    // window.open('https://apply.devfolio.co/v2/sdk.js', '_blank');
        // window.open('https://hackbuild.devfolio.co/', '_blank');

  }, []);

  const devfolioClick = () => {
    window.open('https://hackbuild.devfolio.co/', '_blank');
  }

  return (
    <div className="flex justify-center">
      <div 
        className="apply-button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer flex items-center justify-center min-h-[44px] min-w-[312px]" 
        // data-hackathon-slug={hackathonSlug} 
        data-button-theme="dark" 
        style={{ 
          height: '44px', 
          width: '312px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={devfolioClick}
      >
        Apply with Devfolio
      </div>
    </div>
  );
};

export default DevfolioApplyButton;

