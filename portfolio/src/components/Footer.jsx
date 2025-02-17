import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import githubLogo from '../images/githubLogo.svg';
import linkedinLogo from '../images/linkedinLogo.svg';
import stackoverflowLogo from '../images/stackoverflowLogo.svg';

function Footer() {
    return (
        <footer>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={4} md={2} className="text-center">
                        <a href="https://github.com/DevynJohnson">
                            <Image src={githubLogo} height='80px' width='80px' roundedCircle />
                        </a>
                    </Col>
                    <Col xs={4} md={2} className="text-center">
                        <a href="https://www.linkedin.com/in/devyn-johnson-a5259213b/">
                            <Image src={linkedinLogo} height='100px' width='100px' roundedCircle />
                        </a>
                    </Col>
                    <Col xs={4} md={2} className="text-center">
                        <a href="https://stackoverflow.com/users/27557869/devyn-johnson">
                            <Image src={stackoverflowLogo} height='200px' width='200px' roundedCircle />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;