import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className='footer-row'>
                    <Col md={4} className="footer-col">
                        <h4 className="footer-title">TechnoWorld</h4>
                        <p>Tu tienda de confianza para productos tecnológicos de última generación.</p>
                    </Col>
                    <Col md={4} className="footer-col">
                        <h4 className="footer-title">Enlaces Rápidos</h4>
                        <ul className="footer-links">
                            <li><a href="/about">Acerca de Nosotros</a></li>
                            <li><a href="/contact">Contacto</a></li>
                            <li><a href="/privacy">Política de Privacidad</a></li>
                            <li><a href="/terms">Términos y Condiciones</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="footer-col">
                        <h4 className="footer-title">Síguenos</h4>
                        <div className="footer-socials">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="footer-bottom">© 2023 TechnoWorld. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
