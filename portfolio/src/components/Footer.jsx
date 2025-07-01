import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import githubLogo from '../images/githubLogo.svg';
import linkedinLogo from '../images/linkedinLogo.svg';
import stackoverflowLogo from '../images/stackoverflowLogo.svg';
import '../styles/footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-between align-items-center">
                    
                    {/* Personal Branding */}
                    <Col xs={12} md={6} className="footer-content text-center text-md-start">
                        <div className="footer-name">Devyn Johnson</div>
                        <div className="footer-title">Full Stack Developer</div>
                        <div className="footer-copyright">
                            © {currentYear} All rights reserved
                        </div>
                    </Col>
                    
                    {/* Social Links */}
                    <Col xs={12} md={6} className="footer-social text-center text-md-end">
                        <div className="social-links">
                            <a 
                                href="https://github.com/DevynJohnson" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="GitHub Profile"
                            >
                                <Image 
                                    alt="GitHub" 
                                    src={githubLogo} 
                                    className="social-icon"
                                />
                            </a>
                            
                            <a 
                                href="https://www.linkedin.com/in/devyn-johnson-a5259213b/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="LinkedIn Profile"
                            >
                                <Image 
                                    alt="LinkedIn" 
                                    src={linkedinLogo} 
                                    className="social-icon"
                                />
                            </a>
                            
                            <a 
                                href="https://stackoverflow.com/users/27557869/devyn-johnson" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Stack Overflow Profile"
                            >
                                <Image 
                                    alt="Stack Overflow" 
                                    src={stackoverflowLogo} 
                                    className="social-icon"
                                />
                            </a>
                        </div>
                    </Col>
                
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;