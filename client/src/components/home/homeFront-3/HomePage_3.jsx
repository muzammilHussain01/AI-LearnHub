import React, {useEffect,useState} from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import {getApi} from "../../helper/helper.js";

function Community() {
    const [webDevData, setWebDevData] = useState([])
    useEffect(() => {
        const fetchSteps = async () => {
            try {
                const response = await getApi("homepageCard");
                setWebDevData(response.data?.data || []);
            } catch (error) {
                console.error("Error fetching ladder steps:", error);
                setWebDevData([]);
            }
        };
        fetchSteps();
    }, []);
    const renderCards = (page) => {
        return webDevData
            .filter(item => item.page === page)
            .map((item, i) => (
                <Col md={3} sm={6} xs={12} key={i}>
                    <Card className="h-100 shadow-sm p-2" style={{ minHeight: '180px' }}>
                        <Card.Body className="p-2">
                            {item.level && (
                                <Badge
                                    bg={item.badge || 'secondary'}
                                    className="mb-1"
                                    style={{ fontSize: '0.75rem' }}
                                >
                                    {item.level}
                                </Badge>
                            )}
                            <Card.Title style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>
                                {item.title}
                            </Card.Title>
                            <Card.Text style={{ fontSize: '0.85rem', lineHeight: '1.2' }}>
                                {item.description}
                            </Card.Text>
                            <Button variant="outline-primary" size="sm">{item.button}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ));
    };

    return (
        <Container fluid className="bg-light p-4">
            {/* Learning Tracks */}
            <h3 className="mb-4">📚 Web Development Learning Tracks</h3>
            <Row className="g-3 mb-5">
                {renderCards('learningTracksCard')}
            </Row>

            {/* Featured Tools */}
            <h3 className="mb-4">🛠️ Featured Web Dev Tools</h3>
            <Row className="g-3 mb-5">
                {renderCards('featuredToolsCard')}
            </Row>

            {/* Challenges */}
            <h3 className="mb-4">🏆 Coding Challenges</h3>
            <Row className="g-3 mb-5">
                {renderCards('challengesCard')}
            </Row>

            {/* Newsletter Signup */}
            <div className=" bg-light text-dark rounded shadow-sm">
                <div className="row g-4 justify-content-center text-center">
                    <div className="col-md-4">
                        <div className="p-3 bg-white rounded shadow-sm h-100">
                            <h5 className="fw-bold">💻 Core Frontend Skills</h5>
                            <p className="text-muted small lh-base">
                                Master <strong>HTML5, CSS3, JavaScript (ES2023)</strong> and responsive layouts using <strong>Flexbox & Grid</strong>.
                                Learn to build clean, maintainable, and performant interfaces.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 bg-white rounded shadow-sm h-100">
                            <h5 className="fw-bold">⚡ Modern Frameworks</h5>
                            <p className="text-muted small lh-base">
                                Gain expertise in <strong>React, Next.js, and TypeScript</strong>.
                                Build component-based apps, utilize server-side rendering, and create static & dynamic web pages.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 bg-white rounded shadow-sm h-100">
                            <h5 className="fw-bold">🌐 Backend & Deployment</h5>
                            <p className="text-muted small lh-base">
                                Learn <strong>Node.js, Express, and REST/GraphQL APIs</strong>.
                                Deploy apps using <strong>Docker, Kubernetes, Supabase</strong>, and other cloud platforms.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 bg-white rounded shadow-sm h-100">
                            <h5 className="fw-bold">🛠 Tools & Workflows</h5>
                            <p className="text-muted small lh-base">
                                Use industry-standard tools like <strong>Git, Prisma, Tailwind CSS, and Vite</strong> to streamline development,
                                version control, and UI design.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 bg-white rounded shadow-sm h-100">
                            <h5 className="fw-bold">🏆 Real Projects & Challenges</h5>
                            <p className="text-muted small lh-base">
                                Work on practical projects like <strong>chat apps, e-commerce stores, PWA dashboards, and AI integrations</strong>
                                to gain hands-on experience and build a strong portfolio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Community;
