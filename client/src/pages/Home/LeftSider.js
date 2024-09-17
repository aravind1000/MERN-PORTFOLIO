import React, { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const links = {
    github: "https://github.com/aravind1000",
    linkedin: "https://www.linkedin.com/in/aravind-a-48a387201/",
    coding: "https://leetcode.com/u/aravind30052003/",
    mail: "mailto:aravind30052003@gmail.com",
    twitter: "https://x.com/aravind_a___",
    instagram: "https://www.instagram.com/aravind_a___/",
};

function LeftSider() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className='fade-slide-up fixed left-0 bottom-0 px-10 sm:static mt-4'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href={links.github} target="_blank" rel="noopener noreferrer">
                        <i className={`ri-github-fill text-${darkMode ? 'white' : 'gray-600'} text-2xl`}></i>
                    </a>
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className={`ri-linkedin-box-fill text-${darkMode ? 'white' : 'gray-600'} text-2xl`}></i>
                    </a>
                    <a href={links.coding} target="_blank" rel="noopener noreferrer">
                        <i className={`ri-code-s-slash-line text-${darkMode ? 'white' : 'gray-600'} text-2xl`}></i>
                    </a>
                    <a href={links.mail} target="_blank" rel="noopener noreferrer">
                        <i className={`ri-mail-line text-${darkMode ? 'white' : 'gray-600'} text-2xl`}></i>
                    </a>
                    <a href={links.twitter} target="_blank" rel="noopener noreferrer">
                        <i className={`ri-twitter-fill text-${darkMode ? 'white' : 'gray-600'} text-2xl`}></i>
                    </a>
                    <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                        <i className={`ri-instagram-fill text-${darkMode ? 'white' : 'gray-600'} text-2xl`}></i>
                    </a>
                </div>
                <div className={`${darkMode ? 'w-[1px] h-32 bg-white sm:hidden' : 'w-[1px] h-32 bg-black sm:hidden'}`}></div>
            </div>
        </div>
    );
}

export default LeftSider;