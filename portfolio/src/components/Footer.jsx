import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
function Footer() {
    return (
        <footer>
        <Container>
            <Row>
            <Col xs={6} md={4}>
            <a href="https://github.com/DevynJohnson"><Image src="portfolio\src\images\githubLogo.svg" roundedCircle /></a>
            </Col>
            <Col xs={6} md={4}>
            <a href="https://www.linkedin.com/in/devyn-johnson-a5259213b/"><Image src="portfolio\src\images\linkedinLogo.svg" roundedCircle /></a>
            </Col>
            <Col xs={6} md={4}>
            <a href="https://stackoverflow.com/users/27557869/devyn-johnson"><Image src="portfolio\src\images\stackoverflowLogo.svg" roundedCircle /></a>
            </Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer;