import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";
import * as Yup from "yup";

const contactOptions = [
    {
        title: "Give us a call 📱",
        content: [
            { text: "+91 98765 43210", primary: true },
            { text: "Available Mon–Fri, 9:00 AM – 6:00 PM", muted: true },
        ],
        gradient: "bg-light",
    },
    {
        title: "Chat with us 💬",
        button: { text: "Start Live Chat", variant: "outline-primary" },
        gradient: "bg-success bg-opacity-10",
    },
    {
        title: "Leave us feedback ✨",
        button: { text: "Send Feedback", variant: "outline-secondary" },
        gradient: "bg-warning bg-opacity-10",
    },
];

const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9+\-()\s]*$/, "Invalid phone number")
        .required("Phone is required"),
    message: Yup.string(),
});

const ContactUs = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);

        resetForm();
        setSubmitting(false);
    };

    return (
        <div
            className="min-vh-100 py-5"
            style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f6b73c 100%)",
            }}
        >
            <div className="container">
                <h2 className="fw-bold mb-4 text-center text-white">
                    How would you like to contact <span className="text-warning">AI LearnHub</span>?
                </h2>
                <p className="text-center mb-5 text-light">
                    We're here to help you succeed. Choose the best way to reach our team and get the support you need.
                </p>

                {showAlert && <Alert variant="success">Request submitted successfully!</Alert>}

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
                                    onSubmit={handleSubmit}
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

                    {/* Contact Options */}
                    <div className="col-lg-6">
                        {contactOptions.map((option, index) => (
                            <Card key={index} className="shadow-sm border-0 mb-4">
                                <Card.Body className={`${option.gradient} rounded p-4`}>
                                    <h5 className="fw-semibold mb-3">{option.title}</h5>

                                    {option.content &&
                                        option.content.map((item, i) => (
                                            <p
                                                key={i}
                                                className={
                                                    item.muted
                                                        ? "text-muted mb-1"
                                                        : item.primary
                                                            ? "fw-semibold mb-1"
                                                            : "mb-1"
                                                }
                                            >
                                                {item.text}
                                            </p>
                                        ))}

                                    {option.button && (
                                        <Button variant={option.button.variant} className="w-100 mt-3">
                                            {option.button.text}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-5 text-center">
                    <Card className="shadow-sm border-0 mx-auto" style={{ maxWidth: "600px" }}>
                        <Card.Body>
                            <h5 className="fw-bold mb-3">Need immediate assistance?</h5>
                            <p className="text-muted mb-3">
                                For urgent matters, you can reach our support team directly. We're committed to providing exceptional service and quick response times.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
                                <Button variant="outline-primary">View Help Center</Button>
                                <Button variant="secondary">Schedule a Demo</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
