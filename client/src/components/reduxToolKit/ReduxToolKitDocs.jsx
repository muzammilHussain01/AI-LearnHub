import React, { useState } from 'react';
import { Card, Button,Row } from 'react-bootstrap';
import { Code2, ClipboardCopy, Check } from 'lucide-react';
import Col from "react-bootstrap/Col";

const CodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            console.error('Copy failed:', e);
        }
    };

    return (
        <div className="position-relative mb-3">
      <pre className="bg-dark text-light p-3 rounded">
        <code>{code}</code>
      </pre>
            <Button
                variant="light"
                size="sm"
                className="position-absolute top-0 end-0 m-2"
                onClick={handleCopy}
            >
                {copied ? <Check size={16} className="text-success" /> : <ClipboardCopy size={16} />}
            </Button>
        </div>
    );
};

const ReduxToolkitDocs = () => {
    return (
        <Card className="p-4 border-0 shadow-lg">
            <h4 className="mb-3 d-flex align-items-center">
                <Code2 className="me-2 text-danger" size={20} />
                Redux Toolkit Complete Guide
            </h4>

            <section className="mb-4">
                <Row>
                    <Col>
                        <h5>🔍 What is Redux Toolkit?</h5>
                        <p>
                            Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It simplifies
                            store setup, reduces boilerplate, and includes powerful utilities like `createSlice`,
                            `createAsyncThunk`, and `configureStore`.
                        </p>
                        <section className="mb-4">
                            <Row>
                                <Col>
                                    <h5 className="mb-3">⚙️ Installation</h5>
                                    <CodeBlock code={`npm install @reduxjs/toolkit react-redux`} />
                                </Col>
                                <Col>
                                    <h5 className="mb-3">📁 Redux Toolkit Folder Structure</h5>
                                    <pre
                                        style={{
                                            background: '#f0f0f0',
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            fontFamily: 'monospace',
                                            fontSize: '14px',
                                            whiteSpace: 'pre',
                                            overflowX: 'auto',
                                            lineHeight: '1.5'
                                        }}
                                    >
{`src/
├── app/
│   └── store.js              # Configure Redux store
├── features/
│   └── counter/
│       ├── counterSlice.js   # Create slice + reducer
│       └── Counter.js        # React component using the slice
├── App.js
├── index.js`}
    </pre>
                                </Col>
                            </Row>

                        </section>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundImage: "url('/img/redux-toolkit.png')",
                                backgroundSize: 'contain',        // Show full image without cropping
                                backgroundRepeat: 'no-repeat',    // Prevent image from repeating
                                backgroundPosition: 'center',
                                width: "100%",
                                height: "300px",
                                marginTop: "100px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </section>

            <section className="mb-4">
                <h5>📦 Store Setup</h5>
                <p>
                    The Redux store is the central place where your application’s state lives. It's like a single source of truth that holds and manages the data used across your app, ensuring consistency and predictability.
                </p>
                <h6>1. Centralized State Management</h6>
                <p>
                    Without a store, each component manages its own local state. This becomes hard to scale and maintain in larger apps. A store centralizes the state so that any component can access or update it in a controlled way.
                </p>
                <h6>2. Predictable State Updates</h6>
                <p>
                    Redux uses pure reducer functions to determine how the state changes. This predictability makes the app easier to debug, test, and reason about.
                </p>
                <h6>3. Improved Debugging</h6>
                <p>
                    Setting up a store with tools like Redux DevTools allows you to track every action and see how the state changes over time, which helps catch bugs early.
                </p>
                <h6>4. Global Access to Data</h6>
                <p>
                    Components that are deeply nested can access state from the store without relying on prop drilling. This makes your components more reusable and the app structure cleaner.
                </p>
                <h6>5. Supports Complex Use Cases</h6>
                <p>
                    For apps that involve authentication, data fetching, caching, pagination, or real-time updates, a store provides a scalable way to handle this logic in one place.
                </p>
                <h6>6. Built-in Middleware Support</h6>
                <p>
                    With the Redux Toolkit store, you get helpful middleware like redux-thunk by default, allowing you to write async logic (like API calls) directly inside Redux actions.
                </p>
                <CodeBlock
                    code={`// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});`}
                />
            </section>

            <section className="mb-4">
                <h5>🧩 Create a Slice</h5>
                <p>
                    createSlice is a powerful function provided by Redux Toolkit (RTK) that helps you define a piece of Redux state, along with its initial value, reducers (functions to update state), and action creators — all in one place.
                </p>
                <h6>1. Less Boilerplate</h6>
                <p>
                    Traditional Redux requires separate files for actions, action types, and reducers. createSlice combines all these in one.
                </p>
                <h6>2. Automatic Action Creators</h6>
                <p>
                    When you define reducers inside a slice, RTK automatically generates the corresponding action creators for you.
                </p>
                <h6>3. Immutable Updates Made Easy</h6>
                <p>
                    You can write state mutation logic directly inside reducers (e.g., state.count += 1), and RTK uses Immer behind the scenes to ensure immutability.
                </p>
                <h6>4. Improves Code Readability</h6>
                <p>
                    Slicing your state logically (e.g., userSlice, cartSlice, authSlice) keeps related logic organized and easier to maintain.
                </p>
                <h6>What Does a Slice Include?</h6>
                <ul>
                    <li>name: A unique identifier for the slice.</li>
                    <li>initialState: The default value of this slice of state.</li>
                    <li>reducers: Functions that handle state updates.</li>
                    <li>(Optional) extraReducers: For handling external actions like createAsyncThunk.</li>
                </ul>
                <CodeBlock
                    code={`// slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`}
                />
            </section>

            <section className="mb-4">
                <h5>📥 Using in a Component</h5>
                <CodeBlock
                    code={`import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+ Increment</button>
      <button onClick={() => dispatch(decrement())}>- Decrement</button>
    </div>
  );
};

export default Counter;`}
                />
            </section>

            <section className="mb-4">
                <h5>🔁 Async Example with createAsyncThunk</h5>
                <CodeBlock
                    code={`import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { loading: false, users: [], error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;`}
                />
            </section>

            <section className="mb-4">
                <h5>📘 Summary</h5>
                <ul>
                    <li>✅ <code>configureStore</code> replaces legacy <code>createStore</code>.</li>
                    <li>✅ <code>createSlice</code> merges actions + reducers.</li>
                    <li>✅ <code>createAsyncThunk</code> handles async logic.</li>
                    <li>✅ Clean, boilerplate-free Redux logic.</li>
                </ul>
            </section>
        </Card>
    );
};

export default ReduxToolkitDocs;
