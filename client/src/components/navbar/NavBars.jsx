import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import 'animate.css';
import LoginForm from "../login/LoginForm.jsx";

function NavBars() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* Login Form Modal */}
            <LoginForm show={show} handleClose={handleClose} />

            {/* Navigation Bar */}
            <Navbar expand="lg" className="shadow-sm" style={{ backgroundColor: '#F9FAFB' }}>
                <Container>
                    {/* Brand */}
                    <Navbar.Brand href="#" className="fw-bold fs-4 d-flex align-items-center" style={{ color: '#111827' }}>
                        <img
                            src="/vite.png"
                            alt="Vite logo"
                            style={{ width: "150px", height: "150px" }}
                            className="me-2"
                        />
                        LearnHub
                    </Navbar.Brand>

                    {/* Toggle for Mobile */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Navbar Links */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center gap-3 fw-semibold">
                            <Nav.Link href="/" style={{ color: '#374151' }}>Home</Nav.Link>
                            <Nav.Link href="/docs" style={{ color: '#374151' }}>Document</Nav.Link>
                            <Nav.Link href="/aboutUs" style={{ color: '#374151' }}>About Us</Nav.Link>
                            <Nav.Link href="/community" style={{ color: '#374151' }}>Community</Nav.Link>
                            <Nav.Link href="/contactUs" style={{ color: '#374151' }}>Contact</Nav.Link>
                            <Button variant="primary" onClick={handleShow} className="ms-2">
                                Sign in
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBars;
