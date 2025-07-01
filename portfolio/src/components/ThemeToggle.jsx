import { useTheme } from '../contexts/ThemeContext';
import '../styles/theme-toggle.css';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <span className="theme-toggle-label">
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb">
            {isDarkMode ? (
              <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m12 1 0 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m12 21 0 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m4.22 4.22 1.42 1.42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m18.36 18.36 1.42 1.42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m1 12 2 0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m21 12 2 0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m4.22 19.78 1.42-1.42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m18.36 5.64 1.42-1.42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}

export default ThemeToggle;
