import React from 'react';
import {Container, Alert, Card, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Alerts() {
    return (
        <>
            <Container className=" bg-white rounded shadow-sm">
                <h2 className="text-primary mb-3 fw-bold">Alerts</h2>
                <p className="text-secondary mb-4" style={{ maxWidth: '720px' }}>
                    Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
                </p>

                <h5 className="text-dark fw-semibold mb-3">Examples</h5>
                <p className="text-muted">Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight variants.</p>

                <div className="mt-4">
                    <Alert variant="primary">This is a primary alert—check it out!</Alert>
                    <Alert variant="secondary">This is a secondary alert—check it out!</Alert>
                    <Alert variant="success">This is a success alert—check it out!</Alert>
                    <Alert variant="danger">This is a danger alert—check it out!</Alert>
                    <Alert variant="warning">This is a warning alert—check it out!</Alert>
                    <Alert variant="info">This is an info alert—check it out!</Alert>
                    <Alert variant="light">This is a light alert—check it out!</Alert>
                    <Alert variant="dark">This is a dark alert—check it out!</Alert>
                </div>
                <Card className="bg-black text-white">
                    <Card.Body>
                    <pre>
                        <code>{`import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="my-5 p-4 bg-white rounded shadow-sm">
                <h2 className="text-primary mb-3 fw-bold">Links in Alerts</h2>
                <p className="text-secondary mb-4" style={{ maxWidth: '720px' }}>
                    For links, use the <code>&lt;Alert.Link&gt;</code> component to provide matching colored links within any alert. This ensures both visual consistency and better accessibility across all alert variants.
                </p>

                <h5 className="text-dark fw-semibold mb-3">Examples</h5>
                <p className="text-muted">Each alert below contains a contextual link styled to match its variant.</p>

                <div className="mt-4">
                    <Alert variant="primary">
                        This is a primary alert with an{' '}
                        <Alert.Link href="#">example link</Alert.Link>. Give it a click if you like.
                    </Alert>
                    <Alert variant="secondary">
                        This is a secondary alert with an{' '}
                        <Alert.Link href="#">example link</Alert.Link>. Give it a click if you like.
                    </Alert>
                    <Alert variant="success">
                        This is a success alert with an{' '}
                        <Alert.Link href="#">example link</Alert.Link>. Give it a click if you like.
                    </Alert>
                    <Alert variant="danger">
                        This is a danger alert with an{' '}
                        <Alert.Link href="#">example link</Alert.Link>. Give it a click if you like.
                    </Alert>
                    <Alert variant="warning">
                        This is a warning alert with an{' '}
                        <Alert.Link href="#">example link</Alert.Link>. Give it a click if you like.
                    </Alert>
                    <Alert variant="info">
                        This is an info alert with an{' '}
                        <Alert.Link href="#">example link</Alert.Link>. Give it a click if you like.
                    </Alert>
                    <Alert variant="light">
                        This is a light alert with an{' '}
                        <Alert.Link href="#">example link</Alert.Link>. Give it a click if you like.
                    </Alert>
                    <Alert variant="dark">
                        This is a dark alert with an{' '}
                        <Alert.Link href="#">example link</Alert.Link>. Give it a click if you like.
                    </Alert>
                </div>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>
                                {`import Alert from 'react-bootstrap/Alert';

function LinksExample() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
    </>
  );
}

export default LinksExample;`}
                            </code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className=" bg-white rounded shadow-sm">
                <h2 className="text-primary mb-4 fw-bold">API Reference: Alert Components</h2>

                {/* Alert API Table */}
                <h4 className="fw-semibold text-dark mt-4">Alert</h4>
                <p className="text-muted">Import: <code>import Alert from 'react-bootstrap/Alert'</code></p>
                <Table striped bordered hover responsive>
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
                        <td>bsPrefix</td>
                        <td><code>string | undefined</code></td>
                        <td>'alert'</td>
                        <td>Change the base CSS class name and modifiers for custom styles.</td>
                    </tr>
                    <tr>
                        <td>variant</td>
                        <td><code>'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined</code></td>
                        <td>—</td>
                        <td>Sets the visual style of the Alert.</td>
                    </tr>
                    <tr>
                        <td>dismissible</td>
                        <td><code>boolean | undefined</code></td>
                        <td>—</td>
                        <td>Shows a dismiss button and adjusts padding.</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td><code>boolean | undefined</code></td>
                        <td>—</td>
                        <td>Controls the alert's visibility (controlled by <code>onClose</code>).</td>
                    </tr>
                    <tr>
                        <td>defaultShow</td>
                        <td><code>boolean | undefined</code></td>
                        <td>—</td>
                        <td>Initial visibility state of the Alert.</td>
                    </tr>
                    <tr>
                        <td>onClose</td>
                        <td><code>(show: boolean, event: any) => void</code></td>
                        <td>—</td>
                        <td>Fired when the alert is dismissed.</td>
                    </tr>
                    <tr>
                        <td>closeLabel</td>
                        <td><code>string | undefined</code></td>
                        <td>—</td>
                        <td>Text for the dismiss button.</td>
                    </tr>
                    <tr>
                        <td>closeVariant</td>
                        <td><code>'white' | string | undefined</code></td>
                        <td>—</td>
                        <td>Sets the style variant for the close button.</td>
                    </tr>
                    <tr>
                        <td>transition</td>
                        <td><code>boolean | TransitionComponent | undefined</code></td>
                        <td><code>{'<Fade>'}</code></td>
                        <td>Controls alert dismissal animation.</td>
                    </tr>
                    </tbody>
                </Table>

                {/* AlertHeading API Table */}
                <h4 className="fw-semibold text-dark mt-5">AlertHeading</h4>
                <p className="text-muted">Import: <code>import AlertHeading from 'react-bootstrap/AlertHeading'</code></p>
                <Table striped bordered hover responsive>
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
                        <td>as</td>
                        <td><code>React.ElementType | undefined</code></td>
                        <td><code>divWithClassName('h4')</code></td>
                        <td>Custom element to render the heading.</td>
                    </tr>
                    <tr>
                        <td>bsPrefix</td>
                        <td><code>string | undefined</code></td>
                        <td>'alert-heading'</td>
                        <td>Customize the CSS base class name.</td>
                    </tr>
                    </tbody>
                </Table>

                {/* AlertLink API Table */}
                <h4 className="fw-semibold text-dark mt-5">AlertLink</h4>
                <p className="text-muted">Import: <code>import AlertLink from 'react-bootstrap/AlertLink'</code></p>
                <Table striped bordered hover responsive>
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
                        <td>as</td>
                        <td><code>React.ElementType | undefined</code></td>
                        <td><code>Anchor</code></td>
                        <td>Custom element used to render the link.</td>
                    </tr>
                    <tr>
                        <td>bsPrefix</td>
                        <td><code>string | undefined</code></td>
                        <td>'alert-link'</td>
                        <td>Customize the CSS class prefix for the link.</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </>

    );
}

export default Alerts;
