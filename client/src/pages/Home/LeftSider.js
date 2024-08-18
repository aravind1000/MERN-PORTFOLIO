import React from 'react';

const link = {
    github: "https://github.com/aravind1000",
    linkedin: "https://www.linkedin.com/in/aravind-a-48a387201/",
    mail: "mailto:aravind30052003@gmail.com",
    twitter: "https://x.com/aravind_a___",
    instagram: "https://www.instagram.com/aravind_a___/",
};

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href={link.github} target="_blank" rel="noopener noreferrer"><i className="ri-github-fill text-gray-600 text-xl"></i></a>
                    <a href={link.linkedin} target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-box-fill text-gray-600 text-xl"></i></a>
                    <a href={link.mail} target="_blank" rel="noopener noreferrer"><i className="ri-mail-line text-gray-600 text-xl"></i></a>
                    <a href={link.twitter} target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill text-gray-600 text-xl"></i></a>
                    <a href={link.instagram} target="_blank" rel="noopener noreferrer"><i className="ri-instagram-fill text-gray-600 text-xl"></i></a>
                </div>
                <div className='w-[1px] h-32 bg-black sm:hidden'></div>
            </div>
        </div>
    );
}

export default LeftSider;
