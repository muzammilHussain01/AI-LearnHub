import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ValidatorDocs = () => {
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
    const [copied, setCopied] = useState('');

    const snippets = {
        install: `npm install validator`,
        usage: `const validator = require('validator');

const email = 'example@email.com';

if (validator.isEmail(email)) {
  console.log('Valid Email');
} else {
  console.log('Invalid Email');
}`,
        methods: `Common Methods:
- isEmail(input)
- isURL(input)
- isEmpty(input)
- isLength(input, { min, max })
- isNumeric(input)
- equals(str, comparison)
- escape(input)
- trim(input)`,
    };

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(text);
            setTimeout(() => setCopied(''), 1500);
        } catch (err) {
            alert('Copy failed!');
        }
    };

    const CodeBlock = ({ title, code }) => (
        <div className="mb-4 position-relative">
            <h6 className="text-secondary">{title}</h6>
            <pre className="bg-light border p-3 rounded overflow-auto">
        <code>{code}</code>
      </pre>
            <button
                className="btn btn-sm btn-outline-primary position-absolute top-0 end-0 m-2"
                onClick={() => handleCopy(code)}
            >
                {copied === code ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );

    return (
        <div className="container bg-white p-4 rounded shadow-sm my-4">
            <h3 className="text-primary mb-3">🔍 Validator Library Overview</h3>
            <p>
                The <strong><code>validator</code></strong> library is a simple and powerful tool for validating and sanitizing strings in JavaScript. It's widely used in both frontend and backend applications to ensure data integrity and prevent invalid inputs.
            </p>

            <CodeBlock title="📦 Installation" code={snippets.install} />

            <CodeBlock title="🧪 Basic Usage Example" code={snippets.usage} />

            <CodeBlock title="📘 Commonly Used Methods" code={snippets.methods} />
            <div className="container bg-white p-4 my-4 rounded shadow-sm">
                <p>
                    The <code>validator</code> library provides a wide range of functions to validate and sanitize strings. Below
                    is a list of commonly used methods with their descriptions.
                </p>

                <div className="table-responsive mt-4">
                    <table className="table table-bordered table-hover align-middle">
                        <thead className="table-light">
                        <tr>
                            <th>Method</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {validatorMethods.map(({ method, description }, index) => (
                            <tr key={index}>
                                <td>
                                    <code>{method}</code>
                                </td>
                                <td>{description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-4">
                    You can import the library using <code>const validator = require('validator')</code> or{' '}
                    <code>import validator from 'validator'</code> and start using these methods for form validation,
                    sanitization, and input verification.
                </p>
            </div>

            <h5 className="mt-4 text-secondary">💡 Why Use validator?</h5>
            <ul>
                <li>Lightweight and dependency-free</li>
                <li>Fast and easy to use</li>
                <li>Great for input validation and sanitization</li>
                <li>Commonly used with Node.js and Express</li>
                <li>Supports a wide range of validation checks</li>
            </ul>

            <p className="mt-3">
                The <code>validator</code> library makes it simple to build secure and user-friendly forms and APIs. It handles validation logic that would otherwise require writing a lot of repetitive code.
            </p>
        </div>
    );
};

export default ValidatorDocs;
