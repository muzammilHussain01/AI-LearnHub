import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaFacebook } from "react-icons/fa";
import TermsOfUse from "../legal/TermsOfUse.jsx";

function Footer() {
    return (
        <footer style={{ backgroundColor: '#0f172a', color: '#cbd5e1' }} className="py-5">
            <Container>
                <Row className="g-4">
                    {/* Brand Description */}
                    <Col xs={12} md={4}>
                        <h5 className="fw-bold mb-3 text-white">AI LearnHub</h5>
                        <p>
                            Empowering minds to Discover, Learn, and Shape the future of AI through curated resources and collaborative projects.
                        </p>
                    </Col>

                    {/* Resources */}
                    <Col xs={6} md={2}>
                        <h6 className="fw-bold mb-3 text-white">Resources</h6>
                        <div><a href="#" className="text-light text-decoration-none d-block mb-2">Learning Tracks</a></div>
                        <div><a href="#" className="text-light text-decoration-none d-block mb-2">Project Ideas</a></div>
                        <div><a href="#" className="text-light text-decoration-none d-block">AI News</a></div>
                    </Col>

                    {/* Community */}
                    <Col xs={6} md={2}>
                        <h6 className="fw-bold mb-3 text-white">Community</h6>
                        <div><a href="#" className="text-light text-decoration-none d-block mb-2">Forum</a></div>
                        <div><a href="#" className="text-light text-decoration-none d-block mb-2">Discord</a></div>
                        <div><a href="#" className="text-light text-decoration-none d-block">Events</a></div>
                    </Col>

                    {/* Company */}
                    <Col xs={6} md={2}>
                        <h6 className="fw-bold mb-3 text-white">Company</h6>
                        <div><a href="/aboutUs" className="text-light text-decoration-none d-block mb-2">About Us</a></div>
                        <div><a href="/contactUs" className="text-light text-decoration-none d-block">Contact</a></div>
                    </Col>

                    {/* Legal */}
                    <Col xs={6} md={2}>
                        <h6 className="fw-bold mb-3 text-white">Legal</h6>
                        <div><a href="/privacyPolicy" className="text-light text-decoration-none d-block mb-2">Privacy Policy</a></div>
                        <div><a href="/termsOfUse" className="text-light text-decoration-none d-block">Terms of Use</a></div>
                    </Col>
                </Row>

                <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} className="my-4" />

                {/* Social Icons */}
                <div className="d-flex justify-content-center mb-3 gap-4">
                    <a href="#" className="text-light fs-4"><FaLinkedin /></a>
                    <a href="#" className="text-light fs-4"><FaTwitter /></a>
                    <a href="#" className="text-light fs-4"><FaYoutube /></a>
                    <a href="#" className="text-light fs-4"><FaGithub /></a>
                    <a href="#" className="text-light fs-4"><FaFacebook /></a>
                </div>

                {/* Footer Bottom Text */}
                <div className="text-center" style={{ color: '#94a3b8' }}>
                    © 2025 <span style={{ color: '#fff', fontWeight: '600' }}>AI LearnHub</span>. Empowering you to Discover, Learn, and Shape the Future of AI.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
