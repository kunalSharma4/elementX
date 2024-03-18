// components/ContactForm.js

import { useState } from 'react';
import axios from 'axios';


const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', formData);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred while sending the message');
        }
    };

    return (
        <section className='min-h-80 mt-20 flex justify-center'>
              <form className='block justify-center' onSubmit={handleSubmit}>
                <label className='flex justify-center'>Your Name</label>
            <input  className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block mb-3' type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <label className='justify-center flex'>Your Email</label>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block mb-3' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            <label className='flex justify-center'>Your Message</label>
            <textarea className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block mb-3' name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
            <button className=' border-2 rounded-lg flex  mt-8 ml-16' type="submit">Send Message</button>
              </form>
        </section>
         
     
   
    );
};

export default ContactForm;
