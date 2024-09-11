import { useState, useEffect, FormEvent } from 'react';
import { useLocation } from 'react-router-dom';

const LoginSignupPage = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Only for signup
    const [confirmPassword, setConfirmPassword] = useState(''); // Only for signup

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

    // ## Login Handle ##
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ email, password }),
            });

            const result = await response.text();
            if (response.ok) {
                // Successful login
                alert('Login successful');
                console.log(result);
                // Redirect to home page
                window.location.href = '/dashboard'; // Adjust this path as needed
            } else {
                alert('Login failed');
                console.log(result);
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                alert('An error occurred: ' + err.message);
            } else {
                alert('An unknown error occurred');
            }
        }
    };

    // ## Register Handle ##

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: email, password, email: email }), // Adjust payload as needed
            });

            const result = await response.text();
            if (response.ok) {
                // Successful registration
                alert('Check the email box and verify');
                console.log(result);
                // Redirect to login page
                window.location.href = '/signupConfirmation'; // Adjust this path as needed
            } else {
                alert('Registration failed');
                console.log(result);
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                alert('An error occurred: ' + err.message);
            } else {
                alert('An unknown error occurred');
            }
        }
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

                    <form onSubmit={isLogin ? handleLogin : handleRegister}>
                        {!isLogin && (
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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
