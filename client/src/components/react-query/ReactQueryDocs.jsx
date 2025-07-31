import React, { useState } from 'react';
import {Row, Col} from "react-bootstrap";

const codeSamples = {
    install: `npm install @tanstack/react-query`,
    provider: `import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>`,
    useQuery: `import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['posts'],
  queryFn: () => fetch('/api/posts').then(res => res.json()),
});`,
    useMutation: `import { useMutation } from '@tanstack/react-query';

const mutation = useMutation({
  mutationFn: (newPost) =>
    fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: { 'Content-Type': 'application/json' },
    }),
});`,
    structure: `src/
├── api/
│   └── queries.js         # Query/mutation functions
├── hooks/
│   └── usePosts.js        # Custom React Query hooks
├── components/
│   └── PostList.js        # UI components consuming query hooks
├── App.js
├── index.js`,
};

const CodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(code);
            } else {
                // Fallback for non-HTTPS
                const textarea = document.createElement("textarea");
                textarea.value = code;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    return (
        <div className="position-relative mb-4">
            <pre className="bg-light border rounded p-3 text-dark overflow-auto" style={{ whiteSpace: 'pre-wrap' }}>
                {code}
            </pre>
            <button
                className="btn btn-sm btn-outline-primary position-absolute top-0 end-0 m-2"
                onClick={handleCopy}
            >
                {copied ? "✅ Copied" : "Copy"}
            </button>
        </div>
    );
};

const ReactQueryDocs = () => {
    return (
        <div className="bg-white p-4 rounded shadow-sm">
            <h2 className="text-primary mb-3">⚛️ React Query Overview</h2>

            <p>
                React Query is a robust library for managing server state in React applications. It simplifies data fetching, caching, synchronization, and updates. By handling loading and error states automatically, it reduces boilerplate code and improves developer productivity. It's ideal for modern apps needing efficient, declarative, and consistent remote data management.
            </p>
            <h6>🔥 Key Features of React Query:</h6>
            <Row>
                <Col>
                    <ul>
                        <li>Automatic Caching: Stores server responses to reduce unnecessary network requests.</li>
                        <li>Background Refetching: Keeps data fresh without user interaction.</li>
                        <li>Built-in Retry Logic: Automatically retries failed queries with customizable settings.</li>
                        <li>Pagination & Infinite Scroll: Simplifies building paginated or scrollable data lists.</li>
                        <li>Devtools Support: Visual debugging tools to inspect query cache and status.</li>
                        <li>Mutation Handling: Handles data updates with useMutation, supporting optimistic updates.</li>
                        <li>Server State Syncing: Ensures UI stays in sync with remote data effortlessly.</li>
                    </ul>
                </Col>
                <Col>
                    <CodeBlock code={codeSamples.install} />
                    <CodeBlock code={codeSamples.structure} />
                </Col>
            </Row>

            <h4 className="text-secondary mt-4">🔧 Setting up Query Client Provider</h4>
            <p>
                Wrap your app with <code>QueryClientProvider</code> and provide a <code>QueryClient</code> instance. To start using React Query, you must create a QueryClient instance and wrap your entire application (or the part that uses queries) with the QueryClientProvider. This enables the React Query context throughout your component tree, allowing all child components to access query and mutation hooks.
            </p>
            <ul>
                <li>All React Query hooks work correctly with shared state and caching.</li>
                <li>The client handles background updates, retries, and cache management globally.</li>
                <li>You can customize the behavior (like stale time, retry count, etc.) by configuring the QueryClient.</li>
            </ul>
            <CodeBlock code={codeSamples.provider} />

            <h4 className="text-secondary mt-4">🔍 Fetching Data using useQuery</h4>
            <p>
                The useQuery hook is the core of React Query’s data-fetching capabilities. It simplifies the process of retrieving remote data by handling caching, refetching, background updates, and synchronization automatically. When you use useQuery, it sends a request to your API, stores the result in a cache, and serves it to any component that needs it.
            </p>
            <h6>React Query ensures:</h6>
            <ul>
                <li>Automatic caching of results per query key.</li>
                <li>Background refetching when the component remounts or regains focus.</li>
                <li>Retry on network failure and stale data management.</li>
                <li>Instant loading states and error handling.</li>
            </ul>
            <p>
                You can also customize behavior using options like staleTime, refetchInterval, and enabled, giving you full control over how and when your data updates. This reduces boilerplate and improves both performance and developer experience.
            </p>
            <CodeBlock code={codeSamples.useQuery} />

            <h4 className="text-secondary mt-4">✍️ Mutating Data using useMutation</h4>
            <p>For POST, PUT, DELETE requests, use the <code>useMutation</code> hook.</p>
            <CodeBlock code={codeSamples.useMutation} />

            <h4 className="text-secondary mt-4">💡 Why Use React Query?</h4>
            <ul>
                <li>Reduces boilerplate code</li>
                <li>Built-in caching and background refetching</li>
                <li>Declarative data fetching</li>
                <li>Auto retry and pagination support</li>
                <li>Works with any API (REST, GraphQL, etc.)</li>
            </ul>

            <p className="mt-4">
                React Query is a must-have for modern React development involving remote data. It improves performance, simplifies code, and boosts user experience.
            </p>
        </div>
    );
};

export default ReactQueryDocs;
