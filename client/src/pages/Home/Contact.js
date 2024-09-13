import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Contact() {
    const { portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData || {};

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        try {
            const response = await axios.post("https://mern-portfolio-api-hazel.vercel.app/api/portfolio/submit-contact", formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                alert('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                alert('Something went wrong. Please try again later.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='contact'>
            <SectionTitle title="Let's Chat" />
            <div className='flex flex-row sm:flex-col items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-tertiary'>{"{"}</p>
                    {contact && Object.keys(contact)
                        .filter((key) => key !== '_id')
                        .map((key) => (
                            <p key={key} className='ml-5'>
                                <span className='text-tertiary'>{key} :</span>
                                <span className='text-tertiary'> {contact[key]}</span>
                            </p>
                        ))
                    }
                    <p className='text-tertiary'>{"}"}</p>
                </div>

                <div className='flex flex-col items-center w-full sm:w-full md:w-2/3 lg:w-1/2 bg-primary p-6 sm:p-8'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 sm:gap-6'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='border border-gray-500 py-2 sm:py-3 px-4 sm:px-5 rounded-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='border border-gray-500 py-2 sm:py-3 px-4 sm:px-5 rounded-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className='border border-gray-500 py-2 sm:py-3 px-4 sm:px-5 rounded-lg text-base sm:text-lg h-32 sm:h-40 resize-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
                        />
                        <button
                            type="submit"
                            className='flex items-center justify-center gap-2 border-2 border-tertiary text-tertiary px-6 py-3 rounded'
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                        {success && <p className={`mt-2 sm:mt-4 text-center text-sm sm:text-lg ${success.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>{success}</p>}
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;
