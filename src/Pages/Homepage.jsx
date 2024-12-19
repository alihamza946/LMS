import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="text-center p-6">
                <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Book</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Your ultimate destination to explore and share amazing recipes!
                </p>
                <div className="space-x-4">
                    <a
                        href="/login"
                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                        Login
                    </a>
                    <a
                        href="/signup"
                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                        Signup
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
