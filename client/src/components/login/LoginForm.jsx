import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import LoginWithGoogle from "../login-with-google/LoginWithGoogle.jsx";
import SignupModal from "../signup/Signup.jsx";
import { postApi } from "../helper/helper.js";
import { Formik } from "formik";
import * as yup from "yup";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const LoginForm = () => {
    const [show, setShow] = useState(false); // For login modal
    const [toastShow, setToastShow] = useState(false); // For success toast
    const [loginResponse, setLoginResponse] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const schema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    const inputStyle = {
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        color: "white",
        paddingLeft: "3rem",
    };

    const buttonStyle = {
        background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        border: "none",
        borderRadius: "16px",
        transition: "all 0.3s ease",
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            {/* Success Toast */}
            <ToastContainer position="top-center" className="mt-3">
                <Toast
                    bg="primary"
                    onClose={() => setToastShow(false)}
                    show={toastShow}
                    delay={2000}
                    autohide
                    className="text-white text-center"
                >
                    <Toast.Body className="fw-bold">{loginResponse}</Toast.Body>
                </Toast>
            </ToastContainer>

            {/* Sign in Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                centered
                backdrop="static"
                keyboard={false}
                size="md"
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body
                    style={{
                        background:
                            "linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%)",
                    }}
                >
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-white">Sign In</h2>
                        <p style={{ color: "#d1d5db" }}>
                            Enter your credentials to continue
                        </p>
                    </div>

                    {/* Form */}
                    <Formik
                        validationSchema={schema}
                        initialValues={{ email: "", password: "" }}
                        onSubmit={async (values, { resetForm, setSubmitting }) => {
                            try {
                                const response = await postApi(values, "login");

                                if (response && response.status === 200) {
                                    setLoginResponse(response.data.message);
                                    setToastShow(true);
                                    handleClose();
                                    resetForm();
                                } else {
                                    setLoginResponse("Invalid Credential");
                                    setToastShow(true);
                                }
                            } catch (err) {
                                console.error("Login error:", err);
                                setLoginResponse("Something went wrong");
                                setToastShow(true);
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({
                              handleSubmit,
                              handleChange,
                              values,
                              touched,
                              errors,
                              isSubmitting,
                          }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                {/* Email */}
                                <div className="mb-3 position-relative">
                                    <div
                                        className="position-absolute top-50 translate-middle-y ms-3"
                                        style={{ pointerEvents: "none" }}
                                    >
                                        <Mail size={20} color="#9ca3af" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        className={`form-control py-3 ${
                                            touched.email && errors.email ? "is-invalid" : ""
                                        }`}
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        style={inputStyle}
                                    />
                                    {touched.email && errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="mb-4 position-relative">
                                    <div
                                        className="position-absolute top-50 translate-middle-y ms-3"
                                        style={{ pointerEvents: "none" }}
                                    >
                                        <Lock size={20} color="#9ca3af" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className={`form-control py-3 ${
                                            touched.password && errors.password
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        value={values.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        style={{ ...inputStyle, paddingRight: "3rem" }}
                                    />
                                    <button
                                        type="button"
                                        className="btn position-absolute top-50 translate-middle-y end-0 me-3 p-0 border-0"
                                        style={{ background: "transparent", color: "#9ca3af" }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                    {touched.password && errors.password && (
                                        <div className="invalid-feedback">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn w-100 py-3 mb-3"
                                    style={buttonStyle}
                                >
                                    {isSubmitting ? "Signing In..." : "Sign In"}
                                </button>

                                {/* Divider */}
                                <div className="text-center my-3 position-relative">
                                    <hr style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
                                    <span
                                        className="position-absolute top-50 start-50 translate-middle px-3"
                                        style={{
                                            background: "rgba(0,0,0,0.1)",
                                            borderRadius: "999px",
                                            color: "#d1d5db",
                                        }}
                                    >
                                        Or continue with
                                    </span>
                                </div>

                                <div className="d-grid gap-3">
                                    <LoginWithGoogle />
                                    <SignupModal />
                                </div>
                            </form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LoginForm;
