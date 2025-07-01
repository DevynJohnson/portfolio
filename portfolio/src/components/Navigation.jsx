import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navigationItems = [
  { path: '/', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
  { path: '/resume', label: 'Resume' }
];

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <Navbar className="modern-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="navbar-content">
                    <Nav className="nav-links-container">
                        {navigationItems.map((item) => (
                            <Nav.Item key={item.path}>
                                <Nav.Link
                                    as={Link}
                                    to={item.path}
                                    className={currentPage === item.path ? 'nav-link active' : 'nav-link'}
                                >
                                    {item.label}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <div className="theme-toggle-container">
                        <ThemeToggle />
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;