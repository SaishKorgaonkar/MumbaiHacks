import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission (you would normally handle the API call here)
    console.log(formData);

    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset the form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-teal-400">Contact Us</h1>

      {isSubmitted ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
          <p className="text-gray-300">Your message has been sent successfully. We'll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
            <input
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="subject">Subject</label>
            <input
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-500"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-teal-500"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-bold transition duration-300 ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-400 text-gray-900"}`}
            disabled={isLoading} // Disable the button during loading
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}

      {/* Contact Information */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-300">Address: 123 Marketing St, Mumbai, India</p>
        <p className="text-gray-300">Phone: +91 123 456 7890</p>
        <p className="text-gray-300">Email: contact@marketingplatform.com</p>
      </div>

      {/* Google Maps Embed */}
      <div className="mt-8 w-full max-w-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754824.4850484447!2d77.29734037663484!3d20.59368488514075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4fefb6793e7d1d%3A0xc0aa1cfb594b6d98!2sIndia!5e0!3m2!1sen!2sus!4v1620952251743!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Company Location"
        />
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition duration-300">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
