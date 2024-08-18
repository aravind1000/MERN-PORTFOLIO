import React, { useState, useEffect } from 'react';

function SideMover() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight * 0.2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <div className='fixed bottom-5 right-2 sm:bottom-10 sm:right-2'>
                    <button
                        onClick={scrollToTop}
                        aria-label="Go to top"
                    >
                        <i className="ri-arrow-up-circle-fill text-5xl text-secondary"></i>
                    </button>
                </div>
            )}
        </div>
    );
}

export default SideMover;
