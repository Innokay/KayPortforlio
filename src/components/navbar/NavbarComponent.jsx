import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarComponent = ({ darkMode, setDarkMode }) => {
    return (
        <nav className="fixed top-0 left-0 w-screen px-6 py-4 flex items-center justify-between bg-white text-gray-900 dark:bg-gray-900 dark:text-white shadow z-50">
            <div className="flex items-center space-x-2">
                <span className="text-sky-400 text-2xl font-bold">
                    <span className="inline-flex items-center justify-center rounded-full p-1 bg-gradient-to-tr from-blue-300 to-green-400">

                    <img 
                    src="/images/kaylogo.png" 
                    alt="" 
                    className="w-30 h-30 object-contain transform -rotate-12 transition-transform duration-700"
                    style={{perspective: "300px", transform:"rotateY(20deg) rotateZ(-12deg)"}}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = "rotateY(0deg) rotateZ(0deg)";                        
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "rotateY(20deg) rotateZ(-12deg)";
                    }}/>
                    </span>
                </span>
            </div>
            <ul className="flex space-x-6">
                <li>
                    {/* <a href="#home" className="hover:text-sky-400 transition">Home</a> */}
                    <Link to="/" className="hover:text-sky-400 transition">Home</Link>
                </li>
                <li>
                    <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
                </li>
            </ul>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 px-3 py-1 rounded bg-sky-400 text-white hover:bg-sky-500 transition"
                aria-label="Toggle dark mode"
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>
    );
};

export default NavbarComponent;