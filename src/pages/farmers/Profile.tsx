import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const FarmerProfile = () => {
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

    // Function to open/close the Edit Profile popup
    const handleEditProfilePopup = () => setIsEditProfileOpen(!isEditProfileOpen);

    // Function to open/close the Change Password popup
    const handleChangePasswordPopup = () => setIsChangePasswordOpen(!isChangePasswordOpen);

    return (
        <div className="min-h-screen">
            {/* Top Bar with Back Arrow and Title */}
            <div className="bg-green-700 text-white p-4 flex items-center">
                <button className="mr-4">
                    <Link to="/farmer_dashboard">
                        <FaArrowLeft className="h-6 w-6 text-white" />
                    </Link>
                </button>
                <h1 className="text-2xl font-bold">My Profile</h1>
            </div>

            {/* Profile Information */}
            <div className="p-6 max-w-4xl mx-auto bg-green-50 shadow-lg rounded-2xl mt-20">
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 p-6">
                    {/* Left Part - Image and Buttons */}
                    <div className="md:w-1/4 flex flex-col items-center mr-8">
                        <img
                            src="src/assets/images/profile1.png"
                            alt="farmer profile"
                            className="w-32 h-32 rounded-full mb-8"
                        />
                        <button
                            className="bg-green-700 text-white px-4 py-2 rounded-xl mb-2"
                            onClick={handleEditProfilePopup}
                        >
                            Edit Profile
                        </button>
                        <button
                            className="bg-green-700 text-white px-4 py-2 rounded-xl"
                            onClick={handleChangePasswordPopup}
                        >
                            Change Password
                        </button>
                    </div>

                    {/* Middle Part - Name, Age, Email, and Contact */}
                    <div className="md:w-1/3 mx-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-1">නම:</label>
                            <p className="text-gray-600">සුනිල් ප්‍රසන්න</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-1">වයස:</label>
                            <p className="text-gray-600">45</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-1">විද්යුත් තැපෑල:</label>
                            <p className="text-gray-600">sunil.farmer@example.com</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-1">දුරකථන අංකය:</label>
                            <p className="text-gray-600">077-1234567</p>
                        </div>
                    </div>

                    {/* Right Part - Other Details */}
                    <div className="md:w-1/3 ml-2 space-y-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-1">ප්‍රදේශය:</label>
                            <p className="text-gray-600">කුරුණෑගල</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-1">විශේෂිත වගා වර්ග:</label>
                            <p className="text-gray-600">තක්කාලි, බත් ඉරිඟු, අල</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-1">අවශ්‍යතාවයන්:</label>
                            <p className="text-gray-600">ප්‍රාග්ධාන භෝග වගාව සඳහා සහය</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Card for Editing Profile */}
            {isEditProfileOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-[600px]">
                        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

                        {/* Form for Edit Profile - Two Sides */}
                        <div className="flex space-x-6 mb-6">
                            {/* Left Side - Personal Details */}
                            <div className="w-1/2 space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Name:</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        defaultValue="සුනිල් ප්‍රසන්න"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Age:</label>
                                    <input
                                        type="number"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        defaultValue="45"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email:</label>
                                    <input
                                        type="email"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        defaultValue="sunil.farmer@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Contact Number:</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        defaultValue="077-1234567"
                                    />
                                </div>
                            </div>

                            {/* Right Side - Location, Special Crops, and Requirements */}
                            <div className="w-1/2 space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Location:</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        defaultValue="කුරුණෑගල"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Special Crops:</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        defaultValue="තක්කාලි, බත් ඉරිඟු, අල"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Requirements:</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        defaultValue="ප්‍රාග්ධාන භෝග වගාව සඳහා සහය"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-xl"
                                onClick={handleEditProfilePopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-xl"
                                onClick={handleEditProfilePopup}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Popup Card for Changing Password */}
            {isChangePasswordOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-96">
                        <h2 className="text-2xl font-bold mb-4">Change Password</h2>

                        {/* Current Password */}
                        <label className="block text-gray-700 mb-2">Current Password:</label>
                        <input
                            type="password"
                            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                        />

                        {/* New Password */}
                        <label className="block text-gray-700 mb-2">New Password:</label>
                        <input
                            type="password"
                            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                        />

                        {/* Confirm New Password */}
                        <label className="block text-gray-700 mb-2">Confirm New Password:</label>
                        <input
                            type="password"
                            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                        />

                        {/* Buttons */}
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-xl"
                                onClick={handleChangePasswordPopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-xl"
                                onClick={handleChangePasswordPopup}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FarmerProfile;
