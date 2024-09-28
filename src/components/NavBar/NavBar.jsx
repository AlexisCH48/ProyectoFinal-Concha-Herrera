import { Alert } from "bootstrap";
import CartWidget from "../CartWidget/CartWidget"
import Button from '../ButtonNav/ButtonNav';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BrandLogo from '@/assets/LaptopBrand.svg';
import './NavBar.css'



const NavBar = () => {
    const handleClick = () => {
        alert('¡boton clickeado!')
    }

    return(
        <Navbar expand="lg" className="nav">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="brand-logo"
                        src={BrandLogo}
                        className="d-inline-block align-middle"
                    />{' '}
                    <span>TechnoWorld</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Item>
                            <Nav.Link eventKey="1">
                                <Button label="Celulares" onClick={handleClick}/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2">
                                <Button label="Tablets" onClick={handleClick}/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3">
                                <Button label="Laptops" onClick={handleClick}/>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
};

export default NavBar