import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Navbar } from 'react-bootstrap';
import {getApi} from "../helper/helper.js";

const LodashDocs = () => {
    const [copied, setCopied] = useState(null);
    const [searchKey, setSearchKey] = useState("");
    const [lodashMethods, setLodashMethods] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("loadLash");
                setLodashMethods(response.data.data || []);
            } catch (error) {
                setLodashMethods([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);


    const filteredMethods = lodashMethods.filter(
        (method) => method.name.toLowerCase().includes(searchKey.toLowerCase())
    );

    const handleCopy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(key);
            setTimeout(() => setCopied(null), 1500);
        } catch {
            alert('Failed to copy');
        }
    };

    return (
        <div className="container my-4 bg-white p-4 rounded shadow-sm">
            <h2 className="text-primary mb-4">📦 Lodash Documentation</h2>

            <p>
                Lodash is a modern JavaScript utility library delivering modularity, performance & extras.
                It helps with common tasks involving arrays, numbers, objects, strings, etc.
                Below is a collection of useful Lodash methods with examples.
            </p>

            <h5 className="mt-4">⚙️ Installation</h5>
            <pre className="bg-light p-2 border rounded d-flex align-items-center justify-content-between">
            <span>npm install lodash</span>
                      <button
                          className="btn btn-sm btn-outline-primary ms-2"
                          onClick={() => handleCopy("npm install lodash", "install")}
                      >
                        {copied === "install" ? "Copied!" : "Copy"}
                      </button>
            </pre>


            <h5 className="mt-4">🚀 Common Methods with Examples</h5>
            <div className="table-responsive">
                <Navbar className="bg-body-tertiary justify-content-between">
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    onChange={e => setSearchKey(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Navbar>

                <table className="table table-bordered table-striped align-middle">
                    <thead className="table-light">
                    <tr>
                        <th>Method</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Example</th>
                        <th>Copy</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredMethods.map((method, idx) => (
                        <tr key={idx}>
                            <td><code>_.{method.name}()</code></td>
                            <td>{method.category}</td>
                            <td>{method.desc}</td>
                            <td>
                                <pre className="bg-light p-2 rounded text-wrap">{method.example}</pre>
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => handleCopy(method.example, idx)}
                                >
                                    {copied === idx ? 'Copied!' : 'Copy'}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <p className="mt-4">
                Lodash includes <strong>over 300 functions</strong>.
                Visit the official documentation for a complete list at{' '}
                <a href="https://lodash.com/docs" target="_blank" rel="noopener noreferrer">
                    lodash.com/docs
                </a>.
            </p>
        </div>
    );
};

export default LodashDocs;
