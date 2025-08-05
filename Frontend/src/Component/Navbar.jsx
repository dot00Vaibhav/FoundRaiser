import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
    }
    return true; // Default to dark mode
  });
  const isAuth = useLocation().pathname.includes('/auth');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-surface-light dark:bg-surface-dark shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>            <img src={"logo.avif"} alt="FundRaise Logo" className="h-10 w-auto" />          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Dark mode toggle */}
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((d) => !d)}
              className="mr-2 p-2 rounded-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
              )}
            </button>
            {!isAuth && (
              <button
                onClick={() => navigate('/auth')}
                className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition"
              >
                Sign In
              </button>
            )}
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/leaderboard')}
              className="bg-accent hover:bg-accent-dark dark:bg-accent-dark dark:hover:bg-accent text-gray-900 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Leaderboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Dark mode toggle for mobile */}
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((d) => !d)}
              className="mr-2 p-2 rounded-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-surface-light dark:bg-surface-dark shadow-lg rounded-b-2xl">
          {!isAuth && <button
            onClick={() => { navigate('/auth'); setMenuOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary font-medium"
          >
            Sign In
          </button>}
          <button
            onClick={() => { navigate('/dashboard'); setMenuOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary font-medium"
          >
            Dashboard
          </button>
          <button
            onClick={() => { navigate('/leaderboard'); setMenuOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-md bg-accent text-white hover:bg-accent-dark font-medium"
          >
            Leaderboard
          </button>
        </div>
      )}
    </nav>
  );
}
