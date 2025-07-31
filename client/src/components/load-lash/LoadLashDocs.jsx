import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const lodashMethods = [
    {
        name: 'chunk',
        category: 'Array',
        desc: 'Splits array into chunks of specified size',
        example: `_.chunk(['a', 'b', 'c', 'd'], 2); // => [['a','b'], ['c','d']]`
    },
    {
        name: 'debounce',
        category: 'Function',
        desc: 'Delays invoking a function until after wait ms',
        example: `const debounced = _.debounce(() => alert("Hi"), 300);`
    },
    {
        name: 'cloneDeep',
        category: 'Object',
        desc: 'Deep clones a value',
        example: `const newObj = _.cloneDeep({ a: { b: 2 } });`
    },
    {
        name: 'uniq',
        category: 'Array',
        desc: 'Removes duplicate values from array',
        example: `_.uniq([2, 1, 2]); // => [2, 1]`
    },
    {
        name: 'merge',
        category: 'Object',
        desc: 'Deeply merges objects',
        example: `_.merge({ a: 1 }, { b: 2 }); // => { a: 1, b: 2 }`
    },
    {
        name: 'sortBy',
        category: 'Collection',
        desc: 'Sorts collection by iteratees',
        example: `_.sortBy([1, 5, 3]); // => [1, 3, 5]`
    },
    {
        name: 'get',
        category: 'Object',
        desc: 'Gets value at path of object',
        example: `_.get({ a: { b: 2 } }, 'a.b'); // => 2`
    },
    {
        name: 'isEqual',
        category: 'Lang',
        desc: 'Performs deep comparison between two values',
        example: `_.isEqual({ a: 1 }, { a: 1 }); // => true`
    },
    {
        name: 'camelCase',
        category: 'String',
        desc: 'Converts string to camel case',
        example: `_.camelCase('Foo Bar'); // => 'fooBar'`
    },
    {
        name: 'throttle',
        category: 'Function',
        desc: 'Throttles a function to only run once per ms',
        example: `const throttled = _.throttle(() => alert('Hey!'), 2000);`
    },
];

const LodashDocs = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(key);
            setTimeout(() => setCopied(null), 1500);
        } catch {
            alert('Failed to copy');
        }
    };

    return (
        <div className="container my-4 bg-white p-4 rounded shadow-sm">
            <h2 className="text-primary mb-4">📦 Lodash Documentation</h2>

            <p>
                Lodash is a modern JavaScript utility library delivering modularity, performance & extras. It helps with common tasks
                involving arrays, numbers, objects, strings, etc. Below is a collection of useful Lodash methods with examples.
            </p>

            <h5 className="mt-4">⚙️ Installation</h5>
            <pre className="bg-light p-2 border rounded">npm install lodash</pre>

            <h5 className="mt-4">🚀 Common Methods with Examples</h5>
            <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                    <thead className="table-light">
                    <tr>
                        <th>Method</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Example</th>
                        <th>Copy</th>
                    </tr>
                    </thead>
                    <tbody>
                    {lodashMethods.map((method, idx) => (
                        <tr key={idx}>
                            <td><code>_.{method.name}()</code></td>
                            <td>{method.category}</td>
                            <td>{method.desc}</td>
                            <td>
                                <pre className="bg-light p-2 rounded">{method.example}</pre>
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => handleCopy(method.example, idx)}
                                >
                                    {copied === idx ? 'Copied!' : 'Copy'}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <p className="mt-4">
                Lodash includes <strong>over 300 functions</strong>. Visit the official documentation for a complete list at{' '}
                <a href="https://lodash.com/docs" target="_blank" rel="noopener noreferrer">lodash.com/docs</a>.
            </p>
        </div>
    );
};

export default LodashDocs;
