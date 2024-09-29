import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import Button from '../ButtonNav/ButtonNav';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BrandLogo from '@/assets/LaptopBrand.svg';
import { NavLink, Link } from 'react-router-dom';



const NavBar = () => {
    return(
        <Navbar expand="lg" className="nav">
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='LinkBrand'>
                    <img 
                        alt="brand-logo"
                        src={BrandLogo}
                        className="d-inline-block align-middle"
                    />{' '}
                    <span className='BrandText'>TechnoWorld</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    <Nav.Item>
                            <Nav.Link as={NavLink} to="/category/telefono" eventKey="1">
                                <Button label="Celulares" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/category/tablet" eventKey="2">
                                <Button label="Tablets" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/category/laptop" eventKey="3">
                                <Button label="Laptops" />
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