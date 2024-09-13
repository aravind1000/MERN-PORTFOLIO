import React, { useState } from 'react';

function SideMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                className="fixed top-5 right-2 sm:right-1 bg-tertiary text-white p-4 rounded-full shadow-lg z-50"
                style={{ width: '60px', height: '60px' }}
            >
                <i className={`ri-${isOpen ? 'close' : 'menu'}-fill text-2xl`}></i>
            </button>

            {/* Full-screen background overlay */}
            <div
                className={`fixed inset-0 bg-black z-30 transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Full-screen side menu */}
            <div
                className={`fixed inset-0 h-full w-full bg-white shadow-lg p-8 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <nav>
                    <ul className="space-y-8 text-center">
                        <li>
                            <a
                                href="#intro"
                                onClick={(e) => handleSmoothScroll(e, 'intro')}
                                className="text-2xl text-gray-700"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => handleSmoothScroll(e, 'about')}
                                className="text-2xl text-gray-700"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                onClick={(e) => handleSmoothScroll(e, 'experience')}
                                className="text-2xl text-gray-700"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={(e) => handleSmoothScroll(e, 'projects')}
                                className="text-2xl text-gray-700"
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                href="#certificates"
                                onClick={(e) => handleSmoothScroll(e, 'certificates')}
                                className="text-2xl text-gray-700"
                            >
                                Certification
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, 'contact')}
                                className="text-2xl text-gray-700"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default SideMenu;
