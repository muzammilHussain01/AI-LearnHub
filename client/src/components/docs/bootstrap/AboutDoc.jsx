import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutDoc = () => {
    return (
        <Container >
            <Row>
                <Col lg={10} >
                    <h2 className="mb-3 fw-bold">About React Bootstrap</h2>
                    <p className="text-muted fs-5">
                        React Bootstrap is a complete re-implementation of the Bootstrap components using React. By removing the dependency on jQuery and embracing modern component-based architecture, it provides a seamless development experience aligned with today’s best practices. React Bootstrap lets developers build elegant, consistent, and responsive UIs using reusable components.
                    </p>
                    <p className="text-muted fs-5">
                        Unlike traditional Bootstrap, which relies heavily on jQuery and imperative code, React Bootstrap is fully declarative and leverages the power of React's virtual DOM. This results in cleaner, more maintainable code that's easier to debug, test, and scale across large applications.
                    </p>

                    <Card className="bg-light border-0 shadow-sm my-4">
                        <Card.Body className="p-4">
                            <small className="text-uppercase text-muted">ads via Carbon</small>
                            <p className="mb-1 fs-6 fw-semibold">
                                Build modern applications seamlessly, securely, and flexibly with <a href="https://www.mongodb.com/atlas" target="_blank" rel="noopener noreferrer">MongoDB Atlas</a>. Trusted by thousands of developers worldwide to scale effortlessly and handle production workloads with ease.
                            </p>
                            <small className="text-uppercase text-muted">ads via Carbon</small>
                        </Card.Body>
                    </Card>

                    <h4 className="mt-5 fw-semibold">Philosophy</h4>
                    <p className="text-muted fs-6">
                        At the heart of React Bootstrap is a strong commitment to accessibility, performance, and developer experience. We believe that front-end development should be intuitive and flexible without compromising on design or functionality. By combining Bootstrap’s UI strength with React’s component model, we aim to offer a toolkit that supports both rapid prototyping and enterprise-grade development.
                    </p>

                    <h4 className="mt-4 fw-semibold">Meet the Team</h4>
                    <p className="text-muted fs-6">
                        React Bootstrap is actively maintained by a collaborative group of open-source enthusiasts and experienced software engineers. Many of them are professionals who use the library in real-world projects and care deeply about code quality, user experience, and community feedback. The team works in the open on GitHub and welcomes contributions, big or small.
                    </p>

                    <Card className="bg-white border shadow-sm my-4">
                        <Card.Body className="p-4">
                            <h5 className="fw-semibold">"The team behind React Bootstrap continues to push boundaries, ensuring the library evolves alongside the React ecosystem."</h5>
                            <footer className="blockquote-footer mt-3 text-muted">Open Source Contributor</footer>
                        </Card.Body>
                    </Card>

                    <h4 className="mt-4 fw-semibold">Contributors</h4>
                    <p className="text-muted fs-6">
                        The strength of React Bootstrap lies in its community. Over the years, hundreds of contributors have helped refine the codebase, fix bugs, improve performance, and expand features. Your contributions are what make this project possible. Whether it’s improving documentation, filing bug reports, or proposing new ideas—every bit helps.
                    </p>

                    <h4 className="mt-4 fw-semibold">Get Involved</h4>
                    <p className="text-muted fs-6">
                        Want to be part of something impactful? Join the React Bootstrap community by exploring our issues on GitHub, submitting a pull request, or starting a discussion. We're always on the lookout for people who are passionate about modern UI development and open-source collaboration.
                    </p>
                    <p className="text-muted fs-6">
                        Visit our{' '}
                        <a href="https://github.com/react-bootstrap/react-bootstrap/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-decoration-underline">
                            contributing guidelines
                        </a>{' '}
                        to get started.
                    </p>

                    <h4 className="mt-4 fw-semibold">External Resources</h4>
                    <ul className="text-muted fs-6 ps-3">
                        <li className="mb-1">
                            <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</a> – The original CSS framework that inspired this project.
                        </li>
                        <li className="mb-1">
                            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> – A JavaScript library for building user interfaces.
                        </li>
                        <li className="mb-1">
                            <a href="https://react-bootstrap.github.io/react-router-bootstrap/" target="_blank" rel="noopener noreferrer">React Router Bootstrap</a> – Integration between React Router and Bootstrap components.
                        </li>
                        <li className="mb-1">
                            <a href="https://github.com/react-bootstrap/react-bootstrap#awesome-react-bootstrap-components" target="_blank" rel="noopener noreferrer">Awesome React Bootstrap Components</a> – A curated list of additional resources and libraries.
                        </li>
                        <li className="mb-1">
                            <a href="https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples" target="_blank" rel="noopener noreferrer">React Bootstrap CodeSandbox Examples</a> – Try live demos and experiment instantly.
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutDoc;
