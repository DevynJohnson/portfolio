import Navigation from './Navigation';
import '../styles/header.css';

function Header() {
    return (
        <header className="modern-header">
            <div className="header-content">
                <div className="header-title-section">
                    <h1 className="header-title">
                        <div className="name-line">
                            <span className="name-devyn">Devyn</span>
                            <span className="name-johnson">Johnson</span>
                        </div>
                        <span className="title-subtitle">Full Stack Developer</span>
                    </h1>
                </div>
                <div className="navbar-container">
                    <Navigation /> 
                </div>
            </div>
        </header>
    );
}

export default Header;