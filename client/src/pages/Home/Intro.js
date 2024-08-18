import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption, resume } = intro;

  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10' id='intro'>
      <h1 className='text-gray-500'>{welcomeText || ''}</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>{firstName || ''} {lastName || ''}</h1>
      <h1 className='text-7xl sm:text-3xl text-gray-500 font-semibold'>{caption || ''}</h1>
      <p className='text-gray-500 w-2/3 text-justify sm:text-justify'>{description || ''}</p>
      <div className='flex gap-5'>
        <button
          className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'
          onClick={scrollToAbout}
        >
          Get Started
        </button>
        <a
          href={resume}
          download
          className='border-2 border-tertiary text-tertiary px-10 py-3 rounded flex items-center gap-2'
        >
          Resume
        </a>
      </div>

      <div ref={aboutRef} />
    </div>
  );
}

export default Intro;
