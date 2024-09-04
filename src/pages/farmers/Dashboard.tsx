// Import React (if not using JSX transformation)
// import React from 'react';
import Navbar from "./Navbar.tsx";

const Dashboard = () => {
    return (
        <div>
            {/* Navbar Component */}
            <Navbar />

            {/* Main Content */}
            <div className="flex justify-between px-20 py-10">
                {/* Card 1 */}
                <div className="w-1/3 bg-white shadow-lg rounded-lg p-6 mx-2">
                    <h3 className="text-xl font-semibold mb-4 text-center">Prices</h3>
                    <p>View and compare prices across different areas.</p>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Card 1 Image"
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                </div>

                {/* Card 2 */}
                <div className="w-1/3 bg-white shadow-lg rounded-lg p-6 mx-2">
                    <h3 className="text-xl font-semibold mb-4 text-center">Consultants</h3>
                    <p>Get in touch with consultants for advice and assistance.</p>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Card 2 Image"
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                </div>

                {/* Card 3 */}
                <div className="w-1/3 bg-white shadow-lg rounded-lg p-6 mx-2">
                    <h3 className="text-xl font-semibold mb-4 text-center">Categories</h3>
                    <p>Explore details by categories.</p>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Card 3 Image"
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
