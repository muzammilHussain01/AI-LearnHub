import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { getApi } from "../helper/helper.js";

const HelmetDoc = () => {
    const [helmetData, setHelmetData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [copiedCode, setCopiedCode] = useState(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("helmet");
                setHelmetData(response.data.data || []);
            } catch (error) {
                setHelmetData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const installCode = `npm install helmet`;

    // Filtered data based on search term
    const filteredData = helmetData.filter(example =>
        example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        example.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="card border-0 shadow-lg bg-white">
                <div className="card-body px-4 px-md-5">

                    {/* Search Box */}
                    <Row className="mb-4">
                        <Col md={12}>
                            <Form.Control
                                type="text"
                                placeholder="Search Helmet examples..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row className="gy-4 mb-5">
                        <Col md={6}>
                            <section className="bg-gradient p-4 rounded-4 border shadow-sm" style={{ background: 'linear-gradient(135deg, #e3f2fd, #f1f8e9)' }}>
                                <h2 className="h5 fw-semibold text-primary mb-3">🛡️ What is Helmet?</h2>
                                <p className="text-muted small">
                                    Helmet is a middleware for Express.js that helps secure your applications by setting HTTP headers. It mitigates several common vulnerabilities like Cross-Site Scripting, clickjacking, and more.
                                </p>
                                <ul className="text-muted small ps-3">
                                    <li>✅ Sets secure HTTP headers</li>
                                    <li>🧱 Protects from XSS and clickjacking</li>
                                    <li>⚙️ Easy to configure and modular</li>
                                </ul>
                            </section>
                        </Col>

                        <Col md={6}>
                            <section className="bg-gradient p-4 rounded-4 border shadow-sm" style={{ background: 'linear-gradient(135deg, #fff3e0, #fff8e1)' }}>
                                <h2 className="h5 fw-semibold text-warning mb-3">📦 Installation</h2>
                                <p className="text-muted small mb-2">
                                    Install Helmet using npm:
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

                    {/* Render Filtered Data */}
                    {filteredData.map((example, index) => (
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

                    {filteredData.length === 0 && (
                        <p className="text-muted text-center mt-4">No matching examples found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HelmetDoc;
