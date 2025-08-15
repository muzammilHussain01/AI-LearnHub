import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const JsonwebtokenDoc = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const installCode = `npm install jsonwebtoken`;

    const jwtExamples = [
        {
            title: 'Basic Token Generation',
            color: 'primary',
            icon: '🔐',
            code: `const jwt = require('jsonwebtoken');

const payload = { userId: 123 };
const secret = 'mysecretkey';
const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log(token);`,
            description: `Use the jwt.sign method to create a token with a payload, secret key, and optional expiration time.

Key Points:
- Useful for sessionless authentication
- Add custom claims to payload`
        },
        {
            title: 'Token Verification',
            color: 'success',
            icon: '✅',
            code: `const jwt = require('jsonwebtoken');

const token = 'your.jwt.token';
const secret = 'mysecretkey';

try {
  const decoded = jwt.verify(token, secret);
  console.log(decoded);
} catch (err) {
  console.error('Invalid token');
}`,
            description: `Verify tokens using jwt.verify. This ensures the token is valid and hasn’t been tampered with.

Key Points:
- Catches expired or modified tokens
- Returns the decoded payload if valid`
        },
        {
            title: 'Token Decoding (without verification)',
            color: 'warning',
            icon: '🕵️',
            code: `const jwt = require('jsonwebtoken');

const token = 'your.jwt.token';
const decoded = jwt.decode(token);

console.log(decoded);`,
            description: `Decode tokens without verifying them. Only use this when you trust the source.

Key Points:
- No validation happens
- Use for extracting payload data only`
        },
        {
            title: 'Middleware for JWT Auth in Express',
            color: 'danger',
            icon: '🧱',
            code: `const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, 'mysecretkey');
    req.user = decoded;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
}`,
            description: `Protect routes using middleware to verify JWT tokens before granting access.

Key Points:
- Extract token from headers
- Attach user info to request`
        },
        {
            title: 'Custom Claims in JWT',
            color: 'info',
            icon: '🧾',
            code: `const jwt = require('jsonwebtoken');

const token = jwt.sign({
  userId: 1,
  role: 'admin',
  permissions: ['read', 'write']
}, 'secretkey');`,
            description: `Include custom claims like roles or permissions in your JWT payload.

Key Points:
- Useful for RBAC (Role Based Access Control)
- Define scopes, roles, or flags`
        },
        {
            title: 'Protect Route Example (Full Setup)',
            color: 'secondary',
            icon: '🛡️',
            code: `const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Access denied");
  try {
    const user = jwt.verify(token, 'secretkey');
    req.user = user;
    next();
  } catch (err) {
    res.status(403).send("Invalid token");
  }
};

app.get('/dashboard', auth, (req, res) => {
  res.send("Welcome user {req.user.userId}");
});

app.listen(3000);`,
            description: `Combining Express and JWT to protect a real API endpoint.

Key Points:
- Middleware protects /dashboard route
- Only users with valid token can access`
        }
    ];

    return (
        <div className="card border-0 shadow-lg bg-white">
            <div className="card-body px-4 px-md-5">
                <Row className="gy-4 mb-5">
                    <Col md={6}>
                        <section className="bg-gradient p-4 rounded-4 border shadow-sm" style={{ background: 'linear-gradient(135deg, #e0f7fa, #f1f8e9)' }}>
                            <h2 className="h5 fw-semibold text-primary mb-3">🔐 What is jsonwebtoken?</h2>
                            <p className="text-muted small">
                                <code>jsonwebtoken</code> (JWT) is a library used to create, verify, and decode tokens in Node.js. It's widely used for authentication and secure data exchange.
                            </p>
                            <ul className="text-muted small ps-3">
                                <li>✅ Stateless authentication</li>
                                <li>📦 Encodes user data as JSON</li>
                                <li>🔒 Used for securing APIs</li>
                            </ul>
                        </section>
                    </Col>

                    <Col md={6}>
                        <section className="bg-gradient p-4 rounded-4 border shadow-sm" style={{ background: 'linear-gradient(135deg, #fff3e0, #fff8e1)' }}>
                            <h2 className="h5 fw-semibold text-warning mb-3">📦 Installation</h2>
                            <p className="text-muted small mb-2">
                                Install jsonwebtoken using npm:
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

                {jwtExamples.map((example, index) => (
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

export default JsonwebtokenDoc;
