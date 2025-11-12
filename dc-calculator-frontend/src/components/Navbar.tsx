import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

export function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="header">
            <Container>
                <Navbar.Brand as={Link} to={ROUTES.HOME} className="me-4">
                    Калькулятор ЦОД
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={ROUTES.HOME} className="ms-3">
                            Главная
                        </Nav.Link>
                        <Nav.Link as={Link} to={ROUTES.DEVICES} className="ms-3">
                            Оборудование
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}