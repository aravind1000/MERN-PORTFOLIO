import React, { useState, useEffect, useContext } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import 'remixicon/fonts/remixicon.css';
import '../../index.css';

function Certifications() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { certifications = [] } = portfolioData; 
    const { darkMode } = useContext(DarkModeContext);

    // Navigate to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            certifications.length > 0 && prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Navigate to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            certifications.length > 0 && prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
        );
    };

    // Autoplay functionality
    useEffect(() => {
        if (certifications.length > 0) {
            const interval = setInterval(nextSlide, 5000);
            return () => clearInterval(interval);
        }
    }, [certifications.length]);

    return (
        <div id="certificates" className="h-screen sm:h-auto relative px-4 py-12">
            <SectionTitle title="Certifications" />

            <div className={`relative flex items-center justify-between py-8 ${darkMode ? 'bg-darkBg' : 'bg-primary'} rounded-lg overflow-hidden`}>
                
                {/* Slider container */}
                <div className="w-full overflow-hidden">
                    {certifications.length > 0 ? (
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {certifications.map((certification) => (
                                <div key={certification.id} className="min-w-full flex flex-col items-center justify-center px-4">
                                    <img
                                        draggable="false"
                                        src={certification.image || 'default-image.png'} 
                                        alt={certification.title || 'Certification Image'}
                                        className="h-64 w-full object-contain mb-4 sm:h-48"
                                    />
                                    <h1 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                                        {certification.title}
                                    </h1>
                                    <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
                                        {certification.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="min-w-full flex flex-col items-center justify-center px-4">
                            <p className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                                No certifications available.
                            </p>
                        </div>
                    )}
                </div>

                {/* Left arrow button */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all sm:left-0 sm:p-1`}
                >
                    <i className={`ri-arrow-left-s-line text-2xl ${darkMode ? 'text-white' : 'text-gray-600'} sm:text-xl`}></i>
                </button>

                {/* Right arrow button */}
                <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all sm:right-0 sm:p-1`}
                >
                    <i className={`ri-arrow-right-s-line text-2xl ${darkMode ? 'text-white' : 'text-gray-600'} sm:text-xl`}></i>
                </button>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-4">
                {certifications.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
                            index === currentIndex 
                                ? 'bg-tertiary' 
                                : darkMode 
                                    ? 'bg-gray-600' 
                                    : 'bg-gray-300'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;
