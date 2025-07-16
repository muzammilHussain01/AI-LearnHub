import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUsContent from "./AboutUsContent.jsx";

function AboutUs() {
    return (
        <div className="container-fluid py-5">
            <div className="row align-items-center justify-content-center">
                {/* Left Content */}
                <div className="col-md-6 px-5">
                    <h2 className="fw-bold mb-4">Why AI LearnHub?</h2>
                    <p style={{ fontSize: "1.1rem", color: "#4b5563" }}>
                        AI LearnHub isn’t just another online platform — it’s a community-driven, future-focused space designed for curious minds, developers, and businesses passionate about AI.
                    </p>
                    <ul className="list-unstyled mb-4" style={{ fontSize: "1.05rem", color: "#374151" }}>
                        <li className="mb-3">🚀 <strong>Learn AI from Scratch:</strong> Beginner-friendly courses, tutorials, and projects.</li>
                        <li className="mb-3">📚 <strong>Real-World Projects:</strong> Work on hands-on AI projects, from chatbots to computer vision apps.</li>
                        <li className="mb-3">🌐 <strong>Global Community:</strong> Join AI enthusiasts, professionals, and researchers around the world.</li>
                        <li className="mb-3">💡 <strong>Regular Webinars & Events:</strong> Stay updated with AI trends, ethics, and innovations.</li>
                        <li className="mb-3">🔐 <strong>Responsible AI Learning:</strong> Learn AI with ethics, fairness, and transparency.</li>
                    </ul>
                </div>

                {/* Right Image Block */}
                <div className="col-md-6">
                    <div
                        style={{
                            background: "#3B82F6",
                            borderRadius: "10px",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="AI team working"
                            style={{
                                borderRadius: "8px",
                                maxWidth: "100%",
                                height: "auto",
                                boxShadow: "0 0 10px rgba(0,0,0,0.15)",
                            }}
                        />
                    </div>
                </div>
            </div>
            <AboutUsContent/>
        </div>
    );
}

export default AboutUs;
