// import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUsPage = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat flex flex-col items-start py-10 px-4" style={{ backgroundImage: 'url(src/assets/images/bg3.jpg)' }}>
            {/* Header Section */}
            <div className="text-center mb-8">
                {/*<h1 className="text-5xl font-bold text-green-700">Contact Us</h1>*/}
            </div>

            {/* Container for Contact Details and Chat/Message Section */}
            <div className="flex flex-col md:flex-row gap-12"> {/* Added gap for spacing */}

                {/* Contact Details Section */}
                <div className="md:w-1/2 flex flex-col items-start space-y-6 p-6 bg-white bg-opacity-80 rounded-2xl shadow-md ml-10">
                    <h2 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h2>

                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-green-600 w-8 h-8" />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800">Location</h3>
                            <p className="text-gray-600">123 Main St, Colombo, Sri Lanka</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaPhoneAlt className="text-green-600 w-6 h-6" />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800">Phone</h3>
                            <p className="text-gray-600">+94 77 255 9633</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-green-600 w-6 h-6" />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
                            <p className="text-gray-600">krushiupades@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Chat/Message Section */}
                <div className="md:w-1/2 flex flex-col items-center justify-center p-6 bg-white bg-opacity-80 rounded-2xl shadow-md">
                    <div className="w-full max-w-md">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUsPage;
