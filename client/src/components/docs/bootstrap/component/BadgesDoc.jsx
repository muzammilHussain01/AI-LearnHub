import React from 'react';
import { Container, Badge, Button,Card,Stack,Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BadgesDoc() {
    return (
        <>
            <Container className=" bg-white rounded shadow-sm">
                <h2 className="text-primary fw-bold mb-4">Bootstrap Badges</h2>
                <p className="text-muted mb-4">
                    Badges are small count or labeling components. They scale with the parent element using relative sizing
                    and <code>em</code> units. They can also be used inside buttons and links to show notifications or labels.
                </p>

                <div className="mb-4">
                    <h1>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h1>
                    <h2>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h2>
                    <h3>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h3>
                    <h4>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h4>
                    <h5>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h5>
                    <h6>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h6>
                </div>

                <h5 className="mt-5 mb-3 text-dark">Badges in Buttons:</h5>
                <Button variant="primary" className="me-3">
                    Notifications <Badge bg="light" text="dark">4</Badge>
                </Button>

                <Button variant="success">
                    Updates <Badge bg="light" text="dark">2</Badge>
                </Button>
                <Card className="bg-black text-white my-2">
                    <Card.Body>
                    <pre>
                        <code>{`import Badge from 'react-bootstrap/Badge';

function BasicExample() {
  return (
    <div>
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>
    </div>
  );
}

export default BasicExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="bg-light rounded shadow-sm">
                <h3 className="mb-3 text-primary fw-bold">Badges in Buttons</h3>
                <p className="text-muted">
                    Badges can be used as part of links or buttons to provide a counter. Make sure to add accessible text for screen readers.
                </p>

                <Button variant="primary" className="fw-semibold">
                    Profile <Badge bg="secondary">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>

                <p className="mt-4 text-muted small">
                    <strong>Note:</strong> While badges provide visual cues, they might confuse users relying on assistive technologies.
                    Always provide additional context using visually hidden text where necessary.
                </p>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>
                                {`import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function ButtonExample() {
  return (
    <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default ButtonExample;`}
                            </code>
                        </pre>
                    </Card.Body>
                </Card>
                <p>
                    Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button. Unless the context is clear, consider including additional context with a visually hidden piece of additional text.
                </p>
            </Container>
            <Container className=" bg-white rounded shadow-sm">
                <h3 className="mb-3 text-primary fw-bold">Contextual Badge Variations</h3>
                <p className="text-muted">
                    Use contextual classes to indicate different meanings or statuses. Below are examples of badges using all available variants.
                </p>

                <h5 className="mt-4 mb-2">Standard Badges</h5>
                <Stack direction="horizontal" gap={2} className="mb-4">
                    <Badge bg="primary">Primary</Badge>
                    <Badge bg="secondary">Secondary</Badge>
                    <Badge bg="success">Success</Badge>
                    <Badge bg="danger">Danger</Badge>
                    <Badge bg="warning" text="dark">Warning</Badge>
                    <Badge bg="info">Info</Badge>
                    <Badge bg="light" text="dark">Light</Badge>
                    <Badge bg="dark">Dark</Badge>
                </Stack>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function VariationsExample() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge bg="primary">Primary</Badge>
      <Badge bg="secondary">Secondary</Badge>
      <Badge bg="success">Success</Badge>
      <Badge bg="danger">Danger</Badge>
      <Badge bg="warning" text="dark">
        Warning
      </Badge>
      <Badge bg="info">Info</Badge>
      <Badge bg="light" text="dark">
        Light
      </Badge>
      <Badge bg="dark">Dark</Badge>
    </Stack>
  );
}

export default VariationsExample;`}</code>
                        </pre>
                    </Card.Body>
                </Card>

                <h5 className="mb-2">Pill Badges</h5>
                <Stack direction="horizontal" gap={2}>
                    <Badge bg="primary" pill>Primary</Badge>
                    <Badge bg="secondary" pill>Secondary</Badge>
                    <Badge bg="success" pill>Success</Badge>
                    <Badge bg="danger" pill>Danger</Badge>
                    <Badge bg="warning" pill text="dark">Warning</Badge>
                    <Badge bg="info" pill>Info</Badge>
                    <Badge bg="light" pill text="dark">Light</Badge>
                    <Badge bg="dark" pill>Dark</Badge>
                </Stack>
                <Card className="bg-black text-white my-2">
                    <Card.Body>
                        <pre>
                            <code>{`import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function PillExample() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge pill bg="primary">
        Primary
      </Badge>
      <Badge pill bg="secondary">
        Secondary
      </Badge>
      <Badge pill bg="success">
        Success
      </Badge>
      <Badge pill bg="danger">
        Danger
      </Badge>
      <Badge pill bg="warning" text="dark">
        Warning
      </Badge>
      <Badge pill bg="info">
        Info
      </Badge>
      <Badge pill bg="light" text="dark">
        Light
      </Badge>
      <Badge pill bg="dark">
        Dark
      </Badge>
    </Stack>
  );
}

export default PillExample;`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className=" bg-light rounded shadow-sm">
                <h3 className="mb-4 text-primary fw-bold">React-Bootstrap Badges</h3>

                <p className="text-muted">
                    Badges are small count and labeling components. They scale with their parent elements using relative font sizing and can convey dynamic or contextual information effectively.
                </p>

                <h5 className="mt-5 mb-3 text-dark">Badge API Reference</h5>
                <Table striped bordered hover responsive className="bg-white">
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
                        <td><code>React.ElementType | undefined</code></td>
                        <td><code>'span'</code></td>
                        <td>Element used to render the component.</td>
                    </tr>
                    <tr>
                        <td><code>bsPrefix</code></td>
                        <td><code>string | undefined</code></td>
                        <td><code>'badge'</code></td>
                        <td>Changes the underlying component CSS base class name and modifier class names prefix.</td>
                    </tr>
                    <tr>
                        <td><code>bg</code></td>
                        <td><code>'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | undefined</code></td>
                        <td><code>'primary'</code></td>
                        <td>Sets the visual style of the badge.</td>
                    </tr>
                    <tr>
                        <td><code>pill</code></td>
                        <td><code>boolean | undefined</code></td>
                        <td><code>false</code></td>
                        <td>Makes badges more rounded with extra horizontal padding.</td>
                    </tr>
                    <tr>
                        <td><code>text</code></td>
                        <td><code>'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'muted' | undefined</code></td>
                        <td><em>undefined</em></td>
                        <td>Sets the text color of the badge.</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default BadgesDoc;
