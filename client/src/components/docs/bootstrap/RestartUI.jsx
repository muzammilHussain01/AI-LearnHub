import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function RestartUI() {
    return (
        <Container >
            <Row>
                <Col lg={10} >
                    <h2 className="fw-bold mb-4 text-primary">@restart/ui</h2>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <p className="text-muted mb-3">
                                <strong>@restart/ui</strong> is a low-level utility library designed to build highly customizable and accessible user interface components in React.
                            </p>

                            <p className="text-secondary mb-3">
                                It serves as the underlying framework behind many components in <code>react-bootstrap</code>, enabling developers to take control of interactivity, layout, and accessibility without being locked into Bootstrap's styling conventions.
                            </p>

                            <p className="text-secondary mb-3">
                                Unlike higher-level UI libraries, <code>@restart/ui</code> focuses solely on behavior and accessibility. This separation of concern allows teams to apply their own design systems or branding, while reusing the same robust interactive logic that powers Bootstrap components.
                            </p>

                            <p className="text-secondary mb-3">
                                Whether you're creating a fully custom dropdown, a modal with advanced animations, or a complex overlay with keyboard and screen-reader support, <code>@restart/ui</code> offers composable primitives like <code>useRootClose</code>, <code>FocusManager</code>, and <code>Overlay</code> to handle the tricky parts.
                            </p>

                            <p className="text-secondary mb-3">
                                Developers commonly use <code>@restart/ui</code> for:
                            </p>

                            <ul className="text-secondary">
                                <li>Custom dropdowns and tooltips with dynamic positioning using Popper.js</li>
                                <li>Modals with precise focus management and scroll locking</li>
                                <li>Toggleable elements with animated transitions (e.g. accordions, nav drawers)</li>
                                <li>Managing click-outside events and accessibility states</li>
                                <li>Replacing default behaviors of Bootstrap components for advanced use cases</li>
                            </ul>

                            <p className="text-secondary mb-3">
                                Because it's decoupled from any design system, <code>@restart/ui</code> is highly adaptable—it can be used with Tailwind, Chakra UI, Material UI, or your own custom styles. This makes it a great fit for teams building their own internal design system or design tokens.
                            </p>

                            <p className="text-secondary mb-3">
                                It also shines in projects that require strict accessibility compliance (such as WCAG or ARIA standards), as it lets you control focus order, role attributes, keyboard behavior, and more without relying on pre-defined patterns.
                            </p>

                            <p className="text-secondary mb-3">
                                Since it's battle-tested by its use inside <code>react-bootstrap</code>, you can trust it to handle edge cases and browser inconsistencies while giving you freedom to craft the UI you need.
                            </p>

                            <p className="text-muted mt-4 mb-0 small">
                                💡 <strong>Pro Tip:</strong> Think of <code>@restart/ui</code> as the "engine" powering interactive components. If you're building something that behaves like a modal, popover, or menu—but doesn't look like Bootstrap—this is the tool you want.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RestartUI;
