import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const CorsDoc = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const installCode = `npm install cors`;

    const corsExamples = [
        {
            title: 'Basic Setup',
            color: 'primary',
            icon: '🌐',
            code: `const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'CORS enabled!' });
});

app.listen(3000);`,
            description: 'Enable CORS for all routes and origins in an Express app.'
        },
        {
            title: 'Restrict Specific Origin',
            color: 'success',
            icon: '🔒',
            code: `const corsOptions = {
  origin: 'https://example.com'
};

app.use(cors(corsOptions));`,
            description: 'Allow CORS requests only from a specific origin.'
        },
        {
            title: 'Enable CORS for Specific Routes',
            color: 'info',
            icon: '🚪',
            code: `const cors = require('cors');

app.get('/public', cors(), (req, res) => {
  res.json({ message: 'This route is CORS-enabled for all origins!' });
});`,
            description: 'Apply CORS only to a particular route.'
        },
        {
            title: 'CORS with Credentials',
            color: 'warning',
            icon: '🍪',
            code: `const corsOptions = {
  origin: 'https://example.com',
  credentials: true
};

app.use(cors(corsOptions));`,
            description: 'Allow cookies and authorization headers in CORS requests.'
        },
        {
            title: 'Custom Headers and Methods',
            color: 'secondary',
            icon: '⚙️',
            code: `const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));`,
            description: 'Specify allowed headers and HTTP methods.'
        },
        {
            title: 'Preflight Request Handling',
            color: 'danger',
            icon: '🛫',
            code: `app.options('*', cors());`,
            description: 'Enable CORS for OPTIONS preflight requests.'
        }
    ];

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

                {corsExamples.map((example, index) => (
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

export default CorsDoc;
