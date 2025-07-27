import React, {useState} from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import 'animate.css';
import Modal from 'react-bootstrap/Modal';
import {Eye, EyeOff, Lock, Mail} from "lucide-react";
import LoginWithGoogle from "../login-with-google/LoginWithGoogle.jsx";
import SignupModal from "../signup/Signup.jsx";
function NavBars() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        color: 'white',
        paddingLeft: '3rem'
    };
    const buttonStyle = {
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        border: 'none',
        borderRadius: '16px',
        transform: 'scale(1)',
        transition: 'all 0.3s ease'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false} size="md">
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body style={{background:"linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%)"}} >
                    {/* Header */}
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-white">Sign In</h2>
                        <p style={{ color: '#d1d5db' }}>Enter your credentials to continue</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="mb-3 position-relative">
                            <div className="position-absolute top-50 translate-middle-y ms-3" style={{ pointerEvents: 'none' }}>
                                <Mail size={20} color="#9ca3af" />
                            </div>
                            <input
                                type="email"
                                className="form-control py-3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                style={inputStyle}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4 position-relative">
                            <div className="position-absolute top-50 translate-middle-y ms-3" style={{ pointerEvents: 'none' }}>
                                <Lock size={20} color="#9ca3af" />
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control py-3"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                style={{ ...inputStyle, paddingRight: '3rem' }}
                                required
                            />
                            <button
                                type="button"
                                className="btn position-absolute top-50 translate-middle-y end-0 me-3 p-0 border-0"
                                style={{ background: 'transparent', color: '#9ca3af' }}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn w-100 py-3 mb-3" style={buttonStyle}>
                            Sign In
                        </button>

                        {/* Divider */}
                        <div className="text-center my-3 position-relative">
                            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
                            <span
                                className="position-absolute top-50 start-50 translate-middle px-3"
                                style={{ background: 'rgba(0,0,0,0.1)', borderRadius: '999px', color: '#d1d5db' }}
                            >
              Or continue with
            </span>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="d-grid gap-3">
                            <LoginWithGoogle />
                            <SignupModal />
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
            {/* Navigation Bar */}
            <Navbar expand="lg" style={{ backgroundColor: '#F9FAFB' }} className="shadow-sm py-3">
                <Container>
                    <Navbar.Brand href="#" className="fw-bold fs-4" style={{ color: '#111827' }}>
                        AI LearnHub
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fw-semibold">
                            <Nav.Link href="/" style={{ color: '#374151' }}>Home</Nav.Link>
                            <Nav.Link href="/docs" style={{ color: '#374151' }}>Document</Nav.Link>
                            <Nav.Link href="aboutUs" style={{ color: '#374151' }}>About Us</Nav.Link>
                            <Nav.Link href="/community" style={{ color: '#374151' }}>Community</Nav.Link>
                            <Nav.Link href="/contactUs" style={{ color: '#374151' }}>Contact</Nav.Link>
                            <Button variant="primary" onClick={handleShow}>
                                Sign in
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            {/*<div className="hero-section position-relative d-flex align-items-center" style={{*/}
            {/*    height: '100vh',*/}
            {/*    backgroundImage: `url('/img/Home.jpg')`,  // replace with your actual image path in public/img/Home.jpg*/}
            {/*    backgroundSize: 'cover',*/}
            {/*    backgroundPosition: 'center',*/}
            {/*}}>*/}
            {/*    <div className="overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>*/}

            {/*    <Container className="text-white position-relative z-2">*/}
            {/*        <div className="col-lg-6">*/}
            {/*            <p className="text-uppercase text-light fw-semibold mb-2">Welcome</p>*/}
            {/*            <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInUp">*/}
            {/*                Professional AI Learning Hub*/}
            {/*            </h1>*/}
            {/*            <p className="lead text-light mb-4 animate__animated animate__fadeInUp animate__delay-1s">*/}
            {/*                We simplify AI education and modern tech learning. Start your AI journey today.*/}
            {/*            </p>*/}
            {/*            <Button variant="primary" size="lg" className="fw-semibold animate__animated animate__fadeInUp animate__delay-2s">*/}
            {/*                Get Started*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Container>*/}
            {/*</div>*/}
        </div>
    );
}

export default NavBars;
