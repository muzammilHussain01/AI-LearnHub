import React, { useState } from 'react';
import { Container, Card, Button, Stack, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

const BootstrapIntro = () => {
    const installCommand = {
        installBootstrap: 'npm install react-bootstrap bootstrap'
    }
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(installCommand.installBootstrap);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Copy failed', err);
        }
    };

    return (
        <Container >
            <section className="mb-5">
                <h3>Getting Started</h3>
                <p>Install React Bootstrap using npm:</p>
                <div className="d-flex align-items-center bg-light p-2 rounded">
                    <code className="me-2">{installCommand.installBootstrap}</code>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>{copied ? 'Copied!' : 'Copy'}</Tooltip>}
                    >
                        <Button variant="outline-secondary" size="sm" onClick={handleCopy}>
                            📋
                        </Button>
                    </OverlayTrigger>
                </div>
                <Container >
                    <Card className="shadow-sm border-0 rounded-4">
                        <Card.Body className="p-4">
                            <Card.Title className="mb-3 fs-4 fw-semibold text-primary">
                                📦 What Does <code>npm install react-bootstrap bootstrap</code> Do?
                            </Card.Title>
                            <Card.Text className="mb-3 text-secondary">
                                This command uses <strong>npm (Node Package Manager)</strong> to install two essential libraries into your React project:
                            </Card.Text>
                            <ul className="mb-3 ps-3">
                                <li className="mb-2">
                                    <strong>react-bootstrap</strong> – A library of pre-built <strong>Bootstrap components</strong> re-written in <strong>React</strong>. It offers accessible, customizable UI components like buttons, modals, forms, cards, and more – all as React components. 🔧
                                </li>
                                <li>
                                    <strong>bootstrap</strong> – Installs the core <strong>Bootstrap CSS framework</strong> (typography, spacing, grid, utilities). It's required by <code>react-bootstrap</code> to style the components correctly. 🎨
                                </li>
                            </ul>
                            <Card.Text className="text-secondary">
                                ✅ Running this command gives you the <strong>power of Bootstrap</strong> with the <strong>flexibility of React</strong> – making UI development faster and more consistent.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>

                <Container >
                    <Card className="border-0 shadow-sm ">
                        <Card.Body>
                            <h4 className="mb-4 text-primary">📦 Importing Styles and Components</h4>

                            <p className="text-secondary mb-4">
                                To use <strong>React-Bootstrap</strong> properly, you need to import both the Bootstrap CSS and the specific components from the library:
                            </p>

                            <Card className="bg-light border-0 p-3 mb-4">
        <pre className="mb-0">
<code>{`import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import Button from 'react-bootstrap/Button';    // React-Bootstrap component`}</code>
        </pre>
                            </Card>

                            <ul className="text-secondary ps-3 mb-0">
                                <li className="mb-2">
                                    🔹 <strong>bootstrap/dist/css/bootstrap.min.css</strong>: Includes all of Bootstrap’s default styles. Without this, your components will look unstyled. 🎨
                                </li>
                                <li>
                                    🔹 <strong>react-bootstrap/Button</strong>: Allows you to use Bootstrap-styled buttons directly in JSX like <code>{`<Button>Click Me</Button>`}</code>. 🚀
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Container>

                <Container >
                    <Card className="border-0 shadow-sm ">
                        <Card.Body>
                            <h4 className="mb-4 text-primary">🌐 Browser Globals</h4>

                            <p className="text-secondary">
                                <code>react-bootstrap.js</code> and <code>react-bootstrap.min.js</code> bundles expose all components on the <code>window.ReactBootstrap</code> object.
                                These bundles are available via <a href="https://www.jsdelivr.com/" target="_blank" rel="noopener noreferrer">jsDelivr</a> or through the npm package.
                            </p>

                            <p className="fw-semibold mt-4">📜 Include these scripts in your HTML:</p>

                            <Card className="bg-light border-0 p-3 mb-4">
        <pre className="mb-0 text-dark">
{`<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>

<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>`}
        </pre>
                            </Card>

                            <p className="text-secondary">
                                This setup allows you to use <strong>React-Bootstrap</strong> directly in browser environments without bundlers like Webpack or Vite.
                            </p>

                            <p className="fw-semibold mt-4">💡 Example Usage:</p>

                            <Card className="bg-light border-0 p-3">
        <pre className="mb-0 text-dark">
{`<div id="root"></div>
<script type="text/javascript">
  ReactDOM.render(
    React.createElement(ReactBootstrap.Alert, { variant: "success" }, "This is a success alert!"),
    document.getElementById('root')
  );
</script>`}
        </pre>
                            </Card>
                        </Card.Body>
                    </Card>
                </Container>

                <Container >
                    <Card className="border-0 shadow-sm ">
                        <Card.Body>
                            <h4 className="mb-4 text-primary">🔄 React-Bootstrap vs Bootstrap</h4>

                            <p className="text-secondary">
                                🤔 <strong>You might wonder:</strong> “Why not just use Bootstrap directly?” While you can, it's not ideal in React.
                                Bootstrap's JavaScript depends on <code>jQuery</code>, which is not compatible with React’s virtual DOM.
                            </p>

                            <p className="text-secondary">
                                <strong>React-Bootstrap</strong> rewrites all those JavaScript features (like modal toggling, dropdowns, etc.) into native React.
                                That makes it seamless and cleaner for React developers. 🧼
                            </p>
                        </Card.Body>
                    </Card>
                </Container>

                <Container >
                    <Card className="border-0 shadow-sm ">
                        <Card.Body>
                            <h4 className="mb-4 text-primary">🎨 Stylesheets</h4>

                            <p className="text-secondary">
                                React-Bootstrap doesn't come with any CSS by default because it doesn’t depend on a specific version of Bootstrap.
                                However, <strong>some form of Bootstrap styles</strong> is required for components to look and work properly.
                            </p>

                            <h5 className="mt-4 fw-semibold">📦 CSS</h5>
                            <p className="text-secondary">
                                The simplest way to include styles is by importing Bootstrap CSS in your JavaScript entry file (e.g. <code>index.js</code> or <code>App.js</code>):
                            </p>

                            <pre className="bg-light p-3 rounded mb-4">
