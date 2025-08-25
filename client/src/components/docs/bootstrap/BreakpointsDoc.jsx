import React, {useEffect, useState} from "react";
import { Container, Table, Alert, Card, Button } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import {getApi} from "../../helper/helper.js";

const BreakpointsDocs = () => {
    const [bootstrapBreakPointsData, setBootstrapBreakPointsData] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("bootstrapBreakpointsPage");
                setBootstrapBreakPointsData(response.data.data.sort((a, b) => a._id - b._id) || []);
            } catch (error) {
                setBootstrapBreakPointsData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    // ✅ Copy to clipboard function
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard!");
        });
    };

    return (
        <Container>
            {bootstrapBreakPointsData.map((item) => {
                switch (item.type) {
                    case "text":
                        return (
                            <div key={item._id} className="mb-4">
                                <h2 className="text-primary fw-bold">{item.title}</h2>
                                <p className="lead">{item.content}</p>
                            </div>
                        );

                    case "alert":
                        return (
                            <Alert
                                key={item._id}
                                variant="light"
                                className="border border-info-subtle shadow-sm p-3"
                            >
                                <strong className="text-info">{item.content}</strong>
                            </Alert>
                        );

                    case "table":
                        return (
                            <div key={item._id} className="mt-5">
                                {item.title && (
                                    <h4 className="text-secondary">{item.title}</h4>
                                )}
                                {item.description && <p>{item.description}</p>}
                                <Table striped bordered hover responsive className="mt-3">
                                    <thead className="table-primary">
                                    <tr>
                                        {item.headers.map((header, i) => (
                                            <th key={i}>{header}</th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {item.rows.map((row, rIndex) => (
                                        <tr key={rIndex}>
                                            {Object.values(row).map((val, cIndex) => (
                                                <td key={cIndex}>{val}</td>
                                            ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        );

                    case "code":
                        return (
                            <div key={item._id} className="mt-4">
                                {item.title && (
                                    <h4 className="text-secondary">{item.title}</h4>
                                )}
                                {item.description && <p>{item.description}</p>}
                                <Card className="bg-light border border-secondary-subtle p-3 position-relative">
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        className="position-absolute top-0 end-0 m-2"
                                        onClick={() => copyToClipboard(item.code)}
                                    >
                                        Copy
                                    </Button>
                                    <pre className="mb-0">{item.code}</pre>
                                </Card>
                            </div>
                        );

                    default:
                        return null;
                }
            })}
        </Container>
    );
};

export default BreakpointsDocs;
