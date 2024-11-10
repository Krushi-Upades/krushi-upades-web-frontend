// import React from 'react';
import Navbar from "./Navbar.tsx";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="h-screen">
            {/* Navbar Component */}
            <Navbar />

            {/* Main Content */}
            <div className="flex justify-center items-center">
                {/* Cards Section */}
                <div className="flex justify-between w-full px-20 mt-10">
                    {/* Card 1 */}
                    <div className="w-1/3 h-[600px] bg-green-50 shadow-lg rounded-2xl p-6 mx-4">
                        <Link to="/farmer_price">
                            {/* Color bar for Prices */}
                            <div className="w-full h-2 bg-blue-500 rounded-t-md"></div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">Prices</h3>
                            <p>Comparing prices across areas helps find the best value, optimize your budget, and make cost-effective choices.</p>
                            <img
                                src="src/assets/images/price.jpg"
                                alt="Card 1 Image"
                                className="w-full h-96 object-cover rounded-md mt-8"
                            />
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="w-1/3 h-[600px] bg-green-50 shadow-lg rounded-2xl p-6 mx-4">
                        <Link to="/farmer_consultant">
                        {/* Color bar for Consultants */}
                        <div className="w-full h-2 bg-green-500 rounded-t-md"></div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Consultants</h3>
                        <p>Consultants provide expert advice, technical support, and tailored solutions to improve project efficiency, decision-making, and overall success.</p>
                        <img
                            src="src/assets/images/consultant1.jpg"
                            alt="Card 2 Image"
                            className="w-full h-96 object-cover rounded-md mt-8"
                        />
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="w-1/3 h-[600px] bg-green-50 shadow-lg rounded-2xl p-6 mx-4">
                        <Link to="/farmer_category">
                        {/* Color bar for Categories */}
                        <div className="w-full h-2 bg-red-500 rounded-t-md"></div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">Categories</h3>
                        <p>Categorizing simplifies complex topics, focusing on key areas to enhance decision-making and ensure project success.</p>
                        <img
                            src="src/assets/images/category.jpg"
                            alt="Card 3 Image"
                            className="w-full h-96 object-cover rounded-md mt-8"
                        />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
