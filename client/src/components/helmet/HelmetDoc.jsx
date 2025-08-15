import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const HelmetDoc = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const installCode = `npm install helmet`;

    const helmetExamples = [
        {
            title: 'Basic Helmet Setup',
            color: 'primary',
            icon: '🛡️',
            code: `const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Helmet is protecting this route!');
});

app.listen(3000);`,
            description: `Helmet helps secure Express apps by setting various HTTP headers. It’s a collection of smaller middleware functions that set security-related HTTP response headers.

Key Points:
- Protects against well-known web vulnerabilities
- Sets Content Security Policy, XSS filter, etc.
- Easy to integrate with Express`
        },
        {
            title: 'Custom Helmet Configuration',
            color: 'success',
            icon: '⚙️',
            code: `app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));`,
            description: `You can disable or configure specific Helmet protections based on your app’s needs.

Key Points:
- Disable strict policies for APIs or micro frontends
- Fine-tune security settings`
        },
        {
            title: 'Using Individual Helmet Modules',
            color: 'info',
            icon: '📦',
            code: `const helmet = require('helmet');
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));`,
            description: `Use specific Helmet middleware if you only need certain protections.

Key Points:
- Choose modules based on use-case
- Combine selectively for performance or legacy apps`
        },
        {
            title: 'Hide Powered-By Header',
            color: 'warning',
            icon: '🙈',
            code: `app.use(helmet.hidePoweredBy());`,
            description: `Hiding the \`X-Powered-By\` header adds an extra layer of obscurity to your app.

Key Points:
- Prevents attackers from targeting known exploits
- Enhances obscurity security`
        },
        {
            title: 'Content Security Policy (CSP)',
            color: 'danger',
            icon: '🧱',
            code: `app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'cdn.example.com']
  }
}));`,
            description: `CSP helps prevent XSS attacks by controlling the sources of content that the browser can load.

Key Points:
- Protects against malicious script injection
- Highly customizable policy
- Best defense for frontend-heavy apps`
        },
        {
            title: 'Frameguard (Clickjacking Protection)',
            color: 'secondary',
            icon: '🖼️',
            code: `app.use(helmet.frameguard({ action: 'sameorigin' }));`,
            description: `Prevents clickjacking attacks by controlling whether your site can be embedded in iframes.

Key Points:
- Default setting is 'sameorigin'
- Use 'deny' to block all iframe usage`
        },
        {
            title: 'Referrer Policy',
            color: 'info',
            icon: '🔗',
            code: `app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));`,
            description: `Controls the ` + "`Referer`" + ` header sent with requests. This helps hide sensitive URLs.

Key Points:
- Prevents leaking sensitive paths
- Reduces potential for data mining`
        },
        {
            title: 'DNS Prefetch Control',
            color: 'dark',
            icon: '🌐',
            code: `app.use(helmet.dnsPrefetchControl({ allow: false }));`,
            description: `Disables browser DNS prefetching to reduce privacy leakage.

Key Points:
- Improves control over client DNS behavior
- Useful for privacy-focused apps`
        },
        {
            title: 'Permitted Cross-Domain Policies',
            color: 'warning',
            icon: '📄',
            code: `app.use(helmet.permittedCrossDomainPolicies());`,
            description: `Sets the ` + "`X-Permitted-Cross-Domain-Policies`" + ` header to restrict Adobe Flash and Acrobat behavior.

Key Points:
- Prevents unauthorized data sharing
- Rare but relevant for legacy systems`
        },
        {
            title: 'Strict Transport Security (HSTS)',
            color: 'success',
            icon: '🔒',
            code: `app.use(helmet.hsts({
  maxAge: 63072000,
  includeSubDomains: true
}));`,
            description: `Forces HTTPS connections by instructing the browser to only use HTTPS for future requests.

Key Points:
- Strongly recommended in production
- Prevents SSL stripping attacks
- Must serve your site via HTTPS`
        }
    ];


    return (
        <div>
            <div className="card border-0 shadow-lg bg-white">
                <div className="card-body px-4 px-md-5">
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

                    {helmetExamples.map((example, index) => (
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

export default HelmetDoc;
