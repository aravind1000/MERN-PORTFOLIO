import React, { useState, useContext } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { DarkModeContext } from '../../contexts/DarkModeContext';

function Contact() {
    const { portfolioData } = useSelector((state) => state.root);
    const { contact = {} } = portfolioData || {};
    
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    
    const { darkMode } = useContext(DarkModeContext);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        try {
            const response = await axios.post("https://mern-portfolio-api-hazel.vercel.app/api/portfolio/submit-contact", formData, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.status === 200) {
                setSuccess('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSuccess('Something went wrong. Please try again later.');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred. Please try again later.';
            setSuccess(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='contact' className={`h-screen sm:h-auto ${darkMode ? 'bg-darkBg text-gray-300' : 'text-gray-700'}`}>
            <SectionTitle title="Let's Chat" />
            <div className='flex flex-row sm:flex-col sm:space-y-6 items-center justify-between h-full'>
                <div className='flex flex-col gap-2'>
                    <p className='text-tertiary'>{"{"}</p>
                    {Object.keys(contact).filter((key) => key !== '_id').map((key) => (
                        <p key={key} className='ml-5'>
                            <span className='text-tertiary'>{key} :</span>
                            <span className='text-tertiary'> {contact[key]}</span>
                        </p>
                    ))}
                    <p className='text-tertiary'>{"}"}</p>
                </div>
                <div className={`flex flex-col items-center w-full sm:w-full md:w-2/3 lg:w-1/2 ${darkMode ? 'bg-darkBg' : 'bg-primary'}`}>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 sm:gap-6'>
                        {['name', 'email', 'message'].map((field) => (
                            field === 'message' ? (
                                <textarea
                                    key={field}
                                    name={field}
                                    placeholder="Your Message"
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                    aria-label="Message"
                                    className={`border ${darkMode ? 'border-gray-600' : 'border-gray-500'} py-2 sm:py-3 px-4 sm:px-5 rounded-lg text-black sm:text-lg h-32 sm:h-40 resize-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent`}
                                />
                            ) : (
                                <input
                                    key={field}
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                    aria-label={field.charAt(0).toUpperCase() + field.slice(1)}
                                    className={`border ${darkMode ? 'border-gray-600' : 'border-gray-500'} py-2 sm:py-3 px-4 sm:px-5 rounded-lg text-black sm:text-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent`}
                                />
                            )
                        ))}
                        <button
                            type="submit"
                            className={`flex items-center justify-center gap-2 border-2 ${darkMode ? 'border-gray-600 text-gray-300' : 'border-tertiary text-tertiary'} px-6 py-3 rounded`}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="loader"></span>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                        {success && (
                            <p className={`mt-2 sm:mt-4 text-center text-sm sm:text-lg ${success.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                {success}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
