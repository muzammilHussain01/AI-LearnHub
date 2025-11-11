import React, { useEffect, useState } from "react";
import { Accordion, Card, Button, Container, Table } from "react-bootstrap";
import { getApi } from "../../../helper/helper.js";

const AccordionDoc = () => {
    const [accordionData, setAccordionData] = useState([]);
    const [copiedId, setCopiedId] = useState(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("bootstrapAccordionPage");
                setAccordionData(
                    response.data.data.sort((a, b) => a.id - b.id) || []
                );
            } catch (error) {
                setAccordionData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    const handleCopy = async (code, id) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 1500);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    // 🔹 Map previews by ID (static JSX)
    const renderPreview = (id) => {
        switch (id) {
            case 1:
                return (
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                This is the first item's accordion body. It is shown by default.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                This is the second item's accordion body.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                );
            case 2:
                return (
                    <Accordion defaultActiveKey={["0"]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Item 1</Accordion.Header>
                            <Accordion.Body>
                                Content for the first item. Multiple items can stay open.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Item 2</Accordion.Header>
                            <Accordion.Body>Content for the second item.</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                );
            case 3:
                return (
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Flush Item #1</Accordion.Header>
                            <Accordion.Body>Minimal look accordion item.</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Flush Item #2</Accordion.Header>
                            <Accordion.Body>Another minimal look item.</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                );
            default:
                return <p>No preview available for this example.</p>;
        }
    };

    return (
        <Container className="py-4">
            {/* 📌 Bootstrap Accordion Section */}
            <div className="mb-5">
                <h2 className="fw-bold mb-3">📌 Bootstrap Accordion</h2>
                <p>
                    The <code>Accordion</code> component in Bootstrap allows you to toggle
                    visibility of sections of content. It is useful for FAQs, collapsible
                    panels, or organizing large amounts of text into expandable parts.
                </p>

                <h5 className="mt-4">🔹 Why Use Accordion?</h5>
                <ul>
                    <li>Keeps the UI clean and compact.</li>
                    <li>Improves readability by hiding less important information.</li>
                    <li>Commonly used in FAQs, product descriptions, and documentation.</li>
                    <li>Enhances mobile usability by reducing clutter.</li>
                </ul>

                <h5 className="mt-4">🔹 Key Features</h5>
                <ul>
                    <li>Supports multiple collapsible items.</li>
                    <li>Can allow one or multiple items open at a time.</li>
                    <li>Integrates smoothly with <code>Card</code> components.</li>
                    <li>Supports expand/collapse animations.</li>
                </ul>

                <h5 className="mt-4">🔹 Accordion Props</h5>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>activeKey</code></td>
                        <td>string | string[]</td>
                        <td>undefined</td>
                        <td>Controls which accordion items are open.</td>
                    </tr>
                    <tr>
                        <td><code>defaultActiveKey</code></td>
                        <td>string | string[]</td>
                        <td>undefined</td>
                        <td>Sets the initially open accordion item(s).</td>
                    </tr>
                    <tr>
                        <td><code>alwaysOpen</code></td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Allows multiple accordion items to stay open.</td>
                    </tr>
                    <tr>
                        <td><code>flush</code></td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Removes background/borders for a minimalist look.</td>
                    </tr>
                    </tbody>
                </Table>
            </div>

            {/* 🔹 Dynamic Examples */}
            {accordionData.map((sample) => (
                <div key={sample.id} className="mb-5">
                    <h4 className="fw-bold mb-2">{sample.title}</h4>
                    <p>{sample.description}</p>

                    {/* Result Section */}
                    <Card className="p-3 mb-3 shadow-sm">
                        <h6 className="fw-bold text-primary mb-3">Result</h6>
                        {renderPreview(sample.id)}
                    </Card>

                    {/* Code Section */}
                    <Card className="bg-dark text-white shadow-sm mb-3">
                        <Card.Body className="position-relative">
                            <Button
                                size="sm"
                                variant={copiedId === sample.id ? "success" : "outline-light"}
                                className="position-absolute top-0 end-0 m-2"
                                onClick={() => handleCopy(sample.code, sample.id)}
                            >
                                {copiedId === sample.id ? "Copied!" : "Copy"}
                            </Button>
                            <pre className="mb-0">
                <code>{sample.code}</code>
              </pre>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Container>
    );
};

export default AccordionDoc;
