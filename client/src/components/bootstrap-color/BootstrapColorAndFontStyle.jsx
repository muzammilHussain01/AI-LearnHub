import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const BootstrapColorAndFontStyle = () => {
    const themeData = {
        colors: [
            { name: 'primary' }, { name: 'secondary' }, { name: 'success' }, { name: 'danger' },
            { name: 'warning' }, { name: 'info' }, { name: 'light' }, { name: 'dark' }
        ],
        textColors: [
            { class: 'text-primary' }, { class: 'text-secondary' }, { class: 'text-success' }, { class: 'text-danger' },
            { class: 'text-warning' }, { class: 'text-info' }, { class: 'text-light' }, { class: 'text-dark' },
            { class: 'text-muted' }, { class: 'text-white' }
        ],
        backgroundColors: [
            { class: 'bg-primary' }, { class: 'bg-secondary' }, { class: 'bg-success' }, { class: 'bg-danger' },
            { class: 'bg-warning' }, { class: 'bg-info' }, { class: 'bg-light' }, { class: 'bg-dark' },
            { class: 'bg-white' }, { class: 'bg-transparent' }
        ],
        fontStyles: [
            'display-1', 'display-2', 'display-3', 'display-4',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'lead', 'fw-bold', 'fw-semibold', 'fw-medium', 'fw-normal', 'fw-light', 'fw-lighter',
            'fst-italic', 'fst-normal',
            'text-uppercase', 'text-lowercase', 'text-capitalize',
            'text-center', 'text-start', 'text-end'
        ].map(cls => ({ class: cls })),
        fontFamilies: [
            { label: 'Default (Bootstrap)', className: 'fw-normal', style: {} },
            { label: 'Monospace', className: 'fw-normal', style: { fontFamily: 'monospace' } },
            { label: 'Sans-serif', className: 'fw-normal', style: { fontFamily: 'sans-serif' } },
            { label: 'Serif', className: 'fw-normal', style: { fontFamily: 'serif' } },
            { label: 'Cursive', className: 'fw-normal', style: { fontFamily: 'cursive' } },
            { label: 'Fantasy', className: 'fw-normal', style: { fontFamily: 'fantasy' } },
            { label: 'System UI', className: 'fw-normal', style: { fontFamily: 'system-ui' } },
            { label: 'Roboto (Google Font)', className: 'fw-normal', style: { fontFamily: 'Roboto, sans-serif' } },
            { label: 'Open Sans (Google Font)', className: 'fw-normal', style: { fontFamily: 'Open Sans, sans-serif' } },
            { label: 'Lora (Google Font)', className: 'fw-normal', style: { fontFamily: 'Lora, serif' } }
        ]
    };

    return (
        <div className="container py-5 px-3 px-md-4">

            <section className="mb-5">
                <h2 className="h4 text-dark fw-semibold mb-4 border-start border-4 ps-3 border-primary">🎨 Theme Colors</h2>
                <Row className="g-4">
                    {themeData.colors.map(({ name }) => (
                        <Col xs={6} sm={4} md={3} key={name}>
                            <Card bg={name} text={name === 'light' ? 'dark' : 'white'} className="text-center shadow-sm border-0">
                                <Card.Body>
                                    <Card.Text className="text-capitalize small fw-semibold">.{name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-dark fw-semibold mb-4 border-start border-4 ps-3 border-primary">🖋️ Text Colors</h2>
                <Row className="g-4">
                    {themeData.textColors.map(({ class: cls }) => (
                        <Col xs={12} sm={6} md={4} key={cls}>
                            <div className={`p-3 border rounded shadow-sm text-center ${cls}`}>.{cls}</div>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-dark fw-semibold mb-4 border-start border-4 ps-3 border-primary">🧱 Background Colors</h2>
                <Row className="g-4">
                    {themeData.backgroundColors.map(({ class: cls }) => (
                        <Col xs={12} sm={6} md={4} key={cls}>
                            <div className={`p-3 border rounded shadow-sm text-center ${cls} ${cls.includes('light') || cls.includes('white') || cls.includes('transparent') ? 'text-dark' : 'text-white'}`}>.{cls}</div>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-dark fw-semibold mb-4 border-start border-4 ps-3 border-primary">🔤 Font Styles</h2>
                <Row className="g-4">
                    {themeData.fontStyles.map(({ class: style }) => (
                        <Col xs={12} sm={6} md={4} key={style}>
                            <div className={`p-3 border rounded shadow-sm bg-light text-center ${style}`}>.{style}</div>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-dark fw-semibold mb-4 border-start border-4 ps-3 border-primary">🖋️ Font Families</h2>
                <Row className="g-4">
                    {themeData.fontFamilies.map(({ label, className, style }) => (
                        <Col xs={12} sm={6} md={4} key={label}>
                            <div className={`p-3 border rounded shadow-sm bg-white text-center ${className}`} style={style}>
                                {label} — The quick brown fox jumps over the lazy dog
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="border-top pt-4">
                <h2 className="h5 text-dark fw-semibold mb-3 border-start border-4 ps-3 border-primary">💡 How to Use</h2>
                <p className="text-muted small mb-2">
                    Add utility classes directly to HTML or JSX elements. Example:
                </p>
                <pre className="bg-light border rounded p-3 small mb-3">
{`<div className="bg-success text-white fw-bold p-3 rounded">
  Success Message
</div>`}
        </pre>
                <p className="text-muted small mb-3">
                    This produces a green background with white bold text and padding.
                </p>
                <p className="text-muted small mb-2">
                    To apply font families, you can use inline styles or create utility classes. Example:
                </p>
                <pre className="bg-light border rounded p-3 small mb-3">
{`<div style={{ fontFamily: 'monospace' }}>
  This uses a monospace font.
</div>`}
        </pre>
                <p className="text-muted small mb-2">
                    Or define your own class in a stylesheet:
                </p>
                <pre className="bg-light border rounded p-3 small">
{`.font-cursive {
  font-family: cursive;
}

<div className="font-cursive">
  This text is in cursive.
</div>`}
        </pre>
            </section>
        </div>
    );
};

export default BootstrapColorAndFontStyle;
