import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

export function AppNavbar() {
    const [expanded, setExpanded] = useState(false);

    const toggle = () => setExpanded(!expanded);
    const closeMenu = () => setExpanded(false);

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            onToggle={toggle}
            className="header"
        >
            <Container>
                <Navbar.Brand as={Link} to={ROUTES.HOME} onClick={closeMenu}>
                    Калькулятор ЦОД
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={toggle}
                    className="border-0"
                >
                    <span className="navbar-toggler-icon" />
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to={ROUTES.HOME} onClick={closeMenu}>
                            Главная
                        </Nav.Link>
                        <Nav.Link as={Link} to={ROUTES.DEVICES} onClick={closeMenu}>
                            Оборудование
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}