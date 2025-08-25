import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import mermaid from "mermaid";
import {getApi} from "../helper/helper.js";

const PineconeDoc = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = async (code, key) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(key);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };
    const configurationCode = `import { Pinecone } from "@pinecone-database/pinecone";

const client = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
  environment: "us-west1-gcp"
});`

    // Graph data
    const similarityData = [
        { doc: "Doc1", score: 0.95 },
        { doc: "Doc2", score: 0.88 },
        { doc: "Doc3", score: 0.82 },
        { doc: "Doc4", score: 0.76 },
    ];

    const indexUsage = [
        { name: "Tech", value: 40 },
        { name: "Science", value: 25 },
        { name: "Health", value: 20 },
        { name: "Other", value: 15 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    // Mermaid diagrams
    const flowChart = `
    graph TD
      A[User Query] --> B[Generate Embedding]
      B --> C[Query Pinecone Index]
      C --> D[Retrieve Similar Vectors]
      D --> E[LLM Uses Retrieved Context]
  `;

    const processChart = `
    graph LR
      A[Upsert Data] --> B[Index Storage]
      B --> C[Query Vector]
      C --> D[Return Similarity Results]
  `;

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.run();
    }, []);
    const [pineconeDocs, setPineconeDocs] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("pinecone");
                setPineconeDocs(response.data.data || []);
            } catch (error) {
                setPineconeDocs([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    return (
        <div className="card border-0 shadow-lg bg-white">
            <div className="card-body px-4 px-md-5">
                <h2 className="text-success fw-bold mb-4">🌲 Pinecone Documentation</h2>
                <Row>
                    <Col>
                        <h6>📖 What is Pinecone?</h6>
                        <p>
                            Pinecone is a **fully managed vector database** built specifically for similarity search and AI-powered applications. Unlike traditional databases, Pinecone is optimized for storing high-dimensional vectors (like embeddings from OpenAI or Hugging Face models) and performing similarity searches with **low latency at scale**.
                        </p>
                        <ul>
                            <li>✅ Serverless and fully managed</li>
                            <li>✅ Handles billions of embeddings seamlessly</li>
                            <li>✅ Offers cosine, dot product, and Euclidean similarity search</li>
                            <li>✅ Integrates with LLMs like OpenAI, Cohere, Anthropic</li>
                        </ul>
                        <h6>📊 Pinecone Workflow</h6>
                        <pre className="mermaid">{flowChart}</pre>
                    </Col>
                    <Col>
                        <h6>
                            ⚙️ Installation & Setup
                        </h6>
                        <p>Install the Pinecone client for Node.js. You don’t install the DB itself — Pinecone is cloud-managed, you just connect with the client.</p>
                        <pre className="bg-black text-white p-3 rounded-3 position-relative">
                            <code>npm install @pinecone-database/pinecone</code>
                            <Button
                                className={`d-flex align-items-center gap-2 px-1 py-1 rounded text-white bg-transparent position-absolute top-0 end-0`}
                                onClick={() => handleCopy("npm install @pinecone-database/pinecone", "1")}
                            >
                                {copiedCode === "1" ? "✔ Copied" : "📋 Copy"}
                            </Button>
                        </pre>
                        <pre  className="bg-black text-white p-3 rounded-3 position-relative">
                            <code>yarn add @pinecone-database/pinecone</code>
                            <Button
                                className={`d-flex align-items-center gap-2 px-1 py-1 rounded text-white bg-transparent position-absolute top-0 end-0`}
                                onClick={() => handleCopy("yarn add @pinecone-database/pinecone", "2")}
                            >
                                {copiedCode === "2" ? "✔ Copied" : "📋 Copy"}
                            </Button>
                        </pre>
                        <p>Configure the client with your **API Key** and **Environment** from the Pinecone dashboard.</p>
                        <pre  className="bg-black text-white p-3 rounded-3 position-relative">
                            <code>
                                {configurationCode}
                            </code>
                            <Button
                                className={`d-flex align-items-center gap-2 px-1 py-1 rounded text-white bg-transparent position-absolute top-0 end-0`}
                                onClick={() => handleCopy(configurationCode, "3")}
                            >
                                {copiedCode === "3" ? "✔ Copied" : "📋 Copy"}
                            </Button>
                        </pre>
                        <h6>🔄 Process Overview</h6>
                        <pre className="mermaid">{processChart}</pre>
                    </Col>
                </Row>

                {pineconeDocs.map((section, index) => (
                    <div className="relative">
                        <h4 className="fw-bold">{section.heading}</h4>
                        {section.content.description}
                           <pre className="bg-black text-white p-3 rounded-3 position-relative">
                                <code>{section.content.code}</code>
                              <Button
                                  className={`d-flex align-items-center gap-2 px-1 py-1 rounded text-white bg-transparent position-absolute top-0 end-0`}
                                  onClick={() => handleCopy(section.content.code, section.id)}
                              >
                                {copiedCode === section.id ? "✔ Copied" : "📋 Copy"}
                              </Button>
                           </pre>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default PineconeDoc;
