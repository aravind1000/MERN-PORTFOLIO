import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function SideMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode } = useContext(DarkModeContext);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden'; 
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setIsOpen(false);
            document.body.style.overflow = 'auto'; 
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    return (
        <div>
            <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="fixed top-5 right-2 sm:right-1 bg-tertiary text-white p-0 rounded-full shadow-lg z-50 flex items-center justify-center"
                style={{ width: '40px', height: '40px' }}
                aria-expanded={isOpen}
            >
                <i className={`ri-${isOpen ? 'close' : 'menu'}-fill text-xl`}></i>
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black z-30 transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Side Menu */}
            <div
                className={`fixed inset-0 h-full w-full shadow-lg p-8 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${darkMode ? 'bg-darkBg' : 'bg-white'}`}
            >
                <nav className="h-full flex items-center justify-center">
                    <ul className="space-y-8 text-center">
                        {['about', 'experience', 'projects', 'certificates', 'contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    onClick={(e) => handleSmoothScroll(e, item)}
                                    className={`text-2xl ${darkMode ? 'text-white' : 'text-gray-700'}`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default SideMenu;
