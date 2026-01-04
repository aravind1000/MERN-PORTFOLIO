import React, { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName = 'First', lastName = 'Last', welcomeText = '', description = '', caption = '', resume } = intro;
  const { darkMode } = useContext(DarkModeContext);
  
  const [displayName, setDisplayName] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const fullName = `${firstName} ${lastName}`;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    let iterations = 0;
    const maxIterations = fullName.length;

    const interval = setInterval(() => {
      setDisplayName(
        fullName
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) {
              return fullName[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iterations += 1 / 3;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayName(fullName);
        setIsAnimating(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [firstName, lastName]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fade-slide-up h-screen w-full flex flex-col items-start justify-center gap-7 sm:w-full ${darkMode ?  'bg-darkBg' : 'bg-primary'}`}
    >
      <h1 className={`${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{welcomeText}</h1>
      <h1 
        className={`text-7xl sm:text-3xl text-secondary font-semibold ${isAnimating ? 'tracking-wider' : ''}`}
        style={{ fontFamily: 'monospace' }}
      >
        {displayName}
      </h1>
      <h1 className={`${darkMode ? 'text-gray-300' :  'text-gray-500'} text-7xl sm:w-full sm:text-2xl font-semibold`}>
        {caption}
      </h1>
      <p className={`w-2/3 text-justify sm:w-full sm:text-justify ${darkMode ?  'text-gray-300' : 'text-gray-500'}`}>
        {description}
      </p>
      <div className='flex gap-5'>
        <button
          className='border-2 border-tertiary text-tertiary px-3 py-3 rounded'
          onClick={scrollToAbout}
          aria-label="Get Started"
        >
          Get Started
        </button>
        {resume && (
          <a
            href={resume}
            download
            className='border-2 border-tertiary text-tertiary px-3 py-3 rounded flex items-center gap-2'
            aria-label="Download Resume"
          >
            Resume
          </a>
        )}
      </div>
    </div>
  );
}

export default Intro;
