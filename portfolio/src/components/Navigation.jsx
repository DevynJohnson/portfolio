import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/portfolio"
                    className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/contact"
                    className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/resume"
                    className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                >
                    View My Resume
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;