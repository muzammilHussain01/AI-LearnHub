import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const testimonials = [
    {
        name: "Amay AkkaAli",
        role: "Founder, Women in TechSEO",
        text: "AI LearnHub is an incredible platform for anyone wanting to master AI fundamentals and applications. Its clear resources and engaging community make it easy to stay ahead in this rapidly evolving field.",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
        name: "Jill Quick",
        role: "Digital Marketing Trainer",
        text: "There are so many great AI tools out there — but AI LearnHub helps you learn how to use them effectively. A game changer for anyone getting into AI.",
        image: "https://images.pexels.com/photos/3775536/pexels-photo-3775536.jpeg"
    },
    {
        name: "Michelle Bent",
        role: "Managing Director, Studio Agency",
        text: "AI LearnHub’s lessons and interactive projects are outstanding. Practical, relevant, and incredibly empowering for anyone serious about AI.",
        image: "https://images.pexels.com/photos/29538442/pexels-photo-29538442.jpeg"
    }
];

function AboutUsContent() {

    return (
        <div style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
            <Container>
                <Row className="g-4">
                    {testimonials.map((item, index) => (
                        <Col key={index} md={4}>
                            <div
                                style={{
                                    backgroundColor: '#f1f5f9',
                                    borderRadius: '10px',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    minHeight: '350px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                                }}
                            >
                                <div>
                                    <Image
                                        src={item.image}
                                        roundedCircle
                                        style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '1rem' }}
                                    />
                                    <p style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.6' }}>{item.text}</p>
                                </div>
                                <div>
                                    <h6 className="fw-bold mt-4 mb-1" style={{ color: '#0f172a' }}>{item.name}</h6>
                                    <small style={{ color: '#64748b' }}>{item.role}</small>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default AboutUsContent;
