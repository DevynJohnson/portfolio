import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  return (
    <>
    <header>
      <Header />
      <Navigation />
    </header>
     <footer>
      <Footer />
     </footer>
    </>
  )
}

export default App
