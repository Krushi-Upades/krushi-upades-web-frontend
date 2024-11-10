import { useState, FormEvent } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                alert('Login successful');
                console.log(result);
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

    return (
        <div className="relative flex items-center justify-center h-screen">
            {/* Background image with dark overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('src/assets/images/login-bg.jpg')` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Login Card */}
            <div className="relative bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold mb-6">Login</h2>
                <form onSubmit={handleLogin}>
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
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <a href="/signup" className="text-green-600 hover:text-green-800 transition-colors duration-300">
                        Don't have an account? Signup
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
