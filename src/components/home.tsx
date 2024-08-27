// import React from 'react';

const Home = () => {
    return (
        <div id="home" className="relative h-[90vh] w-full bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: 'url(src/assets/images/bg2.jpg)' }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Container for content */}
            <div className="relative z-10 flex h-full items-center justify-center px-8">
                {/* Text Section */}
                <div className="text-center">
                    <h1 className="text-7xl font-bold mb-6 text-green-300 leading-tight">
                        Welcome to කෘෂි උපදෙස්
                    </h1>
                    <p className="text-2xl text-white px-28">
                        Discover sustainable farming practices, modern agricultural techniques, and innovations
                        that will shape the future of agriculture. Join us in promoting a greener and more
                        prosperous world through responsible farming.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
