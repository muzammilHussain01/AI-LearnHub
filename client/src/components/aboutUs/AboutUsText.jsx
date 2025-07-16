import Container from 'react-bootstrap/Container';

function AboutUsText() {
    return (
        <Container className="py-5">
            <h1 className="mb-4 fw-bold">About Us</h1>

            <h4 className="fw-semibold mb-3">🌱 Why We Exist</h4>
            <p className="text-muted fs-5">
                Artificial Intelligence is reshaping industries, economies, and everyday experiences.
                Yet, quality AI education often remains behind paywalls or inaccessible to many.
                <strong> AI LearnHub </strong> was built to bridge that gap — providing clear, structured,
                and community-supported resources for anyone passionate about AI.
            </p>

            <h4 className="fw-semibold mb-3">🚀 What We Offer</h4>
            <ul className="fs-5 text-muted">
                <li>Beginner-friendly AI &amp; Machine Learning guides</li>
                <li>Hands-on coding projects and AI challenges</li>
                <li>Curated learning paths and video tutorials</li>
                <li>Up-to-date AI tools, libraries, and frameworks</li>
                <li>Ethical AI awareness and best practices</li>
                <li>Community discussions, mentorship, and events</li>
            </ul>

            <h4 className="fw-semibold mb-3">🌍 Our Vision</h4>
            <p className="text-muted fs-5">
                To empower the next generation of AI enthusiasts, developers, and thinkers by providing
                open, collaborative, and impactful AI learning experiences.
            </p>

            <h4 className="fw-semibold mb-3">👥 Join the Community</h4>
            <p className="text-muted fs-5">
                We’re not just a learning platform — we’re a growing community of innovators, learners, and
                AI advocates. Collaborate, share ideas, and build AI projects together.
            </p>

            <h5 className="fw-bold text-primary mt-4">Because together, we build smarter.</h5>
        </Container>
    );
}

export default AboutUsText;
