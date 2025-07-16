import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

function ContactUs() {
    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4 text-center">How would you like to contact AI LearnHub?</h2>

            <div className="row gy-4">
                {/* Contact Form */}
                <div className="col-lg-6">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <h5 className="fw-bold mb-3">Request a call 📞</h5>
                            <Form>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Control type="text" placeholder="First Name" required />
                                    </Col>
                                    <Col>
                                        <Form.Control type="text" placeholder="Last Name" required />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="Email Address" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="tel" placeholder="Phone Number" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 fw-semibold">
                                    Submit Request
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>

                {/* Contact Options */}
                <div className="col-lg-6">
                    <Card className="shadow-sm border-0 mb-4">
                        <Card.Body>
                            <h5 className="fw-bold mb-3">Give us a call 📱</h5>
                            <p className="mb-2">+91 98765 43210</p>
                            <p className="text-muted">Available Mon–Fri, 9:00 AM – 6:00 PM</p>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm border-0 mb-4">
                        <Card.Body>
                            <h5 className="fw-bold mb-3">Chat with us 💬</h5>
                            <Button variant="outline-primary" className="w-100">
                                Start Live Chat
                            </Button>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <h5 className="fw-bold mb-3">Leave us some feedback ✨</h5>
                            <Button variant="outline-secondary" className="w-100">
                                Send Feedback
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
