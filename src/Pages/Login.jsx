import React, { useState } from 'react';

const Login = () => {
    const [role, setRole] = useState('User'); // Default role is 'User'

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Logging in as ${role}`);
        // Add login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">
                            Select Role
                        </label>
                        <select
                            value={role}
                            onChange={handleRoleChange}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                            <option value="Author">Author</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Login as {role}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
