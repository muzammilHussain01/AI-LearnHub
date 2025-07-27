import { useState, useRef } from 'react';
import {
    Button,
    Card,
    Container,
    Overlay,
    Tooltip,
    OverlayTrigger,
    Stack,
    Popover,
    Table
} from 'react-bootstrap';

function OverlayDoc() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Tooltip from OverlayTrigger!
        </Tooltip>
    );
    const renderPopover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover title</Popover.Header>
            <Popover.Body>
                And here’s some <strong>amazing</strong> content. It’s very engaging. Right?
            </Popover.Body>
        </Popover>
    );
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover title</Popover.Header>
            <Popover.Body>
                And here’s some <strong>amazing</strong> content. It’s very engaging.
            </Popover.Body>
        </Popover>
    );
    const renderPopover1 = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover title</Popover.Header>
            <Popover.Body>
                And here’s some <strong>amazing</strong> content. It’s very engaging. Right?
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <Container>
                {/* Preview Card */}
                <Card className="shadow-sm border-0 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">React-Bootstrap Overlay</h4>
                    <p className="text-secondary mb-4">
                        Overlay is used to position tooltips, popovers, and other content relative to a target element.
                        Below are examples using both <code>Overlay</code> and <code>OverlayTrigger</code>.
                    </p>

                    <div className="d-flex flex-column align-items-center gap-4 py-5">
                        {/* Manual Overlay Example */}
                        <div className="text-center">
                            <Button ref={target} onClick={() => setShow(!show)} variant="primary">
                                Click to Toggle Overlay
                            </Button>

                            <Overlay target={target.current} show={show} placement="right">
                                {(props) => (
                                    <Tooltip id="overlay-tooltip" {...props}>
                                        Hello, I am a manually controlled Overlay Tooltip!
                                    </Tooltip>
                                )}
                            </Overlay>
                        </div>

                        {/* OverlayTrigger Example */}
                        <div className="text-center">
                            <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                <Button variant="success">Hover me (OverlayTrigger)</Button>
                            </OverlayTrigger>
                        </div>
                    </div>
                </Card>

                {/* Code Block */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
<code>{`import { useState, useRef } from 'react';
import {
  Button,
  Overlay,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';

function OverlayExample() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Tooltip from OverlayTrigger!
    </Tooltip>
  );

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)} variant="primary">
        Click to Toggle Overlay
      </Button>

      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-tooltip" {...props}>
            Hello, I am a manually controlled Overlay Tooltip!
          </Tooltip>
        )}
      </Overlay>

      <OverlayTrigger placement="bottom" overlay={renderTooltip}>
        <Button variant="success">Hover me (OverlayTrigger)</Button>
      </OverlayTrigger>
    </>
  );
}

export default OverlayExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                {/* Preview Card */}
                <Card className="shadow-sm border-0 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Custom Trigger Behavior</h4>
                    <p className="text-secondary mb-4">
                        OverlayTrigger with a function child lets you control refs and event handlers manually,
                        giving you full flexibility over what triggers the overlay and where it appears.
                    </p>

                    <div className="d-flex flex-column align-items-center gap-4 py-5">
                        <OverlayTrigger
                            placement="right"
                            overlay={renderTooltip}
                            trigger="click"
                        >
                            {({ ref, ...triggerHandler }) => (
                                <div className="d-flex gap-3 align-items-center">
                                    <Button {...triggerHandler} variant="primary">
                                        Click me
                                    </Button>
                                    <span
                                        ref={ref}
                                        className="text-info fs-4"
                                        role="img"
                                        aria-label="info"
                                    >
                  ℹ️
                </span>
                                </div>
                            )}
                        </OverlayTrigger>
                    </div>
                </Card>

                {/* Code Block */}
                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
<code>{`import { useState } from 'react';
import {
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

function CustomTriggerOverlay() {
  const renderTooltip = (props) => (
    <Tooltip id="custom-tooltip" {...props}>
      Tooltip shown on this icon!
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      overlay={renderTooltip}
      trigger="click"
    >
      {({ ref, ...triggerHandler }) => (
        <div className="d-flex gap-3 align-items-center">
          <Button {...triggerHandler} variant="primary">
            Click me
          </Button>
          <span
            ref={ref}
            className="text-info fs-4"
            role="img"
            aria-label="info"
          >
            ℹ️
          </span>
        </div>
      )}
    </OverlayTrigger>
  );
}

export default CustomTriggerOverlay;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Result Card */}
                <Card className="bg-dark text-light border-0 shadow-sm mb-4">
                    <Card.Body>
                        <h4 className="text-primary fw-semibold mb-3">Tooltips</h4>
                        <p className="text-secondary mb-4">
                            A tooltip component for a more stylish alternative to that anchor tag <code>title</code> attribute.
                        </p>

                        <p>
                            Tight pants next level keffiyeh you probably haven't heard of them.{' '}
                            <OverlayTrigger placement="top" overlay={renderTooltip('Organic and fresh')}>
                                <a href="#" className="text-info text-decoration-underline">Farm-to-table</a>
                            </OverlayTrigger>{' '}
                            seitan, mcsweeney's fixie sustainable quinoa{' '}
                            <OverlayTrigger placement="right" overlay={renderTooltip('Retro tech')}>
                                <a href="#" className="text-info text-decoration-underline">8-bit</a>
                            </OverlayTrigger>{' '}
                            american apparel have a terry richardson vinyl chambray. Beard stumptown,{' '}
                            <OverlayTrigger placement="bottom" overlay={renderTooltip('Warm and cozy')}>
                                <a href="#" className="text-info text-decoration-underline">cardigans</a>
                            </OverlayTrigger>{' '}
                            banh mi lomo thundercats. Tofu biodiesel{' '}
                            <OverlayTrigger placement="left" overlay={renderTooltip('Hipster paradise')}>
                                <a href="#" className="text-info text-decoration-underline">williamsburg</a>
                            </OverlayTrigger>{' '}
                            marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan whatever keytar,
                            scenester farm-to-table banksy Austin twitter handle freegan cred raw denim single-origin
                            coffee viral.
                        </p>
                    </Card.Body>
                </Card>

                {/* Live Editor Card */}
                <Card className="bg-black text-white border-0">
                    <Card.Header className="border-bottom border-secondary">
                        <strong>Live Editor</strong>
                    </Card.Header>
                    <Card.Body>
          <pre className="text-light small mb-0 overflow-auto">
{`import React from 'react';
import { Container, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

const TooltipComponent = () => {
  const renderTooltip = (text) => (props) => (
    <Tooltip {...props}>{text}</Tooltip>
  );

  return (
    <Container className="py-4">
      <Card className="bg-dark text-light border-0 shadow-sm mb-4">
        <Card.Body>
          <h4 className="text-primary fw-semibold mb-3">Tooltips</h4>
          <p className="text-secondary mb-4">
            A tooltip component for a more stylish alternative to that anchor tag title attribute.
          </p>

          <p>
            Tight pants next level keffiyeh you probably haven't heard of them.{' '}
            <OverlayTrigger placement="top" overlay={renderTooltip('Organic and fresh')}>
              <a href="#" className="text-info text-decoration-underline">Farm-to-table</a>
            </OverlayTrigger>{' '}
            seitan, mcsweeney's fixie sustainable quinoa{' '}
            <OverlayTrigger placement="right" overlay={renderTooltip('Retro tech')}>
              <a href="#" className="text-info text-decoration-underline">8-bit</a>
            </OverlayTrigger>{' '}
            american apparel have a terry richardson vinyl chambray. Beard stumptown,{' '}
            <OverlayTrigger placement="bottom" overlay={renderTooltip('Warm and cozy')}>
              <a href="#" className="text-info text-decoration-underline">cardigans</a>
            </OverlayTrigger>{' '}
            banh mi lomo thundercats. Tofu biodiesel{' '}
            <OverlayTrigger placement="left" overlay={renderTooltip('Hipster paradise')}>
              <a href="#" className="text-info text-decoration-underline">williamsburg</a>
            </OverlayTrigger>{' '}
            marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan whatever keytar,
            scenester farm-to-table banksy Austin twitter handle freegan cred raw denim single-origin
            coffee viral.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TooltipComponent;`}
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
            <Card className="bg-dark text-light border-0 shadow-sm mb-4">
                <Card.Body>
                    <h4 className="text-primary fw-semibold mb-4">Tooltips on all sides</h4>
                    <Stack direction="horizontal" className="gap-3 flex-wrap">
                        <OverlayTrigger placement="top" overlay={renderTooltip('top')}>
                            <Button variant="secondary">Top</Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement="right" overlay={renderTooltip('right')}>
                            <Button variant="secondary">Right</Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={renderTooltip('bottom')}>
                            <Button variant="secondary">Bottom</Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement="left" overlay={renderTooltip('left')}>
                            <Button variant="secondary">Left</Button>
                        </OverlayTrigger>
                    </Stack>
                </Card.Body>
            </Card>

            {/* Live Editor */}
            <Card className="bg-black text-white border-0">
                <Card.Header className="border-secondary border-bottom">
                    <strong>Live Editor</strong>
                </Card.Header>
                <Card.Body>
          <pre className="text-light small mb-0 overflow-auto">
{`import React from 'react';
import { Container, Card, Button, OverlayTrigger, Tooltip, Stack } from 'react-bootstrap';

const AllTooltipPositions = () => {
  const renderTooltip = (position) => (
    <Tooltip id={\`tooltip-\${position}\`}>Tooltip on {position}</Tooltip>
  );

  return (
    <Container className="py-4">
      <Card className="bg-dark text-light border-0 shadow-sm mb-4">
        <Card.Body>
          <h4 className="text-primary fw-semibold mb-4">Tooltips on all sides</h4>
          <Stack direction="horizontal" className="gap-3 flex-wrap">
            <OverlayTrigger placement="top" overlay={renderTooltip('top')}>
              <Button variant="secondary">Top</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={renderTooltip('right')}>
              <Button variant="secondary">Right</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={renderTooltip('bottom')}>
              <Button variant="secondary">Bottom</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="left" overlay={renderTooltip('left')}>
              <Button variant="secondary">Left</Button>
            </OverlayTrigger>
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AllTooltipPositions;`}
          </pre>
                </Card.Body>
            </Card>
        </Container>
            <Container className="py-4">
                {/* Result */}
                <Card className="bg-dark text-light border-0 shadow-sm mb-4">
                    <Card.Body>
                        <h4 className="text-primary fw-semibold mb-4">Popover Example</h4>
                        <OverlayTrigger trigger="click" placement="right" overlay={renderPopover}>
                            <Button variant="info">Click to toggle popover</Button>
                        </OverlayTrigger>
                    </Card.Body>
                </Card>

                {/* Live Editor */}
                <Card className="bg-black text-white border-0">
                    <Card.Header className="border-secondary border-bottom">
                        <strong>Live Editor</strong>
                    </Card.Header>
                    <Card.Body>
          <pre className="text-light small mb-0 overflow-auto">
{`import React from 'react';
import {
  Container,
  Card,
  Button,
  OverlayTrigger,
  Popover,
  Stack,
} from 'react-bootstrap';

const PopoverExample = () => {
  const renderPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover title</Popover.Header>
      <Popover.Body>
        And here’s some <strong>amazing</strong> content. It’s very engaging. Right?
      </Popover.Body>
    </Popover>
  );

  return (
    <Container className="py-4">
      <Card className="bg-dark text-light border-0 shadow-sm mb-4">
        <Card.Body>
          <h4 className="text-primary fw-semibold mb-4">Popover Example</h4>
          <OverlayTrigger trigger="click" placement="right" overlay={renderPopover}>
            <Button variant="info">Click to toggle popover</Button>
          </OverlayTrigger>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PopoverExample;`}
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card>
                    <Card.Body>
                        <div className="container py-4">
                            <Card bg="dark" text="light" className="rounded-4 shadow-sm">
                                <Card.Header as="h4" className="border-0 pb-0">
                                    Placement
                                </Card.Header>
                                <Card.Body className="pt-2">
                                    <p className="text-secondary">
                                        As with <code>&lt;Tooltip&gt;</code>s, you can control the placement
                                        of the Popover.
                                    </p>
                                    <div className="d-flex flex-column align-items-center gap-4 mt-4">
                                        <div className="d-flex justify-content-center gap-4">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={popover}
                                            >
                                                <Button variant="outline-light">Popover on top</Button>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="right"
                                                overlay={popover}
                                            >
                                                <Button variant="outline-light">Popover on right</Button>
                                            </OverlayTrigger>
                                        </div>

                                        <div className="d-flex justify-content-center gap-4">
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={popover}
                                            >
                                                <Button variant="outline-light">Popover on bottom</Button>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="left"
                                                overlay={popover}
                                            >
                                                <Button variant="outline-light">Popover on left</Button>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Result */}
                <Card className="bg-dark text-light border-0 shadow-sm mb-4">
                    <Card.Body>
                        <h4 className="text-primary fw-semibold mb-4">Popover Placement</h4>
                        <Stack direction="horizontal" gap={3} className="flex-wrap">
                            <OverlayTrigger trigger="click" placement="top" overlay={renderPopover1}>
                                <Button variant="info">Top</Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="right" overlay={renderPopover1}>
                                <Button variant="info">Right</Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={renderPopover1}>
                                <Button variant="info">Bottom</Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="left" overlay={renderPopover1}>
                                <Button variant="info">Left</Button>
                            </OverlayTrigger>
                        </Stack>
                    </Card.Body>
                </Card>

                {/* Live Editor */}
                <Card className="bg-black text-white border-0">
                    <Card.Header className="border-secondary border-bottom">
                        <strong>Live Editor</strong>
                    </Card.Header>
                    <Card.Body>
          <pre className="text-light small mb-0 overflow-auto">
{`import React from 'react';
import {
  Container,
  Card,
  Button,
  OverlayTrigger,
  Popover,
  Stack,
} from 'react-bootstrap';

const PopoverAllDirections = () => {
  const renderPopover1 = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover title</Popover.Header>
      <Popover.Body>
        And here’s some <strong>amazing</strong> content. It’s very engaging. Right?
      </Popover.Body>
    </Popover>
  );

  return (
    <Container className="py-4">
      <Card className="bg-dark text-light border-0 shadow-sm mb-4">
        <Card.Body>
          <h4 className="text-primary fw-semibold mb-4">Popover Placement</h4>
          <Stack direction="vertical" gap={3} className="align-items-center">
            <Stack direction="horizontal" gap={3}>
              <OverlayTrigger trigger="click" placement="top" overlay={renderPopover1}>
                <Button variant="info">Top</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="right" overlay={renderPopover1}>
                <Button variant="info">Right</Button>
              </OverlayTrigger>
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <OverlayTrigger trigger="click" placement="bottom" overlay={renderPopover1}>
                <Button variant="info">Bottom</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="left" overlay={renderPopover1}>
                <Button variant="info">Left</Button>
              </OverlayTrigger>
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PopoverAllDirections;`}
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Result */}
                <Card className="bg-dark text-light border-0 shadow-sm mb-4">
                    <Card.Body>
                        <h4 className="text-primary fw-semibold mb-4">Disabled Elements</h4>
                        <OverlayTrigger placement="right" overlay={<Popover id="popover-disabled">
                            <Popover.Header as="h3">Disabled Popover</Popover.Header>
                            <Popover.Body>
                                This popover appears even though the button is disabled.
                            </Popover.Body>
                        </Popover>}>
            <span className="d-inline-block" style={{ cursor: 'not-allowed' }}>
              <Button disabled style={{ pointerEvents: 'none' }} variant="secondary">
                Disabled Button
              </Button>
            </span>
                        </OverlayTrigger>
                    </Card.Body>
                </Card>

                {/* Live Editor */}
                <Card className="bg-black text-white border-0">
                    <Card.Header className="border-secondary border-bottom">
                        <strong>Live Editor</strong>
                    </Card.Header>
                    <Card.Body>
          <pre className="text-light small mb-0 overflow-auto">
{`import React from 'react';
import {
  Container,
  Card,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';

const DisabledPopoverExample = () => {
  const renderPopover2 = (
    <Popover id="popover-disabled">
      <Popover.Header as="h3">Disabled Popover</Popover.Header>
      <Popover.Body>
        This popover appears even though the button is disabled.
      </Popover.Body>
    </Popover>
  );

  return (
    <Container className="py-4">
      <Card className="bg-dark text-light border-0 shadow-sm mb-4">
        <Card.Body>
          <h4 className="text-primary fw-semibold mb-4">Disabled Elements</h4>
          <OverlayTrigger placement="right" overlay={renderPopover2}>
            <span className="d-inline-block" style={{ cursor: 'not-allowed' }}>
              <Button disabled style={{ pointerEvents: 'none' }} variant="secondary">
                Disabled Button
              </Button>
            </span>
          </OverlayTrigger>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DisabledPopoverExample;`}
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="bg-white rounded shadow-sm p-4">
                <h2 className="text-primary mb-4 fw-bold">API Reference: Overlay Components</h2>

                {/* Overlay */}
                <h4 className="fw-semibold text-dark mt-4">Overlay</h4>
                <p className="text-muted">Import: <code>import Overlay from 'react-bootstrap/Overlay'</code></p>
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
                    <tr><td>onEnter</td><td><code>(node: HTMLElement, isAppearing: boolean) => any</code></td><td>–</td><td>Called before the component transitions in.</td></tr>
                    <tr><td>onEntering</td><td><code>(node: HTMLElement, isAppearing: boolean) => any</code></td><td>–</td><td>Called as the component begins to transition in.</td></tr>
                    <tr><td>onEntered</td><td><code>(node: HTMLElement, isAppearing: boolean) => any</code></td><td>–</td><td>Called after the component finishes transitioning in.</td></tr>
                    <tr><td>onExit</td><td><code>(node: HTMLElement) => any</code></td><td>–</td><td>Called right before the component transitions out.</td></tr>
                    <tr><td>onExiting</td><td><code>(node: HTMLElement) => any</code></td><td>–</td><td>Called as the component begins to transition out.</td></tr>
                    <tr><td>onExited</td><td><code>(node: HTMLElement) => any</code></td><td>–</td><td>Called after the component finishes transitioning out.</td></tr>
                    <tr><td>flip</td><td><code>boolean</code></td><td>–</td><td>Enables Popper.js flip modifier to adjust placement automatically.</td></tr>
                    <tr><td>placement</td><td><code>unknown</code></td><td>'top'</td><td>Position of overlay relative to target.</td></tr>
                    <tr><td>offset</td><td><code>Offset</code></td><td>–</td><td>Distance between overlay and target.</td></tr>
                    <tr><td>containerPadding</td><td><code>number</code></td><td>–</td><td>Space between overlay and container edge.</td></tr>
                    <tr><td>popperConfig</td><td><code>Omit&lt;UsePopperOptions, 'placement'&gt;</code></td><td>{`{}`}</td><td>Custom Popper.js options.</td></tr>
                    <tr><td>container</td><td><code>DOM Element | Ref</code></td><td>–</td><td>Element to constrain the overlay within.</td></tr>
                    <tr><td>target</td><td><code>DOM Element | Ref</code></td><td>–</td><td>Element the overlay is positioned against.</td></tr>
                    <tr><td>show</td><td><code>boolean</code></td><td>false</td><td>Controls visibility of the overlay.</td></tr>
                    <tr><td>onHide</td><td><code>(e: Event) => void</code></td><td>–</td><td>Fired when overlay requests to hide.</td></tr>
                    <tr><td>rootClose</td><td><code>boolean</code></td><td>false</td><td>Closes the overlay when clicking outside.</td></tr>
                    <tr><td>rootCloseDisabled</td><td><code>boolean</code></td><td>–</td><td>Disables outside click handling.</td></tr>
                    <tr><td>children</td><td><code>ReactElement</code></td><td>–</td><td>Content to display inside the overlay.</td></tr>
                    <tr><td>transition</td><td><code>boolean | TransitionComponent</code></td><td><code>{`<Fade>`}</code></td><td>Controls enter/exit transitions.</td></tr>
                    <tr><td>rootCloseEvent</td><td><code>'click' | 'mousedown'</code></td><td>–</td><td>Event to trigger outside click close.</td></tr>
                    </tbody>
                </Table>

                {/* OverlayTrigger */}
                <h4 className="fw-semibold text-dark mt-5">OverlayTrigger</h4>
                <p className="text-muted">Import: <code>import OverlayTrigger from 'react-bootstrap/OverlayTrigger'</code></p>
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
                    <tr><td>children</td><td><code>ReactElement</code></td><td>–</td><td>Target element to attach the overlay to.</td></tr>
                    <tr><td>trigger</td><td><code>'hover' | 'click' | 'focus' | string[]</code></td><td>['hover', 'focus']</td><td>Events that trigger overlay visibility.</td></tr>
                    <tr><td>delay</td><td><code>number | {`{ show: number, hide: number }`}</code></td><td>–</td><td>Delay before showing or hiding overlay.</td></tr>
                    <tr><td>show</td><td><code>boolean</code></td><td>–</td><td>Controlled visibility state.</td></tr>
                    <tr><td>defaultShow</td><td><code>boolean</code></td><td>false</td><td>Initial visibility state.</td></tr>
                    <tr><td>onToggle</td><td><code>(nextShow: boolean) => void</code></td><td>–</td><td>Fired when overlay is toggled.</td></tr>
                    <tr><td>flip</td><td><code>boolean</code></td><td>depends on placement</td><td>Enable or disable Popper flip modifier.</td></tr>
                    <tr><td>overlay</td><td><code>ReactElement | Function</code></td><td>–</td><td>Overlay content to display.</td></tr>
                    <tr><td>placement</td><td><code>string</code></td><td>–</td><td>Position of the overlay.</td></tr>
                    <tr><td>popperConfig</td><td><code>object</code></td><td>{`{}`}</td><td>Custom Popper.js configuration.</td></tr>
                    </tbody>
                </Table>

                {/* Tooltip */}
                <h4 className="fw-semibold text-dark mt-5">Tooltip</h4>
                <p className="text-muted">Import: <code>import Tooltip from 'react-bootstrap/Tooltip'</code></p>
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
                    <tr><td>bsPrefix</td><td><code>string</code></td><td>'tooltip'</td><td>Base CSS class name.</td></tr>
                    <tr><td>placement</td><td><code>string</code></td><td>'right'</td><td>Tooltip placement direction.</td></tr>
                    <tr><td>arrowProps</td><td><code>{`{ ref: ReactRef, style: object }`}</code></td><td>–</td><td>Props for positioning the tooltip arrow.</td></tr>
                    </tbody>
                </Table>

                {/* Popover */}
                <h4 className="fw-semibold text-dark mt-5">Popover</h4>
                <p className="text-muted">Import: <code>import Popover from 'react-bootstrap/Popover'</code></p>
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
                    <tr><td>bsPrefix</td><td><code>string</code></td><td>'popover'</td><td>Base CSS class name.</td></tr>
                    <tr><td>placement</td><td><code>string</code></td><td>'right'</td><td>Popover placement direction.</td></tr>
                    <tr><td>arrowProps</td><td><code>object</code></td><td>–</td><td>Props for positioning the popover arrow.</td></tr>
                    <tr><td>body</td><td><code>boolean</code></td><td>–</td><td>Wraps children in <code>&lt;Popover.Body&gt;</code> if true.</td></tr>
                    </tbody>
                </Table>

                {/* PopoverBody */}
                <h4 className="fw-semibold text-dark mt-5">PopoverBody</h4>
                <p className="text-muted">Import: <code>import PopoverBody from 'react-bootstrap/PopoverBody'</code></p>
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
                    <tr><td>as</td><td><code>React.ElementType</code></td><td>'div'</td><td>Custom element to render.</td></tr>
                    <tr><td>bsPrefix</td><td><code>string</code></td><td>'popover-body'</td><td>Base CSS class prefix.</td></tr>
                    </tbody>
                </Table>

                {/* PopoverHeader */}
                <h4 className="fw-semibold text-dark mt-5">PopoverHeader</h4>
                <p className="text-muted">Import: <code>import PopoverHeader from 'react-bootstrap/PopoverHeader'</code></p>
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
                    <tr><td>as</td><td><code>React.ElementType</code></td><td>'div'</td><td>Custom element to render.</td></tr>
                    <tr><td>bsPrefix</td><td><code>string</code></td><td>'popover-header'</td><td>Base CSS class prefix.</td></tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default OverlayDoc;
