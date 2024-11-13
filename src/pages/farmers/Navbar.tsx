import { Link } from "react-router-dom";
// Import FontAwesome icons (or use SVGs)
import { FaUserCircle, FaBell } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-green-700 sticky top-0 z-50 px-5 shadow-md">
            <div className="w-full mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Text Section */}
                    <div className="flex items-center space-x-2">
                        <img className="h-16 w-32" src="src/assets/images/logo.png" alt="Logo" />
                    </div>
                    {/* Navigation and Buttons */}
                    <div className="flex items-center space-x-4 ml-auto">
                        <div className="hidden md:flex space-x-4">
                            <Link to="#" className="relative text-white px-2 py-2 rounded-md text-lg font-medium group cursor-pointer">
                                Dashboard
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transition-transform duration-300 group-hover:scale-x-100 scale-x-0 origin-left"></span>
                            </Link>
                            {/*<Link to="/about-us" className="relative text-white px-2 py-2 rounded-md text-lg font-medium group cursor-pointer">*/}
                            {/*    Community*/}
                            {/*    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transition-transform duration-300 group-hover:scale-x-100 scale-x-0 origin-left"></span>*/}
                            {/*</Link>*/}
                        </div>
                        {/* Icons */}
                        <div className="flex items-center space-x-4 ml-4">
                            <button className="relative p-2 text-white hover:text-green-200">
                                <Link to="/farmer_notification">
                                    <FaBell className="text-2xl" />
                                    {/* Notification Badge */}
                                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                                </Link>
                            </button>
                            <Link to="/farmer_profile" className="p-2 text-white hover:text-green-200">
                                <FaUserCircle className="text-2xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
