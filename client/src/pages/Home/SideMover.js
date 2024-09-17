import React, { useState, useEffect, useContext, useCallback } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const SideMover = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { darkMode } = useContext(DarkModeContext);

    const toggleVisibility = useCallback(() => {
        setIsVisible(window.scrollY > window.innerHeight * 0.2);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [toggleVisibility]);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                aria-label="Go to top"
                className={`fixed bottom-5 right-1 sm:bottom-10 p-0 rounded-full shadow-lg z-50 flex items-center justify-center 
                            ${darkMode ? 'text-white' : 'text-secondary'} transition duration-200`}
                style={{ width: '40px', height: '40px' }}
            >
                <i className="ri-arrow-up-circle-fill text-5xl"></i>
            </button>
        )
    );
};

export default SideMover;
