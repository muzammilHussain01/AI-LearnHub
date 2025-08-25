// MermaidDoc.jsx
import React, { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import mermaid from "mermaid";
import { getApi } from "../helper/helper.js";

const MermaidDoc = () => {
    const [advancedMermaidData, setAdvancedMermaidData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [copiedCode, setCopiedCode] = useState(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("mermaid");
                setAdvancedMermaidData(response.data.data.sort((a, b) => a.id - b.id) || []);
            } catch (error) {
                setAdvancedMermaidData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    const handleCopy = async (code, key) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(key);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.run();
    }, []);

    // Installation commands
    const installCommands = [
        "npm install mermaid",
        "yarn add mermaid",
        `import mermaid from "mermaid";

mermaid.initialize({ startOnLoad: true });`
    ];

    // Filter data based on search term
    const filteredData = advancedMermaidData.filter((item) =>
        [item.title, item.description, item.useCase]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container my-4">
            <div className="row g-4">
                {/* Left Side - Intro */}
                <div className="col-md-6">
                    <h2 className="text-success fw-bold mb-3">🌊 Mermaid Documentation</h2>

                    {/* What is Mermaid */}
                    <h6>📖 What is Mermaid?</h6>
                    <p>
                        Mermaid is a <b>JavaScript library</b> that lets you create diagrams
                        and visualizations using text definitions. It’s great for flowcharts,
                        sequence diagrams, class diagrams, Gantt charts, and more.
                    </p>

                    <ul className="list-unstyled">
                        <li>✅ Easy to use, text-based diagrams</li>
                        <li>✅ Supports multiple diagram types</li>
                        <li>✅ Works well with React & Markdown</li>
                        <li>✅ Theme customization and styling</li>
                    </ul>
                </div>

                {/* Right Side - Installation */}
                <div className="col-md-6">
                    <h6>⚙️ Installation & Setup</h6>
                    <p>
                        Install Mermaid via <b>npm</b> or <b>yarn</b>, then import and
                        initialize it inside your project.
                    </p>

                    {installCommands.map((cmd, idx) => (
                        <div key={idx} className="position-relative mb-3">
                            <pre className="bg-dark text-white p-3 rounded">
                                <code>{cmd}</code>
                            </pre>
                            <Button
                                className="btn btn-outline-light btn-sm position-absolute top-0 end-0 m-2"
                                onClick={() => handleCopy(cmd, idx)}
                            >
                                {copiedCode === idx ? "✔ Copied" : "📋 Copy"}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Search Box */}
            <div className="row mt-5">
                <div className="col-12">
                    <Form.Control
                        type="text"
                        placeholder="🔍 Search Mermaid examples..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-4"
                    />
                </div>
            </div>

            {/* Advanced Usage */}
            <div className="row">
                <div className="col-12">
                    <h4 className="fw-bold">🧩 Advanced Mermaid Examples</h4>
                    <p>
                        Below are advanced use cases of Mermaid with real-world diagrams and
                        code snippets.
                    </p>

                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <Card key={item.id} className="mb-4 shadow-sm">
                                <Card.Body>
                                    <h5>{item.title}</h5>
                                    <p className="text-muted">{item.description}</p>
                                    <p>
                                        <b>Use Case:</b> {item.useCase}
                                    </p>

                                    {/* Diagram Preview */}
                                    {item.diagramCode.startsWith("//") ? (
                                        <pre className="bg-dark text-white p-3 rounded">
                                            <code>{item.diagramCode}</code>
                                        </pre>
                                    ) : (
                                        <pre className="mermaid">{item.diagramCode}</pre>
                                    )}

                                    {/* Sample Code with Copy */}
                                    <div className="position-relative mt-3">
                                        <pre className="bg-dark text-white p-3 rounded">
                                            <code>{item.sampleCode}</code>
                                        </pre>
                                        <Button
                                            className="btn btn-outline-light btn-sm position-absolute top-0 end-0 m-2"
                                            onClick={() => handleCopy(item.sampleCode, item.id)}
                                        >
                                            {copiedCode === item.id ? "✔ Copied" : "📋 Copy"}
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p className="text-muted">No results found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MermaidDoc;
