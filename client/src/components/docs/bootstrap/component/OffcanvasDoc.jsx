import React, { useState } from 'react';
import { Container, Button, Card, Offcanvas,ButtonGroup,Table } from 'react-bootstrap';

function OffcanvasDoc() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [placement, setPlacement] = useState('start');

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = (place) => {
        setPlacement(place);
        setShow1(true);
    };
    const [show2, setShow2] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [backdrop, setBackdrop] = useState(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = (scrollValue, backdropValue) => {
        setScroll(scrollValue);
        setBackdrop(backdropValue);
        setShow2(true);
    };
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    return (
        <>
            <Container className="py-2 " fluid>
                {/* Title and Description */}
                <h2 className="fw-bold mb-2">Offcanvas</h2>
                <p className="text-secondary mb-4">
                    Build hidden sidebars into your project for navigation, shopping carts, and more.
                </p>

                {/* Section: Examples */}
                <h4 className=" fw-semibold mt-2">Examples</h4>
                <p className="text-secondary mb-4">
                    Offcanvas includes support for a header with a close button and an optional body class
                    for some initial padding. We suggest that you include offcanvas headers with dismiss actions whenever
                    possible, or provide an explicit dismiss action.
                </p>

                {/* Section: Basic Example */}
                <h5 className=" fw-semibold ">Basic Example</h5>

                {/* Result Card */}
                <Card className="bg-secondary-subtle border-0 mb-3">
                    <Card.Body className="bg-dark d-flex justify-content-start">
                        <Button variant="primary" onClick={handleShow}>
                            Launch
                        </Button>
                    </Card.Body>
                </Card>

                {/* Offcanvas Component */}
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>

                {/* Live Editor Code Block */}
                <Card className="bg-black text-white border-0">
                    <Card.Header className="text-uppercase fw-bold small bg-secondary text-white">
                        Live Editor
                    </Card.Header>
                    <Card.Body>
          <pre className="mb-0">
<code>{`import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder...
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                {/* Preview Card */}
                <Card className="shadow-sm border-0 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Placement</h4>
                    <p className="text-secondary mb-4">
                        Offcanvas supports a few different placements:
                        <br />– <code>start</code> places offcanvas on the left of the viewport
                        <br />– <code>end</code> places offcanvas on the right of the viewport
                        <br />– <code>top</code> places offcanvas on the top of the viewport
                        <br />– <code>bottom</code> places offcanvas on the bottom of the viewport
                    </p>

                    <div className="bg-dark p-3 rounded mb-3">
                        <h6 className="text-uppercase text-white mb-3">Result</h6>
                        <ButtonGroup className="mb-3">
                            {['start', 'end', 'top', 'bottom'].map((place) => (
                                <Button
                                    key={place}
                                    variant="primary"
                                    className="me-2"
                                    onClick={() => handleShow1(place)}
                                >
                                    {place}
                                </Button>
                            ))}
                        </ButtonGroup>

                        <Offcanvas show={show1} onHide={handleClose1} placement={placement}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Offcanvas – {placement}</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                This Offcanvas appears from the <strong>{placement}</strong>.
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Card>

                {/* Code Block */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre>
<code>{`import React, { useState } from 'react';
import { Button, Offcanvas, ButtonGroup } from 'react-bootstrap';

function PlacementOffcanvasExample() {
  const [show, setShow] = useState(false);
  const [placement, setPlacement] = useState('start');

  const handleClose1 = () => setShow(false);
  const handleShow1 = (place) => {
    setPlacement(place);
    setShow(true);
  };

  return (
    <>
      <ButtonGroup className="mb-3">
        {['start', 'end', 'top', 'bottom'].map((place) => (
          <Button
            key={place}
            variant="primary"
            className="me-2"
            onClick={() => handleShow1(place)}
          >
            {place}
          </Button>
        ))}
      </ButtonGroup>

      <Offcanvas show={show} onHide={handleClose1} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas – {placement}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          This Offcanvas appears from the <strong>{placement}</strong>.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default PlacementOffcanvasExample;`}</code>
</pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                {/* Preview Card */}
                <Card className="shadow-sm border-0 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Backdrop</h4>
                    <p className="text-secondary mb-4">
                        Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible.
                        Use the <code>scroll</code> prop to toggle <code>&lt;body&gt;</code> scrolling and the <code>backdrop</code> prop to toggle the backdrop.
                    </p>

                    <div className="bg-dark p-3 rounded mb-3">
                        <h6 className="text-uppercase text-white mb-3">Result</h6>
                        <ButtonGroup className="mb-3">
                            <Button variant="primary" className="me-2" onClick={() => handleShow2(false, true)}>
                                Enable Backdrop / Disable Scroll
                            </Button>
                            <Button variant="primary" onClick={() => handleShow2(true, false)}>
                                No Backdrop / Allow Scroll
                            </Button>
                        </ButtonGroup>

                        <Offcanvas show={show2} onHide={handleClose2} scroll={scroll} backdrop={backdrop}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                Scroll: <strong>{scroll.toString()}</strong><br />
                                Backdrop: <strong>{backdrop.toString()}</strong>
                                <p className="mt-3">
                                    Some offcanvas content here. You can enable or disable backdrop and allow scrolling using the buttons above.
                                </p>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Card>

                {/* Code Block */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre>
<code>{`import React, { useState } from 'react';
import { Button, Offcanvas, ButtonGroup } from 'react-bootstrap';

function BackdropOffcanvasExample() {
  const [show2, setShow2] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [backdrop, setBackdrop] = useState(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = (scrollValue, backdropValue) => {
    setScroll(scrollValue);
    setBackdrop(backdropValue);
    setShow2(true);
  };

  return (
    <>
      <ButtonGroup className="mb-3">
        <Button variant="primary" onClick={() => handleShow2(false, true)}>
          Enable Backdrop / Disable Scroll
        </Button>
        <Button variant="primary" onClick={() => handleShow2(true, false)} className="ms-2">
          No Backdrop / Allow Scroll
        </Button>
      </ButtonGroup>

      <Offcanvas show={show2} onHide={handleClose2} scroll={scroll} backdrop={backdrop}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Scroll: <strong>{scroll.toString()}</strong><br />
          Backdrop: <strong>{backdrop.toString()}</strong>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BackdropOffcanvasExample;`}</code>
</pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                {/* Preview Card */}
                <Card className="shadow-sm border-0 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Static backdrop</h4>
                    <p className="text-secondary mb-4">
                        When <code>backdrop</code> is set to <code>static</code>, the offcanvas will not close when clicking outside of it.
                    </p>

                    <div className="bg-dark p-3 rounded mb-3">
                        <h6 className="text-uppercase text-white mb-3">Result</h6>
                        <Button variant="primary" onClick={handleShow3}>Launch</Button>

                        <Offcanvas show={show3} onHide={handleClose3} backdrop="static">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                Clicking outside of this offcanvas will not close it because the backdrop is <code>static</code>.
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Card>

                {/* Code Block */}
                <Card className="bg-black text-white">
                    <Card.Body>
<pre>
<code>{`import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

function StaticBackdropOffcanvas() {
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow3}>
        Launch
      </Button>

      <Offcanvas show={show3} onHide={handleClose3} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Clicking outside of this offcanvas will not close it because the backdrop is <code>static</code>.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default StaticBackdropOffcanvas;`}</code>
</pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Offcanvas API</h4>
                    <p className="text-secondary mb-4">
                        <code>import Offcanvas from 'react-bootstrap/Offcanvas'</code>
                    </p>

                    <Table striped bordered hover responsive size="sm">
                        <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>onEnter</td><td>(node, isAppearing) =&gt; any</td><td>–</td><td>Callback fired before the component transitions in</td></tr>
                        <tr><td>onEntering</td><td>(node, isAppearing) =&gt; any</td><td>–</td><td>Callback fired as the component begins to transition in</td></tr>
                        <tr><td>onEntered</td><td>(node, isAppearing) =&gt; any</td><td>–</td><td>Callback fired after the component finishes transitioning in</td></tr>
                        <tr><td>onExit</td><td>(node) =&gt; any</td><td>–</td><td>Callback fired right before the component transitions out</td></tr>
                        <tr><td>onExiting</td><td>(node) =&gt; any</td><td>–</td><td>Callback fired as the component begins to transition out</td></tr>
                        <tr><td>onExited</td><td>(node) =&gt; any</td><td>–</td><td>Callback fired after the component finishes transitioning out</td></tr>
                        <tr><td>show</td><td>boolean</td><td>false</td><td>Set the visibility of the Modal</td></tr>
                        <tr><td>container</td><td>DOM element | Ref | Function</td><td>–</td><td>Container to render the offcanvas into</td></tr>
                        <tr><td>onShow</td><td>() =&gt; void</td><td>–</td><td>Callback fired when the Modal is opening</td></tr>
                        <tr><td>onHide</td><td>() =&gt; void</td><td>–</td><td>Callback fired on backdrop click or ESC press</td></tr>
                        <tr><td>manager</td><td>ModalManager</td><td>–</td><td>Custom ModalManager instance</td></tr>
                        <tr><td>backdrop</td><td>boolean | 'static'</td><td>true</td><td>Enable backdrop; 'static' disables click-to-close</td></tr>
                        <tr><td>onEscapeKeyDown</td><td>(e: KeyboardEvent) =&gt; void</td><td>–</td><td>Called when ESC key is pressed</td></tr>
                        <tr><td>onBackdropClick</td><td>(e: React.SyntheticEvent) =&gt; void</td><td>–</td><td>Called when the backdrop is clicked</td></tr>
                        <tr><td>keyboard</td><td>boolean</td><td>true</td><td>Close modal with ESC key</td></tr>
                        <tr><td>autoFocus</td><td>boolean</td><td>true</td><td>Focus the modal automatically on open</td></tr>
                        <tr><td>enforceFocus</td><td>boolean</td><td>true</td><td>Prevents focus from leaving modal</td></tr>
                        <tr><td>restoreFocus</td><td>boolean</td><td>true</td><td>Restore focus to previous element on close</td></tr>
                        <tr><td>restoreFocusOptions</td><td>{ 'preventScroll: boolean' }</td><td>–</td><td>Focus behavior on close</td></tr>
                        <tr><td>bsPrefix</td><td>string</td><td>'offcanvas'</td><td>Customize base class prefix</td></tr>
                        <tr><td>backdropClassName</td><td>string</td><td>–</td><td>Custom class for backdrop</td></tr>
                        <tr><td>scroll</td><td>boolean</td><td>false</td><td>Allow scrolling while offcanvas is open</td></tr>
                        <tr><td>placement</td><td>'start' | 'end' | 'top' | 'bottom'</td><td>'start'</td><td>Offcanvas placement side</td></tr>
                        <tr><td>responsive</td><td>'sm' | 'md' | 'lg' | 'xl' | 'xxl'</td><td>–</td><td>Responsive breakpoint to hide content</td></tr>
                        </tbody>
                    </Table>

                    <h5 className="text-primary mt-5">OffcanvasHeader</h5>
                    <p className="text-secondary mb-2"><code>import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'</code></p>
                    <ul className="text-secondary small">
                        <li><strong>closeLabel:</strong> string — default: <code>'Close'</code></li>
                        <li><strong>closeVariant:</strong> 'white' | string</li>
                        <li><strong>closeButton:</strong> boolean — default: <code>false</code></li>
                        <li><strong>onHide:</strong> () =&gt; void</li>
                        <li><strong>bsPrefix:</strong> string — default: <code>'offcanvas-header'</code></li>
                    </ul>

                    <h5 className="text-primary mt-4">OffcanvasTitle</h5>
                    <p className="text-secondary mb-2"><code>import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'</code></p>
                    <ul className="text-secondary small">
                        <li><strong>as:</strong> React.ElementType — default: <code>divWithClassName('h5')</code></li>
                        <li><strong>bsPrefix:</strong> string — default: <code>'offcanvas-title'</code></li>
                    </ul>

                    <h5 className="text-primary mt-4">OffcanvasBody</h5>
                    <p className="text-secondary mb-2"><code>import OffcanvasBody from 'react-bootstrap/OffcanvasBody'</code></p>
                    <ul className="text-secondary small">
                        <li><strong>as:</strong> React.ElementType — default: <code>'div'</code></li>
                        <li><strong>bsPrefix:</strong> string — default: <code>'offcanvas-body'</code></li>
                    </ul>
                </Card>
            </Container>
        </>
    );
}

export default OffcanvasDoc;
