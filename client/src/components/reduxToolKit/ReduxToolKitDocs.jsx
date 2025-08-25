import React, {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import {getApi} from "../helper/helper.js";

const ReduxToolkitDoc = () => {
    const [reduxUseCases, setReduxUseCases] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("reduxToolKit");
                setReduxUseCases(response.data.data || []);
            } catch (error) {
                setReduxUseCases([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);
    const [copiedCode, setCopiedCode] = useState(null);
    const [search, setSearch] = useState("");

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const installCode = `npm install @reduxjs/toolkit react-redux`;

    // Filtering by search
    const filteredExamples = reduxUseCases.filter(ex =>
        ex.title.toLowerCase().includes(search.toLowerCase()) ||
        ex.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="card border-0 shadow-lg bg-white">
            <div className="card-body px-4 px-md-5">

                {/* Introduction + Installation */}
                <Row className="gy-4 mb-5">
                    <Col md={6}>
                        <section
                            className="bg-gradient p-4 rounded-4 border shadow-sm"
                            style={{ background: 'linear-gradient(135deg, #e3f2fd, #e8f5e9)' }}
                        >
                            <h2 className="h5 fw-semibold text-primary mb-3">⚛️ What is Redux Toolkit?</h2>
                            <p className="text-muted small">
                                <code>@reduxjs/toolkit</code> (RTK) is the official, recommended way to write Redux logic.
                                It simplifies store setup, reduces boilerplate, and comes with powerful tools like <b>createSlice</b>,
                                <b> createAsyncThunk</b>, and <b>RTK Query</b>.
                            </p>
                            <ul className="text-muted small ps-3">
                                <li>✅ Reduces Redux boilerplate</li>
                                <li>🚀 Built-in async handling & data fetching</li>
                                <li>📡 RTK Query for caching and API calls</li>
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
                                Install Redux Toolkit and React-Redux:
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

                {/* Search */}
                <Row className="gy-4 mb-4">
                    <Col>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="🔍 Search Redux Toolkit use cases..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Col>
                </Row>

                {/* Use Cases */}
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
            </div>
        </div>
    );
};

export default ReduxToolkitDoc;