<code>{`import 'bootstrap/dist/css/bootstrap.min.css';`}</code>
      </pre>

                            <p className="text-secondary">
                                Alternatively, you can include Bootstrap from a CDN. This is great for quick setups and testing.
                            </p>

                            <pre className="bg-light p-3 rounded mb-4">
<code>{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
  integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
  crossorigin="anonymous"
/>`}</code>
      </pre>

                            <h5 className="mt-4 fw-semibold">🧵 Sass (SCSS)</h5>
                            <p className="text-secondary">
                                If you are using Sass, you can include Bootstrap's source Sass files in your custom styles.
                                Make sure your project supports Sass (e.g., via <code>sass</code> npm package in Create React App).
                            </p>

                            <pre className="bg-light p-3 rounded mb-3">
<code>{`// In App.scss
@import '~bootstrap/scss/bootstrap';`}</code>
      </pre>

                            <pre className="bg-light p-3 rounded mb-4">
<code>{`// In index.js or App.js
import './App.scss';`}</code>
      </pre>

                            <p className="text-secondary">
                                🧩 This approach gives you full control over which parts of Bootstrap to include or customize,
                                which is great for optimized builds and design tweaking.
                            </p>
                        </Card.Body>
                    </Card>
                </Container>

                <Container >
                    <Card className="border-0 shadow-sm ">
                        <Card.Body>
                            <h4 className="mb-4 text-primary">⚙️ Advanced Usage</h4>

                            <p className="text-secondary">
                                For more advanced use cases and stylesheet customization, refer to the official Bootstrap docs.
                            </p>

                            <h5 className="mt-4 fw-semibold">🧩 Using the <code>as</code> Prop</h5>
                            <p className="text-secondary">
                                Certain React-Bootstrap components support the <code>as</code> prop, allowing you to change the final rendered element or component while retaining styling and behavior.
                            </p>

                            <h6 className="mt-3 fw-semibold">🔁 Button rendered as anchor tag</h6>
                            <p className="text-secondary">
                                This renders an <code>&lt;a&gt;</code> tag with the appearance of a Button:
                            </p>

                            <Stack direction="horizontal" gap={2} className="mb-4">
                                <Button as="a" variant="primary">
                                    Button as link
                                </Button>
                                <Button as="a" variant="success">
                                    Button as link
                                </Button>
                            </Stack>

                            <div className="bg-light p-3 rounded mb-4">
        <pre className="mb-0">
<code>{`<Stack direction="horizontal" gap={2}>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>`}</code>
        </pre>
                            </div>

                            <h6 className="mt-3 fw-semibold">🧷 Badge rendered as Button</h6>
                            <p className="text-secondary">
                                This renders a <code>&lt;Button&gt;</code> component styled as a <code>Badge</code>:
                            </p>

                            <h1 className="mt-3">
                                Example heading{' '}
                                <Badge bg="secondary" as={Button}>
                                    New
                                </Badge>
                            </h1>
                        </Card.Body>
                    </Card>
                </Container>

                <Container >
                    <Card className="border-0 shadow-sm ">
                        <Card.Body>
                            <h4 className="mb-4 text-primary">📄 Badge as Button Code Example</h4>

                            <div className="bg-light p-3 rounded">
        <pre className="mb-0 text-dark">
<code>{`import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Example() {
  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default Example;`}</code>
        </pre>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        </Container>
    );
};

export default BootstrapIntro;
