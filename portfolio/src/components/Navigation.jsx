import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <LinkContainer to="/home">
                    <Nav.Link className={currentPage === '/home' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/Portfolio">
                    <Nav.Link className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/ContactMe">
                    <Nav.Link className={currentPage === '/ContactMe' ? 'nav-link active' : 'nav-link'}>
                        Contact Me
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/Resume">
                    <Nav.Link className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                        View My Resume
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;