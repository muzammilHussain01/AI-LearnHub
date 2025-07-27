import React, { useEffect, useState } from 'react';
import {
    Container, Row, Col, Card, Button, Table, Badge,
    ListGroup, ProgressBar, Accordion, Alert,
    InputGroup, Form, Nav, Image
} from 'react-bootstrap';
import { Clipboard, Star, Clock, CheckCircle, Lightning, CodeSlash, BoxArrowUpRight, Terminal, ShieldLock, Gear } from 'react-bootstrap-icons';
import axios from 'axios';

export default function AxiosDoc() {
    const [dataSample, setDataSample] = useState(null);
    const [errorSample, setErrorSample] = useState(null);
    const [copied, setCopied] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => setDataSample(res.data))
            .catch(err => setErrorSample(err.message));
    }, []);

    const axiosUseCases = [
        {
            title: 'GET Request with Params',
            code: `axios.get('/user', { params: { id: 123 } })`
        },
        {
            title: 'POST Request with Data',
            code: `axios.post('/user', { name: 'John', age: 30 })`
        },
        {
            title: 'PUT Request',
            code: `axios.put('/user/123', { name: 'John Updated' })`
        },
        {
            title: 'DELETE Request',
            code: `axios.delete('/user/123')`
        },
        {
            title: 'Set Timeout',
            code: `axios.get('/long-request', { timeout: 5000 })`
        },
        {
            title: 'Handle Errors with Catch',
            code: `axios.get('/bad-url').catch(err => console.error(err))`
        },
        {
            title: 'Custom Headers',
            code: `axios.get('/secure-data', { headers: { Authorization: 'Bearer TOKEN' } })`
        },
        {
            title: 'Request Cancellation',
            code: `const controller = new AbortController();
axios.get('/data', { signal: controller.signal });
controller.abort();`
        },
        {
            title: 'Using Axios Instance',
            code: `const api = axios.create({ baseURL: 'https://api.example.com' });
api.get('/endpoint');`
        },
        {
            title: 'Transforming Request and Response',
            code: `axios.get('/user', {
  transformResponse: [data => {
    const parsed = JSON.parse(data);
    parsed.fetched = true;
    return parsed;
  }]
})`
        }
    ];

    const handleCopy = async (code, id) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(id);
            setTimeout(() => setCopied(null), 2000);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    const renderCodeBlock = (code, id) => (
        <div className="position-relative">
            <pre className="bg-dark text-white p-3 rounded" style={{ whiteSpace: 'pre-wrap' }}>
                <code>{code}</code>
            </pre>
            <Button
                size="sm"
                variant="light"
                onClick={() => handleCopy(code, id)}
                className="position-absolute top-0 end-0 m-2"
            >
                <Clipboard className="me-1" />
                {copied === id ? "Copied!" : "Copy"}
            </Button>
        </div>
    );

    return (
        <Container className="py-5">
            <Row className="align-items-center py-4 px-4 bg-white rounded-4 shadow-sm mb-4 border">
                <Col xs="auto">
                    <div
                        style={{
                            backgroundColor: "#f6f8fa",
                            borderRadius: "50%",
                            padding: "14px",
                            boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
                            display: "inline-block"
                        }}
                    >
                        <Image
                            src="https://axios-http.com/assets/logo.svg"
                            alt="Axios Logo"
                            fluid
                            style={{ width: "52px", height: "52px" }}
                        />
                    </div>
                </Col>

                <Col>
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <h1 className="fw-semibold mb-1" style={{ fontSize: "2rem", color: "#212529" }}>
                            Axios
                            <Badge bg="light" text="dark" className="ms-2 border border-secondary-subtle">
                                v1.11.0
                            </Badge>
                        </h1>
                        <Button variant="outline-dark" size="sm" className="ms-auto d-flex align-items-center gap-1">
                            <Star size={16} />
                            Star on GitHub
                        </Button>
                    </div>
                    <p className="text-muted mb-2" style={{ fontSize: "1.05rem" }}>
                        Lightweight promise-based HTTP client for modern JavaScript apps.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                        <Badge bg="info" className="px-3 py-1 d-flex align-items-center gap-1">
                            <CheckCircle size={16} /> TypeScript Ready
                        </Badge>
                        <Badge bg="success" className="px-3 py-1 d-flex align-items-center gap-1">
                            <CheckCircle size={16} /> MIT Licensed
                        </Badge>
                        <Badge bg="secondary" className="px-3 py-1 d-flex align-items-center gap-1">
                            <Clock size={16} /> Updated 4 Days Ago
                        </Badge>
                    </div>
                </Col>
            </Row>

            <Nav variant="tabs" defaultActiveKey="#overview">
                {['Overview', 'Install', 'Examples', 'Interceptors'].map(section => (
                    <Nav.Item key={section}>
                        <Nav.Link href={`#${section.toLowerCase()}`}>{section}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            <Row className="my-4">
                <Col md={8}>
                    <Card className="mb-4" id="install">
                        <Card.Body>
                            <h5>Install</h5>
                            {renderCodeBlock('npm install axios', 'install')}
                            <Button variant="outline-primary" className="me-2">Try on RunKit</Button>
                            <Button variant="outline-danger">Report Malware</Button>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4" id="about">
                        <Card.Body>
                            <h5>What is Axios?</h5>
                            <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: "1.7", color: "#333" }}>
                                Axios is a lightweight and powerful HTTP client built for modern JavaScript applications.
                                Whether you're working in the browser or Node.js, Axios simplifies API interactions with
                                a clean promise-based syntax. It supports async/await, request cancellation, custom interceptors,
                                and automatic JSON transformation. Ideal for frontend frameworks like React, Vue, and Angular,
                                Axios makes network requests more intuitive and readable. With built-in error handling and
                                configuration flexibility, it’s a developer favorite for RESTful communication. Say goodbye to
                                verbose fetch calls — Axios brings clarity and control to your data-fetching logic in just a few
                                elegant lines of code.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4" id="examples">
                        <Card.Body>
                            <h5>Example Usage</h5>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Simple GET with try/catch</Accordion.Header>
                                    <Accordion.Body>
                                        {renderCodeBlock(`async function fetchTodo() {
  try {
    const response = await axios.get('/todos/1');
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}`, 'basic-get')}
                                        {dataSample && <Alert variant="success">Sample response: <code>{JSON.stringify(dataSample)}</code></Alert>}
                                        {errorSample && <Alert variant="danger">Error: {errorSample}</Alert>}
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Concurrent Requests</Accordion.Header>
                                    <Accordion.Body>
                                        {renderCodeBlock(`const [users, posts] = await Promise.all([
  axios.get('/users'),
  axios.get('/posts')
]);`, 'concurrent')}
                                        <p className="text-muted">Using <code>Promise.all</code> is preferred over <code>axios.all</code>.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Interceptors</Accordion.Header>
                                    <Accordion.Body>
                                        {renderCodeBlock(`axios.interceptors.request.use(req => {
  req.headers.Authorization = 'Bearer TOKEN';
  return req;
});
axios.interceptors.response.use(res => {
  return res.data;
}, err => {
  return Promise.reject(err);
});`, 'interceptors')}
                                        <p className="text-muted">Add headers or manipulate responses globally.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {axiosUseCases.map((useCase, idx) => (
                                    <Accordion.Item eventKey={`usecase-${idx}`} key={idx}>
                                        <Accordion.Header>{useCase.title}</Accordion.Header>
                                        <Accordion.Body>
                                            {renderCodeBlock(useCase.code, `usecase-${idx}`)}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <h5>Key Features</h5>
                            <ListGroup variant="flush">
                                {[
                                    'Promise API support',
                                    'Request/Response interception',
                                    'Automatic JSON transforms',
                                    'Cancel requests',
                                    'Timeouts',
                                    'Parameter serialization',
                                    'Multipart form submission',
                                    'Client‑side XSRF protection'
                                ].map((f, idx) => (
                                    <ListGroup.Item key={idx}>{f}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="mb-4 shadow rounded-4 border-0 bg-white">
                        <Card.Body>
                            <div className="mb-3">
                                <h5 className="fw-semibold d-flex align-items-center text-primary">
                                    <CodeSlash className="me-2" /> About Axios
                                </h5>
                            </div>

                            <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: "1.6" }}>
                                <strong>Axios</strong> is a flexible, promise-based HTTP client for the browser and Node.js.
                                It makes working with APIs seamless through built-in JSON handling, robust error management, interceptors,
                                request cancellation, and support for async/await.
                            </p>

                            <p style={{ fontSize: "1.05rem", color: "#444" }}>
                                Perfect for frontend frameworks like <strong>React</strong>, <strong>Vue</strong>, and <strong>Angular</strong>,
                                Axios improves developer productivity by making API code more intuitive, reusable, and scalable.
                            </p>

                            {/* CTA & Quick Stats */}
                            <div className="d-flex flex-wrap gap-3 align-items-center my-4">
                                <Badge bg="dark" className="fs-6 py-2 px-3"><Terminal className="me-2" /> 36k+ GitHub Stars</Badge>
                                <Badge bg="info" className="fs-6 py-2 px-3"><ShieldLock className="me-2" /> 90M+ Weekly Downloads</Badge>
                                <Button variant="outline-primary" size="sm" className="ms-auto">
                                    Learn More <BoxArrowUpRight className="ms-1" />
                                </Button>
                            </div>

                            <hr />

                            {/* Feature Highlights */}
                            <Row className="text-muted">
                                <Col xs={12} md={6}>
                                    <p className="mb-2 d-flex align-items-center">
                                        <CheckCircle className="text-success me-2" /> Request & Response Interceptors
                                    </p>
                                    <p className="mb-2 d-flex align-items-center">
                                        <Lightning className="text-warning me-2" /> Promise-based API with Async/Await
                                    </p>
                                    <p className="mb-2 d-flex align-items-center">
                                        <CheckCircle className="text-success me-2" /> Supports Browser & Node.js
                                    </p>
                                </Col>
                                <Col xs={12} md={6}>
                                    <p className="mb-2 d-flex align-items-center">
                                        <CheckCircle className="text-success me-2" /> Automatic JSON Parsing
                                    </p>
                                    <p className="mb-2 d-flex align-items-center">
                                        <CheckCircle className="text-success me-2" /> Cancel Tokens & Timeouts
                                    </p>
                                    <p className="mb-2 d-flex align-items-center">
                                        <CheckCircle className="text-success me-2" /> Seamless REST Integration
                                    </p>
                                </Col>
                            </Row>

                            {/* Quote/Insight block */}
                            <div className="bg-light border-start border-4 border-primary p-3 mt-4 rounded-3">
                                <em className="text-muted">
                                    “Axios simplifies HTTP communication so effectively, it's almost invisible—yet essential.”
                                </em>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4 shadow-sm border-0 rounded-4 bg-white">
                        <Card.Body>
                            <h5 className="fw-semibold mb-3 d-flex align-items-center text-dark">
                                <CodeSlash className="me-2 text-primary" /> Axios vs Native Fetch
                            </h5>
                            <p className="text-muted">
                                While both Axios and Fetch APIs handle HTTP requests, Axios simplifies complex flows:
                            </p>
                            <Table bordered hover size="sm" className="mt-3">
                                <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Axios</th>
                                    <th>Fetch</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Request/Response Interceptors</td>
                                    <td>✅ Built-in</td>
                                    <td>❌ Manual</td>
                                </tr>
                                <tr>
                                    <td>JSON Auto-Parsing</td>
                                    <td>✅ Yes</td>
                                    <td>❌ No (manual <code>.json()</code>)</td>
                                </tr>
                                <tr>
                                    <td>Error Handling</td>
                                    <td>✅ Network & status codes</td>
                                    <td>❌ Only network</td>
                                </tr>
                                <tr>
                                    <td>Progress Tracking</td>
                                    <td>✅ Supported</td>
                                    <td>❌ Needs workarounds</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4 shadow-sm border-0 rounded-4 bg-light">
                        <Card.Body>
                            <h5 className="fw-semibold mb-3 d-flex align-items-center text-dark">
                                <Gear className="me-2 text-secondary" /> Global Axios Configuration
                            </h5>
                            <p className="text-muted">
                                You can set global config for Axios to avoid repetition:
                            </p>
                            <pre className="bg-dark text-white p-3 rounded small">
      {`axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.timeout = 10000;`}
    </pre>
                            <p className="mt-2 text-muted">
                                Useful for apps interacting with the same API frequently.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4 shadow-sm rounded-4 border-0 bg-white">
                        <Card.Body>
                            <h5 className="fw-semibold d-flex align-items-center">
                                <Gear className="me-2 text-secondary" /> Custom Axios Instances
                            </h5>
                            <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: "1.6" }}>
                                Create pre-configured Axios instances for consistent API configuration across your app. You can define base URLs, headers, and timeouts once and reuse the instance anywhere.
                            </p>
                            <pre className="bg-dark text-white p-3 rounded"><code>{`const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});`}</code></pre>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}
