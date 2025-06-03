import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavbarComponent from './components/navbar/NavbarComponent'
import HomePage from './components/Homepage/HomePage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import SplashScreen from './components/Intro/SplashScreen'
import Carousel from './components/carousel/Carousel';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
          <Carousel />
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/home" element={<HomePage darkMode={darkMode} />} />
            <Route path="/projects" element={<ProjectsPage darkMode={darkMode} />} />
          </Routes>
        </>
      )}
    </Router>
  )
}

export default App