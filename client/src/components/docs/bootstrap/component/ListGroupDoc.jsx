import React from 'react';
import { Container, ListGroup, Card,Row,Col,Tab,Table } from 'react-bootstrap';

function ListGroupDoc() {
    const listGroupProps = [
        { name: 'activeKey', type: 'string | number | undefined', default: '', description: 'Key for the currently active NavItem.' },
        { name: 'as', type: 'React.ElementType | undefined', default: '', description: 'Element used to render the component.' },
        { name: 'onSelect', type: '((eventKey: string | null, e: React.SyntheticEvent<any>) => void) | undefined', default: '', description: 'Callback fired when a NavItem has been selected.' },
        { name: 'bsPrefix', type: 'string | undefined', default: "'list-group'", description: 'Base CSS class name and modifier prefix. Useful for custom styling.' },
        { name: 'variant', type: "'flush' | string | undefined", default: '', description: 'Adds a variant to the list-group.' },
        { name: 'horizontal', type: "boolean | string | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined", default: '', description: 'Changes flow of items from vertical to horizontal.' },
        { name: 'defaultActiveKey', type: 'EventKey | undefined', default: '', description: 'The default active key of the list group.' },
        { name: 'numbered', type: 'boolean | undefined', default: '', description: 'Generate numbered list items.' },
    ];

    const listGroupItemProps = [
        { name: 'active', type: 'boolean | undefined', default: '', description: 'Highlight the NavItem as active.' },
        { name: 'as', type: 'React.ElementType | undefined', default: '', description: 'Element used to render the component.' },
        { name: 'disabled', type: 'boolean | undefined', default: '', description: 'Disable the NavItem.' },
        { name: 'eventKey', type: 'string | number | undefined', default: '', description: 'Value passed to onSelect handler.' },
        { name: 'href', type: 'string | undefined', default: '', description: 'HTML href attribute.' },
        { name: 'bsPrefix', type: 'string | undefined', default: "'list-group-item'", description: 'Base class name for styling override.' },
        { name: 'action', type: 'boolean | undefined', default: '', description: 'Marks item as actionable with hover/active styles.' },
        { name: 'onClick', type: 'React.MouseEventHandler', default: '', description: 'Callback for when component is clicked.' },
        { name: 'variant', type: "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | undefined", default: '', description: 'Contextual styling classes.' },
    ];
    const renderTable = (title, data) => (
        <>
            <h5 className="mt-5 mb-3 fw-semibold">{title}</h5>
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {data.map((prop, idx) => (
                    <tr key={idx}>
                        <td><code>{prop.name}</code></td>
                        <td><code>{prop.type}</code></td>
                        <td><code>{prop.default || '—'}</code></td>
                        <td>{prop.description}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
    return (
        <>
            <Container className="py-4">
                <h2 className="mb-3 fw-bold">List Groups</h2>
                <p>
                    List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
                </p>

                <hr />

                <h4 className="mt-4 fw-semibold">Overview</h4>
                <p>
                    List groups are used to display a list of simple or complex items. You can use them for simple text lists, links, or more customized content. They're built using flexbox to ensure responsive behavior and alignment.
                </p>

                <h4 className="mt-4 fw-semibold">Accessibility</h4>
                <p>
                    List groups rely on semantic <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> elements by default, or you can use <code>&lt;div&gt;</code> and <code>ListGroup.Item</code> components. They are screen reader–friendly and support proper focus styles when used with buttons or anchors.
                </p>

                <h4 className="mt-4 fw-semibold">Examples</h4>
                <h5 className="text-primary mb-3">Basic List Group</h5>

                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>

                <Card className="bg-black text-white mt-4">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import ListGroup from 'react-bootstrap/ListGroup';

function BasicListGroup() {
  return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
}

export default BasicListGroup;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="fw-semibold mb-3">Active Items</h4>
                <p>
                    Use the <code>active</code> prop to highlight the current selection in a <code>ListGroup</code>. This is useful for indicating the selected state within a list.
                </p>

                <ListGroup className="mb-4">
                    <ListGroup.Item active>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import ListGroup from 'react-bootstrap/ListGroup';

function ActiveListGroupExample() {
  return (
    <ListGroup>
      <ListGroup.Item active>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
}

export default ActiveListGroupExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="fw-semibold mb-3">Disabled Items</h4>
                <p>
                    Use the <code>disabled</code> prop to make a <code>ListGroup.Item</code> unclickable or non-interactive.
                    For elements that aren't natively disable-able (like anchor tags), the click behavior is mimicked using <code>preventDefault</code>.
                </p>

                <ListGroup className="mb-4">
                    <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import ListGroup from 'react-bootstrap/ListGroup';

function DisabledListGroupExample() {
  return (
    <ListGroup>
      <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
}

export default DisabledListGroupExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="fw-semibold mb-3">Actionable Items</h4>
                <p>
                    Use the <code>action</code> prop to create interactive <code>ListGroup.Item</code>s. They render as <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> elements depending on presence of <code>href</code>. You can override this with the <code>as</code> prop.
                </p>

                <ListGroup className="mb-4">
                    <ListGroup.Item action href="#link1">
                        Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => alert('Button clicked!')}>
                        This one is a button
                    </ListGroup.Item>
                </ListGroup>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import ListGroup from 'react-bootstrap/ListGroup';

function ActionableListGroupExample() {
  return (
    <ListGroup>
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => alert('Button clicked!')}>
        This one is a button
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ActionableListGroupExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="fw-semibold mb-3">Flush List Group</h4>
                <p>
                    Add the <code>flush</code> variant to remove outer borders and rounded corners,
                    rendering list group items edge-to-edge within a parent container such as a <code>Card</code>.
                </p>

                <Card className="mb-4">
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                </Card>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function FlushListGroupExample() {
  return (
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default FlushListGroupExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="fw-semibold mb-3">Numbered List Group</h4>
                <p>
                    Add the <code>numbered</code> prop to opt into numbered list group items.
                    Numbers are generated via CSS for better placement and customization than the default browser styling.
                </p>

                <ListGroup as="ol" numbered className="mb-4">
                    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                </ListGroup>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import ListGroup from 'react-bootstrap/ListGroup';

function NumberedListGroupExample() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
    </ListGroup>
  );
}

export default NumberedListGroupExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="fw-semibold mb-3">Custom Content</h4>
                <p>
                    These work great with custom content as well. Use <code>&lt;ListGroup.Item&gt;</code> to build richer layouts.
                </p>

                <ListGroup className="mb-4">
                    {[1, 2, 3].map((_, index) => (
                        <ListGroup.Item key={index}>
                            <Row className="align-items-center">
                                <Col>
                                    <div className="fw-semibold">Subheading</div>
                                    <div>Cras justo odio</div>
                                </Col>
                                <Col xs="auto">
                                    <small className="text-muted">14</small>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
{`import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CustomContentListGroupExample() {
  return (
    <ListGroup>
      {[1, 2, 3].map((_, index) => (
        <ListGroup.Item key={index}>
          <Row className="align-items-center">
            <Col>
              <div className="fw-semibold">Subheading</div>
              <div>Cras justo odio</div>
            </Col>
            <Col xs="auto">
              <small className="text-muted">14</small>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CustomContentListGroupExample;`}
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="fw-semibold mb-3">Horizontal</h4>
                <p>
                    Use the <code>horizontal</code> prop to make the <code>ListGroup</code> render horizontally. Currently, horizontal list groups cannot be combined with flush list groups.
                </p>

                <ListGroup horizontal className="mb-4">
                    <ListGroup.Item>This</ListGroup.Item>
                    <ListGroup.Item>ListGroup</ListGroup.Item>
                    <ListGroup.Item>renders</ListGroup.Item>
                    <ListGroup.Item>horizontally!</ListGroup.Item>
                </ListGroup>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
{`import ListGroup from 'react-bootstrap/ListGroup';

function HorizontalListGroupExample() {
  return (
    <ListGroup horizontal>
      <ListGroup.Item>This</ListGroup.Item>
      <ListGroup.Item>ListGroup</ListGroup.Item>
      <ListGroup.Item>renders</ListGroup.Item>
      <ListGroup.Item>horizontally!</ListGroup.Item>
    </ListGroup>
  );
}

export default HorizontalListGroupExample;`}
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="fw-semibold mb-3">Contextual classes</h4>
                <p>
                    Use contextual variants on <code>&lt;ListGroup.Item&gt;</code>s to style them with a stateful background and color.
                </p>

                <ListGroup className="mb-4">
                    <ListGroup.Item>No style</ListGroup.Item>
                    <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                    <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                    <ListGroup.Item variant="success">Success</ListGroup.Item>
                    <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                    <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                    <ListGroup.Item variant="info">Info</ListGroup.Item>
                    <ListGroup.Item variant="light">Light</ListGroup.Item>
                    <ListGroup.Item variant="dark">Dark</ListGroup.Item>
                </ListGroup>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
{`import ListGroup from 'react-bootstrap/ListGroup';

function ContextualListGroupExample() {
  return (
    <ListGroup>
      <ListGroup.Item>No style</ListGroup.Item>
      <ListGroup.Item variant="primary">Primary</ListGroup.Item>
      <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
      <ListGroup.Item variant="success">Success</ListGroup.Item>
      <ListGroup.Item variant="danger">Danger</ListGroup.Item>
      <ListGroup.Item variant="warning">Warning</ListGroup.Item>
      <ListGroup.Item variant="info">Info</ListGroup.Item>
      <ListGroup.Item variant="light">Light</ListGroup.Item>
      <ListGroup.Item variant="dark">Dark</ListGroup.Item>
    </ListGroup>
  );
}

export default ContextualListGroupExample;`}
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="fw-semibold mb-3">Tabbed Interfaces</h4>
                <p>
                    You can also use the <code>Tab</code> components to create ARIA-compliant tabbable interfaces with the <code>ListGroup</code> component.
                    Swap out the <code>Nav</code> component for <code>ListGroup</code> and you're good to go.
                </p>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Link 1
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Link 2
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    <p>Tab pane content 1</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    <p>Tab pane content 2</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

                <Card className="bg-black text-white mt-4">
                    <Card.Body>
          <pre className="mb-0">
{`import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function TabbedListGroupExample() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <p>Tab pane content 1</p>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <p>Tab pane content 2</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabbedListGroupExample;`}
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h2 className="fw-bold mb-4">ListGroup API Reference</h2>
                {renderTable('ListGroup Props', listGroupProps)}
                {renderTable('ListGroupItem Props', listGroupItemProps)}
            </Container>
        </>
    );
}

export default ListGroupDoc;
