import React, { useContext } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function About() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { skills = [], image, description1 = 'Default description 1.', description2 = 'Default description 2.' } = about; // Default fallbacks

    const { darkMode } = useContext(DarkModeContext);

    return (
        <div id='about' className={`h-screen sm:h-auto flex flex-col justify-center ${darkMode ? 'bg-darkBg' : 'bg-white'}`}>
            <SectionTitle title="About" />
            <div className={`flex flex-row sm:flex-col md:flex-row w-full items-center gap-6 sm:gap-8 md:gap-16 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className='w-full sm:w-full md:w-1/2 flex justify-center'>
                    <div className='flex justify-center'>
                        <div className='h-[20rem] w-full'>
                            {image && (
                                <img
                                    src={image}
                                    alt="My Picture"
                                    draggable="false"
                                    className='h-full w-full object-cover rounded-lg shadow-lg'
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col gap-4 sm:gap-5 w-full sm:w-full md:w-1/2`}>
                    <p className={`text-base text-justify ${darkMode ? 'text-gray-300' : 'text-gray-500'} sm:text-lg md:text-xl font-semibold`}>
                        {description1}
                    </p>
                    <p className={`text-base text-justify ${darkMode ? 'text-gray-300' : 'text-gray-500'} sm:text-lg md:text-xl font-semibold`}>
                        {description2}
                    </p>
                </div>
            </div>

            <div className='py-8 sm:py-10'>
                <h2 className={`text-tertiary text-xl text-justify sm:text-2xl mb-4 sm:mb-5 ${darkMode ? 'text-gray-300' : ''}`}>
                    I’ve been exploring and working with these technologies recently:
                </h2>
                <div className='flex flex-wrap gap-4 sm:gap-6'>
                    {skills.map((skill) => (
                        <div key={skill} className={`border border-tertiary py-2 px-4 sm:py-3 sm:px-8 rounded-lg ${darkMode ? 'bg-gray-800' : ''}`}>
                            <h3 className='text-tertiary text-base sm:text-lg'>{skill}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
