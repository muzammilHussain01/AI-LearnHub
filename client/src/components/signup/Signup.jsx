import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { postApi } from "../helper/helper.js";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const schema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(3, 'Too short').required('Password is required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
        phoneNumber: yup
            .string()
            .matches(/^\d{10}$/, 'Phone number must be 10 digits')
            .required('Phone number is required'),
    });

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
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            phoneNumber: '',
                        }}
                        onSubmit={async (values, { resetForm, setSubmitting }) => {
                            try {
                                const response = await postApi(values, 'signup');
                                resetForm();
                                setShow(false);
                            } catch (err) {
                                console.error('Submit error:', err);
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group controlId="formFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                name="firstName"
                                                type="text"
                                                placeholder="Enter your first name"
                                                value={values.firstName}
                                                onChange={handleChange}
                                                isValid={touched.firstName && !errors.firstName}
                                                isInvalid={touched.firstName && !!errors.firstName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.firstName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="formLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                name="lastName"
                                                type="text"
                                                placeholder="Enter your last name"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                isValid={touched.lastName && !errors.lastName}
                                                isInvalid={touched.lastName && !!errors.lastName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.lastName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isValid={touched.email && !errors.email}
                                        isInvalid={touched.email && !!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        name="phoneNumber"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        isValid={touched.phoneNumber && !errors.phoneNumber}
                                        isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Password</Form.Label>
                                            <div style={{ position: "relative" }}>
                                                <Form.Control
                                                    name="password"
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Enter password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    isValid={touched.password && !errors.password}
                                                    isInvalid={touched.password && !!errors.password}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword((prev) => !prev)}
                                                    style={{
                                                        position: "absolute",
                                                        right: "10px",
                                                        top: "50%",
                                                        transform: "translateY(-50%)",
                                                        background: "transparent",
                                                        border: "none",
                                                        cursor: "pointer",
                                                        padding: 0
                                                    }}
                                                >
                                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </button>
                                            </div>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="formConfirmPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="Confirm password"
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                                isValid={touched.confirmPassword && !errors.confirmPassword}
                                                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.confirmPassword}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="d-grid">
                                    <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Creating...' : 'Create Account'}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
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
