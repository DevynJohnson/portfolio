import Navigation from './Navigation'; // Import Navigation component
import headerBackground from '../images/headerBackground.jpg'; // Import the image

function Header() {
    return (
        <header className="header-background" style={{ backgroundImage: `url(${headerBackground})` }}>
            <h1>Devyn Johnson - Full Stack Developer</h1>
            <div className="navbar-container">
                <Navigation /> 
            </div>
        </header>
    );
}

export default Header;