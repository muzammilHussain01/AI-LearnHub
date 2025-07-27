import React from 'react';
import { Container, Card, Button, ButtonGroup,ButtonToolbar,InputGroup,FormControl,Stack,DropdownButton,Dropdown,Table } from 'react-bootstrap';

function ButtonGroupDoc() {
    return (
        <>
            <Container>
                <Card className="shadow-sm border-0">
                    <h4 className="text-primary fw-semibold mb-3">Button Group - Basic Example</h4>
                    <p className="text-secondary">
                        Use <code>&lt;ButtonGroup&gt;</code> to group a series of buttons together on a single horizontal line. This is helpful for related actions or grouped functionality in the UI.
                    </p>
                    <ButtonGroup aria-label="Basic button group">
                        <Button variant="primary">Left</Button>
                        <Button variant="primary">Middle</Button>
                        <Button variant="primary">Right</Button>
                    </ButtonGroup>
                </Card >
                <Card className="bg-black text-white">
                    <Card.Body>
                    <pre>
                        <code>{`import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BasicExample() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  );
}

export default BasicExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0">
                    <h4 className="text-primary fw-semibold mb-3">Button Toolbar</h4>
                    <p className="text-secondary">
                        Use <code>&lt;ButtonToolbar&gt;</code> to combine multiple <code>&lt;ButtonGroup&gt;</code> components into a single line for complex button layouts.
                    </p>

                    <ButtonToolbar className="gap-2" aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button variant="outline-secondary">1</Button>
                            <Button variant="outline-secondary">2</Button>
                            <Button variant="outline-secondary">3</Button>
                            <Button variant="outline-secondary">4</Button>
                        </ButtonGroup>

                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button variant="outline-secondary">5</Button>
                            <Button variant="outline-secondary">6</Button>
                            <Button variant="outline-secondary">7</Button>
                        </ButtonGroup>

                        <ButtonGroup aria-label="Third group">
                            <Button variant="outline-secondary">8</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Card>
                <Card className="bg-black text-white">
                    <pre>
                        <code>{`import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function ToolbarBasicExample() {
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default ToolbarBasicExample;`}</code>
                    </pre>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0">
                    <h4 className="text-primary fw-semibold mb-3">Mixed Input and Button Toolbar</h4>
                    <p className="text-secondary">
                        Combine <code>InputGroup</code> and <code>ButtonGroup</code> components within a single <code>ButtonToolbar</code> to create advanced form layouts. Use spacing utilities to ensure proper alignment and spacing.
                    </p>

                    <ButtonToolbar className="flex-wrap gap-3" aria-label="Toolbar with mixed elements">
                        <ButtonGroup className="me-2" aria-label="Button group">
                            <Button variant="primary">Save</Button>
                            <Button variant="outline-secondary">Cancel</Button>
                        </ButtonGroup>

                        <InputGroup className="me-2" style={{ maxWidth: '250px' }}>
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl placeholder="Username" aria-label="Username" />
                        </InputGroup>

                        <InputGroup style={{ maxWidth: '250px' }}>
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl placeholder="Email" aria-label="Email" />
                        </InputGroup>
                    </ButtonToolbar>
                </Card>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ToolbarExample() {
  return (
    <>
      <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button variant="secondary">1</Button>
          <Button variant="secondary">2</Button>
          <Button variant="secondary">3</Button>
          <Button variant="secondary">4</Button>
        </ButtonGroup>
        <InputGroup>
          <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </InputGroup>
      </ButtonToolbar>

      <ButtonToolbar
        className="justify-content-between"
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup aria-label="First group">
          <Button variant="secondary">1</Button>
          <Button variant="secondary">2</Button>
          <Button variant="secondary">3</Button>
          <Button variant="secondary">4</Button>
        </ButtonGroup>
        <InputGroup>
          <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </InputGroup>
      </ButtonToolbar>
    </>
  );
}

export default ToolbarExample;`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0">
                    <h4 className="text-primary fw-semibold mb-3">Button Group Sizing</h4>
                    <p className="text-secondary">
                        Instead of setting size on each individual button, use the <code>size</code> prop on the <code>ButtonGroup</code> component for consistent sizing.
                    </p>

                    <Stack gap={3}>
                        <ButtonGroup size="lg" aria-label="Large button group">
                            <Button variant="primary">Left</Button>
                            <Button variant="primary">Middle</Button>
                            <Button variant="primary">Right</Button>
                        </ButtonGroup>

                        <ButtonGroup aria-label="Default button group">
                            <Button variant="secondary">Left</Button>
                            <Button variant="secondary">Middle</Button>
                            <Button variant="secondary">Right</Button>
                        </ButtonGroup>

                        <ButtonGroup size="sm" aria-label="Small button group">
                            <Button variant="success">Left</Button>
                            <Button variant="success">Middle</Button>
                            <Button variant="success">Right</Button>
                        </ButtonGroup>
                    </Stack>
                </Card>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`<Container>
      <Card className="my-4 shadow-sm border-0 p-4">
        <h4 className="text-primary fw-semibold mb-3">Button Group Sizing</h4>
        <p className="text-secondary">
          Instead of setting size on each individual button, use the <code>size</code> prop on the <code>ButtonGroup</code> component for consistent sizing.
        </p>

        <Stack gap={3}>
          <ButtonGroup size="lg" aria-label="Large button group">
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Default button group">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>

          <ButtonGroup size="sm" aria-label="Small button group">
            <Button variant="success">Left</Button>
            <Button variant="success">Middle</Button>
            <Button variant="success">Right</Button>
          </ButtonGroup>
        </Stack>
      </Card>
    </Container>`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="my-4 shadow-sm border-0 p-4">
                    <h4 className="text-primary fw-semibold mb-3">Button Group Nesting</h4>
                    <p className="text-secondary">
                        You can nest different button types inside a <code>&lt;ButtonGroup&gt;</code>, such as <code>&lt;DropdownButton&gt;</code>, to build more complex interfaces.
                    </p>

                    <ButtonGroup aria-label="Nested button group">
                        <Button variant="outline-primary">Button-1</Button>
                        <Button variant="outline-primary">Button-2</Button>

                        <DropdownButton as={ButtonGroup} title="Dropdown" variant="outline-primary" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Dropdown link 1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown link 2</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Card>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function NestedExample() {
  return (
    <ButtonGroup>
      <Button>Button-1</Button>
      <Button>Button-2</Button>

      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default NestedExample;`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0">
                    <h4 className="text-primary fw-semibold mb-3">Vertical Button Group</h4>
                    <p className="text-secondary">
                        Use the <code>vertical</code> prop on <code>&lt;ButtonGroup&gt;</code> to stack buttons vertically. This layout is ideal for sidebar menus or mobile actions. Note: split button dropdowns are not supported in vertical groups.
                    </p>

                    <ButtonGroup vertical>
                        <Button variant="outline-secondary">Top</Button>
                        <Button variant="outline-secondary">Middle</Button>
                        <Button variant="outline-secondary">Bottom</Button>
                    </ButtonGroup>
                </Card>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function VerticalExample() {
  return (
    <ButtonGroup vertical>
      <Button>Button</Button>
      <Button>Button</Button>

      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-1"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>

      <Button>Button</Button>
      <Button>Button</Button>

      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-2"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-3"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default VerticalExample;`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0">
                    <h4 className="text-primary fw-semibold mb-4">Button Group API Reference</h4>

                    {/* ButtonGroup API Table */}
                    <h5 className="text-secondary fw-semibold mb-2">ButtonGroup</h5>
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
                            <td>as</td>
                            <td><code>React.ElementType</code> | <code>undefined</code></td>
                            <td>'div'</td>
                            <td>Element used to render the component.</td>
                        </tr>
                        <tr>
                            <td>bsPrefix</td>
                            <td><code>string</code> | <code>undefined</code></td>
                            <td>'btn-group'</td>
                            <td>Escape hatch for custom Bootstrap class names.</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td><code>'sm'</code> | <code>'lg'</code> | <code>undefined</code></td>
                            <td>—</td>
                            <td>Sets the size for all Buttons in the group.</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td><code>boolean</code> | <code>undefined</code></td>
                            <td>false</td>
                            <td>Makes the group display buttons in a vertical stack.</td>
                        </tr>
                        <tr>
                            <td>role</td>
                            <td><code>string</code> | <code>undefined</code></td>
                            <td>'group'</td>
                            <td>
                                ARIA role describing the group. Use with <code>aria-label</code> or <code>aria-labelledby</code>.
                            </td>
                        </tr>
                        </tbody>
                    </Table>

                    {/* ButtonToolbar API Table */}
                    <h5 className="text-secondary fw-semibold mt-4 mb-2">ButtonToolbar</h5>
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
                            <td>bsPrefix</td>
                            <td><code>string</code> | <code>undefined</code></td>
                            <td>'btn-toolbar'</td>
                            <td>Escape hatch for custom Bootstrap class names.</td>
                        </tr>
                        <tr>
                            <td>role</td>
                            <td><code>string</code> | <code>undefined</code></td>
                            <td>'toolbar'</td>
                            <td>
                                ARIA role describing the toolbar. Use with <code>aria-label</code> or <code>aria-labelledby</code>.
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>
    );
}

export default ButtonGroupDoc;
