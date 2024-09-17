import React, { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function Footer() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`py-10 ${darkMode ? 'bg-darkBg text-gray-300' : 'bg-white text-gray-700'}`}>
            <div className='h-[1px] w-full bg-gray-700' />
            <div className='flex items-center justify-center flex-col mt-10'>
                <h1>
                    {new Date().getFullYear()} &copy; Stay Connected
                </h1>
            </div>
        </div>
    );
}

export default Footer;