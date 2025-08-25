import React, { useEffect, useState } from "react";
import { Container, Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { getApi } from "../../helper/helper.js";

const BootstrapIntro = () => {
    const [bootstrapIntroData, setBootstrapIntroData] = useState([]);
    const [copied, setCopied] = useState(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("bootstrapIntro");
                setBootstrapIntroData(
                    response.data.data.sort((a, b) => a._id - b._id) || []
                );
            } catch (error) {
                setBootstrapIntroData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    const handleCopy = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(id);
            setTimeout(() => setCopied(null), 1500);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <Container>
            <section className="mb-5">
                <h3>🚀 Getting Started with React-Bootstrap</h3>
                <p>
                    React-Bootstrap is a complete re-implementation of the popular Bootstrap
                    framework using React components. It removes the dependency on jQuery
                    while preserving the familiar Bootstrap look and feel.
                </p>
                <p>
                    ⚡ With React-Bootstrap, you gain access to pre-styled, accessible, and
                    reusable components, allowing you to build responsive UIs faster than ever.
                </p>

                {/* Dynamically render all API objects */}
                {bootstrapIntroData.map((snippet) => (
                    <Card key={snippet._id} className="mb-4 border-0 shadow-sm">
                        <Card.Body>
                            <h4 className="text-primary mb-3">{snippet.title}</h4>

                            <div className="position-relative bg-light rounded p-3 mb-3">
                <pre className="mb-0">
                  <code>{snippet.code}</code>
                </pre>

                                {/* Copy button top-right */}
                                <OverlayTrigger
                                    placement="left"
                                    overlay={
                                        <Tooltip>
                                            {copied === snippet.id ? "Copied!" : "Copy to clipboard"}
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        className="position-absolute top-0 end-0 m-2"
                                        onClick={() => handleCopy(snippet.code, snippet.id)}
                                    >
                                        {copied === snippet.id ? "✅" : "📋"}
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        </Card.Body>
                    </Card>
                ))}

                {/* Extra static notes at the end */}
                <Card className="mb-4 border-0 shadow-sm">
                    <Card.Body>
                        <h4 className="text-primary mb-3">📖 Best Practices & Notes</h4>
                        <p>🎨 Use Bootstrap utilities like spacing, text colors, and grid system to reduce custom CSS.</p>
                        <p>🔑 Accessibility is built-in. Always provide labels, aria attributes, and semantic markup.</p>
                        <p>⚡ React-Bootstrap eliminates jQuery, making your React app faster and cleaner.</p>
                        <p>✅ Remember: Only import the components you need. Tree-shaking will help remove unused code in production.</p>
                        <p>📌 Consistency is key. Use the design system provided by Bootstrap for uniform UIs.</p>
                        <blockquote>“The less CSS you write, the more consistent your UI will be.”</blockquote>
                        <ul>
                            <li>✔ Use utility-first classes when possible.</li>
                            <li>✔ Customize via SCSS if needed.</li>
                            <li>✔ Test across screen sizes for responsiveness.</li>
                            <li>✔ Prefer semantic HTML wrapped in React-Bootstrap.</li>
                        </ul>
                        <p>🔥 With these practices, you can scale React-Bootstrap projects from small apps to enterprise-level applications.</p>
                    </Card.Body>
                </Card>
            </section>
        </Container>
    );
};

export default BootstrapIntro;
