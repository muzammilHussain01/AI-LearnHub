import React from "react";
import { Container, Table, Alert, Card } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";

const BreakpointsDocs = () => {
        return (
            <Container >
                    <h2 className="mb-4 text-primary fw-bold">📐 Bootstrap Breakpoints: A Responsive Foundation</h2>

                    <p className="lead">
                            Breakpoints are fundamental to building responsive layouts. They allow you to control how content and layout adapt across different screen sizes—from mobile phones to large desktop monitors.
                    </p>

                    <Alert variant="light" className="border border-info-subtle shadow-sm p-3">
                            <strong className="text-info">💡 Pro Tip:</strong> Responsive design is not just about resizing. It's about rethinking the layout, flow, and interaction across devices.
                    </Alert>

                    <h4 className="mt-5 text-secondary">📊 Default Breakpoints in Bootstrap</h4>
                    <p>
                            Bootstrap includes six default breakpoints, also known as grid tiers. These define how and when your layout changes. You can also customize these breakpoints using Sass if needed.
                    </p>

                    <Table striped bordered hover responsive className="mt-3">
                            <thead className="table-primary">
                            <tr>
                                    <th>Breakpoint</th>
                                    <th>Class Infix</th>
                                    <th>Dimensions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td>X-Small</td>
                                    <td><em>None</em></td>
                                    <td>{"<576px"}</td>
                            </tr>
                            <tr>
                                    <td>Small</td>
                                    <td>sm</td>
                                    <td>≥576px</td>
                            </tr>
                            <tr>
                                    <td>Medium</td>
                                    <td>md</td>
                                    <td>≥768px</td>
                            </tr>
                            <tr>
                                    <td>Large</td>
                                    <td>lg</td>
                                    <td>≥992px</td>
                            </tr>
                            <tr>
                                    <td>Extra Large</td>
                                    <td>xl</td>
                                    <td>≥1200px</td>
                            </tr>
                            <tr>
                                    <td>Extra Extra Large</td>
                                    <td>xxl</td>
                                    <td>≥1400px</td>
                            </tr>
                            </tbody>
                    </Table>

                    <p className="mt-3">
                            These tiers serve as the backbone of responsive behavior in Bootstrap's grid system. Each tier can be targeted using utility classes, layout classes, or media queries.
                    </p>

                    <h4 className="mt-5 text-secondary">🔧 Customizing Breakpoints</h4>
                    <p>
                            For more granular control, especially in large-scale apps, you might need custom breakpoints. React-Bootstrap supports this by using a <code>ThemeProvider</code> with your own breakpoint configuration.
                    </p>

                    <Card className="bg-light border border-secondary-subtle p-3">
        <pre className="mb-0">
{`<ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
  <div>Your app...</div>
</ThemeProvider>`}
        </pre>
                    </Card>

                    <p className="mt-3">
                            This setup ensures that all responsive-aware components like <code>Row</code> and <code>Col</code> behave correctly based on your custom breakpoints.
                    </p>

                    <h4 className="mt-5 text-secondary">📚 ThemeProvider API</h4>
                    <Card className="bg-light border p-3 mb-3">
        <pre className="mb-0">
{`import ThemeProvider from 'react-bootstrap/ThemeProvider'`}
        </pre>
                    </Card>

                    <Table bordered hover responsive>
                            <thead className="table-light">
                            <tr>
                                    <th>Prop</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td><code>children</code> (Required)</td>
                                    <td>React.ReactNode</td>
                                    <td>-</td>
                                    <td>The components wrapped by the provider.</td>
                            </tr>
                            <tr>
                                    <td><code>prefixes</code></td>
                                    <td>{`Record<string, string>`}</td>
                                    <td>{`{}`}</td>
                                    <td>Custom prefixes for component classes.</td>
                            </tr>
                            <tr>
                                    <td><code>breakpoints</code></td>
                                    <td>string[]</td>
                                    <td>["xxl", "xl", "lg", "md", "sm", "xs"]</td>
                                    <td>Custom array of responsive breakpoints.</td>
                            </tr>
                            <tr>
                                    <td><code>minBreakpoint</code></td>
                                    <td>string</td>
                                    <td>'xs'</td>
                                    <td>The smallest active breakpoint.</td>
                            </tr>
                            </tbody>
                    </Table>
            </Container>
        );
};

export default BreakpointsDocs;
