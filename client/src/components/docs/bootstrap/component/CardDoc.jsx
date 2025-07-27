import React from 'react';
import { Container, Card,ListGroup,Nav,CardGroup,Row,Col,Table  } from 'react-bootstrap';

function CardDoc() {
    const apiData = [
        {
            component: 'Card',
            props: [
                { name: 'as', type: 'React.ElementType', default: "'div'", description: 'Element used to render the component.' },
                { name: 'bsPrefix', type: 'string', default: "'card'", description: 'Base class name and modifier prefix.' },
                { name: 'bg', type: "'primary' | ... | 'light'", default: 'undefined', description: 'Sets card background color.' },
                { name: 'text', type: "'primary' | ... | 'muted'", default: 'undefined', description: 'Sets card text color.' },
                { name: 'border', type: "'primary' | ... | 'light'", default: 'undefined', description: 'Sets card border color.' },
                { name: 'body', type: 'boolean', default: 'false', description: 'Wraps content in Card.Body when true.' },
            ],
        },
        {
            component: 'CardHeader / CardBody / CardFooter',
            props: [
                { name: 'as', type: 'React.ElementType', default: "'div'", description: 'Element used to render the section.' },
                { name: 'bsPrefix', type: 'string', default: "'card-header/body/footer'", description: 'CSS class name prefix override.' },
            ],
        },
        {
            component: 'CardTitle / CardSubtitle',
            props: [
                { name: 'as', type: 'React.ElementType', default: 'divWithClassName("h5"/"h6")', description: 'Element for title or subtitle.' },
                { name: 'bsPrefix', type: 'string', default: "'card-title/subtitle'", description: 'Class name prefix override.' },
            ],
        },
        {
            component: 'CardText',
            props: [
                { name: 'as', type: 'React.ElementType', default: "'p'", description: 'Element used for text content.' },
                { name: 'bsPrefix', type: 'string', default: "'card-text'", description: 'Class name prefix override.' },
            ],
        },
        {
            component: 'CardLink',
            props: [
                { name: 'as', type: 'React.ElementType', default: "'a'", description: 'Element used to render a link.' },
                { name: 'bsPrefix', type: 'string', default: "'card-link'", description: 'Class name prefix override.' },
            ],
        },
        {
            component: 'CardImg',
            props: [
                { name: 'as', type: 'React.ElementType', default: "'img'", description: 'Element used to render the image.' },
                { name: 'bsPrefix', type: 'string', default: "'card-img'", description: 'Class name prefix override.' },
                { name: 'variant', type: "'top' | 'bottom'", default: 'undefined', description: 'Position of image inside card.' },
            ],
        },
        {
            component: 'CardImgOverlay',
            props: [
                { name: 'as', type: 'React.ElementType', default: "'div'", description: 'Overlay element wrapper.' },
                { name: 'bsPrefix', type: 'string', default: "'card-img-overlay'", description: 'Class name prefix override.' },
            ],
        },
        {
            component: 'CardGroup',
            props: [
                { name: 'as', type: 'React.ElementType', default: "'div'", description: 'Element used to render group container.' },
                { name: 'bsPrefix', type: 'string', default: "'card-group'", description: 'Class name prefix override.' },
            ],
        },
    ];
    const creamColor = '#fffef5';
    const borderColor = '#e0dccc';
    const cardData = new Array(4).fill({
        title: 'Card title',
        text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'https://via.placeholder.com/600x160',
    });
    const borderCardStyles = [
        { border: 'primary', title: 'Primary Card Title' },
        { border: 'secondary', title: 'Secondary Card Title' },
        { border: 'success', title: 'Success Card Title' },
        { border: 'danger', title: 'Danger Card Title' },
        { border: 'warning', title: 'Warning Card Title' },
        { border: 'info', title: 'Info Card Title' },
        { border: 'dark', title: 'Dark Card Title' },
        { border: 'light', title: 'Light Card Title' },
    ];
    const cardStyles = [
        { bg: 'primary', text: 'white', title: 'Primary Card Title' },
        { bg: 'secondary', text: 'white', title: 'Secondary Card Title' },
        { bg: 'success', text: 'white', title: 'Success Card Title' },
        { bg: 'danger', text: 'white', title: 'Danger Card Title' },
        { bg: 'warning', text: 'dark', title: 'Warning Card Title' },
        { bg: 'info', text: 'dark', title: 'Info Card Title' },
        { bg: 'light', text: 'dark', title: 'Light Card Title' },
        { bg: 'dark', text: 'white', title: 'Dark Card Title' },
    ];
    return (
        <>
            <Container className="py-4">
                {/* Heading */}
                <h3 className="text-primary fw-semibold mb-2">Cards</h3>
                <p className="text-secondary mb-4">
                    Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
                </p>

                {/* Subtitle */}
                <h5 className="fw-semibold mb-3">Basic Example</h5>

                {/* Card Preview */}
                <Card
                    className="shadow-sm mb-4"
                    style={{
                        width: '100%',
                        backgroundColor: creamColor,
                        border: `1px solid ${borderColor}`,
                        borderRadius: '0.5rem',
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            backgroundColor: '#e9ecef',
                            borderTopLeftRadius: '0.5rem',
                            borderTopRightRadius: '0.5rem',
                        }}
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Live Editor */}
                <Card className="bg-dark text-white">
                    <Card.Body>
<pre className="mb-0">
<code>{`import Card from 'react-bootstrap/Card';

function BasicCardExample() {
  return (
    <Card
      style={{
        width: '100%',
        backgroundColor: '#fffef5',
        border: '1px solid #e0dccc',
        borderRadius: '0.5rem',
      }}
    >
      <div style={{
        width: '100%',
        height: '180px',
        backgroundColor: '#e9ecef',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem'
      }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCardExample;`}</code>
</pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Content types</h4>
                <h5 className="fw-semibold mb-3">Body</h5>
                <p className="text-secondary mb-4">
                    Use <code>&lt;Card.Body&gt;</code> to pad content inside a <code>&lt;Card&gt;</code>.
                </p>

                {/* Card Preview */}
                <Card
                    className="shadow-sm mb-4"
                    style={{
                        backgroundColor: creamColor,
                        border: `1px solid ${borderColor}`,
                        borderRadius: '0.5rem',
                    }}
                >
                    <Card.Body>
                        This is some text within a card body.
                    </Card.Body>
                </Card>

                {/* Live Editor */}
                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
<code>{`import Card from 'react-bootstrap/Card';

function CardBodyExample() {
  return (
    <Card
      style={{
        backgroundColor: '#fffef5',
        border: '1px solid #e0dccc',
        borderRadius: '0.5rem',
      }}
    >
      <Card.Body>
        This is some text within a card body.
      </Card.Body>
    </Card>
  );
}

export default CardBodyExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Content types</h4>
                <p className="text-secondary mb-4">
                    Alternatively, you can use this shorthand version for cards with body only, and no other children.
                </p>

                {/* Card Preview */}
                <Card
                    body
                    className="shadow-sm mb-4"
                    style={{
                        backgroundColor: creamColor,
                        border: `1px solid ${borderColor}`,
                        borderRadius: '0.5rem',
                    }}
                >
                    This is some text within a card body.
                </Card>

                {/* Live Editor */}
                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
<code>{`import Card from 'react-bootstrap/Card';

function CardBodyShorthandExample() {
  return (
    <Card
      body
      style={{
        backgroundColor: '#fffef5',
        border: '1px solid #e0dccc',
        borderRadius: '0.5rem',
      }}
    >
      This is some text within a card body.
    </Card>
  );
}

export default CardBodyShorthandExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Title, text, and links</h4>
                <p className="text-secondary mb-4">
                    Using <code>&lt;Card.Title&gt;</code>, <code>&lt;Card.Subtitle&gt;</code>, and <code>&lt;Card.Text&gt;</code> inside the <code>&lt;Card.Body&gt;</code> will line them up nicely. <code>&lt;Card.Link&gt;</code>s are used to line up links next to each other.
                </p>

                {/* Card Preview */}
                <Card
                    className="shadow-sm mb-4"
                    style={{
                        backgroundColor: creamColor,
                        border: `1px solid ${borderColor}`,
                        borderRadius: '0.5rem',
                    }}
                >
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                {/* Live Editor */}
                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
<code>{`import Card from 'react-bootstrap/Card';

function CardContentTypesExample() {
  const creamColor = '#fffef5';
  const borderColor = '#e0dccc';

  return (
    <Card style={{
      backgroundColor: creamColor,
      border: \`1px solid \${borderColor}\`,
      borderRadius: '0.5rem'
    }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardContentTypesExample;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">List Groups</h4>
                <p className="text-secondary mb-4">
                    Create lists of content in a card with a <code>flush</code> list group.
                </p>

                {/* Card with ListGroup and styling */}
                <Card
                    className="mb-4 shadow-sm"
                    style={{ backgroundColor: creamColor, border: `1px solid ${borderColor}`, borderRadius: '0.5rem' }}
                >
                    <ListGroup variant="flush">
                        <ListGroup.Item style={{ backgroundColor: creamColor, borderBottom: `1px solid ${borderColor}` }}>
                            Cras justo odio
                        </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: creamColor, borderBottom: `1px solid ${borderColor}` }}>
                            Dapibus ac facilisis in
                        </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: creamColor }}>
                            Vestibulum at eros
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

                {/* Live Editor */}
                <Card className="bg-dark text-white">
                    <Card.Body>
                    <pre className="mb-0">
<code>{`import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardListGroupCreamWithBorder() {
  const creamColor = '#fffef5';
  const borderColor = '#e0dccc';

  return (
    <Card style={{
      backgroundColor: creamColor,
      border: \`1px solid \${borderColor}\`,
      borderRadius: '0.5rem'
    }}>
      <ListGroup variant="flush">
        <ListGroup.Item style={{
          backgroundColor: creamColor,
          borderBottom: \`1px solid \${borderColor}\`
        }}>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item style={{
          backgroundColor: creamColor,
          borderBottom: \`1px solid \${borderColor}\`
        }}>
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: creamColor }}>
          Vestibulum at eros
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardListGroupCreamWithBorder;`}</code>
                    </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Kitchen Sink</h4>
                <p className="text-secondary mb-4">
                    This card example includes an image, card content, a list group, and footer links — all in one component.
                </p>

                {/* Card Preview */}
                <Card
                    className="shadow-sm mb-4"
                    style={{
                        backgroundColor: '#fffef5',
                        border: '1px solid #e0dccc',
                        borderRadius: '0.5rem',
                    }}
                >
                    {/* Image cap */}
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            backgroundColor: '#e9ecef',
                            borderTopLeftRadius: '0.5rem',
                            borderTopRightRadius: '0.5rem',
                        }}
                    />

                    {/* Card body */}
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    {/* List group */}
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>

                    {/* Links in footer */}
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                {/* Live Editor Preview */}
                <Card className="bg-dark text-white">
                    <Card.Body>
<pre className="mb-0"><code>{`import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkCard() {
  return (
    <Card
      style={{
        backgroundColor: '#fffef5',
        border: '1px solid #e0dccc',
        borderRadius: '0.5rem'
      }}
    >
      <div style={{
        width: '100%',
        height: '180px',
        backgroundColor: '#e9ecef',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem'
      }} />
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkCard;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Header and Footer</h4>
                <p className="text-secondary mb-4">
                    You may add a header by adding a <code>&lt;Card.Header&gt;</code> component.
                </p>

                {/* Card Preview */}
                <Card
                    className="shadow-sm mb-4"
                    style={{
                        backgroundColor: '#fffef5',
                        border: '1px solid #e0dccc',
                        borderRadius: '0.5rem',
                    }}
                >
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>

                {/* Live Editor Preview */}
                <Card className="bg-dark text-white">
                    <Card.Body>
          <pre className="mb-0">
<code>{`import Card from 'react-bootstrap/Card';

function HeaderFooterCard() {
  return (
    <Card
      style={{
        backgroundColor: '#fffef5',
        border: '1px solid #e0dccc',
        borderRadius: '0.5rem'
      }}
    >
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default HeaderFooterCard;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Styled Card Header</h4>
                <p className="text-secondary mb-4">
                    A <code>&lt;Card.Header&gt;</code> can be styled by passing a heading element through the <code>as</code> prop.
                </p>

                {/* Card Preview */}
                <Card
                    className="shadow-sm mb-4"
                    style={{
                        backgroundColor: '#fffef5',
                        border: '1px solid #e0dccc',
                        borderRadius: '0.5rem',
                    }}
                >
                    <Card.Header as="h5">Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Live Editor Code */}
                <Card className="bg-dark text-white">
                    <Card.Body>
          <pre className="mb-0">
<code>{`import Card from 'react-bootstrap/Card';

function StyledCardHeader() {
  return (
    <Card
      style={{
        backgroundColor: '#fffef5',
        border: '1px solid #e0dccc',
        borderRadius: '0.5rem'
      }}
    >
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StyledCardHeader;`}</code>
          </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Quote Card</h4>
                <p className="text-secondary mb-4">
                    This card example uses <code>&lt;Card.Header&gt;</code> and <code>&lt;blockquote&gt;</code> to display a stylized quote with attribution.
                </p>

                {/* Card Preview */}
                <Card
                    className="shadow-sm mb-4"
                    style={{
                        backgroundColor: '#fffef5',
                        border: '1px solid #e0dccc',
                        borderRadius: '0.5rem',
                    }}
                >
                    <Card.Header as="h5">Quote</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

                {/* Live Editor Code Preview */}
                <Card className="bg-dark text-white">
                    <Card.Body>
<pre className="mb-0"><code>{`import Card from 'react-bootstrap/Card';

function WithHeaderAndQuoteExample() {
  return (
    <Card
      style={{
        backgroundColor: '#fffef5',
        border: '1px solid #e0dccc',
        borderRadius: '0.5rem'
      }}
    >
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Image caps</h4>
                <p className="text-secondary mb-4">
                    Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.
                </p>

                {/* Card Preview */}
                <Card
                    className="shadow-sm mb-4"
                    style={{
                        backgroundColor: '#fffef5',
                        border: '1px solid #e0dccc',
                        borderRadius: '0.5rem',
                    }}
                >
                    {/* Top image cap */}
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            backgroundColor: '#e9ecef',
                            borderTopLeftRadius: '0.5rem',
                            borderTopRightRadius: '0.5rem',
                        }}
                    />

                    {/* Card Body */}
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>

                    {/* Bottom image cap */}
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            backgroundColor: '#e9ecef',
                            borderBottomLeftRadius: '0.5rem',
                            borderBottomRightRadius: '0.5rem',
                        }}
                    />
                </Card>

                {/* Live Editor Code Preview */}
                <Card className="bg-dark text-white">
                    <Card.Body>
<pre className="mb-0"><code>{`import Card from 'react-bootstrap/Card';

function ImageCapsCard() {
  return (
    <Card
      style={{
        backgroundColor: '#fffef5',
        border: '1px solid #e0dccc',
        borderRadius: '0.5rem'
      }}
    >
      {/* Top image cap */}
      <div style={{
        width: '100%',
        height: '180px',
        backgroundColor: '#e9ecef',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem'
      }} />

      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>

      {/* Bottom image cap */}
      <div style={{
        width: '100%',
        height: '180px',
        backgroundColor: '#e9ecef',
        borderBottomLeftRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem'
      }} />
    </Card>
  );
}

export default ImageCapsCard;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Image Overlays</h4>
                <p className="text-secondary mb-4">
                    Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.
                </p>

                {/* Card Preview */}
                <Card className="text-white shadow-sm mb-4 border-0">
                    <Card.Img
                        src="https://via.placeholder.com/800x270.png?text=100%25+x+270"
                        alt="Card image"
                        style={{
                            height: '270px',
                            objectFit: 'cover',
                            opacity: 0.85,
                        }}
                    />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>
                            <small>Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>

                {/* Live Editor Code Preview */}
                <Card className="bg-dark text-white">
                    <Card.Body>
<pre className="mb-0"><code>{`import Card from 'react-bootstrap/Card';

function ImageOverlayCard() {
  return (
    <Card className="text-white">
      <Card.Img
        src="https://via.placeholder.com/800x270.png?text=100%25+x+270"
        alt="Card image"
        style={{
          height: '270px',
          objectFit: 'cover',
          opacity: 0.85
        }}
      />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>
          <small>Last updated 3 mins ago</small>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageOverlayCard;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Navigation</h4>
                <p className="text-secondary mb-4">
                    Add some navigation to a card’s header (or block) with React Bootstrap’s <code>Nav</code> components.
                </p>

                {/* Card Preview */}
                <Card className="shadow-sm border-0 mb-4">
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#active">
                            <Nav.Item>
                                <Nav.Link href="#active" active>Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Live Editor Code Preview */}
                <Card className="bg-dark text-white">
                    <Card.Body>
<pre className="mb-0"><code>{`import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function CardWithNavHeader() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#active">
          <Nav.Item>
            <Nav.Link href="#active" active>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardWithNavHeader;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Card with Navigation</h4>
                <p className="text-secondary mb-4">
                    Use <code>&lt;Nav&gt;</code> inside <code>&lt;Card.Header&gt;</code> to create navigational tabs or links.
                </p>

                {/* Card Preview */}
                <Card
                    className="shadow-sm mb-4"
                    style={{
                        backgroundColor: '#fffef5',
                        border: '1px solid #e0dccc',
                        borderRadius: '0.5rem',
                    }}
                >
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#active">
                            <Nav.Item>
                                <Nav.Link href="#active" active>
                                    Active
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#disabled" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Live Editor Preview */}
                <Card className="bg-dark text-white">
                    <Card.Body>
<pre className="mb-0"><code>{`import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function CardWithHeaderNav() {
  return (
    <Card
      style={{
        backgroundColor: '#fffef5',
        border: '1px solid #e0dccc',
        borderRadius: '0.5rem',
      }}
    >
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#active">
          <Nav.Item>
            <Nav.Link href="#active" active>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardWithHeaderNav;`}</code>
        </pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Card Styles</h4>
                <p className="text-secondary mb-4">
                    <strong>Background Color</strong><br />
                    You can change a card's appearance by changing their <code>&lt;bg&gt;</code>, and <code>&lt;text&gt;</code> props.
                </p>

                {/* Cards */}
                <div className="row g-4">
                    {cardStyles.map(({ bg, text, title }, idx) => (
                        <div className="col-md-6 col-lg-4" key={idx}>
                            <Card
                                bg={bg}
                                text={text}
                                className="shadow-sm"
                                style={{ borderRadius: '0.5rem' }}
                            >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Live Editor Preview */}
                <Card className="bg-dark text-white mt-5">
                    <Card.Body>
<pre className="mb-0"><code>{`import React from 'react';
import { Card } from 'react-bootstrap';

const cardStyles = [
  { bg: 'primary', text: 'white', title: 'Primary Card Title' },
  { bg: 'secondary', text: 'white', title: 'Secondary Card Title' },
  { bg: 'success', text: 'white', title: 'Success Card Title' },
  { bg: 'danger', text: 'white', title: 'Danger Card Title' },
  { bg: 'warning', text: 'dark', title: 'Warning Card Title' },
  { bg: 'info', text: 'dark', title: 'Info Card Title' },
  { bg: 'light', text: 'dark', title: 'Light Card Title' },
  { bg: 'dark', text: 'white', title: 'Dark Card Title' },
];

function CardStyles() {
  return (
    <div className="row g-4">
      {cardStyles.map(({ bg, text, title }, idx) => (
        <div className="col-md-6 col-lg-4" key={idx}>
          <Card bg={bg} text={text}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardStyles;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Card Borders</h4>
                <p className="text-secondary mb-4">
                    <strong>Border Color</strong><br />
                    Use <code>.border-*</code> utility classes to give cards colored borders.
                </p>

                {/* Cards */}
                <div className="row g-4">
                    {borderCardStyles.map(({ border, title }, idx) => (
                        <div className="col-md-6 col-lg-4" key={idx}>
                            <Card
                                className={`border-${border} shadow-sm`}
                                style={{ borderWidth: '2px', borderRadius: '0.5rem' }}
                            >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Live Editor Preview */}
                <Card className="bg-dark text-white mt-5">
                    <Card.Body>
<pre className="mb-0"><code>{`import React from 'react';
import { Card } from 'react-bootstrap';

const borderCardStyles = [
  { border: 'primary', title: 'Primary Card Title' },
  { border: 'secondary', title: 'Secondary Card Title' },
  { border: 'success', title: 'Success Card Title' },
  { border: 'danger', title: 'Danger Card Title' },
  { border: 'warning', title: 'Warning Card Title' },
  { border: 'info', title: 'Info Card Title' },
  { border: 'dark', title: 'Dark Card Title' },
  { border: 'light', title: 'Light Card Title' },
];

function CardBorderStyles() {
  return (
    <div className="row g-4">
      {borderCardStyles.map(({ border, title }, idx) => (
        <div className="col-md-6 col-lg-4" key={idx}>
          <Card className={\`border-\${border}\`} style={{ borderWidth: '2px' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardBorderStyles;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Card layout</h4>
                <p className="text-secondary mb-4">
                    <strong>Card Groups</strong><br />
                    Use <code>&lt;CardGroup&gt;</code> to render cards with equal height and consistent spacing.
                </p>

                {/* Card Group */}
                <CardGroup className="mb-5">
                    <Card className="border-0 shadow-sm mx-2">
                        <Card.Img variant="top" src="https://via.placeholder.com/600x160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card className="border-0 shadow-sm mx-2">
                        <Card.Img variant="top" src="https://via.placeholder.com/600x160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card className="border-0 shadow-sm mx-2">
                        <Card.Img variant="top" src="https://via.placeholder.com/600x160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>

                {/* Live Editor Preview */}
                <Card className="bg-dark text-white">
                    <Card.Body>
<pre className="mb-0"><code>{`import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

function CardGroupLayout() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/600x160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/600x160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/600x160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardGroupLayout;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                {/* Heading */}
                <h4 className="text-primary fw-semibold mb-3">Grid Cards</h4>
                <p className="text-secondary mb-4">
                    Use <code>&lt;Row&gt;</code>'s grid column props to control how many cards to show per row.
                </p>

                {/* Card Grid */}
                <Row className="g-4">
                    {cardData.map((card, idx) => (
                        <Col key={idx} xs={12} sm={6} lg={3}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={card.image} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Live Editor Preview */}
                <Card className="bg-dark text-white mt-5">
                    <Card.Body>
<pre className="mb-0"><code>{`import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const cardData = [...Array(4)].map(() => ({
  title: 'Card title',
  text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  image: 'https://via.placeholder.com/600x160',
}));

function GridCards() {
  return (
    <Row className="g-4">
      {cardData.map((card, idx) => (
        <Col key={idx} xs={12} sm={6} lg={3}>
          <Card className="h-100">
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridCards;`}</code></pre>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="py-4">
                <h4 className="text-primary mb-4">📘 React-Bootstrap Card API Reference</h4>

                {apiData.map((section, idx) => (
                    <div key={idx} className="mb-5">
                        <h5 className="text-secondary mb-3">{section.component}</h5>
                        <Table striped bordered hover responsive size="sm">
                            <thead className="table-light">
                            <tr>
                                <th>Prop</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {section.props.map((prop, i) => (
                                <tr key={i}>
                                    <td><code>{prop.name}</code></td>
                                    <td><code>{prop.type}</code></td>
                                    <td><code>{prop.default}</code></td>
                                    <td>{prop.description}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                ))}
            </Container>
        </>
    );
}

export default CardDoc;
