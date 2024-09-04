import { useState } from 'react';

const ConfirmSignUpPage = () => {
    const [username, setUsername] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');

    const handleConfirmation = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/auth/confirm-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, confirmationCode }),
            });

            const result = await response.text();
            if (response.ok) {
                alert('Registration confirmed successfully!');
                window.location.href = '/dashboard'; // Redirect to login page
            } else {
                alert('Confirmation failed: ' + result);
            }
        } catch (err) {
            alert('An error occurred: ' + err);
        }
    };

    return (
        <div className="flex h-screen bg-green-50 justify-center items-center">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6">Confirm Your Registration</h2>
    <form onSubmit={handleConfirmation}>
    <div className="mb-4">
    <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
        <input
    type="text"
    id="username"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
    placeholder="Your Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    required
    />
    </div>
    <div className="mb-4">
    <label htmlFor="confirmationCode" className="block text-gray-700 font-medium mb-2">Confirmation Code</label>
    <input
    type="text"
    id="confirmationCode"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
    placeholder="Confirmation Code"
    value={confirmationCode}
    onChange={(e) => setConfirmationCode(e.target.value)}
    required
    />
    </div>
    <button
    type="submit"
    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
        Confirm Registration
    </button>
    </form>
    </div>
    </div>
);
};

export default ConfirmSignUpPage;
