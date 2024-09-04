import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
    <div className="bg-gray-800 text-white w-64 h-screen p-5">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <ul>
            <li className="mb-4">
                <Link to="/profile" className="hover:text-gray-400">Profile</Link>
            </li>
            <li className="mb-4">
                <Link to="/settings" className="hover:text-gray-400">Settings</Link>
            </li>
            <li className="mb-4">
                <Link to="/reports" className="hover:text-gray-400">Reports</Link>
            </li>
            <li>
                <Link to="/logout" className="hover:text-gray-400">Logout</Link>
            </li>
        </ul>
    </div>
);

const Header: React.FC = () => (
    <div className="bg-gray-900 text-white p-4 shadow-md">
        <h1 className="text-xl font-semibold">Dashboard Header</h1>
    </div>
);

const Dashboard: React.FC = () => (
    <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6 bg-gray-100">
                <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
                <p>This is the main content area where you can place your dashboard widgets and other components.</p>
            </main>
        </div>
    </div>
);

export default Dashboard;
