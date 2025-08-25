import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {getApi} from "../helper/helper.js";

function CommunityText() {
    const [communityTextData, setCommunityTextData] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("community");
                setCommunityTextData(response.data.data || []);
            } catch (error) {
                setCommunityTextData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    return (
        <div style={{ background: '#f9fafb', padding: '60px 0' }}>
            <Container style={{ maxWidth: '1000px', textAlign: 'center' }}>
                {/* Heading */}
                <h1
                    className="fw-bold mb-4"
                    style={{ color: '#111827', fontSize: '2.8rem', lineHeight: '1.3' }}
                >
                    About OurLearning Community
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
                    {communityTextData.map((section, idx) => (
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
