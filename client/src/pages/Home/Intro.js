import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName = 'First', lastName = 'Last', welcomeText = '', description = '', caption = '', resume } = intro;
  const { darkMode } = useContext(DarkModeContext);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fade-slide-up h-screen w-full flex flex-col items-start justify-center gap-7 sm:w-full ${darkMode ? 'bg-darkBg' : 'bg-primary'}`}
    >
      <h1 className={`${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{welcomeText}</h1>
      <h1 className={`text-7xl sm:text-3xl text-secondary font-semibold`}>
        {firstName} {lastName}
      </h1>
      <h1 className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-7xl sm:w-full sm:text-2xl font-semibold`}>
        {caption}
      </h1>
      <p className={`w-2/3 text-justify sm:w-full sm:text-justify ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
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
