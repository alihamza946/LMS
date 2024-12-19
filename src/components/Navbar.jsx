import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-green-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">
                    Library Management System
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            className="text-white hover:bg-green-700 px-3 py-2 rounded"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/books"
                            className="text-white hover:bg-green-700 px-3 py-2 rounded"
                        >
                            Books
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="text-white hover:bg-green-700 px-3 py-2 rounded"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/signup"
                            className="text-white hover:bg-green-700 px-3 py-2 rounded"
                        >
                            Signup
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
