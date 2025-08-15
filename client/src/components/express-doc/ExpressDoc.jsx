import React, { useState } from 'react';
import {Row,Col} from "react-bootstrap"
const ExpressDoc = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const installCode = `npm install express`;

    const realWorldExamples = [
        {
            title: 'Environment Configuration',
            color: 'warning',
            icon: '⚙️',
            code: `require('dotenv').config();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`,
            description: `Using dotenv helps manage environment-specific configurations securely. This allows different settings for dev, test, and production environments.

Key Points:
- Keeps sensitive credentials out of source code
- Enables separation of config from code
- Supports easy switching between environments (dev/test/prod)`
        },
        {
            title: 'CORS Configuration',
            color: 'info',
            icon: '🌐',
            code: `const cors = require('cors');
app.use(cors({
  origin: 'https://example.com',
  methods: ['GET', 'POST'],
  credentials: true
}));`,
            description: `CORS (Cross-Origin Resource Sharing) is used to allow or restrict resources on a web page to be requested from another domain.

Key Points:
- Prevents unauthorized cross-domain requests
- Required for frontend-backend apps hosted separately
- Helps maintain security and integrity of APIs`
        },
        {
            title: 'Request Validation with Joi',
            color: 'primary',
            icon: '🧪',
            code: `const Joi = require('joi');
const schema = Joi.object({ name: Joi.string().required() });

app.post('/user', (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  res.send('Validated!');
});`,
            description: `Joi is a powerful validation library that ensures incoming data meets the expected structure before processing.

Key Points:
- Prevents processing invalid data
- Enhances security and stability
- Useful for input validation in APIs`
        },
        {
            title: 'Custom Response Formatter',
            color: 'success',
            icon: '🧾',
            code: `app.use((req, res, next) => {
  res.success = (data) => res.json({ status: 'success', data });
  next();
});

app.get('/books', (req, res) => {
  res.success([{ id: 1, title: 'Node.js Guide' }]);
});`,
            description: `A standardized response format makes API results consistent and easier for frontend applications to consume.

Key Points:
- Promotes consistency in API structure
- Simplifies frontend data handling
- Enhances maintainability`
        },
        {
            title: 'API Versioning',
            color: 'secondary',
            icon: '📌',
            code: `const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');

app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);`,
            description: `Versioning allows you to deploy new changes without breaking existing clients.

Key Points:
- Maintains backward compatibility
- Enables progressive enhancement
- Allows controlled rollout of new features`
        },
        {
            title: 'Cluster Mode for Scaling',
            color: 'danger',
            icon: '🔁',
            code: `const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork());
} else {
  app.listen(3000, () => console.log('Worker started'));
}`,
            description: `Clustering enables your Node.js app to utilize all CPU cores, improving scalability.

Key Points:
- Utilizes all system cores
- Improves concurrency and load handling
- Essential for production deployments`
        },
        {
            title: 'Graceful Shutdown',
            color: 'dark',
            icon: '🛑',
            code: `const server = app.listen(3000);
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});`,
            description: `Graceful shutdown ensures the app closes connections and resources cleanly when terminated.

Key Points:
- Prevents data loss during shutdown
- Closes DB or file handlers properly
- Recommended for cloud-native apps`
        },
        {
            title: 'Session Management',
            color: 'info',
            icon: '🗝️',
            code: `const session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));`,
            description: `Sessions track user state across multiple requests, typically used for login persistence.

Key Points:
- Stores user data securely across pages
- Essential for authentication systems
- Can be backed by DB or memory stores`
        },
        {
            title: 'Caching with Redis',
            color: 'danger',
            icon: '🚀',
            code: `const redis = require('redis');
const client = redis.createClient();

app.get('/cache', (req, res) => {
  client.get('key', (err, data) => {
    if (data) return res.send(data);
    // simulate DB fetch
    const result = 'fresh data';
    client.setex('key', 3600, result);
    res.send(result);
  });
});`,
            description: `Redis caching stores frequently accessed data in memory, drastically improving performance.

Key Points:
- Reduces DB load
- Improves response time
- Ideal for read-heavy apps`
        },
        {
            title: 'Role-Based Access Control (RBAC)',
            color: 'primary',
            icon: '👮‍♂️',
            code: `function authorize(role) {
  return (req, res, next) => {
    if (req.user.role !== role) return res.status(403).send('Access denied');
    next();
  };
}
app.get('/admin', authorize('admin'), (req, res) => res.send('Welcome Admin'));`,
            description: `RBAC restricts system access to authorized users based on roles.

Key Points:
- Adds fine-grained access control
- Ensures proper privilege separation
- Common in enterprise-grade systems`
        }
    ];

    return (
        <div>
            <div className="card border-0 shadow-lg bg-white">
                <div className="card-body px-4 px-md-5 ">

                    {/* Introductory Sections */}
                    <Row className="gy-4 mb-5">
                        <Col md={6}>
                            <section className="bg-gradient p-4 rounded-4 border shadow-sm" style={{ background: 'linear-gradient(135deg, #e8f5e9, #f1f8e9)' }}>
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
                            <section className="bg-gradient p-4 rounded-4 border shadow-sm" style={{ background: 'linear-gradient(135deg, #fff3e0, #fff8e1)' }}>
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

                    {/* Code Examples Section */}
                    {realWorldExamples.map((example, index) => (
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

export default ExpressDoc;
