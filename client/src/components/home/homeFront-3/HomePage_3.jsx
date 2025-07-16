import React from 'react';
import { Container, Row, Col, Button, Card, Image, Badge } from 'react-bootstrap';

function Community() {
    return (
        <Container fluid className="bg-light ">

            {/* Learning Tracks */}
            <h3 className="mb-4">📚 AI Learning Tracks</h3>
            <Row className="g-4 mb-5">
                {['Beginner', 'Intermediate', 'Advanced'].map((level, i) => (
                    <Col md={4} key={i}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Badge bg="info" className="mb-2">{level}</Badge>
                                <Card.Title>{level} AI Essentials</Card.Title>
                                <Card.Text>Curated resources, challenges, and projects tailored for {level.toLowerCase()} learners.</Card.Text>
                                <Button variant="outline-primary">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Featured AI Tools */}
            <h3 className="mb-4">🛠️ Featured AI Tools</h3>
            <Row className="g-4 mb-5">
                {['TensorFlow', 'Hugging Face', 'Runway ML'].map((tool, i) => (
                    <Col md={4} key={i}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body>
                                <Card.Title>{tool}</Card.Title>
                                <Card.Text>Powerful AI tool to build and deploy intelligent applications.</Card.Text>
                                <Button variant="dark">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* AI Challenges */}
            <h3 className="mb-4">🏆 AI Challenges</h3>
            <Row className="g-4 mb-5">
                {['Build a Chatbot', 'AI Art Generator', 'Sentiment Analyzer'].map((challenge, i) => (
                    <Col md={4} key={i}>
                        <Card className="h-100 border-0 shadow">
                            <Card.Body>
                                <Card.Title>{challenge}</Card.Title>
                                <Card.Text>Test your skills by participating in this challenge and win exciting badges!</Card.Text>
                                <Button variant="outline-success">Join Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Newsletter Signup */}
            <div className="p-5 bg-primary text-white text-center rounded">
                <h3 className="mb-3">📬 Stay Updated!</h3>
                <p className="mb-3">Get weekly AI tutorials, tool reviews, and community updates directly to your inbox.</p>
                <Button variant="light">Subscribe Now</Button>
            </div>
        </Container>
    );
}

export default Community;
