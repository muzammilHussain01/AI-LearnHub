import React, {useEffect, useState} from 'react';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import {getApi} from "../helper/helper.js";

const CorsDoc = () => {
    const [corsData, setCorsData] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("cors");
                setCorsData(response.data.data || []);
            } catch (error) {
                setCorsData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    const [copiedCode, setCopiedCode] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const installCode = `npm install cors`;

    // ✅ Filter examples based on search term
    const filteredExamples = corsData.filter(example =>
        example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        example.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="card border-0 shadow-lg bg-white">
            <div className="card-body px-4 px-md-5">
                <Row className="gy-4 mb-5">
                    <Col md={6}>
                        <section
                            className="bg-gradient p-4 rounded-4 border shadow-sm"
                            style={{ background: 'linear-gradient(135deg, #e0f7fa, #f1f8e9)' }}
                        >
                            <h2 className="h5 fw-semibold text-primary mb-3">🌐 What is cors?</h2>
                            <p className="text-muted small">
                                <code>cors</code> is a Node.js package for providing a middleware to enable
                                Cross-Origin Resource Sharing (CORS) in Express applications.
                            </p>
                            <ul className="text-muted small ps-3">
                                <li>✅ Enables CORS easily</li>
                                <li>🔐 Handles origin, headers, and credentials</li>
                                <li>🛠️ Can be customized per route</li>
                            </ul>
                        </section>
                    </Col>

                    <Col md={6}>
                        <section
                            className="bg-gradient p-4 rounded-4 border shadow-sm"
                            style={{ background: 'linear-gradient(135deg, #fff3e0, #fff8e1)' }}
                        >
                            <h2 className="h5 fw-semibold text-warning mb-3">📦 Installation</h2>
                            <p className="text-muted small mb-2">
                                Install <code>cors</code> using npm:
                            </p>
                            <div className="position-relative">
                                <button
                                    className={`btn btn-sm ${copiedCode === 'install' ? 'btn-success' : 'btn-outline-dark'} position-absolute top-0 end-0 m-2`}
                                    onClick={() => handleCopy(installCode, 'install')}
                                >
                                    {copiedCode === 'install' ? '✅ Copied' : '📋 Copy'}
                                </button>
                                <pre className="bg-dark text-white small rounded p-3 mt-2 overflow-auto">
                                    <code>{installCode}</code>
                                </pre>
                            </div>
                        </section>
                    </Col>
                </Row>

                {/* 🔍 Search Box */}
                <InputGroup className="mb-4">
                    <FormControl
                        placeholder="Search CORS examples..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </InputGroup>

                {/* Render Filtered Examples */}
                {filteredExamples.map((example, index) => (
                    <section
                        key={index}
                        className={`mb-5 p-4 bg-white border-start border-${example.color} border-5 rounded-4 shadow-sm`}
                    >
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h3 className={`h6 fw-semibold text-${example.color} mb-0`}>
                                {example.icon} {example.title}
                            </h3>
                            <span className={`badge bg-${example.color} text-white`}>
                                Real-World Example
                            </span>
                        </div>

                        <p className="text-muted small">{example.description}</p>

                        <div className="position-relative">
                            <button
                                className={`btn btn-sm ${copiedCode === index ? 'btn-success' : 'btn-outline-secondary'} position-absolute top-0 end-0 m-2`}
                                onClick={() => handleCopy(example.code, index)}
                            >
                                {copiedCode === index ? '✅ Copied' : '📋 Copy'}
                            </button>
                            <pre className="bg-dark text-white small p-3 rounded mt-2 overflow-auto">
                                <code>{example.code}</code>
                            </pre>
                        </div>
                    </section>
                ))}

                {/* If nothing matches */}
                {filteredExamples.length === 0 && (
                    <p className="text-muted text-center">⚠️ No matching CORS examples found.</p>
                )}
            </div>
        </div>
    );
};

export default CorsDoc;
