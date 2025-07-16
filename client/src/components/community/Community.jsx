import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CommunityText from "./CommunityText.jsx";

function Community() {
    const members = [
        {
            name: "Aarav Sharma",
            role: "AI Developer",
            image: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
            name: "Sophia Lee",
            role: "Data Scientist",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            name: "Liam Patel",
            role: "ML Engineer",
            image: "https://randomuser.me/api/portraits/men/64.jpg"
        },
        {
            name: "Emma Johnson",
            role: "AI Researcher",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        }
    ];

    return (
        <div style={{ background: "#f3f4f6", padding: "4rem 0" }}>
            <Container>
                <div className="text-center mb-5">
                    <h1 className="fw-bold mb-3">Meet Our Community</h1>
                    <p style={{ maxWidth: "600px", margin: "0 auto", color: "#6b7280" }}>
                        Connect with AI enthusiasts, developers, researchers and mentors.
                        Join, collaborate, and grow your skills together.
                    </p>
                    <Button
                        variant="primary"
                        className="mt-4"
                        style={{ padding: "0.75rem 2rem", borderRadius: "50px" }}
                    >
                        Join the Community
                    </Button>
                </div>

                <Row className="g-4">
                    {members.map((member, index) => (
                        <Col md={3} sm={6} key={index}>
                            <div
                                style={{
                                    background: "white",
                                    padding: "1.5rem",
                                    borderRadius: "16px",
                                    textAlign: "center",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                                }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        borderRadius: "50%",
                                        marginBottom: "1rem",
                                        objectFit: "cover"
                                    }}
                                />
                                <h5 className="fw-bold">{member.name}</h5>
                                <p style={{ color: "#6b7280" }}>{member.role}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <CommunityText/>
        </div>
    );
}

export default Community;
