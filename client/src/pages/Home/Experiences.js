import React, { useContext } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function Experiences() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { experiences = [] } = portfolioData; 

    const { darkMode } = useContext(DarkModeContext);

    return (
        <div id='experience' className={`h-screen sm:h-auto flex flex-col justify-center ${darkMode ? 'bg-darkBg' : 'bg-white'}`}>
            <SectionTitle title="Experience" />
            <div className={`flex py-10 gap-20 ${darkMode ? 'bg-darkBg' : ''} sm:flex-col`}>
                <div className={`flex flex-col gap-10 border-l-2 ${darkMode ? 'border-gray-600' : 'border-[#135e4c82]'} w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full`}>
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id || index} 
                            onClick={() => setSelectedItemIndex(index)}
                            className='cursor-pointer'
                            aria-label={`Select experience from ${experience.company} for the period ${experience.period}`} 
                        >
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31]' : (darkMode ? 'text-gray-300' : 'text-gray-500')}`}>
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className={`text-secondary text-xl font-semibold ${darkMode ? 'text-gray-300' : ''}`}>
                        {experiences[selectedItemIndex]?.title || 'Title not available'}
                    </h1>
                    <h1 className={`text-tertiary text-xl ${darkMode ? 'text-gray-300' : ''}`}>
                        {experiences[selectedItemIndex]?.company || 'Company not available'}
                    </h1>
                    <p className={`text-justify ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        {experiences[selectedItemIndex]?.description || 'Description not available'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
