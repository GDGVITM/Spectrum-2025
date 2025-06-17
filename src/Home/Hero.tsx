import React from 'react'

interface HeroSectionProps {
  isNight: boolean
  onExplore: () => void
}

const Hero: React.FC<HeroSectionProps> = ({ isNight, onExplore }) => {
  const base = `/assets/${isNight ? 'Night' : 'Sunset'}`

  return (
    <div className={`hero-container ${isNight ? 'Night' : 'day'}`}>
      <img src={`${base}/bg.png`} className="layer bg" alt="background" />
      <img
        src={`${base}/${isNight ? 'moon' : 'sun'}.png`}
        className="layer sun-moon"
        alt={isNight ? 'moon' : 'sun'}
      />
      <img src={`${base}/mountain-left.png`} className="layer mountain-left" alt="mountain-left" />
      <img src={`${base}/mountain-right.png`} className="layer mountain-right" alt="mountain-right" />

      {isNight && (
        <img
          src={`${base}/spectrum-text.png`}
          className="layer spectrum-text"
          alt="Spectrum"
        />
      )}

      <button
        className={`explore-button ${isNight ? 'dark' : 'light'}`}
        onClick={onExplore}
      >
        LET'S EXPLORE
      </button>
    </div>
  )
}

export default Hero;
