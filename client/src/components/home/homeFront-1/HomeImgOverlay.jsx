import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { getApi } from "../../helper/helper.js";

const HomeHero = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("getAvailableLibraries");
                setTopics(response.data.data || []);
            } catch (error) {
                setTopics([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);

    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center text-center text-white"
            style={{
                minHeight: "100vh",
                backgroundImage:
                    'url("https://i0.wp.com/bdtechtalks.com/wp-content/uploads/2025/04/cyborg-coding.webp?ssl=1")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                padding: "0 20px",
            }}
        >
            {/* Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: "rgba(17, 24, 39, 0.85)",
                    zIndex: 1,
                }}
            ></div>

            <div className="position-relative z-2">
                {/* Title */}
                <motion.h1
                    className="fw-bold mb-3"
                    style={{ fontSize: "3rem", lineHeight: 1.2 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Build Smart, Modern <br />
                    <span
                        style={{
                            background: "linear-gradient(90deg, #3b82f6, #9333ea, #ec4899)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
            Web Solutions
          </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    className="fs-6 text-light mb-4"
                    style={{ maxWidth: "700px", margin: "0 auto" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Explore modern web development tools, frameworks, and cutting-edge
                    techniques. Build scalable, efficient, and maintainable applications
                    with step-by-step guidance.
                </motion.p>

                {/* Topic Badges */}
                <motion.div
                    className="d-flex flex-wrap justify-content-center gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    {topics.map((t, i) => (
                        <motion.span
                            key={i}
                            whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(0,0,0,0.25)" }}
                            className={`px-3 py-2 rounded-pill shadow-sm ${t.color}`}
                            style={{
                                cursor: "pointer",
                                fontWeight: 500,
                                fontSize: "0.85rem",
                                backdropFilter: "blur(6px)",
                                backgroundColor: "rgba(255,255,255,0.08)",
                            }}
                        >
                            {t.name}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Action Buttons */}
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
                        style={{
                            background: "linear-gradient(90deg, #6366f1, #ec4899)",
                            border: "none",
                            padding: "0.65rem 2rem",
                            borderRadius: "999px",
                            color: "#fff",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Get Started
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
                        style={{
                            background: "transparent",
                            border: "1px solid #fff",
                            padding: "0.65rem 2rem",
                            borderRadius: "999px",
                            color: "#fff",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        View Documentation
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
