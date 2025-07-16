import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Signup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{ width: '100%' }} variant="outline-danger" onClick={handleShow}>
                Signup
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                fullscreen={true}
                aria-labelledby="signup-modal-title"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="signup-modal-title">Create Your Account</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        {/* Name Row */}
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Email */}
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        {/* Phone */}
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter your phone number" />
                        </Form.Group>

                        {/* Password */}
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Submit Button */}
                        <div className="d-grid">
                            <Button variant="primary" size="lg" type="submit">
                                Create Account
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Signup;
