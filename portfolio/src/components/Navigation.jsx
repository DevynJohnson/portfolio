import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Contact Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">View My Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      );
    }

export default Navigation;