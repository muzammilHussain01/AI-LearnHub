import React from 'react';
import {
    Container,
    Card,
    Navbar,
    Nav,
    NavDropdown,
    Dropdown,
    Table
} from 'react-bootstrap';

function NavsAndTabs() {
    return (
        <>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Navbar</h5>
                <p className="text-muted">
                    A responsive navigation header with a modern styled background using Bootstrap and inline styles.
                </p>

                {/* Navbar Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar
                            expand="lg"
                            variant="dark"
                            style={{
                                background: 'linear-gradient(135deg, #5A29E4, #2a166f)',
                                color: 'white',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                            }}
                        >
                            <Container>
                                <Navbar.Brand href="#" className="fw-bold text-white">
                                    React-Bootstrap
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto">
                                        <Nav.Link href="#home" className="text-white">
                                            Home
                                        </Nav.Link>
                                        <Nav.Link href="#link" className="text-white">
                                            Link
                                        </Nav.Link>
                                        <NavDropdown
                                            title="Dropdown"
                                            id="basic-nav-dropdown"
                                            menuVariant="dark"
                                        >
                                            <NavDropdown.Item href="#action/1">
                                                Action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/2">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3">
                                                Something
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/4">
                                                Separated link
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
<code>{`import Nav from 'react-bootstrap/Nav';

function BasicExample() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(\`selected 1\`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;`}
</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Custom Nav Markup</h5>
                <p className="text-muted">
                    Use <code>as</code> prop to render semantic HTML like <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> for Nav components.
                </p>

                {/* Nav Preview */}
                <Card className="bg-light text-dark border rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Nav as="ul" className="justify-content-center gap-3">
                            <Nav.Item as="li">
                                <Nav.Link active href="#active">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#link1">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#link2">Link</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`import Nav from 'react-bootstrap/Nav';

function ListExample() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ListExample;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Vertical Nav</h5>
                <p className="text-muted">
                    Create vertical (stacked) navs using the <code>.flex-column</code> utility on the <code>{'<Nav>'}</code> component.
                </p>

                {/* Nav Preview */}
                <Card className="bg-light text-dark border rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Nav defaultActiveKey="#active" className="flex-column">
                            <Nav.Link href="#active" active>Active</Nav.Link>
                            <Nav.Link href="#link1">Link</Nav.Link>
                            <Nav.Link href="#link2">Link</Nav.Link>
                            <Nav.Link href="#" disabled>Disabled</Nav.Link>
                        </Nav>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`import Nav from 'react-bootstrap/Nav';

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default StackedExample;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Tabs</h5>
                <p className="text-muted">
                    Visually represent nav items as <strong>"tabs"</strong> using the <code>variant="tabs"</code> prop. This works well with tabbable content areas.
                </p>

                {/* Nav Tabs Preview */}
                <Card className="bg-light text-dark border rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Nav variant="tabs" defaultActiveKey="#active">
                            <Nav.Item>
                                <Nav.Link href="#active">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#option2">Option 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#disabled" disabled>Disabled</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`import Nav from 'react-bootstrap/Nav';

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabsExample;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Pills</h5>
                <p className="text-muted">
                    Use the <code>variant="pills"</code> prop with <code>&lt;Nav&gt;</code> to display navigation links styled as pill buttons.
                </p>

                {/* Nav Pills Preview */}
                <Card className="bg-light text-dark border rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Nav variant="pills" defaultActiveKey="#active">
                            <Nav.Item>
                                <Nav.Link href="#active">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#option2">Option 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#disabled" disabled>Disabled</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`import Nav from 'react-bootstrap/Nav';

function PillsExample() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default PillsExample;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Underline</h5>
                <p className="text-muted">
                    Use the <code>variant="underline"</code> prop with <code>&lt;Nav&gt;</code> to show underlined navigation items.
                </p>

                {/* Nav Underline Preview */}
                <Card className="bg-light text-dark border rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Nav variant="underline" defaultActiveKey="#active">
                            <Nav.Item>
                                <Nav.Link href="#active">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#option2">Option 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#disabled" disabled>Disabled</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`import Nav from 'react-bootstrap/Nav';

function UnderlineExample() {
  return (
    <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default UnderlineExample;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                {/* Preview Card */}
                <Card className="shadow-sm border-0 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Fill and Justify Nav</h4>
                    <p className="text-secondary mb-4">
                        Use <code>fill</code> or <code>justify</code> to force the contents of your nav to extend the full available width.
                    </p>

                    <Nav variant="tabs" fill defaultActiveKey="/home" className="mb-3">
                        <Nav.Item>
                            <Nav.Link href="/home" active>Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="longer">Loooonger NavLink</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card>

                {/* Code Block */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React from 'react';
import { Nav } from 'react-bootstrap';

function FillNavExample() {
  return (
    <Nav variant="tabs" fill defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" active>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="longer">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FillNavExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                {/* Preview Card */}
                <Card className="shadow-sm border-0 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Nav with Dropdown</h4>
                    <p className="text-secondary mb-4">
                        Combine <code>Dropdown</code> with <code>Nav</code> components to include nested links inside your nav bar.
                    </p>

                    <Nav variant="pills" className="mb-3">
                        <Nav.Item>
                            <Nav.Link active>Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Link</Nav.Link>
                        </Nav.Item>
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle as={Nav.Link}>Click to see more…</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="4.1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="4.2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="4.3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Card>

                {/* Code Block */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';

function DropdownNavExample() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link active>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Dropdown as={Nav.Item}>
        <Dropdown.Toggle as={Nav.Link}>Click to see more…</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="4.1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="4.2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="4.3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
}

export default DropdownNavExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                {/* Preview Table */}
                <Card className="shadow-sm border-0 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">React-Bootstrap Nav API</h4>
                    <p className="text-secondary mb-4">
                        Reference for props available on <code>Nav</code>, <code>NavItem</code>, <code>NavLink</code>, and <code>NavDropdown</code>.
                    </p>

                    <h5 className="fw-semibold">Nav</h5>
                    <Table striped bordered hover responsive className="mb-4">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>activeKey</td><td>string | number | undefined</td><td>–</td><td>Key for the currently active NavItem.</td></tr>
                        <tr><td>as</td><td>React.ElementType</td><td>–</td><td>Element used to render the component.</td></tr>
                        <tr><td>onSelect</td><td>(eventKey, e) ⇒ void</td><td>–</td><td>Callback fired when NavItem is selected.</td></tr>
                        <tr><td>bsPrefix</td><td>string</td><td>'nav'</td><td>CSS prefix for customization.</td></tr>
                        <tr><td>variant</td><td>'tabs' | 'pills' | 'underline' | string</td><td>–</td><td>Visual variant of nav.</td></tr>
                        <tr><td>defaultActiveKey</td><td>EventKey</td><td>–</td><td>Initial active key.</td></tr>
                        <tr><td>fill</td><td>boolean</td><td>–</td><td>Fill nav items to full width proportionally.</td></tr>
                        <tr><td>justify</td><td>boolean</td><td>–</td><td>Justify nav items evenly.</td></tr>
                        <tr><td>navbar</td><td>boolean</td><td>–</td><td>Style for navbar usage.</td></tr>
                        <tr><td>navbarScroll</td><td>boolean</td><td>–</td><td>Enable vertical scrolling in collapsed Navbar.</td></tr>
                        <tr><td>role</td><td>string</td><td>"tablist"</td><td>ARIA role override.</td></tr>
                        </tbody>
                    </Table>

                    <h5 className="fw-semibold">NavItem</h5>
                    <Table striped bordered hover responsive className="mb-4">
                        <thead>
                        <tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                        <tr><td>as</td><td>React.ElementType</td><td>'div'</td><td>Element used to render the component.</td></tr>
                        <tr><td>bsPrefix</td><td>string</td><td>'nav-item'</td><td>CSS class prefix.</td></tr>
                        </tbody>
                    </Table>

                    <h5 className="fw-semibold">NavLink</h5>
                    <Table striped bordered hover responsive className="mb-4">
                        <thead>
                        <tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                        <tr><td>active</td><td>boolean</td><td>–</td><td>Highlight NavItem as active.</td></tr>
                        <tr><td>as</td><td>React.ElementType</td><td>Anchor</td><td>Element used to render.</td></tr>
                        <tr><td>disabled</td><td>boolean</td><td>false</td><td>Disable selection.</td></tr>
                        <tr><td>eventKey</td><td>string | number</td><td>–</td><td>Identifies selected item.</td></tr>
                        <tr><td>href</td><td>string</td><td>–</td><td>HTML href value.</td></tr>
                        <tr><td>bsPrefix</td><td>string</td><td>'nav-link'</td><td>CSS prefix.</td></tr>
                        <tr><td>role</td><td>string</td><td>'tab'</td><td>ARIA role override.</td></tr>
                        </tbody>
                    </Table>

                    <h5 className="fw-semibold">NavDropdown</h5>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                        <tr><td>placement</td><td>various</td><td>'bottom-start'</td><td>Dropdown placement with PopperJS.</td></tr>
                        <tr><td>defaultShow</td><td>boolean</td><td>–</td><td>Initial dropdown visibility.</td></tr>
                        <tr><td>show</td><td>boolean</td><td>–</td><td>Control visibility manually.</td></tr>
                        <tr><td>onSelect</td><td>(eventKey, e) ⇒ void</td><td>–</td><td>Called when DropdownItem selected.</td></tr>
                        <tr><td>onToggle</td><td>(nextShow, meta) ⇒ void</td><td>–</td><td>Called when dropdown visibility changes.</td></tr>
                        <tr><td>focusFirstItemOnShow</td><td>boolean | 'keyboard'</td><td>false</td><td>Controls focus behavior when opened.</td></tr>
                        <tr><td>children</td><td>React.ReactNode</td><td>Required</td><td>Dropdown content (toggle + menu).</td></tr>
                        <tr><td>as</td><td>React.ElementType</td><td>–</td><td>Render custom element.</td></tr>
                        <tr><td>bsPrefix</td><td>string</td><td>'dropdown'</td><td>CSS prefix.</td></tr>
                        <tr><td>drop</td><td>'up' | 'end' | etc.</td><td>–</td><td>Dropdown direction.</td></tr>
                        <tr><td>align</td><td>various</td><td>–</td><td>Menu alignment with breakpoints.</td></tr>
                        <tr><td>autoClose</td><td>boolean | 'outside' | 'inside'</td><td>–</td><td>Control auto close behavior.</td></tr>
                        <tr><td>id</td><td>string</td><td>–</td><td>HTML id for accessibility.</td></tr>
                        <tr><td>title</td><td>React.ReactNode</td><td>Required</td><td>Non-toggle button content.</td></tr>
                        <tr><td>disabled</td><td>boolean</td><td>–</td><td>Disable toggle.</td></tr>
                        <tr><td>active</td><td>boolean</td><td>–</td><td>Style toggle as active.</td></tr>
                        <tr><td>menuRole</td><td>string</td><td>–</td><td>ARIA role for menu.</td></tr>
                        <tr><td>renderMenuOnMount</td><td>boolean</td><td>–</td><td>Render menu before it's shown.</td></tr>
                        <tr><td>rootCloseEvent</td><td>'click' | 'mousedown'</td><td>–</td><td>Event that closes dropdown.</td></tr>
                        <tr><td>menuVariant</td><td>'dark' | string</td><td>–</td><td>Menu color variant.</td></tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>
    );
}

export default NavsAndTabs;
