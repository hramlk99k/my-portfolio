import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Skills from './components/Skills';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
  }, [isDarkMode]);
  return (
    
   <div className={`app-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <button 
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{ 
          position: 'fixed', top: '20px', right: '20px', zIndex: 100,
          padding: '8px 16px', cursor: 'pointer', borderRadius: '4px',
          backgroundColor: 'var(--primary-blue)', color: 'white', border: 'none'
        }}
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

     <main>
        <Hero />
        
        <Skills />
        
        {/* ProjectGrid contains the Skeleton Loading logic and Flip Cards */}
        <ProjectGrid />
      </main>

      <Footer />

      {/* Floating Utilities */}
      <ScrollToTop />
      
    </div>
  );
}

export default App;