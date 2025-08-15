import React, { useState } from 'react';
import { Card, Button, InputGroup, FormControl, Table, Row, Col } from 'react-bootstrap';
import { Clipboard } from 'react-bootstrap-icons';

const ValidatorDocs = () => {
    const [copied, setCopied] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const validatorMethods = [
        { method: 'isEmail(str)', description: 'Checks if the string is a valid email address' },
        { method: 'isURL(str)', description: 'Checks if the string is a valid URL' },
        { method: 'isEmpty(str)', description: 'Checks if the string has a length of zero' },
        { method: 'isLength(str, { min, max })', description: 'Checks if the string’s length falls in a range' },
        { method: 'isNumeric(str)', description: 'Checks if the string contains only numbers' },
        { method: 'equals(str, comparison)', description: 'Checks if the string matches the comparison' },
        { method: 'contains(str, seed)', description: 'Checks if the string contains the seed' },
        { method: 'matches(str, pattern)', description: 'Checks if the string matches a regular expression' },
        { method: 'isAlpha(str)', description: 'Checks if the string contains only letters (a-zA-Z)' },
        { method: 'isAlphanumeric(str)', description: 'Checks if the string contains only letters and numbers' },
        { method: 'isMobilePhone(str)', description: 'Checks if the string is a valid mobile phone number' },
        { method: 'isStrongPassword(str)', description: 'Checks if the string is a strong password' },
        { method: 'isJSON(str)', description: 'Checks if the string is valid JSON' },
        { method: 'isBase64(str)', description: 'Checks if the string is base64 encoded' },
        { method: 'trim(str)', description: 'Removes whitespace from both ends of the string' },
        { method: 'escape(str)', description: 'Escapes HTML entities in a string' },
        { method: 'blacklist(str, chars)', description: 'Removes blacklisted characters from the string' },
        { method: 'isBoolean(str)', description: 'Checks if the string is a boolean ("true" or "false")' },
        { method: 'isCreditCard(str)', description: 'Checks if the string is a valid credit card number' },
        { method: 'isCurrency(str)', description: 'Checks if the string is a valid currency amount' },
        { method: 'isDate(str)', description: 'Checks if the string is a valid ISO 8601 date' },
        { method: 'isDecimal(str)', description: 'Checks if the string is a decimal number' },
        { method: 'isDivisibleBy(str, number)', description: 'Checks if the string is a number divisible by another' },
        { method: 'isFloat(str)', description: 'Checks if the string is a floating point number' },
        { method: 'isIP(str)', description: 'Checks if the string is an IP address (IPv4 or IPv6)' },
        { method: 'isInt(str)', description: 'Checks if the string is an integer' },
        { method: 'isLatLong(str)', description: 'Checks if the string is a valid latitude-longitude coordinate' },
        { method: 'isLowercase(str)', description: 'Checks if the string is lowercase' },
        { method: 'isUppercase(str)', description: 'Checks if the string is uppercase' },
        { method: 'isMACAddress(str)', description: 'Checks if the string is a valid MAC address' },
        { method: 'isMimeType(str)', description: 'Checks if the string is a valid MIME type' },
        { method: 'isPort(str)', description: 'Checks if the string is a valid port number (1-65535)' },
        { method: 'isPostalCode(str, locale)', description: 'Checks if the string is a valid postal code in a given locale' },
        { method: 'isUUID(str)', description: 'Checks if the string is a valid UUID (v1 to v5)' },
        { method: 'normalizeEmail(str)', description: 'Normalizes an email address (lowercases domain, removes dots in Gmail)' },
        { method: 'unescape(str)', description: 'Unescapes HTML entities in a string' },
        { method: 'stripLow(str)', description: 'Removes ASCII control characters (char codes < 32)' }
    ];

    const snippets = {
        install: `npm install validator`,
        usage: `const validator = require('validator');

const email = 'example@email.com';

if (validator.isEmail(email)) {
  console.log('Valid Email');
} else {
  console.log('Invalid Email');
}`
    };

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(text);
            setTimeout(() => setCopied(''), 2000);
        } catch (err) {
            alert('Copy failed!');
        }
    };

    const filteredMethods = validatorMethods.filter(({ method, description }) =>
        method.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-5 px-3 px-md-5">
            <Row>
                <Col>
                    <h6 className="text-primary">🛡️ Validator.js</h6>

                    <p className="text-muted">
                        <code>validator</code> is a robust and widely-used JavaScript library for validating and sanitizing strings. It helps ensure data integrity and security in both Node.js backend applications and frontend forms by handling user input effectively.
                    </p>
                </Col>
                <Col>
                    <section className="mb-5">
                        <h2 className="h5 fw-semibold mb-3">📦 Installation</h2>
                        <pre className="bg-light p-3 border rounded">
{snippets.install}
        </pre>
                    </section>
                </Col>
            </Row>

            <section className="mb-5">
                <h2 className="h5 fw-semibold mb-3">🔰 Basic Usage Example</h2>
                <pre className="bg-light p-3 border rounded">
{snippets.usage}
        </pre>
            </section>

            <section className="mb-5">
                <h2 className="h5 fw-semibold mb-3">📚 Validator Methods</h2>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search methods..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </InputGroup>
                <div className="table-responsive">
                    <Table bordered hover>
                        <thead className="table-light">
                        <tr>
                            <th>Method</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredMethods.map(({ method, description }, index) => (
                            <tr key={index}>
                                <td><code>{method}</code></td>
                                <td>{description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="h5 fw-semibold mb-3">💡 Why Use validator?</h2>
                <ul>
                    <li>Lightweight and dependency-free</li>
                    <li>Fast and easy to use</li>
                    <li>Great for input validation and sanitization</li>
                    <li>Commonly used with Node.js and Express</li>
                    <li>Supports a wide range of validation checks</li>
                </ul>
                <p className="mt-3 text-muted">
                    The <code>validator</code> library makes it simple to build secure and user-friendly forms and APIs. It handles validation logic that would otherwise require writing a lot of repetitive code.
                </p>
            </section>
        </div>
    );
};

export default ValidatorDocs;
