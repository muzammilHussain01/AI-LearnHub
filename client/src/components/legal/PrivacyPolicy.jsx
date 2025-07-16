import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PrivacyPolicy() {
    return (
        <div style={{ background: '#f9fafb', padding: '3rem 0' }}>
            <Container style={{ maxWidth: '950px' }}>
                <h2 className="fw-bold mb-4 text-center" style={{ color: '#111827' }}>
                    📄 Privacy Policy Content for AI LearnHub
                </h2>

                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    At AI LearnHub, your privacy is a top priority. This Privacy Policy outlines how we collect, use, protect, and handle your personal information when you visit our website, engage with our learning resources, or participate in our community.
                    <br /><br />
                    By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Information We Collect</h4>
                <p style={{ color: '#374151' }}>
                    We collect both personal and non-personal information when you interact with our platform:
                </p>

                <Row>
                    <Col>
                        <h6 className="fw-semibold" style={{ color: '#111827' }}>Personal Information:</h6>
                        <ul style={{ color: '#374151' }}>
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Profile photo (if using social logins)</li>
                            <li>Account preferences</li>
                            <li>Feedback and inquiries</li>
                        </ul>
                    </Col>
                    <Col>
                        <h6 className="fw-semibold" style={{ color: '#111827' }}>Non-Personal Information:</h6>
                        <ul style={{ color: '#374151' }}>
                            <li>Browser type and version</li>
                            <li>Device type</li>
                            <li>Pages visited and time spent</li>
                            <li>Clickstream data</li>
                            <li>IP address</li>
                        </ul>
                    </Col>
                </Row>

                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    This information helps us enhance your learning experience and improve our services.
                </p>

                <h6 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 How We Use Your Information</h6>
                <p style={{ color: '#374151' }}>We use the information we collect to:</p>
                <ul style={{ color: '#374151' }}>
                    <li>Provide personalized AI learning resources and content</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Respond to your queries, feedback, or support requests</li>
                    <li>Notify you about updates, features, or relevant AI events</li>
                    <li>Monitor usage trends and analytics</li>
                    <li>Maintain a safe, respectful, and secure community environment</li>
                </ul>

                <h6 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Data Protection and Security</h6>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. This includes secure data storage, encryption, and restricted access controls.
                    <br /><br />
                    While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet is 100% secure.
                </p>

                <h6 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Cookies and Tracking Technologies</h6>
                <p style={{ color: '#374151' }}>
                    AI LearnHub uses cookies and similar technologies to:
                </p>
                <ul style={{ color: '#374151' }}>
                    <li>Recognize you on future visits</li>
                    <li>Understand how users engage with our content</li>
                    <li>Deliver customized learning recommendations</li>
                    <li>Monitor site performance</li>
                </ul>
                <p style={{ color: '#374151' }}>You can control cookies through your browser settings.</p>

                <h6 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Third-Party Services</h6>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    We may use trusted third-party services for analytics (like Google Analytics), authentication (like Google OAuth), and community integrations. These providers have their own privacy policies which govern how they handle your data.
                </p>

                <h6 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Your Privacy Rights</h6>
                <p style={{ color: '#374151' }}>As a user, you have the right to:</p>
                <ul style={{ color: '#374151' }}>
                    <li>Access, update, or delete your personal data</li>
                    <li>Opt out of marketing emails and notifications</li>
                    <li>Request information on how your data is used</li>
                </ul>

                <h6 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Changes to This Policy</h6>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    We may update this Privacy Policy from time to time to reflect changes in legal requirements, technology, or our services. All updates will be posted on this page with a revised "Last Updated" date.
                </p>

                <h6 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Contact Us</h6>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    For any questions about this Privacy Policy or your data, please contact us:
                </p>
                <p style={{ color: '#374151' }}>
                    📧 Email: <a href="mailto:support@ailearnhub.com">support@ailearnhub.com</a><br />
                    🌐 Website: <a href="https://www.ailearnhub.com" target="_blank" rel="noopener noreferrer">www.ailearnhub.com</a>
                </p>

            </Container>
        </div>
    );
}

export default PrivacyPolicy;
