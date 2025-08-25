import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutDoc = () => {
    // 🔹 All Bootstrap topics stored here
    const bootstrapPageData = [
        {
            id: 1,
            page: "bootstrapPageData",
            title: "Grid System",
            description: "Bootstrap uses a responsive 12-column grid system to create layouts of all shapes and sizes.",
            useCase: "Build responsive page layouts that adapt to different screen sizes.",
            sampleCode: `<div class="container"><div class="row"><div class="col-6">Column 1</div><div class="col-6">Column 2</div></div></div>`
        },
        {
            id: 2,
            page: "bootstrapPageData",
            title: "Buttons",
            description: "Bootstrap includes pre-styled buttons with different variants.",
            useCase: "Create consistent buttons for forms and actions.",
            sampleCode: `<button class="btn btn-primary">Primary</button>`
        },
        {
            id: 3,
            page: "bootstrapPageData",
            title: "Navbar",
            description: "Responsive navigation header with support for branding, links, and more.",
            useCase: "Add a responsive navigation bar to your application.",
            sampleCode: `<nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">Brand</a></nav>`
        },
        {
            id: 4,
            page: "bootstrapPageData",
            title: "Cards",
            description: "Cards are flexible content containers with multiple variants and options.",
            useCase: "Display information in a structured card layout.",
            sampleCode: `<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text.</p></div></div>`
        },
        {
            id: 5,
            page: "bootstrapPageData",
            title: "Forms",
            description: "Bootstrap provides custom-styled form controls and layout options.",
            useCase: "Build responsive forms with validation support.",
            sampleCode: `<form><div class="mb-3"><label class="form-label">Email</label><input type="email" class="form-control" /></div></form>`
        }
    ];

    return (
        <Container>
            <Row>
                <Col lg={10}>
                    <h2 className="mb-3 fw-bold">📚 Bootstrap Documentation</h2>
                    <p className="text-muted fs-5">
                        Bootstrap is a powerful front-end framework for building responsive, mobile-first websites.
                        Below are some common Bootstrap components with usage examples and sample code.
                    </p>

                    {bootstrapPageData.map((item) => (
                        <Card key={item.id} className="mb-4 shadow-sm border-0">
                            <Card.Body>
                                <h4 className="fw-semibold">{item.title}</h4>
                                <p className="text-muted">{item.description}</p>
                                <p>
                                    <b>Use Case:</b> {item.useCase}
                                </p>

                                {/* Render sampleCode as plain string */}
                                <pre className="bg-dark text-white p-3 rounded">
                  {item.sampleCode}
                </pre>
                            </Card.Body>
                        </Card>
                    ))}

                    <h4 className="mt-5 fw-semibold">Why Bootstrap?</h4>
                    <p className="text-muted fs-6">
                        Bootstrap accelerates front-end development with ready-to-use components, responsive utilities, and cross-browser support.
                        It helps developers maintain design consistency and focus more on functionality rather than UI from scratch.
                    </p>

                    <h4 className="mt-4 fw-semibold">Advanced Features</h4>
                    <p className="text-muted fs-6">
                        Beyond grids and components, Bootstrap includes utilities for spacing, flexbox, typography, colors, modals, tooltips,
                        and much more. Developers can also customize it with Sass variables to match their brand’s identity.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutDoc;
