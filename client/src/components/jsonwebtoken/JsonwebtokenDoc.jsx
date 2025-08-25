import React, {useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import {getApi} from "../helper/helper.js";

const JsonwebtokenDoc = () => {
    const [contentData, setContentData] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("jwt");
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
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <div className="card border-0 shadow-lg bg-white">
            <div className="card-body px-4 px-md-5">
                <Row className="gy-4 mb-5">
                    {contentData
                        .filter((item) => item.type === "about" || item.type === "install")
                        .map((section, idx) => (
                            <Col md={6} key={idx}>
                                <section
                                    className="bg-gradient p-4 rounded-4 border shadow-sm"
                                    style={{ background: section.bg }}
                                >
                                    <h2
                                        className={`h5 fw-semibold text-${section.color} mb-3`}
                                    >
                                        {section.title}
                                    </h2>
                                    <p className="text-muted small">{section.description}</p>

                                    {section.type === "about" && (
                                        <ul className="text-muted small ps-3">
                                            {section.points.map((p, i) => (
                                                <li key={i}>{p}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.type === "install" && (
                                        <div className="position-relative">
                                            <button
                                                className={`btn btn-sm ${
                                                    copiedCode === "install"
                                                        ? "btn-success"
                                                        : "btn-outline-dark"
                                                } position-absolute top-0 end-0 m-2`}
                                                onClick={() => handleCopy(section.code, "install")}
                                            >
                                                {copiedCode === "install" ? "✅ Copied" : "📋 Copy"}
                                            </button>
                                            <pre className="bg-dark text-white small rounded p-3 mt-2 overflow-auto">
                        <code>{section.code}</code>
                      </pre>
                                        </div>
                                    )}
                                </section>
                            </Col>
                        ))}
                </Row>

                {contentData
                    .filter((item) => item.type === "example")
                    .map((example, index) => (
                        <section
                            key={index}
                            className={`mb-5 p-4 bg-white border-start border-${example.color} border-5 rounded-4 shadow-sm`}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h3
                                    className={`h6 fw-semibold text-${example.color} mb-0`}
                                >
                                    {example.icon} {example.title}
                                </h3>
                                <span className={`badge bg-${example.color} text-white`}>
                  Real-World Example
                </span>
                            </div>

                            <p className="text-muted small">{example.description}</p>

                            <div className="position-relative">
                                <button
                                    className={`btn btn-sm ${
                                        copiedCode === index
                                            ? "btn-success"
                                            : "btn-outline-secondary"
                                    } position-absolute top-0 end-0 m-2`}
                                    onClick={() => handleCopy(example.code, index)}
                                >
                                    {copiedCode === index ? "✅ Copied" : "📋 Copy"}
                                </button>
                                <pre className="bg-dark text-white small p-3 rounded mt-2 overflow-auto">
                  <code>{example.code}</code>
                </pre>
                            </div>
                        </section>
                    ))}
            </div>
        </div>
    );
};

export default JsonwebtokenDoc;
