// import { useNavigate } from 'react-router-dom';

// const HomePage = ({ darkMode }) => {
//     const navigate = useNavigate();

//     const handleViewProjects = () => {
//         navigate('/projects');
//     };

//     return (
//         <section className={`min-h-screen flex flex-col justify-center items-center text-center px-6 ${
//             darkMode ? 'bg-black text-white' : 'bg-white text-black'
//         }`}>
//             <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
//                 Khaemba Innocent Wanjala
//             </h1>
//             <p className={`text-xl md:text-2xl mb-8 max-w-xl ${
//                 darkMode ? 'text-gray-300' : 'text-purple-700'
//             }`}>
//                 Crafting elegant solutions with code. Welcome to my developer portfolio.
//             </p>
//             <button
//                 onClick={handleViewProjects}
//                 className={`font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 ${
//                     darkMode
//                         ? 'bg-gray-800 text-white hover:bg-gray-700'
//                         : 'bg-purple-700 text-white hover:bg-purple-800'
//                 }`}
//             >
//                 View My Projects
//             </button>
//         </section>
//     );
// }

// export default HomePage;

import { useNavigate } from 'react-router-dom';

const HomePage = ({ darkMode }) => {
    const navigate = useNavigate();

    const handleViewProjects = () => {
        navigate('/projects');
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-black via-gray-800 to-blue-400">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg text-white">
                Khaemba Innocent Wanjala
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-xl ${
                darkMode ? 'text-gray-300' : 'text-purple-200'
            }`}>
                Crafting elegant solutions with code. Welcome to my developer portfolio.
            </p>
        </section>
    );
}

export default HomePage;