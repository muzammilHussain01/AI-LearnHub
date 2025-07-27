import React, {useState} from 'react';
import { Container, Card, Button,Modal,Row,Col,Form,InputGroup,Table } from 'react-bootstrap';

export default function ModalsDoc() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showLg, setShowLg] = useState(false);
    const [showSm, setShowSm] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [show1, setShow1] = useState(false);

    const handleShow1 = (breakpoint) => {
        setFullscreen(breakpoint);
        setShow(true);
    };
    const modalAPI = [
        {
            component: "Modal",
            name: "onEnter",
            type: "((node: HTMLElement, isAppearing: boolean) => any) | undefined",
            default: "",
            description: "Callback fired before the component transitions in",
        },
        {
            component: "Modal",
            name: "onEntering",
            type: "((node: HTMLElement, isAppearing: boolean) => any) | undefined",
            default: "",
            description: "Callback fired as the component begins to transition in",
        },
        {
            component: "Modal",
            name: "onEntered",
            type: "((node: HTMLElement, isAppearing: boolean) => any) | undefined",
            default: "",
            description: "Callback fired after the component finishes transitioning in",
        },
        {
            component: "Modal",
            name: "show",
            type: "boolean | undefined",
            default: "false",
            description: "Set the visibility of the Modal",
        },
        {
            component: "Modal",
            name: "backdrop",
            type: "boolean | 'static' | undefined",
            default: "true",
            description: "Include a backdrop component",
        },
        {
            component: "Modal",
            name: "centered",
            type: "boolean | undefined",
            default: "false",
            description: "Vertically center the Dialog in the window",
        },
        {
            component: "ModalDialog",
            name: "scrollable",
            type: "boolean | undefined",
            default: "false",
            description: "Allows scrolling the <Modal.Body> instead of the entire Modal",
        },
        {
            component: "ModalHeader",
            name: "closeButton",
            type: "boolean | undefined",
            default: "false",
            description: "Specify whether the header should contain a close button",
        },
        {
            component: "ModalHeader",
            name: "closeVariant",
            type: "'white' | string | undefined",
            default: "",
            description: "Sets the variant for close button",
        },
        {
            component: "ModalTitle",
            name: "as",
            type: "React.ElementType | undefined",
            default: "divWithClassName('h4')",
            description: "Element used to render the component",
        },
        {
            component: "ModalBody",
            name: "as",
            type: "React.ElementType | undefined",
            default: "'div'",
            description: "Element used to render the component",
        },
        {
            component: "ModalFooter",
            name: "as",
            type: "React.ElementType | undefined",
            default: "'div'",
            description: "Element used to render the component",
        },
        // Add 80+ more props here as needed...
    ];
    const [query, setQuery] = useState("");

    const filteredData = modalAPI.filter(
        (item) =>
            item.component.toLowerCase().includes(query.toLowerCase()) ||
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.type.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <>
            <Container fluid>
                {/* Section Header */}
                <h2 className="mb-3">Modals</h2>
                <p className="lead">
                    Add dialogs to your site for lightboxes, user notifications, or completely custom content.
                </p>

                {/* Overview Section */}
                <h5 className="mb-2">Overview</h5>
                <ul>
                    <li>
                        Modals are positioned over everything else in the document and remove scroll from the <code>&lt;body&gt;</code> so that modal content scrolls instead.
                    </li>
                    <li>Modals are unmounted when closed.</li>
                    <li>
                        Bootstrap only supports one modal window at a time. Nested modals aren't supported, but if you really need them, the underlying <code>@restart/ui</code> library can support them.
                    </li>
                    <li>
                        Modals "trap" focus in them, ensuring the keyboard navigation cycles through the modal, not the rest of the page.
                    </li>
                    <li>
                        Unlike vanilla Bootstrap, <code>autoFocus</code> works in Modals because React handles the implementation.
                    </li>
                </ul>

                {/* Examples Section */}
                <h5 className="mt-4 mb-2">Examples</h5>
                <h6 className="mb-2">Static Markup</h6>
                <p className="text-muted fst-italic">
                    Below is a static modal dialog (without the positioning) to demonstrate the look and feel of the Modal.
                </p>

                {/* Static Modal Preview inside a Card */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body className="bg-dark">
                        <div className="modal show d-block position-static" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content bg-secondary text-light border-0">
                                    <div className="modal-header border-bottom">
                                        <h5 className="modal-title">Modal title</h5>
                                        <button type="button" className="btn-close btn-close-white" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Modal body text goes here.</p>
                                    </div>
                                    <div className="modal-footer border-top">
                                        <Button variant="secondary">Close</Button>
                                        <Button variant="primary">Save changes</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>
                <Card className="bg-black text-white">
                    <Card.Body>
                    <pre>
                        <code>{`import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Live demo</h5>
                <p className="text-muted">
                    A modal with header, body, and set of actions in the footer. Use <code>{'<Modal />'}</code> in combination with other components to show or hide your Modal.
                    The <code>{'<Modal />'}</code> Component comes with a few convenient "sub components":
                    <code>{' <Modal.Header />'}</code>, <code>{'<Modal.Title />'}</code>, <code>{'<Modal.Body />'}</code>, and <code>{'<Modal.Footer />'}</code>, which you can use to build the Modal content.
                </p>

                {/* Modal Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Button variant="primary" onClick={handleShow}>
                            Launch demo modal
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Woohoo, you're reading this text in a modal!</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Woohoo, you're reading this text in a modal!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Static backdrop</h5>
                <p className="text-muted">
                    When <code>backdrop</code> is set to <code>"static"</code>, the modal will not close when clicking outside it. Click the button below to try it.
                </p>

                {/* Modal Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Button variant="primary" onClick={handleShow}>
                            Launch static backdrop modal
                        </Button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                I will not close if you click outside me. Don't even try to press ESC key.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticBackdropExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press ESC key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StaticBackdropExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Without Animation</h5>
                <p className="text-muted">
                    A Modal can also be rendered without animation. To do this, set the <code>animation</code> prop to <code>false</code>.
                </p>

                {/* Modal Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Button variant="primary" onClick={handleShow}>
                            Launch modal (no animation)
                        </Button>

                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Modal without animation enabled.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary">Save changes</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function WithoutAnimationExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch modal (no animation)
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal without animation enabled.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WithoutAnimationExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Vertically centered</h5>
                <p className="text-muted">
                    You can vertically center a modal by passing the <code>centered</code> prop.
                </p>

                {/* Modal Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Button variant="primary" onClick={handleShow}>
                            Launch centered modal
                        </Button>

                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a centered modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary">Save changes</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VerticallyCenteredExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch centered modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a centered modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VerticallyCenteredExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Using the grid</h5>
                <p className="text-muted">
                    You can use grid layouts within a modal using regular grid components inside the modal content.
                </p>

                {/* Modal Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Button variant="primary" onClick={handleShow}>
                            Launch grid modal
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal Grid</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container>
                                    <Row>
                                        <Col md={4}>Column 1</Col>
                                        <Col md={4}>Column 2</Col>
                                        <Col md={4}>Column 3</Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

function ModalWithGrid() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch grid modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Grid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={4}>Column 1</Col>
              <Col md={4}>Column 2</Col>
              <Col md={4}>Column 3</Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWithGrid;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Focus on specific element</h5>
                <p className="text-muted">
                    You can focus on an element inside the modal using the <code>autoFocus</code> attribute on the element.
                </p>

                {/* Modal Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <Button variant="primary" onClick={handleShow}>
                            Launch auto-focus modal
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Auto Focus Example</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="focusInput">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" autoFocus />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Viewer */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function ModalAutoFocusExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch auto-focus modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Auto Focus Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="focusInput">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAutoFocusExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Optional Sizes</h5>
                <p className="text-muted">
                    You can specify a Bootstrap large or small modal by using the <code>size</code> prop.
                </p>

                {/* Modal Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <div className="d-flex gap-3 flex-wrap">
                            <Button variant="primary" onClick={() => setShowLg(true)}>
                                Launch large modal
                            </Button>
                            <Button variant="secondary" onClick={() => setShowSm(true)}>
                                Launch small modal
                            </Button>
                        </div>

                        {/* Large Modal */}
                        <Modal size="lg" show={showLg} onHide={() => setShowLg(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Large Modal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>This is a large modal (lg).</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowLg(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        {/* Small Modal */}
                        <Modal size="sm" show={showSm} onHide={() => setShowSm(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Small Modal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>This is a small modal (sm).</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowSm(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Block */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalSizeExample() {
  const [showLg, setShowLg] = useState(false);
  const [showSm, setShowSm] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShowLg(true)}>
        Launch large modal
      </Button>
      <Button variant="secondary" onClick={() => setShowSm(true)} className="ms-2">
        Launch small modal
      </Button>

      <Modal size="lg" show={showLg} onHide={() => setShowLg(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Large Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a large modal (lg).</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLg(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="sm" show={showSm} onHide={() => setShowSm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Small Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a small modal (sm).</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSm(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSizeExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Fullscreen Modal</h5>
                <p className="text-muted">
                    You can use the <code>fullscreen</code> prop to make the modal fullscreen. Specifying a breakpoint will only set
                    the modal as fullscreen <em>below</em> the breakpoint size.
                </p>

                {/* Modal Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">RESULT</Card.Header>
                    <Card.Body>
                        <div className="d-flex flex-wrap gap-3">
                            <Button variant="primary" onClick={() => handleShow1(true)}>
                                Fullscreen modal
                            </Button>
                            <Button variant="secondary" onClick={() => handleShow1('sm-down')}>
                                Below sm
                            </Button>
                            <Button variant="secondary" onClick={() => handleShow1('md-down')}>
                                Below md
                            </Button>
                            <Button variant="secondary" onClick={() => handleShow1('lg-down')}>
                                Below lg
                            </Button>
                            <Button variant="secondary" onClick={() => handleShow1('xl-down')}>
                                Below xl
                            </Button>
                            <Button variant="secondary" onClick={() => handleShow1('xxl-down')}>
                                Below xxl
                            </Button>
                        </div>

                        {/* Fullscreen Modal */}
                        <Modal show={show1} fullscreen={fullscreen} onHide={() => setShow1(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Fullscreen Modal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>This modal uses the <code>fullscreen</code> prop.</p>
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>

                {/* Code Block */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre>
            <code>{`import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function FullscreenModalExample() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show1, setShow1] = useState(false);

  const handleShow1 = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow1(true);
  };

  return (
    <>
      <Button variant="primary" onClick={() => handleShow1(true)}>
        Fullscreen modal
      </Button>{' '}
      <Button variant="secondary" onClick={() => handleShow1('sm-down')}>
        Below sm
      </Button>{' '}
      <Button variant="secondary" onClick={() => handleShow1('md-down')}>
        Below md
      </Button>{' '}
      <Button variant="secondary" onClick={() => handleShow1('lg-down')}>
        Below lg
      </Button>{' '}
      <Button variant="secondary" onClick={() => handleShow1('xl-down')}>
        Below xl
      </Button>{' '}
      <Button variant="secondary" onClick={() => handleShow1('xxl-down')}>
        Below xxl
      </Button>

      <Modal show={show1} fullscreen={fullscreen} onHide={() => setShow1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Fullscreen Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This modal uses the <code>fullscreen</code> prop.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FullscreenModalExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-5" fluid>
                {/* Section Header */}
                <h5 className="mb-2">Sizing Modals Using Bootstrap Only</h5>
                <p className="text-muted">
                    You can control modal size by applying inline <code>style</code> or using Bootstrap's predefined sizing classes. This modal uses inline <strong>style</strong> with <code>maxWidth: "90%"</code> directly on <code>Modal.Dialog</code>.
                </p>

                {/* Modal Preview */}
                <Card className="bg-dark text-light border-secondary rounded shadow-sm mb-5">
                    <Card.Header className="fw-bold">Result</Card.Header>
                    <Card.Body>
                        <Button variant="primary" onClick={() => setShow(true)}>
                            Launch 90% Width Modal
                        </Button>

                        <Modal show={show} onHide={() => setShow(false)} centered>
                            <div
                                className="modal-dialog"
                                style={{
                                    maxWidth: "90%",
                                    margin: "auto",
                                }}
                            >
                                <Modal.Content className="w-100">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Custom Width Modal</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>
                                            This modal achieves 90% width using <code>style</code> on the <code>modal-dialog</code> div. No custom CSS or <code>&lt;style&gt;</code> tag is used.
                                        </p>
                                    </Modal.Body>
                                </Modal.Content>
                            </div>
                        </Modal>
                    </Card.Body>
                    <Card.Footer className="text-muted text-uppercase small">Live Editor</Card.Footer>
                </Card>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-5">
                <h2 className="mb-4 fw-bold">React-Bootstrap Modal API</h2>

                <InputGroup className="mb-3">
                    <InputGroup.Text>Search</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Filter by prop, type, or description..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </InputGroup>

                <Card className="shadow-sm border-0">
                    <Card.Body className="p-0">
                        <Table striped bordered hover responsive className="mb-0">
                            <thead className="table-dark">
                            <tr>
                                <th>Component</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredData.map((prop, idx) => (
                                <tr key={idx}>
                                    <td><code>{prop.component}</code></td>
                                    <td><code>{prop.name}</code></td>
                                    <td><code>{prop.type}</code></td>
                                    <td><code>{prop.default || "-"}</code></td>
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
