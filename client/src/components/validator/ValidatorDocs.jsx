import React, { useEffect, useState } from 'react';
import { Card, Button, InputGroup, FormControl, Table, Row, Col } from 'react-bootstrap';
import { Clipboard } from 'react-bootstrap-icons';
import { getApi } from "../helper/helper.js";

const ValidatorDocs = () => {
    const [validatorMethods, setValidatorMethods] = useState([]);
    const [copied, setCopied] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("validator");
                setValidatorMethods(response.data.data || []);
            } catch (error) {
                setValidatorMethods([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    // Separate install & usage from methods
    const installSnippet = validatorMethods.find(item => item.install);
    const usageSnippet = validatorMethods.find(item => item.usage);

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(text);
            setTimeout(() => setCopied(''), 2000);
        } catch (err) {
            alert('Copy failed!');
        }
    };

    // Filter methods only (skip install/usage)
    const filteredMethods = validatorMethods.filter(({ method, description }) =>
        method &&
        (method.toLowerCase().includes(searchTerm.toLowerCase()) ||
            description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="container py-5 px-3 px-md-5">
            <Row>
                <Col>
                    <h6 className="text-primary">🛡️ Validator.js</h6>
                    <p className="text-muted">
                        <code>validator</code> is a robust and widely-used JavaScript library for validating and sanitizing strings.
                        It helps ensure data integrity and security in both Node.js backend applications and frontend forms by handling user input effectively.
                    </p>
                </Col>
                <Col>
                    {installSnippet && (
                        <section className="mb-5">
                            <h2 className="h5 fw-semibold mb-3">📦 Installation</h2>
                            <pre className="bg-light p-3 border rounded d-flex justify-content-between align-items-center bg-black text-white">
                                <code>{installSnippet.install}</code>
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() => handleCopy(installSnippet.install)}
                                >
                                    {copied === installSnippet.install ? "Copied" : <Clipboard />}
                                </Button>
                            </pre>
                        </section>
                    )}
                </Col>
            </Row>

            {usageSnippet && (
                <section className="mb-5 text-white">
                    <h2 className="h5 fw-semibold mb-3">🔰 Basic Usage Example</h2>
                    <pre className="bg-light p-3 border rounded d-flex justify-content-between align-items-center bg-black">
                        <code>{usageSnippet.usage}</code>
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleCopy(usageSnippet.usage)}
                        >
                            {copied === usageSnippet.usage ? "Copied" : <Clipboard />}
                        </Button>
                    </pre>
                </section>
            )}

            <section className="mb-5">
                <h2 className="h5 fw-semibold mb-3">📚 Validator Methods</h2>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search methods..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </InputGroup>
                <div className="table-responsive">
                    <Table bordered hover>
                        <thead className="table-light">
                        <tr>
                            <th>Method</th>
                            <th>Description</th>
                            <th>Copy</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredMethods.map(({ method, description }, index) => (
                            <tr key={index}>
                                <td><code>{method}</code></td>
                                <td>{description}</td>
                                <td>
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() => handleCopy(method)}
                                    >
                                        {copied === method ? "Copied" : <Clipboard />}
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="h5 fw-semibold mb-3">💡 Why Use validator?</h2>
                <ul>
                    <li>Lightweight and dependency-free</li>
                    <li>Fast and easy to use</li>
                    <li>Great for input validation and sanitization</li>
                    <li>Commonly used with Node.js and Express</li>
                    <li>Supports a wide range of validation checks</li>
                </ul>
                <p className="mt-3 text-muted">
                    The <code>validator</code> library makes it simple to build secure and user-friendly forms and APIs.
                    It handles validation logic that would otherwise require writing a lot of repetitive code.
                </p>
            </section>
        </div>
    );
};

export default ValidatorDocs;
