import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Stack, Table } from "react-bootstrap";
import { getApi } from "../../helper/helper.js";

// ✅ Static table data (not coming from API)
const stackTableData = {
    headers: ["Prop", "Type", "Default", "Description"],
    rows: [
        ["as", "elementType", "<div>", "You can change the rendering element."],
        ["gap", "number | string", "0", "Control the space between children."],
        ["direction", "'vertical' | 'horizontal'", "vertical", "Set layout direction of Stack."],
        ["className", "string", "-", "Apply custom CSS classes."],
        ["style", "object", "-", "Pass inline styles to the stack container."],
        ["id", "string", "-", "Set a custom id for the stack container."],
        ["role", "string", "-", "Defines the ARIA role of the element."],
        ["ref", "React ref", "-", "Ref for accessing the underlying DOM element."],
        ["responsive", "boolean", "false", "Control if Stack adapts based on screen size."],
        ["wrap", "boolean", "false", "Allow children to wrap onto multiple lines in horizontal mode."],
        ["justify", "'start' | 'end' | 'center' | 'between' | 'around'", "start", "Set horizontal alignment."],
        ["align", "'start' | 'end' | 'center' | 'stretch' | 'baseline'", "stretch", "Set vertical alignment."],
    ],
};

const BootstrapStacks = () => {
    const [bootstrapStacksPageData, setBootstrapStacksPageData] = useState([]);
    const [copiedId, setCopiedId] = useState(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("bootstrapStacksPage");
                setBootstrapStacksPageData(response.data.data.sort((a, b) => a.id - b.id) || []);
            } catch (error) {
                setBootstrapStacksPageData([]);
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
                    <h2 className="fw-bold mb-3">Stacks</h2>
                    <p>
                        Stacks are shorthand helpers built on top of Bootstrap’s flexbox
                        utilities. They make layout simpler and faster by allowing
                        components to be stacked vertically or horizontally with minimal
                        code.
                    </p>

                    {bootstrapStacksPageData.map((item) => (
                        <div key={item.id} className="mb-5">
                            <h4 className="fw-bold mb-2">{item.title}</h4>
                            <p>{item.description}</p>

                            {/* Result Section */}
                            {item.preview && (
                                <Card className="p-3 mb-3 shadow-sm">
                                    <h6 className="fw-bold text-primary mb-3">Result</h6>
                                    {item.preview}
                                </Card>
                            )}

                            {/* Code Section */}
                            {item.code && (
                                <Card className="bg-dark text-white shadow-sm mb-3">
                                    <Card.Body className="position-relative">
                                        <Button
                                            size="sm"
                                            variant={copiedId === item.id ? "success" : "outline-light"}
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

                    {/* ✅ Always render static Table */}
                    <div className="mb-5">
                        <h4 className="fw-bold mb-2">📚 Stack Props</h4>
                        <p>The following table lists the available props for the Stack component:</p>
                        <Card className="p-3 shadow-sm">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    {stackTableData.headers.map((head, idx) => (
                                        <th key={idx}>{head}</th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {stackTableData.rows.map((row, rIdx) => (
                                    <tr key={rIdx}>
                                        {row.map((col, cIdx) => (
                                            <td key={cIdx}>{col}</td>
                                        ))}
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BootstrapStacks;
