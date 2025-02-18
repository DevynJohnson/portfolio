import Navigation from './Navigation'; // Import Navigation component
import headerBackground from '../images/headerBackground.jpg'; // Import the image

function Header() {
    return (
        <header className="header-background" style={{ backgroundImage: `url(${headerBackground})` }}>
            <Navigation />
        </header>
    );
}

export default Header;