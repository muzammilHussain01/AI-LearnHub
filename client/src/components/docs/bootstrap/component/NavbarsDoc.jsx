import React from 'react';
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Card,
    Image,
    Form,
    InputGroup,
    FormControl,
    Button,
    Offcanvas,
    Table
} from 'react-bootstrap';

function NavbarsDoc() {
    const navbarProps = [
        {
            name: 'as',
            type: 'React.ElementType | undefined',
            default: '',
            description: 'Element used to render the component.',
        },
        {
            name: 'bsPrefix',
            type: 'string | undefined',
            default: "'navbar'",
            description:
                'Change the underlying component CSS base class name and modifier class names prefix.',
        },
        {
            name: 'variant',
            type: "'light' | 'dark' | string | undefined",
            default: '',
            description:
                'Visual variant of the Navbar. Use with the bg prop or background-color utilities.',
        },
        {
            name: 'expand',
            type: "boolean | string | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined",
            default: '',
            description:
                'The breakpoint below which the Navbar collapses. When true, it always stays expanded.',
        },
        {
            name: 'defaultExpand',
            type: "boolean | string | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined",
            default: '',
            description: 'Default expanded state of the Navbar.',
        },
        {
            name: 'bg',
            type: 'string | undefined',
            default: '',
            description:
                'Convenience prop for adding bg-* utility classes. Pairs well with the variant prop.',
        },
        {
            name: 'fixed',
            type: "'top' | 'bottom' | undefined",
            default: '',
            description: 'Fix navbar to top or bottom of screen.',
        },
        {
            name: 'sticky',
            type: "'top' | 'bottom' | undefined",
            default: '',
            description: 'Stick navbar after scrolling past it.',
        },
        {
            name: 'onToggle',
            type: '((expanded: boolean) => void) | undefined',
            default: '',
            description: 'Callback when <Navbar> toggles. Called with the new expanded value.',
        },
        {
            name: 'onSelect',
            type: 'SelectCallback | undefined',
            default: '',
            description:
                'Callback when <Nav> descendant is selected. Useful for complex closing logic.',
        },
        {
            name: 'collapseOnSelect',
            type: 'boolean | undefined',
            default: '',
            description:
                'Collapse navbar on selection of a <Nav> descendant. Must use eventKey or href.',
        },
        {
            name: 'expanded',
            type: 'boolean | undefined',
            default: '',
            description: 'Controls visibility of the navbar body.',
        },
        {
            name: 'role',
            type: 'string | undefined',
            default: "'navigation'",
            description: 'ARIA role for the navbar.',
        },
    ];

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
                                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                                        <Nav.Link href="#link" className="text-white">Link</Nav.Link>
                                        <NavDropdown
                                            title="Dropdown"
                                            id="basic-nav-dropdown"
                                            menuVariant="dark"
                                        >
                                            <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/4">Separated link</NavDropdown.Item>
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
<pre><code>{`<Navbar
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
    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
        <Nav.Link href="#link" className="text-white">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" menuVariant="dark">
          <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Brand</h5>
                <p className="text-muted">
                    A simple flexible branding component. Images are supported but may need custom styling.
                </p>

                {/* Brand Link */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light">
                            <Container>
                                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Brand Text */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light">
                            <Container>
                                <Navbar.Brand className="mb-0 h1">Brand text</Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Brand with Logo */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light">
                            <Container>
                                <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
                                    <Image
                                        alt="React Bootstrap Logo"
                                        src="https://react-bootstrap.netlify.app/img/logo.svg"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />
                                    React Bootstrap
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`<Navbar bg="light">
  <Container>
    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
  </Container>
</Navbar>

<Navbar bg="light">
  <Container>
    <Navbar.Brand className="mb-0 h1">Brand text</Navbar.Brand>
  </Container>
</Navbar>

<Navbar bg="light">
  <Container>
    <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
      <Image
        alt="React Bootstrap Logo"
        src="https://react-bootstrap.netlify.app/img/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      React Bootstrap
    </Navbar.Brand>
  </Container>
</Navbar>`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Forms</h5>
                <p className="text-muted">
                    Use <code>{`<Form>`}</code> and form controls inside the Navbar. Align contents using utility classes.
                </p>

                {/* Navbar with Form */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light" expand="lg">
                            <Container fluid>
                                <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                                <Form className="d-flex gap-2 ms-auto align-items-center">
                                    {/* Username input with prepend "@" */}
                                    <InputGroup>
                                        <InputGroup.Text>@</InputGroup.Text>
                                        <FormControl type="text" placeholder="Username" />
                                    </InputGroup>

                                    {/* Search input */}
                                    <FormControl type="search" placeholder="Search" />

                                    {/* Submit button */}
                                    <Button variant="outline-primary">Search</Button>
                                </Form>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
    <Form className="d-flex gap-2 ms-auto align-items-center">
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
        <FormControl type="text" placeholder="Username" />
      </InputGroup>
      <FormControl type="search" placeholder="Search" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Container>
</Navbar>`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Text and Non-nav links</h5>
                <p className="text-muted">
                    Loose text and links can be wrapped in <code>{`<Navbar.Text>`}</code> to correctly align them vertically.
                </p>

                {/* Navbar with Text */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light" expand="lg" className="px-3">
                            <Navbar.Brand href="#">Navbar with text</Navbar.Brand>
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    Signed in as: <a href="#profile">Mark Otto</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar with text</Navbar.Brand>
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#profile">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Color schemes</h5>
                <p className="text-muted">
                    Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities. Choose from <code>variant="light"</code> for light backgrounds or <code>variant="dark"</code> for dark ones. Bootstrap 5.3+ recommends using <code>data-bs-theme</code> instead.
                </p>

                {/* Preview Section */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">

                        {/* Light Navbar */}
                        <Navbar bg="light" variant="light" expand="lg" className="px-3">
                            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">Features</Nav.Link>
                                <Nav.Link href="#">Pricing</Nav.Link>
                            </Nav>
                        </Navbar>

                        {/* Dark Navbar using variant (legacy) */}
                        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
                            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">Features</Nav.Link>
                                <Nav.Link href="#">Pricing</Nav.Link>
                            </Nav>
                        </Navbar>

                        {/* Preferred method using data-bs-theme */}
                        <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="px-3">
                            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">Features</Nav.Link>
                                <Nav.Link href="#">Pricing</Nav.Link>
                            </Nav>
                        </Navbar>

                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

<Navbar bg="light" variant="light" expand="lg">
  <Navbar.Brand href="#">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#">Home</Nav.Link>
    <Nav.Link href="#">Features</Nav.Link>
    <Nav.Link href="#">Pricing</Nav.Link>
  </Nav>
</Navbar>

<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#">Home</Nav.Link>
    <Nav.Link href="#">Features</Nav.Link>
    <Nav.Link href="#">Pricing</Nav.Link>
  </Nav>
</Navbar>

<Navbar bg="primary" data-bs-theme="dark" expand="lg">
  <Navbar.Brand href="#">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#">Home</Nav.Link>
    <Nav.Link href="#">Features</Nav.Link>
    <Nav.Link href="#">Pricing</Nav.Link>
  </Nav>
</Navbar>`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Containers</h5>
                <p className="text-muted">
                    While not required, you can wrap the <code>{`<Navbar>`}</code> in a <code>{`<Container>`}</code> to center it on a page,
                    or add one within to only center the contents of a fixed or static top navbar.
                </p>

                {/* Preview Section */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">
                        {/* Navbar wrapped inside Container */}
                        <Navbar bg="light">
                            <Container>
                                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

<Navbar bg="light">
  <Container>
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
  </Container>
</Navbar>`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Placement</h5>
                <p className="text-muted">
                    You can use Bootstrap's position utilities to place navbars in non-static positions.
                    Choose from <code>fixed</code> or <code>sticky</code> placement.
                </p>

                {/* Fixed Top Navbar */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT — Fixed Top</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light" fixed="top">
                            <Container>
                                <Navbar.Brand href="#">Fixed top</Navbar.Brand>
                            </Container>
                        </Navbar>
                        <div className="py-5" style={{ height: '100px' }}></div>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Sticky Top Navbar */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT — Sticky Top</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light" sticky="top">
                            <Container>
                                <Navbar.Brand href="#">Sticky top</Navbar.Brand>
                            </Container>
                        </Navbar>
                        <div className="py-5" style={{ height: '100px' }}></div>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Fixed Bottom Navbar */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT — Fixed Bottom</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light" fixed="bottom">
                            <Container>
                                <Navbar.Brand href="#">Fixed bottom</Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Sticky Bottom Navbar */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT — Sticky Bottom</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light" sticky="bottom">
                            <Container>
                                <Navbar.Brand href="#">Sticky bottom</Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Scrollable Navbar */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT — Scrollable Nav</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light" expand="lg">
                            <Container fluid>
                                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        navbarScroll
                                        style={{ maxHeight: '100px', overflowY: 'auto' }}
                                    >
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                    </Nav>
                                    <Form className="d-flex">
                                        <FormControl type="search" placeholder="Search" className="me-2" />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Responsive behaviors</h5>
                <p className="text-muted">
                    Use the <code>expand</code> prop along with <code>{`<Navbar.Toggle>`}</code> and <code>{`<Navbar.Collapse>`}</code> to control when content collapses behind a button.
                </p>

                {/* Responsive Navbar Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar bg="light" expand="lg" defaultExpanded collapseOnSelect>
                            <Container>
                                <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#features">Features</Nav.Link>
                                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav>
                                        <Nav.Link href="#deets">More deets</Nav.Link>
                                        <Nav.Link eventKey={2} href="#memes">
                                            Dank memes
                                        </Nav.Link>
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
<pre><code>{`import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';

function NavbarResponsiveExample() {
  return (
    <Navbar bg="light" expand="lg" defaultExpanded collapseOnSelect>
      <Container>
        <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarResponsiveExample;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Offcanvas</h5>
                <p className="text-muted">
                    Transform your expanding and collapsing navbar into an offcanvas drawer using the <code>offcanvas</code> component and <code>expand=&#123;false&#125;</code>.
                </p>

                {/* Offcanvas Navbar Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-4">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="p-0">
                        <Navbar key="offcanvas" bg="light" expand={false} className="mb-3 px-3">
                            <Container fluid>
                                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                                <Navbar.Offcanvas
                                    id={`offcanvasNavbar-expand-false`}
                                    aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                                    placement="end"
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                            Offcanvas
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                            <Nav.Link href="#home">Home</Nav.Link>
                                            <Nav.Link href="#link">Link</Nav.Link>
                                            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#something">Something else here</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                        <Form className="d-flex mt-3 mt-lg-0">
                                            <FormControl
                                                type="search"
                                                placeholder="Search"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre><code>{`import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
  Offcanvas
} from 'react-bootstrap';

function NavbarOffcanvasExample() {
  return (
    <Navbar key="offcanvas" bg="light" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#something">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex mt-3 mt-lg-0">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarOffcanvasExample;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="mb-3">Navbar API</h4>

                <Card className="border-secondary shadow-sm">
                    <Card.Header className="fw-bold bg-dark text-white">
                        <code>import Navbar from 'react-bootstrap/Navbar'</code>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <Table responsive striped bordered hover className="m-0">
                            <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {navbarProps.map((prop, index) => (
                                <tr key={index}>
                                    <td>
                                        <code>{prop.name}</code>
                                    </td>
                                    <td>
                                        <code>{prop.type}</code>
                                    </td>
                                    <td>
                                        <code>{prop.default}</code>
                                    </td>
                                    <td>{prop.description}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
            </>
    );
}

export default NavbarsDoc;
