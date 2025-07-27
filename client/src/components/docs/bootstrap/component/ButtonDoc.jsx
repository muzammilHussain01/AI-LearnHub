import React, {useState} from 'react';
import { Container, Card, Button, Stack,ButtonGroup,ToggleButton,ToggleButtonGroup,Table } from 'react-bootstrap';

function ButtonDoc() {
    const apiData = [
        {
            title: 'Button',
            import: "import Button from 'react-bootstrap/Button'",
            props: [
                { name: 'bsPrefix', type: 'string | undefined', default: "'btn'", description: 'Custom base class prefix.' },
                { name: 'active', type: 'boolean | undefined', default: 'false', description: 'Manually sets visual :active state.' },
                { name: 'variant', type: `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'link' | 'outline-*'`, default: "'primary'", description: 'Button visual style variant.' },
                { name: 'size', type: "'sm' | 'lg'", default: '', description: 'Large or small button size.' },
                { name: 'disabled', type: 'boolean | undefined', default: 'false', description: 'Disables button and mouse events.' },
                { name: 'href', type: 'string | undefined', default: '', description: 'Renders button as an <a> element.' },
                { name: 'onClick', type: 'function | undefined', default: '', description: 'Click event handler.' },
                { name: 'type', type: "'button' | 'reset' | 'submit' | null", default: "'button'", description: 'HTML button type attribute.' },
            ],
        },
        {
            title: 'ToggleButtonGroup',
            import: "import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'",
            props: [
                { name: 'name', type: 'string | undefined', default: '', description: 'HTML input name for buttons.' },
                { name: 'value', type: 'any | undefined', default: '', description: 'Value or array of active values.' },
                { name: 'onChange', type: 'function | undefined', default: '', description: 'Callback on toggle.' },
                { name: 'type', type: "'checkbox' | 'radio'", default: '', description: 'Toggle behavior input type.' },
                { name: 'size', type: "'sm' | 'lg' | undefined", default: '', description: 'Size for all buttons in group.' },
                { name: 'vertical', type: 'boolean | undefined', default: '', description: 'Vertically stacked buttons.' },
            ],
        },
        {
            title: 'ToggleButton',
            import: "import ToggleButton from 'react-bootstrap/ToggleButton'",
            props: [
                { name: 'bsPrefix', type: 'string | undefined', default: "'btn-check'", description: 'Custom base class prefix.' },
                { name: 'type', type: "'checkbox' | 'radio' | undefined", default: '', description: '<input> element type.' },
                { name: 'name', type: 'string | undefined', default: '', description: 'HTML input name for grouping.' },
                { name: 'checked', type: 'boolean | undefined', default: '', description: 'Input checked state.' },
                { name: 'disabled', type: 'boolean | undefined', default: '', description: 'Disables label and input.' },
                { name: 'id', type: 'string', default: '', description: '<strong>Required.</strong> Input toggle ID.' },
                { name: 'onChange', type: 'React.ChangeEventHandler<HTMLInputElement> | undefined', default: '', description: 'Change event handler.' },
                { name: 'value', type: 'string | number | string[]', default: '', description: '<strong>Required.</strong> Input value.' },
                { name: 'inputRef', type: 'React.Ref<HTMLInputElement> | undefined', default: '', description: 'Ref to <input> element.' },
            ],
        },
    ];
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };
    const [radioValue, setRadioValue] = useState('1');
    const [checkboxValues, setCheckboxValues] = useState([]);


    const radios = [
        { name: 'Option 1', value: '1' },
        { name: 'Option 2', value: '2' },
        { name: 'Option 3', value: '3' },
    ];

    const checkboxes = [
        { name: 'Check 1', value: 'A' },
        { name: 'Check 2', value: 'B' },
        { name: 'Check 3', value: 'C' },
    ];

    const handleCheckboxChange = (val) => {
        setCheckboxValues(prev =>
            prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
        );
    };
    return (
        <>
            <Container >
                <Card className="shadow-sm border-0">
                    <h4 className="text-primary fw-semibold mb-3">Bootstrap Button Variants</h4>
                    <p className="text-secondary mb-4">
                        Use any of the supported <code>variant</code> values to quickly create buttons with predefined styles.
                    </p>

                    <Stack direction="horizontal" gap={3} className="flex-wrap">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="success">Success</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="info">Info</Button>
                        <Button variant="light">Light</Button>
                        <Button variant="dark">Dark</Button>
                        <Button variant="link">Link</Button>
                    </Stack>
                </Card>
                <Card className="bg-black text-white">
                    <Card.Body>
                    <pre>
                        <code>{`import Button from 'react-bootstrap/Button';

function TypesExample() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default TypesExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 p-4 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Bootstrap Outline Button Variants</h4>
                    <p className="text-secondary mb-4">
                        For a lighter touch, use <code>variant="outline-*" </code> to create buttons with no background color.
                    </p>

                    <Stack direction="horizontal" gap={3} className="flex-wrap">
                        <Button variant="outline-primary">Primary</Button>
                        <Button variant="outline-secondary">Secondary</Button>
                        <Button variant="outline-success">Success</Button>
                        <Button variant="outline-danger">Danger</Button>
                        <Button variant="outline-warning">Warning</Button>
                        <Button variant="outline-info">Info</Button>
                        <Button variant="outline-light">Light</Button>
                        <Button variant="outline-dark">Dark</Button>
                    </Stack>
                </Card>

                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
                        <code>{`import Button from 'react-bootstrap/Button';

function OutlineExample() {
  return (
    <>
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
    </>
  );
}

export default OutlineExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 p-4 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Button Tags</h4>
                    <p className="text-secondary mb-4">
                        Normally <code>{`<Button>`}</code> components render a native <code>{`<button>`}</code>. However, you can render whatever you like:
                        adding an <code>href</code> renders an <code>{`<a>`}</code>, and the <code>as</code> prop allows complete control.
                    </p>

                    <Stack direction="horizontal" gap={3} className="flex-wrap">
                        <Button variant="primary">Button (button)</Button>
                        <Button variant="success" href="#link">Button (anchor)</Button>
                        <Button variant="warning" as="input" type="button" value="Input Button" />
                        <Button variant="danger" as="div" role="button">Div as Button</Button>
                    </Stack>
                </Card>

                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
                        <code>{`import Button from 'react-bootstrap/Button';

function ButtonTagsExample() {
  return (
    <>
      <Button variant="primary">Button (button)</Button>
      <Button variant="success" href="#link">Button (anchor)</Button>
      <Button variant="warning" as="input" type="button" value="Input Button" />
      <Button variant="danger" as="div" role="button">Div as Button</Button>
    </>
  );
}

export default ButtonTagsExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 p-4 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Button Sizes</h4>
                    <p className="text-secondary mb-4">
                        Fancy larger or smaller buttons? Use the <code>size</code> prop with <code>"lg"</code> or <code>"sm"</code> for different button sizes.
                    </p>

                    <Stack direction="vertical" gap={3} className="align-items-start">
                        <Button variant="primary" size="lg">
                            Large Button
                        </Button>
                        <Button variant="primary">
                            Default Button
                        </Button>
                        <Button variant="primary" size="sm">
                            Small Button
                        </Button>
                    </Stack>
                </Card>

                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
                        <code>{`import Button from 'react-bootstrap/Button';

function ButtonSizesExample() {
  return (
    <>
      <Button variant="primary" size="lg">Large Button</Button>
      <Button variant="primary">Default Button</Button>
      <Button variant="primary" size="sm">Small Button</Button>
    </>
  );
}

export default ButtonSizesExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 p-4 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Block Buttons</h4>
                    <p className="text-secondary mb-4">
                        Create responsive stacks of full-width “block buttons” using Bootstrap’s <code>d-grid</code>, <code>gap-2</code>, and responsive utilities.
                    </p>

                    <div className="d-grid gap-2 d-md-block">
                        <Button variant="primary" className="w-100 w-md-auto">
                            Button 1
                        </Button>
                        <Button variant="secondary" className="w-100 w-md-auto">
                            Button 2
                        </Button>
                    </div>
                </Card>

                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
                        <code>{`import Button from 'react-bootstrap/Button';

function BlockButtonsExample() {
  return (
    <div className="d-grid gap-2 d-md-block">
      <Button variant="primary" className="w-100 w-md-auto">Button 1</Button>
      <Button variant="secondary" className="w-100 w-md-auto">Button 2</Button>
    </div>
  );
}

export default BlockButtonsExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 p-4 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Active State</h4>
                    <p className="text-secondary mb-4">
                        To set a button's active state, simply set the <code>active</code> prop. This mimics the pressed appearance.
                    </p>

                    <Stack direction="horizontal" gap={3} className="flex-wrap">
                        <Button variant="primary" active>
                            Active Button
                        </Button>
                        <Button variant="secondary">
                            Inactive Button
                        </Button>
                    </Stack>
                </Card>

                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
                        <code>{`import Button from 'react-bootstrap/Button';

function ActiveButtonExample() {
  return (
    <>
      <Button variant="primary" active>
        Active Button
      </Button>
      <Button variant="secondary">
        Inactive Button
      </Button>
    </>
  );
}

export default ActiveButtonExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 p-4 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Disabled State</h4>
                    <p className="text-secondary mb-4">
                        Make buttons look and behave as inactive by adding the <code>disabled</code> prop.
                    </p>

                    <Stack direction="horizontal" gap={3} className="flex-wrap">
                        <Button variant="primary" disabled>
                            Disabled Button
                        </Button>
                        <Button variant="secondary">
                            Active Button
                        </Button>
                    </Stack>
                </Card>

                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
                        <code>{`import Button from 'react-bootstrap/Button';

function DisabledButtonExample() {
  return (
    <>
      <Button variant="primary" disabled>
        Disabled Button
      </Button>
      <Button variant="secondary">
        Active Button
      </Button>
    </>
  );
}

export default DisabledButtonExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 p-4 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Disabled Anchor & Loading State</h4>
                    <p className="text-secondary mb-4">
                        <strong>Watch out!</strong> <code>{`<a>`}</code> elements don't support the <code>disabled</code> attribute natively. React Bootstrap prevents click handlers and applies <code>pointer-events: none</code>, but not all browsers support it perfectly.
                    </p>

                    <Stack direction="horizontal" gap={3} className="flex-wrap mb-4">
                        <Button href="#" variant="outline-danger" disabled>
                            Disabled Anchor Button
                        </Button>
                        <Button href="#" variant="outline-success">
                            Enabled Anchor Button
                        </Button>
                    </Stack>

                    <p className="text-secondary mb-3">
                        <strong>Loading state:</strong> Use state to control a loading indicator and disable the button.
                    </p>

                    <Stack direction="horizontal" gap={3} className="flex-wrap">
                        <Button variant="primary" disabled={isLoading} onClick={handleClick}>
                            {isLoading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        className="me-2"
                                    />
                                    Loading...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                        <Button variant="secondary" disabled>
                            Permanently Disabled
                        </Button>
                    </Stack>
                </Card>

                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
                        <code>{`import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ButtonExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button href="#" variant="outline-danger" disabled>
        Disabled Anchor Button
      </Button>

      <Button variant="primary" disabled={isLoading} onClick={handleClick}>
        {isLoading ? (
          <>
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
            Loading...
          </>
        ) : (
          'Submit'
        )}
      </Button>
    </>
  );
}

export default ButtonExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 p-4 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Checkbox / Radio Toggle Buttons</h4>
                    <p className="text-secondary mb-4">
                        Use <code>&lt;ToggleButton&gt;</code> inside a <code>&lt;ButtonGroup&gt;</code> to style checkbox or radio form elements with buttons.
                    </p>

                    <div className="mb-4">
                        <h6 className="mb-2">Radio Toggle Buttons (Single Selection)</h6>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant="outline-primary"
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>

                    <div>
                        <h6 className="mb-2">Checkbox Toggle Buttons (Multiple Selection)</h6>
                        <ButtonGroup>
                            {checkboxes.map((checkbox, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`checkbox-${idx}`}
                                    type="checkbox"
                                    variant="outline-success"
                                    value={checkbox.value}
                                    checked={checkboxValues.includes(checkbox.value)}
                                    onChange={() => handleCheckboxChange(checkbox.value)}
                                >
                                    {checkbox.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                </Card>

                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
                        <code>{`import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function ToggleButtonExample() {
  const [radioValue, setRadioValue] = useState('1');
  const [checkboxValues, setCheckboxValues] = useState([]);

  const radios = [
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ];

  const checkboxes = [
    { name: 'Check 1', value: 'A' },
    { name: 'Check 2', value: 'B' },
    { name: 'Check 3', value: 'C' },
  ];

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={\`radio-\${idx}\`}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <ButtonGroup>
        {checkboxes.map((checkbox, idx) => (
          <ToggleButton
            key={idx}
            id={\`checkbox-\${idx}\`}
            type="checkbox"
            variant="outline-success"
            value={checkbox.value}
            checked={checkboxValues.includes(checkbox.value)}
            onChange={() => {
              setCheckboxValues(prev =>
                prev.includes(checkbox.value)
                  ? prev.filter(v => v !== checkbox.value)
                  : [...prev, checkbox.value]
              );
            }}
          >
            {checkbox.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default ToggleButtonExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card className="shadow-sm border-0 p-4 mb-4">
                    <h4 className="text-primary fw-semibold mb-3">Controlled Toggle Buttons</h4>
                    <p className="text-secondary mb-4">
                        Use <code>{`<ToggleButtonGroup>`}</code> in controlled mode by passing in <code>value</code> and an <code>onChange</code> handler.
                    </p>

                    <div className="mb-4">
                        <h6 className="mb-2">Controlled Radio Toggle Buttons</h6>
                        <ToggleButtonGroup
                            type="radio"
                            name="radio-options"
                            value={radioValue}
                            onChange={(val) => setRadioValue(val)}
                        >
                            <ToggleButton id="radio-1" value="1" variant="outline-primary">
                                Option 1
                            </ToggleButton>
                            <ToggleButton id="radio-2" value="2" variant="outline-primary">
                                Option 2
                            </ToggleButton>
                            <ToggleButton id="radio-3" value="3" variant="outline-primary">
                                Option 3
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <div className="mt-2 text-muted">Selected: {radioValue}</div>
                    </div>

                    <div>
                        <h6 className="mb-2">Controlled Checkbox Toggle Buttons</h6>
                        <ToggleButtonGroup
                            type="checkbox"
                            name="checkbox-options"
                            value={checkboxValues}
                            onChange={(val) => setCheckboxValues(val)}
                        >
                            <ToggleButton id="check-1" value="1" variant="outline-success">
                                Check 1
                            </ToggleButton>
                            <ToggleButton id="check-2" value="2" variant="outline-success">
                                Check 2
                            </ToggleButton>
                            <ToggleButton id="check-3" value="3" variant="outline-success">
                                Check 3
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <div className="mt-2 text-muted">Selected: {checkboxValues.join(', ')}</div>
                    </div>
                </Card>

                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
                        <code>{`import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function ControlledToggleButtons() {
  const [radioValue, setRadioValue] = useState('2');
  const [checkboxValues, setCheckboxValues] = useState(['1', '3']);

  return (
    <>
      <ToggleButtonGroup
        type="radio"
        name="radio-options"
        value={radioValue}
        onChange={(val) => setRadioValue(val)}
      >
        <ToggleButton value="1" variant="outline-primary">Option 1</ToggleButton>
        <ToggleButton value="2" variant="outline-primary">Option 2</ToggleButton>
        <ToggleButton value="3" variant="outline-primary">Option 3</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        type="checkbox"
        name="checkbox-options"
        value={checkboxValues}
        onChange={(val) => setCheckboxValues(val)}
      >
        <ToggleButton value="1" variant="outline-success">Check 1</ToggleButton>
        <ToggleButton value="2" variant="outline-success">Check 2</ToggleButton>
        <ToggleButton value="3" variant="outline-success">Check 3</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default ControlledToggleButtons;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                {apiData.map((component) => (
                    <Card key={component.title} className="shadow-sm border-0 p-4 mb-4">
                        <h4 className="text-primary fw-semibold mb-3">{component.title} API</h4>
                        <p className="text-secondary mb-3"><code>{component.import}</code></p>
                        <Table striped bordered hover responsive>
                            <thead>
                            <tr className="table-primary">
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {component.props.map((prop) => (
                                <tr key={prop.name}>
                                    <td><code>{prop.name}</code></td>
                                    <td><code>{prop.type}</code></td>
                                    <td><code>{prop.default}</code></td>
                                    <td dangerouslySetInnerHTML={{ __html: prop.description }} />
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Card>
                ))}
            </Container>
        </>
    );
}

export default ButtonDoc;
