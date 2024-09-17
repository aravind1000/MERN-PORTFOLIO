import React, { useContext } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { projects = [] } = portfolioData; 

    const { darkMode } = useContext(DarkModeContext);

    return (
        <div id='projects' className={`h-screen sm:h-auto flex flex-col justify-center ${darkMode ? 'bg-darkBg' : 'bg-white'}`}>
            <SectionTitle title="Projects" />
            <div className={`flex py-10 gap-20 ${darkMode ? 'text-gray-300' : 'text-gray-700'} sm:flex-col`} >
                <div className={`flex flex-col gap-10 border-l-2 ${darkMode ? 'border-gray-600' : 'border-[#135e4c82]'} w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full`}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id || index}
                            onClick={() => setSelectedItemIndex(index)}
                            className='cursor-pointer'
                            aria-label={`Select project: ${project.title}`} 
                        >
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31]' : (darkMode ? 'text-gray-300' : 'text-gray-500')}`}>
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className={`flex items-center justify-center gap-10 sm:flex-col`}>
                    {projects[selectedItemIndex] && (
                        <>
                            <img
                                draggable="false"
                                src={projects[selectedItemIndex].image || 'default-image.png'}
                                alt={projects[selectedItemIndex].title || 'Project Image'}
                                className={`h-80 w-80 object-cover rounded-lg shadow-lg ${darkMode ? 'opacity-80' : ''}`}
                            />
                            <div className='flex flex-col gap-5'>
                                <h1 className={`text-secondary text-xl font-semibold ${darkMode ? 'text-gray-300' : ''}`}>
                                    {projects[selectedItemIndex].title || 'Title not available'}
                                </h1>
                                <h1 className={`text-gray-500 text-xl text-justify ${darkMode ? 'text-gray-100' : ''}`}>
                                    {projects[selectedItemIndex].description || 'Description not available'}
                                </h1>
                                <div>
                                    <ul className={`text-gray-500 ${darkMode ? 'text-gray-100' : ''}`}>
                                        {projects[selectedItemIndex].technologies?.map((tech, index) => (
                                            <li key={tech} className='list-disc ml-5'>{tech}</li>
                                        )) || <li>No technologies listed</li>} 
                                    </ul>
                                </div>
                                <div>
                                    <a
                                        href={projects[selectedItemIndex].link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex items-center justify-center gap-2 border-2 border-tertiary text-tertiary px-6 py-3 rounded'
                                        aria-label={`View ${projects[selectedItemIndex].title} on GitHub`} 
                                    >
                                        <i className="ri-github-fill text-xl"></i>
                                        <span>View on GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;
