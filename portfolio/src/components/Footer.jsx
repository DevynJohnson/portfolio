import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import githubLogo from '../images/githubLogo.svg';
import linkedinLogo from '../images/linkedinLogo.svg';
import stackoverflowLogo from '../images/stackoverflowLogo.svg';

function Footer() {

    return (

        <footer className="d-flex align-items-center justify-content-center py-4">
            
            <Container>

                <Row className="justify-content-center align-items-center text-center">
                    
                    <Col xs={4} md={2} className="d-flex align-items-center justify-content-center">
                        <a href="https://github.com/DevynJohnson"target="_blank">
                            <Image alt="github logo" src={githubLogo} height="60" width="60" roundedCircle />
                        </a>
                    </Col>
                    
                    <Col xs={4} md={2} className="d-flex align-items-center justify-content-center">
                        <a href="https://www.linkedin.com/in/devyn-johnson-a5259213b/"target="_blank">
                            <Image alt="linkedin logo" src={linkedinLogo} height="75" width="75" roundedCircle />
                        </a>
                    </Col>
                    
                    <Col xs={4} md={2} className="d-flex align-items-center justify-content-center">
                        <a href="https://stackoverflow.com/users/27557869/devyn-johnson"target="_blank">
                            <Image alt="stack overflow logo" src={stackoverflowLogo} height="150" width="150" roundedCircle />
                        </a>
                    
                    </Col>
                
                </Row>
            
            </Container>

        </footer>
    );
}

export default Footer;