import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoginSignupPage = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const formType = queryParams.get('form');
        if (formType === 'signup') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location]);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex h-screen bg-green-50">
            {/* Left/Right Side Container */}
            <div className={`w-1/2 flex items-center justify-center transition-transform duration-500 ${isLogin ? 'order-1' : 'order-2'}`}>
                {/* Dynamic Background Image with Margin on All Sides */}
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: isLogin ? `url('src/assets/images/login-bg.jpg')` : `url('src/assets/images/signup-bg.jpg')` }}
                />
            </div>

            {/* Form Container */}
            <div className={`w-1/2 flex items-center justify-center transition-transform duration-500 ${isLogin ? 'order-2' : 'order-1'}`}>
                <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-semibold mb-6">{isLogin ? 'Login' : 'Signup'}</h2>

                    <form>
                        {!isLogin && (
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
                        )}
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
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Your Password"
                                required
                            />
                        </div>
                        {!isLogin && (
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="Confirm Your Password"
                                    required
                                />
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                        >
                            {isLogin ? 'Login' : 'Signup'}
                        </button>
                    </form>

                    {/* Toggle Link */}
                    <div className="mt-4 text-center">
                        <button
                            onClick={toggleForm}
                            className="text-green-600 hover:text-green-800 transition-colors duration-300"
                        >
                            {isLogin ? 'Don\'t have an account? Signup' : 'Already have an account? Login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignupPage;
