import { Outlet } from 'react-router-dom';
import './App.css';
// Import component files
import Header from './components/Header';
import Footer from './components/Footer';


// Begin App component
function App() {
  return (
    <>
      <header>
        <Header />
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