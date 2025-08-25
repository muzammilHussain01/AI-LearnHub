import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Clipboard } from "react-bootstrap-icons";
import { getApi } from "../helper/helper.js";

const SwaggerDoc = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [copiedInstall, setCopiedInstall] = useState(false);
    const [swaggerData, setSwaggerData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleCopy = async (text, index) => {
        await navigator.clipboard.writeText(text);
        if (index === "install") {
            setCopiedInstall(true);
            setTimeout(() => setCopiedInstall(false), 2000);
        } else {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        }
    };

    const installCode = `npm install swagger-jsdoc swagger-ui-express`;

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("swagger");
                setSwaggerData(response.data.data || []);
            } catch (error) {
                setSwaggerData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    // Filtered data based on search
    const filteredData = swaggerData.filter(
        (example) =>
            example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            example.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="card border-0 shadow-lg bg-white">
            <div className="card-body px-4 px-md-5">
                <Row className="gy-4 mb-5">
                    <Col md={6}>
                        <section
                            className="bg-gradient p-4 rounded-4 border shadow-sm"
                            style={{ background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)" }}
                        >
                            <h2 className="h5 fw-semibold text-primary mb-3">
                                🔍 What is Swagger?
                            </h2>
                            <p className="text-muted small">
                                <code>swagger</code> is a powerful toolkit for documenting REST
                                APIs. It helps build interactive, standardized docs using the
                                OpenAPI specification.
                            </p>
                            <ul className="text-muted small ps-3">
                                <li>✅ Auto-generates API docs from comments</li>
                                <li>💡 Simplifies frontend-backend collaboration</li>
                                <li>🧪 Enables in-browser API testing</li>
                            </ul>
                        </section>
                    </Col>

                    <Col md={6}>
                        <section
                            className="bg-gradient p-4 rounded-4 border shadow-sm"
                            style={{ background: "linear-gradient(135deg, #fff3e0, #fff8e1)" }}
                        >
                            <h2 className="h5 fw-semibold text-warning mb-3">📦 Installation</h2>
                            <p className="text-muted small mb-2">Install Swagger dependencies:</p>
                            <div className="position-relative">
                                <button
                                    className={`btn btn-sm ${
                                        copiedInstall ? "btn-success" : "btn-outline-dark"
                                    } position-absolute top-0 end-0 m-2`}
                                    onClick={() => handleCopy(installCode, "install")}
                                >
                                    {copiedInstall ? "✅ Copied" : "📋 Copy"}
                                </button>
                                <pre className="bg-dark text-white small rounded p-3 mt-2 overflow-auto">
                  <code>{installCode}</code>
                </pre>
                            </div>
                        </section>
                    </Col>
                </Row>

                {/* Search Box */}
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control shadow-sm"
                        placeholder="🔎 Search Swagger examples..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {filteredData.length > 0 ? (
                    filteredData.map((example, index) => (
                        <section
                            key={index}
                            className={`mb-5 p-4 bg-white border-start border-${example.color} border-5 rounded-4 shadow-sm`}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h3 className={`h6 fw-semibold text-${example.color} mb-0`}>
                                    {example.icon} {example.title}
                                </h3>
                                <span className={`badge bg-${example.color} text-white`}>
                  Swagger Example
                </span>
                            </div>

                            <p className="text-muted small">{example.description}</p>

                            <div className="position-relative">
                                <button
                                    className={`btn btn-sm ${
                                        copiedIndex === index ? "btn-success" : "btn-outline-secondary"
                                    } position-absolute top-0 end-0 m-2`}
                                    onClick={() => handleCopy(example.code, index)}
                                >
                                    {copiedIndex === index ? "✅ Copied" : <Clipboard />}
                                </button>
                                <pre className="bg-dark text-white small p-3 rounded mt-2 overflow-auto">
                  <code>{example.code}</code>
                </pre>
                            </div>
                        </section>
                    ))
                ) : (
                    <p className="text-muted text-center mt-4">
                        🚫 No results found for "<b>{searchTerm}</b>"
                    </p>
                )}

                <section className="mt-5">
                    <h2 className="h5 fw-bold mb-3">📊 Method Summary Table</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle text-nowrap">
                            <thead className="table-primary">
                            <tr>
                                <th>Method</th>
                                <th>Description</th>
                                <th>Swagger Usage Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <span className="badge bg-primary">GET</span>
                                </td>
                                <td>Fetch data from the server</td>
                                <td>
                                    <code>/users</code> → returns list of users
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="badge bg-success">POST</span>
                                </td>
                                <td>Create a new resource</td>
                                <td>
                                    <code>/users</code> → creates a new user
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="badge bg-info text-dark">PUT</span>
                                </td>
                                <td>Update existing resource</td>
                                <td>
                                    <code>/users/{"{id}"}</code> → updates user by ID
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="badge bg-danger">DELETE</span>
                                </td>
                                <td>Delete a resource</td>
                                <td>
                                    <code>/users/{"{id}"}</code> → deletes user by ID
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="badge bg-warning text-dark">PATCH</span>
                                </td>
                                <td>Partial update of a resource</td>
                                <td>
                                    <code>/users/{"{id}"}</code> → updates some fields
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="badge bg-secondary">OPTIONS</span>
                                </td>
                                <td>Returns allowed HTTP methods</td>
                                <td>
                                    <code>/users</code> → used for CORS preflight
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="pt-3">
                    <h2 className="h5 fw-semibold mb-3">💡 Why Use Swagger?</h2>
                    <ul className="text-muted small ps-3">
                        <li>📚 Auto-generates interactive docs from annotations</li>
                        <li>🧩 OpenAPI-based, supports versioning and toolchains</li>
                        <li>🤝 Helps devs explore, understand, and test APIs easily</li>
                    </ul>
                    <p className="text-muted small mt-2">
                        Swagger simplifies maintaining and testing APIs while improving
                        developer onboarding and team collaboration.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default SwaggerDoc;
