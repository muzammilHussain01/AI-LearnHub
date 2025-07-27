import React from 'react';
import { Container, Row, Col, Card, Accordion, useAccordionButton } from 'react-bootstrap';

const AccordionDoc = () => {
    const CustomToggle = ({ children, eventKey }) => {
        const handleClick = useAccordionButton(eventKey);
        return (
            <button
                type="button"
                className="btn btn-outline-primary w-100 text-start"
                onClick={handleClick}
            >
                {children}
            </button>
        );
    };
    return (
        <>
            <Container >
                <Row>
                    <Col lg={10} >
                        <h2 className="fw-bold mb-4 text-primary">Accordion</h2>

                        <Card className="border-0 shadow-sm mb-4">
                            <Card.Body>
                                <p className="text-muted mb-3">
                                    The <strong>Accordion</strong> component allows for vertically collapsing sections of content using the <code>Collapse</code> component behind the scenes.
                                </p>
                                <p className="text-secondary">
                                    Accordions are perfect for organizing content into collapsible sections, helping keep interfaces clean and navigable. Below is a simple example with two expandable items.
                                </p>
                            </Card.Body>
                        </Card>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                    <Container>
                        <Row>
                            <Col lg={10}>
                                <Card className="border-1 bg-black text-white shadow-sm mb-4">
                                    <Card.Body>
                                    <pre>
                    <code>
                        {`import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;`}
                    </code>
                </pre>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container >
                        <Row>
                            <Col lg={10} >
                                <h2 className="fw-bold mb-4 text-primary">Flush Accordion</h2>

                                <Card className="border-0 shadow-sm">
                                    <Card.Body>
                                        <p className="text-muted mb-3">
                                            Add <code>flush</code> to remove the default background color, some borders, and rounded corners—perfect for rendering accordions edge-to-edge with their parent container.
                                        </p>

                                        <Accordion flush defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                                    in culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                                    in culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Col lg={10} >

                        <Card className="border-1 bg-black text-white shadow-sm">
                        <pre>
                            <code>
                                {`import Accordion from 'react-bootstrap/Accordion';

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;`}
                            </code>
                        </pre>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} >
                        <h2 className="fw-bold mb-4 text-primary">Always Open Accordion</h2>

                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <p className="text-muted mb-3">
                                    Use the <code>alwaysOpen</code> prop to keep multiple accordion items expanded at the same time.
                                    Unlike the default behavior where one item closes when another opens, this configuration supports simultaneous expansion—ideal for FAQs or content-heavy panels.
                                </p>

                                <Accordion defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Card className="border-1 bg-black text-white shadow-sm mb-4">
                        <Col lg={10} className="mx-auto py-4">
    <pre className="text-white">
      <code>{`import Accordion from 'react-bootstrap/Accordion';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;`}</code>
    </pre>
                        </Col>
                    </Card>


                </Row>
                <Container >
                    <Row>
                        <Col lg={10} >
                            <h2 className="fw-bold mb-4 text-primary">Custom Accordions</h2>

                            <Accordion defaultActiveKey="0">
                                <Card className="mb-3">
                                    <Card.Header className="p-0">
                                        <CustomToggle eventKey="0">Click me!</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card className="mb-3">
                                    <Card.Header className="p-0">
                                        <CustomToggle eventKey="1">Click me!</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="bg-black text-white">
                <Row>
                    <Col lg={10}>
          <pre>
            <code>
{`import Accordion from 'react-bootstrap/Accordion';
import useAccordionButton from 'react-bootstrap/useAccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Example() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

render(<Example />);`}
            </code>
          </pre>
                    </Col>
                </Row>
            </Container>
            <div className="container my-5">
                <h2 className="mb-3 text-primary fw-bold">Frequently Asked Questions</h2>


                <Accordion defaultActiveKey="0" className="shadow-sm rounded-3">
                    <Card className="mb-3 border-0">
                        <Card.Header className="bg-light rounded-top">
                            <CustomToggle eventKey="0">What is an accordion in UI?</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="bg-white text-secondary">
                                An accordion is a vertically stacked UI component that allows users to toggle visibility of content sections. It's a space-saving method to group information under headers that users can expand or collapse. This layout is ideal for FAQs, documentation, or menus where content needs to be organized without overwhelming the page. Accordions improve content accessibility and are especially useful in mobile interfaces where screen space is limited.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="mb-3 border-0">
                        <Card.Header className="bg-light">
                            <CustomToggle eventKey="1">Why should I use an accordion?</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="bg-white text-secondary">
                                Using accordions helps enhance the user experience by presenting content in a structured and digestible way. They reduce cognitive overload by hiding non-essential information unless needed. This makes them perfect for complex forms, multi-step processes, settings panels, and mobile UIs. When implemented properly, accordions speed up content navigation and make interfaces feel more responsive and interactive.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="mb-3 border-0">
                        <Card.Header className="bg-light">
                            <CustomToggle eventKey="2">How do I customize accordion behavior?</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="bg-white text-secondary">
                                Customizing accordion behavior in React-Bootstrap is easy using the <code>useAccordionButton</code> hook. It allows you to create custom toggles with your own styles, animations, icons, or callbacks. You can hook into events like expanding or collapsing a section and trigger additional logic, such as analytics, validations, or dynamic data loading. This flexibility gives you full control over accordion interactivity and appearance.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="mb-3 border-0">
                        <Card.Header className="bg-light">
                            <CustomToggle eventKey="3">Can accordions contain complex elements?</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="bg-white text-secondary">
                                Yes, accordions can contain any kind of content including forms, images, tables, charts, or even nested components. They’re not limited to plain text. React-Bootstrap’s component-based structure makes it easy to render dynamic or interactive content inside accordion panels. Just make sure to maintain a clean layout and avoid cramming too much into one section to preserve usability and performance.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </>
    );
};

export default AccordionDoc;
