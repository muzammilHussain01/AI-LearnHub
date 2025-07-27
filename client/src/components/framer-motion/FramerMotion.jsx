import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Card, Container, Row, Col, ListGroup, Button, Badge } from 'react-bootstrap';
import { Lightning, Cursor, PlayCircle, Layers, Check2Circle } from 'react-bootstrap-icons';
import { Code2 } from "lucide-react";


export default function FramerMotionDoc() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };
    const animations = [
        {
            title: "Pulse",
            animation: {
                animate: { scale: [1, 1.1, 1] },
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />`,
        },
        {
            title: "Bounce",
            animation: {
                animate: { y: [0, -20, 0] },
                transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 1, repeat: Infinity }} />`,
        },
        {
            title: "Rotate",
            animation: {
                animate: { rotate: [0, 360] },
                transition: { duration: 2, repeat: Infinity, ease: "linear" },
            },
            code: `<motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Fade In-Out",
            animation: {
                animate: { opacity: [0, 1, 0] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Wiggle",
            animation: {
                animate: { rotate: [-5, 5, -5] },
                transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 0.8, repeat: Infinity }} />`,
        },
        {
            title: "Color Cycle",
            animation: {
                animate: { backgroundColor: ["#0d6efd", "#6610f2", "#0d6efd"] },
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ backgroundColor: [...] }} transition={{ duration: 4, repeat: Infinity }} />`,
        },
        {
            title: "Slide Left-Right",
            animation: {
                animate: { x: [-20, 20, -20] },
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ x: [-20, 20, -20] }} transition={{ duration: 1.5, repeat: Infinity }} />`,
        },
        {
            title: "Expand-Contract",
            animation: {
                animate: { scaleX: [1, 1.5, 1] },
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ scaleX: [1, 1.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />`,
        },
        {
            title: "Skew",
            animation: {
                animate: { skewX: [0, 20, -20, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ skewX: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Rotate + Scale",
            animation: {
                animate: { rotate: [0, 360], scale: [1, 1.2, 1] },
                transition: { duration: 3, repeat: Infinity },
            },
            code: `<motion.div animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />`,
        },
        {
            title: "Swing",
            animation: {
                animate: { rotate: [-15, 15, -15] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Zoom In-Out",
            animation: {
                animate: { scale: [1, 1.4, 1] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Heartbeat",
            animation: {
                animate: { scale: [1, 1.3, 1] },
                transition: { duration: 0.6, repeat: Infinity, repeatType: "loop" },
            },
            code: `<motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.6, repeat: Infinity }} />`,
        },
        {
            title: "Glow Pulse",
            animation: {
                animate: { boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px #0d6efd", "0px 0px 0px rgba(0,0,0,0)"] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ boxShadow: [...] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Drag Stretch",
            animation: {
                whileTap: { scale: 0.9 },
                drag: true,
                dragConstraints: { left: -20, right: 20 },
            },
            code: `<motion.div drag dragConstraints={{ left: -20, right: 20 }} whileTap={{ scale: 0.9 }} />`,
        },
        {
            title: "Shake on Hover",
            animation: {
                whileHover: { rotate: [0, -10, 10, -10, 0] },
                transition: { duration: 0.5 },
            },
            code: `<motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }} />`,
        },
        {
            title: "Opacity Blink",
            animation: {
                animate: { opacity: [1, 0.2, 1] },
                transition: { duration: 1, repeat: Infinity },
            },
            code: `<motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />`,
        },
        {
            title: "Jump In",
            animation: {
                initial: { scale: 0, y: 100 },
                animate: { scale: 1, y: 0 },
                transition: { duration: 1 },
            },
            code: `<motion.div initial={{ scale: 0, y: 100 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 1 }} />`,
        },
        {
            title: "Stretch Horizontally",
            animation: {
                animate: { scaleX: [1, 2, 1] },
                transition: { duration: 1.5, repeat: Infinity },
            },
            code: `<motion.div animate={{ scaleX: [1, 2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />`,
        },
        {
            title: "Tilt",
            animation: {
                animate: { rotateX: [0, 20, -20, 0] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ rotateX: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Slide Up",
            animation: {
                animate: { y: [50, 0] },
                transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
            },
            code: `<motion.div animate={{ y: [50, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} />`,
        },
        {
            title: "Flip Y",
            animation: {
                animate: { rotateY: [0, 180, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ rotateY: [0, 180, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Border Radius Pulse",
            animation: {
                animate: { borderRadius: ["0%", "50%", "0%"] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ borderRadius: ["0%", "50%", "0%"] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Flip X",
            animation: {
                animate: { rotateX: [0, 180, 0] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ rotateX: [0, 180, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Shimmer",
            animation: {
                animate: { backgroundPosition: ["0% 50%", "100% 50%"] },
                transition: { duration: 1.5, repeat: Infinity, ease: "linear" },
            },
            code: `<motion.div animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 1.5, repeat: Infinity }} />`,
        },
        {
            title: "Fade Slide Left",
            animation: {
                initial: { opacity: 0, x: 100 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 1 },
            },
            code: `<motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} />`,
        },
        {
            title: "Flip and Zoom",
            animation: {
                animate: { scale: [1, 1.5, 1], rotateY: [0, 180, 0] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ scale: [1, 1.5, 1], rotateY: [0, 180, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Hover Scale + Color",
            animation: {
                whileHover: { scale: 1.2, backgroundColor: "#6610f2" },
            },
            code: `<motion.div whileHover={{ scale: 1.2, backgroundColor: "#6610f2" }} />`,
        },
        {
            title: "Continuous Opacity Slide",
            animation: {
                animate: { x: [-100, 100], opacity: [0, 1, 0] },
                transition: { duration: 3, repeat: Infinity },
            },
            code: `<motion.div animate={{ x: [-100, 100], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} />`,
        },
        {
            title: "Breathe",
            animation: {
                animate: { scale: [1, 1.05, 1] },
                transition: { duration: 4, repeat: Infinity },
            },
            code: `<motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} />`,
        },
        {
            title: "Fade Zoom Rotate",
            animation: {
                animate: { opacity: [1, 0.5, 1], scale: [1, 1.2, 1], rotate: [0, 45, 0] },
                transition: { duration: 3, repeat: Infinity },
            },
            code: `<motion.div animate={{ opacity: [...], scale: [...], rotate: [...] }} transition={{ duration: 3, repeat: Infinity }} />`,
        },
        {
            title: "Slide Diagonal",
            animation: {
                animate: { x: [0, 30, 0], y: [0, 30, 0] },
                transition: { duration: 1.5, repeat: Infinity },
            },
            code: `<motion.div animate={{ x: [0, 30, 0], y: [0, 30, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />`,
        },
        {
            title: "Yoyo Rotate",
            animation: {
                animate: { rotate: [0, 10, -10, 10, 0] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ rotate: [0, 10, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Flip Loop",
            animation: {
                animate: { rotateY: [0, 90, 180, 270, 360] },
                transition: { duration: 4, repeat: Infinity },
            },
            code: `<motion.div animate={{ rotateY: [0, 90, 180, 270, 360] }} transition={{ duration: 4, repeat: Infinity }} />`,
        },
        {
            title: "Pop In",
            animation: {
                initial: { scale: 0.3, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { duration: 0.7 },
            },
            code: `<motion.div initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} />`,
        },
        {
            title: "Breathing Border Radius",
            animation: {
                animate: { borderRadius: ["20%", "50%", "20%"] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ borderRadius: ["20%", "50%", "20%"] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "3D Tilt Loop",
            animation: {
                animate: { rotateX: [0, 15, -15, 0], rotateY: [0, 15, -15, 0] },
                transition: { duration: 4, repeat: Infinity },
            },
            code: `<motion.div animate={{ rotateX: [...], rotateY: [...] }} transition={{ duration: 4, repeat: Infinity }} />`,
        },
        {
            title: "Hover Wiggle",
            animation: {
                whileHover: { rotate: [0, -5, 5, -5, 0] },
                transition: { duration: 0.6 },
            },
            code: `<motion.div whileHover={{ rotate: [0, -5, 5, -5, 0] }} transition={{ duration: 0.6 }} />`,
        },
        {
            title: "Jelly Blob",
            animation: {
                animate: { scaleX: [1, 1.2, 0.8, 1], scaleY: [1, 0.8, 1.2, 1] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ scaleX: [...], scaleY: [...] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Spring Wobble",
            animation: {
                animate: { x: [0, 10, -10, 10, 0] },
                transition: { type: "spring", stiffness: 200, damping: 5, repeat: Infinity },
            },
            code: `<motion.div animate={{ x: [0, 10, -10, 10, 0] }} transition={{ type: "spring", stiffness: 200, damping: 5, repeat: Infinity }} />`,
        },
        {
            title: "Flip",
            animation: {
                animate: { rotateY: [0, 180, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ rotateY: [0, 180, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Slide Up-Down",
            animation: {
                animate: { y: [0, -30, 30, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            },
            code: `<motion.div animate={{ y: [0, -30, 30, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Opacity Flash",
            animation: {
                animate: { opacity: [1, 0, 1] },
                transition: { duration: 0.6, repeat: Infinity },
            },
            code: `<motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.6, repeat: Infinity }} />`,
        },
        {
            title: "Stretch Vertically",
            animation: {
                animate: { scaleY: [1, 1.8, 1] },
                transition: { duration: 1.5, repeat: Infinity },
            },
            code: `<motion.div animate={{ scaleY: [1, 1.8, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />`,
        },
        {
            title: "Slide Diagonally",
            animation: {
                animate: { x: [0, 30, -30, 0], y: [0, -30, 30, 0] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Roll",
            animation: {
                animate: { rotateZ: [0, 360] },
                transition: { duration: 1.2, repeat: Infinity, ease: "linear" },
            },
            code: `<motion.div animate={{ rotateZ: [0, 360] }} transition={{ duration: 1.2, repeat: Infinity }} />`,
        },
        {
            title: "Flip Horizontally",
            animation: {
                animate: { scaleX: [1, -1, 1] },
                transition: { duration: 1.5, repeat: Infinity },
            },
            code: `<motion.div animate={{ scaleX: [1, -1, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />`,
        },
        {
            title: "Flip Vertically",
            animation: {
                animate: { scaleY: [1, -1, 1] },
                transition: { duration: 1.5, repeat: Infinity },
            },
            code: `<motion.div animate={{ scaleY: [1, -1, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />`,
        },
        {
            title: "Stretch and Rotate",
            animation: {
                animate: { scale: [1, 1.3, 1], rotate: [0, 45, -45, 0] },
                transition: { duration: 2.5, repeat: Infinity },
            },
            code: `<motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, 45, -45, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />`,
        },
        {
            title: "Border Radius Morph",
            animation: {
                animate: { borderRadius: ["0%", "50%", "0%"] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ borderRadius: ["0%", "50%", "0%"] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "Skew Y",
            animation: {
                animate: { skewY: [0, 30, -30, 0] },
                transition: { duration: 1.8, repeat: Infinity },
            },
            code: `<motion.div animate={{ skewY: [0, 30, -30, 0] }} transition={{ duration: 1.8, repeat: Infinity }} />`,
        },
        {
            title: "Zoom Rotate Loop",
            animation: {
                animate: { rotate: [0, 180, 360], scale: [1, 1.5, 1] },
                transition: { duration: 2, repeat: Infinity },
            },
            code: `<motion.div animate={{ rotate: [0, 180, 360], scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />`,
        },
        {
            title: "3D Flip",
            animation: {
                animate: { rotateX: [0, 180, 0], rotateY: [0, 180, 0] },
                transition: { duration: 3, repeat: Infinity },
            },
            code: `<motion.div animate={{ rotateX: [0, 180, 0], rotateY: [0, 180, 0] }} transition={{ duration: 3, repeat: Infinity }} />`,
        },
        {
            title: "Pan Zoom",
            animation: {
                animate: { x: [0, 40, -40, 0], y: [0, -40, 40, 0], scale: [1, 1.2, 1] },
                transition: { duration: 3, repeat: Infinity },
            },
            code: `<motion.div animate={{ x: [0, 40, -40, 0], y: [0, -40, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />`,
        },
        {
            title: "Pop & Drop",
            animation: {
                animate: { scale: [1, 1.4, 0.5, 1] },
                transition: { duration: 2.5, repeat: Infinity },
            },
            code: `<motion.div animate={{ scale: [1, 1.4, 0.5, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />`,
        },
        {
            title: "Strobe",
            animation: {
                animate: { backgroundColor: ["#000", "#fff", "#000"] },
                transition: { duration: 0.3, repeat: Infinity },
            },
            code: `<motion.div animate={{ backgroundColor: ["#000", "#fff", "#000"] }} transition={{ duration: 0.3, repeat: Infinity }} />`,
        },
        {
            title: "Ripple",
            animation: {
                animate: { scale: [1, 2, 1], opacity: [1, 0.2, 1] },
                transition: { duration: 1.8, repeat: Infinity },
            },
            code: `<motion.div animate={{ scale: [1, 2, 1], opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />`,
        },
        {
            title: "Hover Pop",
            animation: {
                whileHover: { scale: 1.3 },
                transition: { type: "spring", stiffness: 300 },
            },
            code: `<motion.div whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 300 }} />`,
        },
        {
            title: "Hover Skew",
            animation: {
                whileHover: { skewX: 20 },
                transition: { type: "tween", duration: 0.3 },
            },
            code: `<motion.div whileHover={{ skewX: 20 }} transition={{ type: "tween", duration: 0.3 }} />`,
        },
        {
            title: "Background Shift",
            animation: {
                animate: { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] },
                transition: { duration: 3, repeat: Infinity },
            },
            code: `<motion.div animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }} transition={{ duration: 3, repeat: Infinity }} />`,
        },
    ];
    return (
        <Container >
            <Row className="align-items-center">
                <Col>
                        <h2 className="fw-bold mb-1" style={{ fontSize: '1.8rem' }}>
                            Framer Motion
                        </h2>
                        <div className="mb-2">
                            <Badge bg="secondary" className="me-2">Animation</Badge>
                            <Badge bg="success">React</Badge>
                        </div>
                </Col>
            </Row>
            <Card className="shadow-sm border-0">
                <Card.Body>
                    <h5 className="fw-semibold d-flex align-items-center mb-3">
                        <Lightning className="me-2 text-warning" /> About Framer Motion
                    </h5>
                    <p>
                        <strong>Framer Motion</strong> is a powerful animation library for React, enabling developers to create smooth, realistic, and interactive UI animations with ease. It supports declarative animations, shared layout transitions, gestures, scroll animations, and more.
                    </p>
                    <p>
                        Built on the principles of physics-based motion, Framer Motion offers intuitive APIs for animate, initial, exit, and variants. Whether you're animating modals, page transitions, buttons, or drag interactions — Motion is expressive and easy to integrate.
                    </p>
                </Card.Body>
            </Card>
            <Card className="mb-4">
                <Card.Body>
                    <h5 className="mb-3"><Cursor className="me-2 text-secondary" /> Installation & Usage</h5>
                    <pre className="bg-dark text-white rounded">
                        <Card>
                            <Card.Body>
                               npm install framer-motion <button
                                    onClick={handleCopy}
                                    className="absolute top-1 right-1 text-xs px-2 py-1 bg-blue-500 rounded hover:bg-blue-600"
                                >
                                    {copied ? "Copied!" : "Copy"}
                                </button>
                            </Card.Body>
                        </Card>
          </pre>
                    <p><strong>Basic Usage:</strong></p>
                    <pre className="bg-light p-3 rounded">
            <code>{`import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  Hello Motion
</motion.div>`}</code>
          </pre>
                </Card.Body>
            </Card>
            <Container >
                <Row >
                    <Col>
                        <h2 className="fw-bold">🎬 Framer Motion Animation Showcase</h2>
                        <p className="text-muted">
                            All animations below loop continuously using <strong>Framer Motion</strong>’s <code>animate</code> and <code>transition</code> APIs.
                        </p>
                    </Col>
                </Row>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {animations.map(({ title, animation, code }, idx) => (
                        <Col key={idx}>
                            <Card className="shadow-sm border-0 h-100">
                                <Card.Body className="d-flex flex-column text-center">
                                    <h6>
                                        <Badge bg="primary" className="mb-3">{title}</Badge>
                                    </h6>
                                    <div className="mb-3">
                                        <motion.div
                                            {...animation}
                                            style={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: 12,
                                                background: "#0d6efd",
                                                margin: "auto",
                                            }}
                                        />
                                    </div>
                                    <pre className="bg-light text-start px-3 py-2 rounded small overflow-auto" style={{ maxHeight: 120 }}>
{code}
                </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <h5 className="mb-3"><PlayCircle className="me-2 text-primary" /> Core Features</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item><Check2Circle className="me-2 text-success" /> Declarative Animation API</ListGroup.Item>
                                <ListGroup.Item><Check2Circle className="me-2 text-success" /> Shared Layout Animations</ListGroup.Item>
                                <ListGroup.Item><Check2Circle className="me-2 text-success" /> Gestures (tap, drag, hover)</ListGroup.Item>
                                <ListGroup.Item><Check2Circle className="me-2 text-success" /> Exit Animations for Components</ListGroup.Item>
                                <ListGroup.Item><Check2Circle className="me-2 text-success" /> Orchestration: delay, staggerChildren</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="mb-4 shadow-lg border-0">
                        <Card.Body>
                            <h5 className="mb-4 d-flex align-items-center">
                                <Layers className="me-2 text-primary" size={20} />
                                <span className="fw-bold">10 Powerful Facts About Framer Motion</span>
                            </h5>

                            <div
                                style={{
                                    background: "linear-gradient(135deg, #0d6efd, #6610f2)",
                                    padding: "30px",
                                    borderRadius: "16px",
                                    color: "#fff",
                                    fontSize: "1rem",
                                    lineHeight: 1.7,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                }}
                            >
                                <ul className="mb-0" style={{ paddingLeft: "1.25rem", listStyle:"none" }}>
                                    <li><Badge bg="light" text="dark" className="me-2">1</Badge> Framer Motion is a powerful animation library for React developers.</li>
                                    <li><Badge bg="light" text="dark" className="me-2">2</Badge> It uses simple declarative syntax like <code>{`<motion.div />`}</code>.</li>
                                    <li><Badge bg="light" text="dark" className="me-2">3</Badge> Supports physics-based spring and tween animations.</li>
                                    <li><Badge bg="light" text="dark" className="me-2">4</Badge> Easily animates layout changes with `layout` prop.</li>
                                    <li><Badge bg="light" text="dark" className="me-2">5</Badge> Provides built-in support for gestures like drag, tap, and hover.</li>
                                    <li><Badge bg="light" text="dark" className="me-2">6</Badge> Works seamlessly with variants for clean, reusable animations.</li>
                                    <li><Badge bg="light" text="dark" className="me-2">7</Badge> Animate presence allows smooth enter/exit animations.</li>
                                    <li><Badge bg="light" text="dark" className="me-2">8</Badge> Fully integrates with React state for dynamic effects.</li>
                                    <li><Badge bg="light" text="dark" className="me-2">9</Badge> Enables orchestration and staggering of child elements.</li>
                                    <li><Badge bg="light" text="dark" className="me-2">10</Badge> Open-source and backed by the team at Framer.</li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Card className="shadow-lg border-0">
                <Card.Body>
                    <div
                        style={{
                            padding: "30px",
                            borderRadius: "16px",
                            fontSize: "1rem",
                            lineHeight: 1.75,
                            boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                            backgroundColor: "#fff",
                            color: "#212529",
                        }}
                    >
                        <ul className="mb-4" style={{ paddingLeft: "1.25rem", listStyle:"none" }}>
                            <li>
                                <Badge bg="dark" className="me-2">1</Badge>
                                Use <code>useAnimationControls()</code> to trigger animations conditionally from external state or API responses.
                            </li>
                            <li>
                                <Badge bg="dark" className="me-2">2</Badge>
                                Synchronize multiple UI elements using <code>motionValue</code> with <code>useTransform()</code> for custom linked animations.
                            </li>
                            <li>
                                <Badge bg="dark" className="me-2">3</Badge>
                                Use <code>AnimatePresence</code> + <code>layoutId</code> for seamless route transitions and shared element animations.
                            </li>
                            <li>
                                <Badge bg="dark" className="me-2">4</Badge>
                                Connect motion values to chart libraries (like D3 or Chart.js) for animated data visualizations.
                            </li>
                            <li>
                                <Badge bg="dark" className="me-2">5</Badge>
                                Use <code>usePresence()</code> to animate deeply nested or contextually hidden components with full control.
                            </li>
                            <li>
                                <Badge bg="dark" className="me-2">6</Badge>
                                Integrate Framer Motion with <code>Three.js</code> or shaders for real-time 3D motion-enhanced UIs.
                            </li>
                            <li>
                                <Badge bg="dark" className="me-2">7</Badge>
                                Detect reduced motion preferences with <code>useReducedMotion()</code> and dynamically adjust animation complexity.
                            </li>
                            <li>
                                <Badge bg="dark" className="me-2">8</Badge>
                                Combine <code>scrollYProgress</code> with <code>useTransform()</code> to build animated sticky headers and scroll indicators.
                            </li>
                            <li>
                                <Badge bg="dark" className="me-2">9</Badge>
                                Animate styled-components or Bootstrap-based elements with <code>motion(forwardRef)</code> wrappers.
                            </li>
                            <li>
                                <Badge bg="dark" className="me-2">10</Badge>
                                Use <code>layoutId</code> and hydration-safe transitions for SSR compatibility in Next.js apps.
                            </li>
                        </ul>

                        <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                            These advanced techniques push Framer Motion beyond simple transitions — allowing for fully orchestrated, performant, and context-aware animations in modern React ecosystems.
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}
