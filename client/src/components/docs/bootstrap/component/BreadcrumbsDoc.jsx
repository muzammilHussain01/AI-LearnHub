import React from 'react';
import { Container, Breadcrumb, Card,Table } from 'react-bootstrap';

function BreadcrumbsDoc() {
    return (
        <>
            <Container >
                <Card className=" shadow-sm border-0">
                    <h4 className="text-primary fw-semibold mb-3">Breadcrumb Navigation</h4>
                    <p className="text-muted mb-4">
                        Breadcrumbs indicate the current page’s location within a navigational hierarchy. The active item appears as plain text, while previous levels are rendered as links. This enhances UX by showing context and allowing easy back navigation.
                    </p>

                    <Card>
                        <Card.Body>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Body>
                    </Card>
                </Card>
                <Card className="bg-black text-white">
                    <Card.Body>
                    <pre>
                        <code>{`import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="my-3 shadow-sm border-0 p-4">
                    <h4 className="text-primary fw-semibold mb-4">Breadcrumb API Reference</h4>

                    {/* Breadcrumb Section */}
                    <h5 className="text-secondary fw-semibold mt-3 mb-2">Breadcrumb</h5>
                    <Table bordered responsive hover>
                        <thead className="table-primary">
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
                            <td><code>React.ElementType</code> | <code>undefined</code></td>
                            <td><code>'nav'</code></td>
                            <td>Element used to render the component.</td>
                        </tr>
                        <tr>
                            <td><code>bsPrefix</code></td>
                            <td><code>string</code> | <code>undefined</code></td>
                            <td><code>'breadcrumb'</code></td>
                            <td>Escape hatch for custom Bootstrap class names.</td>
                        </tr>
                        <tr>
                            <td><code>label</code></td>
                            <td><code>string</code> | <code>undefined</code></td>
                            <td><code>'breadcrumb'</code></td>
                            <td>ARIA label for accessibility support.</td>
                        </tr>
                        <tr>
                            <td><code>listProps</code></td>
                            <td><code>React.OlHTMLAttributes&lt;HTMLOListElement&gt;</code> | <code>undefined</code></td>
                            <td><code>{'{}'}</code></td>
                            <td>Additional props passed to the underlying <code>&lt;ol&gt;</code> element.</td>
                        </tr>
                        </tbody>
                    </Table>

                    {/* Breadcrumb.Item Section */}
                    <h5 className="text-secondary fw-semibold mt-4 mb-2">Breadcrumb.Item</h5>
                    <Table bordered responsive hover>
                        <thead className="table-info">
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
                            <td><code>React.ElementType</code> | <code>undefined</code></td>
                            <td><code>'li'</code></td>
                            <td>Element used to render the item.</td>
                        </tr>
                        <tr>
                            <td><code>bsPrefix</code></td>
                            <td><code>string</code> | <code>undefined</code></td>
                            <td><code>'breadcrumb-item'</code></td>
                            <td>Escape hatch for custom class names.</td>
                        </tr>
                        <tr>
                            <td><code>active</code></td>
                            <td><code>boolean</code> | <code>undefined</code></td>
                            <td><code>false</code></td>
                            <td>Marks the item as the current/active page.</td>
                        </tr>
                        <tr>
                            <td><code>href</code></td>
                            <td><code>string</code> | <code>undefined</code></td>
                            <td>—</td>
                            <td>Specifies the <code>href</code> for the link.</td>
                        </tr>
                        <tr>
                            <td><code>linkAs</code></td>
                            <td><code>React.ElementType</code> | <code>undefined</code></td>
                            <td><code>'a'</code></td>
                            <td>Custom element type for inner link.</td>
                        </tr>
                        <tr>
                            <td><code>target</code></td>
                            <td><code>string</code> | <code>undefined</code></td>
                            <td>—</td>
                            <td>Target attribute for the link.</td>
                        </tr>
                        <tr>
                            <td><code>title</code></td>
                            <td><code>React.ReactNode</code> | <code>undefined</code></td>
                            <td>—</td>
                            <td>Title attribute for the link element.</td>
                        </tr>
                        <tr>
                            <td><code>linkProps</code></td>
                            <td><code>Record&lt;string, any&gt;</code> | <code>undefined</code></td>
                            <td><code>{'{}'}</code></td>
                            <td>Extra props for the non-active item's link.</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>
    );
}

export default BreadcrumbsDoc;
