import { Outlet } from 'react-router-dom';
import './App.css';
// Import component files
import Header from './components/Header';
import Footer from './components/Footer';


// Begin App component
function App() {
  return (
    <div id="app-container">
     
        <Header />
      
      <main className="main-content">
        <Outlet />
      </main>
      
        <Footer />
      
    </div>
  );
}

export default App;