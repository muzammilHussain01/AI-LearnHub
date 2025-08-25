import React, {useEffect, useState} from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import {getApi} from "../helper/helper.js";

const ExpressRateLimitDoc = () => {
    const [expressRateLimitData, setExpressRateLimitData] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("expressRateLimit");
                setExpressRateLimitData(response.data.data || []);
            } catch (error) {
                setExpressRateLimitData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);
    const [copiedIndex, setCopiedIndex] = useState(null);
    const handleCopy = (text, index) => {
        navigator.clipboard.writeText(text.trim());
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
    };

    return (
        <Container className="my-5">
            <Row className="mb-5">
                <Col md={7}>
                    <h2 className="mb-3">
                        <span className="text-dark">express-rate-limit</span>{' '}
                        <span className="badge bg-primary align-middle">TS</span>
                    </h2>

                    <p className="fs-5 text-muted">
                        <code>express-rate-limit</code> is a powerful and flexible middleware for <strong>Express.js</strong> that helps you
                        control how often clients can hit your endpoints. It’s essential for defending APIs against abuse, brute-force
                        attacks, and traffic floods.
                    </p>

                    <p className="fs-6 text-muted">
                        It tracks request counts per IP (or key) within a defined time window and can persist this data in-memory or via
                        external stores like Redis. With easy customization and clear headers, it’s perfect for both small apps and
                        enterprise-scale APIs.
                    </p>
                </Col>

                <Col md={5}>
                    <div className="bg-light border rounded p-3 h-100">
                        <h5 className="mb-3">🔒 Key Benefits</h5>
                        <ul className="mb-0 ps-3">
                            <li className="mb-2">
                                <strong>Prevents abuse:</strong> Stops clients from flooding your server with requests.
                            </li>
                            <li className="mb-2">
                                <strong>Security layer:</strong> Thwarts brute-force login and password attempts.
                            </li>
                            <li className="mb-2">
                                <strong>Flexible storage:</strong> Works with in-memory or persistent stores (e.g., Redis).
                            </li>
                            <li className="mb-2">
                                <strong>Custom limits:</strong> Apply global or route-specific rate limits.
                            </li>
                            <li>
                                <strong>Standards compliant:</strong> Returns useful headers like <code>RateLimit-Remaining</code> and
                                <code>Retry-After</code>.
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>

            {expressRateLimitData.map((snippet, index) => (
                <Card className="mb-4" key={index}>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <strong>{snippet.title}</strong>
                        <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleCopy(snippet.code, index)}
                        >
                            {copiedIndex === index ? 'Copied!' : 'Copy'}
                        </Button>
                    </Card.Header>
                    <Card.Body>
            <pre className="bg-light p-3 rounded overflow-auto bg-black text-white">
              <code>{snippet.code.trim()}</code>
            </pre>
                        {snippet.test && (
                            <div className="mt-3">
                                <h6>🧪 Test:</h6>
                                <pre className="bg-dark text-white p-2 rounded overflow-auto">
                  <code>{snippet.test.trim()}</code>
                </pre>
                            </div>
                        )}
                    </Card.Body>
                </Card>
            ))}

            <h5 className="mt-5">🔗 Helpful Links</h5>
            <ul>
                <li>
                    <a href="https://www.npmjs.com/package/express-rate-limit" target="_blank" rel="noreferrer">
                        NPM Package
                    </a>
                </li>
                <li>
                    <a href="https://github.com/express-rate-limit/express-rate-limit" target="_blank" rel="noreferrer">
                        GitHub Repository
                    </a>
                </li>
                <li>
                    <a href="https://express-rate-limit.mintlify.app/" target="_blank" rel="noreferrer">
                        Official Documentation
                    </a>
                </li>
            </ul>
        </Container>
    );
};

export default ExpressRateLimitDoc;
