import { Outlet } from 'react-router-dom';
import './App.css';
// Import component files
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation'; // Make sure to import Navigation

// Begin App component
function App() {
  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;