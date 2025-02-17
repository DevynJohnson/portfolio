import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
// Import section files
import AboutMe from './sections/AboutMe';
import ContactMe from './sections/ContactMe';
import Portfolio from './sections/Portfolio';

// Import component files
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

// Begin App component
function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe')
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    } else if (currentPage === 'ContactMe') {
      return <ContactMe />;
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
  };

  return (
    <Router>
    <header>
      <Header />
      <nav>
      <Navigation setCurrentPage={setCurrentPage} />
      </nav>
    </header>
    <main>
      {renderPage()}
    </main>
     <footer>
      <Footer />
     </footer>
    </Router>
  )
}

export default App
