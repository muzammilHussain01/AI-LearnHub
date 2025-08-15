import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ExpressRateLimitDoc = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const snippets = [
        {
            title: '📦 Installation',
            code: `npm install express-rate-limit`,
            test: `// Test: Check if package is installed
const pkg = require('express-rate-limit');
console.assert(typeof pkg.rateLimit === 'function', 'rateLimit function should exist');`
        },
        {
            title: '🛡️ Basic Usage',
            code: `
import express from 'express';
import { rateLimit } from 'express-rate-limit';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
});

app.use(limiter);`,
            test: `// Test: Should limit to 100 requests
const request = require('supertest');
const express = require('express');
const { rateLimit } = require('express-rate-limit');

const app = express();
app.use(rateLimit({ windowMs: 60000, limit: 2 }));
app.get('/', (req, res) => res.send('ok'));

(async () => {
  await request(app).get('/'); // ok
  await request(app).get('/'); // ok
  const res = await request(app).get('/');
  console.assert(res.status === 429, 'Should block after limit');
})();`
        },
        {
            title: '💬 Custom Response Message',
            code: `
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 5,
  message: 'Too many requests from this IP',
});`,
            test: `// Test: Should return custom message
// See above example and check res.text includes 'Too many requests from this IP'`
        },
        {
            title: '🔄 Custom Handler Function',
            code: `
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 50,
  handler: (req, res) => {
    res.status(429).json({ message: 'Custom handler called' });
  },
});`,
            test: `// Test: Custom handler
// Send requests > limit and check if response JSON has { message: 'Custom handler called' }`
        },
        {
            title: '🚫 Skipping Certain Requests',
            code: `
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  skip: (req) => req.ip === '127.0.0.1',
});`,
            test: `// Test: Should skip localhost IP
// Use mock request with IP '127.0.0.1' and ensure limiter doesn’t apply`
        },
        {
            title: '📦 Using Redis Store (Example)',
            code: `
import RedisStore from 'rate-limit-redis';

const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.call(...args),
  }),
  windowMs: 15 * 60 * 1000,
  limit: 100,
});`,
            test: `// Test: Requires Redis setup
// Confirm keys are stored in Redis and limits apply across instances`
        },
        {
            title: '📊 Key Generator',
            code: `
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  keyGenerator: (req) => req.headers['x-real-ip'] || req.ip,
});`,
            test: `// Test: Use different x-real-ip headers
// Confirm rate limit works per custom key not just IP`
        },
        {
            title: '📝 All Config Options (Reference)',
            code: `{
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: 'Too many requests',
  statusCode: 429,
  headers: true,
  legacyHeaders: false,
  standardHeaders: 'draft-8',
  skip: (req) => false,
  handler: (req, res) => {},
  store: RedisStore,
  keyGenerator: (req) => req.ip,
}`,
            test: `// Test: Apply all options together and verify functionality works as expected.`
        }
    ];

    const handleCopy = (text, index) => {
        navigator.clipboard.writeText(text.trim());
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
    };

    return (
        <Container className="my-5">
            <Row className="mb-5">
                <Col md={7}>
                    <h2 className="mb-3">
                        <span className="text-dark">express-rate-limit</span>{' '}
                        <span className="badge bg-primary align-middle">TS</span>
                    </h2>

                    <p className="fs-5 text-muted">
                        <code>express-rate-limit</code> is a powerful and flexible middleware for <strong>Express.js</strong> that helps you
                        control how often clients can hit your endpoints. It’s essential for defending APIs against abuse, brute-force
                        attacks, and traffic floods.
                    </p>

                    <p className="fs-6 text-muted">
                        It tracks request counts per IP (or key) within a defined time window and can persist this data in-memory or via
                        external stores like Redis. With easy customization and clear headers, it’s perfect for both small apps and
                        enterprise-scale APIs.
                    </p>
                </Col>

                <Col md={5}>
                    <div className="bg-light border rounded p-3 h-100">
                        <h5 className="mb-3">🔒 Key Benefits</h5>
                        <ul className="mb-0 ps-3">
                            <li className="mb-2">
                                <strong>Prevents abuse:</strong> Stops clients from flooding your server with requests.
                            </li>
                            <li className="mb-2">
                                <strong>Security layer:</strong> Thwarts brute-force login and password attempts.
                            </li>
                            <li className="mb-2">
                                <strong>Flexible storage:</strong> Works with in-memory or persistent stores (e.g., Redis).
                            </li>
                            <li className="mb-2">
                                <strong>Custom limits:</strong> Apply global or route-specific rate limits.
                            </li>
                            <li>
                                <strong>Standards compliant:</strong> Returns useful headers like <code>RateLimit-Remaining</code> and
                                <code>Retry-After</code>.
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>

            {snippets.map((snippet, index) => (
                <Card className="mb-4" key={index}>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <strong>{snippet.title}</strong>
                        <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleCopy(snippet.code, index)}
                        >
                            {copiedIndex === index ? 'Copied!' : 'Copy'}
                        </Button>
                    </Card.Header>
                    <Card.Body>
            <pre className="bg-light p-3 rounded overflow-auto">
              <code>{snippet.code.trim()}</code>
            </pre>
                        {snippet.test && (
                            <div className="mt-3">
                                <h6>🧪 Test:</h6>
                                <pre className="bg-dark text-white p-2 rounded overflow-auto">
                  <code>{snippet.test.trim()}</code>
                </pre>
                            </div>
                        )}
                    </Card.Body>
                </Card>
            ))}

            <h5 className="mt-5">🔗 Helpful Links</h5>
            <ul>
                <li>
                    <a href="https://www.npmjs.com/package/express-rate-limit" target="_blank" rel="noreferrer">
                        NPM Package
                    </a>
                </li>
                <li>
                    <a href="https://github.com/express-rate-limit/express-rate-limit" target="_blank" rel="noreferrer">
                        GitHub Repository
                    </a>
                </li>
                <li>
                    <a href="https://express-rate-limit.mintlify.app/" target="_blank" rel="noreferrer">
                        Official Documentation
                    </a>
                </li>
            </ul>
        </Container>
    );
};

export default ExpressRateLimitDoc;
