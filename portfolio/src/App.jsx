import { Outlet } from 'react-router-dom';
import './App.css';
// Import component files
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/AboutMe.css';


// Begin App component
function App() {
  return (
    <div id="app-container">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;