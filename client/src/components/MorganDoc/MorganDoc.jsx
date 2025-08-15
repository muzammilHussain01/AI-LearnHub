import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const MorganDoc = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const installCode = `npm install morgan`;

    const morganExamples = [
        {
            title: 'Basic Setup',
            color: 'primary',
            icon: '🔧',
            code: `const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);`,
            description: `Log all HTTP requests in development-friendly format.

Key Points:
- 'dev' format is short and color-coded
- Great for debugging in local environment`
        },
        {
            title: 'Writing Logs to a File',
            color: 'secondary',
            icon: '📝',
            code: `const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: logStream }));`,
            description: `Log HTTP traffic to a file instead of the console.

Key Points:
- Use 'combined' format for full detail
- Create log files for production auditing`
        },
        {
            title: 'Custom Tokens',
            color: 'info',
            icon: '🧩',
            code: `const express = require('express');
const morgan = require('morgan');

const app = express();

morgan.token('host', function (req) {
  return req.hostname;
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :host'));`,
            description: `Add custom data to your logs.

Key Points:
- Create reusable tokens
- Extend logs with dynamic request values`
        },
        {
            title: 'Skipping Logs in Test Environment',
            color: 'warning',
            icon: '🚫',
            code: `const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev', {
  skip: function () { return process.env.NODE_ENV === 'test'; }
}));`,
            description: `Prevent log noise during automated testing.

Key Points:
- Use skip function to exclude test cases
- Keeps test output clean`
        },
        {
            title: 'Different Logs for Different Routes',
            color: 'dark',
            icon: '📁',
            code: `const express = require('express');
const morgan = require('morgan');

const app = express();

app.use('/api', morgan('tiny'));
app.use('/admin', morgan('combined'));

app.get('/api/data', (req, res) => res.send('API Data'));
app.get('/admin/dashboard', (req, res) => res.send('Admin Dashboard'));

app.listen(3000);`,
            description: `Use different log styles for different parts of your app.

Key Points:
- Tiny format for lightweight APIs
- Combined format for admin insights`
        },
        {
            title: 'Logging Only 4xx and 5xx Responses',
            color: 'danger',
            icon: '⚠️',
            code: `const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev', {
  skip: (req, res) => res.statusCode < 400
}));

app.get('/', (req, res) => res.sendStatus(404));

app.listen(3000);`,
            description: `Filter out successful requests and log only errors.

Key Points:
- Monitor problematic responses only
- Focus on debugging issues`
        }
    ];

    return (
        <div>
            <div className="card border-0 shadow-lg bg-white">
                <div className="card-body px-4 px-md-5">
                    <Row className="gy-4 mb-5">
                        <Col md={6}>
                            <section className="bg-gradient p-4 rounded-4 border shadow-sm" style={{ background: 'linear-gradient(135deg, #e3f2fd, #e8f5e9)' }}>
                                <h2 className="h5 fw-semibold text-primary mb-3">📦 What is Morgan?</h2>
                                <p className="text-muted small">
                                    Morgan is an HTTP request logger middleware for Node.js. It simplifies logging by automatically logging incoming HTTP requests in various formats.
                                </p>
                                <ul className="text-muted small ps-3">
                                    <li>📄 Built-in log formats like 'tiny', 'dev', 'combined'</li>
                                    <li>⚙️ Support for custom log tokens and formats</li>
                                    <li>🗂️ Ability to stream logs to files or services</li>
                                </ul>
                            </section>
                        </Col>

                        <Col md={6}>
                            <section className="bg-gradient p-4 rounded-4 border shadow-sm" style={{ background: 'linear-gradient(135deg, #fff3e0, #fff8e1)' }}>
                                <h2 className="h5 fw-semibold text-warning mb-3">📥 Installation</h2>
                                <p className="text-muted small mb-2">
                                    Install Morgan using npm:
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

                    {morganExamples.map((example, index) => (
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
        </div>
    );
};

export default MorganDoc;
