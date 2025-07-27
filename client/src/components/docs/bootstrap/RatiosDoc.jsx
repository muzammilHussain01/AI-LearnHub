import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';

function RatiosDoc() {
    const defaultRatios = ['1x1', '4x3', '16x9', '21x9'];
    return (
        <Container >
            <Row>
                <Col lg={10} >
                    <h2 className="fw-bold mb-4 text-primary">Responsive Ratios</h2>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <p className="text-muted mb-3">
                                The <code>Ratio</code> component in <strong>React Bootstrap</strong> helps maintain consistent aspect ratios for embedded media such as videos, slideshows, or custom elements—making them responsive without manual calculations.
                            </p>

                            <p className="text-secondary mb-3">
                                Under the hood, it uses generated CSS pseudo-elements to maintain a fixed aspect ratio relative to the parent’s width. It’s perfect for responsive design scenarios where media should scale cleanly across breakpoints.
                            </p>

                            <p className="text-secondary mb-3">
                                The <code>Ratio</code> wrapper can be applied to elements like <code>&lt;iframe&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;object&gt;</code>, or even plain <code>&lt;div&gt;</code>s and <code>&lt;img&gt;</code>s.
                            </p>

                            <p className="text-secondary mb-4">
                                Simply specify the <code>aspectRatio</code> prop using Bootstrap-supported formats like <code>16x9</code>, <code>4x3</code>, or <code>1x1</code>.
                            </p>

                            <div style={{ width: '100%', maxWidth: 660, margin: '0 auto' }}>
                                <Ratio aspectRatio="16x9">
                                    <iframe
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        title="Demo Video"
                                        allowFullScreen
                                    />
                                </Ratio>
                            </div>

                            <p className="text-muted small mt-4 mb-0">
                                📐 <strong>Note:</strong> The <code>Ratio</code> component ensures height is calculated automatically based on width—great for maintaining consistent designs without extra CSS.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <Card.Body>
                            <h5 className="mb-3 text-secondary">Supported Aspect Ratios</h5>
                            <ul className="text-secondary mb-0">
                                <li><code>1x1</code> – Square</li>
                                <li><code>4x3</code> – Traditional TV / Slides</li>
                                <li><code>16x9</code> – Widescreen Video</li>
                                <li><code>21x9</code> – Ultrawide</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={10} >
                    <h2 className="fw-bold mb-4 text-primary">Aspect Ratios</h2>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <p className="text-muted">
                                The <code>aspectRatio</code> prop allows you to control the proportional height relative to the width of its container. This is perfect for maintaining visual consistency in media or embedded elements.
                            </p>
                            <p className="text-secondary">
                                Below are examples using default Bootstrap-supported aspect ratios:
                            </p>

                            <Row className="g-3">
                                {defaultRatios.map((ratio) => (
                                    <Col md={6} key={ratio}>
                                        <Ratio aspectRatio={ratio}>
                                            <div className="bg-light border rounded d-flex align-items-center justify-content-center fw-semibold">
                                                {ratio}
                                            </div>
                                        </Ratio>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h5 className="mb-3">Custom Aspect Ratios</h5>
                            <p className="text-secondary">
                                You can also use custom values such as numeric ratios or percentages. This enables flexibility beyond the standard presets.
                            </p>

                            <Row className="g-3">
                                <Col md={6}>
                                    <Ratio aspectRatio={2}>
                                        <div className="bg-light border rounded d-flex align-items-center justify-content-center fw-semibold">
                                            2x1
                                        </div>
                                    </Ratio>
                                </Col>
                                <Col md={6}>
                                    <Ratio aspectRatio={0.5}>
                                        <div className="bg-light border rounded d-flex align-items-center justify-content-center fw-semibold">
                                            1x2
                                        </div>
                                    </Ratio>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RatiosDoc;
