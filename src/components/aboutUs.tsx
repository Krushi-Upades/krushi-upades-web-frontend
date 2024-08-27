// import React from 'react';

const About = () => {
    return (
        <section id="about-us">
        <div className="flex flex-col md:flex-row items-center h-[90vh] bg-white p-8 overflow-hidden">
            {/* Image Section */}
            <div className="md:w-2/5 flex items-center justify-center p-4">
                <img
                    src="src/assets/images/plant2.jpg"
                    alt="About Us"
                    className="w-full h-[70vh] max-w-md rounded-lg"
                />
            </div>

            {/* Text Section */}
            <div className="md:w-3/5 flex flex-col justify-center p-8 shadow-2xl rounded-2xl bg-green-50">
                <h1 className="text-6xl font-bold mb-6 text-green-800 text-center">About Us</h1>
                <p className="text-xl text-gray-700 text-center leading-relaxed mb-4">
                    Welcome to our agriculture platform! We are dedicated to providing farmers and agricultural
                    enthusiasts with the tools and resources they need to grow sustainably and efficiently.
                    Our mission is to promote innovative farming techniques that not only increase productivity
                    but also protect the environment. Join us in our journey to create a greener and more prosperous future for all.
                </p>
                <p className="text-xl text-gray-700 text-center leading-relaxed">
                    Whether you're a seasoned farmer or just starting out, we are here to support you every step of the way.
                    Our platform offers a wide range of resources, including expert advice, modern farming practices, and the latest
                    agricultural technology. Together, we can cultivate a better tomorrow.
                </p>
            </div>
        </div>
        </section>
    );
};

export default About;
