import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse, Fade, Table } from 'react-bootstrap';

const TransitionDoc = () => {
    const [openCollapse, setOpenCollapse] = useState(false);
    const [openHorizontal, setOpenHorizontal] = useState(false);
    const [openFade, setOpenFade] = useState(false);

    return (
        <Container >
            <Row>
                <Col lg={10} >
                    <h2 className="fw-bold mb-4 text-primary">API Documentation: Transitions</h2>
                    <Card className="shadow-sm border-0">
                        <Card.Body className="fs-6 text-secondary">
                            <p>
                                React Bootstrap includes reusable transition components built on top of <code>react-transition-group</code>.
                                These transitions make it easy to animate component visibility or dimensional changes using{' '}
                                <code>&lt;Transition&gt;</code> abstractions.
                            </p>
                            <p>
                                Transitions help enhance user experience by providing smooth visual feedback during UI state changes.
                                Whether you're collapsing a menu, fading content in or out, or animating modal dialogs, transitions make
                                these interactions feel natural and polished.
                            </p>
                            <p>
                                React Bootstrap wraps commonly used animations like <code>Collapse</code> and <code>Fade</code> into
                                composable components, giving you fine-grained control while maintaining simplicity. These components follow
                                accessible patterns and integrate seamlessly with the Bootstrap design system.
                            </p>
                            <p>
                                By encapsulating animations into reusable components, React Bootstrap allows you to maintain a clean
                                separation of concerns—keeping logic, layout, and behavior organized. Each transition component accepts props
                                for controlling animation duration, easing, visibility, and dimensions, making it easy to customize behaviors
                                for your application needs.
                            </p>
                            <p>
                                These transitions are fully compatible with server-side rendering and can be combined with conditional
                                rendering to optimize performance. Whether you're building modals, accordions, sidebars, or notification
                                systems, React Bootstrap transitions provide the building blocks for smooth, interactive UI flows.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={10} >

                    <Card className="shadow-sm mb-5">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Collapse (Vertical)</h4>
                            <p>
                                Add a collapse animation to vertically toggle visibility of an element or component.
                                For smooth animations, avoid non-zero margins/paddings on the animated content.
                            </p>
                            <Button
                                variant="primary"
                                className="mb-3"
                                onClick={() => setOpenCollapse(!openCollapse)}
                                aria-controls="collapse-text"
                                aria-expanded={openCollapse}
                            >
                                Toggle Vertical Collapse
                            </Button>
                            <Collapse in={openCollapse}>
                                <div id="collapse-text">
                                    <Card body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea proident.
                                    </Card>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:"black", color:"white"}}>
                        <Card.Body>
                          <pre>
                                <code>
                                    {`import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Example;`}
                                </code>
                            </pre>
                        </Card.Body>
                    </Card>


                    <Card className="shadow-sm mb-5">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Collapse (Horizontal)</h4>
                            <p>
                                Similar to vertical collapse but transitions the <strong>width</strong> instead. Ideal
                                for toolbars, sidebars, or horizontal UI elements.
                            </p>
                            <Button
                                variant="secondary"
                                className="mb-3"
                                onClick={() => setOpenHorizontal(!openHorizontal)}
                                aria-controls="horizontal-collapse-text"
                                aria-expanded={openHorizontal}
                            >
                                Toggle Horizontal Collapse
                            </Button>

                            <div style={{ minHeight: '160px' }}>
                                <Collapse in={openHorizontal} dimension="width">
                                    <div id="horizontal-collapse-text">
                                        <Card body style={{ width: '400px' }}>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                                            anderson cred nesciunt sapiente ea proident.
                                        </Card>
                                    </div>
                                </Collapse>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:"black", color:"white"}}>
                        <Card.Body>
                            <pre>
                                <code>
                                {`import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Example;`}
                            </code>
                            </pre>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm mb-5">
                        <Card.Body>
                            <h4 className="h6 fw-bold mb-3">Fade</h4>
                            <p>
                                The <code>Fade</code> component animates the visibility of its child using opacity
                                transitions.
                            </p>
                            <Button
                                variant="success"
                                className="mb-3"
                                onClick={() => setOpenFade(!openFade)}
                                aria-controls="fade-text"
                                aria-expanded={openFade}
                            >
                                Toggle Fade
                            </Button>
                            <Fade in={openFade}>
                                <div id="fade-text">
                                    <Card body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea proident.
                                    </Card>
                                </div>
                            </Fade>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:"black", color:"white"}}>
                        <Card.Body>
                            <pre>
                                <code>
                                    {`import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Toggle text
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
    </>
  );
}

export default Example;`}
                                </code>
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={10} >
                    <Card className="shadow-sm border-0 mb-4">
                        <Card.Body>
              <pre className="mb-0">
                <code>{`import Fade from 'react-bootstrap/Fade'`}</code>
              </pre>
                        </Card.Body>
                    </Card>

                    <p className="text-muted">
                        The <strong>Fade</strong> component enables fade-in and fade-out transitions for child elements using <code>react-transition-group</code>. It's useful for toggling visibility in a visually appealing way.
                    </p>

                    <Table bordered hover responsive className="mt-4">
                        <thead className="table-light">
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><code>onEnter</code></td>
                            <td><code>(node, isAppearing) ⇒ any</code></td>
                            <td>—</td>
                            <td>Callback fired before the component transitions in.</td>
                        </tr>
                        <tr>
                            <td><code>onEntering</code></td>
                            <td><code>(node, isAppearing) ⇒ any</code></td>
                            <td>—</td>
                            <td>Callback fired as the component begins to transition in.</td>
                        </tr>
                        <tr>
                            <td><code>onEntered</code></td>
                            <td><code>(node, isAppearing) ⇒ any</code></td>
                            <td>—</td>
                            <td>Callback fired after the component finishes transitioning in.</td>
                        </tr>
                        <tr>
                            <td><code>onExit</code></td>
                            <td><code>(node) ⇒ any</code></td>
                            <td>—</td>
                            <td>Callback fired right before the component transitions out.</td>
                        </tr>
                        <tr>
                            <td><code>onExiting</code></td>
                            <td><code>(node) ⇒ any</code></td>
                            <td>—</td>
                            <td>Callback fired as the component begins to transition out.</td>
                        </tr>
                        <tr>
                            <td><code>onExited</code></td>
                            <td><code>(node) ⇒ any</code></td>
                            <td>—</td>
                            <td>Callback fired after the component finishes transitioning out.</td>
                        </tr>
                        <tr>
                            <td><code>className</code></td>
                            <td><code>string</code></td>
                            <td>—</td>
                            <td>Additional classNames to apply to the component.</td>
                        </tr>
                        <tr>
                            <td><code>in</code></td>
                            <td><code>boolean</code></td>
                            <td>—</td>
                            <td>Controls the visibility of the component (true = fade in).</td>
                        </tr>
                        <tr>
                            <td><code>mountOnEnter</code></td>
                            <td><code>boolean</code></td>
                            <td>—</td>
                            <td>Mounts the component only when entering.</td>
                        </tr>
                        <tr>
                            <td><code>unmountOnExit</code></td>
                            <td><code>boolean</code></td>
                            <td>—</td>
                            <td>Unmounts the component after exit transition.</td>
                        </tr>
                        <tr>
                            <td><code>appear</code></td>
                            <td><code>boolean</code></td>
                            <td>—</td>
                            <td>Triggers fade-in on initial mount if <code>in</code> is true.</td>
                        </tr>
                        <tr>
                            <td><code>timeout</code></td>
                            <td><code>number</code></td>
                            <td>—</td>
                            <td>Duration of the fade animation in milliseconds.</td>
                        </tr>
                        <tr>
                            <td><code>children</code> <strong>(Required)</strong></td>
                            <td><code>React.ReactElement</code></td>
                            <td>—</td>
                            <td>Single child element (not a fragment) to animate.</td>
                        </tr>
                        <tr>
                            <td><code>transitionClasses</code></td>
                            <td><code>{ `[key: string]: string` }</code></td>
                            <td><code>&#123;&#125;</code></td>
                            <td>Custom class mappings for transition stages.</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default TransitionDoc;
