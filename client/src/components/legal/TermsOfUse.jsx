import React, { useEffect, useState } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getApi } from "../helper/helper.js";

const TermsOfUse = () => {
    const [termsData, setTermsData] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("terms-of-use");
                setTermsData(response.data.data || []);
            } catch (error) {
                setTermsData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div
                className="py-5 text-light"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0, 0, 0, 0.65)",
                    }}
                ></div>
                <Container style={{ position: "relative", zIndex: 2 }}>
                    <Row className="align-items-center">
                        <Col md={8}>
                            <h1
                                className="fw-bold display-4"
                                style={{
                                    background: "linear-gradient(90deg,#00c6ff,#0072ff)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                📜 LearnHub Terms of Use
                            </h1>
                            <p className="lead opacity-75">
                                Welcome to LearnHub! These Terms of Use outline the rules and
                                responsibilities for using our platform. By continuing to
                                access LearnHub, you agree to follow these terms.
                            </p>
                        </Col>
                        <Col md={4} className="text-center">
                            <img
                                src="https://via.placeholder.com/280x200.png?text=LearnHub+Illustration"
                                alt="Illustration"
                                className="img-fluid rounded-3 shadow-lg"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Accordion Section */}
            <Container className="my-5">
                <Accordion alwaysOpen>
                    {termsData.map((section, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>
                                <i
                                    className={`${section.icon} me-2`}
                                    style={{
                                        fontSize: "1.3rem",
                                        color: "#0072ff",
                                    }}
                                ></i>
                                <span className="fw-bold">{section.title}</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Card className="border-0 shadow-sm">
                                    <Card.Body>
                                        <p className="text-muted mb-0">{section.description}</p>
                                    </Card.Body>
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
};

export default TermsOfUse;
