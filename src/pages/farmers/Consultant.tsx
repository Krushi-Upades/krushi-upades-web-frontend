import Navbar from "./Navbar.tsx";
// Import necessary icons (use any icon library like FontAwesome, Material Icons, etc.)
import { FaComments } from 'react-icons/fa';
import { MdFeedback } from "react-icons/md";
import { useState } from "react";

const Consultants = () => {
    // State for managing the feedback popup visibility and the selected consultant
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [selectedConsultant, setSelectedConsultant] = useState(null);

    // Sample data for consultants
    const consultants = [
        {
            name: 'Keshali Dhananjana',
            title: 'Senior Consultant',
            description: 'Specializes in business strategy and operations.',
            image: 'src/assets/images/profile.png',
        },
        {
            name: 'Viranga Dias',
            title: 'Financial Advisor',
            description: 'Expert in financial planning and investments.',
            image: 'src/assets/images/profile1.png',
        },
        {
            name: 'Keshali Dhananjana',
            title: 'Senior Consultant',
            description: 'Specializes in business strategy and operations.',
            image: 'src/assets/images/profile.png',
        },
        {
            name: 'Viranga Dias',
            title: 'Financial Advisor',
            description: 'Expert in financial planning and investments.',
            image: 'src/assets/images/profile1.png',
        },
        {
            name: 'Keshali Dhananjana',
            title: 'Senior Consultant',
            description: 'Specializes in business strategy and operations.',
            image: 'src/assets/images/profile.png',
        },
        {
            name: 'Viranga Dias',
            title: 'Financial Advisor',
            description: 'Expert in financial planning and investments.',
            image: 'src/assets/images/profile1.png',
        },
    ];

    // Handle feedback icon click
    const handleFeedbackClick = ({consultant}: { consultant: any }) => {
        setSelectedConsultant(consultant);
        setShowFeedbackForm(true); // Show the feedback form
    };

    // Handle feedback form close
    const handleCloseForm = () => {
        setShowFeedbackForm(false);
        setSelectedConsultant(null); // Reset the selected consultant
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="py-10">
                <h1 className="text-center text-3xl font-bold mb-10">Our Consultants</h1>

                {/* Cards container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-40">
                    {consultants.map((consultant, index) => (
                        <div
                            key={index}
                            className={`relative bg-green-50 shadow-md rounded-lg p-6 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                            {/* Left part - Profile image */}
                            <div className="w-1/5 flex justify-center">
                                <img
                                    src={consultant.image}
                                    alt={consultant.name}
                                    className="rounded-full w-24 h-24 object-cover"
                                />
                            </div>

                            {/* Right part - Details */}
                            <div className="w-4/5 pl-6">
                                <h2 className="text-xl font-semibold">{consultant.name}</h2>
                                <p className="text-gray-600">{consultant.title}</p>
                                <p className="text-gray-700">{consultant.description}</p>
                            </div>

                            {/* Bottom-right corner - Feedback and Chat Icons */}
                            <div className="absolute bottom-4 right-4 flex space-x-4">
                                <MdFeedback
                                    className="text-green-600 cursor-pointer"
                                    title="Feedback"
                                    size={30}
                                    onClick={() => handleFeedbackClick({consultant: consultant})} // Open feedback form
                                />
                                <FaComments className="text-green-700 cursor-pointer" title="Chat" size={30} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feedback Form Popup */}
                {showFeedbackForm && selectedConsultant && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
                            <h2 className="text-2xl font-semibold mb-4">Feedback for {selectedConsultant["name"]}</h2>
                            <form>
                                {/* Feedback Title */}
                                <div className="mb-4">
                                    <label className="block text-gray-700">Title</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border rounded"
                                        placeholder="Enter feedback title"
                                    />
                                </div>

                                {/* Feedback Description */}
                                <div className="mb-4">
                                    <label className="block text-gray-700">Description</label>
                                    <textarea
                                        className="w-full p-2 border rounded"
                                        placeholder="Enter feedback description"
                                        rows={4}
                                    />
                                </div>

                                {/* Feedback Rating */}
                                <div className="mb-4">
                                    <label className="block text-gray-700">Rating</label>
                                    <select className="w-full p-2 border rounded">
                                        <option value="5">5 - Excellent</option>
                                        <option value="4">4 - Good</option>
                                        <option value="3">3 - Average</option>
                                        <option value="2">2 - Poor</option>
                                        <option value="1">1 - Very Poor</option>
                                    </select>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        onClick={handleCloseForm}
                                        className="bg-gray-500 text-white px-4 py-2 rounded"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-4 py-2 rounded"
                                    >
                                        Submit Feedback
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Consultants;
