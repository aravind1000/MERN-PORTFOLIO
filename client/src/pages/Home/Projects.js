import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import 'remixicon/fonts/remixicon.css';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;

    return (
        <div id='projects'>
            <SectionTitle title="Projects" />
            <div className='flex py-10 gap-20 sm:flex-col' >
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-gray-500'}`}>
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    <img draggable="false" src={projects[selectedItemIndex].image} alt={projects[selectedItemIndex].title} className='h-80 w-80 object-cover rounded-lg shadow-lg' />
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl font-semibold'>{projects[selectedItemIndex].title}</h1>
                        <h1 className='text-gray-500 text-xl text-justify'>{projects[selectedItemIndex].description}</h1>
                        <div>
                            <ul className='text-gray-500'>
                                {projects[selectedItemIndex].technologies.map((tech, index) => (
                                    <li key={index} className='list-disc ml-5'>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <a
                                href={projects[selectedItemIndex].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center justify-center gap-2 border-2 border-tertiary text-tertiary px-6 py-3 rounded'
                            >
                                <i className="ri-github-fill text-xl"></i>
                                <span>View on GitHub</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
