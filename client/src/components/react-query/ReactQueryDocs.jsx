import React, { useEffect, useState } from "react";
import { getApi } from "../helper/helper.js";

const ReactQueryDocs = () => {
    const [copiedCode, setCopiedCode] = useState(null);
    const [reactQueryData, setReactQueryData] = useState([]);

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
        const fetchTopics = async () => {
            try {
                const response = await getApi("reactQuery");
                if (response?.data?.data) {
                    setReactQueryData(response.data.data);
                } else {
                    setReactQueryData([]);
                }
            } catch (error) {
                console.error("Error fetching topics:", error);
                setReactQueryData([]);
            }
        };
        fetchTopics();
    }, []);

    // ✅ Static intro cards
    const staticIntro = [
        {
            id: "installation",
            title: "📦 Installation",
            description: "Install React Query in your project using npm, yarn, or pnpm.",
            code: [
                { key: "npm", content: "npm install @tanstack/react-query" },
                { key: "yarn", content: "yarn add @tanstack/react-query" },
                { key: "pnpm", content: "pnpm add @tanstack/react-query" }
            ]
        },
        {
            id: "about",
            title: "⚛️ What is React Query?",
            description:
                "React Query is a library for managing server state in React. It provides caching, background updates, synchronization, retries, and pagination — reducing boilerplate code.",
            list: [
                "✅ Simplifies API fetching",
                "⚡ Automatic caching & background refetching",
                "📊 Handles loading & error states",
                "🔄 Works with REST, GraphQL, or any async source"
            ],
            highlight: "🚀 React Query makes data fetching effortless in modern apps."
        }
    ];

    const allSections = [...staticIntro, ...reactQueryData];

    return (
        <div className="container py-4">
            <div className="row g-4">
                {allSections.map((section) => (
                    <div key={section.id} className="col-md-6">
                        <div className="card shadow-sm border-0 rounded-4 h-100">
                            <div className="card-body p-4">
                                {/* Title */}
                                <h5 className="fw-bold mb-3 text-primary d-flex align-items-center">
                                    {section.title}
                                </h5>

                                {/* Description */}
                                {section.description && (
                                    <p className="text-muted small mb-3">{section.description}</p>
                                )}

                                {/* List */}
                                {section.list && (
                                    <ul className="text-muted small ps-3 mb-3">
                                        {section.list.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}

                                {/* Highlight */}
                                {section.highlight && (
                                    <div className="alert alert-success small rounded-3 mb-3">
                                        {section.highlight}
                                    </div>
                                )}

                                {/* Code */}
                                {section.code && section.code.length > 0 && (
                                    <div className="mt-3">
                                        {section.code.map((codeBlock) => (
                                            <div key={codeBlock.key} className="position-relative mb-3">
                                                <button
                                                    className={`btn btn-sm ${
                                                        copiedCode === codeBlock.key
                                                            ? "btn-success"
                                                            : "btn-outline-secondary"
                                                    } position-absolute top-0 end-0 m-2`}
                                                    onClick={() =>
                                                        handleCopy(codeBlock.content, codeBlock.key)
                                                    }
                                                >
                                                    {copiedCode === codeBlock.key
                                                        ? "✅ Copied"
                                                        : "📋 Copy"}
                                                </button>
                                                <pre className="bg-dark text-white small p-3 rounded mt-2 overflow-auto">
                                                    <code>{codeBlock.content}</code>
                                                </pre>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReactQueryDocs;
