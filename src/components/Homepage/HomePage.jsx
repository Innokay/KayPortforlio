// import { useNavigate } from 'react-router-dom';

// const HomePage = ({ darkMode }) => {
//     const navigate = useNavigate();

//     const handleViewProjects = () => {
//         navigate('/projects');
//     };

//     return (
//         <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-black via-gray-800 to-blue-400">
//             <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg text-white">
//                 Khaemba Innocent Wanjala
//             </h1>
//             <p className={`text-xl md:text-2xl mb-8 max-w-xl ${
//                 darkMode ? 'text-gray-300' : 'text-purple-200'
//             }`}>
//                 Crafting elegant solutions with code. Welcome to my developer portfolio.
//             </p>

//             <button className='bg-gradient-to-r from-black to-black via-grey-500'>Get To Interact</button>
//         </section>
//     );
// }

// export default HomePage;

import { useNavigate } from 'react-router-dom';

const HomePage = ({ darkMode }) => {
    const navigate = useNavigate();

    const handleGetToInteract = () => {
        navigate('/basicinfo'); // Assumes your BasicInfo component is routed at '/basicinfo'
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

            <button
                onClick={handleGetToInteract}
                className="bg-gradient-to-r from-black to-black via-gray-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-colors duration-300"
            >
                Get To Interact
            </button>
        </section>
    );
}

export default HomePage;