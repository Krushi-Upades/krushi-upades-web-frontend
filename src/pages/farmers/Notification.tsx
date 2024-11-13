// import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import {Link} from "react-router-dom";

const notifications = [
    { id: 1, title: "Welcome to AgriCon 2024", date: "November 1, 2024", content: "AgriCon 2024 is here! Check out the latest updates and event highlights for the conference." },
    { id: 2, title: "Category Listings Released", date: "October 25, 2024", content: "This year’s award categories include Best Crop Yield, Innovation in Farming, and Sustainable Practices. Full list available online." },
    { id: 3, title: "Early Bird Ticket Prices Ending Soon", date: "October 20, 2024", content: "Early bird ticket pricing ends on November 10, 2024. Secure your spot today!" },
    { id: 4, title: "Workshop Details Released", date: "October 15, 2024", content: "Our workshops on sustainable agriculture, organic farming, and more are open for registration. View the full schedule." },
    { id: 5, title: "Exhibitor Information", date: "October 10, 2024", content: "Exhibitor booths are available. Reserve yours today to showcase your products at AgriCon 2024." },
    { id: 6, title: "Sponsorship Opportunities", date: "October 5, 2024", content: "Become an AgriCon sponsor and gain valuable exposure. Sponsorship packages are now available." },
    { id: 7, title: "Award Nominations Open", date: "October 1, 2024", content: "Nominate individuals for excellence in agriculture. Submit nominations by November 20, 2024." },
    { id: 8, title: "Travel Grants Available", date: "September 25, 2024", content: "Travel grants are available for students and early-career researchers. Apply by November 5, 2024." },
    { id: 9, title: "Volunteer Registration Open", date: "September 20, 2024", content: "Volunteer at AgriCon 2024 and gain valuable experience. Register now!" },
    { id: 10, title: "Conference Program Preview", date: "September 15, 2024", content: "Explore sessions, speakers, and events planned for AgriCon in the program preview." }
];

const NotificationPage = () => {

    return (
        <div className="min-h-screen">
            {/* Top Bar with Back Arrow and Title */}
            <div className="bg-green-700 text-white p-4 flex items-center">
                <button className="mr-4">
                    <Link to="/farmer_dashboard">
                        <FaArrowLeft className="h-6 w-6 text-white" />
                    </Link>
                </button>
                <h1 className="text-2xl font-bold">Notifications</h1>
            </div>

            <div className="p-6">
                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div key={notification.id} className="bg-green-50 shadow-md rounded-2xl p-4 mx-10">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-xl font-bold">{notification.title}</h2>
                                <p className="text-gray-500">{notification.date}</p>
                            </div>
                            <p>{notification.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;
