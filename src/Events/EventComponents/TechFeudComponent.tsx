import React from 'react';
import { Arrow, RegisterButton } from '../svg';
import techfeudImage from '../posters/techfeud.png';

const TechFeudComponent = () => {
  return (
    <>
    
      <div>
        <h1 className="text-4xl font-bold flex flex-row items-center">
          Tech Feud
          <Arrow width={80} height={80}/>
        </h1>
        <p className="mt-4 max-w-full">
          Tech Feud is a dynamic three-round competition designed to sharpen placement-relevant skills through a mix of aptitude, creativity, and technical knowledge. Each round is crafted to challenge participants in different areas.
        </p>
        <p className="mt-2 font-bold">DATE: 15th & 16th April '25</p>
        <button 
          type="button" 
          className='ml-10 mt-4 cursor-pointer' 
          onClick={() => window.open('https://google.com', '_blank')}
        >
          <RegisterButton/>
        </button>
      </div>
    {/* </div> */}
    </>
  );
};

export default TechFeudComponent;