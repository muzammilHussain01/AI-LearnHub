import React, { useState } from 'react';
import { Row, Col, Form, Accordion } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';

const BootstrapIconsDoc = () => {
    const [search, setSearch] = useState('');
    const [copied, setCopied] = useState(null);
    const [type, setType] = useState('All');

    const getType = (name) => {
        if (name.includes('Fill')) return 'Filled';
        if (name.includes('Outline') || name.includes('Line')) return 'Outlined';
        return 'Regular';
    };

    const getCategory = (name) => {
        if (name.toLowerCase().includes('arrow')) return 'Arrows';
        if (name.toLowerCase().includes('circle')) return 'Shapes';
        if (name.toLowerCase().includes('heart') || name.toLowerCase().includes('star')) return 'Social';
        if (name.toLowerCase().includes('check') || name.toLowerCase().includes('x')) return 'Status';
        return 'Others';
    };

    const allIcons = Object.entries(Icons).filter(([name]) => {
        const matchSearch = name.toLowerCase().includes(search.toLowerCase());
        const matchType = type === 'All' || getType(name) === type;
        return matchSearch && matchType;
    });

    const categorizedIcons = allIcons.reduce((acc, [name, IconComponent]) => {
        const category = getCategory(name);
        if (!acc[category]) acc[category] = [];
        acc[category].push([name, IconComponent]);
        return acc;
    }, {});

    const handleCopy = async (name) => {
        const iconImport = `import { ${name} } from 'react-bootstrap-icons';\n\n// Usage Example\n<${name} size={24} color=\"#0d6efd\" />`;
        await navigator.clipboard.writeText(iconImport);
        setCopied(name);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="card border-0 shadow-sm bg-white p-4">
            <h2 className="fw-bold text-primary mb-4">🎨Icons</h2>
            <Row className="mb-3 g-2">
                <Col md={8}>
                    <Form.Control
                        type="text"
                        placeholder="Search for an icon..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Col>
                <Col md={4}>
                    <div className="d-flex justify-content-around align-items-center h-100">
                        <Form.Check
                            type="radio"
                            label="All"
                            name="iconType"
                            value="All"
                            checked={type === 'All'}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            label="Regular"
                            name="iconType"
                            value="Regular"
                            checked={type === 'Regular'}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            label="Filled"
                            name="iconType"
                            value="Filled"
                            checked={type === 'Filled'}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            label="Outlined"
                            name="iconType"
                            value="Outlined"
                            checked={type === 'Outlined'}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                </Col>
            </Row>

            <Accordion defaultActiveKey="0">
                {Object.entries(categorizedIcons).map(([category, icons], index) => (
                    <Accordion.Item eventKey={index.toString()} key={category}>
                        <Accordion.Header>{category}</Accordion.Header>
                        <Accordion.Body>
                            <Row className="gy-4">
                                {icons.map(([name, IconComponent], idx) => (
                                    <Col xs={6} sm={4} md={3} lg={2} key={idx} className="text-center">
                                        <div className="border rounded-3 p-3 shadow-sm position-relative h-100 d-flex flex-column justify-content-between">
                                            <div className="mb-3">
                                                <IconComponent size={30} className="text-primary mb-2" />
                                                <div className="small text-muted text-truncate" title={name}>{name}</div>
                                            </div>
                                            <button
                                                className={`btn btn-sm ${copied === name ? 'btn-success' : 'btn-outline-secondary'}`}
                                                onClick={() => handleCopy(name)}
                                            >
                                                {copied === name ? '✅ Copied' : '📋 Copy'}
                                            </button>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <p className="mt-4 text-muted small">
                This list displays all icons available in the <code>react-bootstrap-icons</code> package. Use the radio buttons above to filter icon types such as <strong>Filled</strong>, <strong>Outlined</strong>, and <strong>Regular</strong> to find what suits your design needs.
            </p>
        </div>
    );
};

export default BootstrapIconsDoc;
