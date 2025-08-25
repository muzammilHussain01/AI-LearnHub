import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { getApi } from "../helper/helper.js";

const ExpressDoc = () => {
    const [copiedCode, setCopiedCode] = useState(null);
    const [expressUseCaseData, setExpressUseCaseData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("express");
                setExpressUseCaseData(response.data.data || []);
            } catch (error) {
                setExpressUseCaseData([]);
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

    const installCode = `npm install express`;

    // 🔎 Filter data based on searchQuery
    const filteredData = expressUseCaseData.filter(example =>
        example.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        example.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        example.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="card border-0 shadow-lg bg-white">
                <div className="card-body px-4 px-md-5 ">

                    {/* Introductory Sections */}
                    <Row className="gy-4 mb-5">
                        <Col md={6}>
                            <section className="bg-gradient p-4 rounded-4 border shadow-sm"
                                     style={{ background: 'linear-gradient(135deg, #e8f5e9, #f1f8e9)' }}>
                                <h2 className="h5 fw-semibold text-success mb-3">📘 What is Express.js?</h2>
                                <p className="text-muted small">
                                    Express.js is a lightweight and unopinionated Node.js framework that helps you build APIs and web applications with speed and flexibility.
                                </p>
                                <ul className="text-muted small ps-3">
                                    <li>⚡ Minimalist and fast</li>
                                    <li>🔄 Middleware-based architecture</li>
                                    <li>🔌 Easy integration with any database</li>
                                    <li>🧰 Rich set of HTTP utility methods</li>
                                </ul>
                            </section>
                        </Col>

                        <Col md={6}>
                            <section className="bg-gradient p-4 rounded-4 border shadow-sm"
                                     style={{ background: 'linear-gradient(135deg, #fff3e0, #fff8e1)' }}>
                                <h2 className="h5 fw-semibold text-warning mb-3">📦 Installation</h2>
                                <p className="text-muted small mb-2">
                                    Install Express and related middlewares using:
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

                    {/* 🔎 Search Box */}
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control form-control-lg rounded-3 shadow-sm"
                            placeholder="🔍 Search examples..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Code Examples Section */}
                    {filteredData.length > 0 ? (
                        filteredData.map((example, index) => (
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
                        ))
                    ) : (
                        <p className="text-muted text-center">No results found for "{searchQuery}".</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExpressDoc;
