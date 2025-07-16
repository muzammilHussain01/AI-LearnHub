import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TermsOfUse() {
    return (
        <div style={{ background: '#f9fafb', padding: '3rem 0' }}>
            <Container style={{ maxWidth: '950px' }}>
                <h2 className="fw-bold mb-4 text-center" style={{ color: '#111827' }}>
                    📜 Terms of Use for AI LearnHub
                </h2>

                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    Welcome to AI LearnHub! By accessing and using our website, resources, and community
                    features, you agree to abide by these Terms of Use. Please read them carefully before
                    proceeding.
                </p>

                <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Acceptance of Terms</h4>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    By accessing this website and using our services, you accept and agree to be bound by these
                    Terms of Use, our Privacy Policy, and any other policies posted on our platform.
                    If you do not agree with any part of these terms, you should not use our services.
                </p>

                <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 User Responsibilities</h4>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    As a user of AI LearnHub, you agree to:
                </p>
                <ul style={{ color: '#374151' }}>
                    <li>Provide accurate, current, and complete registration information</li>
                    <li>Use the website for lawful purposes only</li>
                    <li>Respect the rights and opinions of other community members</li>
                    <li>Refrain from uploading harmful, abusive, or unauthorized content</li>
                    <li>Not attempt to access or modify the platform's code or data without permission</li>
                </ul>

                <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Intellectual Property</h4>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    All content available on AI LearnHub — including text, graphics, logos, videos, and
                    resources — is the property of AI LearnHub or its content providers. Unauthorized copying,
                    distribution, or use of any materials without written consent is prohibited.
                </p>

                <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Use of Learning Resources</h4>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    Our learning resources are intended for educational and personal growth purposes.
                    You may not use these materials for commercial gain, distribute them publicly,
                    or present them as your own work without appropriate credit.
                </p>

                <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Limitation of Liability</h4>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    AI LearnHub strives to provide accurate, high-quality content but makes no guarantees
                    regarding the completeness, accuracy, or reliability of resources or advice.
                    We are not liable for any direct, indirect, or consequential damages arising from
                    your use of our platform or materials.
                </p>

                <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Account Termination</h4>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    We reserve the right to suspend or terminate your access to our platform without notice if
                    you violate these Terms of Use, harm our community, or misuse our services.
                </p>

                <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Modifications to Terms</h4>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    AI LearnHub may update or modify these Terms of Use at any time. We encourage you to
                    review this page periodically. Continued use of our services following changes signifies
                    your acceptance of the revised terms.
                </p>

                <h4 className="fw-semibold mt-5 mb-3" style={{ color: '#111827' }}>📌 Contact Information</h4>
                <p style={{ color: '#374151', lineHeight: '1.9' }}>
                    If you have any questions about these Terms of Use or your experience with AI LearnHub,
                    please contact us:
                </p>
                <p style={{ color: '#374151' }}>
                    📧 Email: <a href="mailto:support@ailearnhub.com">support@ailearnhub.com</a><br />
                    🌐 Website: <a href="https://www.ailearnhub.com" target="_blank" rel="noopener noreferrer">www.ailearnhub.com</a>
                </p>
            </Container>
        </div>
    );
}

export default TermsOfUse;
