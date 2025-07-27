import React from 'react';
import {Routes} from "react-router"
import {motion} from "framer-motion"
import {NavLink, Route} from "react-router-dom";
import BootstrapIntro from "../../docs/bootstrap/BootstrapIntro.jsx";
import AxiosDoc from "../../axios/AxiosDoc.jsx"
import FramerMotion from "../../framer-motion/FramerMotion.jsx"

const HomeImgOverlay = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center text-white"
            style={{
                minHeight: '100vh',
                backgroundImage: 'url("https://i0.wp.com/bdtechtalks.com/wp-content/uploads/2025/04/cyborg-coding.webp?ssl=1")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '2rem',
                position: 'relative',
                zIndex: 1,
            }}
        >
            {/* Dark overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    zIndex: 2,
                }}
            ></div>

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                <div className="row justify-content-center text-center text-md-start">
                    <div className="col-md-10">
                        <motion.h1
                            className="display-3 fw-bold mb-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Learn. Build. Dominate.<br />
                            <span
                                style={{
                                    background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                LearnHub
                            </span>
                        </motion.h1>

                        <motion.p
                            className="lead fs-5 text-light mb-4"
                            style={{ maxWidth: '800px' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            This isn’t just another AI course. It's your command center to explore, experiment, and engineer powerful real-world AI applications — one breakthrough at a time.
                        </motion.p>

                        <motion.div
                            className="text-light fs-5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <div className="d-flex flex-wrap gap-3 mt-4">

                                {/* Bootstrap */}
                                <span
                                    className="text-white fw-semibold px-4 py-2 rounded-pill shadow"
                                    style={{
                                        fontSize: "20px",
                                        fontFamily: "'Segoe UI', sans-serif",
                                        letterSpacing: "1px",
                                        backgroundColor: "#6f42c1", // Bootstrap Purple
                                        border: "2px solid #59329d"
                                    }}
                                >
    BOOTSTRAP
  </span>

                                {/* React */}
                                <span
                                    className="text-dark fw-semibold px-4 py-2 rounded-pill shadow"
                                    style={{
                                        fontSize: "20px",
                                        fontFamily: "'Segoe UI', sans-serif",
                                        letterSpacing: "1px",
                                        backgroundColor: "#61DAFB", // React Cyan
                                        border: "2px solid #3bbfdd"
                                    }}
                                >
    React
  </span>

                                {/* Material-UI */}
                                <span
                                    className="text-white fw-semibold px-4 py-2 rounded-pill shadow"
                                    style={{
                                        fontSize: "20px",
                                        fontFamily: "'Segoe UI', sans-serif",
                                        letterSpacing: "1px",
                                        backgroundColor: "#007FFF", // MUI Blue
                                        border: "2px solid #005fcc"
                                    }}
                                >
    Material-UI
  </span>

                                {/* Framer Motion */}
                                <NavLink to="/framer-motion" style={{textDecoration: "none"}}>
                                <span
                                    className="text-white fw-semibold px-4 py-2 rounded-pill shadow"
                                    style={{
                                        fontSize: "20px",
                                        fontFamily: "'Segoe UI', sans-serif",
                                        letterSpacing: "1px",
                                        backgroundColor: "#e100ff", // Framer Motion Purple
                                        border: "2px solid #b200cc"
                                    }}
                                >
                                    Framer Motion
                                </span>
                                </NavLink>

                                {/* React Router */}
                                <span
                                    className="text-white fw-semibold px-4 py-2 rounded-pill shadow"
                                    style={{
                                        fontSize: "20px",
                                        fontFamily: "'Segoe UI', sans-serif",
                                        letterSpacing: "1px",
                                        backgroundColor: "#CA4245", // React Router Red
                                        border: "2px solid #a73638"
                                    }}
                                >
    React Router
  </span>

                                {/* Redux Toolkit */}
                                <span
                                    className="text-white fw-semibold px-4 py-2 rounded-pill shadow"
                                    style={{
                                        fontSize: "20px",
                                        fontFamily: "'Segoe UI', sans-serif",
                                        letterSpacing: "1px",
                                        backgroundColor: "#764ABC", // Redux Purple
                                        border: "2px solid #5a36a3"
                                    }}
                                >
    Redux Toolkit
  </span>

                                {/* Axios */}

                                <NavLink to="/axios" style={{textDecoration: "none"}}>
                                      <span
                                          className="text-white fw-semibold px-4 py-2 rounded-pill shadow"
                                          style={{
                                              fontSize: "20px",
                                              fontFamily: "'Segoe UI', sans-serif",
                                              letterSpacing: "1px",
                                              backgroundColor: "#5A29E4", // Axios Blue
                                              border: "2px solid #421fbe",
                                              cursor: "pointer",


                                          }}
                                      >
                                        Axios
                                      </span>
                                </NavLink>
                                <Routes>
                                    <Route path="/axios" element={<AxiosDoc />} />
                                </Routes>
                                <Routes>
                                    <Route path="/framer-motion" element={<FramerMotion />} />
                                </Routes>

                                {/* React Query */}
                                <span
                                    className="text-white fw-semibold px-4 py-2 rounded-pill shadow"
                                    style={{
                                        fontSize: "20px",
                                        fontFamily: "'Segoe UI', sans-serif",
                                        letterSpacing: "1px",
                                        backgroundColor: "#FF4154", // React Query Red
                                        border: "2px solid #cc3544"
                                    }}
                                >
    React Query
  </span>

                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeImgOverlay;
