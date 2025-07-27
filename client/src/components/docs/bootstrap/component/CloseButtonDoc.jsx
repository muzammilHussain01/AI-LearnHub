import React from 'react';
import { CloseButton, Container, Row, Col, Card,Table } from 'react-bootstrap';

const CloseButtonDoc = () => {
    return (
        <>
            <Container className="py-4">
                <h4 className="text-primary fw-semibold mb-4">Close Button Examples</h4>
                <p>
                    The CloseButton component in React-Bootstrap provides a customizable, accessible way to dismiss UI elements like modals or alerts. It supports variants, disabled states, dark themes, and screen reader labels. Simple to implement, it enhances user interactions while maintaining visual consistency across Bootstrap-based interfaces in your React application.
                </p>

                <Row className="gy-4">
                    {/* Basic Close Button */}
                    <Col md={6}>
                        <Card className="p-3 shadow-sm">
                            <Card.Title className="mb-3">Basic</Card.Title>
                            <CloseButton />
                            <Card className="bg-black text-white">
                            <pre>
                            <code>{`import CloseButton from 'react-bootstrap/CloseButton';

function BasicExample() {
  return <CloseButton />;
}

export default BasicExample;`}</code>
                        </pre>
                            </Card>

                        </Card>
                    </Col>

                    {/* Disabled Close Button */}
                    <Col md={6}>
                        <Card className="p-3 shadow-sm">
                            <Card.Title className="mb-3">Disabled</Card.Title>
                            <CloseButton disabled />
                            <Card className="bg-black text-white">
                            <pre>
                            <code>{`import CloseButton from 'react-bootstrap/CloseButton';

function DisabledExample() {
  return <CloseButton disabled />;
}

export default DisabledExample;`}</code>
                        </pre>
                            </Card>
                        </Card>
                    </Col>

                    {/* White Variant */}
                    <Col md={6}>
                        <Card
                            className="p-3 shadow-sm bg-dark text-white"
                            data-bs-theme="dark"
                        >
                            <Card.Title className="mb-3">White Variant</Card.Title>
                            <div className="d-flex gap-2">
                                <CloseButton />
                                <CloseButton disabled />
                            </div>
                        </Card>
                        <Card className="bg-black text-white">
                            <pre>
                            <code>{`import CloseButton from 'react-bootstrap/CloseButton';

function VariantsExample() {
  return (
    <div data-bs-theme="dark" className='bg-dark p-2'>
      <CloseButton />
      <CloseButton disabled />
    </div>
  );
}

export default VariantsExample;`}</code>
                        </pre>
                        </Card>
                    </Col>

                    {/* Accessible (aria-label) */}
                    <Col md={6}>
                        <Card className="p-3 shadow-sm">
                            <Card.Title className="mb-3">With aria-label</Card.Title>
                            <CloseButton aria-label="Hide content" />
                        </Card>
                        <Card className="bg-black text-white">
                            <pre>
                            <code>{`import CloseButton from 'react-bootstrap/CloseButton';

function LabelledExample() {
  return <CloseButton aria-label="Hide" />;
}

export default LabelledExample;`}</code>
                        </pre>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="py-4">
                <h4 className="text-primary fw-semibold mb-3">CloseButton API</h4>
                <p className="text-secondary mb-4">
                    <code>import CloseButton from 'react-bootstrap/CloseButton'</code>
                </p>

                <Table striped bordered hover responsive>
                    <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>aria-label</code></td>
                        <td><code>string | undefined</code></td>
                        <td><code>'Close'</code></td>
                        <td>An accessible label indicating the relevant information about the Close Button.</td>
                    </tr>
                    <tr>
                        <td><code>variant</code></td>
                        <td><code>'white' | string | undefined</code></td>
                        <td><em>—</em></td>
                        <td>
                            Render different color variant for the button. Omitting this will render the default dark color.
                        </td>
                    </tr>
                    <tr>
                        <td><code>onClick</code></td>
                        <td><code>function | undefined</code></td>
                        <td><em>—</em></td>
                        <td>A callback fired after the Close Button is clicked.</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default CloseButtonDoc;
