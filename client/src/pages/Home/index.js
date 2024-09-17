import React, { useContext } from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';
import SideMover from './SideMover';
import SideMenu from './SideMenu';
import { useSelector } from 'react-redux';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? 'bg-darkBg text-gray-300' : 'bg-white text-gray-900'}`}>
      <Header />
      {portfolioData ? (
        <div className='bg-primary px-40 sm:px-5'>
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Certifications />
          <Contact />
          <LeftSider />
          <SideMover />
          <div className='hidden sm:block'>
            <SideMenu />
          </div>
          <Footer />
        </div>
      ) : (
        <div className='flex justify-center items-center h-screen'>
          <p className='text-xl text-gray-500'>Loading portfolio data...</p>
        </div>
      )}
    </div>
  );
}

export default Home;
