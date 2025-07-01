import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import './App.css';
// Import component files
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';

// Loading component for Suspense fallback
function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

// Begin App component
function App() {
  return (
    <ThemeProvider>
      <div id="app-container">
        <ScrollToTop />
        <Header />
        
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;