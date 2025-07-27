import React from 'react';
import { Container, Row, Col, Card, Stack, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const StacksDoc = () => {
    return (
        <Container >
            <Row>
                <Col lg={10} >
                    <h2 className="fw-bold mb-3">Stacks</h2>
                    <p className="fs-5 text-muted">
                        Stacks are shorthand helpers built on top of Bootstrap’s flexbox utilities. They make layout simpler and faster by allowing components to be stacked vertically or horizontally with minimal code.
                    </p>

                    {/* Ads Section */}
                    <Card className="bg-light border-0 shadow-sm my-4">
                        <Card.Body className="p-4">
                            <small className="text-uppercase text-muted">ads via Carbon</small>
                            <p className="mb-2 fs-6 fw-semibold">
                                Design and development tips delivered to your inbox. Stay inspired every weekday with handpicked content.
                            </p>
                            <small className="text-uppercase text-muted">ads via Carbon</small>
                        </Card.Body>
                    </Card>

                    {/* Vertical Stack */}
                    <h4 className="fw-semibold mt-4">Vertical Stack</h4>
                    <p className="text-muted fs-6">
                        By default, Stacks lay out children vertically. Each item expands to full width. Use the <code>gap</code> prop to control spacing between elements.
                    </p>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h6 className="fw-semibold text-primary mb-3">Result</h6>
                            <Stack gap={3}>
                                <div className="p-2 bg-light border rounded">First item</div>
                                <div className="p-2 bg-light border rounded">Second item</div>
                                <div className="p-2 bg-light border rounded">Third item</div>
                            </Stack>
                        </Card.Body>
                    </Card>

                    {/* Vertical Code */}
                    <Card className="bg-dark text-white mb-5">
                        <Card.Body>
                            <pre className="mb-0">
{`import Stack from 'react-bootstrap/Stack';

function VerticalExample() {
  return (
    <Stack gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default VerticalExample;`}
                            </pre>
                        </Card.Body>
                    </Card>

                    {/* Horizontal Stack */}
                    <h4 className="fw-semibold mt-4">Horizontal Stack</h4>
                    <p className="text-muted fs-6">
                        To arrange items side-by-side, use the <code>direction="horizontal"</code> prop. This lets you quickly align elements horizontally with consistent spacing.
                    </p>

                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h6 className="fw-semibold text-primary mb-3">Result</h6>
                            <Stack direction="horizontal" gap={3}>
                                <div className="p-2 bg-light border rounded">First item</div>
                                <div className="p-2 bg-light border rounded">Second item</div>
                                <div className="p-2 bg-light border rounded">Third item</div>
                            </Stack>
                        </Card.Body>
                    </Card>

                    {/* Horizontal Code */}
                    <Card className="bg-dark text-white mb-4">
                        <Card.Body>
                            <pre className="mb-0">
{`import Stack from 'react-bootstrap/Stack';

function HorizontalExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default HorizontalExample;`}
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={10} >
                    <h2 className="fw-bold mb-3">Using Horizontal Margin Utilities</h2>
                    <p className="fs-5 text-muted">
                        Bootstrap’s utility classes like <code>.ms-auto</code> can be used inside horizontal stacks to push elements apart and control alignment. This is useful for layouts where you want space between specific items.
                    </p>

                    {/* Stack Result */}
                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <h6 className="fw-semibold text-primary mb-3">Result</h6>
                            <Stack direction="horizontal" gap={3}>
                                <div className="p-2 bg-light border rounded">First item</div>
                                <div className="vr" />
                                <div className="p-2 bg-light border rounded ms-auto">Second item</div>
                                <div className="vr" />
                                <div className="p-2 bg-light border rounded">Third item</div>
                            </Stack>
                        </Card.Body>
                    </Card>

                    {/* Code Preview */}
                    <Card className="bg-dark text-white mb-4">
                        <Card.Body>
                            <pre className="mb-0">
{`import Stack from 'react-bootstrap/Stack';

function HorizontalMarginStartExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">First item</div>
      <div className="vr" />
      <div className="p-2 ms-auto">Second item</div>
      <div className="vr" />
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default HorizontalMarginStartExample;`}
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={10} >
                    <h2 className="fw-bold mb-3">Stack Examples</h2>
                    <p className="fs-5 text-muted">
                        React Bootstrap's <code>Stack</code> component allows you to manage vertical and horizontal layouts with ease. Below are examples demonstrating vertical button groups and inline forms using flexbox utilities.
                    </p>

                    {/* Vertical Stack Example */}
                    <Card className="border-0 shadow-sm mb-5">
                        <Card.Body>
                            <h5 className="fw-semibold mb-3 text-primary">Vertical Stack of Buttons</h5>
                            <p className="text-muted">Use a vertical Stack to stack buttons and other elements:</p>

                            <Stack gap={2} className="col-md-5 mx-auto">
                                <Button variant="secondary">Save changes</Button>
                                <Button variant="outline-secondary">Cancel</Button>
                            </Stack>
                        </Card.Body>
                    </Card>

                    {/* Horizontal Stack Form Example */}
                    <Card className="border-0 shadow-sm">
                        <Card.Body>
                            <h5 className="fw-semibold mb-3 text-primary">Inline Form using Horizontal Stack</h5>
                            <p className="text-muted">Create a responsive inline form layout using horizontal stacking:</p>

                            <Stack direction="horizontal" gap={3}>
                                <Form.Control className="me-auto" placeholder="Add your item here..." />
                                <Button variant="secondary">Submit</Button>
                                <div className="vr" />
                                <Button variant="outline-danger">Reset</Button>
                            </Stack>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={10} >
                    <Card className="bg-dark text-white shadow-sm">
                        <Card.Body>
                            <pre className="mb-0">
  <code>
{`import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function FormExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>
  );
}

export default FormExample;`}
  </code>
</pre>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={10} >
                    <h2 className="fw-bold mb-4">API Documentation: Stack</h2>

                    <Card className="shadow-sm mb-4">
                        <Card.Body>
              <pre className="mb-0">
                <code>{`import Stack from 'react-bootstrap/Stack'`}</code>
              </pre>
                        </Card.Body>
                    </Card>

                    <p className="text-muted">
                        The <strong>Stack</strong> component provides a simple and powerful abstraction over Bootstrap's flexbox utilities. It allows you to stack children vertically or horizontally with consistent spacing and responsive design support.
                    </p>

                    <Table bordered hover responsive className="mt-4">
                        <thead className="table-light">
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><code>as</code></td>
                            <td><code>React.ElementType | undefined</code></td>
                            <td><code>'div'</code></td>
                            <td>Element used to render the component.</td>
                        </tr>
                        <tr>
                            <td><code>bsPrefix</code></td>
                            <td><code>string | undefined</code></td>
                            <td><code>'hstack' | 'vstack'</code></td>
                            <td>
                                Changes the base class name and modifier prefix. Defaults to <code>hstack</code> if <code>direction</code> is <code>horizontal</code>, or <code>vstack</code> if <code>vertical</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>direction</code></td>
                            <td><code>'horizontal' | 'vertical' | undefined</code></td>
                            <td><em>undefined</em></td>
                            <td>Sets the flex direction for the stack layout.</td>
                        </tr>
                        <tr>
                            <td><code>gap</code></td>
                            <td>
                                <code>
                                    0–5 | number | {'{ xs, sm, md, lg, xl, xxl }'}
                                </code>
                            </td>
                            <td><em>undefined</em></td>
                            <td>
                                Controls the spacing between children in the stack. Supports static and responsive values.
                            </td>
                        </tr>
                        </tbody>
                    </Table>

                    <div className="mt-4 text-muted small">
                        <p><strong>Note:</strong> The <code>Stack</code> component is ideal for creating flexible and spaced layouts quickly with minimal code.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default StacksDoc;
