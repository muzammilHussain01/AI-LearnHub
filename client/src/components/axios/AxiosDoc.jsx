import React, { useEffect, useState } from "react";
import {
    Container, Row, Col, Card, Button, Table, Badge,
    ListGroup, Accordion, Nav, Image
} from "react-bootstrap";
import {
    Clipboard, Star, Clock, CheckCircle, Lightning,
    CodeSlash, BoxArrowUpRight, Terminal, ShieldLock, Gear
} from "react-bootstrap-icons";
import { getApi } from "../helper/helper.js";

export default function AxiosDoc() {
    const [contentData, setContentData] = useState([]);
    const [copied, setCopied] = useState(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("axios");
                if (response?.data?.data) {
                    setContentData(response.data.data);
                } else {
                    setContentData([]);
                }
            } catch (error) {
                console.error("Error fetching topics:", error);
                setContentData([]);
            }
        };
        fetchTopics();
    }, []);

    const handleCopy = async (code, id) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(id);
            setTimeout(() => setCopied(null), 2000);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    const renderCodeBlock = (code, id) => (
        <div className="position-relative">
            <pre className="bg-dark text-white p-3 rounded" style={{ whiteSpace: "pre-wrap" }}>
                <code>{code}</code>
            </pre>
            <Button
                size="sm"
                variant="light"
                onClick={() => handleCopy(code, id)}
                className="position-absolute top-0 end-0 m-2"
            >
                <Clipboard className="me-1" />
                {copied === id ? "Copied!" : "Copy"}
            </Button>
        </div>
    );

    // Extract sections safely
    const header = contentData.find(c => c.type === "header");
    const navTabs = contentData.filter(c => c.type === "nav");
    const install = contentData.find(c => c.type === "install");
    const about = contentData.find(c => c.type === "about");
    const examples = contentData.filter(c => c.type === "example");
    const useCases = contentData.filter(c => c.type === "useCase");
    const features = contentData.filter(c => c.type === "feature");
    const stats = contentData.filter(c => c.type === "stat");
    const comparisons = contentData.filter(c => c.type === "comparison");
    const configs = contentData.filter(c => c.type === "config");

    return (
        <Container className="py-5">
            {/* ✅ Header (only render if data exists) */}
            {header && (
                <Row className="align-items-center py-4 px-4 bg-white rounded-4 shadow-sm mb-4 border">
                    <Col xs="auto">
                        <div style={{ backgroundColor: "#f6f8fa", borderRadius: "50%", padding: "14px", boxShadow: "0 8px 16px rgba(0,0,0,0.05)" }}>
                            <Image src="https://axios-http.com/assets/logo.svg" alt="Axios Logo" fluid style={{ width: "52px", height: "52px" }} />
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <h1 className="fw-semibold mb-1" style={{ fontSize: "2rem", color: "#212529" }}>
                                {header.title}
                                <Badge bg="light" text="dark" className="ms-2 border border-secondary-subtle">
                                    {header.version}
                                </Badge>
                            </h1>
                            <Button variant="outline-dark" size="sm" className="ms-auto d-flex align-items-center gap-1">
                                <Star size={16} /> Star on GitHub
                            </Button>
                        </div>
                        <p className="text-muted mb-2" style={{ fontSize: "1.05rem" }}>{header.subtitle}</p>
                        <div className="d-flex flex-wrap align-items-center gap-2">
                            {header.badges?.map((b, i) => (
                                <Badge key={i} bg={b.variant} className="px-3 py-1 d-flex align-items-center gap-1">
                                    {b.icon} {b.text}
                                </Badge>
                            ))}
                        </div>
                    </Col>
                </Row>
            )}

            {/* ✅ Tabs */}
            {navTabs.length > 0 && (
                <Nav variant="tabs" defaultActiveKey="#overview">
                    {navTabs.map((section, i) => (
                        <Nav.Item key={i}>
                            <Nav.Link href={`#${section.label.toLowerCase()}`}>{section.label}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            )}

            <Row className="my-4">
                <Col md={8}>
                    {/* ✅ Install */}
                    {install && (
                        <Card className="mb-4" id="install">
                            <Card.Body>
                                <h5>{install.title}</h5>
                                {renderCodeBlock(install.code, "install")}
                                {install.actions?.map((a, i) => (
                                    <Button key={i} variant={a.variant} className="me-2">{a.label}</Button>
                                ))}
                            </Card.Body>
                        </Card>
                    )}

                    {/* ✅ About */}
                    {about && (
                        <Card className="mb-4" id="about">
                            <Card.Body>
                                <h5>{about.title}</h5>
                                <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: "1.7", color: "#333" }}>
                                    {about.description}
                                </p>
                            </Card.Body>
                        </Card>
                    )}

                    {/* ✅ Examples + Use Cases */}
                    {(examples.length > 0 || useCases.length > 0) && (
                        <Card className="mb-4" id="examples">
                            <Card.Body>
                                <h5>Example Usage</h5>
                                <Accordion defaultActiveKey="0">
                                    {examples.map((ex, idx) => (
                                        <Accordion.Item eventKey={`example-${idx}`} key={idx}>
                                            <Accordion.Header>{ex.title}</Accordion.Header>
                                            <Accordion.Body>{renderCodeBlock(ex.code, `example-${idx}`)}</Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                    {useCases.map((uc, idx) => (
                                        <Accordion.Item eventKey={`usecase-${idx}`} key={idx}>
                                            <Accordion.Header>{uc.title}</Accordion.Header>
                                            <Accordion.Body>{renderCodeBlock(uc.code, `usecase-${idx}`)}</Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </Card.Body>
                        </Card>
                    )}

                    {/* ✅ Features */}
                    {features.length > 0 && (
                        <Card className="mb-4">
                            <Card.Body>
                                <h5>Key Features</h5>
                                <ListGroup variant="flush">
                                    {features.map((f, idx) => (
                                        <ListGroup.Item key={idx}>{f.text}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    )}
                </Col>

                {/* ✅ Sidebar */}
                <Col md={4}>
                    {/* Stats */}
                    {stats.length > 0 && (
                        <Card className="mb-4 shadow rounded-4 border-0 bg-white">
                            <Card.Body>
                                <h5 className="fw-semibold d-flex align-items-center text-primary">
                                    <CodeSlash className="me-2" /> About Axios
                                </h5>
                                <div className="d-flex flex-wrap gap-3 align-items-center my-4">
                                    {stats.map((s, i) => (
                                        <Badge key={i} bg={s.variant} className="fs-6 py-2 px-3">
                                            {s.icon} {s.label}
                                        </Badge>
                                    ))}
                                    <Button variant="outline-primary" size="sm" className="ms-auto">
                                        Learn More <BoxArrowUpRight className="ms-1" />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )}

                    {/* Comparison */}
                    {comparisons.length > 0 && (
                        <Card className="mb-4 shadow-sm border-0 rounded-4 bg-white">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3 d-flex align-items-center text-dark">
                                    <CodeSlash className="me-2 text-primary" /> Axios vs Fetch
                                </h5>
                                <Table bordered hover size="sm" className="mt-3">
                                    <thead>
                                    <tr><th>Feature</th><th>Axios</th><th>Fetch</th></tr>
                                    </thead>
                                    <tbody>
                                    {comparisons.map((r, i) => (
                                        <tr key={i}>
                                            <td>{r.feature}</td>
                                            <td>{r.axios}</td>
                                            <td>{r.fetch}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    )}

                    {/* Configs */}
                    {configs.map((cfg, i) => (
                        <Card key={i} className="mb-4 shadow-sm border-0 rounded-4 bg-light">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3 d-flex align-items-center text-dark">
                                    <Gear className="me-2 text-secondary" /> {cfg.title}
                                </h5>
                                {renderCodeBlock(cfg.code, `config-${i}`)}
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}