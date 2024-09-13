import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import 'remixicon/fonts/remixicon.css';

function Certifications() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { certifications } = portfolioData;

    return (
        <div id='certificates'>
            <SectionTitle title="Certifications" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                {/* Sidebar for certification titles */}
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {certifications.map((certification, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedItemIndex(index)}
                            className='cursor-pointer'
                        >
                            <h1
                                className={`text-xl px-5 ${selectedItemIndex === index
                                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3'
                                    : 'text-gray-500'
                                    }`}
                            >
                                {certification.title}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Content for the selected certification */}
                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    <img
                        draggable="false"
                        src={certifications[selectedItemIndex]?.image}
                        alt={certifications[selectedItemIndex]?.title}
                        aria-label={`Certification image for ${certifications[selectedItemIndex]?.title}`}
                        className='h-80 w-80 object-cover rounded-lg shadow-lg'
                    />
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl font-semibold'>
                            {certifications[selectedItemIndex]?.title}
                        </h1>
                        <p className='text-gray-500 text-xl text-justify'>
                            {certifications[selectedItemIndex]?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
