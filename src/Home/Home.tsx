import React, { useState } from 'react';
import Hero from './Hero';

const Home: React.FC = () => {
  const [isNight, setIsNight] = useState(false);

  return (
    <div>
      <Hero isNight={isNight} onExplore={() => setIsNight(true)} />
    </div>
  );
};

export default Home;