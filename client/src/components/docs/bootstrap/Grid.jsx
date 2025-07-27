import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Grid() {
    return (
        <>
            <Container >
                <Card className="p-4 shadow-sm border-0 bg-white rounded-4">
                    <h3 className="mb-3 fw-bold text-primary">📐 Grid System in Bootstrap</h3>

                    <p className="lead">
                        Bootstrap’s grid system uses a series of <strong>containers</strong>, <strong>rows</strong>, and <strong>columns</strong> to layout and align content. It’s fully responsive and built with <code>flexbox</code>, giving you great control over alignment and layout.
                    </p>

                    <Card className="bg-light-subtle p-3 border-0 mb-4">
                        <p className="mb-1 text-muted small">💡 Tip</p>
                        <p className="mb-0">
                            If you're new to flexbox, check out this guide from CSS Tricks for a deep dive:
                            {' '}
                            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">
                                A Guide to Flexbox ↗
                            </a>
                        </p>
                    </Card>

                    <h5 className="mt-4">📦 Container Types</h5>
                    <p>
                        <strong>Containers</strong> provide a responsive fixed width or full-width layout depending on the breakpoint or fluid mode:
                    </p>
                    <ul>
                        <li><code>&lt;Container&gt;</code> – responsive fixed-width container</li>
                        <li><code>&lt;Container fluid&gt;</code> – full-width container spanning 100% width</li>
                        <li><code>&lt;Container fluid="md"&gt;</code> – full-width until the <code>md</code> breakpoint</li>
                    </ul>

                    <h6 className="fw-semibold">🧾 Code Sample:</h6>
                    <pre className="bg-dark text-light rounded p-3 mb-4">
<code>{`import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;`}</code>
        </pre>

                    <Card className="p-4 shadow-sm border-0 bg-white rounded-4">
                        <h3 className="mb-4 fw-bold text-primary">🌊 Fluid Containers & Auto-Layout</h3>

                        {/* Fluid Container */}
                        <section className="mb-5">
                            <h5 className="fw-semibold">🚀 Fluid Container</h5>
                            <p>
                                You can use <code>&lt;Container fluid /&gt;</code> for <strong>width: 100%</strong> across all viewport and device sizes.
                                This is useful when you want your content to span the entire screen width.
                            </p>
                            <Card className="bg-body-secondary p-3 border-0 rounded-3 mb-3">
                                <Container fluid>
                                    <Row>
                                        <Col className="bg-white text-center border rounded py-2">1 of 1</Col>
                                    </Row>
                                </Container>
                            </Card>

                            <h6 className="fw-semibold">🧾 Code:</h6>
                            <pre className="bg-dark text-light rounded p-3">
<code>{`import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerFluidExample() {
  return (
    <Container fluid>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}`}</code>
          </pre>
                        </section>

                        {/* Fluid with Breakpoint */}
                        <section className="mb-5">
                            <h5 className="fw-semibold">📏 Fluid Container with Breakpoint</h5>
                            <p>
                                You can pass a <code>fluid="breakpoint"</code> prop (e.g., <code>"md"</code>) to make the container fluid
                                <strong> until a specific breakpoint</strong>.
                            </p>
                            <Card className="bg-body-secondary p-3 border-0 rounded-3 mb-3">
                                <Container fluid="md">
                                    <Row>
                                        <Col className="bg-white text-center border rounded py-2">1 of 1</Col>
                                    </Row>
                                </Container>
                            </Card>

                            <h6 className="fw-semibold">🧾 Code:</h6>
                            <pre className="bg-dark text-light rounded p-3">
<code>{`function ContainerFluidBreakpointExample() {
  return (
    <Container fluid="md">
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}`}</code>
          </pre>
                        </section>

                        {/* Auto Layout Columns */}
                        <section>
                            <h5 className="fw-semibold">⚙️ Auto-Layout Columns</h5>
                            <p>
                                When you don’t specify a width for <code>Col</code>, columns will share available space equally.
                                This is helpful for creating flexible layouts without manually setting sizes.
                            </p>

                            <Card className="bg-body-secondary p-3 border-0 rounded-3 mb-3">
                                <Container>
                                    <Row className="mb-2">
                                        <Col className="bg-white text-center border rounded py-2">1 of 2</Col>
                                        <Col className="bg-white text-center border rounded py-2">2 of 2</Col>
                                    </Row>
                                    <Row>
                                        <Col className="bg-white text-center border rounded py-2">1 of 3</Col>
                                        <Col className="bg-white text-center border rounded py-2">2 of 3</Col>
                                        <Col className="bg-white text-center border rounded py-2">3 of 3</Col>
                                    </Row>
                                </Container>
                            </Card>

                            <h6 className="fw-semibold">🧾 Code:</h6>
                            <pre className="bg-dark text-light rounded p-3">
<code>{`function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}`}</code>
          </pre>
                        </section>
                    </Card>
                </Card>
            </Container>

            <Container className="border rounded-4 shadow-sm p-4 bg-white">
                <h3 className="mb-3 text-primary fw-semibold">Auto Layout with Defined Column Widths</h3>
                <p className="text-secondary">
                    Bootstrap’s grid system allows you to mix fixed and auto-adjusting columns to create dynamic and responsive layouts.
                    By specifying certain column widths and leaving others fluid, you ensure a flexible interface while maintaining
                    emphasis on key content areas.
                </p>

                <Row className="mb-3">
                    <Col className="text-center">1 of 3</Col>
                    <Col xs={6} className="bg-light border rounded text-center fw-medium">
                        2 of 3 (xs=6 - fixed width)
                    </Col>
                    <Col className="text-center">3 of 3</Col>
                </Row>

                <Row className="mb-5">
                    <Col className="text-center">1 of 3</Col>
                    <Col xs={5} className="bg-light border rounded text-center fw-medium">
                        2 of 3 (xs=5 - fixed width)
                    </Col>
                    <Col className="text-center">3 of 3</Col>
                </Row>

                <h3 className="mb-3 text-primary fw-semibold">Variable Width Columns for Compact Elements</h3>
                <p className="text-secondary">
                    Use <code>md="auto"</code> to make a column adapt to the width of its content. This is particularly useful for items
                    like buttons, badges, or short labels that should not stretch to fill available space, preserving design balance and
                    clarity.
                </p>

                <Row className="justify-content-md-center mb-3">
                    <Col xs lg="2" className="text-center">1 of 3</Col>
                    <Col md="auto" className="bg-light border rounded text-center fw-medium px-4">
                        Variable width content
                    </Col>
                    <Col xs lg="2" className="text-center">3 of 3</Col>
                </Row>

                <Row>
                    <Col className="text-center">1 of 3</Col>
                    <Col md="auto" className="bg-light border rounded text-center fw-medium px-4">
                        Variable width content
                    </Col>
                    <Col xs lg="2" className="text-center">3 of 3</Col>
                </Row>
            </Container>

            <div className="p-4">
                <h4 className="mb-1">API</h4>
                <h5 className="text-muted mb-3">Container</h5>
                <pre className="text-info mb-3"><code>import Container from 'react-bootstrap/Container'</code></pre>

                <Container fluid="md" className="bg-dark text-light p-4 rounded">
                    <table className="table table-dark table-bordered table-sm align-middle">
                        <thead className="table-secondary text-dark">
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
                            <td><code>'container'</code></td>
                            <td>
                                Change the underlying component CSS base class name and modifier class names prefix.{" "}
                                <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.
                            </td>
                        </tr>
                        <tr>
                            <td><code>fluid</code></td>
                            <td>
                                <code>boolean | string | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined</code>
                            </td>
                            <td><code>false</code></td>
                            <td>
                                Allow the <code>Container</code> to fill all of its available horizontal space.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Container>
            </div>

            <div className="p-4">
                <h4 className="mb-1">API</h4>
                <h5 className="text-muted mb-3">Row</h5>
                <pre className="text-info mb-3"><code>import Row from 'react-bootstrap/Row'</code></pre>
                <Container fluid="md" className="bg-dark text-light p-4 rounded">

                    <table className="table table-dark table-bordered table-sm align-middle">
                        <thead className="table-secondary text-dark">
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
                            <td><code>'row'</code></td>
                            <td>
                                Change the underlying component CSS base class name and modifier class names prefix.{" "}
                                <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.
                            </td>
                        </tr>
                        {[
                            { name: 'xs', desc: 'The number of columns that will fit next to each other on extra small devices (<576px).' },
                            { name: 'sm', desc: 'The number of columns that will fit next to each other on small devices (≥576px).' },
                            { name: 'md', desc: 'The number of columns that will fit next to each other on medium devices (≥768px).' },
                            { name: 'lg', desc: 'The number of columns that will fit next to each other on large devices (≥992px).' },
                            { name: 'xl', desc: 'The number of columns that will fit next to each other on extra large devices (≥1200px).' },
                            { name: 'xxl', desc: 'The number of columns that will fit next to each other on extra extra large devices (≥1400px).' },
                        ].map((bp) => (
                            <tr key={bp.name}>
                                <td><code>{bp.name}</code></td>
                                <td style={{ whiteSpace: 'pre-wrap', fontSize: '0.75rem' }}>
                                    <code>
                                        number | '1'–'12' | 'auto' | {'{ cols: number | "1"–"12" | "auto" }'} | undefined
                                    </code>
                                </td>
                                <td></td>
                                <td>{bp.desc} Use <code>auto</code> to give columns their natural widths.</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Container>
            </div>

            <Container className="mt-4">
                <h2 className="mb-4 text-primary">Responsive Grid using React-Bootstrap Col</h2>
                <p className="text-muted">
                    This layout demonstrates how to use column spans, offsets, and order across different screen sizes using the <code>Col</code> component.
                </p>
                <pre className="text-info mb-3"><code>import Col from 'react-bootstrap/Col'</code></pre>


                <div className="bg-dark text-light p-4 rounded">
                    <table className="table table-dark table-bordered table-sm align-middle">
                        <thead className="table-secondary text-dark">
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
                            <td></td>
                            <td>Element used to render the component.</td>
                        </tr>
                        <tr>
                            <td><code>bsPrefix</code></td>
                            <td><code>string | undefined</code></td>
                            <td><code>'col'</code></td>
                            <td>
                                Change the underlying component CSS base class name and modifier class names prefix.{" "}
                                <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.
                            </td>
                        </tr>
                        {[
                            { name: 'xs', desc: 'The number of columns to span on extra small devices (<576px).' },
                            { name: 'sm', desc: 'The number of columns to span on small devices (≥576px).' },
                            { name: 'md', desc: 'The number of columns to span on medium devices (≥768px).' },
                            { name: 'lg', desc: 'The number of columns to span on large devices (≥992px).' },
                            { name: 'xl', desc: 'The number of columns to span on extra large devices (≥1200px).' },
                            { name: 'xxl', desc: 'The number of columns to span on extra extra large devices (≥1400px).' },
                        ].map((bp) => (
                            <tr key={bp.name}>
                                <td><code>{bp.name}</code></td>
                                <td style={{ whiteSpace: 'pre-wrap', fontSize: '0.75rem' }}>
                                    <code>
                                        boolean | 'auto' | number | '1' to '12' | {'{ '}
                                        span: boolean | 'auto' | number, offset: number, order: number | 'first' | 'last'
                                        {' }'} | undefined
                                    </code>
                                </td>
                                <td></td>
                                <td>{bp.desc}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Container>

        </>

    );
}

export default Grid;
