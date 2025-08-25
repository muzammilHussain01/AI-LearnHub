import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col, Card, Modal } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { postApi } from "../helper/helper.js";

const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9+\-()\s]*$/, "Invalid phone number")
        .required("Phone is required"),
    message: Yup.string(),
});

const rateSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    ratingStars: Yup.number().min(1, "Select at least 1 star").max(5).required("Rating is required"),
    feedbackMessage: Yup.string().required("Feedback is required"),
});

const ContactUs = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [hoveredStar, setHoveredStar] = useState(0);

    return (
        <>
            {/* Rate Us Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Rate Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            name: "Jane Doe",
                            email: "jane.doe@example.com",
                            ratingStars: 5,
                            feedbackMessage: "Fantastic experience! Highly recommend.",
                        }}
                        validationSchema={rateSchema}
                        onSubmit={async (values, { resetForm, setSubmitting }) => {
                            try {
                                await postApi(values, "rateUs");
                                resetForm();
                                handleClose();
                            } catch (err) {
                                console.error("Error:", err);
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
                            <Form onSubmit={handleSubmit}>
                                {/* Name */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isInvalid={touched.name && !!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                </Form.Group>

                                {/* Email */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={touched.email && !!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>

                                {/* Star Rating */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Rating</Form.Label>
                                    <div className="d-flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                style={{
                                                    fontSize: "2rem",
                                                    cursor: "pointer",
                                                    color: star <= (hoveredStar || values.ratingStars) ? "#FFD700" : "#ccc",
                                                }}
                                                onMouseEnter={() => setHoveredStar(star)}
                                                onMouseLeave={() => setHoveredStar(0)}
                                                onClick={() => setFieldValue("ratingStars", star)}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    {touched.ratingStars && errors.ratingStars && (
                                        <div className="text-danger small mt-1">{errors.ratingStars}</div>
                                    )}
                                </Form.Group>

                                {/* Feedback Message */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Feedback Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="feedbackMessage"
                                        value={values.feedbackMessage}
                                        onChange={handleChange}
                                        isInvalid={touched.feedbackMessage && !!errors.feedbackMessage}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.feedbackMessage}</Form.Control.Feedback>
                                </Form.Group>

                                <Button type="submit" className="w-100" variant="primary">
                                    Submit Feedback
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>

            {/* Main Contact Page */}
            <div
                className="min-vh-100 py-5"
                style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f6b73c 100%)",
                }}
            >
                <div className="container">
                    <h2 className="fw-bold mb-4 text-center text-white">
                        How would you like to contact <span className="text-warning">LearnHub</span>?
                    </h2>
                    <p className="text-center mb-5 text-light">
                        We're here to help you succeed. Choose the best way to reach our team and get the support you need.
                    </p>

                    <div className="row gy-4">
                        {/* Contact Form */}
                        <div className="col-lg-6">
                            <Card className="shadow-sm border-0">
                                <Card.Body>
                                    <h5 className="fw-bold mb-3">Request a call 📞</h5>
                                    <p className="text-muted mb-4">
                                        Fill out the form below and we'll call you back within 2 hours during business hours.
                                    </p>

                                    <Formik
                                        initialValues={{
                                            firstName: "",
                                            lastName: "",
                                            email: "",
                                            phone: "",
                                            message: "",
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={async (values, { resetForm, setSubmitting }) => {
                                            try {
                                                await postApi(values, "contactUs");
                                                resetForm();
                                            } catch (err) {
                                                console.error("Error:", err);
                                            } finally {
                                                setSubmitting(false);
                                            }
                                        }}
                                    >
                                        {({ isSubmitting }) => (
                                            <FormikForm>
                                                <Row className="mb-3">
                                                    <Col>
                                                        <Field
                                                            name="firstName"
                                                            as={Form.Control}
                                                            placeholder="First Name"
                                                        />
                                                        <ErrorMessage
                                                            name="firstName"
                                                            component="div"
                                                            className="text-danger small mt-1"
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Field
                                                            name="lastName"
                                                            as={Form.Control}
                                                            placeholder="Last Name"
                                                        />
                                                        <ErrorMessage
                                                            name="lastName"
                                                            component="div"
                                                            className="text-danger small mt-1"
                                                        />
                                                    </Col>
                                                </Row>

                                                <Form.Group className="mb-3">
                                                    <Field
                                                        name="email"
                                                        type="email"
                                                        as={Form.Control}
                                                        placeholder="Email Address"
                                                    />
                                                    <ErrorMessage
                                                        name="email"
                                                        component="div"
                                                        className="text-danger small mt-1"
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Field
                                                        name="phone"
                                                        type="tel"
                                                        as={Form.Control}
                                                        placeholder="Phone Number"
                                                    />
                                                    <ErrorMessage
                                                        name="phone"
                                                        component="div"
                                                        className="text-danger small mt-1"
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Field
                                                        name="message"
                                                        as={Form.Control}
                                                        as="textarea"
                                                        rows={4}
                                                        placeholder="Your Message"
                                                    />
                                                    <ErrorMessage
                                                        name="message"
                                                        component="div"
                                                        className="text-danger small mt-1"
                                                    />
                                                </Form.Group>

                                                <Button type="submit" variant="primary" className="w-100" disabled={isSubmitting}>
                                                    {isSubmitting ? "Submitting Request..." : "Submit Request"}
                                                </Button>
                                            </FormikForm>
                                        )}
                                    </Formik>
                                </Card.Body>
                            </Card>
                        </div>

                        {/* Contact Options - Static */}
                        <div className="col-lg-6">
                            {/* Give us a call */}
                            <Card className="shadow-sm border-0 mb-4">
                                <Card.Body className="bg-light rounded p-4">
                                    <h5 className="fw-semibold mb-3">Give us a call 📱</h5>
                                    <p className="fw-semibold mb-1">+91 8081985919</p>
                                    <p className="text-muted mb-1">Available Mon–Fri, 9:00 AM – 6:00 PM</p>
                                </Card.Body>
                            </Card>

                            {/* Chat with us */}
                            <Card className="shadow-sm border-0 mb-4">
                                <Card.Body className="bg-success bg-opacity-10 rounded p-4">
                                    <h5 className="fw-semibold mb-3">Chat with us 💬</h5>
                                    <Button variant="outline-primary" className="w-100">
                                        Start Live Chat
                                    </Button>
                                </Card.Body>
                            </Card>

                            {/* Rate-us */}
                            <Card className="shadow-sm border-0 mb-4">
                                <Card.Body className="bg-warning bg-opacity-10 rounded p-4">
                                    <h5 className="fw-semibold mb-3">Rate-us ✨</h5>
                                    <Button onClick={handleShow} variant="outline-secondary" className="w-100">
                                        Rate-us ✨
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    {/* Additional Info Section */}
                    <div className="mt-1 text-center">
                        <Card className="shadow-sm border-0 mx-auto" >
                            <Card.Body>
                                <div style={{ width: "100%", height: "450px" }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14235.842343996712!2d80.97605485!3d26.872993299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1755287457984!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Map"
                                    ></iframe>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
