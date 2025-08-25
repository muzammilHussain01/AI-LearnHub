import React, { useEffect, useState } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getApi } from "../helper/helper.js";

const PrivacyPolicy = () => {
    const [privacyData, setPrivacyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getApi("privacy-policy");
                setPrivacyData(response.data.data || []);
            } catch (error) {
                console.error("Error fetching privacy policy:", error);
                setPrivacyData([]);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div
                className="py-5 text-light"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
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
                />
                <Container style={{ position: "relative", zIndex: 2 }}>
                    <Row className="align-items-center">
                        <Col md={8}>
                            <h1
                                className="fw-bold display-5"
                                style={{
                                    background: "linear-gradient(90deg,#ff7e5f,#feb47b)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                📄 Privacy Policy – AI LearnHub
                            </h1>
                            <p className="lead opacity-75">
                                Your privacy matters to us. This Privacy Policy explains how we
                                collect, use, and safeguard your personal information while you
                                use LearnHub.
                            </p>
                        </Col>
                        <Col md={4} className="text-center">
                            <img
                                src="https://via.placeholder.com/280x200.png?text=Privacy+Policy"
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
                    {privacyData.map((section, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>
                                <i
                                    className={`${section.icon || "bi-shield-lock"} me-2`}
                                    style={{ fontSize: "1.3rem", color: "#ff7e5f" }}
                                ></i>
                                <span className="fw-bold">{section.title}</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Card className="border-0 shadow-sm">
                                    <Card.Body>
                                        <p className="text-muted mb-0">{section.description}</p>
                                        {section.points && section.points.length > 0 && (
                                            <ul className="mt-3 text-muted">
                                                {section.points.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
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

export default PrivacyPolicy;
