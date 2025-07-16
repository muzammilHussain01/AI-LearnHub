import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CommunityText() {
    const sections = [
        {
            title: "🌱 Why We Exist",
            content:
                "The AI revolution is reshaping industries and everyday experiences. Yet, quality education often sits behind paywalls. AI LearnHub exists to democratize AI knowledge — offering curated, beginner-friendly, and community-supported resources for everyone.",
        },
        {
            title: "🚀 What We Offer",
            content:
                "From coding projects and AI challenges to curated learning tracks and mentorship — our platform delivers hands-on, up-to-date AI learning experiences. Stay ahead with the latest tools, ethical practices, and vibrant discussions around intelligent technology.",
        },
        {
            title: "🌍 Our Vision",
            content:
                "We envision an open, inclusive, and ethically-driven AI future. Our goal is to empower developers and thinkers everywhere to responsibly innovate and build AI systems that serve humanity’s best interests.",
        },
        {
            title: "👥 Join the Movement",
            content:
                "Become part of a global network of AI enthusiasts. Collaborate on projects, participate in events, and shape your AI journey alongside a passionate, driven community. Together, we learn, build, and lead.",
        },
    ];

    return (
        <div style={{ background: '#f9fafb', padding: '60px 0' }}>
            <Container style={{ maxWidth: '1000px', textAlign: 'center' }}>
                {/* Heading */}
                <h1
                    className="fw-bold mb-4"
                    style={{ color: '#111827', fontSize: '2.8rem', lineHeight: '1.3' }}
                >
                    About Our AI Learning Community
                </h1>

                <p
                    className="lead mb-5"
                    style={{ color: '#6b7280', fontSize: '1.15rem', lineHeight: '1.9' }}
                >
                    AI LearnHub is a global learning space for developers, creators, and thinkers.
                    We aim to make Artificial Intelligence education accessible, ethical, and
                    practical for everyone, no matter their background.
                </p>

                {/* Section Cards */}
                <Row xs={1} md={2} className="g-4">
                    {sections.map((section, idx) => (
                        <Col key={idx}>
                            <Card
                                className="h-100 shadow-sm border-0"
                                style={{
                                    borderRadius: '1rem',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <Card.Body>
                                    <Card.Title
                                        className="fw-semibold mb-3"
                                        style={{ color: '#111827', fontSize: '1.4rem' }}
                                    >
                                        {section.title}
                                    </Card.Title>
                                    <Card.Text
                                        style={{ color: '#4b5563', lineHeight: '1.9', fontSize: '1.05rem' }}
                                    >
                                        {section.content}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default CommunityText;
