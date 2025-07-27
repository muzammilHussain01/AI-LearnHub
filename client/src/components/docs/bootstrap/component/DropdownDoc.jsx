import React from 'react';
import { Dropdown, Container,Card,DropdownButton,Row,Col,ButtonGroup,Button,Table  } from 'react-bootstrap';

function DropdownDoc() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Button
            variant="outline-secondary"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children} ▼
        </Button>
    ));

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => (
            <div
                ref={ref}
                style={{
                    ...style,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    padding: 10,
                }}
                className={className}
                aria-labelledby={labeledBy}
            >
                <strong className="text-muted d-block mb-2">Custom Menu</strong>
                <ul className="list-unstyled m-0">
                    {React.Children.toArray(children).map((child, i) => (
                        <li key={i}>{child}</li>
                    ))}
                </ul>
            </div>
        )
    );
    const variant = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    const variants = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    const dropdownAPI = [
        {
            name: "placement",
            type:
                "'auto' | 'auto-start' | 'auto-end' | 'top' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end'",
            default: "'bottom-start'",
            description:
                "The PopperJS placement for positioning the Dropdown menu in relation to its Toggle.",
        },
        {
            name: "defaultShow",
            type: "boolean",
            default: "undefined",
            description: "Sets the initial visibility of the Dropdown.",
        },
        {
            name: "show",
            type: "boolean",
            default: "undefined",
            description:
                "Whether or not the Dropdown is visible. Controlled by onToggle.",
        },
        {
            name: "onSelect",
            type: "(eventKey: string | null, e: SyntheticEvent) => void",
            default: "undefined",
            description: "Callback fired when a DropdownItem has been selected.",
        },
        {
            name: "onToggle",
            type:
                "(nextShow: boolean, meta: { source: 'click' | 'keydown' | 'rootClose' | 'select' }) => void",
            default: "undefined",
            description:
                "Callback fired when Dropdown wishes to change visibility. Gives the next show state and the source.",
        },
        {
            name: "focusFirstItemOnShow",
            type: "boolean | 'keyboard'",
            default: "false or 'keyboard' if menu has role='menu'",
            description: "Control focus behavior when Dropdown is opened.",
        },
        {
            name: "children",
            type: "React.ReactNode",
            default: "Required",
            description:
                "Render prop returning the root dropdown. Should include toggle and menu.",
        },
        {
            name: "as",
            type: "React.ElementType",
            default: "undefined",
            description: "Element used to render the component.",
        },
        {
            name: "drop",
            type:
                "'up' | 'up-centered' | 'start' | 'end' | 'down' | 'down-centered'",
            default: "undefined",
            description: "Direction and location of the menu relative to toggle.",
        },
        {
            name: "align",
            type:
                "'start' | 'end' | { sm|md|lg|xl|xxl: 'start' | 'end' } | Record<string, AlignDirection>",
            default: "undefined",
            description: "Aligns menu to toggle. Responsive support available.",
        },
        {
            name: "autoClose",
            type: "boolean | 'outside' | 'inside'",
            default: "true",
            description:
                "Control whether dropdown closes on menu item click or outside click.",
        },
        {
            name: "title",
            type: "React.ReactNode",
            default: "Required (DropdownButton/SplitButton only)",
            description: "Content of the button toggle.",
        },
    ];

    return (
        <>
            <Container className="py-4">
                <h2 className="mb-3 fw-bold">Dropdowns</h2>
                <p>
                    Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
                </p>

                <hr />

                <h4 className="mt-4 fw-semibold">Overview</h4>
                <p>
                    Dropdowns are toggleable, contextual overlays for displaying lists of links and more. Like overlays, Dropdowns are built using a third-party library Popper.js, which provides dynamic positioning and viewport detection.
                </p>

                <h4 className="mt-4 fw-semibold">Accessibility</h4>
                <p>
                    The WAI ARIA standard defines a <code>role="menu"</code> widget, but it's very specific to a certain kind of menu. ARIA menus must only contain <code>role="menuitem"</code>, <code>role="menuitemcheckbox"</code>, or <code>role="menuitemradio"</code>.
                </p>
                <p>
                    On the other hand, Bootstrap's dropdowns are designed to be more generic and applicable in a variety of situations. For this reason we don't automatically add the menu roles to the markup. We do implement some basic keyboard navigation, and if you do provide the <code>menu</code> role, react-bootstrap will do its best to ensure the focus management is compliant with the ARIA authoring guidelines for menus.
                </p>

                <h4 className="mt-4 fw-semibold">Examples</h4>
                <h5 className="text-primary mb-3">Single Button Dropdown</h5>

                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Card className="bg-black text-white">
                    <Card.Body>
                    <pre>
                        <code>{`import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <p>
                    Since the above is such a common configuration, react-bootstrap provides the{' '}
                    <code>{'<DropdownButton>'}</code> component to help reduce typing. Provide a <code>title</code> prop and
                    some <code>{'<DropdownItem>'}</code>s and you're ready to go.
                </p>

                <DropdownButton id="dropdown-button-example" title="Dropdown Button" variant="primary">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>

                <Card className="bg-black text-white mt-4">
                    <Card.Body>
          <pre>
            <code>{`import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownButtonExample() {
  return (
    <DropdownButton id="dropdown-button-example" title="Dropdown Button" variant="primary">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownButtonExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h5 className="mb-3">DropdownButton will forward Button props to the underlying Toggle component</h5>
                <div className="bg-dark p-3 rounded">
                    <Row className="g-2">
                        {variants.map((variant) => (
                            <Col xs="auto" key={variant}>
                                <DropdownButton
                                    id={`dropdown-button-${variant.toLowerCase()}`}
                                    title={variant}
                                    variant={variant.toLowerCase()}
                                >
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                        ))}
                    </Row>
                </div>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function VariantsExample() {
  return (
    <>
      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={\`dropdown-variants-${variant}\`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ),
      )}
    </>
  );
}

export default VariantsExample;`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h5 className="mb-3 fw-semibold">Split Button Dropdown</h5>
                <ButtonGroup>
                    <Button variant="primary">Split Button</Button>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function SplitBasicExample() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Split Button</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SplitBasicExample;`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h5 className="mb-3 fw-semibold">Sizing</h5>
                <p>Dropdowns work with buttons of all sizes.</p>

                {/* Large button */}
                <DropdownButton
                    size="lg"
                    variant="secondary"
                    title="Large Dropdown"
                    className="mb-3"
                >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>

                {/* Default button */}
                <DropdownButton
                    variant="secondary"
                    title="Default Dropdown"
                    className="mb-3"
                >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>

                {/* Small button */}
                <DropdownButton
                    size="sm"
                    variant="secondary"
                    title="Small Dropdown"
                >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <Card className="bg-black text-white">
                    <Card.Body>
                        <pre>
                            <code>{`import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

function ButtonSizesExample() {
  return (
    <>
      {[DropdownButton, SplitButton].map((DropdownType, idx) => (
        <DropdownType
          as={ButtonGroup}
          key={idx}
          id={dropdown-button-drop-}
          size="lg"
          title="Drop large"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownType>
      ))}

      {[DropdownButton, SplitButton].map((DropdownType, idx) => (
        <DropdownType
          as={ButtonGroup}
          key={idx}
          id={dropdown-button-drop-}
          size="sm"
          variant="secondary"
          title="Drop small"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownType>
      ))}
    </>
  );
}

export default ButtonSizesExample;`}</code>
                        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h5 className="mb-3 fw-semibold">Drop Directions</h5>
                <p>
                    Trigger dropdown menus above, below, left, or to the right of their toggle elements using the <code>drop</code> prop.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                    {/* Drop Up */}
                    <DropdownButton as={ButtonGroup} drop="up" variant="secondary" title="Drop up">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    </DropdownButton>

                    {/* Drop Right */}
                    <DropdownButton as={ButtonGroup} drop="end" variant="secondary" title="Drop end (right)">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    </DropdownButton>

                    {/* Drop Down */}
                    <DropdownButton as={ButtonGroup} drop="down" variant="secondary" title="Drop down">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    </DropdownButton>

                    {/* Drop Left */}
                    <DropdownButton as={ButtonGroup} drop="start" variant="secondary" title="Drop start (left)">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function DropDirectionExample() {
  return (
    <>
      {['up', 'down', 'start', 'end'].map((direction) => (
        <DropdownButton
          as={ButtonGroup}
          key={direction}
          id={\`dropdown-button-drop-\${direction}\`}
          drop={direction}
          variant="secondary"
          title={\`Drop \${direction}\`}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      ))}

      {['up', 'down', 'start', 'end'].map((direction) => (
        <SplitButton
          key={direction}
          id={\`split-button-drop-\${direction}\`}
          drop={direction}
          variant="secondary"
          title={\`Split \${direction}\`}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </SplitButton>
      ))}
    </>
  );
}

export default DropDirectionExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h5 className="mb-3 fw-semibold">Responsive Alignment</h5>
                <p>
                    If you want to use responsive menu alignment, pass an object containing a breakpoint to the{' '}
                    <code>align</code> prop on the <code>&lt;DropdownMenu&gt;</code>,{' '}
                    <code>&lt;DropdownButton&gt;</code>, or <code>&lt;SplitButton&gt;</code>. You can specify{' '}
                    <code>start</code> or <code>end</code> for the various breakpoints.
                </p>

                <div className="alert alert-warning py-2">
                    <strong>Warning:</strong> Using responsive alignment will disable Popper usage, so any
                    dynamic positioning features such as <code>flip</code> will not work.
                </div>

                <div className="mb-4">
                    <DropdownButton
                        as={ButtonGroup}
                        align={{ lg: 'end' }}
                        title="Right aligned (lg)"
                        id="dropdown-menu-align-responsive-1"
                        variant="primary"
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    </DropdownButton>
                </div>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ResponsiveAlignDropdown() {
  return (
    <DropdownButton
      as={ButtonGroup}
      align={{ lg: 'end' }}
      title="Right aligned (lg)"
      id="dropdown-menu-align-responsive-1"
      variant="primary"
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
    </DropdownButton>
  );
}

export default ResponsiveAlignDropdown;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h5 className="mb-3 fw-semibold">Menu Headers</h5>
                <p>Add a header to label sections of actions.</p>

                <div className="mb-4">
                    <DropdownButton
                        as={ButtonGroup}
                        title="Dropdown with Header"
                        id="dropdown-header-example"
                        variant="primary"
                    >
                        <Dropdown.Header>Dropdown header</Dropdown.Header>
                        <Dropdown.Item eventKey="1">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Something else here</Dropdown.Item>
                    </DropdownButton>
                </div>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function DropdownMenuHeaders() {
  return (
    <DropdownButton
      as={ButtonGroup}
      title="Dropdown with Header"
      id="dropdown-header-example"
      variant="primary"
    >
      <Dropdown.Header>Dropdown header</Dropdown.Header>
      <Dropdown.Item eventKey="1">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Something else here</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownMenuHeaders;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h5 className="mb-3 fw-semibold">Menu Dividers</h5>
                <p>Separate groups of related menu items with a divider.</p>

                <div className="mb-4">
                    <DropdownButton
                        as={ButtonGroup}
                        title="Dropdown with Divider"
                        id="dropdown-divider-example"
                        variant="primary"
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                </div>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function DropdownMenuDividers() {
  return (
    <DropdownButton
      as={ButtonGroup}
      title="Dropdown with Divider"
      id="dropdown-divider-example"
      variant="primary"
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownMenuDividers;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h5 className="mb-3 fw-semibold">AutoClose</h5>
                <p>
                    By default, the dropdown menu is closed when selecting a menu item or clicking outside of the dropdown menu.
                    This behaviour can be changed using the <code>autoClose</code> property.
                </p>
                <p>
                    Set <code>autoClose</code> to <code>false</code>, <code>"inside"</code>, or <code>"outside"</code> to customize how it behaves.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                    <DropdownButton
                        as={ButtonGroup}
                        autoClose="true"
                        title="AutoClose: true"
                        variant="primary"
                        id="autoclose-true"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton
                        as={ButtonGroup}
                        autoClose="inside"
                        title="AutoClose: inside"
                        variant="success"
                        id="autoclose-inside"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton
                        as={ButtonGroup}
                        autoClose="outside"
                        title="AutoClose: outside"
                        variant="warning"
                        id="autoclose-outside"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton
                        as={ButtonGroup}
                        autoClose={false}
                        title="AutoClose: false"
                        variant="danger"
                        id="autoclose-false"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>

                <Card className="bg-black text-white">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function AutoCloseDropdownExample() {
  return (
    <>
      <DropdownButton autoClose="true" title="AutoClose: true">
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else</Dropdown.Item>
      </DropdownButton>

      <DropdownButton autoClose="inside" title="AutoClose: inside">
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else</Dropdown.Item>
      </DropdownButton>

      <DropdownButton autoClose="outside" title="AutoClose: outside">
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else</Dropdown.Item>
      </DropdownButton>

      <DropdownButton autoClose={false} title="AutoClose: false">
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default AutoCloseDropdownExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h5 className="mb-3 fw-semibold">Custom Dropdown Components</h5>
                <p>
                    For those that want to customize everything, you can forgo the included Toggle and Menu components,
                    and create your own. By providing custom components to the <code>as</code> prop, you can control how
                    each component behaves. Custom toggle and menu components must be able to accept <code>refs</code>.
                </p>

                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="custom-dropdown-toggle">
                        Custom toggle
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Card className="bg-black text-white mt-4">
                    <Card.Body>
          <pre className="mb-0">
            <code>{`import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';

function CustomDropdownExample() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button variant="outline-secondary" ref={ref} onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
      {children} ▼
    </Button>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => (
      <div
        ref={ref}
        style={{ ...style, backgroundColor: 'white', borderRadius: 5, padding: 10 }}
        className={className}
        aria-labelledby={labeledBy}
      >
        <strong className="text-muted d-block mb-2">Custom Menu</strong>
        <ul className="list-unstyled m-0">
          {React.Children.toArray(children).map((child, i) => (
            <li key={i}>{child}</li>
          ))}
        </ul>
      </div>
    )
  );

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="custom-dropdown-toggle">
        Custom toggle
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdownExample;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <div className="p-3">
                <h4 className="mb-3">Dropdown API Table</h4>
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
                    {dropdownAPI.map((prop, idx) => (
                        <tr key={idx}>
                            <td>{prop.name}</td>
                            <td style={{ whiteSpace: "pre-wrap" }}>{prop.type}</td>
                            <td>{prop.default}</td>
                            <td>{prop.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default DropdownDoc;
