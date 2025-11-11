import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { getApi } from "../../helper/helper.js";
import JsxParser from "react-jsx-parser"; // ✅ import JSX parser

const BootstrapGrid = () => {
    const [bootstrapGridData, setBootstrapGridData] = useState([]);
    const [copiedId, setCopiedId] = useState(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("bootstrapGridPage");
                setBootstrapGridData(
                    response.data.data.sort((a, b) => a.id - b.id) || []
                );
            } catch (error) {
                setBootstrapGridData([]);
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

    return (
        <Container className="py-4">
            <Row>
                <Col lg={10}>
                    {/* Static Heading */}
                    <h2 className="fw-bold mb-3">📌 Bootstrap Grid System</h2>
                    <p>
                        The Bootstrap grid system uses a series of containers, rows, and
                        columns to layout and align content. It’s built with flexbox and is
                        fully responsive.
                    </p>

                    <h5 className="mt-4">🔹 Why Use Grid?</h5>
                    <p>
                        The grid helps create responsive layouts quickly and consistently.
                        Instead of writing custom CSS, you can use predefined classes and
                        props.
                    </p>

                    <h5 className="mt-4">🔹 Key Features</h5>
                    <ul>
                        <li>12-column responsive layout system.</li>
                        <li>Supports fixed and fluid containers.</li>
                        <li>Responsive breakpoints for mobile-first design.</li>
                        <li>Offsets and ordering utilities for precise layouts.</li>
                    </ul>

                    {/* Dynamic Code Samples */}
                    {bootstrapGridData.map((item) => (
                        <div key={item.id} className="mb-5">
                            <h4 className="fw-bold mb-2">{item.title}</h4>
                            <p>{item.description}</p>

                            {/* Result Section */}
                            {item.preview && (
                                <Card className="p-3 mb-3 shadow-sm">
                                    <h6 className="fw-bold text-primary mb-3">Result</h6>
                                    <JsxParser
                                        components={{ Container, Row, Col }}
                                        jsx={item.preview}
                                    />
                                </Card>
                            )}

                            {/* Code Section */}
                            {item.code && (
                                <Card className="bg-dark text-white shadow-sm mb-3">
                                    <Card.Body className="position-relative">
                                        <Button
                                            size="sm"
                                            variant={
                                                copiedId === item.id ? "success" : "outline-light"
                                            }
                                            className="position-absolute top-0 end-0 m-2"
                                            onClick={() => handleCopy(item.code, item.id)}
                                        >
                                            {copiedId === item.id ? "Copied!" : "Copy"}
                                        </Button>
                                        <pre className="mb-0">
                      <code>{item.code}</code>
                    </pre>
                                    </Card.Body>
                                </Card>
                            )}
                        </div>
                    ))}

                    {/* Static Table Section */}
                    <div className="mb-5">
                        <h4 className="fw-bold mb-3">📚 Grid Props & Classes</h4>
                        <Card className="p-3 shadow-sm">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Prop/Class</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>container / container-fluid</td>
                                    <td>string</td>
                                    <td>container</td>
                                    <td>Defines a fixed-width or full-width container.</td>
                                </tr>
                                <tr>
                                    <td>row</td>
                                    <td>string</td>
                                    <td>-</td>
                                    <td>Creates a horizontal group of columns.</td>
                                </tr>
                                <tr>
                                    <td>col, col-{`{breakpoint}-{n}`}</td>
                                    <td>number | string</td>
                                    <td>auto</td>
                                    <td>Defines the number of columns a grid item spans.</td>
                                </tr>
                                <tr>
                                    <td>offset-{`{breakpoint}-{n}`}</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Adds margin-left to a column for spacing.</td>
                                </tr>
                                <tr>
                                    <td>order-{`{breakpoint}-{n}`}</td>
                                    <td>number</td>
                                    <td>-</td>
                                    <td>Changes the order of grid items.</td>
                                </tr>
                                <tr>
                                    <td>align-items-*</td>
                                    <td>string</td>
                                    <td>stretch</td>
                                    <td>Aligns items vertically in a row.</td>
                                </tr>
                                <tr>
                                    <td>justify-content-*</td>
                                    <td>string</td>
                                    <td>start</td>
                                    <td>Aligns items horizontally in a row.</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BootstrapGrid;
